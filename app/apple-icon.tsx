import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#1E3A5F", display: "flex", height: "100%", justifyContent: "center", width: "100%" }}>
      <div style={{ color: "#00B4A6", fontFamily: "sans-serif", fontSize: 76, fontWeight: 800, letterSpacing: -6 }}>CS</div>
    </div>,
    size,
  );
}
