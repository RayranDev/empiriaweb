"""
Icon extraction with smarter background removal.
Instead of a blanket threshold, detect the specific background colors:
- Pure white (#FFFFFF or very near) 
- Card background gray (#F4F3F9 or similar light lavender-gray)
"""
from PIL import Image
import numpy as np
import os

SRC = r"c:\Users\Ivan Rairan\Desktop\PROYECTOS\EMPIRIA_WEB\Galeria iconos.png"
OUT = r"c:\Users\Ivan Rairan\Desktop\PROYECTOS\EMPIRIA_WEB\public\icons\empiria"

img = Image.open(SRC).convert("RGBA")
W, H = img.size
print(f"Source image: {W}x{H}")

# Sample background colors from the image
sample_arr = np.array(img)
# White areas
print(f"Pixel at (10,10): {sample_arr[10,10,:3]}")  # should be white
print(f"Pixel at (50,250): {sample_arr[250,50,:3]}")  # should be card bg
print(f"Pixel at (55,260): {sample_arr[260,55,:3]}")  # inside a card

def remove_bg(crop_img):
    """
    Remove background carefully:
    The background is ~(254,254,254). Icons have pastel fills.
    Only remove pixels where ALL channels > 250.
    """
    a = np.array(crop_img)
    r, g, b = a[:,:,0], a[:,:,1], a[:,:,2]
    
    # Only near-pure white/gray background
    bg_mask = (r > 250) & (g > 250) & (b > 250)
    a[bg_mask, 3] = 0
    
    return Image.fromarray(a)

def trim_transparent(pil_img):
    """Remove transparent border around icon."""
    a = np.array(pil_img)
    alpha = a[:,:,3]
    rows = np.any(alpha > 10, axis=1)
    cols = np.any(alpha > 10, axis=0)
    if not rows.any() or not cols.any():
        return pil_img
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    pad = 4
    rmin = max(0, rmin - pad)
    rmax = min(a.shape[0]-1, rmax + pad)
    cmin = max(0, cmin - pad)
    cmax = min(a.shape[1]-1, cmax + pad)
    return pil_img.crop((cmin, rmin, cmax+1, rmax+1))

def save_icon(x1, y1, x2, y2, category, name):
    crop = img.crop((x1, y1, x2, y2))
    clean = remove_bg(crop)
    trimmed = trim_transparent(clean)
    
    outdir = os.path.join(OUT, category)
    os.makedirs(outdir, exist_ok=True)
    outpath = os.path.join(outdir, f"{name}.png")
    trimmed.save(outpath)
    w, h = trimmed.size
    print(f"  [OK] {category}/{name}.png ({w}x{h})")

# ============================================================
# ROW 1: AREAS DE ATENCION (Y: 235-320)
# ============================================================
print("\n== Areas de atencion ==")
r1y1, r1y2 = 235, 320
save_icon(18, r1y1, 95, r1y2, "areas", "habla")
save_icon(105, r1y1, 185, r1y2, "areas", "lenguaje")
save_icon(198, r1y1, 292, r1y2, "areas", "comunicacion")
save_icon(305, r1y1, 390, r1y2, "areas", "lectoescritura")
save_icon(400, r1y1, 480, r1y2, "areas", "aprendizaje")

# ============================================================
# ROW 1: ETAPAS DE DESARROLLO
# ============================================================
print("\n== Etapas de desarrollo ==")
save_icon(530, r1y1, 615, r1y2, "etapas", "primera-infancia")
save_icon(625, r1y1, 710, r1y2, "etapas", "desarrollo-infantil")
save_icon(720, r1y1, 808, r1y2, "etapas", "etapa-escolar")
save_icon(815, r1y1, 910, r1y2, "etapas", "mayores-10")

# ============================================================
# ROW 1: PROCESO
# ============================================================
print("\n== Proceso ==")
save_icon(950, r1y1, 1035, r1y2, "proceso", "toma-datos")
save_icon(1050, r1y1, 1145, r1y2, "proceso", "reunion-virtual")
save_icon(1155, r1y1, 1250, r1y2, "proceso", "valoracion-presencial")
save_icon(1270, r1y1, 1395, r1y2, "proceso", "intervencion")

