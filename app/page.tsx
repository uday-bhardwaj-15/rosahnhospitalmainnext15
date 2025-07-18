"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  Shield,
  X,
  User,
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
import EmpanelmentSection from "@/components/EmpanelmentSection";

const services = [
  {
    title: "24/7 Emergency Critical Care",
    subtitle:
      "Emergency and intensive care for critical conditions, available round the clock",
    icon: Shield, // Changed from Utensils to Shield for an emergency logo
    bgColor: "bg-gradient-to-br from-orange-300 to-orange-400",
    iconColor: "text-orange-700",
  },
  {
    title: "24/7 Ambulance Services",
    subtitle: "Emergency response at your doorstep",
    icon: Ambulance,
    bgColor: "bg-gradient-to-br from-red-300 to-red-400",
    iconColor: "text-red-700",
  },
  {
    title: "24/7 Medicines",
    subtitle: "Essentials at your doorstep",
    icon: Pill,
    bgColor: "bg-gradient-to-br from-pink-300 to-pink-400",
    iconColor: "text-pink-700",
  },
  {
    title: "Place of Worship ",
    subtitle: "Quiet space for prayers and reflection",
    icon: Church,
    bgColor: "bg-gradient-to-br from-indigo-300 to-indigo-400",
    iconColor: "text-indigo-700",
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
    name: "Dr. Rakesh Sukheja MD & Director",
    specialty: "Senior pediatrician",
    image: "doctors/WhatsApp Image 2025-07-04 at 13.08.24_90bd137b.jpg",
    rating: 4.8,
    experience: "30+ years",
  },
  {
    name: "Dr. Rajni Sukheja",
    specialty:
      "Dip G.O. NARCHI Director & Consultant gynecologist and obstetrician",
    image: "doctors/Madam Photo3.jpg",
    rating: 4.9,
    experience: "25+ years",
  },
  {
    name: "Dr. Richa tiwari",
    specialty: "MS consultant gynecologist and obstetrician",
    image: "/doctors/WhatsApp Image 2025-07-04 at 14.34.26_0f33f920.jpg",
    rating: 4.9,
    experience: "",
  },

  {
    name: "Dr. Sanjeev Jain",
    specialty: "DCH pediatrician",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.06.17_8b0013f6.jpg",
    rating: 4.7,
    experience: "",
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
const blogPosts = [
  {
    id: 1,
    title: "Advanced Pediatric Surgery: Insights from Dr. Saket Jha",
    excerpt:
      "Explore neonatal and congenital surgeries with Dr. Saket Jha, a leading expert at Roshan Hospital.",
    category: "Pediatric Insight",
    gradient: "from-green-400 to-blue-500",
    categoryColor: "bg-green-100 text-green-700",
    author: "Dr. Saket Jha",
    date: "December 15, 2024",
    readTime: "5 min read",
    content: `
      <h3 class="text-xl font-semibold mb-4">Understanding Pediatric Surgery Excellence</h3>
      <p class="mb-4">Pediatric surgery requires specialized expertise and a gentle approach. At Roshan Hospital, Dr. Saket Jha brings years of experience in treating the youngest patients with complex surgical needs.</p>
      
      <h4 class="text-lg font-semibold mb-3">Key Areas of Expertise:</h4>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Neonatal surgery for newborns with congenital conditions</li>
        <li>Minimally invasive laparoscopic procedures</li>
        <li>Congenital anomaly corrections</li>
        <li>Emergency pediatric surgical interventions</li>
      </ul>
      
      <p class="mb-4">Our pediatric surgery department is equipped with state-of-the-art technology designed specifically for children, ensuring the highest standards of care and safety.</p>
      
      <blockquote class="border-l-4 border-green-500 pl-4 italic text-gray-600 mb-4">
        "Every child deserves the best possible surgical care. Our approach combines advanced medical techniques with compassionate care to ensure optimal outcomes for our young patients." - Dr. Saket Jha
      </blockquote>
    `,
  },
  {
    id: 2,
    title: "Managing Pain with Precision: Dr. Sandesh Yadav's Approach",
    excerpt:
      "Discover Dr. Yadav's techniques in regional anesthesia and chronic pain relief at Roshan Hospital.",
    category: "Pain Management",
    gradient: "from-purple-400 to-pink-500",
    categoryColor: "bg-purple-100 text-purple-700",
    author: "Dr. Sandesh Yadav",
    date: "December 10, 2024",
    readTime: "4 min read",
    content: `
      <h3 class="text-xl font-semibold mb-4">Revolutionary Pain Management Techniques</h3>
      <p class="mb-4">Pain management has evolved significantly with modern medical advances. Dr. Sandesh Yadav specializes in providing comprehensive pain relief solutions that improve quality of life for patients.</p>
      
      <h4 class="text-lg font-semibold mb-3">Treatment Approaches:</h4>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Regional anesthesia for surgical procedures</li>
        <li>Chronic pain management protocols</li>
        <li>Interventional pain procedures</li>
        <li>Multimodal analgesia techniques</li>
      </ul>
      
      <p class="mb-4">Our pain management department utilizes cutting-edge technology and evidence-based practices to ensure patients receive the most effective treatment with minimal side effects.</p>
      
      <blockquote class="border-l-4 border-purple-500 pl-4 italic text-gray-600 mb-4">
        "Effective pain management is not just about medication - it's about understanding each patient's unique needs and providing personalized care that addresses both physical and emotional aspects of pain." - Dr. Sandesh Yadav
      </blockquote>
    `,
  },
  {
    id: 3,
    title: "Cardiac Excellence with Dr. Sumit Bhatnagar",
    excerpt:
      "Learn how Dr. Bhatnagar is transforming interventional cardiology and heart care at Roshan Hospital.",
    category: "Heart Health",
    gradient: "from-red-400 to-orange-500",
    categoryColor: "bg-red-100 text-red-700",
    author: "Dr. Sumit Bhatnagar",
    date: "December 5, 2024",
    readTime: "6 min read",
    avatar: "/doctors/WhatsApp Image 2025-07-04 at 13.04.54_488f52d4.jpg",
    content: `
      <h3 class="text-xl font-semibold mb-4">Advancing Cardiac Care Through Innovation</h3>
      <p class="mb-4">Cardiovascular diseases remain a leading health concern globally. Dr. Sumit Bhatnagar brings expertise in interventional cardiology to provide comprehensive heart care at Roshan Hospital.</p>
      
      <h4 class="text-lg font-semibold mb-3">Specialized Services:</h4>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Coronary angioplasty and stenting procedures</li>
        <li>Heart attack emergency interventions</li>
        <li>Preventive cardiology consultations</li>
        <li>Cardiac catheterization procedures</li>
      </ul>
      
      <p class="mb-4">Our cardiac care unit is equipped with advanced catheterization labs and monitoring systems to provide 24/7 emergency cardiac services.</p>
      
      <blockquote class="border-l-4 border-red-500 pl-4 italic text-gray-600 mb-4">
        "Heart health is about prevention as much as it is about treatment. We focus on educating patients about lifestyle changes that can prevent cardiac events while providing world-class interventional care when needed." - Dr. Sumit Bhatnagar
      </blockquote>
    `,
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
  const [selectedBlog, setSelectedBlog] = useState<
    (typeof blogPosts)[0] | null
  >(null);

  const openBlogModal = (blog: (typeof blogPosts)[0]) => {
    setSelectedBlog(blog);
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br  from-blue-50 via-white to-green-50">
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
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl lg:text-5xl font-bold">
                    Welcome to Roshan Hospital, Bhopal
                  </h2>

                  <p className="text-white/90 text-lg">
                    At Roshan Hospital, we are committed to delivering
                    compassionate and high-quality medical care. Our
                    multidisciplinary team of experienced doctors and modern
                    infrastructure make us one of Bhopal’s most trusted
                    healthcare destinations.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-lg">24/7 Emergency Services</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-lg">Advanced Diagnostics</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-lg">
                        Experienced Medical Specialists
                      </span>
                    </li>
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                      onClick={() => window.open("/contact", "_blank")}
                    >
                      Book Your Appointment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>

                  <p className="text-sm mt-4 text-white/70">
                    Located in the heart of Bhopal, Roshan Hospital offers
                    personalized care with modern technology — because your
                    health deserves the best.
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
      {/* our mission */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600">
                  To provide compassionate, high-quality healthcare services
                  that improve the health and well-being of our community. We
                  are committed to clinical excellence, innovation, and treating
                  every patient at affordable with dignity and respect.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600">
                  To be the leading healthcare provider in the region,
                  recognized for our commitment to patient care, medical
                  excellence, and community health. We envision a healthier
                  community where everyone has access to quality healthcare.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Why Choose Roshan Hospital?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Expert Medical Team</h4>
                      <p className="text-gray-600">
                        Board-certified specialists
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Advanced Technology</h4>
                      <p className="text-gray-600">
                        State-of-the-art medical equipment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Compassionate Care</h4>
                      <p className="text-gray-600">Patient-centered approach</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Accredited Excellence</h4>
                      <p className="text-gray-600">NABH accredited facility</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Holistic Patient Care Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our commitment to
              providing exceptional healthcare services.
            </p>
          </motion.div>

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
                      {/* <div className="flex justify-end">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="w-8 h-8 bg-white/40 rounded-full flex items-center justify-center"
                        >
                          <ArrowRight className="w-4 h-4 text-gray-700" />
                        </motion.div>
                      </div> */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="px-4">
        <EmpanelmentSection />
      </div>
      <div className="px-4">
        <HospitalSection />
      </div>

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
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2 sm:px-4"
                  >
                    <Card className="shadow-lg">
                      <CardContent className="p-4 sm:p-8">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
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
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-base sm:text-lg truncate">
                                {testimonial.name}
                              </h4>
                              <div className="flex flex-shrink-0">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-3">
                              {testimonial.location}
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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

            {/* Navigation Buttons - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:block">
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
            </div>

            {/* Mobile Navigation Buttons - Positioned inside container */}
            <div className="flex sm:hidden justify-between items-center mt-4 px-4">
              <button
                onClick={prevTestimonial}
                className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

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
        className="py-16 bg-gradient-to-r from-[#0051a0] to-purple-600 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    27 Years of Excellence
                  </h3>
                  <p className="text-sm sm:text-base text-blue-100">
                    Serving the community with dedication
                  </p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                5 Lakh+ Patients Served at Roshan Hospital
              </h2>
              <p className="text-base sm:text-lg mb-6 text-blue-100">
                For over 27 years, Roshan Hospital has been a trusted name in
                quality healthcare—offering advanced medical services,
                compassionate care, and a legacy of healing. Our commitment to
                excellence has helped us serve more than half a million patients
                with integrity and professionalism.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    5,00,000+ Patients Served
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base">27 Years of Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    4.8+ Patient Rating
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Expert Medical Team
                  </span>
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
              className="relative order-1 lg:order-2"
            >
              <div className="relative max-w-sm mx-auto">
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
                    className="rounded-3xl shadow-2xl mx-auto w-full h-auto max-w-xs sm:max-w-sm"
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
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Read top articles from{" "}
              <span className="text-blue-600">health experts</span>
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with the latest health tips and medical insights
              from our specialists
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
                onClick={() => openBlogModal(blog)}
              >
                <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div
                    className={`aspect-video bg-gradient-to-br ${blog.gradient} rounded-t-lg relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className={`${blog.categoryColor} border-0`}>
                        {blog.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    {blog.avatar && (
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={blog.avatar} />
                          <AvatarFallback>
                            {blog.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-sm">
                            {blog.author}
                          </h4>
                          <p className="text-xs text-gray-600">Specialist</p>
                        </div>
                      </div>
                    )}
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{blog.date}</span>
                        </div>
                        <span>{blog.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              READ ALL BLOGS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeBlogModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${selectedBlog.gradient} p-6 text-white relative`}
              >
                <button
                  onClick={closeBlogModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
                <Badge className="bg-white/20 text-white border-0 mb-3">
                  {selectedBlog.category}
                </Badge>
                <h2 className="text-2xl font-bold mb-2">
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{selectedBlog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <span>{selectedBlog.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>

              {/* Footer */}
              {/* <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {selectedBlog.avatar && (
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={selectedBlog.avatar} />
                        <AvatarFallback>
                          {selectedBlog.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <h4 className="font-semibold">{selectedBlog.author}</h4>
                      <p className="text-sm text-gray-600">
                        Medical Specialist at Roshan Hospital
                      </p>
                    </div>
                  </div>
                  <Button onClick={closeBlogModal}>Close Article</Button>
                </div>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
