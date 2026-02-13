"use client";
import { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Mail,
  MessageCircle,
  Send,
  Check,
  MapPin,
  Clock,
  Phone
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
    <section className="min-h-[70vh] bg-[var(--gapah-bg)] flex items-center relative overflow-hidden pt-24">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gapah-accent)]/10 border border-[var(--gapah-accent)]/20 mb-8">
            <MessageCircle className="w-4 h-4 text-[var(--gapah-accent)]" />
            <span className="text-sm font-medium text-[var(--gapah-accent)]">Contact</span>
          </div>
          <h1 className="text-[clamp(40px,5vw,56px)] font-bold leading-[1.1] mb-6 text-[var(--gapah-text)]">
            Let&apos;s <span className="text-gradient">talk.</span>
          </h1>
          <p className="text-xl text-[var(--gapah-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Have questions about Gapah? Want to request early access? We&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }, 3000);
  };
  
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@gapah.id', href: 'mailto:hello@gapah.id' },
    { icon: Phone, label: 'WhatsApp', value: '+62 812-3456-7890', href: '#' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
    { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia', href: null },
  ];
  
  return (
    <section ref={sectionRef} className="py-20 bg-[var(--gapah-bg)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="w-full px-[7vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`scroll-reveal-left ${isVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl font-bold mb-6 text-[var(--gapah-text)]">Get in touch</h2>
            <p className="text-[var(--gapah-text-secondary)] mb-8 leading-relaxed">
              Whether you have a question about features, pricing, or just want to say hello, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gapah-accent)]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[var(--gapah-accent)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--gapah-text-secondary)]">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-[var(--gapah-text)] hover:text-[var(--gapah-accent)] transition-colors">{item.value}</a>
                    ) : (
                      <div className="font-medium text-[var(--gapah-text)]">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <p className="text-sm text-[var(--gapah-text-secondary)] mb-4">Follow us</p>
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="px-4 py-2 rounded-full bg-white border border-black/5 text-sm font-medium text-[var(--gapah-text)] hover:bg-[var(--gapah-accent)]/10 hover:text-[var(--gapah-accent)] hover:border-[var(--gapah-accent)]/20 transition-all">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`scroll-reveal-right ${isVisible ? 'revealed' : ''}`}>
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--gapah-text)] mb-2">Message sent!</h3>
                  <p className="text-[var(--gapah-text-secondary)]">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--gapah-text)] mb-2">Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 focus:border-[var(--gapah-accent)] focus:ring-2 focus:ring-[var(--gapah-accent)]/20 outline-none transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--gapah-text)] mb-2">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 focus:border-[var(--gapah-accent)] focus:ring-2 focus:ring-[var(--gapah-accent)]/20 outline-none transition-all" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--gapah-text)] mb-2">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 focus:border-[var(--gapah-accent)] focus:ring-2 focus:ring-[var(--gapah-accent)]/20 outline-none transition-all">
                      <option value="">Select a subject</option>
                      <option value="early-access">Request Early Access</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--gapah-text)] mb-2">Message</label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/10 focus:border-[var(--gapah-accent)] focus:ring-2 focus:ring-[var(--gapah-accent)]/20 outline-none transition-all resize-none" placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="w-full gapah-button gapah-button-primary">
                    <Send className="w-4 h-4 mr-2" />Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Early Access CTA
function EarlyAccessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setEmail(''); }, 3000);
  };
  
  return (
    <section ref={sectionRef} className="py-32 bg-[var(--gapah-dark)] relative overflow-hidden">
      <div className="aurora-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-30 animate-float-slow" style={{ background: 'radial-gradient(circle, rgba(59, 157, 245, 0.4) 0%, transparent 70%)', top: '-20%', left: '10%', filter: 'blur(80px)' }} />
      </div>
      <div className="w-full px-[7vw] relative z-10">
        <div className={`max-w-2xl mx-auto text-center scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <MessageCircle className="w-4 h-4 text-[var(--gapah-accent)]" />
            <span className="text-sm font-medium text-white/80">Limited to 100 seats</span>
          </div>
          <h2 className="text-[clamp(36px,4vw,52px)] font-bold text-white mb-6">Get <span className="text-gradient">early access</span></h2>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">Join the first 100 users and get lifetime access at a special price. No subscription, no recurring fees.</p>
          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-green-400">
              <Check className="w-6 h-6" /><span className="font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-[var(--gapah-accent)] focus:ring-2 focus:ring-[var(--gapah-accent)]/20 outline-none transition-all" />
              <button type="submit" className="gapah-button gapah-button-primary whitespace-nowrap">Join the list<ArrowRight className="w-4 h-4 ml-2" /></button>
            </form>
          )}
          <p className="text-sm text-white/40 mt-4">Early Access: Rp 299,000 <span className="line-through">Rp 999,000</span> lifetime</p>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactFormSection />
      <EarlyAccessSection />
    </>
  );
}
