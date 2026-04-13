"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  GraduationCap, 
  Leaf, 
  TreePine, 
  Building2, 
  Users, 
  Wheat,
  ArrowRight,
  BookOpen,
  Briefcase,
  FileText,
  Handshake,
  Target,
  Lightbulb,
  Scale,
  Heart,
  UsersRound
} from "lucide-react"

const areasOfFocus = [
  { icon: GraduationCap, title: "Vocational Training", description: "Empowering youth with practical skills for employment" },
  { icon: Leaf, title: "Climate Resilience", description: "Building adaptive capacity in communities" },
  { icon: TreePine, title: "Environmental Sustainability", description: "Promoting eco-friendly practices and solutions" },
  { icon: Building2, title: "Urban Resilience", description: "Creating sustainable urban development strategies" },
  { icon: Users, title: "Gender Mainstreaming", description: "Ensuring inclusive development for all" },
  { icon: Wheat, title: "Agriculture", description: "Advancing climate-smart agricultural practices" },
]

const coreValues = [
  { icon: Target, title: "Professionalism", description: "Excellence in all our undertakings" },
  { icon: Heart, title: "Integrity", description: "Honesty and ethical conduct" },
  { icon: Lightbulb, title: "Innovation", description: "Creative solutions for complex challenges" },
  { icon: Scale, title: "Equity", description: "Fair and inclusive practices" },
  { icon: UsersRound, title: "Collaboration", description: "Partnership-driven approaches" },
]

const services = [
  { icon: BookOpen, title: "Research & Development", description: "Publications, climate-smart agriculture, and innovation commercialization", href: "/services#research" },
  { icon: Briefcase, title: "Consultancy Services", description: "Climate resilience advisory, environmental assessments, and project implementation", href: "/services#consultancy" },
  { icon: GraduationCap, title: "Training & Skilling", description: "Entrepreneurship training, startup mentorship, and skills development programs", href: "/services#training" },
  { icon: FileText, title: "Policy Advocacy", description: "Climate policy contributions, partnerships, and sustainable development conferences", href: "/services#policy" },
]

const stats = [
  { value: 5000, suffix: "+", label: "Entrepreneurs Trained" },
  { value: 50000, suffix: "+", label: "Beneficiaries Reached" },
  { value: 80, suffix: "%", label: "Employment Success Rate" },
  { value: 200, suffix: "+", label: "Conference Delegates" },
]

