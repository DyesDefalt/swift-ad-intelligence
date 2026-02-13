"use client";
import { useEffect, useRef, useState } from 'react';
import { 
  BarChart2, 
  Check, 
  ArrowRight, 
  Layers,
  Sparkles,
  FileText,
  Sliders,
  Palette,
  ExternalLink,
  Eye
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

// Hero Section - Two-column with extension mockup
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  
  return (
    <section className="min-h-screen bg-[var(--gapah-bg)] flex items-center relative overflow-hidden pt-24">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gapah-accent)]/10 border border-[var(--gapah-accent)]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[var(--gapah-accent)]" />
              <span className="text-sm font-medium text-[var(--gapah-accent)]">Features</span>
            </div>
            
            <h1 className="text-[clamp(56px,8vw,120px)] font-bold leading-[0.9] mb-8 text-[var(--gapah-text)]">
              Everything<br />
              <span className="text-gradient">you need.</span>
            </h1>
            
            <p className="text-xl text-[var(--gapah-text-secondary)] max-w-lg mb-10 leading-relaxed">
              Powerful AI tools designed specifically for Indonesian digital marketers. Generate copy, analyze data, and optimize campaigns—all without leaving your browser.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#bento" className="gapah-button gapah-button-primary">
                Explore features
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/pricing" className="gapah-button gapah-button-secondary">
                View pricing
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="gapah-card p-4 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-300" />
                    <div className="w-3 h-3 rounded-full bg-yellow-300" />
                    <div className="w-3 h-3 rounded-full bg-green-300" />
                    <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/5">
                      <Sparkles className="w-3 h-3 text-[var(--gapah-accent)]" />
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
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--gapah-accent)] to-[#2563EB] flex items-center justify-center shadow-xl animate-float">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">10s</div>
                <div className="text-xs opacity-80">Generate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bento Grid Features Section
function BentoFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const bentoItems = [
    {
      id: 'vision', size: 'large' as const, title: 'Vision-Powered Copy',
      description: 'Our AI analyzes your creative to extract context, mood, colors, and product details—generating copy that perfectly matches your visual.',
      icon: Eye, color: 'from-blue-500 to-cyan-400',
      features: ['Image context analysis', 'Product recognition', 'Mood detection', 'Color palette awareness'],
    },
    {
      id: 'platforms', size: 'medium' as const, title: 'All Major Platforms',
      description: 'Generate perfectly formatted copy for every platform with built-in character limits and best practices.',
      icon: Layers, color: 'from-purple-500 to-pink-400',
      platforms: [
        { name: 'TikTok', spec: '1-100 chars', ref: 'https://ads.tiktok.com/help/category?id=6dGs4bNMAZSdPr4pQ0KFuX' },
        { name: 'Meta', spec: 'Primary + Headline', ref: 'https://www.facebook.com/business/ads-guide/update' },
        { name: 'Google', spec: 'RSA Format', ref: 'https://support.google.com/google-ads/answer/13676244' },
        { name: 'X', spec: '280 chars', ref: 'https://business.x.com/en/help/campaign-setup/creative-ad-specifications' },
      ],
    },
    {
      id: 'universal', size: 'medium' as const, title: 'Universal Mode',
      description: 'Customize copy count, character length, emoji usage, tone, and writing style to match your brand perfectly.',
      icon: Sliders, color: 'from-emerald-500 to-teal-400',
      controls: ['Copy count (1-10)', 'Character limit', 'Emoji toggle', 'Tone selector'],
    },
    {
      id: 'datalens', size: 'large' as const, title: 'Data Lens',
      description: 'Capture any dashboard and get instant marketing-grade analysis with trends, anomalies, and actionable recommendations.',
      icon: BarChart2, color: 'from-amber-500 to-orange-400',
      features: ['Trend detection', 'Anomaly alerts', 'AI insights', 'One-click reports'],
    },
    {
      id: 'context', size: 'small' as const, title: 'Rich Context',
      description: 'Input campaign descriptions, landing pages, and product details for more accurate copy.',
      icon: FileText, color: 'from-rose-500 to-red-400',
    },
    {
      id: 'variations', size: 'small' as const, title: 'Multiple Variations',
      description: 'Generate up to 10 variations in one click, all platform-perfect and ready to test.',
      icon: Palette, color: 'from-indigo-500 to-violet-400',
    },
  ];
  
  return (
    <section ref={sectionRef} id="bento" className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-4 block">Capabilities</span>
          <h2 className="text-[clamp(40px,5vw,72px)] font-bold text-[var(--gapah-text)] leading-tight">
            Built for<br /><span className="text-gradient">modern marketers.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
          {/* Large - Vision */}
          <div className={`lg:col-span-2 lg:row-span-2 scroll-reveal stagger-1 ${isVisible ? 'revealed' : ''}`}>
            <div className="group relative bg-white rounded-3xl p-8 h-full overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${bentoItems[0].color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bentoItems[0].color} flex items-center justify-center mb-6`}>
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{bentoItems[0].title}</h3>
                <p className="text-[var(--gapah-text-secondary)] mb-6">{bentoItems[0].description}</p>
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="w-4 h-4 text-[var(--gapah-accent)]" />
                    <span className="text-xs font-medium text-[var(--gapah-text)]">Image Analysis</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/80 rounded-lg p-2 border border-black/5"><div className="h-2 bg-gray-200 rounded w-3/4 mb-1" /><div className="h-2 bg-blue-200 rounded w-1/2" /></div>
                    <div className="bg-white/80 rounded-lg p-2 border border-black/5"><div className="h-2 bg-gray-200 rounded w-full mb-1" /><div className="h-2 bg-emerald-200 rounded w-2/3" /></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {bentoItems[0].features?.map((feature, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-black/5 text-sm text-[var(--gapah-text-secondary)]">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Medium - Platforms */}
          <div className={`lg:col-span-2 scroll-reveal stagger-2 ${isVisible ? 'revealed' : ''}`}>
            <div className="group relative bg-white rounded-3xl p-8 h-full overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${bentoItems[1].color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bentoItems[1].color} flex items-center justify-center mb-6`}>
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{bentoItems[1].title}</h3>
                <p className="text-[var(--gapah-text-secondary)] mb-6">{bentoItems[1].description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {bentoItems[1].platforms?.map((platform, i) => (
                    <a key={i} href={platform.ref} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-black/5 hover:bg-[var(--gapah-accent)]/10 transition-colors group/link">
                      <div>
                        <div className="font-semibold text-sm">{platform.name}</div>
                        <div className="text-xs text-[var(--gapah-text-secondary)]">{platform.spec}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[var(--gapah-text-secondary)] group-hover/link:text-[var(--gapah-accent)] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Medium - Universal */}
          <div className={`lg:col-span-2 scroll-reveal stagger-3 ${isVisible ? 'revealed' : ''}`}>
            <div className="group relative bg-white rounded-3xl p-8 h-full overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${bentoItems[2].color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bentoItems[2].color} flex items-center justify-center mb-6`}>
                    <Sliders className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{bentoItems[2].title}</h3>
                  <p className="text-[var(--gapah-text-secondary)] mb-6">{bentoItems[2].description}</p>
                  <div className="space-y-2">
                    {bentoItems[2].controls?.map((control, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[var(--gapah-text-secondary)]">
                        <Check className="w-4 h-4 text-[var(--gapah-accent)]" />
                        {control}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sliders className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-medium">Universal Settings</span>
                  </div>
                  <div className="space-y-2">
                    {['Copy count', 'Char limit', 'Emoji', 'Tone'].map((label, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/80 rounded-lg p-2 border border-black/5">
                        <span className="text-[10px] text-gray-500">{label}</span>
                        <div className="w-12 h-2 bg-emerald-200 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Large - Data Lens (dark) */}
          <div className={`lg:col-span-2 lg:row-span-2 scroll-reveal stagger-4 ${isVisible ? 'revealed' : ''}`}>
            <div className="group relative bg-gradient-to-br from-[var(--gapah-dark)] to-gray-900 rounded-3xl p-8 h-full overflow-hidden border border-white/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${bentoItems[3].color} opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bentoItems[3].color} flex items-center justify-center mb-6`}>
                  <BarChart2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{bentoItems[3].title}</h3>
                <p className="text-white/60 mb-6">{bentoItems[3].description}</p>
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart2 className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-medium text-white/70">Dashboard Analysis</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[{ v: '3.2%', l: 'CTR' }, { v: 'Rp 450', l: 'CPC' }, { v: '4.8x', l: 'ROAS' }].map((s, i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-white">{s.v}</div>
                        <div className="text-[9px] text-white/50">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-16 flex items-end gap-1">
                    {[40, 55, 45, 60, 70, 65, 80, 85, 75, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-amber-400/30 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {bentoItems[3].features?.map((feature, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/70">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Small - Rich Context */}
          <div className={`scroll-reveal stagger-5 ${isVisible ? 'revealed' : ''}`}>
            <div className="group relative bg-white rounded-3xl p-6 h-full overflow-hidden border border-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bentoItems[4].color} flex items-center justify-center mb-4`}>
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{bentoItems[4].title}</h3>
              <p className="text-sm text-[var(--gapah-text-secondary)]">{bentoItems[4].description}</p>
            </div>
          </div>
          
          {/* Small - Multiple Variations */}
          <div className={`scroll-reveal stagger-6 ${isVisible ? 'revealed' : ''}`}>
            <div className="group relative bg-white rounded-3xl p-6 h-full overflow-hidden border border-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bentoItems[5].color} flex items-center justify-center mb-4`}>
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{bentoItems[5].title}</h3>
              <p className="text-sm text-[var(--gapah-text-secondary)]">{bentoItems[5].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Platform Specs Section
function PlatformSpecsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const platforms = [
    { name: 'TikTok Ads', iconSvg: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.51a8.27 8.27 0 0 0 4.85 1.56V6.69h-1.09z"/></svg>, specs: [{ label: 'Ad Text', value: '1-100 characters (12-80 recommended)' }, { label: 'Display Name', value: 'Max 40 characters' }, { label: 'CTA Options', value: 'Shop Now, Learn More, Download, etc.' }], ref: 'https://ads.tiktok.com/help/category?id=6dGs4bNMAZSdPr4pQ0KFuX', color: 'from-black to-gray-800' },
    { name: 'Meta Ads', iconSvg: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>, specs: [{ label: 'Primary Text', value: '125 chars recommended (truncates after)' }, { label: 'Headline', value: '40 chars recommended' }, { label: 'Description', value: '30 chars recommended' }], ref: 'https://www.facebook.com/business/ads-guide/update', color: 'from-blue-600 to-blue-800' },
    { name: 'Google Ads', iconSvg: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>, specs: [{ label: 'Headlines', value: '15 headlines, 30 chars each' }, { label: 'Descriptions', value: '4 descriptions, 90 chars each' }, { label: 'Format', value: 'Responsive Search Ads (RSA)' }], ref: 'https://support.google.com/google-ads/answer/13676244', color: 'from-red-500 to-red-700' },
    { name: 'X Ads', iconSvg: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, specs: [{ label: 'Post Text', value: '280 characters max' }, { label: 'Media', value: 'Images, Videos, Cards supported' }, { label: 'CTA', value: 'Website, App, or Engagement' }], ref: 'https://business.x.com/en/help/campaign-setup/creative-ad-specifications', color: 'from-gray-900 to-black' },
  ];
  
  return (
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-4 block">Platform Specs</span>
          <h2 className="text-[clamp(40px,5vw,72px)] font-bold text-[var(--gapah-text)] mb-4">Always up to date.</h2>
          <p className="text-lg text-[var(--gapah-text-secondary)] max-w-xl mx-auto">We reference official platform documentation to ensure your copy is always compliant.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div key={index} className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}>
              <a href={platform.ref} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-3xl p-8 border border-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                    {platform.iconSvg}
                  </div>
                  <ExternalLink className="w-5 h-5 text-[var(--gapah-text-secondary)] group-hover:text-[var(--gapah-accent)] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--gapah-text)]">{platform.name}</h3>
                <div className="space-y-3">
                  {platform.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-[var(--gapah-text-secondary)]">{spec.label}</span>
                      <span className="text-[var(--gapah-text)] font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </a>
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
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-dark)] relative overflow-hidden">
      <div className="aurora-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-30 animate-float-slow" style={{ background: 'radial-gradient(circle, rgba(59, 157, 245, 0.4) 0%, transparent 70%)', top: '-20%', left: '10%', filter: 'blur(80px)' }} />
      </div>
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-3xl mx-auto text-center scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-[clamp(48px,6vw,84px)] font-bold text-white mb-6 leading-tight">
            Ready to<br /><span className="text-gradient">move faster?</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">Get early access and start generating better ad copy today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="gapah-button gapah-button-primary text-base py-4 px-8">Get early access<ArrowRight className="w-5 h-5 ml-2" /></a>
            <a href="/pricing" className="gapah-button gapah-button-secondary text-base py-4 px-8 text-white border-white/30 hover:bg-white/10">View pricing</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <HeroSection />
      <BentoFeaturesSection />
      <PlatformSpecsSection />
      <CTASection />
    </>
  );
}
