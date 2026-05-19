---
layout: default
title: "Hybrid CCTV | #1 Professional IP CCTV Service Provider in Galle, Sri Lanka"
image: /assets/images/pages/hybrid-cctv.png
description: "Hybrid CCTV — expert IP CCTV installation, AI smart cameras, burglar alarms & smart security solutions in Galle. Backed by US Layer IT Solutions. Call +94 76 902 6918."
permalink: /hybrid-cctv/
comments: false
---

<style>
/* ── Hybrid CCTV — main brand page ─────────────────────────── */

/* Hero */
.hyb-hero {
  background: linear-gradient(135deg,#0c1220 0%,#1a2540 50%,#0c1220 100%);
  padding: 5rem 0 4rem;
  position: relative;
  overflow: hidden;
}
.hyb-hero::before {
  content: "";
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 60% at 70% 50%, rgba(249,115,22,.16) 0%, transparent 70%);
  pointer-events: none;
}
.hyb-badge {
  display: inline-flex; align-items: center; gap: .45rem;
  background: rgba(249,115,22,.12);
  border: 1px solid rgba(249,115,22,.3);
  color: #fdba74;
  font-size: .8rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
  padding: .35rem .85rem; border-radius: 999px; margin-bottom: 1.1rem;
}
.hyb-hero h1 {
  font-size: clamp(2rem,4.5vw,3.2rem); font-weight: 800;
  color: #f9fafb; line-height: 1.2; margin-bottom: 1rem;
}
.hyb-hero h1 span { color: #fb923c; }
.hyb-hero p.lead { color: #9ca3af; font-size: 1.1rem; max-width: 600px; margin-bottom: 1.75rem; }
.hyb-cta-row { display: flex; flex-wrap: wrap; gap: .75rem; }
.hyb-btn-primary {
  background: #ea580c; color: #fff; border: none;
  padding: .75rem 1.6rem; border-radius: .6rem; font-weight: 600; font-size: .95rem;
  text-decoration: none; display: inline-flex; align-items: center; gap: .5rem;
  transition: background .2s, transform .2s;
}
.hyb-btn-primary:hover { background: #c2410c; color: #fff; transform: translateY(-1px); }
.hyb-btn-outline {
  background: transparent; color: #fdba74;
  border: 1px solid rgba(249,115,22,.4);
  padding: .75rem 1.5rem; border-radius: .6rem; font-weight: 600; font-size: .95rem;
  text-decoration: none; display: inline-flex; align-items: center; gap: .5rem;
  transition: border-color .2s, color .2s;
}
.hyb-btn-outline:hover { border-color: #fdba74; color: #fed7aa; }
.hyb-btn-yt {
  background: #ff0000; color: #fff; border: none;
  padding: .75rem 1.5rem; border-radius: .6rem; font-weight: 600; font-size: .95rem;
  text-decoration: none; display: inline-flex; align-items: center; gap: .5rem;
  transition: background .2s, transform .2s;
}
.hyb-btn-yt:hover { background: #cc0000; color: #fff; transform: translateY(-1px); }

/* Stats strip */
.hyb-stats {
  display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 2.5rem;
  padding-top: 2rem; border-top: 1px solid rgba(255,255,255,.07);
}
.hyb-stat-num  { font-size: 1.8rem; font-weight: 800; color: #fb923c; }
.hyb-stat-label { font-size: .82rem; color: #6b7280; text-transform: uppercase; letter-spacing: .05em; }

/* Section helpers */
.hyb-section     { padding: 4.5rem 0; }
.hyb-section-alt { padding: 4.5rem 0; background: #f9fafb; }
[data-bs-theme="dark"] .hyb-section-alt { background: #0d1424; }
.hyb-section-title {
  font-size: clamp(1.4rem,3vw,2rem); font-weight: 800;
  color: #111827; margin-bottom: .5rem;
}
[data-bs-theme="dark"] .hyb-section-title { color: #f9fafb; }
.hyb-section-sub { color: #6b7280; font-size: 1rem; max-width: 640px; margin: 0 auto 2.5rem; }
[data-bs-theme="dark"] .hyb-section-sub { color: #9ca3af; }

/* Service card */
.hyb-card {
  border: 1px solid #e5e7eb; border-radius: .9rem; padding: 1.6rem; height: 100%;
  background: #fff; transition: border-color .2s, box-shadow .2s;
}
[data-bs-theme="dark"] .hyb-card { background: #1e293b; border-color: #374151; }
.hyb-card:hover { border-color: #ea580c; box-shadow: 0 4px 24px rgba(234,88,12,.1); }
.hyb-card-icon {
  width: 3rem; height: 3rem; border-radius: .65rem;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem; font-size: 1.5rem; flex-shrink: 0;
}
.hyb-card h3 { font-size: 1.05rem; font-weight: 700; color: #111827; margin-bottom: .4rem; }
[data-bs-theme="dark"] .hyb-card h3 { color: #f9fafb; }
.hyb-card p { font-size: .875rem; color: #6b7280; margin: 0; line-height: 1.6; }
[data-bs-theme="dark"] .hyb-card p { color: #9ca3af; }
.hyb-card-eyebrow {
  font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em;
  color: #ea580c; margin-bottom: .3rem;
}

/* Smart solution items */
.hyb-smart-item {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1rem 0; border-bottom: 1px solid #f3f4f6;
}
[data-bs-theme="dark"] .hyb-smart-item { border-bottom-color: #1f2937; }
.hyb-smart-item:last-child { border-bottom: none; }
.hyb-smart-icon {
  width: 2.5rem; height: 2.5rem; border-radius: .5rem;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; flex-shrink: 0;
}
.hyb-smart-item h4 { font-size: .95rem; font-weight: 700; color: #111827; margin-bottom: .2rem; }
[data-bs-theme="dark"] .hyb-smart-item h4 { color: #f9fafb; }
.hyb-smart-item p { font-size: .85rem; color: #6b7280; margin: 0; }
[data-bs-theme="dark"] .hyb-smart-item p { color: #9ca3af; }

/* Dark feature band */
.hyb-dark-band {
  background: linear-gradient(135deg,#111827 0%,#1f2937 100%);
  padding: 4rem 0; color: #fff;
}
.hyb-dark-band h2 { font-size: clamp(1.4rem,2.5vw,1.9rem); font-weight: 800; color: #fff; margin-bottom: .5rem; }
.hyb-dark-band p.sub { color: #fdba74; max-width: 560px; margin-bottom: 1.5rem; }
.hyb-feature-list { list-style: none; padding: 0; margin: 0; }
.hyb-feature-list li {
  display: flex; align-items: center; gap: .65rem;
  color: #d1d5db; font-size: .9rem; padding: .45rem 0;
}
.hyb-feature-list li i { color: #fb923c; font-size: 1rem; flex-shrink: 0; }

/* Alarm card */
.hyb-alarm-card {
  border: 1px solid #e5e7eb; border-radius: 1rem; padding: 1.75rem; height: 100%;
  background: #fff;
}
[data-bs-theme="dark"] .hyb-alarm-card { background: #1e293b; border-color: #374151; }
.hyb-alarm-icon { font-size: 2.2rem; margin-bottom: .75rem; }
.hyb-alarm-card h3 { font-size: 1rem; font-weight: 700; color: #111827; margin-bottom: .35rem; }
[data-bs-theme="dark"] .hyb-alarm-card h3 { color: #f9fafb; }
.hyb-alarm-card p { font-size: .875rem; color: #6b7280; margin: 0; }
[data-bs-theme="dark"] .hyb-alarm-card p { color: #9ca3af; }

/* YouTube section */
.hyb-yt-section {
  background: linear-gradient(135deg,#1a0000 0%,#2d0a0a 100%);
  padding: 4rem 0;
}
.hyb-yt-badge {
  display: inline-flex; align-items: center; gap: .45rem;
  background: rgba(255,0,0,.15);
  border: 1px solid rgba(255,0,0,.3);
  color: #fca5a5; font-size: .8rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
  padding: .35rem .85rem; border-radius: 999px; margin-bottom: 1rem;
}

/* FAQ */
.hyb-faq-item { border-bottom: 1px solid #e5e7eb; padding: 1.2rem 0; }
[data-bs-theme="dark"] .hyb-faq-item { border-bottom-color: #1f2937; }
.hyb-faq-q {
  font-weight: 700; color: #111827; font-size: .975rem; cursor: pointer;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  background: none; border: none; width: 100%; text-align: left; padding: 0;
}
[data-bs-theme="dark"] .hyb-faq-q { color: #f9fafb; }
.hyb-faq-q i { color: #ea580c; font-size: 1.1rem; flex-shrink: 0; transition: transform .25s; }
.hyb-faq-a { font-size: .9rem; color: #6b7280; margin-top: .65rem; display: none; }
[data-bs-theme="dark"] .hyb-faq-a { color: #9ca3af; }
.hyb-faq-item.open .hyb-faq-q i { transform: rotate(45deg); }
.hyb-faq-item.open .hyb-faq-a { display: block; }

/* CTA */
.hyb-cta-section {
  background: linear-gradient(135deg,#ea580c 0%,#111827 100%);
  padding: 4.5rem 0; text-align: center;
}
.hyb-cta-section h2 { font-size: clamp(1.5rem,3vw,2.2rem); font-weight: 800; color: #fff; margin-bottom: .75rem; }
.hyb-cta-section p.sub { color: #fed7aa; max-width: 560px; margin: 0 auto 2rem; }
.hyb-cta-phone {
  display: inline-flex; align-items: center; gap: .5rem;
  background: #fff; color: #111827;
  font-size: 1.1rem; font-weight: 800;
  padding: .8rem 2rem; border-radius: .7rem; text-decoration: none;
  transition: transform .2s, box-shadow .2s;
}
.hyb-cta-phone:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,.3); color: #111827; }
.hyb-brand-logo { max-height: 2.8rem; width: auto; object-fit: contain; }
</style>

<!-- ══════════════════════════════════════════════════
     SCHEMA — LocalBusiness + WebSite
══════════════════════════════════════════════════ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Hybrid CCTV",
      "description": "Professional IP CCTV installation and smart security solutions in Galle, Sri Lanka. Backed by US Layer IT Solutions.",
      "url": "https://uslayer.com/hybrid-cctv/",
      "telephone": "+94769026918",
      "image": "https://uslayer.com/assets/images/hybrid_cctv_logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hapugala, Wakwella",
        "addressLocality": "Galle",
        "addressCountry": "LK"
      },
      "sameAs": [
        "https://www.youtube.com/@HybridCCTVGalle",
        "https://www.facebook.com/uslayer"
      ],
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Galle District, Sri Lanka"
      },
      "priceRange": "$$",
      "openingHours": "Mo-Sa 08:00-18:00"
    },
    {
      "@type": "Service",
      "name": "IP CCTV Installation Galle",
      "description": "Professional IP CCTV camera installation with AI smart detection, remote mobile monitoring and PoE NVR systems in Galle, Sri Lanka.",
      "provider": { "@type": "LocalBusiness", "name": "Hybrid CCTV" },
      "areaServed": "Galle, Sri Lanka",
      "keywords": "IP CCTV, Hybrid CCTV, Galle, CCTV installation, AI camera"
    }
  ]
}
</script>

<!-- ══════════════════════════════════════════════════
     HERO — Who are we?
══════════════════════════════════════════════════ -->
<section class="hyb-hero" aria-label="Hybrid CCTV Galle hero">
  <div class="container">
    <div class="row align-items-center gy-4">

      <div class="col-lg-7">
        <!-- Brand logo -->
        <div style="margin-bottom:1.5rem;">
          <img src="/assets/images/hybrid_cctv_logo.png" alt="Hybrid CCTV — Professional CCTV Galle" class="hyb-brand-logo">
          <span style="display:block;font-size:.7rem;color:#6b7280;margin-top:.3rem;text-transform:uppercase;letter-spacing:.06em;">
            A subsidiary of US Layer IT Solutions &nbsp;·&nbsp; Galle, Sri Lanka
          </span>
        </div>

        <div class="hyb-badge">
          <i class="bi bi-patch-check-fill"></i> #1 Professional CCTV Service in Galle
        </div>

        <h1>
          Hybrid CCTV —<br>
          <span>Master of CCTV Solutions</span><br>
          in Galle, Sri Lanka
        </h1>

        <p class="lead">
          Backed by <strong style="color:#fdba74;">US Layer IT Solutions</strong>, Hybrid CCTV empowers your security with seamless integration and cutting-edge IP surveillance. Our dedicated, experienced team safeguards what matters most to you.
        </p>

        <div class="hyb-cta-row">
          <a href="/contact/" class="hyb-btn-primary">
            <i class="bi bi-telephone-fill"></i> Get a Free Site Survey
          </a>
          <a href="tel:+94769026918" class="hyb-btn-outline">
            <i class="bi bi-whatsapp"></i> +94 76 902 6918
          </a>
          <a href="https://www.youtube.com/@HybridCCTVGalle" target="_blank" rel="noopener" class="hyb-btn-yt">
            <i class="bi bi-youtube"></i> Our YouTube
          </a>
        </div>

        <div class="hyb-stats">
          <div>
            <div class="hyb-stat-num">10+</div>
            <div class="hyb-stat-label">Years Experience</div>
          </div>
          <div>
            <div class="hyb-stat-num">500+</div>
            <div class="hyb-stat-label">Systems Installed</div>
          </div>
          <div>
            <div class="hyb-stat-num">5★</div>
            <div class="hyb-stat-label">Google Rating</div>
          </div>
        </div>
      </div>

      <div class="col-lg-5 d-none d-lg-block text-center">
        <div style="background:rgba(249,115,22,.08);border:1px solid rgba(249,115,22,.2);border-radius:1.25rem;padding:2.5rem 2rem;">
          <i class="bi bi-camera-video-fill" style="font-size:5rem;color:#fb923c;"></i>
          <div style="margin-top:1.5rem;">
            <div style="font-size:.75rem;color:#6b7280;margin-bottom:.75rem;text-transform:uppercase;letter-spacing:.05em;">Who We Are</div>
            <div style="font-weight:700;color:#fed7aa;font-size:.95rem;line-height:2;">
              Professional CCTV Solutions<br>
              Dedicated &amp; Experienced Team<br>
              IP Camera Specialists<br>
              Smart Security Integrators
            </div>
          </div>
          <hr style="border-color:rgba(249,115,22,.2);margin:1.25rem 0;">
          <div style="display:flex;align-items:center;justify-content:center;gap:.75rem;">
            <img src="/assets/images/hybrid_cctv_logo.png" alt="Hybrid CCTV" style="max-height:1.6rem;width:auto;opacity:.85;">
            <span style="font-size:.78rem;color:#9ca3af;">Hybrid CCTV · Galle</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     BUSINESS STATUS STRIP
══════════════════════════════════════════════════ -->
{% include business_status.html %}

<!-- ══════════════════════════════════════════════════
     WHAT WE DO — 4 Core Services
══════════════════════════════════════════════════ -->
<section class="hyb-section" id="what-we-do">
  <div class="container">
    <div class="text-center">
      <div class="hyb-badge" style="background:rgba(234,88,12,.1);border-color:rgba(234,88,12,.3);color:#ea580c;">
        <i class="bi bi-grid-3x3-gap-fill"></i> What We Do
      </div>
      <h2 class="hyb-section-title">Professional IP CCTV &amp; Security Services</h2>
      <p class="hyb-section-sub">
        From the initial site survey to ongoing after-care, our dedicated Hybrid CCTV team handles every step of your security project in Galle with precision and professionalism.
      </p>
    </div>

    <div class="row g-4">

      <!-- 1. Designing & Planning -->
      <div class="col-sm-6 col-xl-3">
        <div class="hyb-card">
          <div class="hyb-card-icon" style="background:rgba(249,115,22,.12);">
            <i class="bi bi-rulers" style="color:#fb923c;"></i>
          </div>
          <div class="hyb-card-eyebrow">Step 1</div>
          <h3>Designing &amp; Planning</h3>
          <p>
            We survey your property and design a tailored IP CCTV layout — ensuring every camera placement is optimal for coverage, lighting conditions and blind-spot elimination. We recommend exactly what suits your site.
          </p>
        </div>
      </div>

      <!-- 2. Cabling & Installation -->
      <div class="col-sm-6 col-xl-3">
        <div class="hyb-card">
          <div class="hyb-card-icon" style="background:rgba(14,165,233,.12);">
            <i class="bi bi-tools" style="color:#0ea5e9;"></i>
          </div>
          <div class="hyb-card-eyebrow">Step 2</div>
          <h3>Cabling &amp; Installation</h3>
          <p>
            Professional structured cabling (CAT6 PoE), camera mounting, NVR configuration and network integration. Clean, discreet installation with zero disruption to your daily operations or home life.
          </p>
        </div>
      </div>

      <!-- 3. On-Time CCTV Care -->
      <div class="col-sm-6 col-xl-3">
        <div class="hyb-card">
          <div class="hyb-card-icon" style="background:rgba(34,197,94,.12);">
            <i class="bi bi-shield-check" style="color:#22c55e;"></i>
          </div>
          <div class="hyb-card-eyebrow">Step 3</div>
          <h3>On-Time CCTV Care Service</h3>
          <p>
            Trusted after-service and scheduled maintenance keeps your IP CCTV system running at peak performance. Firmware updates, lens cleaning, recording health checks and rapid fault response — all handled by our team.
          </p>
        </div>
      </div>

      <!-- 4. Smart Security Solutions -->
      <div class="col-sm-6 col-xl-3">
        <div class="hyb-card">
          <div class="hyb-card-icon" style="background:rgba(139,92,246,.12);">
            <i class="bi bi-cpu-fill" style="color:#8b5cf6;"></i>
          </div>
          <div class="hyb-card-eyebrow">Smart Add-Ons</div>
          <h3>Smart Security Solutions</h3>
          <p>
            AI-powered human &amp; vehicle detection, smoke &amp; temperature sensors, door sensors and video door phones. Monitor everything via mobile app and stay connected anytime, anywhere.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     IP CCTV FOCUS — Why IP is Best
══════════════════════════════════════════════════ -->
<section class="hyb-dark-band" aria-label="Why IP CCTV">
  <div class="container">
    <div class="row align-items-center gy-5">
      <div class="col-lg-6">
        <div class="hyb-badge" style="background:rgba(249,115,22,.15);border-color:rgba(249,115,22,.35);color:#fdba74;">
          <i class="bi bi-camera-video-fill"></i> Our Core Specialty
        </div>
        <h2>Why Hybrid CCTV Specialises in IP CCTV</h2>
        <p class="sub">
          IP CCTV delivers superior resolution, smarter detection and true remote access. It is the #1 recommended technology for any new security installation in Galle.
        </p>
        <ul class="hyb-feature-list">
          <li><i class="bi bi-check-circle-fill"></i> 4K &amp; 8MP ultra-HD image quality — faces and number plates captured clearly</li>
          <li><i class="bi bi-check-circle-fill"></i> Single PoE CAT6 cable — no messy coaxial or separate power runs</li>
          <li><i class="bi bi-check-circle-fill"></i> AI-powered human, vehicle &amp; face detection — fewer false alarms</li>
          <li><i class="bi bi-check-circle-fill"></i> Full mobile app — live view, playback and alerts from anywhere</li>
          <li><i class="bi bi-check-circle-fill"></i> Colour night vision — detailed footage even in low light</li>
          <li><i class="bi bi-check-circle-fill"></i> Scalable NVR systems — add cameras at any time without rewiring</li>
          <li><i class="bi bi-check-circle-fill"></i> Two-way audio — speak and listen through your cameras remotely</li>
          <li><i class="bi bi-check-circle-fill"></i> Cloud &amp; local NVR storage options for redundant recording</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <div class="row g-3">
          <div class="col-6">
            <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:.9rem;padding:1.5rem;text-align:center;">
              <i class="bi bi-camera-video-fill" style="font-size:2.2rem;color:#fb923c;margin-bottom:.75rem;display:block;"></i>
              <div style="font-weight:700;color:#f9fafb;margin-bottom:.3rem;">IP Cameras</div>
              <div style="font-size:.8rem;color:#9ca3af;">PoE · PTZ · Dome · Bullet</div>
            </div>
          </div>
          <div class="col-6">
            <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:.9rem;padding:1.5rem;text-align:center;">
              <i class="bi bi-hdd-rack-fill" style="font-size:2.2rem;color:#0ea5e9;margin-bottom:.75rem;display:block;"></i>
              <div style="font-weight:700;color:#f9fafb;margin-bottom:.3rem;">NVR Systems</div>
              <div style="font-size:.8rem;color:#9ca3af;">4 – 64 Channel</div>
            </div>
          </div>
          <div class="col-6">
            <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:.9rem;padding:1.5rem;text-align:center;">
              <i class="bi bi-phone-fill" style="font-size:2.2rem;color:#22c55e;margin-bottom:.75rem;display:block;"></i>
              <div style="font-weight:700;color:#f9fafb;margin-bottom:.3rem;">Mobile App</div>
              <div style="font-size:.8rem;color:#9ca3af;">iOS &amp; Android</div>
            </div>
          </div>
          <div class="col-6">
            <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:.9rem;padding:1.5rem;text-align:center;">
              <i class="bi bi-cpu-fill" style="font-size:2.2rem;color:#8b5cf6;margin-bottom:.75rem;display:block;"></i>
              <div style="font-weight:700;color:#f9fafb;margin-bottom:.3rem;">AI Detection</div>
              <div style="font-size:.8rem;color:#9ca3af;">Human · Vehicle · Face</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     SMART SECURITY SOLUTIONS
══════════════════════════════════════════════════ -->
<section class="hyb-section-alt" id="smart-security">
  <div class="container">
    <div class="row align-items-center gy-5">

      <div class="col-lg-5">
        <div class="hyb-badge" style="background:rgba(139,92,246,.1);border-color:rgba(139,92,246,.3);color:#8b5cf6;">
          <i class="bi bi-shield-shaded"></i> Smart Solutions
        </div>
        <h2 class="hyb-section-title">Smart Security Beyond Cameras</h2>
        <p style="color:#6b7280;font-size:.95rem;margin-bottom:1.5rem;" class="dark-text-muted">
          Hybrid CCTV integrates your IP CCTV system with a full range of smart sensors and access devices — creating a unified, app-controlled security ecosystem for your home or business in Galle.
        </p>
        <a href="/contact/" class="hyb-btn-primary">
          <i class="bi bi-chat-dots-fill"></i> Discuss Your Requirements
        </a>
      </div>

      <div class="col-lg-7">
        <div class="hyb-smart-item">
          <div class="hyb-smart-icon" style="background:rgba(249,115,22,.1);">
            <i class="bi bi-cpu-fill" style="color:#fb923c;"></i>
          </div>
          <div>
            <h4>AI Human &amp; Vehicle Detection</h4>
            <p>Smart IP cameras automatically distinguish people and vehicles from trees, animals and other movement — so your alerts are always meaningful. Monitor via mobile app with instant push notifications.</p>
          </div>
        </div>
        <div class="hyb-smart-item">
          <div class="hyb-smart-icon" style="background:rgba(239,68,68,.1);">
            <i class="bi bi-fire" style="color:#ef4444;"></i>
          </div>
          <div>
            <h4>Smoke &amp; Temperature Sensors</h4>
            <p>Integrated smoke detectors and temperature sensors protect your property from fire hazards and alert you immediately through the same mobile app — day or night.</p>
          </div>
        </div>
        <div class="hyb-smart-item">
          <div class="hyb-smart-icon" style="background:rgba(245,158,11,.1);">
            <i class="bi bi-door-open-fill" style="color:#f59e0b;"></i>
          </div>
          <div>
            <h4>Door &amp; Window Sensors</h4>
            <p>Perimeter protection with door and window contact sensors. Any unauthorised entry triggers an instant alert to your phone and can activate connected alarm sirens.</p>
          </div>
        </div>
        <div class="hyb-smart-item">
          <div class="hyb-smart-icon" style="background:rgba(14,165,233,.1);">
            <i class="bi bi-camera-video-fill" style="color:#0ea5e9;"></i>
          </div>
          <div>
            <h4>Video Door Phones</h4>
            <p>See, speak and unlock your entrance from anywhere in the world via your smartphone. HD video door phones integrate seamlessly with your IP CCTV and NVR system.</p>
          </div>
        </div>
        <div class="hyb-smart-item">
          <div class="hyb-smart-icon" style="background:rgba(34,197,94,.1);">
            <i class="bi bi-phone-fill" style="color:#22c55e;"></i>
          </div>
          <div>
            <h4>Unified Mobile App Control</h4>
            <p>One app. Live CCTV feeds, sensor alerts, door locks and system health — all accessible on iOS and Android from anywhere in the world.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     ALARM &amp; ACCESS SYSTEMS
══════════════════════════════════════════════════ -->
<section class="hyb-section" id="alarm-systems">
  <div class="container">
    <div class="text-center">
      <div class="hyb-badge" style="background:rgba(239,68,68,.1);border-color:rgba(239,68,68,.3);color:#ef4444;">
        <i class="bi bi-shield-exclamation"></i> Alarm &amp; Access
      </div>
      <h2 class="hyb-section-title">Alarm Systems &amp; Smart Access Control</h2>
      <p class="hyb-section-sub">
        Complete your security with professionally installed alarm systems and smart access solutions — all integrated with your IP CCTV for full-site protection in Galle.
      </p>
    </div>
    <div class="row g-4">
      <div class="col-sm-6 col-lg-4">
        <div class="hyb-alarm-card">
          <div class="hyb-alarm-icon">🚨</div>
          <h3>Burglar Alarm Systems</h3>
          <p>Professionally designed PIR motion detection, door &amp; window contacts, wireless keypads and GSM auto-diallers. Audible sirens and instant phone alerts the moment an intrusion is detected.</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="hyb-alarm-card">
          <div class="hyb-alarm-icon">🔒</div>
          <h3>Smart Door Locks</h3>
          <p>Keyless smart door locks with PIN, RFID card, fingerprint and mobile-app access. Grant and revoke entry to guests, staff or family remotely — no physical keys needed.</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="hyb-alarm-card">
          <div class="hyb-alarm-icon">🛡️</div>
          <h3>Integrated Security Panel</h3>
          <p>Combine your IP CCTV, alarm sensors and smart door locks into one unified control panel. Arm and disarm your entire site from a mobile app or keypad — simple, reliable and scalable.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     YOUTUBE CHANNEL
══════════════════════════════════════════════════ -->
<section class="hyb-yt-section" aria-label="Hybrid CCTV YouTube channel">
  <div class="container">
    <div class="row align-items-center gy-4">
      <div class="col-lg-7">
        <div class="hyb-yt-badge">
          <i class="bi bi-youtube"></i> YouTube Channel
        </div>
        <h2 style="font-size:clamp(1.5rem,3vw,2.2rem);font-weight:800;color:#fff;margin-bottom:.75rem;">
          Watch Hybrid CCTV in Action
        </h2>
        <p style="color:#fca5a5;max-width:560px;margin-bottom:1.5rem;font-size:1rem;">
          Explore real IP CCTV installation walkthroughs, product reviews, smart security tips and before-and-after footage from our projects across Galle District on our YouTube channel.
        </p>
        <a href="https://www.youtube.com/@HybridCCTVGalle" target="_blank" rel="noopener" class="hyb-btn-yt" style="font-size:1rem;padding:.85rem 2rem;">
          <i class="bi bi-youtube"></i> Visit @HybridCCTVGalle
        </a>
      </div>
      <div class="col-lg-5 d-none d-lg-flex align-items-center justify-content-center">
        <div style="background:rgba(255,0,0,.15);border:1px solid rgba(255,0,0,.3);border-radius:1.25rem;padding:2.5rem 3rem;text-align:center;">
          <i class="bi bi-youtube" style="font-size:5rem;color:#ff4444;"></i>
          <div style="margin-top:1rem;font-size:.9rem;color:#fca5a5;font-weight:600;">@HybridCCTVGalle</div>
          <div style="font-size:.78rem;color:#9ca3af;margin-top:.3rem;">Installation Tips · Product Reviews · Galle Projects</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     FAQ
══════════════════════════════════════════════════ -->
<section class="hyb-section-alt" aria-label="IP CCTV FAQ Galle">
  <div class="container">
    <div class="text-center">
      <div class="hyb-badge" style="background:rgba(234,88,12,.1);border-color:rgba(234,88,12,.3);color:#ea580c;">
        <i class="bi bi-question-circle-fill"></i> FAQ
      </div>
      <h2 class="hyb-section-title">Frequently Asked Questions</h2>
      <p class="hyb-section-sub">Common questions about Hybrid CCTV and IP CCTV installation in Galle.</p>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">

        <div class="hyb-faq-item">
          <button class="hyb-faq-q" aria-expanded="false">
            What is the difference between IP CCTV and analog CCTV?
            <i class="bi bi-plus-lg"></i>
          </button>
          <div class="hyb-faq-a">
            IP CCTV cameras transmit digital video over a network (using a single PoE CAT6 cable), delivering superior 4K/8MP resolution, AI smart detection, full mobile access and easy scalability. Analog CCTV uses coaxial cables and offers lower resolution with more limited features. For any new installation in Galle, we strongly recommend IP CCTV.
          </div>
        </div>

        <div class="hyb-faq-item">
          <button class="hyb-faq-q" aria-expanded="false">
            How much does IP CCTV installation cost in Galle?
            <i class="bi bi-plus-lg"></i>
          </button>
          <div class="hyb-faq-a">
            Installation cost depends on the number of cameras, cable runs, NVR specification and site complexity. Contact us for a free site survey and no-obligation quote tailored to your property.
          </div>
        </div>

        <div class="hyb-faq-item">
          <button class="hyb-faq-q" aria-expanded="false">
            Can I view my IP CCTV cameras on my phone?
            <i class="bi bi-plus-lg"></i>
          </button>
          <div class="hyb-faq-a">
            Yes. All IP CCTV systems we install include full mobile app access (iOS and Android), allowing you to watch live footage, review recordings and receive smart motion alerts from anywhere in the world.
          </div>
        </div>

        <div class="hyb-faq-item">
          <button class="hyb-faq-q" aria-expanded="false">
            Do you offer after-installation service and maintenance?
            <i class="bi bi-plus-lg"></i>
          </button>
          <div class="hyb-faq-a">
            Absolutely. Hybrid CCTV's On-Time CCTV Care Service covers scheduled maintenance visits, firmware updates, recording health checks and rapid fault response — keeping your system in peak condition long after installation.
          </div>
        </div>

        <div class="hyb-faq-item">
          <button class="hyb-faq-q" aria-expanded="false">
            Can you integrate CCTV with a burglar alarm or smart door lock?
            <i class="bi bi-plus-lg"></i>
          </button>
          <div class="hyb-faq-a">
            Yes. We design and install fully integrated security systems that combine IP CCTV cameras, burglar alarm sensors, smart door locks and video door phones — all managed from a single mobile app.
          </div>
        </div>

        <div class="hyb-faq-item">
          <button class="hyb-faq-q" aria-expanded="false">
            Which brands of IP CCTV cameras do you install?
            <i class="bi bi-plus-lg"></i>
          </button>
          <div class="hyb-faq-a">
            We work with leading IP CCTV brands suited for the Galle climate and budget requirements. Contact us for a consultation and we will recommend the best option for your specific needs.
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     FINAL CTA
══════════════════════════════════════════════════ -->
<section class="hyb-cta-section" aria-label="Contact Hybrid CCTV Galle">
  <div class="container">
    <div class="hyb-badge" style="background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.3);color:#fff;margin-bottom:1.25rem;display:inline-flex;">
      <i class="bi bi-geo-alt-fill"></i> Galle, Sri Lanka
    </div>
    <h2>Ready to Secure Your Property?</h2>
    <p class="sub">
      Get a free site survey from Hybrid CCTV — Galle's #1 professional IP CCTV and smart security specialists. Backed by US Layer IT Solutions.
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-items:center;">
      <a href="tel:+94769026918" class="hyb-cta-phone">
        <i class="bi bi-telephone-fill" style="color:#ea580c;"></i>
        +94 76 902 6918
      </a>
      <a href="/contact/" class="hyb-btn-outline" style="border-color:rgba(255,255,255,.4);color:#fff;">
        <i class="bi bi-envelope-fill"></i> Send an Enquiry
      </a>
      <a href="https://www.youtube.com/@HybridCCTVGalle" target="_blank" rel="noopener" class="hyb-btn-yt">
        <i class="bi bi-youtube"></i> YouTube
      </a>
    </div>
    <p style="margin-top:1.5rem;font-size:.8rem;color:rgba(255,255,255,.5);">
      Hybrid CCTV · Hapugala, Wakwella, Galle, Sri Lanka · Backed by US Layer IT Solutions
    </p>
  </div>
</section>

<script>
/* FAQ accordion */
(function () {
  'use strict';
  document.querySelectorAll('.hyb-faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.hyb-faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.hyb-faq-item.open').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.hyb-faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
</script>
