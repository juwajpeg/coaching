"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "../../button"
import { Card, CardContent } from "../../card"
import { Leaf, Sparkles, Cloud, Calendar, Phone, Mail, MapPin, Star, Menu } from "lucide-react"
import Link from "next/link"
import { cn } from "../lib/utils"

// Reusable component for animated sections
function AnimatedSection({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      },
    )

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-20 px-6 transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", // Increased translate for softer entry
        className,
      )}
    >
      {children}
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-6xl mt-6 px-6 py-4 bg-gray-900/70 backdrop-blur-lg rounded-full shadow-xl shadow-green-900/60 transition-all duration-300 hover:shadow-green-900/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg shadow-primary-green">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white font-sans">The Rooted Clarity</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
              Services
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-lime-400 transition-colors font-medium">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-green-700 to-emerald-700 text-white hover:from-green-800 hover:to-emerald-800 transition-colors rounded-full shadow-lg shadow-primary-green">
              Book Session
            </Button>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden text-white">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="pt-28" />

      {/* Hero Section */}
      <AnimatedSection>
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold shadow-lg shadow-accent-green">
              Find Rooted Clarity. Live with Purpose.
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-sans">
            Become a grounded, purpose driven man
            <br />
            <span className="block mt-4 text-4xl md:text-5xl font-bold text-emerald-300">
              إن شاء الله
              <br />
              <span className="block italic text-emerald-300 text-sm md:text-base mt-1">God willing</span>
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-700 to-emerald-700 text-white hover:from-green-800 hover:to-emerald-800 transition-colors text-lg px-8 py-4 font-semibold rounded-full shadow-lg shadow-primary-green"
            >
              Begin Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-900 transition-colors text-lg px-8 py-4 bg-transparent font-semibold rounded-full shadow-lg shadow-gray-800/40"
            >
              Learn About Our Philosophy
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Three-Pillar Strip */}
      <div className="max-w-5xl mx-auto mt-8 mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900 border border-emerald-800 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-xl font-bold text-emerald-300 mb-2">Faith & Integrity</span>
            <span className="text-gray-300 text-base">Align actions with timeless principles</span>
          </div>
          <div className="bg-gray-900 border border-teal-700 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-xl font-bold text-teal-300 mb-2">Resilient Relationships</span>
            <span className="text-gray-300 text-base">Strong self, strong family, strong community</span>
          </div>
          <div className="bg-gray-900 border border-lime-600 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-xl font-bold text-lime-300 mb-2">Lifelong Growth</span>
            <span className="text-gray-300 text-base">Mind, body, and spirit developed in balance</span>
          </div>
        </div>
      </div>

      {/* Brotherhood Quote and Note */}
      <div className="max-w-3xl mx-auto mb-16 px-4 text-center">
        <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2 font-serif leading-relaxed">
          &quot;إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ&quot;
        </div>
        <div className="text-emerald-400 text-lg mb-4">(سورة الحجرات 49:10)</div>
        <blockquote className="italic text-xl md:text-2xl text-emerald-200 mb-4 font-serif">“Indeed, the believers are brothers, so make peace between your brothers.”<br /><span className="text-base text-emerald-400">(Qurʾān 49:10)</span></blockquote>
        <div className="text-gray-300 text-base md:text-lg mt-2">Everyone who values integrity and goodwill is welcome in this brotherhood.</div>
      </div>

      {/* Services Section */}
      <AnimatedSection id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-teal-600 to-lime-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg shadow-secondary-green">
                Pathways to Serenity
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">Nurturing Your Inner World</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              Tailored approaches to foster emotional balance, mental clarity, and personal fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gray-900 border border-emerald-800 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] rounded-2xl shadow-primary-green-card min-w-0">
              <CardContent className="p-5 text-center flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary-green">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 font-sans">Purposeful Living</h3>
                  <div className="text-emerald-300 text-sm font-semibold mb-1">Grounded Success</div>
                  <p className="text-gray-300 text-sm mb-0">1-on-1 coaching for married professionals to balance career, family, and purpose.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border border-teal-700 hover:border-teal-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] rounded-2xl shadow-secondary-green-card min-w-0">
              <CardContent className="p-5 text-center flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-r from-teal-600 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-secondary-green">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 font-sans">Identity & Transformation</h3>
                  <div className="text-teal-300 text-sm font-semibold mb-1">Discover Yourself</div>
                  <p className="text-gray-300 text-sm mb-0">Coaching & groups for young men facing challenges, addiction, or transitions.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border border-lime-600 hover:border-lime-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] rounded-2xl shadow-accent-green-card min-w-0">
              <CardContent className="p-5 text-center flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-accent-green">
                    <Cloud className="w-7 h-7 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 font-sans">Accountability Circles</h3>
                  <div className="text-lime-400 text-sm font-semibold mb-1">Community-Driven Change</div>
                  <p className="text-gray-300 text-sm mb-0">Group coaching and support circles for lasting, God-centric transformation.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section - Rewritten for elegance and flow */}
      <AnimatedSection id="about" className="relative overflow-hidden">
        {/* Large, soft glowing background circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-900/30 to-emerald-900/30 blur-3xl opacity-50 animate-pulse-slow"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold shadow-lg shadow-accent-green">
                Our Guiding Light
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">Meet Mohsan Attique: Your Guide to Purposeful Transformation</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed font-medium">
              With almost two decades of experience, Mohsan Attique specializes in guiding men and their families through life’s challenges, focusing on God-centered high-performance coaching. His work blends Islamic values with proven psychological techniques to help men find clarity, purpose, and balance in their lives.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center shadow-md shadow-primary-green">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium">God-centered High-Performance Coaching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-lime-500 rounded-full flex items-center justify-center shadow-md shadow-secondary-green">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium">Islamic Values & Psychological Expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full flex items-center justify-center shadow-md shadow-accent-green">
                  <Star className="w-4 h-4 text-gray-900" />
                </div>
                <span className="text-gray-300 font-medium">Clarity, Purpose, and Balance</span>
              </div>
            </div>
          </div>
          {/* Dr. Elara Vance Card - slightly larger and more prominent */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl shadow-primary-green-card transform hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 mx-auto bg-gradient-to-r from-green-700 to-emerald-700 rounded-full mb-6 flex items-center justify-center shadow-lg shadow-primary-green">
              <div className="w-52 h-52 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-mono">
                  MA
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2 font-sans">Mohsan Attique</h3>
              <p className="text-gray-300 mb-4 font-medium">Guide to Purposeful Transformation</p>
              <div className="bg-gradient-to-r from-teal-600 to-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block shadow-lg shadow-secondary-green">
                Nearly 20 Years Empowering Men & Families
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold shadow-lg shadow-accent-green">
                Connect with Us
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">Your Journey Starts Here</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              Ready to cultivate inner peace and personal growth? Reach out today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border border-gray-800 shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-3xl shadow-primary-green-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-sans">Reach Out</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center shadow-lg shadow-primary-green">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Phone</p>
                      <p className="text-gray-300 font-mono">(555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-teal-600 to-lime-500 rounded-full flex items-center justify-center shadow-lg shadow-secondary-green">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Email</p>
                      <p className="text-gray-300 font-mono">hello@mindflow.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-accent-green">
                      <MapPin className="w-7 h-7 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Location</p>
                      <p className="text-gray-300 leading-relaxed">
                        456 Serenity Lane, Suite 101
                        <br />
                        Harmony City, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border border-gray-800 shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-3xl shadow-secondary-green-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-sans">Availability</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="font-semibold text-white">Monday - Friday</span>
                    <span className="text-gray-300 font-mono">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="font-semibold text-white">Saturday</span>
                    <span className="text-gray-300 font-mono">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-white">Sunday</span>
                    <span className="text-gray-300">Closed</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-green-700 to-emerald-700 text-white hover:from-green-800 hover:to-emerald-800 transition-colors font-semibold rounded-full shadow-lg shadow-primary-green">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 mx-auto mb-6 shadow-lg shadow-primary-green">
            <Leaf className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-white font-sans">The Rooted Clarity</span>
          <p className="text-gray-300 mb-4 font-medium">
            Guiding you towards inner peace, clarity, and a life of profound well-being.
          </p>
          <p className="text-gray-400 text-sm">© 2024 The Rooted Clarity. All rights reserved. | Cultivating Serenity</p>
        </div>
      </footer>
    </div>
  )
}
