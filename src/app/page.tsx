"use client";
import { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Image, 
  Check, 
  ArrowRight, 
  Upload, 
  Settings, 
  Globe,
  TrendingUp,
  Menu,
  X,
  ChevronRight,
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

// Navigation Component with smooth animations
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ];
  
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>
        <div className={`mx-[5vw] rounded-full transition-all duration-500 ${
          scrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}>
          <div className="px-6 md:px-8 flex items-center justify-between h-14">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gapah-accent)] to-[#2563EB] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[var(--gapah-text)]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                Gapah
              </span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="/contact" 
                className="gapah-button gapah-button-primary text-sm py-2.5 px-5"
              >
                Get early access
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 transition-all duration-500 ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <a 
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="gapah-button gapah-button-primary w-full"
            >
              Get early access
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// Particle Background Component
function ParticleBackground() {
  return (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  );
}

// Floating Orbs Component
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(59, 157, 245, 0.3) 0%, transparent 70%)',
          top: '-10%',
          right: '-10%',
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%',
          filter: 'blur(50px)',
          animationDelay: '-3s',
        }}
      />
      <div 
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          top: '40%',
          left: '30%',
          filter: 'blur(40px)',
          animationDelay: '-6s',
        }}
      />
    </div>
  );
}

// Hero Section with Advanced Animations
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x: x * 20, y: y * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-[var(--gapah-bg)] flex items-center relative overflow-hidden pt-24"
    >
      <FloatingOrbs />
      <ParticleBackground />
      
      <div className="w-full px-[7vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gapah-accent)]/10 border border-[var(--gapah-accent)]/20 mb-6 animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-[var(--gapah-accent)]" />
              <span className="text-sm font-medium text-[var(--gapah-accent)]">Now in Early Access</span>
            </div>
            
            <h1 className="text-[clamp(48px,6vw,84px)] font-bold leading-[0.95] mb-6 text-[var(--gapah-text)]">
              Swift Ad<br />
              <span className="text-gradient">Intelligence</span>
            </h1>
            
            <p className="text-xl text-[var(--gapah-text-secondary)] max-w-lg mb-8 leading-relaxed">
              Generate platform-perfect ad copy from images and analyze campaign data—without leaving your browser. Built for Indonesian marketers.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="/contact" className="gapah-button gapah-button-primary text-base">
                Get early access
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/features" className="gapah-button gapah-button-secondary text-base group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                See how it works
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--gapah-text-secondary)]">Trusted by 180+ marketers</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Card with Parallax */}
          <div 
            ref={cardRef}
            className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            }}
          >
            <div className="gapah-card p-3 overflow-hidden card-shine">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src="/hero_panel_ui.jpg" 
                  alt="Gapah AI Marketing Copilot Interface" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div 
              className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center animate-float"
              style={{ animationDelay: '-2s' }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--gapah-accent)]">10s</div>
                <div className="text-xs text-gray-500">Generate</div>
              </div>
            </div>
            
            <div 
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white shadow-xl animate-float-slow"
              style={{ animationDelay: '-4s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Copy Ready</div>
                  <div className="text-xs text-gray-500">TikTok Format</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 border-2 border-dashed border-[var(--gapah-accent)]/20 rounded-full animate-rotate-slow" />
          </div>
        </div>
        
        {/* Platform Badges */}
        <div className={`mt-16 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {['TikTok Ads', 'Meta Ads', 'Google Ads', 'X Ads'].map((platform, i) => (
            <div key={platform} className="platform-badge animate-bounce-subtle" style={{ animationDelay: `${i * 0.2}s` }}>
              <Target className="w-4 h-4" />
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Data Lens Feature Section
function DataLensSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="section-pinned bg-[var(--gapah-bg)]"
    >
      <FloatingOrbs />
      
      <div className="w-full px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Media Card */}
          <div className={`scroll-reveal-left ${isVisible ? 'revealed' : ''}`}>
            <div className="gapah-card p-3 overflow-hidden card-shine relative">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/data_lens_dashboard.jpg" 
                  alt="Data Lens Dashboard Analysis" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">AI Insight</div>
                    <div className="text-sm font-medium">CTR dropped 23% — Creative fatigue detected</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Text Content */}
          <div className={`scroll-reveal-right ${isVisible ? 'revealed' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gapah-accent)]/10 mb-6">
              <BarChart2 className="w-4 h-4 text-[var(--gapah-accent)]" />
              <span className="text-sm font-medium text-[var(--gapah-accent)]">Data Lens</span>
            </div>
            
            <h2 className="text-[clamp(36px,4vw,56px)] font-bold mb-6 text-[var(--gapah-text)]">
              Screenshot to<br /><span className="text-gradient">insight.</span>
            </h2>
            
            <p className="text-lg text-[var(--gapah-text-secondary)] max-w-md mb-8 leading-relaxed">
              Capture any dashboard. Get marketing-grade analysis: trends, anomalies, and what to do next—in seconds.
            </p>
            
            <a 
              href="/features" 
              className="inline-flex items-center text-[var(--gapah-accent)] font-semibold hover:underline mb-10"
            >
              Explore Data Lens
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            
            {/* Feature List */}
            <div className="space-y-4">
              {[
                { icon: TrendingUp, title: 'Trend Detection', desc: 'Automatically identify performance patterns' },
                { icon: Zap, title: 'Anomaly Alerts', desc: 'Spot unusual spikes or drops instantly' },
                { icon: Target, title: 'Actionable Insights', desc: 'Get specific recommendations for optimization' },
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white transition-colors duration-300 stagger-${i + 1} ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--gapah-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[var(--gapah-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--gapah-text)]">{feature.title}</h4>
                    <p className="text-sm text-[var(--gapah-text-secondary)]">{feature.desc}</p>
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

// Ad Copy Generator Section
function AdCopySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const platforms = ['TikTok', 'Meta', 'Google', 'X', 'Universal'];
  
  return (
    <section 
      ref={sectionRef}
      className="section-pinned bg-[var(--gapah-bg)]"
    >
      <FloatingOrbs />
      
      <div className="w-full px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Text Content */}
          <div className={`order-2 lg:order-1 scroll-reveal-left ${isVisible ? 'revealed' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gapah-emerald)]/10 mb-6">
              <Image className="w-4 h-4 text-[var(--gapah-emerald)]" />
              <span className="text-sm font-medium text-[var(--gapah-emerald)]">Ad Copy Generator</span>
            </div>
            
            <h2 className="text-[clamp(36px,4vw,56px)] font-bold mb-6 text-[var(--gapah-text)]">
              Image to<br /><span className="text-gradient">copy.</span>
            </h2>
            
            <p className="text-lg text-[var(--gapah-text-secondary)] max-w-md mb-6 leading-relaxed">
              Upload a creative. Add campaign descriptions, landing pages, product details—anything to make better copy. Choose your platform and tone. Receive multiple variations, perfectly formatted.
            </p>
            
            {/* Platform Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {platforms.map((platform) => (
                <span key={platform} className="platform-badge text-xs">
                  {platform}
                </span>
              ))}
            </div>
            
            <a 
              href="/features" 
              className="inline-flex items-center text-[var(--gapah-accent)] font-semibold hover:underline mb-10"
            >
              See copy formats
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            
            {/* Feature List */}
            <div className="space-y-4">
              {[
                { icon: Image, title: 'Vision-Powered', desc: 'AI analyzes your creative for context' },
                { icon: Copy, title: 'One-Click Copy', desc: 'Platform-perfect formatting every time' },
                { icon: Settings, title: 'Universal Mode', desc: 'Customize copy count, length, emoji, tone & style' },
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white transition-colors duration-300 stagger-${i + 1} ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--gapah-emerald)]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[var(--gapah-emerald)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--gapah-text)]">{feature.title}</h4>
                    <p className="text-sm text-[var(--gapah-text-secondary)]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Media Card */}
          <div className={`order-1 lg:order-2 scroll-reveal-right ${isVisible ? 'revealed' : ''}`}>
            <div className="gapah-card p-3 overflow-hidden card-shine relative">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/ad_copy_panel_ui.jpg" 
                  alt="Ad Copy Generator Interface" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Copy Variations */}
              <div className="absolute top-6 right-6 p-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg max-w-[200px]">
                <div className="text-xs text-gray-500 mb-2">Variations</div>
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-green-50 border border-green-200">
                    <div className="text-xs font-medium text-green-700">✓ 72 chars</div>
                  </div>
                  <div className="p-2 rounded-lg bg-green-50 border border-green-200">
                    <div className="text-xs font-medium text-green-700">✓ 68 chars</div>
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const steps = [
    {
      icon: Upload,
      title: 'Upload your creative',
      description: 'Drag and drop or paste any image into the side panel. Add campaign descriptions, landing pages, product details—anything to make better copy.',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Settings,
      title: 'Set platform & tone',
      description: 'Choose TikTok, Meta, Google, X, or Universal mode. Pick your tone, style, copy count, character length, and emoji preferences.',
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: Copy,
      title: 'Copy and launch',
      description: 'Grab the best variation and paste it directly into Ads Manager. All formats are platform-perfect and ready to publish.',
      color: 'from-emerald-500 to-teal-400',
    },
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden"
    >
      <FloatingOrbs />
      
      <div className="w-full px-[7vw] relative z-10">
        <div className={`text-center mb-20 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-4 block">How It Works</span>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-[var(--gapah-text)]">
            From image to publish—<span className="text-gradient">fast.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}
            >
              <div className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
                )}
                
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-black/5 h-full hover-lift card-shine relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="text-sm font-mono text-[var(--gapah-accent)] mb-3 font-medium">Step 0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--gapah-text)]">{step.title}</h3>
                  <p className="text-[var(--gapah-text-secondary)] leading-relaxed">{step.description}</p>
                </div>
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
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const plans = [
    {
      name: 'Early Access',
      price: 'Rp 299.000',
      originalPrice: 'Rp 999.000',
      period: 'lifetime',
      description: 'Limited to the first 100 seats. BYOK/BYOAI included.',
      features: [
        'Lifetime license',
        'BYOK/BYOAI included',
        'All platforms (TikTok, Meta, Google, X)',
        'Universal/Advanced mode',
        'All features included',
        'Priority support',
        'Future updates',
      ],
      highlighted: true,
      cta: 'Get Early Access',
      badge: 'Best Value',
    },
    {
      name: 'Managed Pro',
      price: 'Rp 149.000',
      originalPrice: 'Rp 299.000',
      period: '/month',
      description: 'For regular users who want managed AI.',
      features: [
        '500 generations/month',
        'All platforms included',
        'Universal/Advanced mode',
        'Priority support',
        'No API key needed',
        'Analytics dashboard',
      ],
      highlighted: false,
      cta: 'Start Pro Trial',
      badge: null,
    },
    {
      name: 'Agency',
      price: 'Rp 3.999.000',
      originalPrice: '',
      period: '',
      description: 'For teams managing multiple clients.',
      features: [
        '5 team seats',
        'Unlimited generations',
        'Unified billing',
        'Onboarding call',
        'Dedicated support',
        'Custom integrations',
      ],
      highlighted: false,
      cta: 'Contact Sales',
      badge: null,
    },
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden"
    >
      <FloatingOrbs />
      
      <div className="w-full px-[7vw] relative z-10">
        <div className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-4 block">Pricing</span>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-[var(--gapah-text)] mb-4">
            Simple, local <span className="text-gradient">pricing.</span>
          </h2>
          <p className="text-lg text-[var(--gapah-text-secondary)] max-w-xl mx-auto">
            Choose the plan that fits your needs. All plans include access to all platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className={`relative rounded-3xl p-8 h-full transition-all duration-500 ${
                plan.highlighted 
                  ? 'bg-white border-2 border-[var(--gapah-accent)] shadow-xl scale-105' 
                  : 'bg-white/70 backdrop-blur-sm border border-black/5 hover:shadow-lg'
              } ${hoveredPlan === index ? 'scale-[1.02]' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[var(--gapah-accent)] to-[#2563EB] text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <h3 className="text-lg font-bold mb-2 text-[var(--gapah-text)]">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-[var(--gapah-text)]">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="price-original">{plan.originalPrice}</span>
                  )}
                </div>
                <span className="text-sm text-[var(--gapah-text-secondary)]">{plan.period}</span>
                <p className="text-sm text-[var(--gapah-text-secondary)] mt-3 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-[var(--gapah-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[var(--gapah-accent)]" />
                      </div>
                      <span className="text-[var(--gapah-text)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full gapah-button text-sm ${
                  plan.highlighted ? 'gapah-button-primary' : 'gapah-button-secondary'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Note */}
        <div className={`mt-12 text-center scroll-reveal stagger-4 ${isVisible ? 'revealed' : ''}`}>
          <p className="text-sm text-[var(--gapah-text-secondary)]">
            <Shield className="w-4 h-4 inline mr-2" />
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}

// Built For Indonesia Section
function IndonesiaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="section-pinned bg-[var(--gapah-bg)]"
    >
      <FloatingOrbs />
      
      <div className="w-full px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Media Card */}
          <div className={`scroll-reveal-left ${isVisible ? 'revealed' : ''}`}>
            <div className="gapah-card p-3 overflow-hidden card-shine">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/cityscape_jakarta.jpg" 
                  alt="Jakarta Cityscape" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right - Text Content */}
          <div className={`scroll-reveal-right ${isVisible ? 'revealed' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 mb-6">
              <Globe className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">Made for Indonesia</span>
            </div>
            
            <h2 className="text-[clamp(36px,4vw,56px)] font-bold mb-6 text-[var(--gapah-text)]">
              Built for<br /><span className="text-gradient">Indonesian marketers.</span>
            </h2>
            
            <p className="text-lg text-[var(--gapah-text-secondary)] max-w-md mb-8 leading-relaxed">
              Pricing in Rupiah. Support that understands local platforms. Copy that sounds native—because it is.
            </p>
            
            <a 
              href="/about" 
              className="inline-flex items-center text-[var(--gapah-accent)] font-semibold hover:underline mb-10"
            >
              Join the community
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '92%', label: 'AI adoption rate' },
                { value: '220M+', label: 'Internet users' },
                { value: '#1', label: 'TikTok market' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`text-center p-4 rounded-2xl bg-white/50 stagger-${i + 1} ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[var(--gapah-text)]">{stat.value}</div>
                  <div className="text-xs text-[var(--gapah-text-secondary)] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
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
    { value: 180, suffix: '+', label: 'Projects supported' },
    { value: 30, prefix: 'Rp ', suffix: 'M+', label: 'Client funding enabled' },
    { value: 30, suffix: '+', label: 'Countries reached' },
    { value: 20, suffix: '+', label: 'Passionate builders' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
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
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible]);
  
  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden"
    >
      <FloatingOrbs />
      
      <div className="w-full px-[7vw] relative z-10">
        <div className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-[var(--gapah-text)]">
            Trusted by teams who <span className="text-gradient">move fast.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}
            >
              <div className="text-[clamp(48px,5vw,72px)] font-bold text-[var(--gapah-text)] leading-none mb-2">
                {stat.prefix || ''}{counts[index]}{stat.suffix}
              </div>
              <div className="text-sm text-[var(--gapah-text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className={`mt-20 scroll-reveal stagger-5 ${isVisible ? 'revealed' : ''}`}>
          <p className="mono-label mb-10 text-center">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Epigra', 'Sahlah', 'Lucidblack', 'Blomer', 'Bridge', 'Byteams'].map((name, i) => (
              <div 
                key={i} 
                className="text-2xl font-bold text-[var(--gapah-text)] opacity-30 hover:opacity-60 transition-opacity cursor-default"
              >
                {name}
              </div>
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const testimonials = [
    {
      quote: "Gapah turned our weekly reporting from 2 hours into 10 minutes. The insights are actually actionable.",
      author: 'Rizky Pratama',
      role: 'Media Buyer, Jakarta',
      avatar: 'RP',
      color: 'from-blue-400 to-blue-600',
    },
    {
      quote: "The copy variations actually sound like our brand—no more generic AI tone. It's like having a copywriter in my browser.",
      author: 'Sari Wijaya',
      role: 'UMKM Owner, Bandung',
      avatar: 'SW',
      color: 'from-purple-400 to-purple-600',
    },
    {
      quote: "Finally, a tool that understands TikTok ad specs without me checking character counts every time.",
      author: 'Azzam Hidayat',
      role: 'Performance Lead, Agency',
      avatar: 'AH',
      color: 'from-emerald-400 to-emerald-600',
    },
    {
      quote: "The Data Lens feature alone is worth the price. I can screenshot any dashboard and get instant insights for my clients.",
      author: 'Dewi Kusuma',
      role: 'Freelance Marketer',
      avatar: 'DK',
      color: 'from-amber-400 to-amber-600',
    },
    {
      quote: "We've cut our ad creation time by 70%. My team can now focus on strategy instead of writing copy variations.",
      author: 'Budi Santoso',
      role: 'Marketing Director',
      avatar: 'BS',
      color: 'from-rose-400 to-rose-600',
    },
    {
      quote: "Local pricing in Rupiah makes this a no-brainer for Indonesian agencies. The support team actually understands our market.",
      author: 'Maya Anggraini',
      role: 'Agency Founder',
      avatar: 'MA',
      color: 'from-cyan-400 to-cyan-600',
    },
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden"
    >
      <FloatingOrbs />
      
      <div className="w-full px-[7vw] relative z-10">
        <div className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-4 block">Testimonials</span>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-[var(--gapah-text)]">
            What they say about <span className="text-gradient">Gapah.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`scroll-reveal stagger-${(index % 3) + 1} ${isVisible ? 'revealed' : ''}`}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-black/5 h-full hover-lift card-shine group">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <span className="text-sm font-bold text-white">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--gapah-text)]">{testimonial.author}</div>
                    <div className="text-xs text-[var(--gapah-text-secondary)]">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-[var(--gapah-text-secondary)] leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-[var(--gapah-dark)] relative overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="aurora-bg" />
      
      {/* Floating Orbs for Dark BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(59, 157, 245, 0.4) 0%, transparent 70%)',
            top: '-20%',
            left: '10%',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
            bottom: '-10%',
            right: '10%',
            filter: 'blur(60px)',
            animationDelay: '-4s',
          }}
        />
      </div>
      
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-3xl mx-auto text-center scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <MessageCircle className="w-4 h-4 text-[var(--gapah-accent)]" />
            <span className="text-sm font-medium text-white/80">Have any questions?</span>
          </div>
          
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold text-white mb-6">
            Ready to move <span className="text-gradient">faster?</span>
          </h2>
          
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
            Get early access and start generating ad copy and insights today. Join 180+ marketers who trust Gapah.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="gapah-button gapah-button-primary text-base py-4 px-8">
              Get early access
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/contact" className="gapah-button gapah-button-secondary text-base py-4 px-8 text-white border-white/30 hover:bg-white/10">
              Ask a question
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>30-day guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>180+ happy users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Big Footer
function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  };
  
  return (
    <footer className="bg-[var(--gapah-bg)] border-t border-black/5">
      {/* Main Footer */}
      <div className="w-full px-[7vw] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gapah-accent)] to-[#2563EB] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[var(--gapah-text)]">
                Gapah
              </span>
            </a>
            <p className="text-[var(--gapah-text-secondary)] max-w-sm mb-6 leading-relaxed">
              Swift Ad Intelligence for Indonesian digital marketers. Generate copy, analyze data, move faster.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[var(--gapah-accent)]/10 hover:text-[var(--gapah-accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[var(--gapah-accent)]/10 hover:text-[var(--gapah-accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[var(--gapah-accent)]/10 hover:text-[var(--gapah-accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-[var(--gapah-text)] mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)] transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-black/5">
        <div className="w-full px-[7vw] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--gapah-text-secondary)]">
              © 2026 Gapah. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:hello@gapah.id" className="text-sm text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)] transition-colors">
                hello@gapah.id
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <DataLensSection />
        <AdCopySection />
        <HowItWorksSection />
        <PricingSection />
        <IndonesiaSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
