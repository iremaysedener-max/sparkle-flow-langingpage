"use client";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    title: "Markanızı tanıtın",
    desc: "Görselinizi yükleyin, ne yapmak istediğinizi yazın. Ürün mü tanıtıyorsunuz, kampanya mı duyuruyorsunuz — ne olursa olsun.",
    startStep: 1,
  },
  {
    num: "02",
    title: "Sparkle sizin için üretir",
    desc: "Markanızı analiz eder, platforma ve kitlenize özel içerikler hazırlar. Her adım şeffaf — ne yapıldığını görürsünüz.",
    startStep: 2,
  },
  {
    num: "03",
    title: "Onaylayın, arkanıza yaslanın",
    desc: "Beğendiğiniz taslağı onaylayın — Sparkle gerisini halleder. Yayın zamanlaması, platform yönetimi, hepsi otomatik.",
    startStep: 3,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>
            <span className={styles.kickerDot} />
            Nasıl Çalışır?
          </div>
          <h2 className={styles.title}>
            Ne istediğinizi belirtin,{" "}
            <span className={styles.titleGrad}>gerisini bize bırakın.</span>
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.stepRow}>
              {/* Sol: Laptop Mockup + Dashboard iframe */}
              <div className={styles.laptopWrap}>
                <div className={styles.laptopGlow} />
                <div className={styles.laptopFrame}>
                  <div className={styles.chrome}>
                    <div className={styles.chromeDots}>
                      <div className={styles.dot} style={{ background: "#FF5F57" }} />
                      <div className={styles.dot} style={{ background: "#FFBD2E" }} />
                      <div className={styles.dot} style={{ background: "#27C93F" }} />
                    </div>
                    <div className={styles.chromeBar} />
                  </div>
                  <div className={styles.screen}>
                    <iframe
                      src={`/dashboard?startStep=${step.startStep}`}
                      className={styles.iframe}
                      title={`Sparkle Flow - Adım ${step.startStep}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Sağ: Adım Bilgisi */}
              <div className={styles.stepInfo}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
