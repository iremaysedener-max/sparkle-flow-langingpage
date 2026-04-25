import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <svg width="15" height="15" viewBox="0 0 40 40" fill="none">
          <path d="M20 4L22.5 16L20 28L17.5 16Z" fill="url(#fl1)" />
          <path d="M5 14L17.5 16L30 14L17.5 12Z" fill="url(#fl1)" />
          <defs>
            <linearGradient id="fl1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
        Sparkle Flow
      </div>

      <span>© 2026 Sparkle Flow. Tüm hakları saklıdır.</span>

      <div className={styles.contact}>
        <span className={styles.contactTitle}>İletişim</span>
        <div className={styles.contactLinks}>
          <a href="https://www.linkedin.com/in/ayşeiremdener" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.contactIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/>
            </svg>
          </a>
          <a href="mailto:iremaysedener@gmail.com" aria-label="E-posta" className={styles.contactIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
