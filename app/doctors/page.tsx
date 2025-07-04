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

// const doctors = [
//   {
//     id: 1,
//     name: "Dr. Sandesh yadav",
//     specialty: "Anesthesiologist",
//     subSpecialty: "Joint Replacement & Sports Injury",
//     image: "/doctors/Dr anurag tiwari orthopedics.jpg",
//     rating: 4.7,
//     reviews: 245,
//     experience: "10 years",
//     education: "MBBS, MS (Orthopedics)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$170",
//     about:
//       "Dr. Sandesh yadav specializes in joint replacements and sports injuries. He is known for minimally invasive techniques and patient-centric care.",
//     achievements: [
//       "Board Certified Orthopedic Surgeon",
//       "Member of Indian Orthopedic Association",
//       "Performed 1000+ Knee Replacements",
//       "Orthopedic Care Award 2022",
//     ],
//     availability: ["Mon", "Tue", "Thu", "Sat"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4573",
//     email: "dr.anurag@roshanhospital.com",
//   },
//   {
//     id: 2,
//     name: "Dr. Anurag Tiwari",
//     specialty: "Orthopedics",
//     subSpecialty: "Child Health & Immunization",
//     image: "/doctors/Dranuragtiwari.jpg",
//     rating: 4.8,
//     reviews: 320,
//     experience: "13 years",
//     education: "MD (Pediatrics), DCH",
//     languages: ["English", "Hindi"],
//     consultationFee: "$160",
//     about:
//       "Dr. Anurag Tiwari are renowned for their dedication to child health and timely immunizations, offering trusted care for infants to teens.",
//     achievements: [
//       "Joint Pediatric Practice",
//       "Excellence in Child Care 2021",
//       "Advocates for Vaccination Awareness",
//       "Members of Indian Academy of Pediatrics",
//     ],
//     availability: ["Mon", "Wed", "Fri"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4574",
//     email: "dr.sukheja-jain@roshanhospital.com",
//   },
//   {
//     id: 3,
//     name: "Dr. Rajni Sukheja",
//     specialty:
//       "Dip G.O. NARCHI Director & Consultant gynecologist and obstetrician",
//     subSpecialty: "Family Medicine",
//     image: "/doctors/Madam Photo3.jpg",
//     rating: 4.6,
//     reviews: 198,
//     experience: "9 years",
//     education: "MBBS, MD (Internal Medicine)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$130",
//     about:
//       "Dr. Rajni Sukheja provides compassionate and continuous care for families, treating everything from fevers to chronic conditions.",
//     achievements: [
//       "Board Certified General Physician",
//       "Family Doctor of the Year 2023",
//       "Preventive Care Advocate",
//       "Telemedicine Specialist",
//     ],
//     availability: ["Tue", "Thu", "Sat"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4575",
//     email: "dr.neha@roshanhospital.com",
//   },
//   {
//     id: 4,
//     name: "Dr. Sumit Bhatnagar",
//     specialty: "Cardiologist",
//     subSpecialty: "Skin Care & Aesthetics",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.04.54_488f52d4.jpg",
//     rating: 4.9,
//     reviews: 312,
//     experience: "11 years",
//     education: "MBBS, MD (Dermatology)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$160",
//     about:
//       "Dr. Sumit Bhatnagar is an expert in treating skin disorders and performing aesthetic procedures with excellent patient satisfaction.",
//     achievements: [
//       "Skin Specialist of the Year 2022",
//       "Advanced Laser Certification",
//       "Member of Indian Association of Dermatologists",
//       "Published 20+ Research Articles",
//     ],
//     availability: ["Mon", "Wed", "Fri"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4576",
//     email: "dr.arjun@roshanhospital.com",
//   },
//   {
//     id: 5,
//     name: "Dr. Saket jha",
//     specialty: "Pediatric surgeon",
//     subSpecialty: "Ear, Nose & Throat Surgery",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.05.26_410e096b.jpg",
//     rating: 4.8,
//     reviews: 207,
//     experience: "12 years",
//     education: "MBBS, MS (ENT)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$150",
//     about:
//       "Dr. Saket jha is an ENT specialist who has performed numerous successful surgeries and provides relief from chronic ENT issues.",
//     achievements: [
//       "Board Certified ENT Surgeon",
//       "Fellowship in Head & Neck Surgery",
//       "ENT Surgeon of the Year 2023",
//       "Active Member of AOI",
//     ],
//     availability: ["Tue", "Thu", "Sat"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4577",
//     email: "dr.kavita@roshanhospital.com",
//   },
//   {
//     id: 6,
//     name: "Dr. Raghvendra raghuvanshi ",
//     specialty: "MS Spine surgeon",
//     subSpecialty: "Kidney Stones & Prostate Care",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.05.43_4fce215c.jpg",
//     rating: 4.7,
//     reviews: 168,
//     experience: "10 years",
//     education: "MBBS, MS, MCh (Urology)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$180",
//     about:
//       "Dr. Varma is known for his expertise in treating urinary tract conditions and performing minimally invasive urological surgeries.",
//     achievements: [
//       "Advanced Urology Certification",
//       "Kidney Stone Expert",
//       "Member of USI",
//       "Awarded for Surgical Excellence",
//     ],
//     availability: ["Mon", "Wed", "Fri"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4578",
//     email: "dr.varma@roshanhospital.com",
//   },
//   {
//     id: 7,
//     name: "Dr. Harishankar",
//     specialty: "MCH burn and plastic surgery",
//     subSpecialty: "Breast & Gynecologic Oncology",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.06.01_2367c295.jpg",
//     rating: 4.9,
//     reviews: 240,
//     experience: "13 years",
//     education: "MBBS, MD, DM (Oncology)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$220",
//     about:
//       "Dr. Harishankar specializes in oncology with a focus on breast and gynecologic cancers, providing compassionate care through treatment.",
//     achievements: [
//       "Cancer Care Excellence Award 2023",
//       "Head of Oncology Department",
//       "Member of ASCO",
//       "Published 30+ Clinical Studies",
//     ],
//     availability: ["Mon", "Tue", "Thu"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4579",
//     email: "dr.priya@roshanhospital.com",
//   },
//   {
//     id: 8,
//     name: "Dr. Sanjeev Jain",
//     specialty: "DCH pediatrician",
//     subSpecialty: "Imaging & Diagnostics",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.06.17_8b0013f6.jpg",
//     rating: 4.6,
//     reviews: 155,
//     experience: "8 years",
//     education: "MBBS, MD (Radiodiagnosis)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$140",
//     about:
//       "Dr. Sanjeev Jain delivers accurate and timely diagnostics using modern imaging tools including MRI, CT, and ultrasound.",
//     achievements: [
//       "Imaging Expert of the Year 2022",
//       "AI-based Radiology Researcher",
//       "Fellowship in Interventional Radiology",
//       "Active Member of IRIA",
//     ],
//     availability: ["Mon", "Wed", "Sat"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4580",
//     email: "dr.vikram@roshanhospital.com",
//   },
//   {
//     id: 9,
//     name: "Dr. Jitendra piple",
//     specialty: "MD & Pediatrician",
//     subSpecialty: "Diabetes & Hormonal Disorders",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.07.11_0fcfaabe.jpg",
//     rating: 4.7,
//     reviews: 201,
//     experience: "9 years",
//     education: "MBBS, MD, DM (Endocrinology)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$185",
//     about:
//       "Dr. Jitendra piple is a specialist in managing diabetes, thyroid disorders, and other hormonal imbalances using modern treatment methods.",
//     achievements: [
//       "Hormone Specialist Certification",
//       "Endocrinology Excellence Award",
//       "Member of ESI",
//       "Diabetes Awareness Advocate",
//     ],
//     availability: ["Tue", "Thu", "Sat"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4581",
//     email: "dr.ritu@roshanhospital.com",
//   },
//   {
//     id: 10,
//     name: "Dr. Rakesh Sukheja MD & Director",
//     specialty: "Senior pediatrician",
//     subSpecialty: "Lung Disease & Asthma",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.08.24_90bd137b.jpg",
//     rating: 4.6,
//     reviews: 175,
//     experience: "8 years",
//     education: "MBBS, MD (Pulmonology)",
//     languages: ["English", "Hindi", "Urdu"],
//     consultationFee: "$160",
//     about:
//       "Dr. Rakesh Sukheja MD focuses on treating respiratory disorders such as asthma, COPD, and infections with a holistic and personalized approach.",
//     achievements: [
//       "Pulmonary Care Specialist",
//       "Active TB Eradication Member",
//       "Lung Health Campaigner",
//       "Award for Research in Asthma Care",
//     ],
//     availability: ["Mon", "Wed", "Fri"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4582",
//     email: "dr.aman@roshanhospital.com",
//   },
//   {
//     id: 11,
//     name: "Dr.  Anil kori",
//     specialty: "MD Anesthesia and Critical Care ",
//     subSpecialty: "Behavioral Therapy",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.08.38_9ab1f4e3.jpg",
//     rating: 4.9,
//     reviews: 210,
//     experience: "7 years",
//     education: "PhD (Clinical Psychology)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$150",
//     about:
//       "Dr.  Anil kori uses cognitive-behavioral and mindfulness techniques to support patients with anxiety, trauma, and stress disorders.",
//     achievements: [
//       "Certified CBT Practitioner",
//       "Mental Health Awareness Leader",
//       "Women's Wellness Advocate",
//       "Top Psychologist Award 2024",
//     ],
//     availability: ["Tue", "Thu", "Sat"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4583",
//     email: "dr.saira@roshanhospital.com",
//   },
//   {
//     id: 12,
//     name: "Dr. Aparna Tiwari",
//     specialty: "Sonologist",
//     subSpecialty: "Kidney Disease & Dialysis",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.08.51_bf3ab21b.jpg",
//     rating: 4.8,
//     reviews: 193,
//     experience: "10 years",
//     education: "MBBS, MD, DM (Nephrology)",
//     languages: ["English", "Malayalam", "Hindi"],
//     consultationFee: "$200",
//     about:
//       "Dr. Aparna Tiwari is an expert in managing chronic kidney disease, dialysis therapy, and renal transplants with a compassionate approach.",
//     achievements: [
//       "Senior Consultant in Nephrology",
//       "Kidney Health Initiative Member",
//       "Dialysis Care Champion",
//       "Published 15 Research Papers",
//     ],
//     availability: ["Mon", "Wed", "Fri"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4584",
//     email: "dr.abhay@roshanhospital.com",
//   },
//   {
//     id: 13,
//     name: "Dr. Ajay jain ",
//     specialty: "Pediatric & Neonatal surgeon",
//     subSpecialty: "Cataract & Vision Correction",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.09.24_3bc960da.jpg",
//     rating: 4.7,
//     reviews: 174,
//     experience: "11 years",
//     education: "MBBS, MS (Ophthalmology)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$160",
//     about:
//       "Dr. Ajay jain  provides eye care including cataract surgery, LASIK, and glaucoma management with state-of-the-art techniques.",
//     achievements: [
//       "Fellowship in Phaco Surgery",
//       "Award for Community Eye Care",
//       "Vision Awareness Advocate",
//       "Top Eye Surgeon 2022",
//     ],
//     availability: ["Mon", "Thu", "Sat"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4585",
//     email: "dr.shruti@roshanhospital.com",
//   },
//   {
//     id: 14,
//     name: "Dr. N.K pehlajani",
//     specialty: "Pathology",
//     subSpecialty: "Digestive Health & Endoscopy",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 13.09.37_9798f534.jpg",
//     rating: 4.6,
//     reviews: 168,
//     experience: "10 years",
//     education: "MBBS, MD, DM (Gastroenterology)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$180",
//     about:
//       "Dr. N.K pehlajani treats digestive issues, liver disorders, and performs endoscopic procedures for accurate diagnosis and treatment.",
//     achievements: [
//       "Member of Indian Society of Gastroenterology",
//       "Liver Disease Awareness Leader",
//       "Colonoscopy Expert",
//       "Top GI Doctor 2023",
//     ],
//     availability: ["Tue", "Wed", "Fri"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4586",
//     email: "dr.faizan@roshanhospital.com",
//   },
//   {
//     id: 15,
//     name: "Dr. Richa tiwari",
//     specialty: "MS consultant gynecologist and obstetrician",
//     subSpecialty: "Cosmetic & Restorative Dentistry",
//     image: "/doctors/WhatsApp Image 2025-07-04 at 14.34.26_0f33f920.jpg",
//     rating: 4.9,
//     reviews: 233,
//     experience: "9 years",
//     education: "BDS, MDS (Prosthodontics)",
//     languages: ["English", "Hindi"],
//     consultationFee: "$130",
//     about:
//       "Dr. Richa tiwari enhances smiles through cosmetic procedures, implants, and full-mouth rehabilitation with modern dental technology.",
//     achievements: [
//       "Certified Smile Design Expert",
//       "Dental Excellence Award 2023",
//       "Member of Indian Dental Association",
//       "Specialist in Digital Dentistry",
//     ],
//     availability: ["Mon", "Wed", "Sat"],
//     hospital: "Roshan Hospital",
//     phone: "+1 (555) 123-4587",
//     email: "dr.tamanna@roshanhospital.com",
//   },
// ];

