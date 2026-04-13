"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Award,
  Users,
  BookOpen,
  Building2,
  Leaf,
  GraduationCap,
  Globe,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

const stats = [
  { value: 5000, suffix: "+", label: "Entrepreneurs Trained", icon: GraduationCap },
  { value: 50000, suffix: "+", label: "Beneficiaries Reached", icon: Users },
  { value: 80, suffix: "%", label: "Employment Success Rate", icon: Award },
  { value: 200, suffix: "+", label: "Conference Delegates", icon: Globe },
  { value: 1000, suffix: "+", label: "Rural Community Members Benefited", icon: Leaf },
  { value: 15, suffix: "+", label: "Major Projects Completed", icon: Building2 },
]

const achievementCategories = [
  {
    title: "Research Impact",
    icon: BookOpen,
    color: "bg-primary",
    imageLabel: "Image: Research team publishing findings",
    achievements: [
      "Published research in international peer-reviewed journals",
      "Climate-smart agriculture research contributing to food security",
      "Urban resilience studies informing city planning policies",
      "Environmental sustainability innovations commercialized",
      "Jelly-from-milk technology benefiting 1000+ rural people",
      "Multiple research grants secured for scaling initiatives"
    ]
  },
  {
    title: "Community Impact",
    icon: Users,
    color: "bg-secondary",
    imageLabel: "Image: Community members in training program",
    achievements: [
      "Urban risk management projects reaching 50,000+ residents",
      "Climate resilience demonstration sites established",
      "Vocational training programs with 80% employment outcomes",
      "Women empowerment through bakery training programs",
      "Youth employment initiatives creating sustainable livelihoods",
      "Community-based adaptation strategies implemented"
    ]
  },
  {
    title: "Policy Influence",
    icon: Globe,
    color: "bg-primary",
    imageLabel: "Image: Policy briefing with government officials",
    achievements: [
      "Climate policy contributions adopted by Office of the Prime Minister",
      "Kampala flood risk mapping informing urban planning",
      "Early warning policy models aligned with IPCC governance",
      "Wetland restoration advocacy influencing environmental policy",
      "Waste management system implementation",
      "Climate adaptation integration into government planning"
    ]
  },
  {
    title: "Entrepreneurship Support",
    icon: Award,
    color: "bg-secondary",
    imageLabel: "Image: Entrepreneurs receiving business training",
    achievements: [
      "5000+ entrepreneurs trained across various sectors",
      "Startup funding mentorship and incubation support",
      "Industry partnerships facilitating job placement",
      "Skills gap assessments informing training curricula",
      "Labor market research guiding employment strategies",
      "Sustainable construction curriculum development"
    ]
  },
  {
    title: "Training Outcomes",
    icon: GraduationCap,
    color: "bg-primary",
    imageLabel: "Image: Vocational training graduation ceremony",
    achievements: [
      "Vocational training programs achieving 80% employment rate",
      "Sustainable construction skills training",
      "Bakery training empowering 500+ women",
      "Youth employment initiatives across Uganda",
      "Professional development workshops for local leaders",
      "Urban planning training for government officials"
    ]
  },
]

const timeline = [
  {
    year: "2024",
    title: "International Conference",
    description: "Hosted sustainable development conference with 200+ delegates from across Africa.",
    imageLabel: "Photo: Conference attendees"
  },
  {
    year: "2023",
    title: "Policy Adoption",
    description: "Climate policy contributions adopted by the Office of the Prime Minister.",
    imageLabel: "Photo: Policy document signing"
  },
  {
    year: "2023",
    title: "5000 Entrepreneurs",
    description: "Reached milestone of training 5000+ entrepreneurs across Uganda.",
    imageLabel: "Photo: Entrepreneur graduation"
  },
  {
    year: "2022",
    title: "Urban Resilience Project",
    description: "Launched urban risk management projects benefiting 50,000+ Kampala residents.",
    imageLabel: "Photo: Urban resilience workshop"
  },
  {
    year: "2022",
    title: "Innovation Commercialization",
    description: "Successfully commercialized jelly-from-milk technology benefiting 1000+ rural people.",
    imageLabel: "Photo: Innovation showcase"
  },
  {
    year: "2021",
    title: "Research Partnerships",
    description: "Established partnerships with leading universities and international organizations.",
    imageLabel: "Photo: Partnership signing ceremony"
  },
]

export default function AchievementsPage() {
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
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Impact</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Achievements & Impact
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Our work has touched thousands of lives across Uganda and beyond, creating lasting 
                  change in communities and driving sustainable development through research, training, 
                  and policy advocacy.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-left" delay={200}>
              <PlaceholderImage 
                label="Image: Team celebrating milestone achievement"
                aspectRatio="video"
                variant="secondary"
                iconSize="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,168,79,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} variant="zoom-in" delay={index * 100}>
                <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-secondary">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Achievements</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Impact Across Key Areas
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                We have made significant contributions across multiple sectors, from research and 
                policy to community development and entrepreneurship.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="space-y-12">
            {achievementCategories.map((category, index) => (
              <ScrollReveal key={category.title} variant={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-0">
                    <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                      {/* Image Section */}
                      <div className={`lg:w-1/3 ${category.color} p-12 flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20">
                          <PlaceholderImage 
                            label={category.imageLabel}
                            aspectRatio="square"
                            variant="muted"
                            iconSize="lg"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="text-center relative z-10">
                          <category.icon className="h-20 w-20 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        </div>
                      </div>
                      
                      {/* Achievements List */}
                      <div className="lg:w-2/3 p-8 lg:p-12">
                        <ul className="space-y-4">
                          {category.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-4 group/item">
                              <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-transform group-hover/item:scale-110 ${category.color === "bg-primary" ? "text-primary" : "text-secondary"}`} />
                              <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Milestones Timeline
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <ScrollReveal 
                  key={index} 
                  variant={index % 2 === 0 ? "fade-right" : "fade-left"} 
                  delay={index * 100}
                >
                  <div 
                    className={`relative flex flex-col lg:flex-row gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background" />
                    
                    {/* Content */}
                    <div className={`lg:w-1/2 pl-12 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                      <span className="inline-block text-sm font-bold text-primary mb-2 px-3 py-1 bg-primary/10 rounded-full">{item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <PlaceholderImage 
                        label={item.imageLabel}
                        aspectRatio="video"
                        variant={index % 2 === 0 ? "primary" : "secondary"}
                        iconSize="sm"
                        className="max-w-md"
                      />
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(47,168,79,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <ScrollReveal variant="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold text-balance max-w-2xl mx-auto">
              Be Part of Our Impact Story
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto">
              Partner with us to create lasting change in communities and drive 
              sustainable development across Uganda and beyond.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                <Link href="/contact">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
