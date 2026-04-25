"use client";
import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.glass} />
      <div className={styles.content}>
        <a className={styles.logo} href="#">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
            <path d="M20 4 L22.5 16 L20 28 L17.5 16 Z" fill="url(#nl1)" />
            <path d="M5 14 L17.5 16 L30 14 L17.5 12 Z" fill="url(#nl1)" />
            <path d="M28 3 L30 10 L28 17 L26 10 Z" fill="url(#nl2)" opacity="0.65" />
            <defs>
              <linearGradient id="nl1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
              <linearGradient id="nl2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoText}>Sparkle<em> Flow</em></span>
        </a>

        <div className={styles.center}>
          <button className={styles.link} onClick={() => scrollTo("features")}>Özellikler</button>
          <button className={styles.link} onClick={() => scrollTo("how-it-works")}>Nasıl Çalışır</button>
          <button className={styles.link} onClick={() => scrollTo("pricing")}>Paketler</button>
          <button className={styles.link} onClick={() => scrollTo("waitlist")}>Waitlist</button>
        </div>

        <button className={styles.cta} onClick={() => scrollTo("waitlist")}>
          Waitlist&apos;e Katıl
        </button>

        <button
          className={`${styles.hamburger} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menüyü aç"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        <button className={styles.mobileLink} onClick={() => scrollTo("features")}>Özellikler</button>
        <button className={styles.mobileLink} onClick={() => scrollTo("how-it-works")}>Nasıl Çalışır</button>
        <button className={styles.mobileLink} onClick={() => scrollTo("pricing")}>Paketler</button>
        <button className={styles.mobileLink} onClick={() => scrollTo("waitlist")}>Waitlist</button>
        <button className={styles.mobileCta} onClick={() => scrollTo("waitlist")}>Waitlist&apos;e Katıl</button>
      </div>
    </nav>
  );
}
