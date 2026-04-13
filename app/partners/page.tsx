"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight,
  ExternalLink,
  BookOpen,
  Award,
  Globe
} from "lucide-react"

const partners = [
  {
    name: "Dr. Nagasha Judith Irene",
    role: "Lead Researcher",
    designation: "PhD in Environmental Science",
    bio: "Dr. Nagasha brings over 15 years of experience in environmental research and climate resilience. Her work focuses on community-based adaptation strategies and sustainable development practices across East Africa.",
    interests: [
      "Climate Change Adaptation",
      "Environmental Sustainability",
      "Community Resilience",
      "Gender & Development"
    ],
    publications: 12,
    projects: 8
  },
  {
    name: "Dr. Musinguzi Simon Peter",
    role: "Senior Research Fellow",
    designation: "PhD in Development Studies",
    bio: "Dr. Musinguzi specializes in vocational training, youth employment, and entrepreneurship development. He has led numerous initiatives that have trained thousands of entrepreneurs across Uganda.",
    interests: [
      "Vocational Training",
      "Youth Employment",
      "Entrepreneurship Development",
      "Skills Gap Analysis"
    ],
    publications: 18,
    projects: 15
  },
  {
    name: "Dr. Anne Nakagiri",
    role: "Research Associate",
    designation: "PhD in Urban Planning",
    bio: "Dr. Nakagiri is an expert in urban resilience and sustainable city planning. Her research has contributed to policy frameworks for flood risk management and urban development in Kampala.",
    interests: [
      "Urban Resilience",
      "Flood Risk Management",
      "Sustainable Urban Planning",
      "Climate Policy"
    ],
    publications: 9,
    projects: 6
  },
]

const collaboratingInstitutions = [
  "Makerere University",
  "Uganda Martyrs University",
  "Kyambogo University",
  "Ministry of Water and Environment",
  "Office of the Prime Minister",
  "UN-Habitat",
  "World Bank",
  "African Development Bank",
]

export default function PartnersPage() {
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
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Team</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Meet Our Research Partners
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Our team comprises distinguished researchers and experts committed to driving 
                  transformative change through evidence-based solutions and collaborative approaches.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-left" delay={200}>
              <PlaceholderImage 
                label="Image: Research team collaborating on project"
                aspectRatio="video"
                variant="primary"
                iconSize="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner.name} variant="fade-up" delay={index * 150}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <CardContent className="p-0">
                    {/* Photo placeholder */}
                    <div className="relative overflow-hidden">
                      <PlaceholderImage 
                        label={`Professional photo: ${partner.name}`}
                        aspectRatio="portrait"
                        variant={index % 2 === 0 ? "primary" : "secondary"}
                        iconSize="lg"
                        className="rounded-none group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{partner.name}</h3>
                      <p className="text-primary font-medium mt-1">{partner.role}</p>
                      <p className="text-sm text-muted-foreground mt-1">{partner.designation}</p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                        {partner.bio}
                      </p>
                      
                      {/* Research Interests */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Research Interests</h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.interests.map((interest) => (
                            <span 
                              key={interest}
                              className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="flex gap-6 mt-6 pt-6 border-t border-border">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-secondary" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">{partner.publications}</strong> Publications
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-secondary" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">{partner.projects}</strong> Projects
                          </span>
                        </div>
                      </div>
                      
                      <Button variant="link" className="p-0 h-auto mt-4 text-primary group-hover:underline">
                        View Publications <ExternalLink className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborating Institutions */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Network</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Collaborating Institutions
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                We work with leading academic institutions, government agencies, and international 
                organizations to amplify our impact and reach.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collaboratingInstitutions.map((institution, index) => (
              <ScrollReveal key={institution} variant="zoom-in" delay={index * 75}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 group">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-40">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors">{institution}</span>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fade-right">
              <PlaceholderImage 
                label="Image: Researchers working together in field"
                aspectRatio="video"
                variant="secondary"
                iconSize="lg"
              />
            </ScrollReveal>
            
            <ScrollReveal variant="fade-left" delay={200}>
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Join Us</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
                  Become a Research Partner
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Are you a researcher passionate about sustainable development and community impact? 
                  We are always looking for talented individuals to join our team and contribute to 
                  our mission of transformative change.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Collaborative research opportunities",
                    "Access to field research and community networks",
                    "Publication support and mentorship",
                    "International conference participation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,168,79,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <ScrollReveal variant="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold text-balance max-w-2xl mx-auto">
              Interested in Collaborating With Us?
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto">
              We are always looking for new partnerships and collaborations to expand our 
              impact and drive sustainable development.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                <Link href="/contact">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8">
                <Link href="/publications">View Publications</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
