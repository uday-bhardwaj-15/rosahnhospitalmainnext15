"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  FileText,
  BarChart3,
  Calendar,
  Settings,
  Plus,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Image,
  LogOut,
  Shield,
} from "lucide-react";
import DoctorsManager from "@/components/admin/DoctorsManager";
import DepartmentsManager from "@/components/admin/DepartmentsManager";
import GalleryManager from "@/components/admin/GalleryManager";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const dashboardStats = [
  {
    title: "Total Doctors",
    value: "24",

    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Departments",
    value: "8",

    icon: Building2,
    color: "bg-green-500",
  },
  {
    title: "Gallery Images",
    value: "156",

    icon: Image,
    color: "bg-purple-500",
  },
];

export default function AdminDashboard() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    // ✅ Guard: wait for session to be defined
    if (!session || !session.user) {
      router.replace("/login");
      return;
    }

    const user = session.user as typeof session.user & { isAdmin?: boolean };

    if (!user?.isAdmin) {
      router.replace("/login");
    }
  }, [session, status, router]);

  if (status === "loading") return <div>Loading...</div>;

  if (
    !session ||
    !session.user ||
    !("isAdmin" in session.user) ||
    !session.user.isAdmin
  ) {
    return <div>You are not allowed to access this page.</div>;
  }

  const handleSignOut = () => {
    signOut({
      callbackUrl: "/login", // 👈 optional redirect after logout
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome,{" "}
                {session?.user?.name && (
                  <span className="ml-2 text-base font-normal text-gray-600">
                    {session.user.name ?? "Admin"}
                  </span>
                )}
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back! Here's what's happening at Roshan Hospital.
            </p>
          </div>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                   
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}

          <div className="grid lg:grid-cols-1 gap-8 mb-8">
            {/* Recent Activities */}

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-full ">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quick Actions
                </h3>
                <p className="text-gray-600">Common tasks and shortcuts</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => openModal("doctors")}
                  className="h-20 flex flex-col items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Users className="w-6 h-6 mb-2" />
                  Manage Doctors
                </button>
                {/* <button
                  onClick={() => openModal("departments")}
                  className="h-20 flex flex-col items-center justify-center border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Building2 className="w-6 h-6 mb-2" />
                  Manage Departments
                </button> */}
                <button
                  onClick={() => openModal("gallery")}
                  className="h-20 flex flex-col items-center justify-center border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Image className="w-6 h-6 mb-2" />
                  Manage Gallery
                </button>
                {/* <button className="h-20 flex flex-col items-center justify-center border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <BarChart3 className="w-6 h-6 mb-2" />
                  SanityImageUploader
                </button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Modals */}
      {activeModal === "doctors" && <DoctorsManager onClose={closeModal} />}
      {/* 
      {activeModal === "departments" && (
        <DepartmentsManager onClose={closeModal} />
      )} */}

      {activeModal === "gallery" && <GalleryManager onClose={closeModal} />}
    </div>
  );
}
