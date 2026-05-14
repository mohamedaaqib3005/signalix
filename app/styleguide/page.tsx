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
  token: string;
  label: string;
  description: string;
  kind:
  | "primary"
  | "secondary"
  | "link"
  | "ghost"
  | "successBadge"
  | "neutralBadge"
  | "destructiveBadge"
  | "warningBadge"
  | "amberBadge";
};

type PaletteSwatch = {
  shade: string;
  name: string;
  value: string;
};

type PaletteGroup = {
  variation: string;
  token: string;
  usage: string;
  swatches: PaletteSwatch[];
};

const colorPaletteGroups: PaletteGroup[] = [
  {
    variation: "indigo",
    token: "indigo-{n}",
    usage:
      "Primary brand colors, CTAs, active states, hover states, and soft glow overlays.",
    swatches: [
      { shade: "100", name: "Soft Indigo", value: "#9EA8FF" },
      { shade: "200", name: "Muted Indigo", value: "#818CF8" },
      { shade: "300", name: "Royal Indigo", value: "#6366F1" },
      { shade: "400", name: "Bright Indigo", value: "#5F57FF" },
      { shade: "500", name: "Primary Indigo", value: "#4F46E5" },
      { shade: "600", name: "Primary Hover", value: "#4032C8" },
      { shade: "700", name: "Deep Indigo", value: "#4338CA" },
      { shade: "800", name: "Indigo Soft Overlay", value: "#6366F14D" },
      { shade: "900", name: "Muted Indigo Overlay", value: "#818CF880" },
      { shade: "950", name: "Glow Indigo", value: "#6366F12E" },
      { shade: "960", name: "Strong Glow Indigo", value: "#6366F161" },
    ],
  },
  {
    variation: "lavender",
    token: "lavender-{n}",
    usage:
      "Soft premium tints, subtle highlights, glassy backgrounds, and light ambient accents.",
    swatches: [
      { shade: "100", name: "Glass Lavender", value: "#F3E8FF" },
      { shade: "200", name: "Soft Lavender", value: "#EBD3F8" },
      { shade: "300", name: "Lavender Glow", value: "#D6BCFA" },
      { shade: "400", name: "Muted Lavender", value: "#C4B5FD" },
    ],
  },
  {
    variation: "violet",
    token: "violet-{n}",
    usage:
      "Premium depth, layered gradients, dark mode surfaces, and stronger accent energy.",
    swatches: [
      { shade: "500", name: "Vibrant Orchid", value: "#C084FC" },
      { shade: "600", name: "Electric Violet", value: "#A855F7" },
      { shade: "700", name: "Bright Violet", value: "#8B5CF6" },
      { shade: "800", name: "Surface Plum", value: "#31265A" },
      { shade: "900", name: "Hover Surface", value: "#221D40" },
      { shade: "950", name: "Deep Violet", value: "#221A35" },
      { shade: "975", name: "Atmospheric Purple", value: "#140B29" },
      { shade: "980", name: "Orchid Glow", value: "#C084FC73" },
    ],
  },
  {
    variation: "neutral",
    token: "neutral-{n}",
    usage:
      "Canvas, surfaces, borders, text, muted UI chrome, and restrained system backgrounds.",
    swatches: [
      { shade: "100", name: "Frost White", value: "#FFFFFF" },
      { shade: "200", name: "Surface White", value: "#FEFFFE" },
      { shade: "300", name: "Background Light", value: "#F0F6FC" },
      { shade: "400", name: "Canvas Light", value: "#F7F7F4" },
      { shade: "500", name: "Soft Surface", value: "#F8F7FF" },
      { shade: "600", name: "Soft Surface Alt", value: "#F8FBFF" },
      { shade: "700", name: "Neutral Surface", value: "#F9FAFB" },
      { shade: "800", name: "Border Neutral", value: "#E6E1DC" },
      { shade: "900", name: "Border Neutral Alt", value: "#E5E7EB" },
      { shade: "950", name: "Neutral Ghost", value: "#E7E9F0" },
      { shade: "960", name: "Text Muted", value: "#9CA3AF" },
      { shade: "970", name: "Text Secondary", value: "#7B716B" },
      { shade: "980", name: "Text Primary", value: "#1F1B1A" },
      { shade: "990", name: "Ink Primary", value: "#0F172A" },
    ],
  },
  {
    variation: "night",
    token: "night-{n}",
    usage:
      "Dark canvas, elevated surfaces, hover layers, and glass borders for premium dark mode.",
    swatches: [
      { shade: "100", name: "Background Dark", value: "#0E091E" },
      { shade: "200", name: "Surface Dark", value: "#15112B" },
      { shade: "300", name: "Elevated Dark", value: "#1A1633" },
      { shade: "400", name: "Elevated Surface", value: "#1E1A33" },
      { shade: "500", name: "Hover Surface", value: "#221D40" },
    ],
  },
  {
    variation: "cyan",
    token: "cyan-{n}",
    usage:
      "Cool data accents, luminous highlight states, and bright analytical highlights.",
    swatches: [
      { shade: "100", name: "Cyan Tint", value: "#ECFEFF" },
      { shade: "200", name: "Soft Cyan", value: "#CFFAFE" },
      { shade: "300", name: "Sky Cyan", value: "#A5F3FC" },
      { shade: "400", name: "Fresh Cyan", value: "#67E8F9" },
      { shade: "500", name: "Bright Cyan", value: "#22D3EE" },
      { shade: "600", name: "Analytics Cyan", value: "#06B6D4" },
      { shade: "700", name: "Deep Cyan", value: "#0891B2" },
      { shade: "800", name: "Dark Cyan", value: "#0E7490" },
      { shade: "900", name: "Ink Cyan", value: "#155E75" },
    ],
  },
  {
    variation: "teal",
    token: "teal-{n}",
    usage:
      "Enterprise depth, steady action colors, and cool teal-based highlights.",
    swatches: [
      { shade: "100", name: "Teal Tint", value: "#E6FFFB" },
      { shade: "200", name: "Soft Teal", value: "#C5F4EF" },
      { shade: "300", name: "Muted Teal", value: "#9EE7DE" },
      { shade: "400", name: "Balanced Teal", value: "#6ED3CB" },
      { shade: "500", name: "Brand Teal", value: "#367588" },
      { shade: "600", name: "Deep Teal", value: "#2E6472" },
      { shade: "700", name: "Dark Teal", value: "#26515D" },
      { shade: "800", name: "Night Teal", value: "#1E4049" },
      { shade: "900", name: "Ink Teal", value: "#17323A" },
    ],
  },
  {
    variation: "amber",
    token: "amber-{n}",
    usage:
      "Warm energetic accents, highlights, attention-grabbing actions, and vibrant UI emphasis.",
    swatches: [
      { shade: "100", name: "Amber Tint", value: "#FFF7ED" },
      { shade: "200", name: "Soft Amber", value: "#FFEDD5" },
      { shade: "300", name: "Light Amber", value: "#FED7AA" },
      { shade: "400", name: "Warm Amber", value: "#FDBA74" },
      { shade: "500", name: "Signal Amber", value: "#FF9500" },
      { shade: "600", name: "Deep Amber", value: "#EA8500" },
      { shade: "700", name: "Dark Amber", value: "#C96F00" },
      { shade: "800", name: "Burnt Amber", value: "#9F5600" },
      { shade: "900", name: "Ink Amber", value: "#7A4200" },
    ],
  },

  {
    variation: "blue",
    token: "blue-{n}",
    usage:
      "Trust signals, informational UI, system highlights, and cool interface accents.",
    swatches: [
      { shade: "100", name: "Blue Tint", value: "#EFF6FF" },
      { shade: "200", name: "Soft Blue", value: "#DBEAFE" },
      { shade: "300", name: "Light Blue", value: "#BFDBFE" },
      { shade: "400", name: "Sky Blue", value: "#93C5FD" },
      { shade: "500", name: "Signal Blue", value: "#3B82F6" },
      { shade: "600", name: "Deep Blue", value: "#2563EB" },
      { shade: "700", name: "Dark Blue", value: "#1D4ED8" },
      { shade: "800", name: "Night Blue", value: "#1E40AF" },
      { shade: "900", name: "Ink Blue", value: "#1E3A8A" },
    ],
  },
  {
    variation: "success",
    token: "success-{n}",
    usage:
      "Positive states, confirmations, completion feedback, and success banners.",
    swatches: [
      { shade: "100", name: "Success Tint", value: "#ECFDF5" },
      { shade: "200", name: "Soft Success", value: "#D1FAE5" },
      { shade: "300", name: "Mint Success", value: "#A7F3D0" },
      { shade: "400", name: "Fresh Success", value: "#6EE7B7" },
      { shade: "500", name: "Success Green", value: "#34D399" },
      { shade: "600", name: "Brand Success", value: "#10B981" },
      { shade: "700", name: "Deep Success", value: "#059669" },
      { shade: "800", name: "Dark Success", value: "#047857" },
      { shade: "900", name: "Ink Success", value: "#065F46" },
    ],
  },
  {
    variation: "warning",
    token: "warning-{n}",
    usage:
      "Attention states, caution messages, and warning accents.",
    swatches: [
      { shade: "100", name: "Warning Tint", value: "#FFF7ED" },
      { shade: "200", name: "Soft Warning", value: "#FFEDD5" },
      { shade: "300", name: "Warm Warning", value: "#FED7AA" },
      { shade: "400", name: "Bright Warning", value: "#FDBA74" },
      { shade: "500", name: "Warning Orange", value: "#FB923C" },
      { shade: "600", name: "Brand Warning", value: "#F97316" },
      { shade: "700", name: "Deep Warning", value: "#EA580C" },
      { shade: "800", name: "Dark Warning", value: "#C2410C" },
      { shade: "900", name: "Ink Warning", value: "#9A3412" },
    ],
  },
  {
    variation: "reject",
    token: "reject-{n}",
    usage:
      "Destructive states, invalid inputs, errors, and rejection feedback.",
    swatches: [
      { shade: "100", name: "Reject Tint", value: "#FEF2F2" },
      { shade: "200", name: "Soft Reject", value: "#FEE2E2" },
      { shade: "300", name: "Light Reject", value: "#FECACA" },
      { shade: "400", name: "Bright Reject", value: "#FCA5A5" },
      { shade: "500", name: "Reject Red", value: "#F87171" },
      { shade: "600", name: "Brand Reject", value: "#EF4444" },
      { shade: "700", name: "Deep Reject", value: "#DC2626" },
      { shade: "800", name: "Dark Reject", value: "#B91C1C" },
      { shade: "900", name: "Ink Reject", value: "#991B1B" },
    ],
  },
];

