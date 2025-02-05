import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Portfolio";
  const font = fetch(new URL("../../../public/fonts/Inter.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );
  const fontData = await font;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#151515",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Inter",
        color: "white",
      }}
    >
      <span
        style={{
          fontSize: "8rem",
          lineHeight: "8rem",
          letterSpacing: "-0.05em",
          whiteSpace: "pre-wrap",
          textWrap: "balance",
        }}
      >
        {title}
      </span>
    </div>,
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
