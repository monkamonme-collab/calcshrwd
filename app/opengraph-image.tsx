import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CalcShrwd — Free Online Calculators";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#F8FAFC", display: "flex", height: "100%", padding: "72px", width: "100%" }}>
      <div style={{ alignItems: "center", background: "#1E3A5F", borderRadius: 32, display: "flex", height: 190, justifyContent: "center", marginRight: 54, width: 190 }}>
        <span style={{ color: "#00B4A6", fontFamily: "sans-serif", fontSize: 82, fontWeight: 800, letterSpacing: -7 }}>CS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ color: "#1E3A5F", display: "flex", fontFamily: "sans-serif", fontSize: 72, fontWeight: 800, letterSpacing: -3 }}>Calc<span style={{ color: "#00B4A6" }}>Shrwd</span></div>
        <div style={{ color: "#475569", fontFamily: "sans-serif", fontSize: 34, marginTop: 22 }}>Free online calculators for everyday life</div>
      </div>
    </div>,
    size,
  );
}
