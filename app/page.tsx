"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Search,
  ShoppingCart,
  Star,
  Stethoscope,
  Video,
  Pill,
  TestTube,
  UserCheck,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Heart,
  Utensils,
  Ambulance,
  Church,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HospitalSection from "@/components/modisection";

const services = [
  {
    title: "Place of Worship ",
    subtitle: "Quiet space for prayers and reflection",
    icon: Church,
    bgColor: "bg-gradient-to-br from-indigo-300 to-indigo-400",
    iconColor: "text-indigo-700",
  },
  {
    title: "Ambulance Services",
    subtitle: "Emergency response at your doorstep",
    icon: Ambulance,
    bgColor: "bg-gradient-to-br from-red-300 to-red-400",
    iconColor: "text-red-700",
  },
  {
    title: "Hospital Canteen",
    subtitle: "Nutritious meals for patients & visitors",
    icon: Utensils,
    bgColor: "bg-gradient-to-br from-orange-300 to-orange-400",
    iconColor: "text-orange-700",
  },
  {
    title: "24/7 Medicines",
    subtitle: "Essentials at your doorstep",
    icon: Pill,
    bgColor: "bg-gradient-to-br from-pink-300 to-pink-400",
    iconColor: "text-pink-700",
  },
];

const specialties = [
  "Orthodontist",
  "Obesity",
  "Neck pain",
  "Neurology",
  "Headache",
  "Shoulder",
  "Eye care",
];

const doctors = [
  {
    name: "Dr. Jitendra piple",
    specialty: "MD & Pediatrician",
    image: "doctors/WhatsApp Image 2025-07-04 at 13.07.11_0fcfaabe.jpg",
    rating: 4.9,
    experience: "12 years",
  },
  {
    name: "Dr. Rakesh Sukheja MD & Director",
    specialty: "Senior pediatrician",
    image: "doctors/WhatsApp Image 2025-07-04 at 13.08.24_90bd137b.jpg",
    rating: 4.8,
    experience: "8 years",
  },
  {
    name: "Dr. Rajni Sukheja",
    specialty:
      "Dip G.O. NARCHI Director & Consultant gynecologist and obstetrician",
    image: "doctors/Madam Photo3.jpg",
    rating: 4.9,
    experience: "15 years",
  },
  {
    name: "Dr. Arpit Bhargav",
    specialty: "MD & Pulmonologist",
    image:
      "https://images.pexels.com/photos/5452230/pexels-photo-5452230.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    rating: 4.7,
    experience: "10 years",
  },
];

const stats = [
  {
    title: "Nutrition and Mental Health",
    subtitle:
      "The food we eat provides the nutrition that our bodies and brains need to function properly.",
    bgColor: "bg-gradient-to-br from-yellow-300 to-yellow-400",
    icon: "🥗",
  },
  {
    title: "Healthy Habits for a Happy Heart",
    subtitle:
      "Simple lifestyle changes can make a big difference in your cardiovascular health.",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-500",
    icon: "❤️",
  },
  {
    title: "08 Years Experience",
    subtitle: "Trusted healthcare provider",
    number: "08",
    bgColor: "bg-gradient-to-br from-green-400 to-green-500",
  },
  {
    title: "120k Happy Customers",
    subtitle: "Satisfied patients worldwide",
    number: "120k",
    bgColor: "bg-gradient-to-br from-pink-400 to-pink-500",
  },
];

// Mobile app images that will auto-change
const appImages = [
  "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  "https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
];

