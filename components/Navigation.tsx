"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Stethoscope,
  Phone,
  MapPin,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/departments", label: "Departments" },
    { href: "/doctors", label: "Doctors" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <Image
                src={"/roshanhospitallogo.png"}
                alt={""}
                width={200}
                height={200}
              />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Roshan Hospital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2">
              <Select>
                <SelectTrigger className="w-32">
                  <MapPin className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="New York" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="la">Los Angeles</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            {/* <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search..." className="pl-10 w-48" />
            </div>

            <Button variant="ghost" size="sm">
              🎯 Offers
            </Button> */}

            <Button size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Emergency
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search..." className="pl-10" />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <Button variant="outline" size="sm" className="w-full">
                🎯 Offers
              </Button>
              <Button size="sm" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Call
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
