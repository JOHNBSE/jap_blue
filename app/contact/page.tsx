"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  CheckCircle2
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["Opera House, Bukoto-Kisaasi Road", "Kampala, Uganda"],
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Phone,
    title: "Telephone",
    details: ["+256 752 039 346", "+256 782 311 314"],
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["transformativeactionresearch@gmail.com"],
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    color: "bg-secondary/10 text-secondary"
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fade-right">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Get In Touch
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Have a question or want to discuss a partnership opportunity? We would love to hear from you. 
                  Reach out to us using any of the methods below or fill out the contact form.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-left" delay={200}>
              <PlaceholderImage 
                label="Image: JAP office in Kampala, Uganda"
                aspectRatio="video"
                variant="primary"
                iconSize="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} variant="fade-up" delay={index * 100}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className={`h-12 w-12 rounded-xl ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {info.title === "Telephone" ? (
                          <a href={`tel:${detail.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                            {detail}
                          </a>
                        ) : info.title === "Email" ? (
                          <a href={`mailto:${detail}`} className="hover:text-primary transition-colors break-all">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal variant="fade-right">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
                
                {isSubmitted ? (
                  <Card className="border-secondary">
                    <CardContent className="p-8 text-center">
                      <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 animate-bounce-soft">
                        <CheckCircle2 className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We will get back to you within 24-48 hours.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState({ name: "", email: "", organization: "", subject: "", message: "" })
                        }}
                        className="mt-6 bg-primary hover:bg-primary/90"
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formState.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                          placeholder="Your organization (optional)"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        >
                          <option value="">Select a subject</option>
                          <option value="partnership">Partnership Inquiry</option>
                          <option value="research">Research Collaboration</option>
                          <option value="consultancy">Consultancy Services</option>
                          <option value="training">Training Programs</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
            
            {/* Map & Social */}
            <ScrollReveal variant="fade-left" delay={200}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Find Us</h2>
                <p className="text-muted-foreground mb-8">
                  Visit our office in Kampala, Uganda.
                </p>
                
                {/* Map Placeholder */}
                <Card className="overflow-hidden mb-8 hover:shadow-lg transition-shadow">
                  <PlaceholderImage 
                    label="Map: Opera House, Bukoto-Kisaasi Road, Kampala, Uganda"
                    aspectRatio="video"
                    variant="primary"
                    iconSize="lg"
                    className="h-80"
                  />
                  <CardContent className="p-4 bg-card">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Opera House, Bukoto-Kisaasi Road</p>
                        <p className="text-sm text-muted-foreground">Kampala, Uganda</p>
                      </div>
                    </div>
                    <Button variant="link" className="mt-2 p-0 text-primary" asChild>
                      <a 
                        href="https://www.google.com/maps/search/Opera+House+Bukoto-Kisaasi+Road+Kampala+Uganda" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Social Links */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Follow us on social media for updates on our latest research and initiatives.
                    </p>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="h-12 w-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                          aria-label={social.label}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "How can I partner with JAP?", a: "Reach out via our contact form or email us directly. We welcome partnerships with organizations, institutions, and individuals committed to sustainable development." },
              { q: "Do you offer internship opportunities?", a: "Yes, we offer internship opportunities for students and early-career professionals interested in research and development work." },
              { q: "What geographic areas do you cover?", a: "While based in Kampala, Uganda, our work extends across Uganda and the broader East African region." },
              { q: "How can I access your research publications?", a: "Visit our Publications page to view abstracts and request full papers. Some publications are available for free download." },
            ].map((faq, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,168,79,0.15)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <ScrollReveal variant="zoom-in">
            <h2 className="text-2xl md:text-3xl font-bold text-balance">
              Ready to Make a Difference Together?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Whether you are interested in research collaboration, consultancy services, 
              or training programs, we are here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
