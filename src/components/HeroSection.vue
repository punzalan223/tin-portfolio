<template>
  <section class="hero-section">
    <!-- Subtle grid background -->
    <div class="grid-bg" aria-hidden="true"></div>

    <div class="hero-inner">

      <!-- ── LEFT COLUMN ───────────────────────────────── -->
      <div class="hero-left">

        <!-- Availability pill -->
        <div class="pill" :class="{ 'pill--visible': pillVisible }" ref="pillRef">
          <span class="pill__dot"></span>
          <span>Available for freelance</span>
          <svg class="pill__arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>

        <!-- Headline -->
        <h1 class="headline" :class="{ 'headline--visible': headlineVisible }" ref="headlineRef">
          Building scalable<br />
          <span class="headline__accent">web experiences.</span>
        </h1>

        <!-- Subtext -->
        <p class="subtext" :class="{ 'subtext--visible': subtextVisible }" ref="subtextRef">
          Clean architecture. Measurable performance. Interfaces that users
          actually enjoy — shipped on time, every time.
        </p>

        <!-- Feature chips -->
        <ul class="features" :class="{ 'features--visible': featuresVisible }" ref="featuresRef">
          <li class="feature-chip">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Vue 3 &amp; React
          </li>
          <li class="feature-chip">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            TypeScript
          </li>
          <li class="feature-chip">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            REST &amp; GraphQL
          </li>
          <li class="feature-chip">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            CI/CD Pipelines
          </li>
        </ul>

        <!-- CTAs -->
        <div class="cta-row" :class="{ 'cta-row--visible': ctaVisible }" ref="ctaRef">
          <a href="#projects" class="btn btn--primary">
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" class="btn btn--ghost">Let's Talk</a>
        </div>

        <!-- Social proof line -->
        <p class="social-proof" :class="{ 'social-proof--visible': ctaVisible }">
          Trusted by teams at
          <strong>ATOS</strong> · <strong>PHINMA</strong> · <strong>Saint Jude College</strong>
        </p>

      </div>

      <!-- ── RIGHT COLUMN ──────────────────────────────── -->
      <div class="hero-right" :class="{ 'hero-right--visible': imageVisible }" ref="imageRef">

        <!-- Decorative elements behind the card -->
        <div class="deco-ring deco-ring--1" aria-hidden="true"></div>
        <div class="deco-ring deco-ring--2" aria-hidden="true"></div>
        <div class="deco-dots" aria-hidden="true">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <defs>
              <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#6366f1" opacity="0.35"/>
              </pattern>
            </defs>
            <rect width="120" height="120" fill="url(#dots)"/>
          </svg>
        </div>

        <!-- Portrait card -->
        <div class="portrait-card">

          <!-- Floating code snippet -->
          <div class="code-badge code-badge--top">
            <span class="code-badge__dot code-badge__dot--green"></span>
            <code><span class="token-kw">const</span> dev = <span class="token-str">"Kristine"</span></code>
          </div>

          <!-- Image placeholder -->
          <div class="portrait-placeholder">
            <svg class="portrait-placeholder__icon" xmlns="http://www.w3.org/2000/svg"
              width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <p class="portrait-placeholder__label">Your Photo Here</p>
            <!-- To use your own image, replace this div with:
                 <img src="./assets/kristine.jpg" alt="Kristine Dayoan" class="w-full h-full object-cover" /> -->
          </div>

          <!-- Floating status badge -->
          <div class="code-badge code-badge--bottom">
            <span class="code-badge__dot code-badge__dot--indigo"></span>
            <code>3+ yrs · <span class="token-kw">IT Support</span></code>
          </div>

          <!-- Corner accent -->
          <div class="portrait-card__corner" aria-hidden="true"></div>
        </div>

        <!-- Stats strip -->
        <div class="stats-strip">
          <div class="stat">
            <span class="stat__num">3+</span>
            <span class="stat__label">Years exp.</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat__num">5+</span>
            <span class="stat__label">Certs</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat__num">2</span>
            <span class="stat__label">Companies</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Animated visibility states
const pillVisible     = ref(false)
const headlineVisible = ref(false)
const subtextVisible  = ref(false)
const featuresVisible = ref(false)
const ctaVisible      = ref(false)
const imageVisible    = ref(false)

// Staggered load animation — no IntersectionObserver needed for hero (above-fold)
onMounted(() => {
  setTimeout(() => { pillVisible.value     = true }, 80)
  setTimeout(() => { headlineVisible.value = true }, 200)
  setTimeout(() => { subtextVisible.value  = true }, 360)
  setTimeout(() => { featuresVisible.value = true }, 480)
  setTimeout(() => { ctaVisible.value      = true }, 580)
  setTimeout(() => { imageVisible.value    = true }, 160)
})
</script>

<style scoped>
/* ─── Google Font ─── */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap');

/* ─── CSS Variables ─── */
:root {
  --indigo: #6366f1;
  --indigo-hover: #4f46e5;
  --indigo-subtle: rgba(99, 102, 241, 0.08);
  --indigo-border: rgba(99, 102, 241, 0.22);
  --slate-900: #0f172a;
  --slate-700: #334155;
  --slate-500: #64748b;
  --slate-300: #cbd5e1;
  --slate-100: #f1f5f9;
  --slate-50:  #f8fafc;
  --white:     #ffffff;
}

/* ─── Section shell ─── */
.hero-section {
  position: relative;
  background: var(--white);
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  padding: 6rem 1.5rem 5rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Subtle dot-grid background */
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.45;
  pointer-events: none;
}
/* Fade out edges */
.grid-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, white 100%);
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

