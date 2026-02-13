"use client";
import { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Check, 
  ArrowRight, 
  Upload, 
  Settings, 
  TrendingUp,
  Sparkles,
  MessageCircle,
  BarChart2,
  Shield,
  Clock,
  Users,
  Star,
  Play,
  Target,
  Copy
} from 'lucide-react';

// Floating Orbs Component (2 orbs)
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
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gapah-accent)]/10 border border-[var(--gapah-accent)]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[var(--gapah-accent)]" />
              <span className="text-sm font-medium text-[var(--gapah-accent)]">Now in Early Access</span>
            </div>
            
            <h1 className="text-[clamp(40px,5vw,56px)] font-bold leading-[1.1] mb-6 text-[var(--gapah-text)]">
              Swift Ad<br />
              <span className="text-gradient">Intelligence</span>
            </h1>
            
            <p className="text-lg text-[var(--gapah-text-secondary)] max-w-md mb-8 leading-relaxed">
              Generate platform-perfect ad copy from images and analyze campaign data—without leaving your browser. Built for Indonesian marketers.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/contact" className="gapah-button gapah-button-primary">
                Get early access
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/features" className="gapah-button gapah-button-secondary group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                See how it works
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  { initials: 'RP', from: 'from-blue-400', to: 'to-blue-600' },
                  { initials: 'SW', from: 'from-emerald-400', to: 'to-emerald-600' },
                  { initials: 'AH', from: 'from-purple-400', to: 'to-purple-600' },
                  { initials: 'DK', from: 'from-rose-400', to: 'to-rose-600' },
                ].map((person, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br ${person.from} ${person.to} flex items-center justify-center`}>
                    <span className="text-[10px] font-bold text-white">{person.initials}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xs text-[var(--gapah-text-secondary)]">Trusted by 180+ marketers</p>
              </div>
            </div>
          </div>
          
          {/* Right - Product Card */}
          <div className="relative">
            <div className="gapah-card p-3 overflow-hidden card-shine">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden p-6 min-h-[300px] flex flex-col justify-between">
                {/* Mockup UI skeleton */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-300" />
                    <div className="w-3 h-3 rounded-full bg-yellow-300" />
                    <div className="w-3 h-3 rounded-full bg-green-300" />
                    <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/5">
                      <Zap className="w-3 h-3 text-[var(--gapah-accent)]" />
                      <span className="text-[10px] font-medium text-[var(--gapah-text)]">Gapah Extension</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200/80 rounded-full w-3/4" />
                    <div className="h-3 bg-gray-200/80 rounded-full w-1/2" />
                    <div className="h-8 bg-[var(--gapah-accent)]/10 rounded-xl w-full mt-4 flex items-center justify-center">
                      <span className="text-[10px] font-medium text-[var(--gapah-accent)]">Upload Image</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-white/80 rounded-xl p-3 border border-black/5">
                    <div className="h-2.5 bg-gray-200/80 rounded-full w-full mb-2" />
                    <div className="h-2.5 bg-gray-200/80 rounded-full w-4/5" />
                  </div>
                  <div className="bg-white/80 rounded-xl p-3 border border-black/5">
                    <div className="h-2.5 bg-gray-200/80 rounded-full w-full mb-2" />
                    <div className="h-2.5 bg-gray-200/80 rounded-full w-3/5" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center animate-float">
              <div className="text-center">
                <div className="text-xl font-bold text-[var(--gapah-accent)]">10s</div>
                <div className="text-[10px] text-gray-500">Generate</div>
              </div>
            </div>
            
            <div className="absolute -bottom-3 -left-3 px-3 py-2 rounded-lg bg-white shadow-lg animate-float-slow">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-medium">Copy Ready</div>
                  <div className="text-[10px] text-gray-500">TikTok Format</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Platform Badges */}
        <div className={`mt-16 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { name: 'TikTok Ads', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.51a8.27 8.27 0 0 0 4.85 1.56V6.69h-1.09z"/></svg> },
            { name: 'Meta Ads', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg> },
            { name: 'Google Ads', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
            { name: 'X Ads', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
          ].map((platform) => (
            <div key={platform.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm">
              <span className="text-[var(--gapah-text-secondary)]">{platform.icon}</span>
              <span className="text-sm font-medium text-[var(--gapah-text)]">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Data Lens Feature Section (simplified)
function DataLensSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[var(--gapah-bg)]">
      <div className="w-full px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`scroll-reveal-left ${isVisible ? 'revealed' : ''}`}>
            <div className="gapah-card p-3 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 min-h-[280px]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="w-4 h-4 text-[var(--gapah-accent)]" />
                  <span className="text-xs font-medium text-[var(--gapah-text)]">Campaign Analytics</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: 'CTR', value: '3.2%', color: 'text-emerald-600' },
                    { label: 'CPC', value: 'Rp 450', color: 'text-blue-600' },
                    { label: 'ROAS', value: '4.8x', color: 'text-purple-600' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/80 rounded-lg p-2 text-center border border-black/5">
                      <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-[9px] text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/80 rounded-xl p-3 border border-black/5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span className="text-[10px] font-medium text-emerald-600">Trend: CTR improving +12%</span>
                  </div>
                  <div className="h-16 flex items-end gap-1">
                    {[40, 55, 45, 60, 70, 65, 80, 85, 75, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-[var(--gapah-accent)]/20 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`scroll-reveal-right ${isVisible ? 'revealed' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gapah-accent)]/10 mb-4">
              <BarChart2 className="w-4 h-4 text-[var(--gapah-accent)]" />
              <span className="text-sm font-medium text-[var(--gapah-accent)]">Data Lens</span>
            </div>
            
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold mb-4 text-[var(--gapah-text)] leading-tight">
              Screenshot to <span className="text-gradient">insight.</span>
            </h2>
            
            <p className="text-base text-[var(--gapah-text-secondary)] max-w-md mb-6 leading-relaxed">
              Capture any dashboard. Get marketing-grade analysis: trends, anomalies, and what to do next—in seconds.
            </p>
            
            <a href="/features" className="inline-flex items-center text-[var(--gapah-accent)] font-semibold hover:underline mb-8">
              Explore Data Lens
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            
            <div className="space-y-3">
              {[
                { icon: TrendingUp, title: 'Trend Detection', desc: 'Automatically identify performance patterns' },
                { icon: Zap, title: 'Anomaly Alerts', desc: 'Spot unusual spikes or drops instantly' },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/50">
                  <div className="w-9 h-9 rounded-lg bg-[var(--gapah-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-[var(--gapah-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--gapah-text)]">{feature.title}</h4>
                    <p className="text-xs text-[var(--gapah-text-secondary)]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ad Copy Generator Section (simplified)
function AdCopySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const platforms = ['TikTok', 'Meta', 'Google', 'X', 'Universal'];
  
  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[var(--gapah-bg)]">
      <div className="w-full px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 scroll-reveal-left ${isVisible ? 'revealed' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gapah-emerald)]/10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <span className="text-sm font-medium text-[var(--gapah-emerald)]">Ad Copy Generator</span>
            </div>
            
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold mb-4 text-[var(--gapah-text)] leading-tight">
              Image to <span className="text-gradient">copy.</span>
            </h2>
            
            <p className="text-base text-[var(--gapah-text-secondary)] max-w-md mb-4 leading-relaxed">
              Upload a creative. Add campaign descriptions, landing pages, product details—anything to make better copy.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {platforms.map((platform) => (
                <span key={platform} className="px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-medium text-[var(--gapah-text)]">{platform}</span>
              ))}
            </div>
            
            <a href="/features" className="inline-flex items-center text-[var(--gapah-accent)] font-semibold hover:underline mb-8">
              See copy formats
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            
            <div className="space-y-3">
              {[
                { icon: Target, title: 'Vision-Powered', desc: 'AI analyzes your creative for context' },
                { icon: Copy, title: 'One-Click Copy', desc: 'Platform-perfect formatting every time' },
                { icon: Settings, title: 'Universal Mode', desc: 'Customize copy count, length, emoji, tone & style' },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/50">
                  <div className="w-9 h-9 rounded-lg bg-[var(--gapah-emerald)]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-[var(--gapah-emerald)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--gapah-text)]">{feature.title}</h4>
                    <p className="text-xs text-[var(--gapah-text-secondary)]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`order-1 lg:order-2 relative scroll-reveal-right ${isVisible ? 'revealed' : ''}`}>
            <div className="gapah-card p-3 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 min-h-[280px]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[var(--gapah-emerald)]" />
                  <span className="text-xs font-medium text-[var(--gapah-text)]">Generated Copy</span>
                </div>
                <div className="space-y-2">
                  {[
                    { platform: 'TikTok', text: 'Ready to level up your style? Shop now!', chars: '42/100' },
                    { platform: 'Meta', text: 'Discover the look that defines you.', chars: '35/125' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/80 rounded-xl p-3 border border-black/5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-[var(--gapah-accent)]">{item.platform}</span>
                        <span className="text-[9px] text-gray-400">{item.chars}</span>
                      </div>
                      <p className="text-xs text-[var(--gapah-text)] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="flex-1 h-8 rounded-lg bg-[var(--gapah-emerald)]/10 flex items-center justify-center">
                    <span className="text-[10px] font-medium text-[var(--gapah-emerald)]">Copy All</span>
                  </div>
                  <div className="flex-1 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <span className="text-[10px] font-medium text-gray-500">Regenerate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const steps = [
    { icon: Upload, title: 'Upload your creative', description: 'Drag and drop or paste any image. Add campaign descriptions, landing pages, product details.', color: 'from-blue-500 to-cyan-400' },
    { icon: Settings, title: 'Set platform & tone', description: 'Choose TikTok, Meta, Google, X, or Universal mode. Pick tone, style, copy count, and emoji preferences.', color: 'from-purple-500 to-pink-400' },
    { icon: Copy, title: 'Copy and launch', description: 'Grab the best variation and paste it directly into Ads Manager. Platform-perfect and ready to publish.', color: 'from-emerald-500 to-teal-400' },
  ];
  
  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[var(--gapah-bg)]">
      <div className="w-full px-[7vw]">
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-3 block">How It Works</span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[var(--gapah-text)]">
            From image to <span className="text-gradient">publish—fast.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}>
              <div className="bg-white rounded-3xl p-6 border border-black/5 h-full hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-md`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs font-mono text-[var(--gapah-accent)] mb-2">Step 0{index + 1}</div>
                <h3 className="text-lg font-bold mb-2 text-[var(--gapah-text)]">{step.title}</h3>
                <p className="text-sm text-[var(--gapah-text-secondary)] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const plans = [
    {
      name: 'Early Access', price: 'Rp 299.000', originalPrice: 'Rp 999.000', period: 'lifetime',
      description: 'Limited to first 100 seats. BYOK/BYOAI included.',
      features: ['Lifetime license', 'BYOK/BYOAI', 'All platforms', 'Universal mode', 'All features', 'Priority support'],
      highlighted: true, cta: 'Get Early Access',
    },
    {
      name: 'Managed Pro', price: 'Rp 149.000', originalPrice: 'Rp 299.000', period: '/month',
      description: 'For regular users who want managed AI.',
      features: ['500 generations/month', 'All platforms', 'Universal mode', 'Priority support', 'No API key needed', 'Analytics dashboard'],
      highlighted: false, cta: 'Start Pro Trial',
    },
    {
      name: 'Agency', price: 'Rp 3.999.000', originalPrice: '', period: '',
      description: 'For teams managing multiple clients.',
      features: ['5 team seats', 'Unlimited generations', 'Unified billing', 'Onboarding call', 'Dedicated support', 'Custom integrations'],
      highlighted: false, cta: 'Contact Sales',
    },
  ];
  
  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[var(--gapah-bg)]">
      <div className="w-full px-[7vw]">
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-3 block">Pricing</span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[var(--gapah-text)]">
            Simple, local <span className="text-gradient">pricing.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}>
              <div className={`relative rounded-2xl p-6 h-full transition-all ${plan.highlighted ? 'bg-white border-2 border-[var(--gapah-accent)] shadow-lg' : 'bg-white/70 border border-black/5'}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[var(--gapah-accent)] to-[#2563EB] text-white text-[10px] font-bold px-3 py-1 rounded-full">Best Value</span>
                  </div>
                )}
                
                <h3 className="text-base font-bold mb-1 text-[var(--gapah-text)]">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-[var(--gapah-text)]">{plan.price}</span>
                  {plan.originalPrice && <span className="text-xs text-gray-400 line-through">{plan.originalPrice}</span>}
                </div>
                <span className="text-xs text-[var(--gapah-text-secondary)]">{plan.period}</span>
                <p className="text-xs text-[var(--gapah-text-secondary)] mt-2 mb-4">{plan.description}</p>
                
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-[var(--gapah-accent)]" />
                      <span className="text-[var(--gapah-text)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="/contact" className={`w-full gapah-button text-xs py-2.5 block text-center ${plan.highlighted ? 'gapah-button-primary' : 'gapah-button-secondary'}`}>
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-8 text-center scroll-reveal stagger-4 ${isVisible ? 'revealed' : ''}`}>
          <p className="text-xs text-[var(--gapah-text-secondary)]">
            <Shield className="w-3.5 h-3.5 inline mr-1" />
            30-day money-back guarantee
          </p>
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
    { value: 180, suffix: '+', label: 'Projects supported' },
    { value: 30, prefix: 'Rp ', suffix: 'M+', label: 'Client funding' },
    { value: 30, suffix: '+', label: 'Countries' },
    { value: 20, suffix: '+', label: 'Team members' },
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[var(--gapah-bg)]">
      <div className="w-full px-[7vw]">
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[var(--gapah-text)]">
            Trusted by teams who <span className="text-gradient">move fast.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}>
              <div className="text-[clamp(36px,4vw,56px)] font-bold text-[var(--gapah-text)] leading-none mb-1">
                {stat.prefix || ''}{counts[index]}{stat.suffix}
              </div>
              <div className="text-xs text-[var(--gapah-text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className={`text-center scroll-reveal stagger-5 ${isVisible ? 'revealed' : ''}`}>
          <p className="mono-label mb-6">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {['Epigra', 'Sahlah', 'Lucidblack', 'Blomer', 'Bridge', 'Byteams'].map((name, i) => (
              <span key={i} className="text-lg font-bold text-[var(--gapah-text)] opacity-30">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const testimonials = [
    { quote: "Gapah turned our weekly reporting from 2 hours into 10 minutes. The insights are actually actionable.", author: 'Rizky Pratama', role: 'Media Buyer, Jakarta', initials: 'RP', gradient: 'from-blue-400 to-blue-600' },
    { quote: "The copy variations actually sound like our brand—no more generic AI tone.", author: 'Sari Wijaya', role: 'UMKM Owner, Bandung', initials: 'SW', gradient: 'from-emerald-400 to-emerald-600' },
    { quote: "Finally, a tool that understands TikTok ad specs without me checking character counts.", author: 'Azzam Hidayat', role: 'Performance Lead', initials: 'AH', gradient: 'from-purple-400 to-purple-600' },
    { quote: "The Data Lens feature alone is worth the price. Instant insights for my clients.", author: 'Dewi Kusuma', role: 'Freelance Marketer', initials: 'DK', gradient: 'from-rose-400 to-rose-600' },
    { quote: "We've cut our ad creation time by 70%. My team can focus on strategy now.", author: 'Budi Santoso', role: 'Marketing Director', initials: 'BS', gradient: 'from-amber-400 to-amber-600' },
    { quote: "Local pricing in Rupiah makes this a no-brainer for Indonesian agencies.", author: 'Maya Anggraini', role: 'Agency Founder', initials: 'MA', gradient: 'from-cyan-400 to-cyan-600' },
  ];
  
  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[var(--gapah-bg)]">
      <div className="w-full px-[7vw]">
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-3 block">Testimonials</span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[var(--gapah-text)]">
            What they say <span className="text-gradient">about Gapah.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`scroll-reveal stagger-${(index % 3) + 1} ${isVisible ? 'revealed' : ''}`}>
              <div className="bg-white rounded-2xl p-5 border border-black/5 h-full hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xs font-bold text-white">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--gapah-text)]">{testimonial.author}</div>
                    <div className="text-xs text-[var(--gapah-text-secondary)]">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-sm text-[var(--gapah-text-secondary)] leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex gap-0.5 mt-3">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
              </div>
            </div>
          ))}
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[var(--gapah-dark)] relative overflow-hidden">
      <div className="aurora-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-30 animate-float-slow" style={{ background: 'radial-gradient(circle, rgba(59, 157, 245, 0.4) 0%, transparent 70%)', top: '-20%', left: '10%', filter: 'blur(80px)' }} />
      </div>
      
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-2xl mx-auto text-center scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <MessageCircle className="w-4 h-4 text-[var(--gapah-accent)]" />
            <span className="text-sm font-medium text-white/80">Have any questions?</span>
          </div>
          
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-gradient">move faster?</span>
          </h2>
          
          <p className="text-base text-white/60 mb-8 leading-relaxed max-w-lg mx-auto">
            Get early access and start generating ad copy and insights today. Join 180+ marketers who trust Gapah.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="gapah-button gapah-button-primary text-sm py-3 px-6">
              Get early access
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/contact" className="gapah-button gapah-button-secondary text-sm py-3 px-6 text-white border-white/30 hover:bg-white/10">
              Ask a question
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-white/40 text-xs">
            <div className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /><span>Secure payment</span></div>
            <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>30-day guarantee</span></div>
            <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /><span>180+ happy users</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DataLensSection />
      <AdCopySection />
      <HowItWorksSection />
      <PricingSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