function PaletteSwatchCell({ shade, name, value }: PaletteSwatch) {
  return (
    <div className="flex w-[68px] flex-col items-center">
      <div
        className="h-11 w-11 rounded-[10px] border border-black/5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
        style={{ background: value }}
        title={`${name} ${value}`}
      />
      <div className="mt-2 text-[11px] font-semibold tracking-[-0.01em] text-slate-950">
        {shade}
      </div>
      <div className="mt-0.5 max-w-[68px] text-center text-[10px] leading-3 text-slate-500">
        {name}
      </div>
    </div>
  );
}

function PaletteGroupRow({ variation, token, usage, swatches }: PaletteGroup) {
  return (
    <div className="grid gap-6 border-b border-slate-200 px-6 py-6 last:border-b-0 md:grid-cols-[140px_1.2fr_2fr] md:items-start">
      <div>
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 font-mono text-[12px] text-slate-700">
          {token}
        </span>
      </div>

      <p className="max-w-[320px] text-[15px] leading-6 text-slate-600">{usage}</p>

      <div className="flex flex-wrap gap-3">
        {swatches.map((swatch) => (
          <PaletteSwatchCell
            key={`${variation}-${swatch.shade}-${swatch.value}`}
            {...swatch}
          />
        ))}
      </div>
    </div>
  );
}



