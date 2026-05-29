// src/components/atoms/label/label.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type LabelVariant =
  | "default"
  | "primary"
  | "accent"
  | "success"
  | "warning"
  | "reject"
  | "info"
  | "neutral";

type LabelProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: LabelVariant;
};

const variantClasses: Record<LabelVariant, string> = {
  default: cn(
    "bg-[var(--ds-surface)]",
    "text-[var(--ds-text)]",
    "border-[var(--ds-border)]"
  ),
  primary: cn(
    "bg-[var(--ds-primary-soft)]",
    "text-[var(--ds-primary)]",
    "border-[var(--ds-primary)]/20"
  ),
  accent: cn(
    "bg-[var(--ds-accent)]",
    "text-[var(--ds-accent-strong)]",
    "border-[var(--ds-accent-strong)]/20"
  ),
  success: cn(
    "bg-[var(--ds-success-soft)]",
    "text-[var(--ds-success-active)]",
    "border-[var(--ds-success)]/20"
  ),
  warning: cn(
    "bg-[var(--ds-warning-soft)]",
    "text-[var(--ds-warning-active)]",
    "border-[var(--ds-warning)]/20"
  ),
  reject: cn(
    "bg-[var(--ds-reject-soft)]",
    "text-[var(--ds-reject-active)]",
    "border-[var(--ds-reject)]/20"
  ),
  info: cn(
    "bg-[var(--ds-info-soft)]",
    "text-[var(--ds-info-active)]",
    "border-[var(--ds-info)]/20"
  ),
  neutral: cn(
    "bg-[var(--ds-surface-soft)]",
    "text-[var(--ds-text-muted)]",
    "border-[var(--ds-border)]"
  ),
};

export function Label({
  className,
  variant = "default",
  ...props
}: LabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[-0.01em]",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}