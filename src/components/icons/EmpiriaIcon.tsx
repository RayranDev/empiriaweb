import Image from "next/image";
import type { CSSProperties } from "react";

export interface EmpiriaIconProps {
  /** Path to the brand PNG under /public/icons/empiria/. */
  src: string;
  /** Intrinsic width of the source PNG, in pixels (required by next/image). */
  width: number;
  /** Intrinsic height of the source PNG, in pixels (required by next/image). */
  height: number;
  /**
   * Bounding box the icon is scaled to fit inside, aspect ratio preserved.
   * Since the gallery PNGs are not perfectly square, the rendered icon may be
   * narrower or shorter than `size` on one axis — this is expected (object-contain).
   */
  size?: number | string;
  className?: string;
  /** Accessible label. Omit for a purely decorative icon (default: empty alt + aria-hidden). */
  title?: string;
  style?: CSSProperties;
}

/**
 * Renders one of the official Empiria brand icons (PNGs extracted from the icon gallery,
 * public/icons/empiria/<category>/<name>.png). These are fixed-color artwork: do not
 * recolor, redraw, or replace with hand-made SVG or Lucide icons.
 *
 * Not for functional UI glyphs (menu, close, chevrons, arrows) — those stay on lucide-react.
 * Not for monochrome glyphs inside solid-colored buttons (e.g. white WhatsApp icon on a
 * green button) — keep a dedicated *Glyph SVG component for those call sites instead.
 */
export const EmpiriaIcon: React.FC<EmpiriaIconProps> = ({
  src,
  width,
  height,
  size = 24,
  className = "",
  title,
  style,
}) => {
  const boxSize = typeof size === "number" ? `${size}px` : size;

  return (
    <Image
      src={src}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      width={width}
      height={height}
      className={`inline-block shrink-0 object-contain ${className}`}
      style={{
        width: "auto",
        height: "auto",
        maxWidth: boxSize,
        maxHeight: boxSize,
        ...style,
      }}
    />
  );
};
