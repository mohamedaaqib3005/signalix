// src/components/atoms/button/button.tsx

import * as React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<typeof ShadcnButton> & {
  variant?: "primary" | "secondary" | "ghost" | "accent";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const variantClasses: Record<
    NonNullable<ButtonProps["variant"]>,
    string
  > = {
    primary: cn(
      `
      group
      relative
      isolate

      overflow-hidden

      text-[var(--ds-button-primary-text)]

      shadow-[var(--ds-button-primary-shadow)]

      transition-[box-shadow]
      duration-[var(--ds-duration-normal)]

      hover:shadow-[var(--ds-button-primary-shadow-hover)]
      `
    ),

    secondary: cn(
      `
      border border-border
      bg-secondary
      text-foreground

      hover:bg-accent
      hover:text-accent-foreground
      `
    ),

    ghost: cn(
      `
      bg-transparent
      text-foreground

      hover:bg-accent
      hover:text-accent-foreground
      `
    ),

    accent: cn(
      `
      bg-accent
      text-[var(--ds-accent-strong)]

      hover:bg-[var(--ds-accent-strong)]
      hover:text-white
      `
    ),
  };

  return (
    <ShadcnButton
      className={cn(
        `
        relative

        h-[var(--ds-button-height)]

        rounded-[var(--ds-button-radius)]

        px-[var(--ds-button-padding-x)]

        text-sm
        font-medium
        tracking-[-0.01em]

        transition-all

        focus-visible:ring-2
        focus-visible:ring-ring
        focus-visible:ring-offset-2
        `,
        variantClasses[variant],
        className
      )}
      style={
        variant === "primary"
          ? {
            backgroundImage:
              "var(--ds-gradient-primary)",
          }
          : undefined
      }
      {...props}
    >
      {/* LABEL */}
      <span className="relative z-20">
        {children}
      </span>

      {/* PRIMARY HOVER LAYER */}
      {variant === "primary" && (
        <>
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              rounded-full

              bg-[image:var(--ds-gradient-primary-hover)]

              bg-[length:200%_100%]
              bg-left

              opacity-0

              transition-[opacity,background-position]
              duration-[var(--ds-duration-normal)]

              group-hover:opacity-100
              group-hover:bg-right
            "
          />

          {/* GLOSS OVERLAY */}
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              rounded-full

              bg-[image:var(--ds-button-primary-overlay)]

              opacity-0

              transition-opacity
              duration-[var(--ds-duration-normal)]

              group-hover:opacity-100
            "
          />
        </>
      )}
    </ShadcnButton>
  );
}