<template>
  <footer
    ref="footerRef"
    class="site-footer"
    :class="{ 'site-footer--visible': isVisible }"
    aria-label="Site footer"
  >
    <!-- Top divider bar with gradient -->
    <div class="footer-divider" aria-hidden="true"></div>

    <div class="footer-inner">

      <!-- ── LEFT: Identity ─────────────────────────────── -->
      <div class="footer-identity">
        <!-- Logo mark -->
        <div class="footer-logo" aria-hidden="true">
          <span>K</span>
        </div>

        <div>
          <p class="footer-name">Kristine Dayoan</p>
          <p class="footer-role">Technical Support Analyst &amp; Web Developer</p>
        </div>

        <p class="footer-tagline">
          Clean code. Clear communication.<br />
          Delivered with care.
        </p>

        <!-- Status badge -->
        <div class="footer-status">
          <span class="footer-status__dot"></span>
          Open to new opportunities
        </div>
      </div>

      <!-- ── CENTER: Navigation ─────────────────────────── -->
      <nav class="footer-nav" aria-label="Footer navigation">
        <p class="footer-nav__heading">Navigation</p>
        <ul>
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" class="footer-nav__link">
              {{ link.label }}
              <svg class="footer-nav__arrow" xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <!-- ── RIGHT: Social + Contact ───────────────────── -->
      <div class="footer-connect">
        <p class="footer-nav__heading">Connect</p>

        <div class="footer-socials">
          <!-- GitHub -->
          <a href="#" class="social-btn" aria-label="GitHub" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
                6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16
                2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44
                5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
          </a>

          <!-- LinkedIn -->
          <a href="#" class="social-btn" aria-label="LinkedIn" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7
                a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <!-- Twitter / X -->
          <a href="#" class="social-btn" aria-label="Twitter" title="Twitter / X">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6
                2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4
                -.1-.8-.1-1.6 0-2.5C13 4 17 3 19 5z"/>
            </svg>
            <span>Twitter</span>
          </a>

          <!-- Email -->
          <a href="mailto:kristineviray20900@gmail.com" class="social-btn" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4
                c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,12 2,6"/>
            </svg>
            <span>Email</span>
          </a>
        </div>

        <!-- Direct email line -->
        <a href="mailto:kristineviray20900@gmail.com" class="footer-email">
          kristineviray20900@gmail.com
        </a>

        <a href="tel:+639456877780" class="footer-phone">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1
              4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72
              c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08
              l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.04z"/>
          </svg>
          +63 9456 877 780
        </a>
      </div>

    </div>

    <!-- ── Bottom bar ─── -->
    <div class="footer-bottom">
      <p>© {{ currentYear }} Kristine Dayoan · Sampaloc, Metro Manila, PH</p>
      <p class="footer-bottom__right">
        Built with
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
          fill="#6366f1" stroke="none" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78
            7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        Vue 3 &amp; Tailwind CSS
      </p>
    </div>

  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// ── Reactive state ──────────────────────────────────────────────
const footerRef = ref(null)
const isVisible = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const navLinks = [
  { label: 'Home',        href: '#hero' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Contact',     href: '#contact' },
]

// ── IntersectionObserver — threshold 0.05 for snappy trigger ────
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect() // fire once
      }
    },
    {
      threshold: 0.05,      // ← triggers as soon as 5% of footer peeks in
      rootMargin: '0px',
    }
  )

  if (footerRef.value) {
    observer.observe(footerRef.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

/* ─── Variables ─── */
:root {
  --indigo:        #6366f1;
  --indigo-hover:  #4f46e5;
  --indigo-subtle: rgba(99,102,241,0.08);
  --indigo-border: rgba(99,102,241,0.2);
  --slate-900:     #0f172a;
  --slate-700:     #334155;
  --slate-500:     #64748b;
  --slate-400:     #94a3b8;
  --slate-200:     #e2e8f0;
  --slate-100:     #f1f5f9;
  --slate-50:      #f8fafc;
  --white:         #ffffff;
}

/* ─── Footer shell ─── */
.site-footer {
  font-family: 'Roboto', sans-serif;
  background: var(--slate-50);
  border-top: 1px solid var(--slate-200);

  /* FIXED animation — fast 300ms fade, no heavy vertical movement */
  opacity: 0;
  transform: translateY(6px);            /* subtle 6px — not 30–40px */
  transition:
    opacity  0.3s ease,                  /* 300ms snappy */
    transform 0.3s ease;
}
.site-footer--visible {
  opacity: 1;
  transform: translateY(0);
}

/* Gradient top-edge accent */
.footer-divider {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--indigo) 30%, #8b5cf6 60%, transparent);
  opacity: 0.6;
}

/* ─── Inner layout ─── */
.footer-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 2.5rem;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr;
  gap: 3rem;
}

/* ─── Identity (left) ─── */
.footer-identity {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.footer-logo {
  width: 40px; height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--indigo), #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
  color: white;
}
.footer-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--slate-900);
  letter-spacing: -0.01em;
  margin: 0;
}
.footer-role {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--slate-500);
  margin: 0;
}
.footer-tagline {
  font-size: 0.85rem;
  color: var(--slate-500);
  line-height: 1.65;
  margin: 0;
}
.footer-status {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #15803d;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 999px;
  padding: 0.3rem 0.8rem;
  width: fit-content;
}
.footer-status__dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse-status 2s ease infinite;
}
@keyframes pulse-status {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
  55%       { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
}

/* ─── Nav (center) ─── */
.footer-nav__heading {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--slate-400);
  margin: 0 0 1rem;
}
.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.footer-nav__link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--slate-700);
  text-decoration: none;
  transition: color 0.15s;
}
.footer-nav__link:hover { color: var(--indigo); }
.footer-nav__arrow {
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.15s, transform 0.15s;
}
.footer-nav__link:hover .footer-nav__arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ─── Connect (right) ─── */
.footer-connect {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.footer-socials {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--slate-200);
  background: var(--white);
  color: var(--slate-700);
  font-size: 0.84rem;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.15s, color 0.15s, background 0.15s, transform 0.15s;
  width: fit-content;
}
.social-btn:hover {
  border-color: var(--indigo-border);
  color: var(--indigo);
  background: var(--indigo-subtle);
  transform: translateX(2px);
}
.footer-email {
  display: inline-flex;
  font-size: 0.8rem;
  color: var(--indigo);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s;
  word-break: break-all;
}
.footer-email:hover { color: var(--indigo-hover); text-decoration: underline; }
.footer-phone {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--slate-500);
  text-decoration: none;
  transition: color 0.15s;
}
.footer-phone:hover { color: var(--slate-700); }

/* ─── Bottom bar ─── */
.footer-bottom {
  border-top: 1px solid var(--slate-200);
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--slate-400);
}
.footer-bottom__right {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  .footer-identity { grid-column: 1 / -1; }
}
@media (max-width: 560px) {
  .footer-inner {
    grid-template-columns: 1fr;
    padding: 2.5rem 1rem 2rem;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
}
</style>