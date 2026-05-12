import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";


type SwatchProps = {
  name: string;
  value: string;
  usage: string;
};

type TokenRowProps = {
  token: string;
  value: string;
  notes: string;
};

type ButtonSpec = {
  token:
  | "button-primary"
  | "button-secondary"
  | "button-accent"
  | "button-link"
  | "button-ghost"
  | "button-neutral-ghost"
  | "badge-success"
  | "badge-neutral"
  | "badge-destructive";
  label: string;
  description: string;
  kind:
  | "primary"
  | "secondary"
  | "accent"
  | "link"
  | "ghost"
  | "neutralGhost"
  | "successBadge"
  | "neutralBadge"
  | "destructiveBadge";
};
const brandSwatches: SwatchProps[] = [
  {
    name: "Primary Indigo",
    value: "#4F46E5",
    usage: "Core brand color, CTAs, active states",
  },
  {
    name: "Royal Indigo",
    value: "#6366F1",
    usage: "Interactive gradients, chart fills, luminous accents",
  },
  {
    name: "Deep Violet",
    value: "#221A35",
    usage: "Premium dark surfaces, depth backgrounds",
  },
  {
    name: "Surface Plum",
    value: "#31265A",
    usage: "Dark mode elevated surfaces and layered gradients",
  },
  {
    name: "Soft Lavender",
    value: "#EBD3F8",
    usage: "Dark mode text highlights and premium emphasis",
  },
  {
    name: "Lavender Glow",
    value: "#D6BCFA",
    usage: "Hover glows, active indicators, ambient highlights",
  },
  {
    name: "Vibrant Orchid",
    value: "#C084FC",
    usage: "Active nav indicators, chips, focus rings",
  },
  {
    name: "Electric Violet",
    value: "#A855F7",
    usage: "Gradient endings, energetic accents, chart highlights",
  },
];
const semanticSwatches: SwatchProps[] = [
  { name: "Success", value: "#14B8A6", usage: "Positive states and confirmations" },
  { name: "Warning", value: "#F59E0B", usage: "Attention and caution" },
  { name: "Error", value: "#EF4444", usage: "Destructive and invalid states" },
];

const tokenRows: TokenRowProps[] = [
  { token: "Background / Light", value: "#F0F6FC", notes: "Soft, cool canvas for light mode" },
  { token: "Surface / White", value: "#FEFFFE", notes: "Cards, panels, modal surfaces" },
  { token: "Background / Dark", value: "#0E091E", notes: "Atmospheric dark mode canvas" },
  { token: "Surface / Dark", value: "#15112B", notes: "Raised panels in dark mode" },
  { token: "Border / Neutral", value: "#E5E7EB", notes: "Fine borders, separators, inputs" },
  { token: "Text / Primary", value: "#0F172A", notes: "Body and heading ink in light mode" },
];

const typeScale: TokenRowProps[] = [
  { token: "headline-display", value: "64px / 700 / -0.03em", notes: "Aeonik Pro" },
  { token: "headline-lg", value: "48px / 700 / -0.03em", notes: "Aeonik Pro" },
  { token: "headline-md", value: "32px / 700 / 0px", notes: "Aeonik Pro" },
  { token: "title-md", value: "23px / 500 / -0.02em", notes: "Satoshi" },
  { token: "body-md", value: "16px / 400 / -0.02em", notes: "Satoshi" },
  { token: "label-md", value: "12px / 400 / 0px", notes: "Satoshi" },
  { token: "data-md", value: "14px / 500 / tabular", notes: "Geist Mono" },
];
const buttons: ButtonSpec[] = [
  {
    token: "button-primary",
    label: "Start now",
    description: "Primary CTA",
    kind: "primary",
  },
  {
    token: "button-secondary",
    label: "Documentation",
    description: "Ghost / outlined",
    kind: "secondary",
  },
  {
    token: "button-on-dark",
    label: "Get started",
    description: "Luminous CTA on dark",
    kind: "accent",
  },
  {
    token: "button-link",
    label: "Explore details",
    description: "Text link",
    kind: "link",
  },
  {
    token: "button-ghost",
    label: "View",
    description: "Text-only ghost",
    kind: "ghost",
  },
  {
    token: "button-neutral-ghost",
    label: "Disabled",
    description: "Neutral ghost",
    kind: "neutralGhost",
  },
  {
    token: "badge-success",
    label: "Active",
    description: "Success badge",
    kind: "successBadge",
  },
  {
    token: "badge-neutral",
    label: "v2024-12",
    description: "Neutral badge",
    kind: "neutralBadge",
  },
  {
    token: "badge-destructive",
    label: "Removed",
    description: "Destructive badge",
    kind: "destructiveBadge",
  },
];


