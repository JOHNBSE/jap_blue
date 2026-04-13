"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  FileText,
  ArrowRight,
  CheckCircle2,
  Beaker,
  Leaf,
  Building2,
  TreePine,
  Users,
  Lightbulb,
  TrendingUp,
  Award,
  Handshake,
  Globe
} from "lucide-react"

const serviceCategories = [
  {
    id: "research",
    icon: BookOpen,
    title: "Research Development and Commercialization",
    description: "Driving innovation through rigorous research methodologies and translating findings into real-world solutions.",
    color: "bg-primary",
    imageLabel: "Image: Research team analyzing data and findings",
    items: [
      { icon: Beaker, text: "Publications in international peer-reviewed journals" },
      { icon: Leaf, text: "Climate-smart agriculture research and implementation" },
      { icon: Building2, text: "Urban resilience research and planning" },
      { icon: TreePine, text: "Environmental sustainability innovations" },
      { icon: Lightbulb, text: "Jelly-from-milk commercialization benefiting 1000+ rural people" },
      { icon: Award, text: "Grants secured for vocational training research scaling" },
    ]
  },
  {
    id: "consultancy",
    icon: Briefcase,
    title: "Consultancy Services and Project Implementation",
    description: "Expert advisory services and hands-on project implementation for sustainable development outcomes.",
    color: "bg-secondary",
    imageLabel: "Image: Consultants working with community stakeholders",
    items: [
      { icon: Leaf, text: "Climate resilience advisory for local governments" },
      { icon: TreePine, text: "Environmental impact assessments" },
      { icon: TrendingUp, text: "Green business strategy development" },
      { icon: GraduationCap, text: "Vocational training programs with 80% employment outcome" },
      { icon: Building2, text: "Urban risk management projects benefiting 50,000+ residents" },
      { icon: Globe, text: "Climate resilience demonstration sites" },
    ]
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training, Skilling and Entrepreneur Startup",
    description: "Comprehensive training programs that equip individuals with skills for employment and entrepreneurship.",
    color: "bg-primary",
    imageLabel: "Image: Vocational training workshop in progress",
    items: [
      { icon: Users, text: "5000+ entrepreneurs trained across various sectors" },
      { icon: Lightbulb, text: "Startup funding mentorship and incubation support" },
      { icon: Building2, text: "Sustainable construction curriculum development" },
      { icon: Beaker, text: "Skills gap assessments and labor market research" },
      { icon: Handshake, text: "Industry partnerships for job placement" },
      { icon: Award, text: "Youth employment initiatives and women empowerment through bakery training" },
    ]
  },
  {
    id: "policy",
    icon: FileText,
    title: "Policy Advocacy and Collaborations",
    description: "Strategic partnerships and policy engagement to drive systemic change for sustainable development.",
    color: "bg-secondary",
    imageLabel: "Image: Policy briefing and stakeholder meeting",
    items: [
      { icon: GraduationCap, text: "Partnerships with leading universities" },
      { icon: Globe, text: "International sustainable development conference with 200+ delegates" },
      { icon: Award, text: "Climate policy contributions adopted by Office of the Prime Minister" },
      { icon: TreePine, text: "Waste management system implementation and wetland restoration advocacy" },
      { icon: Building2, text: "Kampala flood risk mapping and urban planning training" },
      { icon: Leaf, text: "Early warning policy models aligned with IPCC governance" },
    ]
  },
]

export default function ServicesPage() {
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
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Comprehensive Solutions for Sustainable Development
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  We offer a wide range of services designed to bridge the gap between research and 
                  real-world implementation, driving positive change in communities across Uganda and beyond.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-left" delay={200}>
              <PlaceholderImage 
                label="Image: Team implementing sustainable development project"
                aspectRatio="video"
                variant="primary"
                iconSize="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((service, index) => (
              <ScrollReveal key={service.id} variant="fade-up" delay={index * 100}>
                <a 
                  href={`#${service.id}`}
                  className="group block"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className={`h-14 w-14 rounded-xl ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title.split(" ").slice(0, 2).join(" ")}
                      </h3>
                      <ArrowRight className="h-4 w-4 mx-auto mt-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {serviceCategories.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-card"} overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <ScrollReveal 
                variant={index % 2 === 0 ? "fade-right" : "fade-left"} 
                className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div>
                  <div className={`h-16 w-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <PlaceholderImage 
                    label={service.imageLabel}
                    aspectRatio="video"
                    variant={service.color === "bg-primary" ? "primary" : "secondary"}
                    iconSize="md"
                    className="mb-8"
                  />
                  
                  <Button asChild className={`${service.color} hover:opacity-90`}>
                    <Link href="/contact">
                      Inquire About This Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
              
              <ScrollReveal 
                variant={index % 2 === 0 ? "fade-left" : "fade-right"} 
                delay={200}
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">What We Offer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-4 group">
                          <div className={`h-10 w-10 rounded-lg ${service.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <item.icon className={`h-5 w-5 ${service.color === "bg-primary" ? "text-primary" : "text-secondary"}`} />
                          </div>
                          <span className="text-muted-foreground leading-relaxed pt-2">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,168,79,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-balance">
                Our Commitment to Excellence
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Evidence-Based", description: "All our solutions are grounded in rigorous research and data-driven insights." },
              { title: "Community-Centered", description: "We prioritize community participation and ownership in all our interventions." },
              { title: "Sustainable Impact", description: "Our approaches are designed for long-term sustainability and scalability." },
              { title: "Expert Team", description: "Our multidisciplinary team brings decades of combined experience." },
            ].map((item, index) => (
              <ScrollReveal key={index} variant="zoom-in" delay={index * 100}>
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                How We Work With You
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial discussion to understand your needs and objectives" },
              { step: "02", title: "Assessment", desc: "Thorough analysis of challenges and opportunities" },
              { step: "03", title: "Implementation", desc: "Evidence-based solutions tailored to your context" },
              { step: "04", title: "Evaluation", desc: "Measuring impact and ensuring sustainable outcomes" },
            ].map((item, index) => (
              <ScrollReveal key={item.step} variant="fade-up" delay={index * 150}>
                <div className="text-center relative">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal variant="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance max-w-2xl mx-auto">
              Ready to Partner With Us?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Contact us to discuss how our services can support your development goals 
              and create lasting positive impact.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
                <Link href="/contact">Get In Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8">
                <Link href="/publications">View Our Research</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
