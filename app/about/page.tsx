"use client";

import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Shield,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  X,
  Linkedin,
  GraduationCap,
  Award as CertificateIcon,
  Calendar,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
interface HospitalOwner {
  id: number;
  name: string;
  title: string;
  image: string;
  specialization: string;
  experience: string;
  education: string;
  achievements: string[];
  vision: string;
  contact: {
    email: string;
    linkedin: string;
  };
}
const milestones = [
  {
    year: "2015",
    title: "Hospital Founded",
    description:
      "Roshan Hospital opened its doors with a vision to provide quality healthcare.",
  },
  {
    year: "2017",
    title: "NICU Level 2",
    description: "Established state-of-the-art Neonatal Intensive Care Unit.",
  },
  {
    year: "2019",
    title: "JCI Accreditation",
    description:
      "Received Joint Commission International accreditation for quality standards.",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description:
      "Launched telemedicine services and electronic health records.",
  },
  {
    year: "2023",
    title: "50,000+ Patients",
    description: "Milestone achievement in serving the community.",
  },
  {
    year: "2025",
    title: "Center of Excellence",
    description:
      "Recognized as a regional center for cardiac and neurological care.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with empathy, respect, and dignity, ensuring comfort during their healthcare journey.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Patient safety is our top priority with rigorous protocols and continuous quality improvement.",
  },
  {
    icon: Users,
    title: "Team Excellence",
    description:
      "Our multidisciplinary team of experts collaborates to provide comprehensive healthcare solutions.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "We maintain the highest standards of medical practice with evidence-based treatments.",
  },
];

const facilities = [
  {
    title: "Neonatal Ward",
    description:
      "State-of-the-art NICU Level 2 with specialized equipment for newborn care.",
    image:
      "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "24/7 Monitoring",
      "Specialized Staff",
      "Family Support",
      "Advanced Equipment",
    ],
  },
  {
    title: "General Wards",
    description:
      "Comfortable patient rooms with modern amenities and round-the-clock nursing care.",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Private Rooms",
      "Nursing Care",
      "Family Accommodation",
      "Modern Amenities",
    ],
  },
  {
    title: "Operating Theaters",
    description:
      "Advanced surgical suites equipped with cutting-edge technology.",
    image:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Minimally Invasive",
      "Advanced Technology",
      "Sterile Environment",
      "Expert Surgeons",
    ],
  },
  {
    title: "Emergency Department",
    description:
      "24/7 emergency services with rapid response and critical care capabilities.",
    image:
      "https://images.pexels.com/photos/8845216/pexels-photo-8845216.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "24/7 Service",
      "Trauma Care",
      "Rapid Response",
      "Critical Care",
    ],
  },
];

const accreditations = [
  {
    name: "Joint Commission International",
    code: "https://www.jointcommissioninternational.org/-/media/jci/images/jci-gold-seal.png",
  },
  {
    name: "ISO 9001:2015",
    code: "https://5.imimg.com/data5/HN/QX/NC/SELLER-3364809/iso-certification-for-hospitals.jpg",
  },
  {
    name: "NABH Accreditation",
    code: "https://nabh.co/wp-content/uploads/2023/10/nabh-make-2.jpg",
  },
  {
    name: "NABL Certified Labs",
    code: "https://productimages.withfloats.com/actual/6433ba9a1d771d0001940026.png",
  },
];