# ============================================================
# ROW 2: VALORES (Y: 462-545)
# ============================================================
print("\n== Valores y diferenciales ==")
r2y1, r2y2 = 462, 545
save_icon(18, r2y1, 95, r2y2, "valores", "atencion-personalizada")
save_icon(105, r2y1, 198, r2y2, "valores", "acompanamiento-familia")
save_icon(210, r2y1, 310, r2y2, "valores", "articulacion-colegio")
save_icon(320, r2y1, 415, r2y2, "valores", "enfoque-humano")
save_icon(425, r2y1, 500, r2y2, "valores", "confianza-seguridad")

# ============================================================
# ROW 2: RECURSOS
# ============================================================
print("\n== Recursos y contenido ==")
save_icon(545, r2y1, 622, r2y2, "recursos", "articulos")
save_icon(632, r2y1, 715, r2y2, "recursos", "recursos-educativos")
save_icon(725, r2y1, 795, r2y2, "recursos", "consejos")
save_icon(805, r2y1, 880, r2y2, "recursos", "guias")
save_icon(890, r2y1, 960, r2y2, "recursos", "videos")

# ============================================================
# ROW 2: CONTACTO
# ============================================================
print("\n== Contacto y comunicacion ==")
save_icon(975, r2y1, 1050, r2y2, "contacto", "whatsapp")
save_icon(1060, r2y1, 1130, r2y2, "contacto", "correo")
save_icon(1140, r2y1, 1210, r2y2, "contacto", "telefono")
save_icon(1220, r2y1, 1298, r2y2, "contacto", "ubicacion")
save_icon(1310, r2y1, 1400, r2y2, "contacto", "instagram")

# ============================================================
# ROW 3: PERSONAS (Y: 688-765)
# ============================================================
print("\n== Personas ==")
r3y1, r3y2 = 688, 765
save_icon(18, r3y1, 95, r3y2, "personas", "profesionales")
save_icon(105, r3y1, 200, r3y2, "personas", "nuestro-equipo")
save_icon(215, r3y1, 305, r3y2, "personas", "familia")
save_icon(315, r3y1, 408, r3y2, "personas", "ninos-ninas")
save_icon(418, r3y1, 492, r3y2, "personas", "conversacion")

# ============================================================
# ROW 3: INFORMACION
# ============================================================
print("\n== Informacion y ayuda ==")
save_icon(508, r3y1, 580, r3y2, "informacion", "preguntas-frecuentes")
save_icon(590, r3y1, 660, r3y2, "informacion", "soporte")
save_icon(672, r3y1, 750, r3y2, "informacion", "agendamiento")
save_icon(760, r3y1, 825, r3y2, "informacion", "horarios")
save_icon(840, r3y1, 910, r3y2, "informacion", "informacion")

# ============================================================
# ROW 3: SEGURIDAD
# ============================================================
print("\n== Seguridad y legales ==")
save_icon(940, r3y1, 1015, r3y2, "seguridad", "privacidad")
save_icon(1038, r3y1, 1128, r3y2, "seguridad", "tratamiento-datos")
save_icon(1138, r3y1, 1228, r3y2, "seguridad", "terminos-condiciones")
save_icon(1240, r3y1, 1310, r3y2, "seguridad", "cookies")
save_icon(1320, r3y1, 1395, r3y2, "seguridad", "seguridad")

# ============================================================
# ROW 4: DECORATIVOS (Y: 875-968)
# ============================================================
print("\n== Elementos decorativos ==")
r4y1, r4y2 = 875, 968
save_icon(18, r4y1, 80, r4y2, "decorativos", "corazon")
save_icon(95, r4y1, 148, r4y2, "decorativos", "estrella")
save_icon(160, r4y1, 340, r4y2, "decorativos", "rama-hojas")
save_icon(355, r4y1, 440, r4y2, "decorativos", "flor")
save_icon(455, r4y1, 548, r4y2, "decorativos", "nube")
save_icon(560, r4y1, 638, r4y2, "decorativos", "ovalo")
save_icon(648, r4y1, 725, r4y2, "decorativos", "gota")

print(f"\n[DONE] All icons saved to {OUT}")
