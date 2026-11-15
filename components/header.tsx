"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "./avatar";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/explorar", label: "Explorar" },
  { href: "/classes", label: "Classes" },
  { href: "/missoes", label: "Missões" },
  { href: "/ranking", label: "Ranking" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const Logo = isHome ? "h1" : "span";

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="sticky top-0 w-full z-10 py-3 bg-header border-b border-border">
        <div className="md:gap-4.5 page-container flex gap-3 items-center">
          <Link href="/" className="flex items-center">
            <Logo className="heading text-display-logo">
              Scream<span className="text-primary">Rank</span>
            </Logo>
          </Link>
          <nav className="lg:w-full md:flex hidden">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className="text-nav rounded-field px-3 py-2 text-muted transition-colors duration-200 hover:text-foreground aria-[current=page]:bg-surface-raised aria-[current=page]:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <input
            type="text"
            id="search"
            placeholder="Buscar filme"
            className="lg:w-[520px] bg-surface text-field rounded-pill px-3 py-2 border border-border w-full"
          />
          <Link
            href="/perfil"
            className="lg:block hidden text-tag text-nowrap text-gold border border-gold rounded-pill px-3 py-1"
          >
            Nv. 14 · 2.480 XP
          </Link>
          <Link href="/perfil">
            <Avatar name="Feliphe Paz" type="blade" />
          </Link>
        </div>
      </header>
      <nav className="md:hidden fixed bottom-0 w-full z-10 py-3 bg-header border-t border-border">
        <ul className="justify-around flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className="text-nav rounded-field px-3 py-2 text-muted transition-colors duration-200 hover:text-foreground aria-[current=page]:bg-surface-raised aria-[current=page]:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
