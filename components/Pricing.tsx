import styles from "./Pricing.module.css";

const check = (
  <div className={styles.check}>
    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
      <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.beam} />
      <div className={styles.inner}>
        <div className={styles.kicker}>Fiyatlandırma</div>
        <h2 className={styles.title}>Paketler</h2>
        <div className={styles.note}>Bu fiyatlar yalnızca ilk 50 müşterimize özel erken kayıt fiyatlarıdır</div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.name}>Starter</div>
            <div className={styles.price}>1.999</div>
            <div className={styles.unit}>TL / ay</div>
            <div className={styles.sep} />
            <div className={styles.features}>
              <div className={styles.feat}>{check}<div><div className={styles.fl}>İçerik Üretimi</div><div className={styles.fv}>Haftada 10 içerik (Metin+ Görsel)</div></div></div>
              <div className={styles.feat}>{check}<div><div className={styles.fl}>Platform Desteği</div><div className={styles.fv}>2 Platform</div></div></div>
              <div className={styles.feat}>{check}<div><div className={styles.fl}>Onay Mekanizması</div><div className={styles.fv}>Sen onaylamadan hiçbir şey yayınlanmaz</div></div></div>
            </div>
            <button className={`${styles.btn} ${styles.btnOutline}`}>Başla</button>
          </div>

          <div className={styles.featured}>
            <div className={styles.featuredInner}>
              <div className={styles.badge}>⭐ En Popüler</div>
              <div className={styles.name}>Gelişmiş</div>
              <div className={styles.price}>2.999</div>
              <div className={styles.unit}>TL / ay</div>
              <div className={styles.sep} />
              <div className={styles.features}>
                <div className={styles.feat}>{check}<div><div className={styles.fl}>İçerik Üretimi</div><div className={styles.fv}>Haftada 15 içerik (Metin+ Görsel)</div></div></div>
                <div className={styles.feat}>{check}<div><div className={styles.fl}>Platform Desteği</div><div className={styles.fv}>3 Platform</div></div></div>
                <div className={styles.feat}>{check}<div><div className={styles.fl}>Onay Mekanizması</div><div className={styles.fv}>Sen onaylamadan hiçbir şey yayınlanmaz</div></div></div>
                <div className={styles.feat}>{check}<div><div className={styles.fl}>Analiz Araçları</div><div className={styles.fv}>Marka &amp; rakip analizi</div></div></div>
                <div className={styles.feat}>{check}<div><div className={styles.fl}>Planlama</div><div className={styles.fv}>İçerik planlama</div></div></div>
              </div>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>Başla</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.name}>Enterprise</div>
            <div className={styles.priceCustom}>Özel teklif</div>
            <div className={styles.unit}>iletişime geçin</div>
            <div className={styles.sep} />
            <div className={styles.features}>
              <div className={styles.feat}>{check}<div><div className={styles.fl}>İçerik Üretimi</div><div className={styles.fv}>İhtiyaca göre / Sınırsız</div></div></div>
              <div className={styles.feat}>{check}<div><div className={styles.fl}>Platform Desteği</div><div className={styles.fv}>Tüm Platformlar</div></div></div>
              <div className={styles.feat}>{check}<div><div className={styles.fl}>Öncelikli onay + özel yönetim</div><div className={styles.fv}>Öncelikli onay + özel yönetim</div></div></div>
              <div className={styles.feat}>{check}<div><div className={styles.fl}>Analiz Araçları</div><div className={styles.fv}>Gelişmiş analizler</div></div></div>
              <div className={styles.feat}>{check}<div><div className={styles.fl}>Planlama</div><div className={styles.fv}>İçerik önerisi &amp; tam planlama</div></div></div>
            </div>
            <button className={`${styles.btn} ${styles.btnOutline}`}>İletişime Geç</button>
          </div>
        </div>
      </div>
    </section>
  );
}
