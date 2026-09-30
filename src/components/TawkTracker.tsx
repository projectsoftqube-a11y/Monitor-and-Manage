"use client";

import { useEffect } from "react";

const TAWK_SRC = "https://embed.tawk.to/639952c1b0d6371309d44f92/1gk7emhrt";

export default function TawkTracker() {
  useEffect(() => {
    // React 18+ StrictMode runs effects twice in dev; bail out if the embed is already present
    if (document.querySelector(`script[src="${TAWK_SRC}"]`)) return;

    const w = window as any;
    w.Tawk_API = w.Tawk_API || {};
    w.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = TAWK_SRC;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null;
}
