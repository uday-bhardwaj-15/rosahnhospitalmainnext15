// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   Heart,
//   Brain,
//   Baby,
//   Eye,
//   Bone,
//   Stethoscope,
//   Users,
//   Clock,
//   MapPin,
//   Phone,
//   Calendar,
//   ArrowRight,
//   Search,
//   Filter,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import Image from "next/image";
// import Link from "next/link";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

// const departments = [
//   {
//     id: 1,
//     name: "Cardiology",
//     description:
//       "Comprehensive heart care with advanced cardiac procedures and treatments for all cardiovascular conditions.",
//     icon: Heart,
//     image:
//       "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//     head: "Dr. Michael Chen",
//     doctorCount: 8,
//     services: [
//       "Cardiac Catheterization",
//       "Angioplasty",
//       "Heart Surgery",
//       "Pacemaker Implantation",
//     ],
//     established: "2015",
//     availability: "24/7 Emergency, Mon-Fri 8AM-6PM",
//     phone: "+1 (555) 123-HEART",
//     color: "bg-red-500",
//   },
//   {
//     id: 2,
//     name: "Neurology",
//     description:
//       "Advanced neurological care for brain and spine conditions with cutting-edge technology.",
//     icon: Brain,
//     image:
//       "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//     head: "Dr. Sanjana Gupta",
//     doctorCount: 6,
//     services: [
//       "Brain Surgery",
//       "Spine Surgery",
//       "Stroke Treatment",
//       "Epilepsy Management",
//     ],
//     established: "2016",
//     availability: "Mon-Fri 8AM-5PM, Emergency 24/7",
//     phone: "+1 (555) 123-NEURO",
//     color: "bg-purple-500",
//   },
//   {
//     id: 3,
//     name: "Pediatrics",
//     description:
//       "Specialized care for children from birth to adolescence with family-centered approach.",
//     icon: Baby,
//     image:
//       "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//     head: "Dr. Sarah Johnson",
//     doctorCount: 5,
//     services: [
//       "Newborn Care",
//       "NICU Level 2",
//       "Pediatric Surgery",
//       "Vaccination Programs",
//     ],
//     established: "2017",
//     availability: "Mon-Sat 8AM-8PM, NICU 24/7",
//     phone: "+1 (555) 123-KIDS",
//     color: "bg-pink-500",
//   },
//   {
//     id: 4,
//     name: "Orthopedics",
//     description:
//       "Complete bone, joint, and muscle care with advanced treatments and rehabilitation.",
//     icon: Bone,
//     image:
//       "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//     head: "Dr. James Wilson",
//     doctorCount: 7,
//     services: [
//       "Joint Replacement",
//       "Arthroscopy",
//       "Sports Medicine",
//       "Trauma Surgery",
//     ],
//     established: "2018",
//     availability: "Mon-Fri 7AM-6PM, Emergency 24/7",
//     phone: "+1 (555) 123-BONES",
//     color: "bg-blue-500",
//   },
//   {
//     id: 5,
//     name: "Gynecology",
//     description:
//       "Comprehensive women's health and maternity services with personalized care.",
//     icon: Heart,
//     image:
//       "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//     head: "Dr. Sherry Ross",
//     doctorCount: 6,
//     services: [
//       "Prenatal Care",
//       "Labor & Delivery",
//       "Gynecological Surgery",
//       "Fertility Treatment",
//     ],
//     established: "2016",
//     availability: "Mon-Sat 8AM-6PM, Delivery 24/7",
//     phone: "+1 (555) 123-WOMEN",
//     color: "bg-teal-500",
//   },
//   {
//     id: 6,
//     name: "Emergency Medicine",
//     description:
//       "24/7 emergency care with state-of-the-art trauma center and critical care.",
//     icon: Stethoscope,
//     image:
//       "https://images.pexels.com/photos/8845216/pexels-photo-8845216.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
//     head: "Dr. Robert Martinez",
//     doctorCount: 12,
//     services: [
//       "Trauma Care",
//       "Critical Care",
//       "Emergency Surgery",
//       "Cardiac Emergency",
//     ],
//     established: "2015",
//     availability: "24/7",
//     phone: "+1 (555) 911-HELP",
//     color: "bg-red-600",
//   },
// ];

