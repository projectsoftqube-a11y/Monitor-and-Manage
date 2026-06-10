"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  // { name: "Dashboard", href: "/#dashboard" },
  { name: "Mobile App", href: "/#mobile-app" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Certificates", href: "/#certificates" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const isHome = pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/", "");
      const element = document.querySelector(targetId);
      if (element) {
        setActiveSection(targetId.replace("#", ""));
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(element, { offset: -80, duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const sectionIds = [
      ...NAV_LINKS.map((l) => l.href.replace("/#", "")),
      "contact",
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHome) return;

      const offset = 140; // header height + breathing room
      let current = sectionIds[0];
      let closestTop = -Infinity;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        // Pick the section whose top has passed the offset line but is closest to it
        if (top <= offset && top > closestTop) {
          closestTop = top;
          current = id;
        }
      }
      // Snap to the last section when scrolled to the very bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-100 shadow-sm ${
        isScrolled ? "py-3" : "py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-380 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-32 h-14 md:w-40 md:h-16 group-hover:scale-105 transition-transform">
            <Image src="/logo.svg" alt="Monitor & Manage Logo" fill className="object-contain object-left transition-all duration-500" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = isHome && activeSection === link.href.replace("/#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative text-base font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className={`group relative text-base font-medium transition-colors mr-2 ${
              isHome && activeSection === "contact"
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Contact
            <span
              className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ease-out ${
                isHome && activeSection === "contact" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
          <div className="flex items-center gap-2">
            <a href="https://play.google.com/store/apps/details?id=com.mandm.staff" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-secondary hover:bg-slate-200 text-foreground">
              <FaGooglePlay className="w-4 h-4 text-primary" />
            </a>
            <a href="https://apps.apple.com/us/app/m-m-staff-app/id1660700767" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full transition-colors bg-secondary hover:bg-slate-200 text-foreground">
              <FaApple className="w-5 h-5 text-foreground" />
            </a>
          </div>
          <a
            href="http://portal.monitormanage.com.my/portal/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-premium transition-all hover:-translate-y-0.5 inline-block"
          >
            Log In
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 transition-colors text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-6 flex flex-col gap-4 lg:hidden"
        >
          {NAV_LINKS.map((link) => {
            const isActive = isHome && activeSection === link.href.replace("/#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className={`text-base font-medium py-2 border-b border-secondary transition-colors ${
                  isActive
                    ? "text-primary border-primary/30 pl-2"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleNavClick(e, "/#contact");
            }}
            className="text-base font-medium text-foreground py-2 border-b border-secondary"
          >
            Contact
          </Link>

          <div className="flex gap-4 mt-4">
            <a href="https://play.google.com/store/apps/details?id=com.mandm.staff" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary text-foreground font-medium">
              <FaGooglePlay className="w-4 h-4 text-primary" /> Play Store
            </a>
            <a href="https://apps.apple.com/us/app/m-m-staff-app/id1660700767" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary text-foreground font-medium">
              <FaApple className="w-5 h-5" /> App Store
            </a>
          </div>
          <a
            href="http://portal.monitormanage.com.my/portal/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-2 text-center block"
          >
            Log In
          </a>
        </motion.div>
      )}
    </header>
  );
}
