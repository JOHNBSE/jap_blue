import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Publications", href: "/publications" },
  { name: "Partners", href: "/partners" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Research & Development", href: "/services#research" },
  { name: "Consultancy Services", href: "/services#consultancy" },
  { name: "Training & Skilling", href: "/services#training" },
  { name: "Policy Advocacy", href: "/services#policy" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">JAP</span>
              </div>
              <span className="font-semibold text-background leading-tight">
                JAP Transformative<br />Action Research Center
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Bridging the gap between research, knowledge, skills, and real-world impact for inclusive and sustainable development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-secondary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-background/70 hover:text-secondary transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Opera House, Bukoto-Kisaasi Road,<br />Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <div className="text-background/70 text-sm">
                  <a href="tel:+256752039346" className="hover:text-secondary transition-colors block">+256 752 039 346</a>
                  <a href="tel:+256782311314" className="hover:text-secondary transition-colors block">+256 782 311 314</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="mailto:transformativeactionresearch@gmail.com" className="text-background/70 hover:text-secondary transition-colors text-sm break-all">
                  transformativeactionresearch@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} JAP Transformative Action Research Center Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/50 hover:text-secondary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/50 hover:text-secondary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