const tokenRows: TokenRowProps[] = [
  { token: "Background / Light", value: "#F0F6FC", notes: "Soft, cool canvas for light mode" },
  { token: "Surface / White", value: "#FEFFFE", notes: "Cards, panels, modal surfaces" },
  { token: "Background / Dark", value: "#0E091E", notes: "Atmospheric dark mode canvas" },
  { token: "Surface / Dark", value: "#15112B", notes: "Raised panels in dark mode" },
  { token: "Border / Neutral", value: "#E5E7EB", notes: "Fine borders, separators, inputs" },
  { token: "Text / Primary", value: "#0F172A", notes: "Body and heading ink in light mode" },
];
type FontSizeRowProps = {
  token: string;
  value: string;
  size: number;
};

const typeScale: FontSizeRowProps[] = [
  { token: "text-xs", value: "0.75rem (12px)", size: 12 },
  { token: "text-sm", value: "0.875rem (14px)", size: 14 },
  { token: "text-md", value: "1rem (16px)", size: 16 },
  { token: "text-lg", value: "1.125rem (18px)", size: 18 },
  { token: "text-xl", value: "1.5rem (24px)", size: 24 },
  { token: "text-2xl", value: "1.75rem (28px)", size: 28 },
  { token: "text-3xl", value: "2.25rem (36px)", size: 36 },
  { token: "text-4xl", value: "3rem (48px)", size: 48 },
  { token: "text-5xl", value: "3.5rem (56px)", size: 56 },
  { token: "text-6xl", value: "4rem (64px)", size: 64 },
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
  if (kind === "warningBadge") {
    return (
      <span
        className={`
        ${base}

        rounded-full
        border
        border-[#FB923C]

        bg-white

        px-4
        py-2

        text-[13px]
        font-medium
        tracking-[-0.01em]

        text-[#C2410C]

        shadow-[0_4px_14px_rgba(251,146,60,0.12)]
      `}
      >
        {label}
      </span>
    );
  }

  if (kind === "amberBadge") {
    return (
      <span
        className={`
        ${base}

        rounded-full
        border
        border-[#FFB84D]

        bg-[linear-gradient(135deg,#FFB74D_0%,#FF9500_100%)]

        px-4
        py-2

        text-[13px]
        font-medium
        tracking-[-0.01em]

        text-white

        shadow-[0_8px_24px_rgba(255,149,0,0.24)]
      `}
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
function ButtonCard({
  token,
  label,
  description,
  kind,
}: ButtonSpec) {
  return (
    <div className="flex min-h-[220px] flex-col rounded-[20px] border border-[#E6E1DC] bg-white p-5 transition-all duration-300 hover:border-[#6366F1]/20 hover:shadow-[0_12px_32px_rgba(99,102,241,0.08)]">
      <div className="flex h-[100px] items-center justify-start rounded-[16px] bg-[#F9FAFB] px-4">
        <ButtonPreview kind={kind} label={label} />
      </div>

      <div className="mt-5 text-[15px] font-semibold tracking-[-0.02em] text-slate-950">
        {token}
      </div>

      <p className="mt-2 text-[13px] leading-6 text-slate-500">
        {description}
      </p>
    </div>
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
const buttons: ButtonSpec[] = [
  {
    token: "Primary Button",
    label: "Get Started",
    description: "Main CTA with premium gradient treatment.",
    kind: "primary",
  },

  {
    token: "Secondary Button",
    label: "Campaign",
    description: "Secondary actions and supporting workflows.",
    kind: "secondary",
  },

  {
    token: "Link Button",
    label: "Learn More",
    description: "Lightweight inline navigation action.",
    kind: "link",
  },

  {
    token: "Ghost Button",
    label: "Cancel",
    description: "Minimal low-emphasis action.",
    kind: "ghost",
  },
];
const pills: ButtonSpec[] = [
  {
    token: "Success Pill",
    label: "Completed",
    description: "Positive and successful states.",
    kind: "successBadge",
  },
  {
    token: "Neutral Pill",
    label: "Pending",
    description: "Informational or inactive states.",
    kind: "neutralBadge",
  },
  {
    token: "Warning Pill",
    label: "Warning",
    description: "Attention and caution states.",
    kind: "warningBadge",
  },
  {
    token: "Amber Pill",
    label: "AI agent",
    description: "Warm amber highlighted state.",
    kind: "amberBadge",
  },
  {
    token: "Destructive Pill",
    label: "Failed",
    description: "Errors and destructive states.",
    kind: "destructiveBadge",
  },
];
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

function TypographyRow({ token, value, size }: FontSizeRowProps) {
  return (
    <div className="grid gap-6 px-5 py-6 lg:grid-cols-[240px_1fr] lg:items-center">
      <div>
        <div className="text-[13px] font-medium tracking-[-0.01em] text-slate-950">
          {token}
        </div>
        <div className="mt-1 text-[11px] text-slate-500">{value}</div>
      </div>

      <div
        className="font-satoshi text-slate-950"
        style={{
          fontSize: size,
          lineHeight: 1.1,
        }}
      >
        Aa
      </div>
    </div>
  );
}
const fontSizeScale = [
  {
    token: "text-xs",
    rem: "0.75rem",
    px: "12px",
    size: 12,
  },
  {
    token: "text-sm",
    rem: "0.875rem",
    px: "14px",
    size: 14,
  },
  {
    token: "text-md",
    rem: "1rem",
    px: "16px",
    size: 16,
  },
  {
    token: "text-lg",
    rem: "1.125rem",
    px: "18px",
    size: 18,
  },
  {
    token: "text-xl",
    rem: "1.5rem",
    px: "24px",
    size: 24,
  },
  {
    token: "text-2xl",
    rem: "1.75rem",
    px: "28px",
    size: 28,
  },
  {
    token: "text-3xl",
    rem: "2.25rem",
    px: "36px",
    size: 36,
  },
  {
    token: "text-4xl",
    rem: "3rem",
    px: "48px",
    size: 48,
  },
  {
    token: "text-5xl",
    rem: "3.5rem",
    px: "56px",
    size: 56,
  },
  {
    token: "text-6xl",
    rem: "4rem",
    px: "64px",
    size: 64,
  },
];
function FontSizeRow({
  token,
  rem,
  px,
  size,
}: {
  token: string;
  rem: string;
  px: string;
  size: number;
}) {
  return (
    <div className="grid items-center gap-6 border-b border-slate-200 px-5 py-6 last:border-b-0 md:grid-cols-[140px_180px_1fr]">
      <div>
        <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-[12px] text-slate-700">
          {token}
        </span>
      </div>

      <div className="text-[15px] text-slate-600">
        {rem} ({px})
      </div>

      <div
        className="font-satoshi text-slate-950"
        style={{
          fontSize: size,
          lineHeight: 1.1,
        }}
      >
        Aa
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


const fontWeightGroups = [
  {
    family: "Aeonik Pro",
    fontClass: "font-cabinet",
    weights: [
      { name: "Bold", weight: 700, style: "normal" },
      { name: "Regular", weight: 400, style: "normal" },
    ],
  },

  {
    family: "Satoshi",
    fontClass: "font-satoshi",
    weights: [
      { name: "Black", weight: 900, style: "normal" },
      { name: "Black Italic", weight: 900, style: "italic" },
      { name: "Bold", weight: 700, style: "normal" },
      { name: "Bold Italic", weight: 700, style: "italic" },
      { name: "Italic", weight: 400, style: "italic" },
      { name: "Light", weight: 300, style: "normal" },
      { name: "Light Italic", weight: 300, style: "italic" },
      { name: "Medium", weight: 500, style: "normal" },
      { name: "Medium Italic", weight: 500, style: "italic" },
      { name: "Regular", weight: 400, style: "normal" },
      { name: "Variable", weight: 450, style: "normal" },
      { name: "Variable Italic", weight: 450, style: "italic" },
    ],
  },

  {
    family: "Geist Mono",
    fontClass: "font-mono",
    weights: [
      { name: "Black", weight: 900 },
      { name: "Bold", weight: 700 },
      { name: "Extra Bold", weight: 800 },
      { name: "Extra Light", weight: 200 },
      { name: "Light", weight: 300 },
      { name: "Medium", weight: 500 },
      { name: "Regular", weight: 400 },
      { name: "Semi Bold", weight: 600 },
      { name: "Thin", weight: 100 },
    ],
  },
];

function FontWeightRow({
  family,
  fontClass,
  weights,
}: {
  family: string;
  fontClass: string;
  weights: {
    name: string;
    weight: number;
    style?: string;
  }[];
}) {
  return (
    <div className="border-b border-slate-200 px-5 py-8 last:border-b-0">
      <div className="mb-6">
        <div className="text-[18px] font-semibold tracking-[-0.02em] text-slate-950">
          {family}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {weights.map((item) => (
          <div
            key={`${family}-${item.name}`}
            className="rounded-[10px] border border-slate-200 bg-[#F9FAFB] p-4"
          >
            <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-slate-500">
              {item.name}
            </div>

            <div
              className={`mt-4 text-[32px] tracking-[-0.03em] text-slate-950 ${fontClass}`}
              style={{
                fontWeight: item.weight,
                fontStyle: item.style || "normal",
                lineHeight: 1,
              }}
            >
              Signalix
            </div>

            <div className="mt-4 font-mono text-[11px] text-slate-500">
              {item.weight} / {item.style || "normal"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const spacingScale = [
  {
    token: "xs",
    className: "gap-xs",
    value: 4,
    label: "0.25rem (4px)",
    usage: "Fine adjustments",
  },

  {
    token: "sm",
    className: "gap-sm",
    value: 8,
    label: "0.5rem (8px)",
    usage: "Tiny component spacing",
  },

  {
    token: "md",
    className: "gap-md",
    value: 12,
    label: "0.75rem (12px)",
    usage: "Compact UI spacing",
  },

  {
    token: "lg",
    className: "gap-lg",
    value: 16,
    label: "1rem (16px)",
    usage: "Base component spacing",
  },

  {
    token: "xl",
    className: "gap-xl",
    value: 20,
    label: "1.25rem (20px)",
    usage: "Card and container spacing",
  },

  {
    token: "2xl",
    className: "gap-2xl",
    value: 24,
    label: "1.5rem (24px)",
    usage: "Common layout spacing",
  },

  {
    token: "3xl",
    className: "gap-3xl",
    value: 32,
    label: "2rem (32px)",
    usage: "Section rhythm",
  },

  {
    token: "4xl",
    className: "gap-4xl",
    value: 36,
    label: "2.25rem (36px)",
    usage: "Expanded section spacing",
  },

  {
    token: "5xl",
    className: "gap-5xl",
    value: 40,
    label: "2.5rem (40px)",
    usage: "Large content separation",
  },

  {
    token: "6xl",
    className: "gap-6xl",
    value: 48,
    label: "3rem (48px)",
    usage: "Major section spacing",
  },

  {
    token: "7xl",
    className: "gap-7xl",
    value: 64,
    label: "4rem (64px)",
    usage: "Large layout breathing room",
  },

  {
    token: "8xl",
    className: "gap-8xl",
    value: 80,
    label: "5rem (80px)",
    usage: "Page block separation",
  },

  {
    token: "9xl",
    className: "gap-9xl",
    value: 96,
    label: "6rem (96px)",
    usage: "Hero section spacing",
  },

  {
    token: "10xl",
    className: "gap-10xl",
    value: 120,
    label: "7.5rem (120px)",
    usage: "Major page breakpoints",
  },

  {
    token: "11xl",
    className: "gap-11xl",
    value: 240,
    label: "15rem (240px)",
    usage: "Very large page spacing",
  },
];

const radiusScale = [
  {
    token: "none",
    value: 0,
    label: "0px",
    usage: "Sharp surfaces",
  },

  {
    token: "xs",
    value: 4,
    label: "4px",
    usage: "Tiny inputs and micro elements",
  },

  {
    token: "sm",
    value: 6,
    label: "6px",
    usage: "Compact inputs and pills",
  },

  {
    token: "md",
    value: 8,
    label: "8px",
    usage: "Standard cards and controls",
  },

  {
    token: "lg",
    value: 10,
    label: "10px",
    usage: "Primary containers",
  },

  {
    token: "xl",
    value: 12,
    label: "12px",
    usage: "Interactive panels and dropdowns",
  },

  {
    token: "2xl",
    value: 16,
    label: "16px",
    usage: "Soft cards and overlays",
  },

  {
    token: "3xl",
    value: 20,
    label: "20px",
    usage: "Large floating surfaces",
  },

  {
    token: "4xl",
    value: 28,
    label: "28px",
    usage: "Premium modals and elevated sections",
  },

  {
    token: "5xl",
    value: 32,
    label: "32px",
    usage: "Hero containers and immersive layouts",
  },

  {
    token: "full",
    value: 9999,
    label: "9999px",
    usage: "Buttons, chips, badges",
  },
];
function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-white text-slate-950">{children}</main>;
}

export default function StyleGuidePage() {
  return (
    <PageShell>
      <div className="sticky top-0 z-50 w-full px-4 transition-all duration-300 lg:px-6">
        <div
          className="
      mx-auto
      max-w-[1600px]
      overflow-hidden

      rounded-[34px]

      border
      border-white/50

      bg-white/60
      backdrop-blur-2xl

      shadow-[0_10px_35px_rgba(15,23,42,0.08)]

      supports-[backdrop-filter]:bg-white/55
    "
        >
          <div className="flex w-full items-center gap-6 px-5">

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
                className="
            rounded-[10px]
            px-3
            py-2
            text-[12px]
            font-medium
            text-slate-600
            transition-all
            duration-300

            hover:bg-white/80
            hover:text-slate-950
          "
                href="#colors"
              >
                Colors
              </a>

              <a
                className="
            rounded-[10px]
            px-3
            py-2
            text-[12px]
            font-medium
            text-slate-600
            transition-all
            duration-300

            hover:bg-white/80
            hover:text-slate-950
          "
                href="#colors"
              >
                Typography
              </a>

              <a
                className="
            rounded-[10px]
            px-3
            py-2
            text-[12px]
            font-medium
            text-slate-600
            transition-all
            duration-300

            hover:bg-white/80
            hover:text-slate-950
          "
                href="#colors"
              >
                Spacing
              </a>

              <a
                className="
            rounded-[10px]
            px-3
            py-2
            text-[12px]
            font-medium
            text-slate-600
            transition-all
            duration-300

            hover:bg-white/80
            hover:text-slate-950
          "
                href="#colors"
              >
                Radius
              </a>

              <a
                className="
            rounded-[10px]
            px-3
            py-2
            text-[12px]
            font-medium
            text-slate-600
            transition-all
            duration-300

            hover:bg-white/80
            hover:text-slate-950
          "
                href="#colors"
              >
                Components
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-6 lg:px-8 ">

        <section className="md:py-16">
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
            description="Primitive color tokens grouped by hue family. Theme tokens are derived from these swatches."
          />

          <div className="mt-8 overflow-hidden rounded-[20px] border border-slate-200 bg-white">
            <div className="grid gap-6 border-b border-slate-200 px-6 py-4 text-[13px] font-semibold text-slate-950 md:grid-cols-[140px_1.2fr_2fr]">
              <div>Variation</div>
              <div>Usage</div>
              <div>Swatches</div>
            </div>

            {colorPaletteGroups.map((group) => (
              <PaletteGroupRow key={group.variation} {...group} />
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
                <SurfaceCard name="Border" value="#E6E1DC" usage="Hairline separators" />
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
                <SurfaceCard dark name="Elevated Surface" value="#1E1A33" usage="Menus and popovers" />
                <SurfaceCard dark name="Hover Surface" value="#221D40" usage="Hover and active overlays" />
              </div>
            </div>
          </div>
        </section>

        <section id="type" className="py-16 md:py-20">
          <SectionTitle
            eyebrow="Typography scale"
            title="Font Size"
            description="Primitive text-size tokens used across the system."
          />

          <div className="mt-8 overflow-hidden rounded-[10px] border border-slate-200 bg-white">
            <div className="grid border-b border-slate-200 px-5 py-4 text-[13px] font-semibold text-slate-950 lg:grid-cols-[240px_1fr]">
              <div>Class</div>
              <div>Example</div>
            </div>

            {typeScale.map((row) => (
              <div key={row.token} className="border-b border-slate-200 last:border-b-0">
                <TypographyRow {...row} />
              </div>
            ))}
          </div>
        </section>

        <section id="font-weights" className="py-16 md:py-20">
          <SectionTitle
            eyebrow="Font weights"
            title="Typeface Weights"
            description="Complete font-family and weight system used across Signalix."
          />

          <div className="mt-8 overflow-hidden rounded-[10px] border border-slate-200 bg-white">
            {fontWeightGroups.map((group) => (
              <FontWeightRow
                key={group.family}
                family={group.family}
                fontClass={group.fontClass}
                weights={group.weights}
              />
            ))}
          </div>
        </section>
        <section id="spacing" className="py-16 md:py-20">
          <SectionTitle
            eyebrow="SPACING"
            title="Spacing Tokens"
            description="Spacing tokens help maintain consistent spaces between content."
          />

          <div className="mt-8 overflow-hidden rounded-[20px] border border-slate-200 bg-white">
            <div className="grid grid-cols-[160px_1fr_1fr] border-b border-slate-200 px-6 py-4 text-[14px] font-semibold text-slate-950">
              <div>Classes</div>
              <div>Usage</div>
              <div>Sample</div>
            </div>

            {spacingScale.map((item) => (
              <div
                key={item.token}
                className="grid grid-cols-[160px_1fr_1fr] items-center border-b border-slate-200 px-6 py-5 last:border-b-0"
              >
                <div>
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 font-mono text-[12px] text-slate-900">
                    {item.className}
                  </span>
                </div>

                <div className="text-[14px] text-slate-950">{item.label}</div>

                <div className="flex items-center">
                  <div
                    className="h-8 rounded-none bg-[#5F57FF]"
                    style={{ width: `${Math.max(4, item.value * 2)}px` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {spacingScale.map((item) => (
              <div key={item.token} className="rounded-[12px] border border-slate-200 bg-[#F9FAFB] p-4">
                <div className="text-[13px] font-medium tracking-[-0.02em] text-slate-950">
                  {item.className}
                </div>
                <div className="mt-1 text-[12px] text-slate-500">{item.label}</div>
                <p className="mt-2 text-[12px] leading-5 text-slate-500">{item.usage}</p>
              </div>
            ))}
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
          <div className="w-full rounded-[24px] border border-[#E6E1DC] bg-white p-5 md:p-6">
            <SectionTitle
              eyebrow="BUTTONS"
              title="Button Variants"
              description="Interactive controls for primary actions, secondary flows, and lightweight navigation."
            />

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {buttons.map((btn) => (
                <ButtonCard key={btn.token} {...btn} />
              ))}
            </div>
          </div>

          {/* PILL VARIANTS */}

          <div className="mt-10 w-full rounded-[24px] border border-[#E6E1DC] bg-white p-5 md:p-6">
            <SectionTitle
              eyebrow="PILLS"
              title="Pill Variants"
              description="Compact status indicators used across analytics, dashboards, and data states."
            />

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pills.map((pill) => (
                <ButtonCard key={pill.token} {...pill} />
              ))}
            </div>
          </div>
        </section>
        <section id="elevation" className="py-16 md:py-20">
          <SectionTitle
            eyebrow="ELEVATION"
            title="Elevation Scale"
            description="Use very subtle elevation. Surfaces stay flat and border-led, with only light shadow used for floating layers."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {elevationScale.map((item) => (
              <div
                key={item.token}
                className="
          group relative overflow-hidden rounded-[20px] border border-[#E6E1DC]
          bg-white p-5 text-left transition-all duration-500
          hover:-translate-y-1 hover:border-[#6366F1]/30 hover:shadow-[0_12px_40px_rgba(99,102,241,0.10)]
        "
              >
                <span
                  className="
            pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
                >
                  <span
                    className="
              absolute inset-0
              bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_45%)]
            "
                  />
                </span>

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[18px] font-medium tracking-[-0.02em] text-slate-950">
                      {item.title}
                    </div>
                    <div className="mt-1 text-[14px] text-[#7B716B]">{item.usage}</div>
                  </div>

                  <div className="rounded-full border border-slate-200 bg-[#F9FAFB] px-3 py-1 text-[11px] font-medium text-slate-500">
                    {item.token}
                  </div>
                </div>

                <div className="relative z-10 mt-5 rounded-[14px] border border-black/5 bg-[#F9FAFB] p-4">
                  <div
                    className={`rounded-[12px] border p-4 transition-all duration-300 ${item.shadow} ${item.border}`}
                  >
                    <div className="h-20 rounded-[10px] border border-slate-100 bg-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
