import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const cabinetGrotesk = localFont({
//   src: [
//     {
//       path: "./fonts/CabinetGrotesk-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/CabinetGrotesk-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./fonts/CabinetGrotesk-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-cabinet-grotesk",
//   display: "swap",
// });

const aeonik = localFont({
  src: [
    {
      path: "./fonts/AeonikPro-Air.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/AeonikPro-AirItalic.otf",
      weight: "100",
      style: "italic",
    },

    {
      path: "./fonts/AeonikPro-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/AeonikPro-ThinItalic.otf",
      weight: "200",
      style: "italic",
    },

    {
      path: "./fonts/AeonikPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/AeonikPro-LightItalic.otf",
      weight: "300",
      style: "italic",
    },

    {
      path: "./fonts/AeonikPro-Regular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "./fonts/AeonikPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AeonikPro-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },

    {
      path: "./fonts/AeonikPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/AeonikPro-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },

    {
      path: "./fonts/AeonikPro-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/AeonikPro-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],

  variable: "--font-aeonik",
  display: "swap",
});
const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },

    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },

    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },

    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },

    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },

    {
      path: "./fonts/Satoshi-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],

  variable: "--font-satoshi",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "./fonts/GeistMono-Thin.ttf",
      weight: "100",
      style: "normal",
    },

    {
      path: "./fonts/GeistMono-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },

    {
      path: "./fonts/GeistMono-Light.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "./fonts/GeistMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "./fonts/GeistMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },

    {
      path: "./fonts/GeistMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },

    {
      path: "./fonts/GeistMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },

    {
      path: "./fonts/GeistMono-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },

    {
      path: "./fonts/GeistMono-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],

  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Signalix",
  description: "Signalix Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${aeonik.variable}
        ${satoshi.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full bg-white font-satoshi text-slate-950">
        {children}
      </body>
    </html>
  );
}