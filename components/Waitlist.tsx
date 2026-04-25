"use client";
import { useState, FormEvent } from "react";
import styles from "./Waitlist.module.css";

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.kicker}>Erken Erişime Katılın</div>
        <h2 className={styles.title}><span className={styles.titleGrad}>Erken Erişim&apos;e Katılın.</span></h2>
        <p className={styles.sub}>Sparkle Flow Temmuz 2026&apos;da hizmet vermeye başlayacak.</p>
        <p className={styles.note}>Sadece ilk 50 müşterimiz erken kayıt fiyatından yararlanabilecek. Fırsatı kaçırmayın!</p>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✦</div>
            <h3>Yeriniz ayrıldı!</h3>
            <p>Temmuz 2026 lansmanından önce bilgilendirme e-postası alacaksınız. Teşekkürler!</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label className={styles.label}>İsim Soyisim</label>
              <input name="name" className={styles.input} type="text" placeholder="Adınızı girin" required />
            </div>
            <div>
              <label className={styles.label}>E-posta</label>
              <input name="email" className={styles.input} type="email" placeholder="ornek@sirket.com" required />
            </div>
            <div>
              <label className={styles.label}>Şirket / İşletme Adı</label>
              <input name="company" className={styles.input} type="text" placeholder="İşletmenizin adı" required />
            </div>
            {error && <p style={{ color: "#f87171", fontSize: 13 }}>{error}</p>}
            <button type="submit" className={styles.btn} disabled={loading}>
              {loading ? "Kaydediliyor…" : "Listeye Katıl →"}
            </button>
            <p className={styles.fine}>Spam yok. İstediğiniz zaman çıkabilirsiniz.</p>
          </form>
        )}
      </div>
    </section>
  );
}