// export default function Departments() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("name");

//   const filteredDepartments = departments
//     .filter(
//       (dept) =>
//         dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         dept.description.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortBy === "name") return a.name.localeCompare(b.name);
//       if (sortBy === "doctors") return b.doctorCount - a.doctorCount;
//       if (sortBy === "established")
//         return parseInt(a.established) - parseInt(b.established);
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               Our Departments
//             </h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Comprehensive medical departments staffed with expert physicians
//               and equipped with state-of-the-art technology to provide
//               exceptional healthcare services.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Search and Filter */}
//       <section className="py-8 bg-white/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <div className="relative flex-1 max-w-md">
//               <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <Input
//                 placeholder="Search departments..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//             </div>

//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">Sort by:</span>
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-40">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="name">Name</SelectItem>
//                   <SelectItem value="doctors">Doctor Count</SelectItem>
//                   <SelectItem value="established">Established</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Departments Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredDepartments.map((department, index) => (
//               <motion.div
//                 key={department.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden">
//                   <div className="aspect-video relative">
//                     <Image
//                       src={department.image}
//                       alt={department.name}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                     <div className="absolute bottom-4 left-4 text-white">
//                       <div
//                         className={`w-12 h-12 ${department.color} rounded-full flex items-center justify-center mb-2`}
//                       >
//                         <department.icon className="w-6 h-6 text-white" />
//                       </div>
//                       <h3 className="text-xl font-bold">{department.name}</h3>
//                     </div>
//                     <div className="absolute top-4 right-4">
//                       <Badge className="bg-white/20 text-white border-white/30">
//                         Est. {department.established}
//                       </Badge>
//                     </div>
//                   </div>

//                   <CardContent className="p-6">
//                     <p className="text-gray-600 mb-4">
//                       {department.description}
//                     </p>

//                     <div className="space-y-3 mb-4">
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-gray-500">Department Head:</span>
//                         <span className="font-medium">{department.head}</span>
//                       </div>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-gray-500">Doctors:</span>
//                         <span className="font-medium">
//                           {department.doctorCount}
//                         </span>
//                       </div>
//                       <div className="flex items-center space-x-2 text-sm text-gray-600">
//                         <Clock className="w-4 h-4" />
//                         <span>{department.availability}</span>
//                       </div>
//                       <div className="flex items-center space-x-2 text-sm text-gray-600">
//                         <Phone className="w-4 h-4" />
//                         <span>{department.phone}</span>
//                       </div>
//                     </div>

