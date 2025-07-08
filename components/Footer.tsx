"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/doctors", label: "Our Doctors" },
    { href: "/departments", label: "Departments" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  const services = [
    "Pediatrics",
    "Gynecology",
    "Emergency Care",
    "Surgery",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Laboratory",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-[#0051a0] to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Health Tips & News
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest health insights,
              medical updates, and wellness tips from our expert doctors.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hospital Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  {/* <Stethoscope className="w-5 h-5 text-white" /> */}
                  <Image
                    src={"/roshanhospitallogo.png"}
                    alt="Roshan Hospital Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <span className="text-xl font-bold">Roshan Hospital</span>
              </div>
              <p className="text-gray-400 mb-6">
                Providing quality healthcare services with compassion and
                excellence since 2015. Your health and well-being are our top
                priorities.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-300">24/7 Emergency</p>
                    <p className="font-medium">9111222234</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="font-medium">info@roshanhospital.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-300">Address</p>
                    <p className="font-medium">
                      7, A-B, Raisen Rd, Govind Garden, Sector B,
                      <br />
                      Govindpura Bhopal, Madhya Pradesh - 462023.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hours & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-6">Hospital Hours</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-300">Emergency Services</p>
                    <p className="font-medium text-green-400">24/7</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  <p>
                    <span className="text-white">General Consultation:</span>
                    <br />
                    Mon-Sat: 8AM-8PM
                  </p>
                  <p className="mt-2">
                    <span className="text-white">Pharmacy:</span>
                    <br />
                    24/7
                  </p>
                  <p className="mt-2">
                    <span className="text-white">Laboratory:</span>
                    <br />
                    Mon-Sat: 8AM-9PM
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Roshan Hospital. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Licensed Healthcare Provider | HIPAA Compliant | JCI Accredited
              </p>
              <p className="text-gray-600 text-xs mt-1 flex items-center gap-1 flex-wrap">
                Made with
                <span className="text-red-500">
                  <Heart className="w-4 h-4" />
                </span>
                by{" "}
                <a
                  href="https://medimize.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline ml-1"
                >
                  Medimize.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
