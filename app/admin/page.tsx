"use client";

import { useState } from "react";
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
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminNavigation from "@/components/admin/AdminNavigation";
import DepartmentsManager from "@/components/admin/DepartmentsManager";
import DoctorsManager from "@/components/admin/DoctorsManager";
import BlogsManager from "@/components/admin/BlogsManager";

const dashboardStats = [
  {
    title: "Total Doctors",
    value: "24",
    change: "+2 this month",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Departments",
    value: "8",
    change: "+1 this month",
    icon: Building2,
    color: "bg-green-500",
  },
  {
    title: "Blog Posts",
    value: "156",
    change: "+12 this month",
    icon: FileText,
    color: "bg-purple-500",
  },
  {
    title: "Appointments",
    value: "1,247",
    change: "+89 this week",
    icon: Calendar,
    color: "bg-orange-500",
  },
];

const recentActivities = [
  {
    id: 1,
    action: "New doctor added",
    details: "Dr. Sarah Johnson joined Pediatrics",
    time: "2 hours ago",
    type: "doctor",
  },
  {
    id: 2,
    action: "Blog post published",
    details: "Heart Health Tips for Seniors",
    time: "4 hours ago",
    type: "blog",
  },
  {
    id: 3,
    action: "Department updated",
    details: "Cardiology department info updated",
    time: "1 day ago",
    type: "department",
  },
  {
    id: 4,
    action: "New appointment",
    details: "Patient scheduled with Dr. Chen",
    time: "2 days ago",
    type: "appointment",
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="pl-64">
        <div className="p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="dashboard">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Dashboard
                  </h1>
                  <p className="text-gray-600">
                    Welcome back! Heres whats happening at Roshan Hospital.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {dashboardStats.map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-600">
                                {stat.title}
                              </p>
                              <p className="text-2xl font-bold text-gray-900">
                                {stat.value}
                              </p>
                              <p className="text-xs text-green-600">
                                {stat.change}
                              </p>
                            </div>
                            <div className={`p-3 rounded-full ${stat.color}`}>
                              <stat.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Recent Activities */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activities</CardTitle>
                      <CardDescription>
                        Latest updates and changes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivities.map((activity) => (
                          <div
                            key={activity.id}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">
                                {activity.action}
                              </p>
                              <p className="text-sm text-gray-600">
                                {activity.details}
                              </p>
                              <p className="text-xs text-gray-500">
                                {activity.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                      <CardDescription>
                        Common tasks and shortcuts
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          className="h-20 flex flex-col items-center justify-center"
                          onClick={() => setActiveTab("doctors")}
                        >
                          <Plus className="w-6 h-6 mb-2" />
                          Add Doctor
                        </Button>
                        <Button
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center"
                          onClick={() => setActiveTab("departments")}
                        >
                          <Building2 className="w-6 h-6 mb-2" />
                          Manage Departments
                        </Button>
                        <Button
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center"
                          onClick={() => setActiveTab("blogs")}
                        >
                          <FileText className="w-6 h-6 mb-2" />
                          Write Blog
                        </Button>
                        <Button
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center"
                        >
                          <BarChart3 className="w-6 h-6 mb-2" />
                          View Reports
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="departments">
              <DepartmentsManager />
            </TabsContent>

            <TabsContent value="doctors">
              <DoctorsManager />
            </TabsContent>

            <TabsContent value="blogs">
              <BlogsManager />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