//                     <div className="mb-4">
//                       <h4 className="font-semibold text-sm text-gray-900 mb-2">
//                         Key Services:
//                       </h4>
//                       <div className="flex flex-wrap gap-1">
//                         {department.services.slice(0, 3).map((service) => (
//                           <Badge
//                             key={service}
//                             variant="secondary"
//                             className="text-xs"
//                           >
//                             {service}
//                           </Badge>
//                         ))}
//                         {department.services.length > 3 && (
//                           <Badge variant="secondary" className="text-xs">
//                             +{department.services.length - 3} more
//                           </Badge>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex space-x-2">
//                       <Button className="flex-1" size="sm">
//                         <Calendar className="w-4 h-4 mr-2" />
//                         Book Appointment
//                       </Button>
//                       <Button variant="outline" size="sm">
//                         <ArrowRight className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {filteredDepartments.length === 0 && (
//             <div className="text-center py-16">
//               <Stethoscope className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 No departments found
//               </h3>
//               <p className="text-gray-600">
//                 Try adjusting your search criteria to find the department you're
//                 looking for.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl lg:text-4xl font-bold mb-6">
//               Need Medical Care?
//             </h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//               Our expert medical teams across all departments are ready to
//               provide you with the highest quality care. Contact us today.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//               <Button size="lg" variant="secondary">
//                 <Calendar className="w-5 h-5 mr-2" />
//                 Book Appointment
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-white border-white hover:bg-white hover:text-blue-600"
//               >
//                 <Phone className="w-5 h-5 mr-2" />
//                 Emergency: 911
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart,
  Brain,
  Baby,
  Eye,
  Bone,
  Stethoscope,
  Users,
  Clock,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  Search,
  Filter,
  X,
  Info,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    description:
      "Comprehensive heart care with advanced cardiac procedures and treatments for all cardiovascular conditions.",
    icon: Heart,
    image: "/Cardiac-Surgery.jpg",
    head: "Dr. Michael Chen",
    doctorCount: 8,
    services: [
      "Cardiac Catheterization",
      "Angioplasty",
      "Heart Surgery",
      "Pacemaker Implantation",
    ],
    established: "2015",
    availability: "24/7 Emergency, Mon-Fri 8AM-6PM",
    phone: "+91 7554261002",
    color: "bg-red-500",
    detailedInfo: {
      overview:
        "Our Cardiology department is equipped with state-of-the-art technology and staffed by board-certified cardiologists who specialize in diagnosing and treating heart conditions. We offer comprehensive cardiac care from preventive screenings to complex surgical procedures.",
      facilities: [
        "Cardiac Catheterization Lab",
        "Electrophysiology Lab",
        "Cardiac Rehabilitation Center",
        "24/7 Cardiac ICU",
        "Non-invasive Cardiology Suite",
      ],
      specialties: [
        "Interventional Cardiology",
        "Electrophysiology",
        "Heart Failure Management",
        "Preventive Cardiology",
        "Cardiac Surgery",
      ],
      achievements: [
        "Joint Commission Certified",
        "Top 50 Cardiovascular Hospitals",
        "5-Star Rating for Heart Care",
        "Advanced Heart Failure Center",
      ],
    },
  },
  {
    id: 2,
    name: "Neurology",
    description:
      "Advanced neurological care for brain and spine conditions with cutting-edge technology.",
    icon: Brain,
    image: "/Neurology-4.jpg",
    head: "Dr. Sanjana Gupta",
    doctorCount: 6,
    services: [
      "Brain Surgery",
      "Spine Surgery",
      "Stroke Treatment",
      "Epilepsy Management",
    ],
    established: "2016",
    availability: "Mon-Fri 8AM-5PM, Emergency 24/7",
    phone: "+91 7554261002",
    color: "bg-purple-500",
    detailedInfo: {
      overview:
        "Our Neurology department provides comprehensive care for disorders of the brain, spinal cord, and nervous system. We combine advanced diagnostic capabilities with innovative treatment options to deliver exceptional neurological care.",
      facilities: [
        "Advanced MRI and CT Imaging",
        "Neurological ICU",
        "Epilepsy Monitoring Unit",
        "Stroke Unit",
        "Neurosurgical Operating Suites",
      ],
      specialties: [
        "Stroke Care",
        "Epilepsy Treatment",
        "Movement Disorders",
        "Neurosurgery",
        "Neuro-rehabilitation",
      ],
      achievements: [
        "Comprehensive Stroke Center",
        "Level 4 Epilepsy Center",
        "Advanced Neurosurgery Program",
        "Research Excellence Award",
      ],
    },
  },
  {
    id: 3,
    name: "Pediatrics",
    description:
      "Specialized care for children from birth to adolescence with family-centered approach.",
    icon: Baby,
    image: "gallery/Pediatrics OPD Director_s.jpg",
    head: "Dr. Sarah Johnson",
    doctorCount: 5,
    services: [
      "Newborn Care",
      "NICU Level 2",
      "Pediatric Surgery",
      "Vaccination Programs",
    ],
    established: "2017",
    availability: "Mon-Sat 8AM-8PM, NICU 24/7",
    phone: "+91 7554261002",
    color: "bg-pink-500",
    detailedInfo: {
      overview:
        "Our Pediatrics department provides comprehensive healthcare for infants, children, and adolescents. We focus on family-centered care with specialized pediatric facilities designed to create a comfortable and healing environment for young patients.",
      facilities: [
        "Level 2 NICU",
        "Pediatric Emergency Department",
        "Child-Friendly Imaging Center",
        "Pediatric Surgery Suites",
        "Family-Centered Care Units",
      ],
      specialties: [
        "Neonatology",
        "Pediatric Surgery",
        "Developmental Pediatrics",
        "Pediatric Cardiology",
        "Child Psychology",
      ],
      achievements: [
        "Baby-Friendly Hospital",
        "Pediatric Quality Award",
        "Child Life Certified",
        "Family-Centered Care Recognition",
      ],
    },
  },
  {
    id: 4,
    name: "Orthopedics",
    description:
      "Complete bone, joint, and muscle care with advanced treatments and rehabilitation.",
    icon: Bone,
    image: "/orthopedic-4.jpg",
    head: "Dr. James Wilson",
    doctorCount: 7,
    services: [
      "Joint Replacement",
      "Arthroscopy",
      "Sports Medicine",
      "Trauma Surgery",
    ],
    established: "2018",
    availability: "Mon-Fri 7AM-6PM, Emergency 24/7",
    phone: "+91 7554261002",
    color: "bg-blue-500",
    detailedInfo: {
      overview:
        "Our Orthopedics department specializes in the diagnosis and treatment of musculoskeletal conditions. From sports injuries to joint replacements, we provide comprehensive orthopedic care using the latest surgical techniques and rehabilitation protocols.",
      facilities: [
        "Advanced Surgical Suites",
        "Sports Medicine Center",
        "Rehabilitation Gym",
        "Imaging and Diagnostics",
        "Outpatient Surgery Center",
      ],
      specialties: [
        "Joint Replacement Surgery",
        "Sports Medicine",
        "Spine Surgery",
        "Trauma Surgery",
        "Arthroscopic Surgery",
      ],
      achievements: [
        "Blue Distinction Center",
        "Joint Commission Certified",
        "Sports Medicine Excellence",
        "Trauma Center Level II",
      ],
    },
  },
  {
    id: 5,
    name: "Gynecology",
    description:
      "Comprehensive women's health and maternity services with personalized care.",
    icon: Heart,
    image: "/gallery/Gynae OT.jpg",
    head: "Dr. Sherry Ross",
    doctorCount: 6,
    services: [
      "Prenatal Care",
      "Labor & Delivery",
      "Gynecological Surgery",
      "Fertility Treatment",
    ],
    established: "2016",
    availability: "Mon-Sat 8AM-6PM, Delivery 24/7",
    phone: "+91 7554261002",
    color: "bg-teal-500",
    detailedInfo: {
      overview:
        "Our Women's Health department provides comprehensive gynecological and obstetric care throughout all stages of a woman's life. We offer personalized care with a focus on comfort, safety, and positive outcomes for mothers and babies.",
      facilities: [
        "Labor and Delivery Suites",
        "NICU Level 2",
        "Women's Imaging Center",
        "Fertility Clinic",
        "Minimally Invasive Surgery Center",
      ],
      specialties: [
        "High-Risk Pregnancy Care",
        "Minimally Invasive Surgery",
        "Fertility and Reproductive Health",
        "Gynecologic Oncology",
        "Maternal-Fetal Medicine",
      ],
      achievements: [
        "Baby-Friendly Designation",
        "Women's Choice Award",
        "High-Risk Pregnancy Center",
        "Fertility Success Recognition",
      ],
    },
  },
  {
    id: 6,
    name: "Emergency Medicine",
    description:
      "24/7 emergency care with state-of-the-art trauma center and critical care.",
    icon: Stethoscope,
    image: "/gallery/Emergency Room.jpg",
    head: "Dr. Robert Martinez",
    doctorCount: 12,
    services: [
      "Trauma Care",
      "Critical Care",
      "Emergency Surgery",
      "Cardiac Emergency",
    ],
    established: "2015",
    availability: "24/7",
    phone: "+91 7554261002",
    color: "bg-red-600",
    detailedInfo: {
      overview:
        "Our Emergency Department provides 24/7 emergency medical care with a full-service trauma center. Our emergency medicine physicians and trauma surgeons are available around the clock to handle all types of medical emergencies.",
      facilities: [
        "Level II Trauma Center",
        "Emergency Operating Rooms",
        "Critical Care Units",
        "Helicopter Landing Pad",
        "Advanced Life Support",
      ],
      specialties: [
        "Trauma Surgery",
        "Emergency Medicine",
        "Critical Care",
        "Cardiac Emergency",
        "Pediatric Emergency",
      ],
      achievements: [
        "Level II Trauma Verification",
        "Emergency Medicine Excellence",
        "Stroke Ready Hospital",
        "Cardiac Emergency Certified",
      ],
    },
  },
];
type Department = (typeof departments)[number];

