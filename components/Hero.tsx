"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHeroSubmit = () => {
    const input = document.getElementById("hero-email") as HTMLInputElement;
    if (!input?.value.trim().includes("@")) { input?.focus(); return; }
    scrollToWaitlist();
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.beamFlare} />
      <div className={styles.beam} />
      <div className={styles.beamGlow} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Yapay Zeka ile Sosyal Medya Otomasyonu
        </div>
        <h1 className={styles.title}>
          İşletmenizin sosyal medya içerik üretimini otomatik hale getirin
        </h1>
        <p className={styles.sub}>
          Küçük ekipler için tasarlandı. Sparkle Flow, işletmenizin marka sesini öğrenir, içerik üretir ve stratejik takviminizle uyumlu şekilde otomatik paylaşır.
          İçerik üretmek, zamanlamak, yayınlamak; hepsi tek tıkla halloluyor.
        </p>
        <div className={styles.inputRow}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text3)", flexShrink: 0, marginRight: 10 }}>
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <input id="hero-email" className={styles.emailInput} type="email" placeholder="E-posta adresiniz" />
          <button className={styles.btnHero} onClick={handleHeroSubmit}>Listeye Katıl</button>
        </div>
        <p className={styles.note}>Temmuz 2026 lansmanı · İlk 50 müşteriye özel fiyat</p>
      </div>
    </section>
  );
}