function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[12px] font-medium tracking-[0.08em] text-slate-500 uppercase">{eyebrow}</p>
      <h2
        className="font-cabinet mt-3 text-[32px] font-bold tracking-[-0.03em] text-slate-950 md:text-[48px]"
        style={{ lineHeight: 1.05 }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-slate-600 md:text-[18px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ButtonPreview({
  kind,
  label,
}: {
  kind: ButtonSpec["kind"];
  label: string;
}) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap font-medium transition";

  if (kind === "primary") {
    return (
      <button
        className={`
    ${base}
    group
    relative
    isolate
    h-10
    overflow-hidden
    rounded-full
    bg-[linear-gradient(135deg,#221A35_0%,#4338CA_38%,#6366F1_68%,#A855F7_100%)]
    px-5
    text-[14px]
    font-medium
    tracking-[-0.01em]
    text-white

    shadow-[0_10px_30px_rgba(99,102,241,0.18)]

    transition-[box-shadow]
    duration-500

    hover:shadow-[0_14px_45px_rgba(99,102,241,0.38)]
  `}
      >
        <span className="relative z-20">{label}</span>

        <span
          className="
      pointer-events-none
      absolute inset-0
      z-10
      rounded-full

      bg-[linear-gradient(to_right,#221A35_0%,#4338CA_35%,#5F57FF_65%,#8B5CF6_100%)]

      bg-[length:200%_100%]
      bg-left

      opacity-0

      transition-[opacity,background-position]
      duration-500

      group-hover:opacity-100
      group-hover:bg-right
    "
        />

        <span
          className="
      pointer-events-none
      absolute inset-0
      z-0
      rounded-full

      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_60%)]

      opacity-0
      transition-opacity
      duration-500

      group-hover:opacity-100
    "
        />
      </button>
    );
  } if (kind === "secondary") {
    return (
      <button
        className={`
    ${base}
    group
    relative
    h-10
    overflow-hidden
    rounded-full

    border
    border-[#4F46E5]/30

    bg-white

    px-5

    text-[14px]
    font-medium
    tracking-[-0.01em]

    text-[#4F46E5]

    shadow-[0_1px_2px_rgba(15,23,42,0.04)]

    transition-all
    duration-300

    hover:border-[#6366F1]
    hover:bg-[#F8F7FF]
    hover:text-[#4032C8]

    hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)]
  `}
      >
        <span className="relative z-10">{label}</span>

        <span
          className="
      pointer-events-none
      absolute inset-0
      rounded-full

      bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08)_0%,rgba(99,102,241,0)_70%)]

      opacity-0
      transition-opacity
      duration-300

      group-hover:opacity-100
    "
        />
      </button>
    );
  }
  if (kind === "accent") {
    return (
      <button
        className={`
    ${base}
    group
    relative
    isolate
    h-10
    overflow-hidden
    rounded-full
    px-5

    text-[14px]
    font-medium
    tracking-[-0.01em]

    text-[#FFFFFF]

    bg-[linear-gradient(135deg,#EBD3F8_0%,#C4B5FD_24%,#9EA8FF_48%,#4F46E5_74%,#31265A_92%,#221A35_100%)]

    shadow-[0_10px_30px_rgba(99,102,241,0.18)]

    transition-[box-shadow]
    duration-500

    hover:shadow-[0_14px_45px_rgba(192,132,252,0.38)]
  `}
      >
        <span className="relative z-20">Get started</span>

        <span
          className="
      pointer-events-none
      absolute
      inset-0
      z-10
      rounded-full

      bg-[linear-gradient(to_right,#221A35_0%,#4338CA_35%,#5F57FF_65%,#8B5CF6_100%)]
      text -white
      bg-[length:200%_100%]
      bg-left

      opacity-0

      transition-[opacity,background-position]
      duration-500

      group-hover:opacity-100
      group-hover:bg-right
    "
        />

        <span
          className="
      pointer-events-none
      absolute
      inset-0
      z-0
      rounded-full

      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_60%)]

      opacity-0
      transition-opacity
      duration-500

      group-hover:opacity-100
    "
        />
      </button>
    );
  }
  if (kind === "link") {
    return (<button
      className={`
    ${base}
    group
    relative
    inline-flex
    h-10
    items-center
    rounded-full
    px-1

    text-[14px]
    font-medium
    tracking-[-0.01em]

    text-[#4F46E5]

    transition-colors
    duration-300

    hover:text-[#4032C8]
  `}
    >
      <span className="relative">
        {label}

        <span
          className="
        absolute
        bottom-[-2px]
        left-0
        h-[1px]
        w-0

        bg-[#4032C8]

        transition-all
        duration-300

        group-hover:w-full
      "
        />
      </span>

      <ChevronRight
        className="
      ml-1
      h-4
      w-4

      translate-x-[-4px]
      opacity-0

      transition-all
      duration-300

      group-hover:translate-x-0
      group-hover:opacity-100
    "
      />
    </button>
    );
  }
  if (kind === "ghost") {
    return (
      <button
        className={`${base} h-10 rounded-full px-5 text-[14px] font-medium tracking-[-0.01em] text-slate-950 transition-colors duration-200 hover:bg-slate-100`}
      >
        {label}
      </button>
    );
  }
  if (kind === "neutralGhost") {
    return (
      <button
        className={`${base} h-10 rounded-full bg-[#E7E9F0] px-5 text-[14px] font-medium tracking-[-0.01em] text-[#9CA3AF]`}
      >
        {label}
      </button>
    );
  }

  if (kind === "successBadge") {
    return (
      <span
        className={`${base} rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] text-emerald-700`}
      >
        {label}
      </span>
    );
  }

  if (kind === "neutralBadge") {
    return (
      <span
        className={`${base} rounded-full border border-slate-200 bg-[#F9FAFB] px-3 py-1 text-[11px] text-slate-700`}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={`${base} rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] text-red-700`}
    >
      {label}
    </span>
  );
}
type ElevationSpec = {
  token: string;
  title: string;
  usage: string;
  shadow: string;
  border: string;
};

const elevationScale: ElevationSpec[] = [
  {
    token: "elev-0",
    title: "Flat",
    usage: "Tables and baseline surfaces",
    shadow: "shadow-none",
    border: "border border-slate-200",
  },
  {
    token: "elev-1",
    title: "Raised",
    usage: "Default cards and metric tiles",
    shadow: "shadow-[0_1px_2px_rgba(15,23,42,0.05)]",
    border: "border border-slate-200",
  },
  {
    token: "elev-2",
    title: "Floating",
    usage: "Dropdowns and popovers",
    shadow: "shadow-[0_8px_24px_rgba(15,23,42,0.08)]",
    border: "border border-slate-200",
  },
  {
    token: "elev-3",
    title: "Modal",
    usage: "Dialogs and top-layer panels",
    shadow: "shadow-[0_16px_40px_rgba(15,23,42,0.12)]",
    border: "border border-slate-200",
  },
  {
    token: "elev-focus",
    title: "Focused",
    usage: "Selected cards and active surfaces",
    shadow: "shadow-[0_0_0_3px_rgba(79,70,229,0.10)]",
    border: "border border-[#4F46E5]",
  },
];
function ButtonCard({ token, label, description, kind }: ButtonSpec) {
  return (
    <div className="flex min-h-[190px] flex-col rounded-[10px] border border-slate-200 bg-white p-5">
      <div className="flex h-[92px] items-center justify-start">
        <ButtonPreview kind={kind} label={label} />
      </div>

      <div className="text-[14px] font-semibold tracking-[-0.02em] text-slate-950">
        {token}
      </div>

      <p className="mt-2 max-w-[180px] text-[13px] leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function Swatch({ name, value, usage }: SwatchProps) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-white p-4">
      <div className="h-24 rounded-[8px] border border-black/5" style={{ background: value }} />
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <div className="text-[14px] font-medium tracking-[-0.02em] text-slate-950">{name}</div>
          <div className="mt-1 font-mono text-[11px] text-slate-500">{value}</div>
        </div>
      </div>
      <p className="mt-2 text-[12px] leading-5 text-slate-500">{usage}</p>
    </div>
  );
}

function SurfaceCard({ name, value, usage, dark = false }: SwatchProps & { dark?: boolean }) {
  const textClass = dark ? "text-white" : "text-slate-950";
  const mutedClass = dark ? "text-white/65" : "text-slate-500";
  const borderClass = dark ? "border-white/10" : "border-slate-200";
  const innerBorder = dark ? "border-white/5" : "border-black/5";

  return (
    <div className={`rounded-[10px] border ${borderClass} p-4`} style={{ background: value }}>
      <div className={`h-24 rounded-[8px] border ${innerBorder}`} />
      <div className={`mt-4 text-[14px] font-medium tracking-[-0.02em] ${textClass}`}>{name}</div>
      <div className={`mt-1 font-mono text-[11px] ${mutedClass}`}>{value}</div>
      <p className={`mt-2 text-[12px] leading-5 ${mutedClass}`}>{usage}</p>
    </div>
  );
}

function TypographyRow({ token, value, notes }: TokenRowProps) {
  const sampleMap: Record<string, string> = {
    "headline-display": "Signalix",
    "headline-lg": "Measure. Attribute. Scale.",
    "headline-md": "Attribution Overview",
    "headline-sm": "Modern conference discovery",
    "title-md": "Conversion Signals",
    "title-sm": "Trusted by modern teams",
    "body-lg": "Signalix is a modern AI-powered event platform built for clarity and scale.",
    "body-md": "Signalix combines structured layouts, clean visuals, and thoughtful interactions.",
    "body-sm": "Clear, minimal, and easy to scan.",
    "label-lg": "EVENT DETAILS",
    "label-md": "Filters",
    "label-sm": "Live",
    "data-md": "$48,392.21",
  };

  const sampleFontClass =
    token.startsWith("headline")
      ? "font-cabinet"
      : token.startsWith("data")
        ? "font-mono"
        : "font-satoshi";

  const style: React.CSSProperties = {
    fontVariantNumeric: token === "data-md" ? "tabular-nums" : "normal",
    letterSpacing:
      token === "headline-display" || token === "headline-lg"
        ? "-0.03em"
        : token === "title-md"
          ? "-0.02em"
          : "0",
    lineHeight:
      token === "headline-display"
        ? 1.02
        : token === "headline-lg"
          ? 1.05
          : token === "headline-md"
            ? 1.15
            : token === "title-md"
              ? 1.22
              : token === "body-md"
                ? 1.6
                : token === "data-md"
                  ? 1.2
                  : 1.2,
    fontWeight: token === "title-md" ? 500 : token === "body-md" || token === "label-md" ? 400 : 700,
    fontSize:
      token === "headline-display"
        ? 64
        : token === "headline-lg"
          ? 48
          : token === "headline-md"
            ? 32
            : token === "title-md"
              ? 23
              : token === "body-md"
                ? 16
                : token === "label-md"
                  ? 12
                  : 14,
  };

  return (
    <div className="grid gap-6 px-5 py-6 lg:grid-cols-[240px_1fr] lg:items-center">
      <div>
        <div className="text-[13px] font-medium tracking-[-0.01em] text-slate-950">{token}</div>
        <div className="mt-1 text-[11px] text-slate-500">{value}</div>
        <div className="mt-1 text-[11px] text-slate-500">{notes}</div>
      </div>

      <div className={`text-slate-950 ${sampleFontClass}`} style={style}>
        {sampleMap[token]}
      </div>
    </div>
  );
}

const familyMap: Record<string, string> = {
  "headline-display": "Aeonik Pro, sans-serif",
  "headline-lg": "Aeonik Pro, sans-serif",
  "headline-md": "Aeonik Pro, sans-serif",
  "headline-sm": "Aeonik Pro, sans-serif",

  "title-md": "Satoshi, sans-serif",
  "title-sm": "Satoshi, sans-serif",

  "body-lg": "Satoshi, sans-serif",
  "body-md": "Satoshi, sans-serif",
  "body-sm": "Satoshi, sans-serif",

  "label-lg": "Satoshi, sans-serif",
  "label-md": "Satoshi, sans-serif",
  "label-sm": "Satoshi, sans-serif",

  "data-md": "Geist Mono, monospace",
};


const spacingScale = [
  { token: "xs", value: 6, label: "6px", usage: "Fine adjustments" },
  { token: "sm", value: 20, label: "20px", usage: "Common component spacing" },
  { token: "md", value: 32, label: "32px", usage: "Section rhythm" },
  { token: "lg", value: 60, label: "60px", usage: "Large content separation" },
  { token: "xl", value: 100, label: "100px", usage: "Page-level breathing room" },
];

const radiusScale = [
  { token: "none", value: 0, label: "0px", usage: "Sharp surfaces" },
  { token: "sm", value: 4, label: "4px", usage: " Inputs" },
  { token: "md", value: 8, label: "8px", usage: "Standard cards" },
  { token: "lg", value: 10, label: "10px", usage: "Primary containers" },
  { token: "xl", value: 16, label: "16px", usage: "Soft panels" },
  { token: "full", value: 9999, label: "9999px", usage: "Buttons and badges" },
];
function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-white text-slate-950">{children}</main>;
}