const hospitalOwners: HospitalOwner[] = [
  {
    id: 1,
    name: "Dr. Rakesh Sukheja ",
    title: "Chairman & Chief Medical Officer",
    image: "doctors/WhatsApp Image 2025-07-04 at 13.08.24_90bd137b.jpg",
    specialization: "Senior pediatrician",
    experience: "25+ Years",
    education: "MBBS, MD Cardiology, MBA Healthcare",
    achievements: [
      "MD Director & Senior Pediatrician",
      "Leadership in Pediatric Care",
      "Member of Indian Academy of Pediatrics",
      "Medical Director Excellence Award",
    ],
    vision:
      "To create a healthcare ecosystem that combines cutting-edge medical technology with compassionate care, making quality healthcare accessible to all segments of society.",
    contact: {
      email: "dr.rajesh@roshanhospital.com",
      linkedin: "linkedin.com/in/dr-rajesh-sharma",
    },
  },
  {
    id: 2,
    name: "Dr. Rajni Sukheja",
    title: "Managing Director & Co-Founder",
    image: "/doctors/Madam Photo3.jpg",
    specialization:
      "Dip G.O. NARCHI Director & Consultant gynecologist and obstetrician",
    experience: "20+ Years",
    education:
      "MBA Healthcare Management, Post Graduate Diploma in Hospital Administration",
    achievements: [
      "NARCHI Director & Consultant Gynecologist",
      "Women's Health Excellence Award 2023",
      "High-Risk Pregnancy Specialist",
      "Member of Federation of Obstetric & Gynecological Societies",
    ],
    vision:
      "To build sustainable healthcare solutions that prioritize patient experience while maintaining operational excellence and community impact.",
    contact: {
      email: "priya.sharma@roshanhospital.com",
      linkedin: "linkedin.com/in/priya-sharma-healthcare",
    },
  },
];
export default function About() {
  const [selectedOwner, setSelectedOwner] = useState<HospitalOwner | null>(
    null
  );

  const openPopup = (owner: HospitalOwner) => {
    setSelectedOwner(owner);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setSelectedOwner(null);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="min-h-screen bg-gradient-to-br overflow-x-hidden from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Roshan Hospital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Roots of Roshan Hospital were sown as Roshan Maternity And Child
                Care Centre, established in 1998. With its resounding success
                and felt need for a complete family health solution in the
                region, Roshan Hospital has been launched in August 2017. Our
                core values of serving mankind with highest standards of medical
                care that too within their means remain the same.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">24/7 Emergency Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">50,000+ Patients Served</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/Roshan-hospital-front-vew.png"
                alt="Modern Hospital Building"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
                  every patient with dignity and respect.
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
                    <Award className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Accredited Excellence</h4>
                      <p className="text-gray-600">
                        JCI and NABH accredited facility
                      </p>
                    </div>
                  </div>
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our commitment to
              providing exceptional healthcare services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our commitment to healthcare excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="mb-3">{milestone.year}</Badge>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our commitment to healthcare excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline vertical line (shown on all devices) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 z-0"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-1 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow z-10"></div>

                  {/* Timeline Box */}
                  <div className="w-[90%] sm:w-5/12">
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="mb-3">{milestone.year}</Badge>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the visionary leaders driving healthcare excellence at Roshan
              Hospital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hospitalOwners.map((owner, index) => (
              <div
                key={owner.id}
                className="animate-fade-in-up-stagger cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openPopup(owner)}
              >
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 border border-blue-100">
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={owner.image}
                        alt={owner.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <CertificateIcon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {owner.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {owner.title}
                    </p>
                    <p className="text-gray-600 mb-4">{owner.specialization}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {owner.experience}
                        </span>
                      </div>
                      <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        Click to view
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedOwner && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img
                    src={selectedOwner.image}
                    alt={selectedOwner.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedOwner.name}
                    </h2>
                    <p className="text-xl text-blue-600 font-medium mb-4">
                      {selectedOwner.title}
                    </p>
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">
                          {selectedOwner.specialization}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">
                          {selectedOwner.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Education
                      </h3>
                      <p className="text-gray-600">{selectedOwner.education}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedOwner.achievements.map(
                          (achievement, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">
                                {achievement}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Vision
                      </h3>
                      <p className="text-gray-600 italic">
                        {selectedOwner.vision}
                      </p>
                    </div>

                    <div className="flex space-x-4 pt-4 border-t border-gray-200">
                      <a
                        href={`mailto:${selectedOwner.contact.email}`}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Email</span>
                      </a>
                      <a
                        href={`https://${selectedOwner.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accreditations */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Accreditations & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Recognized for excellence in healthcare quality and safety
              standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accreditations.map((accreditation, index) => (
              <motion.div
                key={accreditation.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Image
                        className="text-xl font-bold text-blue-600"
                        src={accreditation.code}
                        alt={""}
                        width={100}
                        height={100}
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {accreditation.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule an appointment or learn more about
              our services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@roshanhospital.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>123 Healthcare Ave, NY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
