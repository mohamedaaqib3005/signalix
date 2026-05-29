// src/components/molecules/search-input/search-input.tsx
import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  wrapperClassName?: string;
};

export function SearchInput({
  className,
  wrapperClassName,
  ...props
}: SearchInputProps) {
  return (
    <div
      className={cn(
        "flex h-11 items-center gap-3 rounded-full border bg-[var(--ds-surface)] px-4 transition-colors",
        "border-[var(--ds-border)] hover:bg-[var(--ds-surface-hover)]",
        "focus-within:border-[var(--ds-border-focus)] focus-within:ring-2 focus-within:ring-[var(--ds-ring)] focus-within:ring-offset-2",
        wrapperClassName
      )}
    >
      <Search className="h-4 w-4 shrink-0 text-[var(--ds-text-muted)]" />
      <input
        className={cn(
          "w-full bg-transparent text-sm outline-none placeholder:text-[var(--ds-text-soft)]",
          className
        )}
        {...props}
      />
    </div>
  );
}