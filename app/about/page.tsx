"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Target, 
  Heart, 
  Lightbulb, 
  Scale, 
  UsersRound,
  ArrowRight,
  CheckCircle2,
  Globe,
  Handshake
} from "lucide-react"

const coreValues = [
  { 
    icon: Target, 
    title: "Professionalism", 
    description: "We maintain the highest standards of excellence in all our undertakings, ensuring quality and reliability in every project we deliver.",
    color: "bg-primary/10 text-primary"
  },
  { 
    icon: Heart, 
    title: "Integrity", 
    description: "We uphold honesty, transparency, and ethical conduct in all our interactions with partners, communities, and stakeholders.",
    color: "bg-secondary/10 text-secondary"
  },
  { 
    icon: Lightbulb, 
    title: "Innovation", 
    description: "We continuously seek creative and evidence-based solutions to address complex societal, economic, and environmental challenges.",
    color: "bg-primary/10 text-primary"
  },
  { 
    icon: Scale, 
    title: "Equity", 
    description: "We are committed to fair and inclusive practices that ensure all voices are heard and all people benefit from development.",
    color: "bg-secondary/10 text-secondary"
  },
  { 
    icon: UsersRound, 
    title: "Collaboration", 
    description: "We believe in the power of partnerships and collective action to achieve sustainable and transformative outcomes.",
    color: "bg-primary/10 text-primary"
  },
]

const objectives = [
  {
    title: "Research-informed Innovation",
    description: "Driving innovation and commercialization through rigorous research methodologies and evidence-based approaches."
  },
  {
    title: "Development through Training",
    description: "Empowering individuals with practical skills, knowledge, and entrepreneurial capabilities for sustainable livelihoods."
  },
  {
    title: "Expert Consultancy",
    description: "Providing specialized expertise in proposal development, project design, implementation, and evaluation."
  },
  {
    title: "Inclusive Community Engagement",
    description: "Fostering participatory approaches that ensure communities are at the center of sustainable development solutions."
  },
  {
    title: "Peace Policy and Advocacy",
    description: "Contributing to peace-building efforts and advocating for policies that promote social cohesion and stability."
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal variant="fade-right">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Bridging Research, Knowledge & Skills for Real-World Impact
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  JAP Transformative Action Research Center Ltd is a multidisciplinary team of researchers 
                  with real-world experience dedicated to catalyzing inclusive and sustainable development 
                  across communities, industries, and nations.
                </p>
              </ScrollReveal>
            </div>
            
            <ScrollReveal variant="fade-left" delay={200}>
              <PlaceholderImage 
                label="Image: JAP Research Center team at headquarters in Kampala, Uganda"
                aspectRatio="video"
                variant="primary"
                iconSize="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal variant="fade-right">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-right" delay={100}>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="leading-relaxed">
                    Based in Opera House, Bukoto-Kisaasi Road, Kampala, Uganda, JAP Transformative 
                    Action Research Center Ltd operates at the intersection of science, appropriate 
                    skills, entrepreneurship, and policy.
                  </p>
                  <p className="leading-relaxed mt-4">
                    We empower individuals, institutions, and communities through:
                  </p>
                </div>
              </ScrollReveal>
              
              <ul className="mt-4 space-y-3">
                {[
                  { title: "Transformative Knowledge", desc: "Research-driven insights that inform decision-making and drive change." },
                  { title: "Practical Solutions", desc: "Evidence-based interventions that address real-world challenges." },
                  { title: "Strategic Partnerships", desc: "Collaborative approaches that amplify impact and sustainability." },
                ].map((item, index) => (
                  <ScrollReveal key={item.title} variant="fade-right" delay={200 + index * 100}>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <span><strong className="text-foreground">{item.title}</strong> - {item.desc}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
              
              <ScrollReveal variant="fade-up" delay={500}>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <PlaceholderImage 
                    label="Image: Field research activities"
                    aspectRatio="square"
                    variant="secondary"
                    iconSize="sm"
                  />
                  <PlaceholderImage 
                    label="Image: Community training session"
                    aspectRatio="square"
                    variant="primary"
                    iconSize="sm"
                  />
                </div>
              </ScrollReveal>
            </div>
            
            <div className="space-y-8">
              {/* Vision Card */}
              <ScrollReveal variant="fade-left" delay={100}>
                <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      A world where research, knowledge, and skills drive innovation, communities co-create 
                      sustainable solutions, and inclusive development shapes resilient futures.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              {/* Mission Card */}
              <ScrollReveal variant="fade-left" delay={200}>
                <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Handshake className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To harness the power of research, knowledge, skills, and collaboration to develop 
                      and implement scalable innovative solutions addressing pressing societal, economic, 
                      and environmental challenges.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-left" delay={300}>
                <PlaceholderImage 
                  label="Image: Team presenting research findings at international conference"
                  aspectRatio="video"
                  variant="secondary"
                  iconSize="md"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Core Values That Guide Us
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                Our values form the foundation of everything we do, guiding our interactions 
                with partners, communities, and stakeholders.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <ScrollReveal 
                key={value.title} 
                variant="fade-up" 
                delay={index * 100}
              >
                <Card 
                  className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${index === 4 ? "lg:col-start-2" : ""}`}
                >
                  <CardContent className="p-8">
                    <div className={`h-14 w-14 rounded-xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,168,79,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-balance">
                Our Core Objectives
              </h2>
              <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto">
                Our strategic objectives guide our work and ensure we deliver meaningful, 
                lasting impact in everything we do.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <ScrollReveal 
                key={objective.title} 
                variant="zoom-in" 
                delay={index * 100}
              >
                <div 
                  className={`bg-primary-foreground/10 rounded-xl p-8 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1 ${
                    index === 4 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{objective.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{objective.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / History Section */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Building Impact Over Time
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2018", title: "Foundation", desc: "JAP Transformative Action Research Center was established in Kampala" },
              { year: "2020", title: "First Major Project", desc: "Launched climate-smart agriculture research initiative" },
              { year: "2024", title: "Growing Impact", desc: "Reached 50,000+ beneficiaries across Uganda" },
            ].map((item, index) => (
              <ScrollReveal key={item.year} variant="fade-up" delay={index * 150}>
                <div className="text-center">
                  <div className="relative mb-6">
                    <PlaceholderImage 
                      label={`Image: ${item.title} milestone`}
                      aspectRatio="video"
                      variant={index % 2 === 0 ? "primary" : "secondary"}
                      iconSize="md"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold">
                      {item.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mt-6">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">{item.desc}</p>
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
              Want to Learn More About Our Work?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Explore our services, meet our partners, or get in touch to discuss 
              how we can collaborate for sustainable development.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
                <Link href="/services">Explore Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