const partners = [
  { name: "Dr. Nagasha Judith Irene", role: "Lead Researcher" },
  { name: "Dr. Musinguzi Simon Peter", role: "Senior Research Fellow" },
  { name: "Dr. Anne Nakagiri", role: "Research Associate" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal variant="fade-down" duration={800}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  Research for Real-World Impact
                </div>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-up" delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Bridging Research, Knowledge & Skills for{" "}
                  <span className="text-primary">Sustainable Development</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-up" delay={200}>
                <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-pretty">
                  JAP Transformative Action Research Center operates at the intersection of science, 
                  entrepreneurship, and policy to catalyze inclusive development across communities, 
                  industries, and nations.
                </p>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-up" delay={300}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    <Link href="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8">
                    <Link href="/services">Our Services</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal variant="zoom-in" delay={400} className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl animate-pulse-glow" />
                <PlaceholderImage 
                  label="Hero Image: Team conducting field research in Uganda" 
                  aspectRatio="square"
                  variant="primary"
                  iconSize="lg"
                  className="relative z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal variant="fade-right">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                  A Multidisciplinary Team Dedicated to Real-World Impact
                </h2>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-right" delay={100}>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Based in Kampala, Uganda, JAP Transformative Action Research Center Ltd is a 
                  multidisciplinary team of researchers with real-world experience. We empower 
                  individuals, institutions, and communities through transformative knowledge, 
                  practical solutions, and strategic partnerships.
                </p>
              </ScrollReveal>
              
              <div className="mt-8 space-y-4">
                <ScrollReveal variant="fade-right" delay={200}>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Our Vision</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        A world where research and skills drive innovation, communities co-create 
                        sustainable solutions, and inclusive development shapes resilient futures.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal variant="fade-right" delay={300}>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Handshake className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Our Mission</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        To harness the power of research, knowledge, skills, and collaboration to develop 
                        scalable innovative solutions addressing pressing societal challenges.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal variant="fade-up" delay={400}>
                <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
                  <Link href="/about">Read More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </ScrollReveal>
            </div>
            
            <ScrollReveal variant="fade-left" delay={200}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <PlaceholderImage 
                      label="Image: Community engagement workshop" 
                      aspectRatio="video"
                      variant="secondary"
                    />
                  </div>
                  {coreValues.slice(0, 4).map((value, index) => (
                    <Card key={value.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <value.icon className="h-8 w-8 text-primary mb-4" />
                        <h3 className="font-semibold text-foreground">{value.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Comprehensive Services for Sustainable Development
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                We offer a range of services designed to bridge the gap between research and 
                real-world implementation, driving positive change in communities.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} variant="fade-up" delay={index * 100}>
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer group hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal variant="fade-up" delay={500}>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,168,79,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Impact</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-balance">
                Making a Measurable Difference
              </h2>
              <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto">
                Our work has touched thousands of lives across Uganda and beyond, creating lasting 
                change in communities and driving sustainable development.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} variant="zoom-in" delay={index * 150}>
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold text-secondary">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-4 text-primary-foreground/80">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Areas of Focus</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Key Sectors Driving Our Research
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                We focus on sectors that have the greatest potential for transformative impact 
                on communities and sustainable development.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfFocus.map((area, index) => (
              <ScrollReveal key={area.title} variant="fade-up" delay={index * 100}>
                <Card className="hover:shadow-md transition-all duration-300 hover:border-secondary/50 hover:-translate-y-1 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                      <area.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{area.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{area.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Meet Our Research Partners
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                Our team comprises distinguished researchers and experts committed to driving 
                transformative change through evidence-based solutions.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner.name} variant="fade-up" delay={index * 150}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="relative mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <PlaceholderImage 
                        label={`Photo: ${partner.name}`}
                        aspectRatio="square"
                        variant="primary"
                        iconSize="lg"
                        className="w-32 h-32 mx-auto rounded-full relative"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{partner.name}</h3>
                    <p className="text-sm text-primary mt-1">{partner.role}</p>
                    <Button asChild variant="link" className="mt-4 text-secondary">
                      <Link href="/partners">View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal variant="fade-up" delay={500}>
            <div className="text-center mt-12">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/partners">View All Partners <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Research</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                  Latest Publications
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  Explore our research publications in international journals covering climate resilience, 
                  urban sustainability, and more.
                </p>
              </div>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link href="/publications">View All Publications <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Climate-Smart Agriculture Practices and Community Resilience in Uganda", year: "2024" },
              { title: "Urban Flood Risk Management: A Kampala Case Study", year: "2024" },
              { title: "Vocational Training Impact on Youth Employment Outcomes", year: "2023" },
            ].map((pub, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 150}>
                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-6">
                    <PlaceholderImage 
                      label={`Publication Cover: ${pub.title.slice(0, 30)}...`}
                      aspectRatio="video"
                      variant="primary"
                      iconSize="sm"
                      className="mb-4"
                    />
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Research Paper</span>
                      <span className="text-xs text-muted-foreground">{pub.year}</span>
                    </div>
                    <h3 className="font-semibold text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      A comprehensive study exploring innovative approaches to sustainable development 
                      and community resilience.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(47,168,79,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <ScrollReveal variant="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance max-w-2xl mx-auto">
              Ready to Partner With Us for Sustainable Development?
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto">
              Join us in our mission to harness research and collaboration for transformative impact 
              in communities across Uganda and beyond.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                <Link href="/contact">Get In Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mt-2">Stay updated with our latest research and initiatives.</p>
              </div>
              <form className="flex gap-3 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 md:w-80 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6">
                  Subscribe
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
