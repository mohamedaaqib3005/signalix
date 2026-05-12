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
      path: "./fonts/AeonikProTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const geistMono = localFont({
  src: [
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
      path: "./fonts/GeistMono-Bold.ttf",
      weight: "700",
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