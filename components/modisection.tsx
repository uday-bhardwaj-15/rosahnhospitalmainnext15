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
    <section className="py-16 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45 -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45 translate-x-20 -translate-y-20"></div>
        <div className="absolute top-32 right-32 w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 -translate-x-18 translate-y-18"></div>
        <div className="absolute bottom-20 left-40 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45 translate-x-16 translate-y-16"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                प्रधानमंत्री{" "}
                <span className="text-orange-600">आयुष्मान भारत </span>
              </h2>
              <p className="text-lg text-green-600 font-semibold">
                Pradhan Mantri Jan Arogya Yojana (PM-JAY)
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We are proud to be an empaneled hospital under the Ayushman Bharat
            scheme, providing cashless healthcare services to eligible
            beneficiaries across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Information Card */}
          <div className="animate-fade-in-left">
            <div className="bg-gradient-to-br from-white via-orange-50 to-green-50 rounded-3xl shadow-2xl p-8 border-2 border-gradient-to-r from-orange-200 to-green-200 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 transform rotate-45 translate-x-12 -translate-y-12"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 opacity-20 transform rotate-45 -translate-x-10 translate-y-10"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <Stethoscope className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      PM-JAY Empaneled Hospital
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-orange-500 fill-current" />
                      <span className="text-green-600 font-semibold">
                        Verified Healthcare Provider
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Coverage Benefits */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <CreditCard className="w-6 h-6 text-orange-600 mr-2" />
                      Coverage Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          ₹5 Lakh Coverage
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          Cashless Treatment
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          No Waiting Period
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          Family Coverage
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Process */}
                  <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      <FileText className="w-6 h-6 mr-2" />
                      Quick Admission Process
                    </h4>
                    <p className="text-orange-100 leading-relaxed">
                      Simply present your Ayushman Bharat card at our admission
                      desk. Our dedicated PM-JAY team will handle all
                      formalities for seamless, cashless treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {ayushmanFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-fade-in-up-stagger hover:animate-hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group relative overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Help Desk Card */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 transform rotate-45 translate-x-8 -translate-y-8"></div>

              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <UserCheck className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  PM-JAY Help Desk
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our dedicated Ayushman Bharat support team is available 24/7
                  to assist you with card verification, treatment authorization,
                  and any queries.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3 bg-white rounded-lg p-3 shadow-md">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-900">
                      +91 98765 43210
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 bg-white rounded-lg p-3 shadow-md">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-900">
                      pmjay@roshanhospital.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