// Testimonials data
const testimonials = [
  {
    name: "Mohd Faisal Khan",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVO7fwJjf4sCpxzHrzZFKdzlZbcxZTgbGzwwDiV3DIvvJvY76jMIg=s50-w40-c-h40-rp-ba4-br100",
    rating: 5,
    text: `Best hospital in the town with great care facilities by staff and doctors.
Thanks lalit,Gautam and Rohan for their extended support.`,
    location: "",
  },
  {
    name: "MANOJ BHATIA",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUSHRtqNjWitpBCeZjh3Ik4PvAq5IeDRcj42cn7ZrkkyIqOQcDwWA=w45-h45-p-rp-mo-ba3-br100",
    rating: 5,
    text: `Excellent Hospital offering multiple specialities. Very clean and hygienic, the hospital offers medical care for the entire family! The dedication of Dr Rakesh Sukheja and Dr Rajni Sukheja is exemplary.`,
    location: "",
  },
  {
    name: "RAM PUNDE",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVTILtc9PaSWvqDzfl1Xf0pWUIdEJy49pKVkr_bc8Or5FOqTv6qMg=w90-h90-p-rp-mo-ba6-br100",
    rating: 5,
    text: "Roshan children Hospital # Very clean and hygiene # hospital # located near MPEB , had a good experience recently went for some treatment # my friends son.",
    location: "",
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAppSectionVisible, setIsAppSectionVisible] = useState(false);
  const appSectionRef = useRef(null);

  // Auto-change app images when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAppSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (appSectionRef.current) {
      observer.observe(appSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAppSectionVisible) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % appImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAppSectionVisible]);

  // Auto-change testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br overflow-x-hidden from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
                <div className="relative z-10">
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    Healthcare
                  </h1>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-lg">Reduce HbA1c</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-lg">No more medications</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      Book Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>

                  <p className="text-sm mt-4 text-white/80">
                    IF YOU'RE LOOKING FOR A CREATIVE AND
                    <br />
                    EASY WAY TO BUILD A WEBSITE, WOW!
                    <br />
                    IS THE PERFECT SOLUTION.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full">
                <Image
                  src="/Roshan-hospital-front-vew.png"
                  alt="Healthcare Professional"
                  width={1000}
                  height={1000}
                  className="rounded-3xl shadow-2xl w-full max-w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
                <div className="relative z-10 space-y-5">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    Welcome to Roshan Hospital
                  </h2>

                  <p className="text-white/90 text-base leading-relaxed">
                    Trusted by Bhopal for advanced care, modern facilities, and
                    a dedicated team of specialists — all under one roof.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>24/7 Emergency</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Expert Doctors</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Modern Diagnostics</span>
                    </li>
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      Book Appointment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full">
                <Image
                  src="/Roshan-hospital-front-vew.png"
                  alt="Roshan Hospital Bhopal"
                  width={1000}
                  height={1000}
                  className="rounded-3xl shadow-2xl w-full max-w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="px-4">
        <HospitalSection />
      </div>
      {/* Services Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card
                  className={`${service.bgColor} border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {service.subtitle}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-3 rounded-xl bg-white/30 ${service.iconColor}`}
                      >
                        <service.icon className="w-6 h-6" />
                      </motion.div>
                    </div>
                    <div className="flex justify-end">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="w-8 h-8 bg-white/40 rounded-full flex items-center justify-center"
                      >
                        <ArrowRight className="w-4 h-4 text-gray-700" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Doctors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our experienced specialists and book your appointment
              today
            </p>
          </motion.div>

          {/* Specialty Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-blue-100 cursor-pointer"
                >
                  {specialty}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-80">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={doctor.image} alt={doctor.name} />
                      <AvatarFallback>
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">
                          {doctor.rating}
                        </span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {doctor.experience}
                      </span>
                    </div>
                    <Button size="sm" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/doctors">
              <Button variant="outline" size="lg">
                View All Doctors
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  className={`${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white`}
                >
                  <CardContent className="p-6">
                    {stat.icon && (
                      <div className="text-3xl mb-4">{stat.icon}</div>
                    )}
                    {stat.number && (
                      <div className="text-4xl font-bold mb-2">
                        {stat.number}
                      </div>
                    )}
                    <h3 className="font-semibold text-lg mb-2">{stat.title}</h3>
                    <p className="text-sm opacity-90">{stat.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section with Carousel */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by Thousands of Happy Patients!
            </h2>
            {/* <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
              <span className="text-lg font-semibold ml-2">
                Average Google Rating is 4.8
              </span>
            </div> */}
            <div className="flex flex-col items-center justify-center space-y-2 mb-4 sm:flex-row sm:space-y-0 sm:space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-center sm:ml-2">
                Average Google Rating is 4.8
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto relative"
          >
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-lg">
                                {testimonial.name}
                              </h4>
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 text-yellow-400 fill-current"
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-3">
                              {testimonial.location}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile App Section with Auto-changing Images */}
      <section
        ref={appSectionRef}
        className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">27 Years of Excellence</h3>
                  <p className="text-blue-100">
                    Serving the community with dedication
                  </p>
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                5 Lakh+ Patients Served at Roshan Hospital
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                For over 27 years, Roshan Hospital has been a trusted name in
                quality healthcare—offering advanced medical services,
                compassionate care, and a legacy of healing. Our commitment to
                excellence has helped us serve more than half a million patients
                with integrity and professionalism.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-200" />
                  <span className="text-sm">5,00,000+ Patients Served</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-blue-200" />
                  <span className="text-sm">27 Years of Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-200" />
                  <span className="text-sm">4.8+ Patient Rating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Stethoscope className="w-5 h-5 text-blue-200" />
                  <span className="text-sm">Expert Medical Team</span>
                </div>
              </div>

              <div className="text-sm text-blue-200">
                Trusted by generations. Available for you—always.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <Image
                    src={appImages[currentImageIndex]}
                    alt="Roshan Hospital Facility"
                    width={400}
                    height={600}
                    className="rounded-3xl shadow-2xl mx-auto"
                  />
                </motion.div>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {appImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Read top articles from health experts
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with the latest health tips and medical insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <Badge className="mb-3">Blog Post</Badge>
                  <h3 className="font-semibold text-lg mb-2">
                    Acne Care Combo of Cetaphil Oily Skin Cleanse
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn about effective skincare routines for oily and
                    acne-prone skin.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <Badge className="mb-3">Healthy Lifestyle</Badge>
                  <h3 className="font-semibold text-lg mb-2">
                    Your Ultimate Guide to Health and Wellness
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive guide to maintaining a healthy lifestyle and
                    preventing diseases.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Dr. Rodriguez</h4>
                      <p className="text-sm text-gray-600">Cardiologist</p>
                    </div>
                  </div>
                  <Badge className="mb-3">Good Consultation</Badge>
                  <h3 className="font-semibold text-lg mb-2">
                    Your Ultimate Guide to Health and Wellness
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expert advice on maintaining cardiovascular health and
                    preventing heart disease.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center">
            <Button size="lg">
              READ ALL BLOGS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
