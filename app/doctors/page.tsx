"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Filter,
  Search,
  Phone,
  Mail,
  Award,
  GraduationCap,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const doctors = [
  {
    id: 1,
    name: "Dr. Sanjana Gupta",
    specialty: "Neurosurgeon",
    subSpecialty: "Brain & Spine Surgery",
    image:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 324,
    experience: "12 years",
    education: "MBBS, MS, MCh (Neurosurgery)",
    languages: ["English", "Hindi", "Spanish"],
    consultationFee: "$200",
    about:
      "Dr. Sanjana Gupta is a highly experienced neurosurgeon specializing in complex brain and spine surgeries. She has performed over 2,000 successful surgeries and is known for her precision and patient care.",
    achievements: [
      "Board Certified Neurosurgeon",
      "Fellow of American College of Surgeons",
      "Published 50+ research papers",
      "Excellence in Patient Care Award 2023",
    ],
    availability: ["Mon", "Tue", "Wed", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4567",
    email: "dr.sanjana@roshanhospital.com",
  },
  {
    id: 2,
    name: "Dr. Pimple Popper",
    specialty: "Psychiatrist",
    subSpecialty: "Adult & Adolescent Psychiatry",
    image:
      "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 267,
    experience: "8 years",
    education: "MBBS, MD (Psychiatry)",
    languages: ["English", "French"],
    consultationFee: "$150",
    about:
      "Dr. Pimple Popper is a compassionate psychiatrist with expertise in treating anxiety, depression, and mood disorders. She believes in a holistic approach to mental health care.",
    achievements: [
      "Board Certified Psychiatrist",
      "Member of American Psychiatric Association",
      "Specialized in Cognitive Behavioral Therapy",
      "Mental Health Advocate of the Year 2022",
    ],
    availability: ["Mon", "Wed", "Thu", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4568",
    email: "dr.popper@roshanhospital.com",
  },
  {
    id: 3,
    name: "Dr. Sherry Ross",
    specialty: "Gynecologist",
    subSpecialty: "Women's Health & Reproductive Medicine",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 412,
    experience: "15 years",
    education: "MBBS, MD (OB/GYN)",
    languages: ["English", "Spanish", "Portuguese"],
    consultationFee: "$180",
    about:
      "Dr. Sherry Ross is a leading gynecologist with extensive experience in women's health, pregnancy care, and minimally invasive surgical procedures.",
    achievements: [
      "Board Certified OB/GYN",
      "Fellow of American College of Obstetricians",
      "Expert in Laparoscopic Surgery",
      "Women's Health Champion Award 2023",
    ],
    availability: ["Tue", "Wed", "Thu", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4569",
    email: "dr.sherry@roshanhospital.com",
  },
  {
    id: 4,
    name: "Dr. Jen Gunter",
    specialty: "Neurologist",
    subSpecialty: "Movement Disorders & Epilepsy",
    image:
      "https://images.pexels.com/photos/5452230/pexels-photo-5452230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 189,
    experience: "10 years",
    education: "MBBS, MD (Neurology)",
    languages: ["English", "German"],
    consultationFee: "$175",
    about:
      "Dr. Jen Gunter specializes in treating neurological disorders with a focus on movement disorders, epilepsy, and neurodegenerative diseases.",
    achievements: [
      "Board Certified Neurologist",
      "Research Fellow at Mayo Clinic",
      "Expert in Deep Brain Stimulation",
      "Neurological Excellence Award 2022",
    ],
    availability: ["Mon", "Tue", "Thu", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4570",
    email: "dr.jen@roshanhospital.com",
  },
  {
    id: 5,
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    subSpecialty: "Interventional Cardiology",
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 298,
    experience: "14 years",
    education: "MBBS, MD (Cardiology)",
    languages: ["English", "Mandarin"],
    consultationFee: "$190",
    about:
      "Dr. Michael Chen is an interventional cardiologist with expertise in cardiac catheterization, angioplasty, and heart disease prevention.",
    achievements: [
      "Board Certified Cardiologist",
      "Fellow of American College of Cardiology",
      "Expert in Cardiac Interventions",
      "Cardiac Excellence Award 2023",
    ],
    availability: ["Mon", "Wed", "Fri", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4571",
    email: "dr.chen@roshanhospital.com",
  },
  {
    id: 6,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    subSpecialty: "Child Development & Vaccination",
    image:
      "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 356,
    experience: "11 years",
    education: "MBBS, MD (Pediatrics)",
    languages: ["English", "French"],
    consultationFee: "$140",
    about:
      "Dr. Sarah Johnson is a dedicated pediatrician who provides comprehensive care for children from birth to adolescence.",
    achievements: [
      "Board Certified Pediatrician",
      "Member of American Academy of Pediatrics",
      "Child Health Advocate",
      "Pediatric Excellence Award 2022",
    ],
    availability: ["Tue", "Wed", "Thu", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4572",
    email: "dr.sarah@roshanhospital.com",
  },
];

const specialties = [
  "All Doctors",
  "Neurosurgeon",
  "Psychiatrist",
  "Gynecologist",
  "Neurologist",
  "Cardiologist",
  "Pediatrician",
];

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Doctors");
  const [sortBy, setSortBy] = useState("name");

  const filteredDoctors = doctors
    .filter((doctor) => {
      if (
        selectedSpecialty !== "All Doctors" &&
        doctor.specialty !== selectedSpecialty
      ) {
        return false;
      }
      if (
        searchTerm &&
        !doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "experience")
        return parseInt(b.experience) - parseInt(a.experience);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Doctors</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Meet our team of experienced and compassionate healthcare
              professionals dedicated to providing you with the best medical
              care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/50  top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search doctors or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>

              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="experience">Experience</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-xl px-2 transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={doctor.image} alt={doctor.name} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-1">
                          {doctor.specialty}
                        </p>
                        <p className="text-sm text-gray-600">
                          {doctor.subSpecialty}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium ml-1">
                              {doctor.rating}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">
                            ({doctor.reviews} reviews)
                          </span>
                        </div>
                        <Badge variant="secondary">{doctor.experience}</Badge>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{doctor.hospital}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{doctor.consultationFee}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {doctor.availability.map((day) => (
                          <Badge
                            key={day}
                            variant="outline"
                            className="text-xs"
                          >
                            {day}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            View Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <div className="flex items-start space-x-4 mb-4">
                              <Avatar className="w-20 h-20">
                                <AvatarImage
                                  src={doctor.image}
                                  alt={doctor.name}
                                />
                                <AvatarFallback>
                                  {doctor.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <DialogTitle className="text-2xl">
                                  {doctor.name}
                                </DialogTitle>
                                <DialogDescription className="text-lg text-blue-600 font-medium">
                                  {doctor.specialty}
                                </DialogDescription>
                                <p className="text-gray-600">
                                  {doctor.subSpecialty}
                                </p>
                                <div className="flex items-center space-x-2 mt-2">
                                  <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm font-medium ml-1">
                                      {doctor.rating}
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-500">
                                    ({doctor.reviews} reviews)
                                  </span>
                                  <Badge variant="secondary">
                                    {doctor.experience}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </DialogHeader>

                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-lg mb-2">
                                About
                              </h4>
                              <p className="text-gray-600">{doctor.about}</p>
                            </div>

                            <Separator />

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-lg mb-3 flex items-center">
                                  <GraduationCap className="w-5 h-5 mr-2" />
                                  Education
                                </h4>
                                <p className="text-gray-600">
                                  {doctor.education}
                                </p>
                              </div>

                              <div>
                                <h4 className="font-semibold text-lg mb-3">
                                  Languages
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {doctor.languages.map((language) => (
                                    <Badge key={language} variant="outline">
                                      {language}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <Separator />

                            <div>
                              <h4 className="font-semibold text-lg mb-3 flex items-center">
                                <Award className="w-5 h-5 mr-2" />
                                Achievements
                              </h4>
                              <ul className="space-y-2">
                                {doctor.achievements.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-600">
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <Separator />

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-lg mb-3">
                                  Contact
                                </h4>
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2">
                                    <Phone className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">
                                      {doctor.phone}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">
                                      {doctor.email}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-lg mb-3">
                                  Availability
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {doctor.availability.map((day) => (
                                    <Badge key={day} variant="secondary">
                                      {day}
                                    </Badge>
                                  ))}
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                  Consultation Fee: {doctor.consultationFee}
                                </p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button size="sm" className="flex-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No doctors found matching your criteria.
              </p>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter options.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