export default function Departments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);

  const filteredDepartments = departments
    .filter(
      (dept) =>
        dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "doctors") return b.doctorCount - a.doctorCount;
      if (sortBy === "established")
        return parseInt(a.established) - parseInt(b.established);
      return 0;
    });

  const openModal = (department: any) => {
    setSelectedDepartment(department);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedDepartment(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Departments
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive medical departments staffed with expert physicians
              and equipped with state-of-the-art technology to provide
              exceptional healthcare services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="doctors">Doctor Count</SelectItem>
                  {/* <SelectItem value="established">Established</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((department, index) => (
              <motion.div
                key={department.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={department.image}
                      alt={department.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div
                        className={`w-12 h-12 ${department.color} rounded-full flex items-center justify-center mb-2`}
                      >
                        <department.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{department.name}</h3>
                    </div>
                    {/* <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        Est. {department.established}
                      </Badge>
                    </div> */}
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">
                      {department.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      {/* <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Department Head:</span>
                        <span className="font-medium">{department.head}</span>
                      </div> */}
                      {/* <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Doctors:</span>
                        <span className="font-medium">
                          {department.doctorCount}
                        </span>
                      </div> */}
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{department.availability}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{department.phone}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">
                        Key Services:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {department.services.slice(0, 3).map((service) => (
                          <Badge
                            key={service}
                            variant="secondary"
                            className="text-xs"
                          >
                            {service}
                          </Badge>
                        ))}
                        {department.services.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{department.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        className="flex-1"
                        size="sm"
                        onClick={() => window.open("/contact", "_blank")}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openModal(department)}
                      >
                        <Info className="w-4 h-4 mr-1" />
                        Know More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredDepartments.length === 0 && (
            <div className="text-center py-16">
              <Stethoscope className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No departments found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria to find the department you're
                looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Department Details Modal */}
      {selectedDepartment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="relative">
              <div className="aspect-video relative">
                <Image
                  src={selectedDepartment.image}
                  alt={selectedDepartment.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div
                    className={`w-16 h-16 ${selectedDepartment.color} rounded-full flex items-center justify-center mb-3`}
                  >
                    <selectedDepartment.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    {selectedDepartment.name}
                  </h2>
                  <p className="text-blue-100 mt-2">
                    {selectedDepartment.description}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Overview
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedDepartment.detailedInfo.overview}
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Department Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    {/* <div className="flex justify-between">
                      <span className="text-gray-600">Head of Department:</span>
                      <span className="font-medium">
                        {selectedDepartment.head}
                      </span>
                    </div> */}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Doctors:</span>
                      <span className="font-medium">
                        {selectedDepartment.doctorCount}
                      </span>
                    </div>
                    {/* <div className="flex justify-between">
                      <span className="text-gray-600">Established:</span>
                      <span className="font-medium">
                        {selectedDepartment.established}
                      </span>
                    </div> */}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-green-600" />
                    Contact Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">
                        {selectedDepartment.phone}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-medium text-xs">
                        {selectedDepartment.availability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Facilities & Equipment
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedDepartment.detailedInfo.facilities.map(
                    (facility, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{facility}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Medical Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDepartment.detailedInfo.specialties.map(
                    (specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-3 py-1"
                      >
                        {specialty}
                      </Badge>
                    )
                  )}
                </div>
              </div>

              {/* All Services */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  All Services
                </h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedDepartment.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Achievements & Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedDepartment.detailedInfo.achievements.map(
                    (achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <Button className="flex-1" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Department
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Medical Care?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert medical teams across all departments are ready to
              provide you with the highest quality care. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" variant="secondary">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency: 911
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