/* ─── LEFT ─── */
.hero-left {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

/* Pill */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.85rem 0.35rem 0.55rem;
  background: var(--indigo-subtle);
  border: 1px solid var(--indigo-border);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--indigo);
  letter-spacing: 0.01em;
  width: fit-content;
  cursor: default;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.pill--visible { opacity: 1; transform: translateY(0); }
.pill__dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse-pill 2.2s ease infinite;
  flex-shrink: 0;
}
@keyframes pulse-pill {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
  55%       { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
}
.pill__arrow { opacity: 0.7; flex-shrink: 0; }

/* Headline */
.headline {
  font-size: clamp(2.4rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--slate-900);
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.headline--visible { opacity: 1; transform: translateY(0); }
.headline__accent {
  background: linear-gradient(135deg, var(--indigo), #8b5cf6 60%, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtext */
.subtext {
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.72;
  color: var(--slate-500);
  max-width: 440px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.subtext--visible { opacity: 1; transform: translateY(0); }

/* Feature chips */
.features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.features--visible { opacity: 1; transform: translateY(0); }
.feature-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  padding: 0.32rem 0.8rem;
  background: var(--slate-50);
  border: 1px solid var(--slate-300);
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--slate-700);
  transition: border-color 0.2s;
}
.feature-chip:hover { border-color: var(--indigo-border); }
.feature-chip svg { color: var(--indigo); }

/* CTA row */
.cta-row {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.cta-row--visible { opacity: 1; transform: translateY(0); }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.72rem 1.5rem;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.18s ease;
  border: 1.5px solid transparent;
  letter-spacing: 0.01em;
}
.btn--primary {
  background: var(--indigo);
  color: white;
  border-color: var(--indigo);
  box-shadow: 0 1px 3px rgba(99,102,241,0.25), 0 4px 12px rgba(99,102,241,0.18);
}
.btn--primary:hover {
  background: var(--indigo-hover);
  border-color: var(--indigo-hover);
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(99,102,241,0.3), 0 8px 20px rgba(99,102,241,0.22);
}
.btn--ghost {
  background: transparent;
  color: var(--slate-700);
  border-color: var(--slate-300);
}
.btn--ghost:hover {
  border-color: var(--indigo);
  color: var(--indigo);
  background: var(--indigo-subtle);
  transform: translateY(-1px);
}

/* Social proof */
.social-proof {
  font-size: 0.78rem;
  color: var(--slate-500);
  opacity: 0;
  transition: opacity 0.5s ease 0.1s;
}
.social-proof--visible { opacity: 1; }
.social-proof strong { color: var(--slate-700); font-weight: 600; }

/* ─── RIGHT ─── */
.hero-right {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.hero-right--visible { opacity: 1; transform: translateX(0); }

/* Decorative rings */
.deco-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px dashed;
  pointer-events: none;
}
.deco-ring--1 {
  width: 340px; height: 340px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(99,102,241,0.14);
  animation: spin-ring 28s linear infinite;
}
.deco-ring--2 {
  width: 420px; height: 420px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(139,92,246,0.08);
  animation: spin-ring 42s linear infinite reverse;
}
@keyframes spin-ring {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Dot grid decoration */
.deco-dots {
  position: absolute;
  bottom: -12px;
  right: -20px;
  pointer-events: none;
  opacity: 0.7;
  z-index: 0;
}

/* Portrait card */
.portrait-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 340px;
  border-radius: 20px;
  border: 1.5px solid var(--slate-300);
  background: var(--slate-50);
  overflow: visible;
  box-shadow:
    0 0 0 6px rgba(99,102,241,0.04),
    0 4px 6px rgba(0,0,0,0.04),
    0 20px 48px rgba(0,0,0,0.08);
}

/* Corner accent (top-right bracket) */
.portrait-card__corner {
  position: absolute;
  top: -1px; right: -1px;
  width: 40px; height: 40px;
  border-top: 3px solid var(--indigo);
  border-right: 3px solid var(--indigo);
  border-radius: 0 20px 0 0;
  pointer-events: none;
}

/* Image area */
.portrait-placeholder {
  width: 100%;
  aspect-ratio: 4/5;
  background: linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  overflow: hidden;
}
.portrait-placeholder__icon { color: var(--slate-300); }
.portrait-placeholder__label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--slate-400, #94a3b8);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Code badges */
.code-badge {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.85rem;
  background: var(--white);
  border: 1px solid var(--slate-300);
  border-radius: 8px;
  font-size: 0.75rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.09);
  white-space: nowrap;
}
.code-badge--top  { top: -16px;  left: -20px; }
.code-badge--bottom { bottom: -16px; right: -16px; }
.code-badge__dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.code-badge__dot--green  { background: #22c55e; }
.code-badge__dot--indigo { background: var(--indigo); }
.token-kw  { color: var(--indigo); font-weight: 700; }
.token-str { color: #059669; }
code { font-family: 'Roboto Mono', 'Courier New', monospace; }

/* Stats strip */
.stats-strip {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  background: var(--white);
  border: 1px solid var(--slate-300);
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}
.stat__num {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--slate-900);
  letter-spacing: -0.02em;
}
.stat__label {
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--slate-500);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.stat-divider {
  width: 1px;
  height: 28px;
  background: var(--slate-300);
  flex-shrink: 0;
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
  .hero-right {
    order: -1;
    transform: translateY(-10px);
    max-width: 320px;
    margin: 0 auto;
  }
  .hero-right--visible { transform: translateY(0); }
  .deco-ring--1, .deco-ring--2 { display: none; }
  .portrait-card { max-width: 280px; }
}
@media (max-width: 480px) {
  .hero-section { padding: 4.5rem 1rem 3.5rem; }
  .code-badge--top  { top: -12px; left: -8px; }
  .code-badge--bottom { bottom: -12px; right: -8px; }
}
</style>