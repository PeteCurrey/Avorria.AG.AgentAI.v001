import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050508",
          borderRadius: "50%",
          border: "2px solid #D6FF3F",
          color: "#D6FF3F",
          fontSize: 18,
          fontWeight: 900,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
