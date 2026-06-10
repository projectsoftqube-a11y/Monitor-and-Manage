"use client";

import { useEffect } from "react";

export default function TawkTracker() {
  useEffect(() => {
    // Disable tawk.to on localhost / 127.0.0.1 to avoid domain whitelist security errors in dev environment
    if (
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1")
    ) {
      console.log("Tawk.to tracking is disabled on localhost to avoid dev-only console warnings.");
      return;
    }

    // Only load tawk.to on client-side after hydration is complete
    const w = window as any;
    w.Tawk_API = w.Tawk_API || {};
    w.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/639952c1b0d6371309d44f92/1gk7emhrt";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      s1.remove();
      if (w.Tawk_API && typeof w.Tawk_API.shutdown === "function") {
        w.Tawk_API.shutdown();
      }
    };
  }, []);

  return null;
}