export default function StyleGuidePage() {
  return (
    <PageShell>
      <div className="sticky top-4 z-50 px-4  lg:px-6">
        <div
          className="mx-auto max-w-[1600px] overflow-hidden rounded-[34px] border border-white/70 px-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          style={{
            background:
              "radial-gradient(circle at 12% 50%, rgba(255,182,193,0.18) 0%, rgba(255,182,193,0) 22%), radial-gradient(circle at 34% 50%, rgba(196,181,253,0.18) 0%, rgba(196,181,253,0) 24%), radial-gradient(circle at 66% 50%, rgba(187,247,208,0.14) 0%, rgba(187,247,208,0) 24%), radial-gradient(circle at 88% 50%, rgba(254,240,138,0.10) 0%, rgba(254,240,138,0) 22%), rgba(255,255,255,0.82)",
          }}
        >
          <div className="flex w-full items-center gap-6">

            <div className="relative h-[78px] w-[200px] shrink-0">
              <Image
                src="/Signalixupdated-removebg-preview.png"
                alt="Signalix logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="ml-auto hidden items-center gap-2 md:flex">
              <a
                className="rounded-[8px] px-3 py-2 text-[12px] font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                href="#colors"
              >
                Colors
              </a>
              <a
                className="rounded-[8px] px-3 py-2 text-[12px] font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                href="#colors"
              >
                Typography
              </a>
              <a
                className="rounded-[8px] px-3 py-2 text-[12px] font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                href="#colors"
              >
                Spacing
              </a>
              <a
                className="rounded-[8px] px-3 py-2 text-[12px] font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                href="#colors"
              >
                Radius
              </a>
              <a
                className="rounded-[8px] px-3 py-2 text-[12px] font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                href="#colors"
              >
                Components
              </a>
            </div>
          </div>
        </div>

      </div>


      <div className="mx-auto max-w-[1180px] px-6 lg:px-8 ">

        <section className="md:py-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>

              <h1
                className=" font-cabinet max-w-4xl text-[48px] font-bold tracking-[-0.03em] text-slate-950 md:text-[64px]"
                style={{ lineHeight: 1.02 }}
              >
                Design System of Signalix              </h1>

              <p className="font-satoshi mt-6 max-w-2xl text-[16px] leading-[1.6] text-slate-600 md:text-[18px]">
                Signalix is a modern AI-powered event platform built with a clean, minimal, and structured design approach. With refined typography, consistent spacing, and thoughtful interactions, Signalix creates intuitive and scalable user experiences. Our focus is on simplicity, usability, performance, and accessibility — delivering interfaces that feel elegant, seamless, and easy to use across every touchpoint.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonPreview label="Primary CTA" kind="primary" />
                <ButtonPreview label="Secondary CTA" kind="secondary" />
                <ButtonPreview label="Learn more" kind="link" />
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  ["Whitespace-first", "Large gaps, restrained density"],
                  ["High contrast", "Dark ink on white surfaces"],
                  ["Compact actions", "Small 40px controls"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-[10px] border border-slate-200 bg-white p-4">
                    <div className="text-[13px] font-medium text-slate-950">{title}</div>
                    <p className="mt-2 text-[12px] leading-5 text-slate-500">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[10px] border border-slate-200 bg-white p-4 md:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-[12px] font-medium text-slate-500">Theme preview</p>
                  <h2
                    className="font-satoshi mt-1 text-[23px] font-medium tracking-[-0.02em] text-slate-950"
                    style={{ lineHeight: 1.22 }}
                  >
                    Light and dark foundations
                  </h2>
                </div>
                <div className="rounded-full bg-[#F9FAFB] px-3 py-1 text-[11px] text-slate-500">v1</div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-[8px] border border-slate-200 bg-[#0E091E] p-4 text-white">
                  <div className="text-[11px] text-white/60">Dark canvas</div>
                  <div className="mt-2 text-[18px] font-semibold tracking-[-0.02em]">#0E091E</div>
                  <div className="mt-4 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#4F46E5]" />
                    <span className="h-3 w-3 rounded-full bg-[#C084FC]" />
                    <span className="h-3 w-3 rounded-full bg-[#D6BCFA]" />
                  </div>
                </div>

                <div className="rounded-[8px] border border-slate-200 bg-[#F0F6FC] p-4">
                  <div className="text-[11px] text-slate-500">Light canvas</div>
                  <div className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-slate-950">#F0F6FC</div>
                  <div className="mt-4 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#4F46E5]" />
                    <span className="h-3 w-3 rounded-full bg-[#6366F1]" />
                    <span className="h-3 w-3 rounded-full bg-[#31265A]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="colors" className="py-16 md:py-20">
          <SectionTitle
            eyebrow="Color system"
            title="Core brand palette and semantic states"
            description="The system is intentionally restrained: a clean neutral canvas, strong borders, and carefully placed accent colors."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {brandSwatches.map((swatch) => (
              <Swatch key={swatch.name} {...swatch} />
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {semanticSwatches.map((swatch) => (
              <Swatch key={swatch.name} {...swatch} />
            ))}
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Surface system"
                title="Airy light and atmospheric dark foundations"
                description="Use flat surfaces, fine borders, and generous spacing. Keep shadows minimal so the hierarchy comes from whitespace and contrast."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <SurfaceCard name="App Background" value="#F0F6FC" usage="Main light canvas" />
                <SurfaceCard name="Card Surface" value="#FEFFFE" usage="Cards, panels, modals" />
                <SurfaceCard name="Soft Surface" value="#F8FBFF" usage="Tables and subtle containers" />
                <SurfaceCard name="Border" value="#E5E7EB" usage="Hairline separators" />
              </div>
            </div>

            <div className="rounded-[10px] border border-slate-200 bg-[#0E091E] p-5 md:p-6">
              <p className="text-[12px] font-medium text-white/65">Dark foundation</p>
              <h3
                className="font-satoshi mt-2 text-[32px] font-bold tracking-[-0.03em] text-white"
                style={{ lineHeight: 1.05 }}
              >
                Dark mode surfaces with a cool, premium tone.
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <SurfaceCard dark name="App Background" value="#0E091E" usage="Main dark canvas" />
                <SurfaceCard dark name="Card Surface" value="#15112B" usage="Panels and cards" />
                <SurfaceCard dark name="Elevated Surface" value="#1A1633" usage="Menus and popovers" />
                <SurfaceCard dark name="Hover Surface" value="#221D40" usage="Hover and active overlays" />
              </div>
            </div>
          </div>
        </section>

        <section id="type" className="py-16 md:py-20">
          <SectionTitle
            eyebrow="Typography scale"
            title="Aeonik Pro, Satoshi, and Geist Mono"
            description="Keep the hierarchy strong: compact headings, calm body copy, and tabular mono data for numbers and metrics."
          />

          <div className="mt-8 overflow-hidden rounded-[10px] border border-slate-200 bg-white">
            {typeScale.map((row) => (
              <div key={row.token} className="border-b border-slate-200 last:border-b-0">
                <TypographyRow {...row} />
              </div>
            ))}
          </div>
        </section>


        <section id="spacing" className="py-16 md:py-20">
          <SectionTitle
            eyebrow=" SPACING"
            title="Spacing Scale"
            description="Use Signalix spacing tokens for airy layout rhythm, restrained density, and generous section breathing room."
          />

          <div className="mt-8 rounded-[10px] border border-slate-200 bg-white p-5 md:p-6">
            <div className="flex items-end gap-4 overflow-x-auto pb-2">
              {spacingScale.map((item) => (
                <div key={item.token} className="flex min-w-[56px] flex-col items-center">
                  <div
                    className="w-3 rounded-[4px] bg-[#4F46E5]"
                    style={{ height: `${Math.max(6, item.value / 2)}px` }}
                  />
                  <div className="mt-2 text-[11px] font-medium text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {spacingScale.map((item) => (
                <div key={item.token} className="rounded-[8px] border border-slate-200 bg-[#F9FAFB] p-4">
                  <div className="text-[13px] font-medium tracking-[-0.02em] text-slate-950">
                    {item.token}
                  </div>
                  <div className="mt-1 text-[12px] text-slate-500">{item.label}</div>
                  <p className="mt-2 text-[12px] leading-5 text-slate-500">{item.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="radius" className="py-16 md:py-20">
          <SectionTitle
            eyebrow=" RADIUS"
            title="Border Radius"
            description="Use Signalix restrained rounding: small corners for controls, 8px for cards, and full rounding only for pills and chips."
          />

          <div className="mt-8 rounded-[10px] border border-slate-200 bg-white p-5 md:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {radiusScale.map((item) => (
                <div key={item.token} className="flex flex-col items-center">
                  <div
                    className="flex h-20 w-20 items-center justify-center border border-black/5 bg-[#4F46E5]"
                    style={{ borderRadius: `${item.value}px` }}
                  />
                  <div className="mt-3 text-center">
                    <div className="text-[13px] font-medium tracking-[-0.02em] text-slate-950">
                      {item.label}
                    </div>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">{item.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="components" className="py-16 md:py-20">
          <div className="w-full rounded-[10px] border border-slate-200 bg-white p-5 md:p-6">
            <SectionTitle
              eyebrow="Buttons"
              title="Button Variants"
              description="Compact, clean, and restrained controls aligned to the styleguide system."
            />

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {buttons.map((btn) => (
                <ButtonCard key={btn.token} {...btn} />
              ))}
            </div>
          </div>
        </section>
        <section id="elevation" className="py-16 md:py-20">
          <SectionTitle
            eyebrow=" ELEVATION"
            title="Elevation Scale"
            description="Use very subtle elevation. Surfaces stay flat and border-led, with only light shadow used for floating layers."
          />

          <div className="mt-8 rounded-[10px] border border-slate-200 bg-white p-5 md:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {elevationScale.map((item) => (
                <div
                  key={item.token}
                  className="rounded-[10px] border border-slate-200 bg-[#F9FAFB] p-4"
                >
                  <div
                    className={`rounded-[8px] bg-white p-4 transition-all duration-200 ${item.shadow} ${item.border}`}
                  >
                    <div className="h-20 rounded-[8px] border border-slate-100 bg-white" />
                  </div>

                  <div className="mt-4 text-[13px] font-medium tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">{item.token}</div>
                  <p className="mt-2 text-[12px] leading-5 text-slate-500">{item.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
