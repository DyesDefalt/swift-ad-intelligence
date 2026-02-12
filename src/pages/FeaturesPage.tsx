import { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Image, 
  BarChart2, 
  Check, 
  ArrowRight, 
  Layers,
  Menu,
  X,
  ChevronRight,
  FileText,
  Sliders,
  Palette
} from 'lucide-react';

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: 'index.html', label: 'Home' },
    { href: 'features.html', label: 'Features' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'about.html', label: 'About' },
  ];
  
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className={`mx-[5vw] rounded-full transition-all duration-500 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
          <div className="px-6 md:px-8 flex items-center justify-between h-14">
            <a href="index.html" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gapah-accent)] to-[#2563EB] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[var(--gapah-text)]">Gapah</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link text-sm font-medium text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            
            <a href="contact.html" className="hidden md:flex gapah-button gapah-button-primary text-sm py-2.5 px-5">
              Get early access
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 transition-all duration-500 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <a href="contact.html" onClick={() => setMenuOpen(false)} className="gapah-button gapah-button-primary w-full">Get early access</a>
          </div>
        </div>
      </div>
    </>
  );
}

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
    <section className="min-h-[70vh] bg-[var(--gapah-bg)] flex items-center relative overflow-hidden pt-24">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="mono-label mb-6 block">Features</span>
          <h1 className="text-[clamp(48px,6vw,84px)] font-bold leading-[0.95] mb-6 text-[var(--gapah-text)]">
            Everything you need to<br /><span className="text-gradient">move faster.</span>
          </h1>
          <p className="text-xl text-[var(--gapah-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Powerful AI tools designed specifically for Indonesian digital marketers. Generate copy, analyze data, and optimize campaigns—all without leaving your browser.
          </p>
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, features, color, delay }: { icon: any, title: string, description: string, features: string[], color: string, delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={cardRef} className={`scroll-reveal stagger-${delay} ${isVisible ? 'revealed' : ''}`}>
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-black/5 h-full hover-lift card-shine group">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[var(--gapah-text)]">{title}</h3>
        <p className="text-[var(--gapah-text-secondary)] mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <div className="w-5 h-5 rounded-full bg-[var(--gapah-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[var(--gapah-accent)]" />
              </div>
              <span className="text-[var(--gapah-text)]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// All Features Section
function AllFeaturesSection() {
  const features = [
    {
      icon: Image,
      title: 'Vision-Powered Copy',
      description: 'Upload any image and let AI analyze it to generate contextually relevant ad copy that matches your creative.',
      features: ['Image analysis & context extraction', 'Product detail recognition', 'Mood & tone detection', 'Color palette awareness'],
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: FileText,
      title: 'Rich Context Input',
      description: 'Add campaign descriptions, landing pages, product details—anything to make your copy more accurate and effective.',
      features: ['Campaign description input', 'Landing page URL analysis', 'Product detail fields', 'Competitor reference'],
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: Layers,
      title: 'Multi-Platform Support',
      description: 'Generate perfectly formatted copy for all major advertising platforms with built-in character limits and best practices.',
      features: ['TikTok Ads (1-100 chars)', 'Meta Ads (Primary + Headline)', 'Google Ads (RSA format)', 'X Ads (280 chars)'],
      color: 'from-emerald-500 to-teal-400',
    },
    {
      icon: Sliders,
      title: 'Universal/Advanced Mode',
      description: 'Take full control with customizable settings for copy count, length, emoji usage, tone, and writing style.',
      features: ['Custom copy count (1-10)', 'Character length control', 'Emoji on/off toggle', 'Tone & style selection'],
      color: 'from-amber-500 to-orange-400',
    },
    {
      icon: BarChart2,
      title: 'Data Lens Analytics',
      description: 'Screenshot any dashboard and get instant marketing-grade analysis with trends, anomalies, and recommendations.',
      features: ['Screenshot-to-insight', 'Trend detection', 'Anomaly alerts', 'Actionable recommendations'],
      color: 'from-rose-500 to-red-400',
    },
    {
      icon: Palette,
      title: 'Tone & Style Library',
      description: 'Choose from predefined tones or create your own custom style that matches your brand voice perfectly.',
      features: ['Professional tone', 'Casual/Friendly tone', 'Urgent/FOMO tone', 'Custom style creation'],
      color: 'from-indigo-500 to-violet-400',
    },
  ];
  
  return (
    <section className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={(index % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Platform Support Section
function PlatformSupportSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const platforms = [
    { name: 'TikTok Ads', icon: '🔥', specs: 'Ad Text: 1-100 chars', color: 'from-black to-gray-800' },
    { name: 'Meta Ads', icon: '👍', specs: 'Primary: 125 chars, Headline: 40 chars', color: 'from-blue-600 to-blue-800' },
    { name: 'Google Ads', icon: '🔍', specs: '15 Headlines + 4 Descriptions', color: 'from-red-500 to-red-700' },
    { name: 'X Ads', icon: '𝕏', specs: 'Post: 280 chars', color: 'from-gray-900 to-black' },
    { name: 'Universal', icon: '⚡', specs: 'Fully customizable', color: 'from-[var(--gapah-accent)] to-[#2563EB]' },
  ];
  
  return (
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="mono-label mb-4 block">Platform Support</span>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-[var(--gapah-text)] mb-4">
            All major platforms, <span className="text-gradient">one tool.</span>
          </h2>
          <p className="text-lg text-[var(--gapah-text-secondary)] max-w-xl mx-auto">
            Generate perfectly formatted copy for every platform you advertise on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {platforms.map((platform, index) => (
            <div key={index} className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'revealed' : ''}`}>
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-black/5 text-center hover-lift card-shine group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-2xl">{platform.icon}</span>
                </div>
                <h3 className="font-bold text-[var(--gapah-text)] mb-2">{platform.name}</h3>
                <p className="text-xs text-[var(--gapah-text-secondary)]">{platform.specs}</p>
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
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-dark)] relative overflow-hidden">
      <div className="aurora-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-30 animate-float-slow" style={{ background: 'radial-gradient(circle, rgba(59, 157, 245, 0.4) 0%, transparent 70%)', top: '-20%', left: '10%', filter: 'blur(80px)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-float" style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)', bottom: '-10%', right: '10%', filter: 'blur(60px)', animationDelay: '-4s' }} />
      </div>
      
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-3xl mx-auto text-center scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold text-white mb-6">
            Ready to experience<br /><span className="text-gradient">the difference?</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
            Get early access to all features and start generating better ad copy today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="contact.html" className="gapah-button gapah-button-primary text-base py-4 px-8">
              Get early access
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="pricing.html" className="gapah-button gapah-button-secondary text-base py-4 px-8 text-white border-white/30 hover:bg-white/10">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    Product: [{ label: 'Features', href: 'features.html' }, { label: 'Pricing', href: 'pricing.html' }, { label: 'Changelog', href: '#' }, { label: 'Roadmap', href: '#' }],
    Company: [{ label: 'About', href: 'about.html' }, { label: 'Blog', href: '#' }, { label: 'Careers', href: '#' }, { label: 'Press Kit', href: '#' }],
    Resources: [{ label: 'Documentation', href: '#' }, { label: 'API Reference', href: '#' }, { label: 'Community', href: '#' }, { label: 'Support', href: 'contact.html' }],
    Legal: [{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }, { label: 'Cookies', href: '#' }],
  };
  
  return (
    <footer className="bg-[var(--gapah-bg)] border-t border-black/5">
      <div className="w-full px-[7vw] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <a href="index.html" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gapah-accent)] to-[#2563EB] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[var(--gapah-text)]">Gapah</span>
            </a>
            <p className="text-[var(--gapah-text-secondary)] max-w-sm mb-6 leading-relaxed">
              Swift Ad Intelligence for Indonesian digital marketers. Generate copy, analyze data, move faster.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-[var(--gapah-text)] mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)] transition-colors link-underline">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="w-full px-[7vw] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--gapah-text-secondary)]">© 2026 Gapah. All rights reserved.</p>
            <a href="mailto:hello@gapah.id" className="text-sm text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)] transition-colors">hello@gapah.id</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function FeaturesPage() {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <Navigation />
      <main>
        <HeroSection />
        <AllFeaturesSection />
        <PlatformSupportSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
