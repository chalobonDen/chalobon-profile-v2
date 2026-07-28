"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const t = useTranslations("education-section");
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      tl.from("[data-title]", {
        opacity: 0,
        y: 40,
        duration: 0.8,
      })
        .from(
          "[data-line]",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          "[data-card]",
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );

      gsap.to("[data-cap]", {
        y: -8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2,
      });
    },
    { scope: container },
  );

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      ref={container}
      className="relative overflow-hidden py-28"
    >
      <div className="container relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div data-title className="text-center">
          <span className="inline-flex rounded-full border bg-card px-4 py-1 text-sm text-primary">
            {t("badge")}
          </span>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">{t("title")}</h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-5 max-w-3xl">
          <div
            data-line
            className="absolute top-6 left-0 h-0.5 w-full bg-primary/30"
          />

          <div className="flex justify-between">
            <div className="flex flex-col items-center absolute top-4 -left-2">
              <div className="size-4 rounded-full bg-primary" />
              <span className="mt-3 text-sm font-medium">{t("startYear")}</span>
            </div>

            <div className="flex flex-col items-center absolute top-4 -right-2">
              <div className="size-4 rounded-full bg-primary" />
              <span className="mt-3 text-sm font-medium">{t("endYear")}</span>
            </div>
          </div>
        </div>

        <Card
          data-card
          className={cn(
            "mx-auto mt-14 max-w-2xl rounded-[32px] border border-white/20 bg-card/70 p-8 shadow-xl backdrop-blur-xl",
            "ring-0",
          )}
        >
          <CardContent className="flex flex-col gap-6 md:flex-row">
            <div className="flex justify-center md:block">
              <div
                data-cap
                className="flex size-20 items-center justify-center rounded-3xl bg-primary/10"
              >
                <GraduationCap className="size-10 text-primary" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold">{t("university")}</h3>

              <p className="mt-2 text-lg text-primary">{t("faculty")}</p>

              <p className="mt-1 text-muted-foreground">{t("major")}</p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2">
                  <Calendar className="size-4" />
                  {t("duration")}
                </div>

                <div className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground flex items-center">
                  {t("gpa")}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
