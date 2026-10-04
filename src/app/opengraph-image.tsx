import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { themes } from "../../tailwind.config";
import { yearsOfExperience } from "@/libs/helper";

export const alt = "Reynold Putra, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const read = (...p: string[]) => readFile(path.join(process.cwd(), ...p));
const dataUri = async (file: string, mime: string) =>
  `data:${mime};base64,${(await read("public", "assets", file)).toString("base64")}`;

export default async function Image() {
  const t = themes.light;
  const [portrait, logo, poppinsBold, poppins, monoBold, mono] = await Promise.all([
    dataUri("reynold-portrait.jpg", "image/jpeg"),
    dataUri("logo-256.png", "image/png"),
    read("src", "app", "_og-fonts", "Poppins-Bold.ttf"),
    read("src", "app", "_og-fonts", "Poppins-Regular.ttf"),
    read("src", "app", "_og-fonts", "RobotoMono-Bold.ttf"),
    read("src", "app", "_og-fonts", "RobotoMono-Regular.ttf"),
  ]);
  const monoFamily = "Roboto Mono";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          padding: 72,
          background: t.background,
          color: t.foreground,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 56,
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} width={52} height={52} style={{ borderRadius: 10 }} alt="" />
            <div style={{ fontFamily: monoFamily, fontSize: 22, fontWeight: 700 }}>reynoldputra.com</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: monoFamily, fontSize: 22 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: t.accent }} />
              <div style={{ display: "flex", color: t.muted }}>
                <span style={{ marginRight: 12 }}>Software Engineer ·</span>
                <span style={{ color: t.accent }}>{yearsOfExperience()}+ years of experience</span>
              </div>
            </div>
            <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>Reynold Putra</div>
            <div style={{ fontSize: 30, lineHeight: 1.3 }}>I build web products end to end.</div>
          </div>
          <div style={{ fontFamily: monoFamily, fontSize: 20, color: t.muted }}>Open to freelance and consulting</div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={portrait} width={380} height={380} style={{ borderRadius: 16, objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: poppins, weight: 400, style: "normal" },
        { name: "Poppins", data: poppinsBold, weight: 700, style: "normal" },
        { name: monoFamily, data: mono, weight: 400, style: "normal" },
        { name: monoFamily, data: monoBold, weight: 700, style: "normal" },
      ],
    },
  );
}
