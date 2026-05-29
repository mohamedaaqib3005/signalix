// src/components/molecules/terms-content.tsx

import { Label } from "@/components/atoms/label";

const sections = [
  {
    title: "1. Introduction",
    content:
      "Welcome to Signalix. By accessing or using our platform, you agree to comply with and be bound by these Terms and Conditions.",
  },
  {
    title: "2. User Responsibilities",
    content:
      "Users are responsible for maintaining the confidentiality of their accounts and ensuring that all information provided is accurate and up to date.",
  },
  {
    title: "3. Acceptable Use",
    content:
      "You agree not to misuse the platform, attempt unauthorized access, disrupt services, or engage in any harmful or illegal activities.",
  },
  {
    title: "4. Data & Privacy",
    content:
      "Signalix processes and stores data in accordance with our privacy policy and industry-standard security practices.",
  },
  {
    title: "5. Subscription & Billing",
    content:
      "Paid plans are billed according to the selected subscription cycle. Fees are non-refundable unless otherwise specified.",
  },
  {
    title: "6. Termination",
    content:
      "We reserve the right to suspend or terminate accounts that violate these terms or misuse the platform.",
  },
];

export function TermsContent() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1600px] px-4 lg:px-6">
      <div
        className="
            overflow-hidden
            rounded-[32px]

            border
            border-[var(--ds-border)]

            bg-[var(--ds-surface)]

            shadow-[0_10px_35px_rgba(15,23,42,0.06)]
          "
      >
        {/* HEADER */}
        <div
          className="
              border-b
              border-[var(--ds-border)]

              px-8
              py-6
            "
        >
          <div className="mb-4 flex items-center gap-3">
            <Label variant="primary">
              Legal
            </Label>

            <Label variant="accent">
              Terms & Conditions
            </Label>
          </div>

          <h1
            className="
                text-3xl
                font-semibold
                tracking-[-0.03em]

                text-[var(--ds-text)]
              "
          >
            Terms & Conditions
          </h1>

          <p
            className="
                mt-3
                max-w-3xl
                text-sm
                leading-7

                text-[var(--ds-text-muted)]
              "
          >
            Please read these terms carefully before using the
            Signalix platform and services.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 px-8 py-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="
                  rounded-[24px]

                  border
                  border-[var(--ds-border)]

                  bg-[var(--ds-bg)]

                  p-6

                  transition-all
                  duration-300

                  hover:border-[var(--ds-border-hover)]
                "
            >
              <h2
                className="
                    mb-3
                    text-lg
                    font-semibold
                    tracking-[-0.02em]

                    text-[var(--ds-text)]
                  "
              >
                {section.title}
              </h2>

              <p
                className="
                    text-sm
                    leading-7

                    text-[var(--ds-text-muted)]
                  "
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}