const doctors = [
  {
    id: 1,
    name: "Dr. Sandesh yadav",
    specialty: "Anesthesiologist",
    subSpecialty: "Pain Management & Regional Anesthesia",
    image: "/doctors/Dr anurag tiwari orthopedics.jpg",
    rating: 4.7,
    reviews: 245,
    experience: "10 years",
    education: "MBBS, MS (Orthopedics)",
    languages: ["English", "Hindi"],
    consultationFee: "$170",
    about:
      "Dr. Sandesh yadav is a skilled anesthesiologist with expertise in providing safe and effective anesthesia care for various surgical procedures. He specializes in regional anesthesia techniques and pain management, ensuring patient comfort and safety during operations.",
    achievements: [
      "Board Certified Anesthesiologist",
      "Advanced Pain Management Certification",
      "Member of Indian Society of Anesthesiologists",
      "Excellence in Anesthesia Care Award 2022",
    ],
    availability: ["Mon", "Tue", "Thu", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4573",
    email: "dr.anurag@roshanhospital.com",
  },
  {
    id: 2,
    name: "Dr. Anurag Tiwari",
    specialty: "Orthopedics",
    subSpecialty: "Joint Replacement & Sports Injury",
    image: "/doctors/Dranuragtiwari.jpg",
    rating: 4.8,
    reviews: 320,
    experience: "13 years",
    education: "MD (Pediatrics), DCH",
    languages: ["English", "Hindi"],
    consultationFee: "$160",
    about:
      "Dr. Anurag Tiwari is an experienced orthopedic surgeon specializing in bone and joint disorders. He provides comprehensive treatment for fractures, arthritis, and musculoskeletal injuries using both conservative and surgical approaches.",
    achievements: [
      "Board Certified Orthopedic Surgeon",
      "Fellowship in Joint Replacement Surgery",
      "Member of Indian Orthopedic Association",
      "Excellence in Orthopedic Care 2021",
    ],
    availability: ["Mon", "Wed", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4574",
    email: "dr.sukheja-jain@roshanhospital.com",
  },
  {
    id: 3,
    name: "Dr. Rajni Sukheja",
    specialty:
      "Dip G.O. NARCHI Director & Consultant gynecologist and obstetrician",
    subSpecialty: "High-Risk Pregnancy & Women's Health",
    image: "/doctors/Madam Photo3.jpg",
    rating: 4.6,
    reviews: 198,
    experience: "9 years",
    education: "MBBS, MD (Internal Medicine)",
    languages: ["English", "Hindi"],
    consultationFee: "$130",
    about:
      "Dr. Rajni Sukheja is a dedicated gynecologist and obstetrician with NARCHI directorship, providing comprehensive women's healthcare services. As a director and consultant, she specializes in pregnancy care, childbirth, gynecological disorders, and leads the women's health department with expertise in high-risk pregnancies.",
    achievements: [
      "NARCHI Director & Consultant Gynecologist",
      "Women's Health Excellence Award 2023",
      "High-Risk Pregnancy Specialist",
      "Member of Federation of Obstetric & Gynecological Societies",
    ],
    availability: ["Tue", "Thu", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4575",
    email: "dr.neha@roshanhospital.com",
  },
  {
    id: 4,
    name: "Dr. Sumit Bhatnagar",
    specialty: "Cardiologist",
    subSpecialty: "Interventional Cardiology & Heart Disease",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.04.54_488f52d4.jpg",
    rating: 4.9,
    reviews: 312,
    experience: "11 years",
    education: "MBBS, MD (Dermatology)",
    languages: ["English", "Hindi"],
    consultationFee: "$160",
    about:
      "Dr. Sumit Bhatnagar is a renowned cardiologist specializing in heart diseases and cardiovascular conditions. He provides expert diagnosis and treatment for heart attacks, hypertension, arrhythmias, and preventive cardiac care using advanced diagnostic techniques.",
    achievements: [
      "Board Certified Cardiologist",
      "Fellowship in Interventional Cardiology",
      "Member of Cardiological Society of India",
      "Heart Care Excellence Award 2022",
    ],
    availability: ["Mon", "Wed", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4576",
    email: "dr.arjun@roshanhospital.com",
  },
  {
    id: 5,
    name: "Dr. Saket jha",
    specialty: "Pediatric surgeon",
    subSpecialty: "Neonatal Surgery & Congenital Anomalies",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.05.26_410e096b.jpg",
    rating: 4.8,
    reviews: 207,
    experience: "12 years",
    education: "MBBS, MS (ENT)",
    languages: ["English", "Hindi"],
    consultationFee: "$150",
    about:
      "Dr. Saket jha is a skilled pediatric surgeon specializing in surgical procedures for infants, children, and adolescents. He provides expert care for congenital anomalies, pediatric trauma, and various surgical conditions affecting children with minimally invasive techniques.",
    achievements: [
      "Board Certified Pediatric Surgeon",
      "Fellowship in Pediatric Minimal Access Surgery",
      "Member of Indian Association of Pediatric Surgeons",
      "Excellence in Pediatric Surgery Award 2023",
    ],
    availability: ["Tue", "Thu", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4577",
    email: "dr.kavita@roshanhospital.com",
  },
  {
    id: 6,
    name: "Dr. Raghvendra raghuvanshi",
    specialty: "MS Spine surgeon",
    subSpecialty: "Spinal Deformity & Minimally Invasive Surgery",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.05.43_4fce215c.jpg",
    rating: 4.7,
    reviews: 168,
    experience: "10 years",
    education: "MBBS, MS, MCh (Urology)",
    languages: ["English", "Hindi"],
    consultationFee: "$180",
    about:
      "Dr. Raghvendra raghuvanshi is a specialized spine surgeon with expertise in treating spinal disorders, disc problems, and spinal deformities. He performs complex spinal surgeries including fusion procedures and minimally invasive spine surgery with excellent outcomes.",
    achievements: [
      "Board Certified Spine Surgeon",
      "Fellowship in Spinal Surgery",
      "Member of Association of Spine Surgeons of India",
      "Excellence in Spine Surgery Award 2022",
    ],
    availability: ["Mon", "Wed", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4578",
    email: "dr.varma@roshanhospital.com",
  },
  {
    id: 7,
    name: "Dr. Harishankar",
    specialty: "MCH burn and plastic surgery",
    subSpecialty: "Reconstructive Surgery & Burn Care",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.06.01_2367c295.jpg",
    rating: 4.9,
    reviews: 240,
    experience: "13 years",
    education: "MBBS, MD, DM (Oncology)",
    languages: ["English", "Hindi"],
    consultationFee: "$220",
    about:
      "Dr. Harishankar is a highly skilled plastic and burn surgeon specializing in reconstructive surgery, burn treatment, and aesthetic procedures. He provides comprehensive care for burn victims and performs complex reconstructive surgeries with excellent cosmetic outcomes.",
    achievements: [
      "MCH Certified Plastic & Burn Surgeon",
      "Fellowship in Reconstructive Surgery",
      "Member of Association of Plastic Surgeons of India",
      "Excellence in Burn Care Award 2023",
    ],
    availability: ["Mon", "Tue", "Thu"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4579",
    email: "dr.priya@roshanhospital.com",
  },
  {
    id: 8,
    name: "Dr. Sanjeev Jain",
    specialty: "DCH pediatrician",
    subSpecialty: "Child Development & Preventive Care",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.06.17_8b0013f6.jpg",
    rating: 4.6,
    reviews: 155,
    experience: "8 years",
    education: "MBBS, MD (Radiodiagnosis)",
    languages: ["English", "Hindi"],
    consultationFee: "$140",
    about:
      "Dr. Sanjeev Jain is a dedicated pediatrician with DCH certification, specializing in comprehensive healthcare for children from birth to adolescence. He provides expert care for childhood illnesses, growth and development monitoring, and preventive healthcare services.",
    achievements: [
      "DCH Certified Pediatrician",
      "Excellence in Child Care Award 2022",
      "Member of Indian Academy of Pediatrics",
      "Child Health Advocate",
    ],
    availability: ["Mon", "Wed", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4580",
    email: "dr.vikram@roshanhospital.com",
  },
  {
    id: 9,
    name: "Dr. Jitendra piple",
    specialty: "MD & Pediatrician",
    subSpecialty: "Adolescent Medicine & Growth Disorders",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.07.11_0fcfaabe.jpg",
    rating: 4.7,
    reviews: 201,
    experience: "9 years",
    education: "MBBS, MD, DM (Endocrinology)",
    languages: ["English", "Hindi"],
    consultationFee: "$185",
    about:
      "Dr. Jitendra piple is an experienced pediatrician with MD qualification, providing comprehensive medical care for children and adolescents. He specializes in childhood diseases, vaccination programs, and developmental pediatrics with a child-friendly approach.",
    achievements: [
      "MD Certified Pediatrician",
      "Excellence in Pediatric Care Award",
      "Member of Indian Academy of Pediatrics",
      "Child Wellness Advocate",
    ],
    availability: ["Tue", "Thu", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4581",
    email: "dr.ritu@roshanhospital.com",
  },
  {
    id: 10,
    name: "Dr. Rakesh Sukheja MD & Director",
    specialty: "Senior pediatrician",
    subSpecialty: "Pediatric Leadership & Complex Cases",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.08.24_90bd137b.jpg",
    rating: 4.6,
    reviews: 175,
    experience: "8 years",
    education: "MBBS, MD (Pulmonology)",
    languages: ["English", "Hindi", "Urdu"],
    consultationFee: "$160",
    about:
      "Dr. Rakesh Sukheja is a senior pediatrician and MD Director with extensive experience in child healthcare. As the MD Director, he leads the pediatric department and provides expert care for complex childhood conditions, growth disorders, and preventive pediatric medicine while overseeing medical operations.",
    achievements: [
      "MD Director & Senior Pediatrician",
      "Leadership in Pediatric Care",
      "Member of Indian Academy of Pediatrics",
      "Medical Director Excellence Award",
    ],
    availability: ["Mon", "Wed", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4582",
    email: "dr.aman@roshanhospital.com",
  },
  {
    id: 11,
    name: "Dr. Anil kori",
    specialty: "MD Anesthesia and Critical Care",
    subSpecialty: "ICU Management & Perioperative Care",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.08.38_9ab1f4e3.jpg",
    rating: 4.9,
    reviews: 210,
    experience: "7 years",
    education: "PhD (Clinical Psychology)",
    languages: ["English", "Hindi"],
    consultationFee: "$150",
    about:
      "Dr. Anil kori is a specialized anesthesiologist and critical care physician providing expert anesthesia services and intensive care management. He ensures patient safety during surgical procedures and manages critically ill patients with advanced life support techniques.",
    achievements: [
      "MD Certified Anesthesiologist",
      "Critical Care Specialist",
      "Member of Indian Society of Anesthesiologists",
      "Excellence in Critical Care Award 2024",
    ],
    availability: ["Tue", "Thu", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4583",
    email: "dr.saira@roshanhospital.com",
  },
  {
    id: 12,
    name: "Dr. Aparna Tiwari",
    specialty: "Sonologist",
    subSpecialty: "Obstetric & Abdominal Ultrasound",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.08.51_bf3ab21b.jpg",
    rating: 4.8,
    reviews: 193,
    experience: "10 years",
    education: "MBBS, MD, DM (Nephrology)",
    languages: ["English", "Malayalam", "Hindi"],
    consultationFee: "$200",
    about:
      "Dr. Aparna Tiwari is a skilled sonologist specializing in ultrasound imaging and diagnostic procedures. She provides accurate diagnostic services using advanced ultrasound technology for various medical conditions including obstetric, gynecological, and abdominal imaging.",
    achievements: [
      "Certified Sonologist",
      "Advanced Ultrasound Imaging Expert",
      "Member of Indian Radiological Society",
      "Excellence in Diagnostic Imaging Award",
    ],
    availability: ["Mon", "Wed", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4584",
    email: "dr.abhay@roshanhospital.com",
  },
  {
    id: 13,
    name: "Dr. Ajay jain",
    specialty: "Pediatric & Neonatal surgeon",
    subSpecialty: "Cataract & Vision Correction",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.09.24_3bc960da.jpg",
    rating: 4.7,
    reviews: 174,
    experience: "11 years",
    education: "MBBS, MS (Ophthalmology)",
    languages: ["English", "Hindi"],
    consultationFee: "$160",
    about:
      "Dr. Ajay jain is a specialized pediatric and neonatal surgeon providing surgical care for newborns and children. He performs complex surgeries for congenital abnormalities, neonatal emergencies, and pediatric surgical conditions with expertise in minimally invasive techniques.",
    achievements: [
      "Certified Pediatric & Neonatal Surgeon",
      "Fellowship in Neonatal Surgery",
      "Member of Indian Association of Pediatric Surgeons",
      "Excellence in Neonatal Care Award 2022",
    ],
    availability: ["Mon", "Thu", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4585",
    email: "dr.shruti@roshanhospital.com",
  },
  {
    id: 14,
    name: "Dr. N.K pehlajani",
    specialty: "Pathology",
    subSpecialty: "Digestive Health & Endoscopy",
    image: "/doctors/WhatsApp Image 2025-07-04 at 13.09.37_9798f534.jpg",
    rating: 4.6,
    reviews: 168,
    experience: "10 years",
    education: "MBBS, MD, DM (Gastroenterology)",
    languages: ["English", "Hindi"],
    consultationFee: "$180",
    about:
      "Dr. N.K pehlajani is a skilled pathologist specializing in diagnostic pathology and laboratory medicine. He provides accurate diagnosis through microscopic examination of tissues, cells, and body fluids, supporting clinical decision-making for various medical conditions.",
    achievements: [
      "Board Certified Pathologist",
      "Excellence in Diagnostic Pathology",
      "Member of Indian Association of Pathologists",
      "Laboratory Medicine Expert",
    ],
    availability: ["Tue", "Wed", "Fri"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4586",
    email: "dr.faizan@roshanhospital.com",
  },
  {
    id: 15,
    name: "Dr. Richa tiwari",
    specialty: "MS consultant gynecologist and obstetrician",
    subSpecialty: "Cosmetic & Restorative Dentistry",
    image: "/doctors/WhatsApp Image 2025-07-04 at 14.34.26_0f33f920.jpg",
    rating: 4.9,
    reviews: 233,
    experience: "9 years",
    education: "BDS, MDS (Prosthodontics)",
    languages: ["English", "Hindi"],
    consultationFee: "$130",
    about:
      "Dr. Richa tiwari is an experienced MS consultant gynecologist and obstetrician providing comprehensive women's healthcare services. She specializes in high-risk pregnancies, gynecological surgeries, and advanced obstetric care with a focus on maternal and fetal well-being.",
    achievements: [
      "MS Certified Gynecologist & Obstetrician",
      "High-Risk Pregnancy Specialist",
      "Member of Federation of Obstetric & Gynecological Societies",
      "Excellence in Women's Health Award 2023",
    ],
    availability: ["Mon", "Wed", "Sat"],
    hospital: "Roshan Hospital",
    phone: "+1 (555) 123-4587",
    email: "dr.tamanna@roshanhospital.com",
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
