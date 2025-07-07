"use client";

import { Building2, Heart, Star, Shield, HandHeart, Users } from "lucide-react";

const organizations = [
  "Star Health Insurance",
  "TATA AIG",
  "HDFC Ergo GIC",
  "Bajaj Allianz",
  "FHPL",
  "Iffco-Tokio",
  "Chola Mandalam",
  "Ericson Insurance",
  "Medi-Assist",
  "Paramount",
  "Liberty General Insurance",
  "Health India TPA",
  "Good Health Insurance",
  "Niva Bupa",
  "HITPA",
  "Reliance General Insurance",
  "SBI General Insurance",
  "Go Digit General Insurance",
  "Aditya Birla",
];

export default function EmpanelmentSection() {
  return (
    <>
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Empanelment with more than 20+{" "}
                <span className="text-blue-600">Insurance Companies</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are empaneled with leading insurance providers to ensure
              seamless healthcare coverage for our patients
            </p>
          </div>

          {/* Animated Carousel */}
          <div className="relative mb-8">
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-8 whitespace-nowrap">
                {/* First set */}
                {organizations.map((org, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 px-6 py-4 border border-gray-100 min-w-[250px]"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800 text-sm">
                        {org}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {organizations.map((org, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 px-6 py-4 border border-gray-100 min-w-[250px]"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800 text-sm">
                        {org}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* cm */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-yellow-200 shadow-md mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Associated with{" "}
                <span className="text-orange-600">CM Relief Fund</span>
              </h3>
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">
                We offer medical services under the CM Relief Fund scheme,
                ensuring affordable care for eligible patients.
              </p>
              {/* <div className="flex items-center justify-center space-x-2 mt-3">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-600">
                  Dedicated pediatric services for our little patients
                </span>
              </div> */}
            </div>
          </div>
          {/* BHEL Special Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 shadow-md">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Special Care for{" "}
                <span className="text-orange-600">BHEL Little Stars</span>
              </h3>
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">
                We provide specialized pediatric care exclusively for BHEL
                employees' children
              </p>
              <div className="flex items-center justify-center space-x-2 mt-3">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-600">
                  Dedicated pediatric services for our little patients
                </span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
}
