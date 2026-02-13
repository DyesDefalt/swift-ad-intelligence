"use client";
import { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Globe,
  Target,
  Heart,
  TrendingUp,
  MapPin
} from 'lucide-react';

// Floating Orbs
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-float-slow" style={{ background: 'radial-gradient(circle, rgba(59, 157, 245, 0.3) 0%, transparent 70%)', top: '-10%', right: '-10%', filter: 'blur(60px)' }} />
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-15 animate-float" style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)', bottom: '10%', left: '-5%', filter: 'blur(50px)', animationDelay: '-3s' }} />
    </div>
  );
}

// Hero Section
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  
  return (
    <section className="min-h-screen bg-[var(--gapah-bg)] flex items-center relative overflow-hidden pt-24">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <Globe className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-500">Made for Indonesia</span>
          </div>
          
          <h1 className="text-[clamp(40px,5vw,56px)] font-bold leading-[1.1] mb-8 text-[var(--gapah-text)]">
            Built by<br />
            <span className="text-gradient">marketers.</span>
          </h1>
          
          <p className="text-xl text-[var(--gapah-text-secondary)] max-w-2xl mx-auto leading-relaxed mb-10">
            We are on a mission to empower Indonesian digital marketers with AI-powered tools that save time and drive better results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="gapah-button gapah-button-primary">
              Join the team
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/features" className="gapah-button gapah-button-secondary">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mission Section
function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const values = [
    { icon: Target, title: 'Mission-Driven', desc: 'We build tools that solve real problems for real marketers.', color: 'from-blue-500 to-cyan-400' },
    { icon: Heart, title: 'Customer First', desc: 'Every feature we build starts with customer feedback.', color: 'from-rose-500 to-pink-400' },
    { icon: TrendingUp, title: 'Always Improving', desc: 'We iterate constantly based on user needs and market trends.', color: 'from-emerald-500 to-teal-400' },
    { icon: Globe, title: 'Locally Rooted', desc: 'We understand Indonesian markets, culture, and challenges.', color: 'from-amber-500 to-orange-400' },
  ];
  
  return (
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`scroll-reveal-left ${isVisible ? 'revealed' : ''}`}>
            <span className="mono-label mb-4 block">Our Story</span>
            <h2 className="text-[clamp(40px,5vw,72px)] font-bold mb-6 text-[var(--gapah-text)] leading-tight">
              Why we<br /><span className="text-gradient">built Gapah.</span>
            </h2>
            <p className="text-lg text-[var(--gapah-text-secondary)] mb-6 leading-relaxed">
              As digital marketers in Indonesia, we experienced the daily frustration of switching between Ads Manager, ChatGPT, and spreadsheets just to create a single campaign. We knew there had to be a better way.
            </p>
            <p className="text-lg text-[var(--gapah-text-secondary)] mb-6 leading-relaxed">
              Gapah was born from a simple idea: what if marketers could generate ad copy and analyze data without ever leaving their browser? What if the tool understood Indonesian markets, pricing, and culture?
            </p>
            <p className="text-lg text-[var(--gapah-text-secondary)] leading-relaxed">
              Today, Gapah is trusted by 180+ marketers across Indonesia who use it to save hours every week and create better-performing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div key={index} className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}>
                <div className="bg-white rounded-3xl p-6 border border-black/5 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[var(--gapah-text)] mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--gapah-text-secondary)]">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  
  const stats = [
    { value: 180, suffix: '+', label: 'Active Users' },
    { value: 50000, suffix: '+', label: 'Copies Generated' },
    { value: 30, suffix: '+', label: 'Countries' },
    { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCounts(stats.map(stat => Math.round(stat.value * easeOut)));
      if (currentStep >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [isVisible]);
  
  return (
    <section ref={sectionRef} className="py-24 bg-[var(--gapah-dark)] relative overflow-hidden">
      <div className="aurora-bg" />
      <div className="w-full px-[7vw] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}>
              <div className="text-[clamp(40px,4vw,64px)] font-bold text-white leading-none mb-2">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const team = [
    { name: 'Ahmad Rizky', role: 'Founder & CEO', initials: 'AR', gradient: 'from-blue-400 to-blue-600' },
    { name: 'Dewi Kusuma', role: 'Head of Product', initials: 'DK', gradient: 'from-rose-400 to-rose-600' },
    { name: 'Budi Santoso', role: 'Lead Engineer', initials: 'BS', gradient: 'from-emerald-400 to-emerald-600' },
    { name: 'Maya Anggraini', role: 'Marketing Lead', initials: 'MA', gradient: 'from-purple-400 to-purple-600' },
  ];
  
  return (
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-4 block">Our Team</span>
          <h2 className="text-[clamp(40px,5vw,72px)] font-bold text-[var(--gapah-text)] mb-4 leading-tight">
            Meet the people<br /><span className="text-gradient">behind Gapah.</span>
          </h2>
          <p className="text-lg text-[var(--gapah-text-secondary)] max-w-xl mx-auto">
            A small but passionate team dedicated to building the best tools for Indonesian marketers.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}>
              <div className="text-center group">
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500 ring-4 ring-white bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="font-bold text-[var(--gapah-text)]">{member.name}</h3>
                <p className="text-sm text-[var(--gapah-text-secondary)]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Location Section
function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`scroll-reveal-left ${isVisible ? 'revealed' : ''}`}>
            <div className="gapah-card p-3 overflow-hidden">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] min-h-[300px] relative flex items-end">
                {/* Stylized Jakarta skyline */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4">
                    {[60, 80, 45, 95, 70, 55, 85, 40, 75, 90, 50, 65, 80, 45, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/10 rounded-t" style={{ height: `${h}%`, maxHeight: `${h * 2}px` }} />
                    ))}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-200/20 blur-sm" />
                  </div>
                </div>
                <div className="relative z-10 p-6 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium text-white/80">Jakarta, Indonesia</span>
                  </div>
                  <p className="text-xs text-white/50">Where innovation meets tradition</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`scroll-reveal-right ${isVisible ? 'revealed' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 mb-6">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">Based in Indonesia</span>
            </div>
            <h2 className="text-[clamp(40px,5vw,72px)] font-bold mb-6 text-[var(--gapah-text)] leading-tight">
              Proudly<br /><span className="text-gradient">Indonesian.</span>
            </h2>
            <p className="text-lg text-[var(--gapah-text-secondary)] mb-6 leading-relaxed">
              We are based in Jakarta and deeply understand the Indonesian digital marketing landscape. From TikTok Shop dominance to local payment methods, we have built Gapah specifically for this market.
            </p>
            <p className="text-lg text-[var(--gapah-text-secondary)] mb-8 leading-relaxed">
              Our support team speaks Bahasa Indonesia and understands the unique challenges faced by local marketers. We are not just another global tool—we are your local partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5">
                <Globe className="w-4 h-4 text-[var(--gapah-accent)]" />
                <span className="text-sm font-medium">Bahasa Indonesia</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5">
                <span className="text-sm font-medium">IDR Pricing</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5">
                <span className="text-sm font-medium">Local Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-dark)] relative overflow-hidden">
      <div className="aurora-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-30 animate-float-slow" style={{ background: 'radial-gradient(circle, rgba(59, 157, 245, 0.4) 0%, transparent 70%)', top: '-20%', left: '10%', filter: 'blur(80px)' }} />
      </div>
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-3xl mx-auto text-center scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-[clamp(48px,6vw,84px)] font-bold text-white mb-6 leading-tight">
            Join our<br /><span className="text-gradient">journey.</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
            Be part of the movement to empower Indonesian digital marketers with AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="gapah-button gapah-button-primary text-base py-4 px-8">
              Get early access
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/features" className="gapah-button gapah-button-secondary text-base py-4 px-8 text-white border-white/30 hover:bg-white/10">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <TeamSection />
      <LocationSection />
      <CTASection />
    </>
  );
}
