<template>
  <div class="min-h-screen bg-[#020408] text-slate-100 font-sans selection:bg-indigo-500/30 relative overflow-x-hidden md:cursor-none">
    
    <!-- 1. CUSTOM MOUSE CURSOR (Desktop Only) -->
    <div v-if="!isTouch" 
         class="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block" 
         :class="{'scale-[2.5] bg-white/10 border-indigo-400': isHovering}"
         :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }"></div>
    
    <div v-if="!isTouch" 
         class="fixed top-0 left-0 w-2 h-2 bg-indigo-500 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block" 
         :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }"></div>

    <!-- 2. NEURAL GLOW BACKGROUND -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div class="absolute transition-all duration-700 rounded-full blur-[120px] opacity-15"
           :style="glowStyle"></div>
    </div>

    <!-- 3. TIN'S ASSISTANT -->
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full max-w-sm px-4">
      <div class="bg-black/80 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 border-b-2 transition-all duration-500"
           :style="{ borderBottomColor: accentColor }">
        <div class="text-2xl animate-bounce-slow">🤖</div>
        <div class="flex-1 text-left">
          <span class="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400 block mb-0.5">Tin's Assistant</span>
          <p class="text-[11px] font-bold tracking-tight text-white leading-tight italic">"{{ assistantMessage }}"</p>
        </div>
      </div>
    </div>

    <!-- 4. NAVIGATION -->
    <nav class="fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-500" :class="{'backdrop-blur-xl bg-black/60 py-4': scrolled}">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <div class="text-3xl font-black tracking-tighter text-white">KD</div>
        <div class="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
          <a href="#about" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="hover:text-white transition">Intro</a>
          <a href="#persona" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="hover:text-white transition">Persona</a>
          <a href="#works" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="hover:text-white transition">Portfolio</a>
          <a href="#journey" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="hover:text-white transition">Career</a>
          <a href="#education" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="hover:text-white transition">Study</a>
        </div>
        <a href="#contact" 
           @mouseenter="isHovering = true" @mouseleave="isHovering = false"
           class="bg-indigo-600 px-7 py-3 rounded-full text-[11px] font-black tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20">HIRE TIN</a>
      </div>
    </nav>

    <!-- 5. HERO SECTION (100VH Centered) -->
    <section id="about" class="reveal-section min-h-screen flex flex-col justify-center items-center text-center px-8 z-10">
      <div class="max-w-4xl mx-auto w-full">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-6">
          <span class="text-[10px] font-black tracking-[0.4em] text-indigo-400 uppercase">Frontend Transition</span>
        </div>
        <h1 class="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter mb-8 uppercase">
          WEB <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-white to-purple-400">Developer</span>
        </h1>
        <div class="space-y-4 max-w-xl mx-auto">
          <p class="text-lg md:text-xl text-white font-medium italic leading-tight">
            "I'm <span class="text-indigo-400 font-black italic">Kristine Dayoan</span>. Bridging complex system logic with high-end visual design."
          </p>
          <br>
          <p class="text-[11px] uppercase tracking-[0.4em] text-slate-500 font-black">
            Manila • IT Support Analyst • UI/UX Specialist
          </p>
        </div>
      </div>
    </section>

    <!-- 6. THE PERSONA -->
    <section id="persona" class="reveal-section py-32 px-8 max-w-5xl mx-auto z-10 opacity-0 blur-3xl">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <h2 class="text-5xl md:text-6xl font-black italic tracking-tighter leading-none uppercase">Design <br/> Meets Logic</h2>
          <p class="text-slate-400 text-base leading-relaxed font-light">
            With an <span class="text-white font-bold">NCII in Visual Graphic Design</span>, Tin doesn't just build components—she designs identities. Her IT background ensures every pixel serves a functional purpose.
          </p>
          <div class="flex gap-6">
            <div class="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-center">
              <span class="block text-[9px] text-indigo-400 font-black uppercase mb-1">Logic</span>
              <span class="text-[12px] font-bold">Troubleshooting</span>
            </div>
            <div class="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-center">
              <span class="block text-[9px] text-purple-400 font-black uppercase mb-1">Style</span>
              <span class="text-[12px] font-bold">Graphic Design</span>
            </div>
          </div>
        </div>
        <div class="aspect-square bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[4rem] border border-white/10 flex items-center justify-center relative overflow-hidden group">
           <span class="text-8xl grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-110">🎨</span>
        </div>
      </div>
    </section>

    <!-- 7. WORKS (Portfolio Infinite Slider) -->
    <section id="works" class="reveal-section py-32 px-8 max-w-5xl mx-auto z-20 opacity-0 blur-3xl">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-[12px] font-black tracking-[0.5em] text-slate-500 uppercase">Portfolio</h2>
        <div class="flex gap-4 relative z-50">
          <button @click.stop="prevSlide" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer">←</button>
          <button @click.stop="nextSlide" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer">→</button>
        </div>
      </div>
      
      <div class="relative h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden bg-[#0a0c10] border border-white/5 shadow-2xl">
         <transition name="fade-slide" mode="out-in">
           <div :key="activeSlide" class="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
              <!-- Image stays visible (opacity-60) but the gradient below it makes text clear -->
              <div class="absolute inset-0 bg-cover bg-center opacity-60 scale-105" :style="{ backgroundImage: `url(${slides[activeSlide].img})` }"></div>
              
              <!-- IMPROVED GRADIENT: Heavier black at the bottom for text contrast -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <!-- Content with added drop-shadow for legibility -->
              <div class="relative z-10 text-left drop-shadow-2xl">
                <span class="text-[10px] font-black text-indigo-400 tracking-[0.4em] uppercase mb-3 block">{{ slides[activeSlide].tag }}</span>
                <h3 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none">{{ slides[activeSlide].title }}</h3>
                <p class="text-slate-200 text-base font-medium mb-8 max-w-xl italic leading-relaxed opacity-90">
                  {{ slides[activeSlide].desc }}
                </p>
                <div class="flex gap-3 flex-wrap">
                  <span v-for="tech in slides[activeSlide].tech" :key="tech" class="px-4 py-2 bg-indigo-500/20 border border-white/10 backdrop-blur-md rounded-xl text-[10px] font-black text-white uppercase tracking-widest">
                    {{ tech }}
                  </span>
                </div>
              </div>
           </div>
         </transition>
      </div>
    </section>


    <!-- 8. CAREER (Sticky) -->
    <section id="journey" class="reveal-section py-32 px-8 max-w-5xl mx-auto z-10 opacity-0 blur-3xl">
      <div class="flex flex-col md:flex-row gap-16 text-left items-start">
        <div class="w-full md:w-1/3 md:sticky md:top-32">
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic text-white uppercase">Career</h2>
          <p class="text-indigo-400 text-[11px] font-black uppercase tracking-[0.3em]">Timeline 2022-2026</p>
        </div>
        <div class="w-full md:w-2/3 space-y-20">
          <div v-for="job in experience" :key="job.role" class="relative pl-12 border-l-2 border-white/5">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.6)]"></div>
            <span class="text-[10px] font-black text-indigo-500 tracking-widest block mb-4 uppercase">{{ job.year }}</span>
            <h4 class="text-3xl font-bold text-white mb-2 leading-tight">{{ job.role }}</h4>
            <p class="text-slate-500 font-black text-[11px] uppercase mb-8 tracking-widest">{{ job.company }}</p>
            <ul class="space-y-4 text-slate-400 text-sm font-light leading-relaxed">
              <li v-for="point in job.points" :key="point" class="flex gap-3"><span>•</span> {{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. EDUCATION -->
    <section id="education" class="reveal-section py-32 px-8 max-w-5xl mx-auto z-10 opacity-0 blur-3xl text-center">
      <h2 class="text-[12px] font-black tracking-[0.6em] text-slate-600 uppercase mb-20 italic">Education</h2>
      <div class="grid md:grid-cols-2 gap-10 text-left">
        <div v-for="edu in education" :key="edu.degree" class="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group">
          <span class="text-[10px] font-black text-slate-500 block mb-3 uppercase tracking-widest">{{ edu.year }}</span>
          <h4 class="text-2xl font-black text-white mb-3 group-hover:text-indigo-400 transition">{{ edu.degree }}</h4>
          <p class="text-indigo-400/80 font-bold text-[11px] uppercase mb-10 tracking-wider">{{ edu.school }}</p>
          <div class="space-y-4 text-sm text-slate-400 font-light border-t border-white/10 pt-8">
            <p v-for="desc in edu.descriptions" :key="desc" class="flex gap-2"><span>→</span> {{ desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. CONTACT (Glass-morphism) -->
    <section id="contact" class="reveal-section py-32 px-8 max-w-5xl mx-auto z-10 opacity-0 blur-3xl">
      <div class="bg-black/40 backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 shadow-2xl border border-white/5 relative overflow-hidden text-center md:text-left">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div class="relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div class="md:col-span-5 space-y-10">
            <div>
              <h2 class="text-6xl md:text-8xl font-black tracking-tighter mb-4 italic leading-none text-white uppercase">Sync.</h2>
              <p class="text-slate-400 text-sm font-light tracking-wide uppercase">Let's build the next <br/> modern system together.</p>
            </div>
            <div class="space-y-6">
              <div>
                <span class="text-[9px] font-black text-indigo-400 uppercase tracking-[0.3em] block mb-1">Direct Signal</span>
                <a href="mailto:kristinedayoan@gmail.com" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="text-lg md:text-xl font-bold text-white hover:text-indigo-400 transition-colors block underline underline-offset-8 decoration-white/10">kristinedayoan@gmail.com</a>
              </div>
              <div>
                <span class="text-[9px] font-black text-indigo-400 uppercase tracking-[0.3em] block mb-1">Encrypted Line</span>
                <p class="text-lg md:text-xl font-bold text-white tracking-tight">+63 945 423 3728</p>
              </div>
            </div>
          </div>
          <div class="md:col-span-7">
            <form @submit.prevent class="space-y-6 bg-white/5 p-8 md:p-12 rounded-[3.5rem] border border-white/10">
              <div class="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="FULL NAME" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none text-[11px] font-bold text-white uppercase tracking-widest focus:border-indigo-500/50 transition-all">
                <input type="tel" placeholder="PHONE" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none text-[11px] font-bold text-white uppercase tracking-widest focus:border-indigo-500/50 transition-all">
              </div>
              <input type="email" placeholder="EMAIL ADDRESS" @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none text-[11px] font-bold text-white uppercase tracking-widest focus:border-indigo-500/50 transition-all">
              <button @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="w-full py-6 bg-indigo-600 text-white font-black text-[11px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all rounded-2xl active:scale-95 shadow-xl shadow-indigo-500/20">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-20 text-center opacity-30 text-[10px] font-black tracking-[1.5em] uppercase text-slate-500">
      Kristine Dayoan &bull; 2026
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images (Assuming they are in src/assets)
import keeperImg from './assets/Keeper.jpg'
import classifiedsImg from './assets/filipino-classifieds.png'
import hrPortalImg from './assets/hrportal.png'

gsap.registerPlugin(ScrollTrigger);

const scrolled = ref(false);
const activeSlide = ref(0);
const assistantMessage = ref("Hello! I'm Tin's assistant. Ready for the tour?");
const accentColor = ref('#4f46e5');
const mouse = ref({ x: 0, y: 0 });
const isHovering = ref(false);
const isTouch = ref(false);

const slides = [
  { title: 'Keeper', tag: 'SaaS Landing', tech: ['HTML', 'CSS', 'JS'], desc: 'High-performance SaaS landing page designed for conversion.', img: keeperImg },
  { title: 'Filipino Classifieds', tag: 'Marketplace', tech: ['Laravel', 'Tailwind', 'Livewire'], desc: 'Localized marketplace with real-time community engagement.', img: classifiedsImg },
  { title: 'HR Portal', tag: 'Management System', tech: ['Vue.js', 'Laravel'], desc: 'Modernized employee system with automated onboarding logic.', img: hrPortalImg }
];

const experience = [
  { year: '2023 - 2025', role: 'IT Support Analyst', company: 'ATOS IT INC.', points: ['Point of contact for issues.', 'Documented resolutions.', 'Technical guidance lead.'] },
  { year: '2022 - 2023', role: 'Technical Associate', company: 'ATOS IT INC.', points: ['Efficient diagnostics.', 'Direct assistance.'] },
  { year: '2022', role: 'Digital Comms Coordinator', company: 'PHINMA SJC', points: ['Graduate content strategy.', 'Brand visibility.'] }
];

const education = [
  { year: '2018 - 2022', degree: 'BS in IT', school: 'PHINMA Saint Jude College', descriptions: ['Edge Tech Org Secretary.', 'Student Council Communication Lead.', 'Student Assistant support.'] },
  { year: '2016 - 2018', degree: 'ICT Foundation', school: 'Saint Jude College Manila', descriptions: ['Focus on ICT.', 'NCII Visual Graphic Design Certified (TESDA).'] }
];

const glowStyle = computed(() => {
  if (isTouch.value) return { top: '20%', left: '30%', width: '400px', height: '400px', backgroundColor: accentColor.value };
  return { top: (mouse.value.y - 250) + 'px', left: (mouse.value.x - 250) + 'px', width: '500px', height: '500px', backgroundColor: accentColor.value };
});

const nextSlide = () => { activeSlide.value = (activeSlide.value + 1) % slides.length; };
const prevSlide = () => { activeSlide.value = activeSlide.value === 0 ? slides.length - 1 : activeSlide.value - 1; };

const updateAssistantMessage = (id) => {
  const data = {
    about: "INTRO: Tin is an IT Analyst transitioning to Creative Dev.",
    persona: "PERSONA: She combines NCII Graphic Design with IT Support logic.",
    works: "PORTFOLIO: Exploring her latest builds and UI efficiency.", 
    journey: "CAREER: 3 years of technical growth at ATOS IT Inc.",
    education: "ACADEMICS: Leadership roles at PHINMA SJC.",
    contact: "CONTACT: Sync with Tin for your next project."
  };
  const colors = { about: '#4f46e5', persona: '#6366f1', works: '#9333ea', journey: '#f43f5e', education: '#10b981', contact: '#ffffff' };
  if (data[id]) {
    assistantMessage.value = data[id];
    accentColor.value = colors[id];
  }
};

onMounted(() => {
  isTouch.value = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  window.addEventListener('mousemove', (e) => { mouse.value = { x: e.clientX, y: e.clientY }; });
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 50; });
  
  // Auto-Slide Trigger
  setInterval(nextSlide, 5000);

  const sections = document.querySelectorAll('.reveal-section');
  sections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 75%', end: 'bottom 15%',
        toggleActions: 'play reverse play reverse',
        onEnter: () => { gsap.to(section, { opacity: 1, filter: 'blur(0px)', duration: 0.8 }); updateAssistantMessage(section.id); },
        onLeave: () => { gsap.to(section, { opacity: 0, filter: 'blur(40px)', duration: 0.8 }); },
        onEnterBack: () => { gsap.to(section, { opacity: 1, filter: 'blur(0px)', duration: 0.8 }); updateAssistantMessage(section.id); },
        onLeaveBack: () => { gsap.to(section, { opacity: 0, filter: 'blur(40px)', duration: 0.8 }); }
      }
    });
  });
  ScrollTrigger.refresh();
});
</script>

<style>
html { scroll-behavior: smooth; }
.reveal-section { will-change: filter, opacity; }
@keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
.animate-bounce-slow { animation: bounce-slow 3s infinite; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 10px; }
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
.fade-slide-enter-from { opacity: 0; transform: scale(1.05); }
.fade-slide-leave-to { opacity: 0; transform: scale(0.95); }
</style>
