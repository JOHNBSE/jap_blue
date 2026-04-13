"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PlaceholderImage } from "@/components/placeholder-image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { 
  FileText,
  Download,
  ExternalLink,
  Calendar,
  User,
  BookOpen,
  ArrowRight,
  Filter
} from "lucide-react"

const publications = [
  {
    title: "Climate-Smart Agriculture Practices and Community Resilience in Rural Uganda",
    authors: ["Dr. Nagasha Judith Irene", "Dr. Musinguzi Simon Peter"],
    journal: "Journal of Environmental Sustainability",
    year: 2024,
    type: "Research Paper",
    abstract: "This study examines the implementation of climate-smart agricultural practices and their impact on community resilience in rural Uganda. Findings reveal significant improvements in food security and adaptive capacity among participating communities.",
    doi: "10.xxxx/jes.2024.001"
  },
  {
    title: "Urban Flood Risk Management: A Case Study of Kampala Metropolitan Area",
    authors: ["Dr. Anne Nakagiri", "Dr. Nagasha Judith Irene"],
    journal: "Urban Resilience and Planning Quarterly",
    year: 2024,
    type: "Research Paper",
    abstract: "An analysis of flood risk management strategies in Kampala, proposing integrated approaches that combine infrastructure improvements with community-based early warning systems.",
    doi: "10.xxxx/urpq.2024.015"
  },
  {
    title: "Vocational Training and Youth Employment Outcomes in East Africa",
    authors: ["Dr. Musinguzi Simon Peter"],
    journal: "African Journal of Education and Development",
    year: 2023,
    type: "Research Paper",
    abstract: "A longitudinal study tracking employment outcomes of vocational training participants, demonstrating an 80% success rate in sustainable employment placement.",
    doi: "10.xxxx/ajed.2023.045"
  },
  {
    title: "Gender Mainstreaming in Climate Adaptation Programs",
    authors: ["Dr. Nagasha Judith Irene"],
    journal: "Gender and Development Studies",
    year: 2023,
    type: "Research Paper",
    abstract: "This paper explores the integration of gender perspectives in climate adaptation programming, highlighting best practices and lessons learned from Uganda.",
    doi: "10.xxxx/gds.2023.088"
  },
  {
    title: "Sustainable Urban Planning: Early Warning Systems for Climate Hazards",
    authors: ["Dr. Anne Nakagiri", "Dr. Musinguzi Simon Peter"],
    journal: "Climate Policy and Governance",
    year: 2023,
    type: "Policy Brief",
    abstract: "A policy brief presenting recommendations for integrating early warning systems into urban planning frameworks, aligned with IPCC governance guidelines.",
    doi: "10.xxxx/cpg.2023.112"
  },
  {
    title: "Entrepreneurship Development and Women Empowerment: Bakery Training Initiative",
    authors: ["Dr. Musinguzi Simon Peter", "Dr. Nagasha Judith Irene"],
    journal: "Journal of Entrepreneurship in Emerging Economies",
    year: 2022,
    type: "Case Study",
    abstract: "Documenting the success of a bakery training initiative that empowered over 500 women with entrepreneurial skills and sustainable income opportunities.",
    doi: "10.xxxx/jeee.2022.078"
  },
  {
    title: "Environmental Sustainability Innovations: Jelly-from-Milk Commercialization",
    authors: ["Dr. Nagasha Judith Irene"],
    journal: "African Journal of Agricultural Innovation",
    year: 2022,
    type: "Innovation Report",
    abstract: "A comprehensive report on the commercialization of jelly-from-milk technology, benefiting over 1000 rural community members through sustainable income generation.",
    doi: "10.xxxx/ajai.2022.034"
  },
  {
    title: "Wetland Restoration and Urban Ecosystem Services in Kampala",
    authors: ["Dr. Anne Nakagiri"],
    journal: "Ecosystem Services and Management",
    year: 2022,
    type: "Research Paper",
    abstract: "An assessment of wetland restoration efforts and their contribution to urban ecosystem services, with implications for policy and urban planning.",
    doi: "10.xxxx/esm.2022.156"
  },
]

const categories = [
  { name: "All", count: publications.length },
  { name: "Research Paper", count: publications.filter(p => p.type === "Research Paper").length },
  { name: "Policy Brief", count: publications.filter(p => p.type === "Policy Brief").length },
  { name: "Case Study", count: publications.filter(p => p.type === "Case Study").length },
  { name: "Innovation Report", count: publications.filter(p => p.type === "Innovation Report").length },
]

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredPublications = activeCategory === "All" 
    ? publications 
    : publications.filter(p => p.type === activeCategory)

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
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Research</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Our Publications
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Explore our research publications in international peer-reviewed journals, covering 
                  climate resilience, urban sustainability, vocational training, and more.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-left" delay={200}>
              <PlaceholderImage 
                label="Image: Research publications and academic journals"
                aspectRatio="video"
                variant="primary"
                iconSize="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by type:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 75}>
                <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Type indicator */}
                      <div className="lg:w-1 bg-primary flex-shrink-0 group-hover:bg-secondary transition-colors" />
                      
                      <div className="p-8 flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                            {publication.type}
                          </span>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {publication.year}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                          {publication.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          <User className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {publication.authors.join(", ")}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-secondary font-medium">
                            {publication.journal}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {publication.abstract}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                          <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/5 group-hover:scale-105 transition-transform">
                            <FileText className="h-4 w-4 mr-2" />
                            View Abstract
                          </Button>
                          <Button variant="outline" size="sm" className="text-secondary border-secondary hover:bg-secondary/5 group-hover:scale-105 transition-transform">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            DOI: {publication.doi}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-20 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Research Impact</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "39+", label: "Published Papers" },
              { value: "8", label: "Active Researchers" },
              { value: "12+", label: "International Journals" },
              { value: "500+", label: "Citations" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} variant="zoom-in" delay={index * 100}>
                <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
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
              Interested in Our Research?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Contact us to learn more about our research work, request full publications, 
              or discuss collaboration opportunities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
                <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8">
                <Link href="/partners">Meet Our Researchers</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
