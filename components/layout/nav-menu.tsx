"use client";
import { menus } from "@/constants/menus";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMenu() {
  const t = useTranslations("menu");

  const pathname = usePathname();

  const isHome = pathname === "/" || /^\/(en|th)$/.test(pathname);

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {menus.map((menu) => {
        const href = isHome ? `#${menu.href}` : `/#${menu.href}`;

        return (
          <Link
            key={menu.href}
            href={href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t(menu.key)}
          </Link>
        );
      })}
    </nav>
  );
}
