import styles from "./Features.module.css";

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} />
          Temel Özellikler
        </div>
        <h2 className={styles.title}>
          Daha az çaba.<br />
          <span className={styles.titleGrad}>Daha fazla içerik.</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Marka Analizi &amp; İçerik Üretimi</div>
              <div className={styles.cardDesc}>Görselinizi yükleyin, ne yapmak istediğinizi yazın. Sparkle, markanızı analiz eder ve platforma özel içerikler üretir.</div>
            </div>
            <div className={styles.cardMedia}>
              <div className={styles.miniDash}>
                <div className={styles.miniTop}>
                  <div className={styles.miniPill} style={{ width: "40%" }} />
                  <div className={styles.miniPill} style={{ width: "25%" }} />
                </div>
                <div className={styles.miniBars}>
                  {[40, 65, 45, 80, 55, 70].map((h, i) => (
                    <div key={i} className={styles.miniBar} style={{ height: `${h}%`, background: i % 2 === 0 ? "rgba(96,165,250,0.2)" : "linear-gradient(180deg,#7C3AED,#3B82F6)" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>AI ile İçerik Üretimi</div>
              <div className={styles.cardDesc}>Görevleriniz aciliyete, önceliğe ve temaya göre sıralanır. Hiçbir şeyle uğraşmadan, tek tıkla yayına alın.</div>
            </div>
            <div className={styles.cardMedia}>
              <div className={styles.miniDash} style={{ width: "80%" }}>
                <div className={styles.miniCards}>
                  {[
                    { dot: "#7C3AED", s: "rgba(124,58,237,0.6)", badge: "Yayında", c: "#22C55E", bc: "rgba(34,197,94,0.1)" },
                    { dot: "#3B82F6", s: "rgba(59,130,246,0.6)", badge: "Onay", c: "#60A5FA", bc: "rgba(96,165,250,0.1)" },
                    { dot: "#A78BFA", s: "none", badge: "Taslak", c: "#F59E0B", bc: "rgba(245,158,11,0.1)" },
                  ].map((item, i) => (
                    <div key={i} className={styles.miniCard}>
                      <div className={styles.miniCardDot} style={{ background: item.dot, boxShadow: `0 0 6px ${item.s}` }} />
                      <div className={styles.miniCardLine} />
                      <span className={styles.miniCardBadge} style={{ color: item.c, background: item.bc }}>{item.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Zen Modu: Sadece Onaylayın</div>
              <div className={styles.cardDesc}>Akışta kalın. Bir seferde tek görev. Gürültü yok, yük yok — sadece sizin için hazırlanmış içerikler.</div>
            </div>
            <div className={styles.cardMedia} style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.08),rgba(59,130,246,0.08))" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#A78BFA", letterSpacing: "0.06em", marginBottom: 6 }}>ZEN MODU</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 4 }}>✓ Onayla</div>
                <div style={{ fontSize: 11, color: "var(--text3)" }}>veya düzenle, gerisini biz hallederiz</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>Rakip &amp; Marka Analizi</div>
              <div className={styles.cardDesc}>Rakiplerinizi ve sektör trendlerini takip ederek sektörel rekabet avantajı sağlayın.</div>
            </div>
            <div className={styles.cardMedia} style={{ background: "rgba(0,0,0,0.3)" }}>
              <div className={styles.miniDash} style={{ width: "82%" }}>
                <div className={styles.miniTop} style={{ marginBottom: 10 }}>
                  <div className={styles.miniPill} style={{ width: "55%", background: "rgba(124,58,237,0.3)" }} />
                  <div className={styles.miniPill} style={{ width: "30%", background: "rgba(59,130,246,0.3)" }} />
                </div>
                <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 36 }}>
                  {[
                    { h: "60%", bg: "linear-gradient(180deg,#7C3AED,#3B82F6)" },
                    { h: "40%", bg: "rgba(96,165,250,0.2)" },
                    { h: "80%", bg: "linear-gradient(180deg,#A78BFA,#60A5FA)" },
                    { h: "50%", bg: "rgba(96,165,250,0.2)" },
                    { h: "70%", bg: "linear-gradient(180deg,#7C3AED,#3B82F6)" },
                  ].map((b, i) => (
                    <div key={i} style={{ flex: 1, height: b.h, background: b.bg, borderRadius: "2px 2px 0 0" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
