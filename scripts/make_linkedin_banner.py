"""Generate a LinkedIn banner for Serebrum.ai.

Sized 1584×396 (LinkedIn personal/company background — same canvas works
for both contexts; LinkedIn auto-scales for the cover slot).

Design language matches public/og-image.png:
- Black background (#070709) with a subtle emerald radial glow bottom-right
- β mark + "Serebrum" wordmark top-left
- Two-line headline: white + emerald accent on the rebuild phrase
- Emerald-outlined pill bottom-left, mono URL bottom-right
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Canvas
W, H = 1584, 396
PAD = 80

# Colors (RGB tuples)
BG = (7, 7, 9)           # #070709 — matches site bg
WHITE = (245, 245, 245)  # near-white
EMERALD = (94, 234, 212) # #5EEAD4 — teal-300 (matches OG image accent)
MUTED = (130, 130, 130)
EMERALD_DIM = (40, 100, 90)  # for glow tint

# ============================================================
# Build canvas with subtle emerald glow at bottom-right
# ============================================================
img = Image.new("RGB", (W, H), BG)

# Draw a soft glow patch and blur it
glow = Image.new("RGB", (W, H), BG)
gd = ImageDraw.Draw(glow)
# Concentric ellipses for the glow — center off-canvas to bottom-right
cx, cy = int(W * 0.78), int(H * 1.4)
for i, alpha in enumerate(range(100, 0, -10)):
    r = 600 - i * 50
    color = (
        BG[0] + int((EMERALD_DIM[0] - BG[0]) * alpha / 200),
        BG[1] + int((EMERALD_DIM[1] - BG[1]) * alpha / 200),
        BG[2] + int((EMERALD_DIM[2] - BG[2]) * alpha / 200),
    )
    gd.ellipse((cx - r * 2, cy - r, cx + r * 2, cy + r), fill=color)
glow = glow.filter(ImageFilter.GaussianBlur(80))
img = Image.blend(img, glow, 0.55)

draw = ImageDraw.Draw(img)

# ============================================================
# Fonts (with Windows-system fallbacks)
# ============================================================
def load_font(*candidates, size=24):
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except (IOError, OSError):
            continue
    return ImageFont.load_default()

font_brand = load_font(
    "C:/Windows/Fonts/segoeuil.ttf",  # Segoe UI Light
    "C:/Windows/Fonts/segoeui.ttf",
    size=48,
)
font_headline = load_font(
    "C:/Windows/Fonts/segoeui.ttf",
    "C:/Windows/Fonts/arial.ttf",
    size=72,
)
font_pill = load_font(
    "C:/Windows/Fonts/consola.ttf",
    "C:/Windows/Fonts/segoeui.ttf",
    size=20,
)
font_url = load_font(
    "C:/Windows/Fonts/consola.ttf",
    "C:/Windows/Fonts/segoeui.ttf",
    size=22,
)

# ============================================================
# β mark + wordmark — top left
# ============================================================
mark = Image.open(Path("public/serebrum-logo-256.png")).convert("RGBA")
mark_h = 64
mark_w = int(mark.width * mark_h / mark.height)
mark = mark.resize((mark_w, mark_h), Image.LANCZOS)
img.paste(mark, (PAD, PAD - 8), mark)

# Wordmark text aligned with mark center
brand_text = "Serebrum"
b_bbox = draw.textbbox((0, 0), brand_text, font=font_brand)
b_w = b_bbox[2] - b_bbox[0]
b_h = b_bbox[3] - b_bbox[1]
brand_x = PAD + mark_w + 18
brand_y = PAD - 8 + (mark_h - b_h) // 2 - 4
draw.text((brand_x, brand_y), brand_text, fill=WHITE, font=font_brand)

# ============================================================
# Safe zone — LinkedIn profile photo overlaps the bottom-left
# of the banner (~200px circle sitting around x=150, bottom).
# Shift headline + chip into the right portion so the photo
# doesn't cover them.
# ============================================================
CONTENT_X = 600  # everything below the brand starts here

# ============================================================
# Headline — vertically centered, shifted right of photo zone
# ============================================================
line1 = "We don't invest in industries."
line2 = "We rebuild them."

line_h = 90  # leading
total_h = line_h * 2

hy = (H - total_h) // 2 + 8
hx = CONTENT_X

draw.text((hx, hy), line1, fill=WHITE, font=font_headline)
draw.text((hx, hy + line_h), line2, fill=EMERALD, font=font_headline)

# ============================================================
# Pill — under the headline, still right of photo zone
# ============================================================
pill_text = "AI-NATIVE VENTURE STUDIO"
p_bbox = draw.textbbox((0, 0), pill_text, font=font_pill)
p_w = p_bbox[2] - p_bbox[0]
p_h = p_bbox[3] - p_bbox[1]

dot_r = 4
gap = 10
pill_pad_x = 18
pill_pad_y = 10

# Pill height
pill_h = p_h + 2 * pill_pad_y
# Pill total width: dot + gap + text + paddings
inner_w = dot_r * 2 + gap + p_w
pill_w = inner_w + 2 * pill_pad_x

pill_x = CONTENT_X
pill_y = H - PAD - pill_h + 8

draw.rounded_rectangle(
    (pill_x, pill_y, pill_x + pill_w, pill_y + pill_h),
    radius=pill_h // 2,
    outline=EMERALD,
    width=1,
)
# Dot
dot_cx = pill_x + pill_pad_x + dot_r
dot_cy = pill_y + pill_h // 2
draw.ellipse(
    (dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r),
    fill=EMERALD,
)
# Pill text
text_x = dot_cx + dot_r + gap
text_y = pill_y + pill_pad_y - p_bbox[1]
draw.text((text_x, text_y), pill_text, fill=EMERALD, font=font_pill)

# ============================================================
# URL — bottom-right
# ============================================================
url_text = "SEREBRUM.AI"
u_bbox = draw.textbbox((0, 0), url_text, font=font_url)
u_w = u_bbox[2] - u_bbox[0]
u_h = u_bbox[3] - u_bbox[1]
url_x = W - PAD - u_w
url_y = pill_y + pill_pad_y - u_bbox[1]
draw.text((url_x, url_y), url_text, fill=MUTED, font=font_url)

# ============================================================
# Save
# ============================================================
out = Path("public/linkedin-banner.png")
img.save(out, "PNG", quality=95)
print(f"wrote {out} ({W}×{H})")
