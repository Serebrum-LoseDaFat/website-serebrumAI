"""Make the EXTERIOR white background transparent in fedstat.png.

Naive "all white -> transparent" would erase the flag's white stars and white
stripes too. We flood-fill from the image corners through near-white pixels
and only mark those as transparent. Interior whites (stars, stripes) are
unreachable from the border and stay opaque.
"""

from pathlib import Path
from collections import deque
from PIL import Image
import numpy as np

SRC = Path("public/ventures/fedstat.png")
DST = SRC

img = Image.open(SRC).convert("RGBA")
arr = np.array(img)
H, W, _ = arr.shape

r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]
mn = np.minimum(np.minimum(r, g), b).astype(np.int16)

# A pixel counts as "background-like" if its min channel is high (near-white)
# AND it's not strongly tinted (max-min small). The flag's white stripes are
# typically slightly off-white from JPEG/PNG compression — but so is the bg.
# What separates them is connectivity to the border.
NEAR_WHITE = mn >= 235  # bg threshold; tweak if needed

# BFS from every border pixel that's near-white.
visited = np.zeros((H, W), dtype=bool)
q = deque()

for x in range(W):
    for y in (0, H - 1):
        if NEAR_WHITE[y, x] and not visited[y, x]:
            visited[y, x] = True
            q.append((y, x))
for y in range(H):
    for x in (0, W - 1):
        if NEAR_WHITE[y, x] and not visited[y, x]:
            visited[y, x] = True
            q.append((y, x))

while q:
    y, x = q.popleft()
    for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
        ny, nx = y + dy, x + dx
        if 0 <= ny < H and 0 <= nx < W and not visited[ny, nx] and NEAR_WHITE[ny, nx]:
            visited[ny, nx] = True
            q.append((ny, nx))

# Hard transparency on flood-filled background.
new_alpha = a.copy()
new_alpha[visited] = 0

# Soft edge: pixels adjacent to the cleared region that are still mostly
# white-ish get a partial alpha, to kill the white halo without erasing
# anti-aliased color edges.
from scipy.ndimage import binary_dilation  # type: ignore

try:
    edge = binary_dilation(visited, iterations=1) & ~visited
    # For edge pixels, ramp alpha based on how white they are.
    em = mn[edge]
    # mn=235 -> 0 alpha factor, mn=180 -> 1 alpha factor
    factor = np.clip((235 - em) / (235 - 180), 0.0, 1.0)
    new_alpha[edge] = (a[edge] * factor).astype(np.uint8)
except ImportError:
    pass  # scipy not available; hard edge is acceptable

out = np.stack([r, g, b, new_alpha], axis=-1).astype(np.uint8)
Image.fromarray(out, "RGBA").save(DST, "PNG")
cleared = int(visited.sum())
print(f"wrote {DST} ({W}x{H}); cleared {cleared} bg pixels")
