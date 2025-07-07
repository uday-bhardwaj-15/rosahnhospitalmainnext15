"use client";

import { Heart, CreditCard, CheckCircle, Shield } from "lucide-react";

export default function HospitalSection() {
  return (
    <section className="py-8 bg-gradient-to-r from-orange-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                प्रधानमंत्री{" "}
                <span className="text-orange-600">आयुष्मान भारत योजना</span>
              </h3>
              <p className="text-sm text-green-600 font-medium">
                Ayushman Bharat Empaneled Hospital
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              We provide cashless healthcare services under PradhanMantri
              Ayushman Yojna for Identified Services Only
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-orange-50 px-3 py-1 rounded-full">
                <CreditCard className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 font-medium">
                  Cashless Treatment
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-700 font-medium">
                  ₹5 Lakh Coverage
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-medium">
                  Verified Provider
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
