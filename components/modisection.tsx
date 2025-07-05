"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
  CreditCard,
  CheckCircle,
  FileText,
  UserCheck,
  Star,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Replace with your button
const ayushmanFeatures = [
  {
    icon: CreditCard,
    title: "Cashless Treatment",
    description:
      "Direct billing facility for all Ayushman Bharat beneficiaries",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: CheckCircle,
    title: "Verified Provider",
    description: "Empaneled hospital under PM-JAY scheme",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FileText,
    title: "Easy Documentation",
    description: "Simplified admission process with minimal paperwork",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: UserCheck,
    title: "Dedicated Support",
    description: "Specialized team to assist Ayushman card holders",
    color: "from-green-500 to-green-600",
  },
];
export default function HospitalSection() {
  return (
    <section className="py-16 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                प्रधानमंत्री{" "}
                <span className="text-orange-600">आयुष्मान भारत योजना</span>
              </h2>
              <p className="text-lg text-green-600 font-semibold">
                Pradhan Mantri Jan Arogya Yojana
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We are proud to be an empaneled hospital under the Ayushman Bharat
            scheme, providing cashless healthcare services to eligible
            beneficiaries across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center p-6 border border-orange-100">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Cashless Treatment
            </h3>
            <p className="text-gray-600">
              Direct billing facility for all Ayushman Bharat beneficiaries
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center p-6 border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ₹5 Lakh Coverage
            </h3>
            <p className="text-gray-600">
              Comprehensive health coverage per family per year
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center p-6 border border-orange-100">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Easy Documentation
            </h3>
            <p className="text-gray-600">
              Simplified admission process with minimal paperwork
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center p-6 border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Dedicated Support
            </h3>
            <p className="text-gray-600">
              Specialized team to assist Ayushman card holders
            </p>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Stethoscope className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                PM-JAY Help Desk
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Our dedicated Ayushman Bharat support team is available 24/7 to
              assist you with card verification, treatment authorization, and
              any queries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-900">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">
                  pmjay@roshanhospital.com
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
