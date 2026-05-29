// component page


"use client"

import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDashed,
  Download,
  ExternalLink,
  Eye,
  Filter,
  LayoutDashboard,
  Mail,
  MapPin,
  Pencil,
  Plus,
  Search,
  Sparkles,
  UserRound,
  Wallet,
  X,
} from "lucide-react";

// Signalix / Privy-inspired layout kit
// Drop this into a single file in your app and reuse the sections independently.

const colors = {
  primary: "#4f46E5",
  primaryHover: "#4032C8",
  primaryContrast: "#FFFFFF",
  secondary: "#000000",
  tertiary: "#D97757",
  neutral: "#F7F7F4",
  surface: "#FFFFFF",
  onSurface: "#1F1B1A",
  onSurfaceMuted: "#7B716B",
  border: "#E6E1DC",
  error: "#D94A4A",
  success: "#0F8A5F",
};

const radii = {
  none: 0,
  sm: 6,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

const spacing = {
  xs: 2,
  sm: 6,
  md: 16,
  lg: 24,
  xl: 80,
  gutter: 32,
  margin: 24,
};

type Mode = "light" | "dark";

type ShellProps = {
  mode: Mode;
  children: React.ReactNode;
};

function cx(...parts: Array<string | false | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

function AppShell({ mode, children }: ShellProps) {
  const isDark = mode === "dark";

  return (
    <div
      className={cx(
        "min-h-screen p-4 md:p-6",
        isDark ? "bg-[#0E091E] text-white" : "bg-[#F7F7F4] text-[#1F1B1A]"
      )}
      style={{ fontFamily: "var(--font-satoshi, system-ui, sans-serif)" }}
    >
      <div
        className={cx(
          "mx-auto max-w-[1440px] overflow-hidden border",
          isDark ? "border-white/10 bg-[#14112A]" : "border-[#E6E1DC] bg-white"
        )}
        style={{ borderRadius: radii.xl }}
      >
        {children}
      </div>
    </div>
  );
}

function TopNav({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  const nav = ["Home", "Explore", "Lists", "Planner", "Meetings"];

  return (
    <header
      className={cx(
        "flex items-center justify-between border-b px-6 py-4 md:px-8",
        isDark ? "border-white/10 bg-white/0" : "border-[#E6E1DC] bg-white"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-white"
          style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.tertiary})` }}
        >
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="text-[22px] font-medium tracking-[-0.03em]">Signalix</div>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {nav.map((item, idx) => {
          const active = idx === 4;
          return (
            <a
              key={item}
              href="#"
              className={cx(
                `
      group
      relative
      inline-flex
      items-center
      py-1

      text-[14px]
      font-medium
      tracking-[-0.01em]

      transition-colors
      duration-300
    `,
                active
                  ? isDark
                    ? "text-[#EBD3F8]"
                    : "text-[#5F57FF]"
                  : isDark
                    ? "text-white/60 hover:text-[#EBD3F8]"
                    : "text-[#1F1B1A]/80 hover:text-[#1F1B1A]"
              )}
            >
              <span className="relative">
                {item}

                {/* hover underline */}
                {!active && (
                  <span
                    className="
          absolute
          bottom-[-4px]
          left-0
          h-[1px]
          w-0

          bg-current

          transition-all
          duration-300

          group-hover:w-full
        "
                  />
                )}
              </span>

              {/* active indicator */}
              {active && (
                <span
                  className="
        absolute
        left-0
        right-0
        -bottom-4
        mx-auto
        h-[3px]
        w-10
        rounded-full
      "
                  style={{
                    background: isDark
                      ? "linear-gradient(90deg,#D6BCFA 0%,#C084FC 100%)"
                      : colors.primary,
                    boxShadow: isDark
                      ? "0 0 18px rgba(192,132,252,0.45)"
                      : "none",
                  }}
                />
              )}
            </a>
          );
        })}
      </nav>

      <button
        className="flex h-10 w-10 items-center justify-center rounded-full text-white"
        style={{ background: colors.tertiary }}
      >
        CB
      </button>
    </header>
  );
}

function SectionHeader({
  title,
  eyebrow,
  description,
  mode,
}: {
  title: string;
  eyebrow: string;
  description?: string;
  mode: Mode;
}) {
  const isDark = mode === "dark";
  return (
    <div className="space-y-2">
      <div
        className={cx(
          "text-[12px] font-medium uppercase tracking-[0.12em]",
          isDark ? "text-white/50" : "text-[#7B716B]"
        )}
        style={{ fontFamily: "var(--font-mono, ui-monospace, SFMono-Regular, monospace)" }}
      >
        {eyebrow}
      </div>
      <h2
        className={cx(
          "text-[36px] font-medium tracking-[-0.04em] md:text-[56px]",
          isDark ? "text-white" : "text-[#1F1B1A]"
        )}
        style={{ fontFamily: "var(--font-cabinet, var(--font-satoshi, system-ui))" }}
      >
        {title}
      </h2>
      {description ? (
        <p className={cx("max-w-2xl text-[16px] leading-7", isDark ? "text-white/65" : "text-[#7B716B]")}>{description}</p>
      ) : null}
    </div>
  );
}

function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "success" | "warning" | "destructive" | "primary" }) {
  const map = {
    neutral: { bg: "#F7F7F4", fg: "#1F1B1A", border: colors.border },
    success: { bg: "#EAF8F1", fg: colors.success, border: "#CFEBDD" },
    warning: { bg: "#FFF4DE", fg: "#B46900", border: "#F2D59F" },
    destructive: { bg: "#FCEDED", fg: colors.error, border: "#F0C7C7" },
    primary: { bg: colors.primary, fg: colors.primaryContrast, border: colors.primary },
  }[tone];

  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-medium"
      style={{ backgroundColor: map.bg, color: map.fg, borderColor: map.border }}
    >
      {children}
    </span>
  );
}
function Button({
  children,
  variant = "primary",
  mode = "light",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
  mode?: Mode;
}) {
  const isDark = mode === "dark";

  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap";

  // PRIMARY BUTTON
  if (variant === "primary") {
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
          text-white

          shadow-[0_10px_30px_rgba(99,102,241,0.18)]

          transition-[box-shadow]
          duration-500

          hover:shadow-[0_14px_45px_rgba(99,102,241,0.38)]

          ${isDark
            ? "bg-[linear-gradient(135deg,#EBD3F8_0%,#C4B5FD_24%,#9EA8FF_48%,#4F46E5_74%,#31265A_92%,#221A35_100%)]"
            : "bg-[linear-gradient(135deg,#221A35_0%,#4338CA_38%,#6366F1_68%,#A855F7_100%)]"
          }
        `}
      >
        <span className="relative z-20">{children}</span>

        <span
          className="
            pointer-events-none
            absolute
            inset-0
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

  // SECONDARY BUTTON
  if (variant === "secondary") {
    return (
      <button
        className={`
          ${base}
          group
          relative
          h-10
          overflow-hidden
          rounded-full
          px-5

          text-[14px]
          font-medium
          tracking-[-0.01em]

          transition-all
          duration-300

          ${isDark
            ? `
                border border-white/10
                bg-white/5
                text-[#C4B5FD]

                hover:border-[#818CF8]
                hover:bg-white/10
                hover:text-[#EBD3F8]

                hover:shadow-[0_8px_24px_rgba(99,102,241,0.18)]
              `
            : `
                border border-[#4F46E5]/30
                bg-white
                text-[#4F46E5]

                hover:border-[#6366F1]
                hover:bg-[#F8F7FF]
                hover:text-[#4032C8]

                hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)]
              `
          }
        `}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }

  // LINK BUTTON
  return (
    <button
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

        transition-colors
        duration-300

        ${isDark
          ? "text-[#C4B5FD] hover:text-[#EBD3F8]"
          : "text-[#4F46E5] hover:text-[#4032C8]"
        }
      `}
    >
      <span className="relative">
        {children}

        <span
          className="
            absolute
            bottom-[-2px]
            left-0
            h-[1px]
            w-0

            bg-current

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

function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex h-11 items-center gap-3 rounded-full border px-4" style={{ borderColor: colors.border, background: "white" }}>
      <Search className="h-4 w-4 text-[#7B716B]" />
      <input
        className="w-full bg-transparent text-[14px] outline-none placeholder:text-[#7B716B]"
        placeholder={placeholder}
      />
    </div>
  );
}
function Chip({
  children,
  active = false,
  mode = "light",
}: {
  children: React.ReactNode;
  active?: boolean;
  mode?: Mode;
}) {
  const isDark = mode === "dark";

  return (
    <button
      className={cx(
        `
        rounded-full
        border
        px-4
        py-2
        text-[14px]
        font-medium
        tracking-[-0.01em]
        transition-all
        duration-300
      `,
        active
          ? isDark
            ? "text-[#140B29]"
            : "text-white"
          : isDark
            ? "text-white/70 hover:text-white"
            : "text-[#1F1B1A]"
      )}
      style={{
        background: active
          ? isDark
            ? "linear-gradient(135deg,#D6BCFA 0%,#C084FC 45%,#A855F7 100%)"
            : colors.primary
          : isDark
            ? "rgba(255,255,255,0.04)"
            : "white",

        borderColor: active
          ? isDark
            ? "#C084FC"
            : colors.primary
          : isDark
            ? "rgba(255,255,255,0.08)"
            : colors.border,

        boxShadow:
          active && isDark
            ? "0 8px 30px rgba(192,132,252,0.28)"
            : "none",
      }}
    >
      {children}
    </button>
  );
}

function StatCard({ label, value, delta, mode }: { label: string; value: string; delta?: string; mode: Mode }) {
  const isDark = mode === "dark";
  return (
    <div
      className={cx("rounded-[12px] border p-5", isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-white")}
    >
      <div className={cx("text-[15px]", isDark ? "text-white/85" : "text-[#1F1B1A]")}>{label}</div>
      <div className="mt-3 flex items-center gap-3">
        <div className={cx("text-[34px] font-medium tracking-[-0.04em]", isDark ? "text-white" : "text-[#1F1B1A]")}>{value}</div>
        {delta ? <Pill tone="success">↑ {delta}</Pill> : null}
      </div>
    </div>
  );
}

function TableShell({
  mode,
  columns,
  rows,
  headerActions,
}: {
  mode: Mode;
  columns: string[];
  rows: React.ReactNode[];
  headerActions?: React.ReactNode;
}) {
  const isDark = mode === "dark";
  return (
    <div className={cx("rounded-[16px] border", isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-white")}>
      {headerActions ? <div className="flex items-center justify-between border-b border-[#E6E1DC] px-4 py-3">{headerActions}</div> : null}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className={cx(isDark ? "bg-white/5" : "bg-[#F7F7F4]")}>
              {columns.map((c) => (
                <th key={c} className={cx("whitespace-nowrap px-5 py-4 text-[13px] font-medium", isDark ? "text-white/70" : "text-[#1F1B1A]/70")}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={cx("border-t", isDark ? "border-white/10 hover:bg-white/5" : "border-[#E6E1DC] hover:bg-[#F7F7F4]")}>
                {row}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MetricBarChart({
  title,
  subtitle,
  bars,
  mode,
}: {
  title: string;
  subtitle: string;
  bars: Array<{ label: string; value: number }>;
  mode: Mode;
}) {
  const isDark = mode === "dark";
  const max = Math.max(...bars.map((b) => b.value));

  const gradients = {
    techModern:
      "linear-gradient(135deg, #EBD3F8 0%, #C4B5FD 24%, #9EA8FF 48%, #4F46E5 74%, #31265A 92%, #221A35 100%)", deepOcean:
      "linear-gradient(135deg, #C7D2FE 0%,   #F5EAFC 45%,#A589FC 100 %) ",
    electricSky: "linear-gradient(135deg, #06B6D4 0%, #4F46E5 100%)"
  };

  // Example: Using "Tech Modern" for Dark mode and "Electric Sky" for Light mode
  const chartGradient = isDark
    ? gradients.techModern
    : gradients.deepOcean;


  return (
    <div
      className={cx(
        "rounded-[16px] border p-5",
        isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-white"
      )}
    >
      <div className={cx("text-[22px] font-medium", isDark ? "text-white" : "text-[#1F1B1A]")}>
        {title}
      </div>
      <div className={cx("mt-1 text-[14px]", isDark ? "text-white/55" : "text-[#7B716B]")}>
        {subtitle}
      </div>

      <div className="mt-6 flex h-[260px] items-end gap-8 rounded-[12px] p-3">
        {bars.map((bar) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center justify-end gap-3">
            <div className="text-[14px] font-medium" style={{ color: colors.secondary }}>
              {bar.value}
            </div>
            <div
              className="w-full rounded-[8px]"
              style={{
                height: `${Math.max(20, (bar.value / max) * 180)}px`,
                background: chartGradient,
              }}
            />
            <div className={cx("rotate-[-35deg] text-[12px]", isDark ? "text-white/70" : "text-[#1F1B1A]/80")}>
              {bar.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DonutMeter({ label, value, mode }: { label: string; value: number; mode: Mode }) {
  const isDark = mode === "dark";
  const radius = 54;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className={cx("flex h-[140px] w-[140px] flex-col items-center justify-center rounded-[16px] border p-4", isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-white")}>
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle cx="65" cy="65" r={radius} stroke={isDark ? "rgba(255,255,255,0.12)" : "#E6E1DC"} strokeWidth={stroke} fill="none" />
        <circle
          cx="65"
          cy="65"
          r={radius}
          stroke={colors.primary}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 65 65)"
        />
      </svg>
      <div className="-mt-[94px] text-center">
        <div className={cx("text-[12px]", isDark ? "text-white/65" : "text-[#7B716B]")}>{label}</div>
        <div className={cx("text-[22px] font-medium", isDark ? "text-white" : "text-[#1F1B1A]")}>{value}%</div>
      </div>
    </div>
  );
}

function EventCard({ mode, title, date, location, badge }: { mode: Mode; title: string; date: string; location: string; badge: string }) {
  const isDark = mode === "dark";
  return (
    <div className={cx("overflow-hidden rounded-[16px] border", isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-white")}>
      <div className="h-44 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_32%),linear-gradient(135deg,#f04d63,#d52068)]" />
      <div className="p-5">
        <div className="text-[24px] font-medium tracking-[-0.03em]">{title}</div>
        <div className={cx("mt-1 text-[14px]", isDark ? "text-white/65" : "text-[#7B716B]")}>{date}</div>
        <div className="mt-6 flex items-center gap-2 text-[14px]">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="mt-4">
          <Pill tone="primary">{badge}</Pill>
        </div>
      </div>
    </div>
  );
}

function WalletSummary({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  return (
    <div className={cx("rounded-[16px] border p-5", isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-white")}>
      <div className="text-[24px] font-medium tracking-[-0.03em]">Wallets</div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <StatCard mode={mode} label="Total wallets" value="19.8M" delta="4%" />
        <StatCard mode={mode} label="Transaction volume" value="$667.2M" delta="13%" />
        <StatCard mode={mode} label="Active policies" value="27" />
      </div>
    </div>
  );
}

function WalletTable({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  const rows = useMemo(
    () => [
      ["0×123...8765", "clt55ee4b0007mf2876z", "SVM", "AdminAccess", "B2837L", "Approved"],
      ["0×223...8764", "clt55ee4b0007mf2876z", "EVM", "TestWallet", "C2837L", "Approved"],
      ["0×323...8763", "clt55ee4b0007mf2876z", "EVM", "US_KYC", "D2837L", "Approved"],
      ["0×423...8762", "clt55ee4b0007mf2876z", "SVM", "EnterpriseUser", "F2837L", "Approved"],
      ["0×523...8761", "clt55ee4b0007mf2876z", "BTC", "EnterpriseUser", "G2837L", "Approved"],
      ["0×623...8760", "clt55ee4b0007mf2876z", "XLM", "US_KYC", "H2837L", "Approved"],
    ],
    []
  );

  return (
    <div className={cx("overflow-hidden rounded-[16px] border", isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-white")}>
      <div className={cx("border-b px-5 py-4 text-[18px] font-medium", isDark ? "border-white/10" : "border-[#E6E1DC]")}>Wallet</div>
      <TableShell
        mode={mode}
        columns={["Wallet", "Chain", "Policy", "Approval", "Owner", "Status"]}
        rows={rows.map((r) => (
          <>
            <td className="px-5 py-4 align-top">
              <div className="text-[18px] font-medium tracking-[-0.03em]">{r[0]}</div>
              <div className={cx("mt-1 text-[13px]", isDark ? "text-white/50" : "text-[#7B716B]")}>{r[1]}</div>
            </td>
            <td className="px-5 py-4 align-top">
              <div className="flex items-center gap-2"><CircleDashed className="h-4 w-4" /> {r[2]}</div>
            </td>
            <td className="px-5 py-4 align-top"><a className="underline underline-offset-2" href="#">{r[3]}</a></td>
            <td className="px-5 py-4 align-top">{r[4]}</td>
            <td className="px-5 py-4 align-top"><Pill tone="success">{r[5]}</Pill></td>
            <td className="px-5 py-4 align-top"><button className="inline-flex items-center gap-1 underline underline-offset-2"><ExternalLink className="h-4 w-4" />View</button></td>
          </>
        ))}
      />
    </div>
  );
}

function AnalyticsLayout({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  return (
    <div className="space-y-6 p-6 md:p-8">
      <TopNav mode={mode} />

      <section className="space-y-4">
        <div className="text-[48px] font-medium tracking-[-0.05em]">Analytics</div>
        <div className="flex flex-wrap items-center gap-3">
          <Chip active mode={mode}>All</Chip>
          <Chip mode={mode}>Active</Chip>
          <Chip mode={mode}>Completed</Chip>
          <div className="ml-auto flex flex-wrap gap-3"><Button variant="secondary" mode={mode}>
            Campaign
          </Button>

            <Button variant="secondary" mode={mode}>
              Date Range
            </Button>
            <Button>Export</Button>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <MetricBarChart
          mode={mode}
          title="Deal Pipeline Distribution"
          subtitle="Number of deals by pipeline stage"
          bars={[
            { label: "Initial Meeting", value: 60 },
            { label: "Qualified Demo", value: 42 },
            { label: "Proposal", value: 20 },
            { label: "Negotiation", value: 16 },
            { label: "Closed Won", value: 28 },
          ]}
        />
        <MetricBarChart
          mode={mode}
          title="Individual Deal Values"
          subtitle="Deal value across core accounts"
          bars={[
            { label: "AWS", value: 250 },
            { label: "Google", value: 200 },
            { label: "Microsoft", value: 175 },
            { label: "Apple", value: 170 },
            { label: "Meta", value: 125 },
          ]}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <StatCard mode={mode} label="Total Meetings" value="189" delta="4%" />
        <StatCard mode={mode} label="Total Registrations" value="927" delta="13%" />
        <StatCard mode={mode} label="Completed Events" value="18" />
        <StatCard mode={mode} label="Avg. Meetings / Event" value="10.50" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <EventCard mode={mode} title="NRF" date="Jan 8 - 11" location="New York, NY" badge="View 44,785 Participants" />
        <EventCard mode={mode} title="CES" date="Mar 2 - 4" location="Las Vegas, NV" badge="View 91,533 Participants" />
      </div>

      <div className={cx("grid gap-6 lg:grid-cols-[1fr_320px]", isDark ? "text-white" : "text-[#1F1B1A]")}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <SearchBar placeholder="Search 250k + B2B Events" />
            <Button variant="secondary">Sponsors</Button>
            <Button variant="secondary">Attendees</Button>
            <Button variant="secondary">Job Titles</Button>
            <Button variant="secondary">Topics</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <StatCard mode={mode} label="Total wallets" value="19.8M" delta="4%" />
            <StatCard mode={mode} label="Transaction count" value="134.2M" delta="13%" />
            <StatCard mode={mode} label="Transaction volume" value="$667.2M" />
            <StatCard mode={mode} label="Active policies" value="27" />
          </div>
          <WalletTable mode={mode} />
        </div>

        <div className="space-y-6">
          <DonutMeter mode={mode} label="Calculate ROI" value={73} />
          <div className={cx("rounded-[16px] border p-5", isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-white")}>
            <div className="text-[18px] font-medium tracking-[-0.03em]">Ops Account</div>
            <div className={cx("mt-1 text-[12px]", isDark ? "text-white/55" : "text-[#7B716B]")}>ID: c3045ee4q3er37m</div>
            <div className="mt-4 space-y-3 text-[14px]">
              <div className="flex justify-between"><span>Total balance</span><strong>$1,861.83</strong></div>
              <div className="flex justify-between"><span>Ethereum</span><strong>0.1200</strong></div>
              <div className="flex justify-between"><span>USDC</span><strong>$514.56</strong></div>
              <div className="flex justify-between"><span>Solana</span><strong>4.00</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MeetingsCampaignLayout({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  const rows = [
    ["CES", "Active", "Mar 2 - 4", "Las Vegas, NV", "60", "245", "156"],
    ["NRF", "Active", "Jan 8 - 11", "New York, NY", "24", "144", "82"],
    ["MWC Barcelona", "Active", "May 2 - 5", "Barcelona, Spain", "69", "320", "213"],
    ["SXSW", "Active", "Mar 12 - 18", "Austin, TX", "51", "413", "577"],
  ];

  return (
    <div className="space-y-6 p-6 md:p-8">
      <TopNav mode={mode} />
      <section>
        <div className="text-[48px] font-medium tracking-[-0.05em]">Meetings</div>
        <div className="mt-4 flex gap-8 border-b border-[#E6E1DC]">
          {["Campaigns", "Messages", "Analytics", "Agents"].map((t, idx) => (
            <button key={t} className={cx("relative pb-3 text-[14px] font-medium", idx === 0 ? "text-[#5F57FF]" : isDark ? "text-white/55" : "text-[#7B716B]")}>
              {t.toUpperCase()}
              {idx === 0 && <span className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full" style={{ background: colors.primary }} />}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[28px] font-medium">Campaign Manager</div>
            <div className={cx("mt-1 text-[14px]", isDark ? "text-white/55" : "text-[#7B716B]")}>Manage your event campaigns and subcampaigns</div>
          </div>
          <Button>
            <Plus className="h-4 w-4" /> Create Campaign
          </Button>
        </div>

        <TableShell
          mode={mode}
          columns={["Campaign", "Status", "Dates", "Location", "Meetings", "Registrations", "Connections"]}
          rows={rows.map((r) => (
            <>
              <td className="px-5 py-4"><span className="font-medium">{r[0]}</span></td>
              <td className="px-5 py-4"><Pill tone={r[1] === "Active" ? "success" : "neutral"}>{r[1]}</Pill></td>
              <td className="px-5 py-4">{r[2]}</td>
              <td className="px-5 py-4">{r[3]}</td>
              <td className="px-5 py-4">{r[4]}</td>
              <td className="px-5 py-4">{r[5]}</td>
              <td className="px-5 py-4">{r[6]}</td>
            </>
          ))}
        />
      </section>
    </div>
  );
}

function AttendeesLayout({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  const rows = [
    ["Aaliyah Abbott", "VP of User Experience", "Velos", "Confirmed", "10-50", "No", "No"],
    ["Aaron Moss", "CTO", "Zenith Systems", "Confirmed", "50k-100k", "No", "No"],
    ["Abigail Kowalski", "VP of Customer Success", "North Star Solutions", "Confirmed", "50k-100k", "No", "No"],
    ["Adnan Silva", "Director of Partnerships", "Meridian Stream", "Confirmed", "1-10", "No", "No"],
  ];

  return (
    <div className="space-y-6 p-6 md:p-8">
      <TopNav mode={mode} />
      <section>
        <div className="text-[48px] font-medium tracking-[-0.05em]">CES</div>
        <div className={cx("mt-2 text-[14px]", isDark ? "text-white/55" : "text-[#7B716B]")}>Mar 2 - 4 · Las Vegas Convention Center</div>
        <div className="mt-5 flex gap-3">
          <Button variant="secondary">Subscribe to Event</Button>
        </div>
        <div className="mt-6 flex gap-8 border-b border-[#E6E1DC]">
          {["Book Meetings", "Attendees", "Organizations", "About", "Insights"].map((t, idx) => (
            <button key={t} className={cx("relative pb-3 text-[14px] font-medium", idx === 1 ? "text-[#5F57FF]" : isDark ? "text-white/55" : "text-[#7B716B]")}>
              {t.toUpperCase()}
              {idx === 1 && <span className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full" style={{ background: colors.primary }} />}
            </button>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <SearchBar placeholder="Search for attendees..." />
        {["Status", "Job Title", "Organization", "Lists", "Filters"].map((t) => <Button key={t} variant="secondary">{t}</Button>)}
        <div className="ml-auto flex gap-3">
          <Button variant="ghost"><Download className="h-4 w-4" /> Export 91,533 attendees</Button>
          <Button><Sparkles className="h-4 w-4" /> Book Meetings</Button>
        </div>
      </div>

      <TableShell
        mode={mode}
        columns={["", "Name", "Job Title", "Organization", "Status", "Employee Range", "Is Speaking?", "Is Sponsoring?"]}
        rows={rows.map((r) => (
          <>
            <td className="px-5 py-4">☐</td>
            <td className="px-5 py-4"><div className="font-medium">{r[0]}</div></td>
            <td className="px-5 py-4">{r[1]}</td>
            <td className="px-5 py-4">{r[2]}</td>
            <td className="px-5 py-4"><Pill tone="success">{r[3]}</Pill></td>
            <td className="px-5 py-4">{r[4]}</td>
            <td className="px-5 py-4">{r[5]}</td>
            <td className="px-5 py-4">{r[6]}</td>
          </>
        ))}
      />
    </div>
  );
}

function EventsGridLayout({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  const cards = [
    { title: "NRF", date: "Jan 8 - 11", location: "New York, NY", badge: "View 44,785 Participants" },
    { title: "CES", date: "Mar 2 - 4", location: "Las Vegas, NV", badge: "View 91,533 Participants" },
    { title: "MWC Barcelona", date: "May 2 - 5", location: "Barcelona, Spain", badge: "View 100k+ Participants" },
    { title: "SXSW", date: "Mar 12 - 18", location: "Austin, TX", badge: "View 500k+ Participants" },
  ];

  return (
    <div className="space-y-6 p-6 md:p-8">
      <TopNav mode={mode} />
      <section>
        <div className="text-[48px] font-medium tracking-[-0.05em]">Events</div>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex gap-3">
            {["Sponsors", "Attendees", "Job Titles", "Topics", "Format", "Country", "Region"].map((t) => <Chip key={t}>{t}</Chip>)}
          </div>
          <div className="ml-auto w-full max-w-[360px]"><SearchBar placeholder="Search 250k + B2B Events" /></div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => <EventCard key={card.title} mode={mode} {...card} />)}
      </div>
    </div>
  );
}

function TransactionsLayout({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  const rows = [
    ["Sent USDC", "Transfer", "Treasury-1", "Pending", "10/22/24"],
    ["Sent ETH", "Transfer", "Ops Wallet", "Completed", "10/21/24"],
    ["Swapped to SOL", "Swap", "Payroll", "Failed", "10/21/24"],
    ["Onramped USDC", "Onramp", "Cold Storage", "Completed", "10/21/24"],
  ];

  return (
    <div className="space-y-6 p-6 md:p-8">
      <TopNav mode={mode} />
      <section className="flex items-center justify-between">
        <div className="text-[32px] font-medium">Transactions</div>
        <Button>New transaction</Button>
      </section>
      <div className="grid gap-4 md:grid-cols-[1fr_auto_auto_auto]">
        <SearchBar placeholder="Search by wallet or transaction data" />
        <Button variant="secondary">Type</Button>
        <Button variant="secondary">Status</Button>
        <Button variant="secondary">Chain</Button>
      </div>
      <TableShell
        mode={mode}
        columns={["Activity", "Amount", "Type", "From", "Status", "Time"]}
        rows={rows.map((r) => (
          <>
            <td className="px-5 py-4"><div className="font-medium">{r[0]}</div><div className={cx("text-[12px]", isDark ? "text-white/55" : "text-[#7B716B]")}>on Base · External transfer</div></td>
            <td className="px-5 py-4">$1,200.00</td>
            <td className="px-5 py-4">{r[1]}</td>
            <td className="px-5 py-4">{r[2]} <ArrowRight className="inline-block h-4 w-4" /></td>
            <td className="px-5 py-4"><Pill tone={r[3] === "Failed" ? "destructive" : r[3] === "Pending" ? "warning" : "success"}>{r[3]}</Pill></td>
            <td className="px-5 py-4">{r[4]}</td>
          </>
        ))}
      />
    </div>
  );
}

function AccountDrawer({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  return (
    <div className="space-y-6 p-6 md:p-8">
      <TopNav mode={mode} />
      <div className="mx-auto max-w-[360px] rounded-[24px] border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.12)]" style={{ background: isDark ? "#14112A" : "white", borderColor: isDark ? "rgba(255,255,255,0.1)" : colors.border }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[20px] font-medium">Ops Account</div>
            <div className={cx("text-[12px]", isDark ? "text-white/55" : "text-[#7B716B]")}>ID: c3045ee4q3er37m</div>
          </div>
          <button className="rounded-full border p-2" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : colors.border }}><X className="h-4 w-4" /></button>
        </div>
        <div className={cx("mt-4 rounded-[18px] border p-4", isDark ? "border-white/10 bg-white/5" : "border-[#E6E1DC] bg-[#F7F7F4]")}>
          <div className="text-[14px]">Total balance</div>
          <div className="mt-1 text-[32px] font-medium">$1,861.83</div>
          <div className="mt-4 space-y-3">
            {["Ethereum", "USDC", "Solana"].map((t) => (
              <div key={t} className="flex items-center justify-between">
                <div className="flex items-center gap-2"><Wallet className="h-4 w-4" />{t}</div>
                <div>0.1200</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {[["ID", "c3045ee4q3er37m"], ["Address", "0x123...8765"], ["Chain", "EVM"], ["Configuration", "Custodial (Bridge)"], ["Balance", "$6,130.00"], ["Last active", "10/22/24 02:38:46 AM"]].map(([a, b]) => (
            <div key={a} className="flex justify-between border-b pb-2" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : colors.border }}>
              <span className={cx("text-[13px]", isDark ? "text-white/60" : "text-[#7B716B]")}>{a}</span>
              <span className="text-[13px]">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FocusedModal({ mode }: { mode: Mode }) {
  const isDark = mode === "dark";
  return (
    <div className="space-y-6 p-6 md:p-8">
      <TopNav mode={mode} />
      <div className="rounded-[28px] border bg-black/20 p-4 backdrop-blur-sm" style={{ borderColor: isDark ? "rgba(255,255,255,0.18)" : colors.border }}>
        <div className="mx-auto max-w-[920px] rounded-[28px] border p-5 shadow-[0_24px_80px_rgba(0,0,0,0.15)]" style={{ background: isDark ? "#14112A" : "white", borderColor: colors.primary }}>
          <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : colors.border }}>
            <div className="flex items-center gap-3 text-[24px] font-medium"><Mail className="h-6 w-6" /> Send Initial Email</div>
            <div className="flex gap-3">
              <Button variant="secondary"><Pencil className="h-4 w-4" /> Edit Copy</Button>
              <Button><Sparkles className="h-4 w-4" /> Send Email</Button>
            </div>
          </div>
          <div className="space-y-4 p-4">
            <div><strong>To:</strong> <span className="ml-3 inline-flex flex-wrap gap-2">{["Aaron Moss", "Abigail Kowalski", "Adriana Jenkins"].map((x) => <Pill key={x} tone="primary">{x}</Pill>)}</span></div>
            <div className="border-b pb-3" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : colors.border }}><strong>Subject:</strong> Are you attending CES?</div>
            <div>
              <strong>Preview:</strong>
              <div className="mt-3 rounded-[16px] border p-4 text-[14px] leading-7" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : colors.border }}>
                Hi {"{First Name}"},<br /><br />I hope you’re having a great week.<br /><br />I noticed that you and {"{Company Name}"} team are planning to attend CES this March.<br /><br />I’d love the chance to connect briefly while we’re both on the ground.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageSelector({ setPage, mode }: { setPage: (p: string) => void; mode: Mode }) {
  const cards = [
    ["Analytics", "Dashboard metrics, charts, and tables"],
    ["Campaigns", "Meetings campaign manager table"],
    ["Attendees", "Attendee list and actions"],
    ["Events", "Event grid layout"],
    ["Transactions", "Wallet transaction table"],
    ["Wallet Drawer", "Sidebar / details drawer"],
    ["Focused Modal", "Layered modal overlay"],
  ] as const;

  return (
    <AppShell mode={mode}>
      <TopNav mode={mode} />
      <div className="p-6 md:p-8">
        <SectionHeader mode={mode} eyebrow="Privy-style layouts" title="Signalix Layout Library" description="Click a layout to preview it." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(([title, desc]) => (
            <button
              key={title}
              onClick={() => setPage(title)}
              className={`
    group
    relative
    overflow-hidden
    rounded-[20px]
    border
    p-5
    text-left
    transition-all
    duration-500

    ${mode === "dark"
                  ? `
          border-white/12
          bg-white/[0.02]
           backdrop-blur-xl

          hover:border-[#818CF8]/50
          hover:bg-white/[0.04]

          hover:shadow-[0_12px_40px_rgba(99,102,241,0.16)]

          hover:-translate-y-1
        `
                  : `
          border-[#E6E1DC]
          bg-white

          hover:border-[#6366F1]/30
          hover:bg-white

          hover:shadow-[0_12px_40px_rgba(99,102,241,0.10)]

          hover:-translate-y-1
        `
                }
  `}
            >
              <span
                className="
      pointer-events-none
      absolute
      inset-0

      opacity-0
      transition-opacity
      duration-500

      group-hover:opacity-100
    "
              >
                <span
                  className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_45%)]
      "
                />
              </span>

              <div className="relative z-10 text-[18px] font-medium">
                {title}
              </div>

              <div
                className={`
      relative z-10 mt-1 text-[14px]
      ${mode === "dark" ? "text-white/45" : "text-[#7B716B]"}
    `}
              >
                {desc}
              </div>
            </button>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

export default function SignalixPrivyLayouts() {
  const [page, setPage] = useState("Analytics");
  const [mode, setMode] = useState<Mode>("light");

  const view = (() => {
    switch (page) {
      case "Campaigns":
        return <MeetingsCampaignLayout mode={mode} />;
      case "Attendees":
        return <AttendeesLayout mode={mode} />;
      case "Events":
        return <EventsGridLayout mode={mode} />;
      case "Transactions":
        return <TransactionsLayout mode={mode} />;
      case "Wallet Drawer":
        return <AccountDrawer mode={mode} />;
      case "Focused Modal":
        return <FocusedModal mode={mode} />;
      case "Analytics":
        return <AnalyticsLayout mode={mode} />;
      default:
        return <AnalyticsLayout mode={mode} />;
    }
  })();

  return (
    <div className="space-y-4 p-4 md:p-6" style={{ background: mode === "dark" ? "#0E091E" : "#F7F7F4" }}>
      <div className="flex items-center justify-between rounded-[16px] border px-4 py-3" style={{ background: mode === "dark" ? "#14112A" : "white", borderColor: mode === "dark" ? "rgba(255,255,255,0.12)" : colors.border }}>
        <div className="flex items-center gap-3">
          <Button variant={mode === "light" ? "primary" : "secondary"}>{mode === "light" ? "Light mode" : "Dark mode"}</Button>
          <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="rounded-full border px-4 py-2 text-[14px]" style={{ borderColor: colors.border }}>
            Toggle mode
          </button>
        </div>
        <button onClick={() => setPage("Analytics")} className="rounded-full border px-4 py-2 text-[14px]" style={{ borderColor: colors.border }}>
          Back to library
        </button>
      </div>

      <div className="overflow-hidden rounded-[24px] border" style={{ borderColor: mode === "dark" ? "rgba(255,255,255,0.12)" : colors.border }}>
        {view}
      </div>

      <PageSelector setPage={setPage} mode={mode} />
    </div>
  );
}


//  const chartGradient = isDark
//     ? "linear-gradient(180deg, #EBD3F8 0%, #C4B5FD 25%, #A78BFA 50%, #818CF8 75%, #5F57FF 100%)"
//     : "linear-gradient(180deg, #F8F0FF 0%, #EBD3F8 25%, #C4B5FD 50%, #818CF8 75%, #5F57FF 100%)";
