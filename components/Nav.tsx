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
          <img src="/logo.png" alt="Sparkle Flow" width={36} height={36} style={{ objectFit: "contain" }} />
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
