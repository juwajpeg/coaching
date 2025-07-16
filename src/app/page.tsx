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
            <span className="text-2xl font-bold text-white font-sans">MindFlow</span>
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
              Embrace Your Inner Calm
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-sans">
            Flow Through Life&rsquo;s Challenges,
            <br />
            <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
              Discover Your True Self
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            Holistic therapy and mindful guidance to cultivate resilience, clarity, and profound well-being.
          </p>
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

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border border-gray-800 hover:border-emerald-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] rounded-3xl shadow-primary-green-card">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-green">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-sans">Individual Holistic Therapy</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Personalized sessions to explore your inner landscape, heal past wounds, and cultivate a resilient and
                  joyful spirit.
                </p>
                <Button className="bg-gradient-to-r from-green-700 to-emerald-700 text-white hover:from-green-800 hover:to-emerald-800 transition-colors font-semibold rounded-full shadow-lg shadow-primary-green">
                  Discover Inner Peace
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border border-gray-800 hover:border-teal-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] rounded-3xl shadow-secondary-green-card">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary-green">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-sans">Mindfulness & Stress Reduction</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Learn practical techniques to manage stress, enhance focus, and bring a sense of calm to your daily
                  life.
                </p>
                <Button className="bg-gradient-to-r from-teal-600 to-lime-500 text-white hover:from-teal-700 hover:to-lime-600 transition-colors font-semibold rounded-full shadow-lg shadow-secondary-green">
                  Find Your Calm
                </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">Meet Dr. Elara Vance</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed font-medium">
              With a decade of experience in holistic psychology, Dr. Vance offers a nurturing space for profound
              self-discovery and lasting transformation. Her approach is rooted in compassion and evidence-based
              practices.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-emerald-700 rounded-full flex items-center justify-center shadow-md shadow-primary-green">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium">Licensed Holistic Psychologist</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-lime-500 rounded-full flex items-center justify-center shadow-md shadow-secondary-green">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium">Mindfulness & CBT Specialist</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full flex items-center justify-center shadow-md shadow-accent-green">
                  <Star className="w-4 h-4 text-gray-900" />
                </div>
                <span className="text-gray-300 font-medium">Trauma-Informed Care</span>
              </div>
            </div>
          </div>
          {/* Dr. Elara Vance Card - slightly larger and more prominent */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl shadow-primary-green-card transform hover:scale-105 transition-transform duration-300">
            <div className="w-60 h-60 mx-auto bg-gradient-to-r from-green-700 to-emerald-700 rounded-full mb-6 flex items-center justify-center shadow-lg shadow-primary-green">
              <div className="w-52 h-52 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-mono">
                  EV
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2 font-sans">Dr. Elara Vance</h3>
              <p className="text-gray-300 mb-4 font-medium">Holistic Psychologist & Mindfulness Coach</p>
              <div className="bg-gradient-to-r from-teal-600 to-lime-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block shadow-lg shadow-secondary-green">
                10+ Years Guiding Transformations
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
          <span className="text-2xl font-bold text-white font-sans">MindFlow</span>
          <p className="text-gray-300 mb-4 font-medium">
            Guiding you towards inner peace, clarity, and a life of profound well-being.
          </p>
          <p className="text-gray-400 text-sm">© 2024 MindFlow. All rights reserved. | Cultivating Serenity</p>
        </div>
      </footer>
    </div>
  )
}
