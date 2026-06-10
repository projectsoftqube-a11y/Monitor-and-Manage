"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaApple, FaGooglePlay, FaFacebook, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/", "");
      const element = document.querySelector(targetId);
      if (element) {
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(element, { offset: -80, duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-[1520px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-20 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-32 h-14 md:w-40 md:h-16">
                <Image
                  src="/logo.svg"
                  alt="Monitor & Manage Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed text-base">
              The next-generation security operations platform. Guard
              monitoring, attendance, and reporting all in one place.
            </p>
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.mandm.staff"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-800 transition-colors w-full sm:w-auto inline-flex"
              >
                <FaGooglePlay className="w-4 h-4 text-green-500" />
                <div className="text-left">
                  <div className="text-[9px] leading-none text-slate-400">
                    GET IT ON
                  </div>
                  <div className="text-xs font-semibold leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
              <a
                href="https://apps.apple.com/us/app/m-m-staff-app/id1660700767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-800 transition-colors w-full sm:w-auto inline-flex"
              >
                <FaApple className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-[9px] leading-none text-slate-400">
                    Download on the
                  </div>
                  <div className="text-xs font-semibold leading-tight">
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-base">
              Quick Links
            </h4>
            <ul className="space-y-4 text-base">
              <li>
                <Link
                  href="/#home"
                  onClick={(e) => handleNavClick(e, "/#home")}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  onClick={(e) => handleNavClick(e, "/#features")}
                  className="hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#dashboard"
                  onClick={(e) => handleNavClick(e, "/#dashboard")}
                  className="hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/#mobile-app"
                  onClick={(e) => handleNavClick(e, "/#mobile-app")}
                  className="hover:text-primary transition-colors"
                >
                  Mobile App
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  onClick={(e) => handleNavClick(e, "/#pricing")}
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#certificates"
                  onClick={(e) => handleNavClick(e, "/#certificates")}
                  className="hover:text-primary transition-colors"
                >
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-base">
              Legal & Social
            </h4>
            <ul className="space-y-4 mb-8 text-base">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/guardmonitormanage/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/guardmonitormanage/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-base">
              Contact Info
            </h4>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <a
                  href="https://maps.google.com/?q=07-01, Plaza Kiara, Jalan Semenyih, 43500 Selangor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  07-01, Plaza Kiara, Jalan Semenyih, 43500 Selangor
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:0109872885"
                  className="hover:text-primary transition-colors"
                >
                  010-987 2885
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2.5 font-sans break-all">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:admin@monitormanage.com.my"
                  className="hover:text-primary transition-colors"
                >
                  admin@monitormanage.com.my
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Git */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>&copy; 2024 Monitor & Manage. All rights reserved.</p>
          <p>
            Website design & developed by{" "}
            <a
              href="https://www.softqubes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors cursor-pointer font-bold"
            >
              SOFTQUBE TECHNOLOGIES LLC.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
