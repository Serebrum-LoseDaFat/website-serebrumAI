"""Generate FedStat icon assets with a black background.

Outputs Next.js auto-detected files inside the FedStat route folder:
- icon.png             — 512×512 favicon (tab icon)
- apple-icon.png       — 180×180 Apple touch icon
- opengraph-image.png  — 1200×630 social-share image
- twitter-image.png    — 1200×630 (same as og)

Also writes a public-facing square tile for use in pages:
- public/ventures/fedstat-icon.png  — 512×512 square tile (black bg)
"""

from pathlib import Path
from PIL import Image

SRC = Path("public/ventures/fedstat.png")
ROUTE_DIR = Path("app/ventures/fedstat")
PUBLIC_DIR = Path("public/ventures")

assert SRC.exists(), f"Missing {SRC}"

src = Image.open(SRC).convert("RGBA")
# Tight crop to non-transparent content
bbox = src.getbbox()
if bbox:
    src = src.crop(bbox)
print(f"source cropped to {src.size}")


def make_square(size: int, padding_ratio: float = 0.10) -> Image.Image:
    """Centered logo on black square."""
    target = int(size * (1 - 2 * padding_ratio))
    ratio = min(target / src.width, target / src.height)
    new_w = int(src.width * ratio)
    new_h = int(src.height * ratio)
    resized = src.resize((new_w, new_h), Image.LANCZOS)

    bg = Image.new("RGB", (size, size), "#000000")
    x = (size - new_w) // 2
    y = (size - new_h) // 2
    bg.paste(resized, (x, y), resized)
    return bg


def make_og(w: int = 1200, h: int = 630) -> Image.Image:
    """Landscape social-share image with centered logo + subtle frame."""
    bg = Image.new("RGB", (w, h), "#000000")
    # Logo takes ~45% of height with breathing room
    target_h = int(h * 0.55)
    ratio = target_h / src.height
    new_w = int(src.width * ratio)
    new_h = int(src.height * ratio)
    if new_w > w * 0.6:
        # If logo is wider than 60% of canvas, scale by width instead
        ratio = (w * 0.55) / src.width
        new_w = int(src.width * ratio)
        new_h = int(src.height * ratio)
    resized = src.resize((new_w, new_h), Image.LANCZOS)
    bg.paste(resized, ((w - new_w) // 2, (h - new_h) // 2), resized)
    return bg


# Per-route favicon (Next.js auto-detects)
icon = make_square(512, padding_ratio=0.10)
icon.save(ROUTE_DIR / "icon.png", "PNG")
print(f"wrote {ROUTE_DIR / 'icon.png'}")

# Apple touch icon
apple = make_square(180, padding_ratio=0.12)
apple.save(ROUTE_DIR / "apple-icon.png", "PNG")
print(f"wrote {ROUTE_DIR / 'apple-icon.png'}")

# Social share images
og = make_og()
og.save(ROUTE_DIR / "opengraph-image.png", "PNG")
og.save(ROUTE_DIR / "twitter-image.png", "PNG")
print(f"wrote {ROUTE_DIR / 'opengraph-image.png'}")
print(f"wrote {ROUTE_DIR / 'twitter-image.png'}")

# Public tile (for use in pages)
icon.save(PUBLIC_DIR / "fedstat-icon.png", "PNG")
print(f"wrote {PUBLIC_DIR / 'fedstat-icon.png'}")

print("done")
