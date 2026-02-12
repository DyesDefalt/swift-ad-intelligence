import { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Check, 
  ArrowRight, 
  Menu,
  X,
  ChevronRight,
  Shield,
  Users,
  Sparkles
} from 'lucide-react';

// Navigation
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
    <section className="min-h-[60vh] bg-[var(--gapah-bg)] flex items-center relative overflow-hidden pt-24">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="mono-label mb-6 block">Pricing</span>
          <h1 className="text-[clamp(48px,6vw,84px)] font-bold leading-[0.95] mb-6 text-[var(--gapah-text)]">
            Simple, local<br /><span className="text-gradient">pricing.</span>
          </h1>
          <p className="text-xl text-[var(--gapah-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. All plans include access to all platforms and features.
          </p>
        </div>
      </div>
    </section>
  );
}

// Pricing Cards Section
function PricingCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
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
      icon: Sparkles,
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
      icon: Zap,
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
      icon: Users,
    },
  ];
  
  return (
    <section ref={sectionRef} className="py-20 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
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
                  ? 'bg-white border-2 border-[var(--gapah-accent)] shadow-xl md:scale-105' 
                  : 'bg-white/70 backdrop-blur-sm border border-black/5 hover:shadow-lg'
              } ${hoveredPlan === index ? 'scale-[1.02]' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[var(--gapah-accent)] to-[#2563EB] text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.highlighted ? 'bg-[var(--gapah-accent)]/10' : 'bg-gray-100'}`}>
                    <plan.icon className={`w-5 h-5 ${plan.highlighted ? 'text-[var(--gapah-accent)]' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--gapah-text)]">{plan.name}</h3>
                </div>
                
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
                
                <button className={`w-full gapah-button text-sm ${plan.highlighted ? 'gapah-button-primary' : 'gapah-button-secondary'}`}>
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

// Comparison Table
function ComparisonTable() {
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
  
  const features = [
    { name: 'TikTok Ads', early: true, pro: true, agency: true },
    { name: 'Meta Ads', early: true, pro: true, agency: true },
    { name: 'Google Ads', early: true, pro: true, agency: true },
    { name: 'X Ads', early: true, pro: true, agency: true },
    { name: 'Universal Mode', early: true, pro: true, agency: true },
    { name: 'Data Lens', early: true, pro: true, agency: true },
    { name: 'Generations', early: 'Unlimited (BYOK)', pro: '500/month', agency: 'Unlimited' },
    { name: 'Team Seats', early: '1', pro: '1', agency: '5' },
    { name: 'Priority Support', early: true, pro: true, agency: true },
    { name: 'API Access', early: false, pro: false, agency: true },
    { name: 'Custom Integrations', early: false, pro: false, agency: true },
  ];
  
  return (
    <section ref={sectionRef} className="py-20 bg-[var(--gapah-bg)]">
      <div className="w-full px-[7vw]">
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-3xl font-bold text-[var(--gapah-text)] mb-4">Compare Plans</h2>
          <p className="text-[var(--gapah-text-secondary)]">See what's included in each plan</p>
        </div>
        
        <div className={`overflow-x-auto scroll-reveal stagger-1 ${isVisible ? 'revealed' : ''}`}>
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr className="border-b border-black/10">
                <th className="text-left py-4 px-4 font-semibold text-[var(--gapah-text)]">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-[var(--gapah-text)]">Early Access</th>
                <th className="text-center py-4 px-4 font-semibold text-[var(--gapah-accent)]">Managed Pro</th>
                <th className="text-center py-4 px-4 font-semibold text-[var(--gapah-text)]">Agency</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-black/5">
                  <td className="py-4 px-4 text-[var(--gapah-text)]">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {typeof feature.early === 'boolean' ? (
                      feature.early ? <Check className="w-5 h-5 text-[var(--gapah-accent)] mx-auto" /> : <span className="text-gray-300">—</span>
                    ) : (
                      <span className="text-sm text-[var(--gapah-text-secondary)]">{feature.early}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-4 bg-[var(--gapah-accent)]/5">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? <Check className="w-5 h-5 text-[var(--gapah-accent)] mx-auto" /> : <span className="text-gray-300">—</span>
                    ) : (
                      <span className="text-sm text-[var(--gapah-text-secondary)]">{feature.pro}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {typeof feature.agency === 'boolean' ? (
                      feature.agency ? <Check className="w-5 h-5 text-[var(--gapah-accent)] mx-auto" /> : <span className="text-gray-300">—</span>
                    ) : (
                      <span className="text-sm text-[var(--gapah-text-secondary)]">{feature.agency}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
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
  
  const faqs = [
    { q: 'What is BYOK/BYOAI?', a: 'BYOK (Bring Your Own Key) means you use your own OpenAI or Anthropic API key. This gives you unlimited generations at the lowest cost, as you pay API providers directly.' },
    { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.' },
    { q: 'What happens after Early Access ends?', a: 'Early Access is a one-time offer for the first 100 users. After it sells out, the price will increase to the normal lifetime price of Rp 999,000.' },
    { q: 'Is there a free trial?', a: 'We offer a 30-day money-back guarantee on all plans. If you are not satisfied, contact us for a full refund—no questions asked.' },
    { q: 'Do you offer refunds?', a: 'Yes, we offer a 30-day money-back guarantee on all plans. If Gapah does not meet your expectations, we will refund your purchase in full.' },
  ];
  
  return (
    <section ref={sectionRef} className="py-20 bg-[var(--gapah-bg)]">
      <div className="w-full px-[7vw]">
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-3xl font-bold text-[var(--gapah-text)] mb-4">Frequently Asked Questions</h2>
          <p className="text-[var(--gapah-text-secondary)]">Got questions? We have answers.</p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`scroll-reveal stagger-${(index % 3) + 1} ${isVisible ? 'revealed' : ''}`}>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-black/5 overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-[var(--gapah-text)]">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-[var(--gapah-text-secondary)] transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-[var(--gapah-text-secondary)] leading-relaxed">{faq.a}</p>
                  </div>
                )}
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
      </div>
      
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-3xl mx-auto text-center scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold text-white mb-6">
            Still have <span className="text-gradient">questions?</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
            Our team is here to help. Reach out and we will get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="contact.html" className="gapah-button gapah-button-primary text-base py-4 px-8">
              Contact us
              <ArrowRight className="w-5 h-5 ml-2" />
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
export default function PricingPage() {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <Navigation />
      <main>
        <HeroSection />
        <PricingCardsSection />
        <ComparisonTable />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
