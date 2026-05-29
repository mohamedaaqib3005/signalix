// src/components/molecules/header.tsx

import Image from "next/image";

import { Button } from "@/components/atoms/buttons";
import { SearchInput } from "@/components/atoms/searchinput";
import { Label } from "@/components/atoms/label";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 lg:px-6">
      <div
        className="
          mx-auto
          max-w-[1600px]
          overflow-hidden

          rounded-[34px]

          border
          border-[var(--ds-border)]

          bg-[var(--ds-surface)]

          backdrop-blur-2xl

          shadow-[0_10px_35px_rgba(15,23,42,0.08)]
        "
      >
        <div className="flex w-full items-center gap-6 px-14 py-4">
          {/* LOGO */}
          <div className="relative h-[80px] w-[200px] shrink-0">
            <Image
              src="/Signalix-logo-AeonikPro (1).png"
              alt="Signalix logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="ml-auto flex items-center gap-4">
            {/* LABEL */}
            <Label variant="primary">
              AI CRM
            </Label>

            {/* SEARCH */}
            <div className="w-[320px]">
              <SearchInput placeholder="Search..." />
            </div>

            {/* BUTTON */}
            <Button variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}