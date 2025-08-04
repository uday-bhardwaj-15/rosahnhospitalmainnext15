"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plus,
  Edit,
  Trash2,
  Search,
  Building2,
  Users,
  Phone,
  Clock,
  Award,
  Stethoscope,
  Activity,
  Heart,
  Brain,
  Bone,
  Baby,
  UserCheck,
} from "lucide-react";

interface Department {
  id: number;
  name: string;
  description: string;
  icon: any;
  image: string;
  head: string;
  doctorCount: number;
  services: string[];
  established: string;
  availability: string;
  phone: string;
  color: string;
  detailedInfo: {
    overview: string;
    facilities: string[];
    specialties: string[];
    achievements: string[];
    treatments: string[];
    equipment: string[];
    patientCare: string[];
  };
}

const iconMap = {
  Heart,
  Brain,
  Bone,
  Baby,
  UserCheck,
  Stethoscope,
  Activity,
  Building2,
};

const initialDepartments: Department[] = [
  {
    id: 1,
    name: "Onco Surgery",
    description:
      "Comprehensive cancer surgical care with advanced minimally invasive techniques and multidisciplinary tumor management.",
    icon: Heart,
    image: "/OCNO.jpeg",
    head: "Dr. Rajesh Kumar",
    doctorCount: 8,
    services: [
      "Tumor Resection",
      "Minimally Invasive Surgery",
      "Robotic Surgery",
      "Cancer Staging",
      "Oncoplastic Surgery",
      "Palliative Surgery",
    ],
    established: "2018",
    availability: "Mon-Fri 7AM-6PM, Emergency 24/7",
    phone: "+91 7554261002",
    color: "bg-orange-500",
    detailedInfo: {
      overview:
        "Our Onco Surgery department specializes in comprehensive surgical treatment of all types of cancers.",
      facilities: [
        "Advanced Robotic Surgery Suite",
        "Minimally Invasive Surgery Center",
        "Intraoperative Imaging Systems",
        "Oncology ICU",
        "Specialized Recovery Units",
        "Pathology Laboratory",
        "Radiation Therapy Integration",
      ],
      specialties: [
        "Gastrointestinal Cancer Surgery",
        "Breast Cancer Surgery",
        "Lung Cancer Surgery",
        "Colorectal Cancer Surgery",
        "Hepatobiliary Surgery",
        "Gynecologic Oncology",
        "Urologic Oncology",
        "Head & Neck Cancer Surgery",
      ],
      achievements: [
        "Accredited Cancer Center",
        "Robotic Surgery Excellence Award",
        "Minimally Invasive Surgery Center of Excellence",
        "Multidisciplinary Tumor Board Recognition",
        "Research Publication Leader",
        "Patient Safety Award for Surgical Outcomes",
      ],
      treatments: [
        "Laparoscopic Cancer Surgery",
        "Robotic-Assisted Surgery",
        "Cytoreductive Surgery",
        "Sentinel Lymph Node Biopsy",
        "Oncoplastic Breast Surgery",
        "HIPEC (Hyperthermic Intraperitoneal Chemotherapy)",
        "Liver Resection",
        "Pancreaticoduodenectomy",
      ],
      equipment: [
        "Da Vinci Surgical System",
        "Advanced Laparoscopic Equipment",
        "Intraoperative Ultrasound",
        "Fluorescence Imaging Systems",
        "Surgical Navigation Systems",
        "Cryoablation Technology",
      ],
      patientCare: [
        "Pre-operative Counseling",
        "Multidisciplinary Team Approach",
        "Pain Management Protocols",
        "Nutritional Support",
        "Psychological Support Services",
        "Follow-up Care Programs",
        "Survivorship Programs",
      ],
    },
  },
];

interface DepartmentsManagerProps {
  onClose: () => void;
}

export default function DepartmentsManager({
  onClose,
}: DepartmentsManagerProps) {
  const [departments, setDepartments] =
    useState<Department[]>(initialDepartments);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(
    null
  );
  const [formData, setFormData] = useState<Partial<Department>>({
    name: "",
    description: "",
    icon: Heart,
    image: "",
    head: "",
    doctorCount: 0,
    services: [],
    established: "",
    availability: "",
    phone: "",
    color: "bg-blue-500",
    detailedInfo: {
      overview: "",
      facilities: [],
      specialties: [],
      achievements: [],
      treatments: [],
      equipment: [],
      patientCare: [],
    },
  });

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (field: keyof Department, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDetailedInfoChange = (
    field: keyof Department["detailedInfo"],
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      detailedInfo: {
        ...prev.detailedInfo!,
        [field]: value,
      },
    }));
  };

  const handleArrayInputChange = (
    field: string,
    value: string,
    isDetailedInfo = false
  ) => {
    const array = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    if (isDetailedInfo) {
      handleDetailedInfoChange(
        field as keyof Department["detailedInfo"],
        array
      );
    } else {
      handleInputChange(field as keyof Department, array);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingDepartment) {
      setDepartments((prev) =>
        prev.map((dept) =>
          dept.id === editingDepartment.id
            ? ({ ...dept, ...formData } as Department)
            : dept
        )
      );
      setEditingDepartment(null);
    } else {
      const { id, ...restFormData } = formData as Department;
      const newDepartment: Department = {
        id: Date.now(),
        ...restFormData,
      };
      setDepartments((prev) => [...prev, newDepartment]);
    }

    setFormData({
      name: "",
      description: "",
      icon: Heart,
      image: "",
      head: "",
      doctorCount: 0,
      services: [],
      established: "",
      availability: "",
      phone: "",
      color: "bg-blue-500",
      detailedInfo: {
        overview: "",
        facilities: [],
        specialties: [],
        achievements: [],
        treatments: [],
        equipment: [],
        patientCare: [],
      },
    });
    setShowAddForm(false);
  };

  const handleEdit = (department: Department) => {
    setEditingDepartment(department);
    setFormData(department);
    setShowAddForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this department?")) {
      setDepartments((prev) => prev.filter((dept) => dept.id !== id));
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Building2 className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">Departments Management</h2>
                  <p className="text-green-100">
                    Manage hospital departments and services
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {!showAddForm ? (
              <>
                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search departments..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Department</span>
                  </button>
                </div>

                {/* Departments Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredDepartments.map((department) => (
                    <motion.div
                      key={department.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative">
                        <img
                          src={department.image}
                          alt={department.name}
                          className="w-full h-48 object-cover rounded-t-xl"
                        />
                        <div
                          className={`absolute top-4 left-4 p-3 rounded-full ${department.color}`}
                        >
                          <department.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">
                          {department.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {department.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            Head: {department.head}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Stethoscope className="w-4 h-4 mr-2" />
                            {department.doctorCount} doctors
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="w-4 h-4 mr-2" />
                            {department.phone}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {department.availability}
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Services:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {department.services
                              .slice(0, 3)
                              .map((service, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                >
                                  {service}
                                </span>
                              ))}
                            {department.services.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                +{department.services.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(department)}
                            className="flex-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2"
                          >
                            <Edit className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(department.id)}
                            className="flex-1 bg-red-50 text-red-600 py-2 px-4 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center space-x-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              /* Add/Edit Form */
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {editingDepartment
                      ? "Edit Department"
                      : "Add New Department"}
                  </h3>
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingDepartment(null);
                      setFormData({});
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Basic Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Department Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name || ""}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Department Head
                        </label>
                        <input
                          type="text"
                          value={formData.head || ""}
                          onChange={(e) =>
                            handleInputChange("head", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Doctors
                        </label>
                        <input
                          type="number"
                          value={formData.doctorCount || ""}
                          onChange={(e) =>
                            handleInputChange(
                              "doctorCount",
                              parseInt(e.target.value)
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Established Year
                        </label>
                        <input
                          type="text"
                          value={formData.established || ""}
                          onChange={(e) =>
                            handleInputChange("established", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone || ""}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Image URL
                        </label>
                        <input
                          type="url"
                          value={formData.image || ""}
                          onChange={(e) =>
                            handleInputChange("image", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description || ""}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability Hours
                      </label>
                      <input
                        type="text"
                        value={formData.availability || ""}
                        onChange={(e) =>
                          handleInputChange("availability", e.target.value)
                        }
                        placeholder="Mon-Fri 9AM-5PM"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Services (comma-separated)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.services?.join(", ") || ""}
                        onChange={(e) =>
                          handleArrayInputChange("services", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Detailed Information */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Detailed Information
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Overview
                        </label>
                        <textarea
                          rows={3}
                          value={formData.detailedInfo?.overview || ""}
                          onChange={(e) =>
                            handleDetailedInfoChange("overview", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Facilities (comma-separated)
                          </label>
                          <textarea
                            rows={3}
                            value={
                              formData.detailedInfo?.facilities?.join(", ") ||
                              ""
                            }
                            onChange={(e) =>
                              handleArrayInputChange(
                                "facilities",
                                e.target.value,
                                true
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Specialties (comma-separated)
                          </label>
                          <textarea
                            rows={3}
                            value={
                              formData.detailedInfo?.specialties?.join(", ") ||
                              ""
                            }
                            onChange={(e) =>
                              handleArrayInputChange(
                                "specialties",
                                e.target.value,
                                true
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Achievements (comma-separated)
                          </label>
                          <textarea
                            rows={3}
                            value={
                              formData.detailedInfo?.achievements?.join(", ") ||
                              ""
                            }
                            onChange={(e) =>
                              handleArrayInputChange(
                                "achievements",
                                e.target.value,
                                true
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Treatments (comma-separated)
                          </label>
                          <textarea
                            rows={3}
                            value={
                              formData.detailedInfo?.treatments?.join(", ") ||
                              ""
                            }
                            onChange={(e) =>
                              handleArrayInputChange(
                                "treatments",
                                e.target.value,
                                true
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Equipment (comma-separated)
                          </label>
                          <textarea
                            rows={3}
                            value={
                              formData.detailedInfo?.equipment?.join(", ") || ""
                            }
                            onChange={(e) =>
                              handleArrayInputChange(
                                "equipment",
                                e.target.value,
                                true
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Patient Care (comma-separated)
                          </label>
                          <textarea
                            rows={3}
                            value={
                              formData.detailedInfo?.patientCare?.join(", ") ||
                              ""
                            }
                            onChange={(e) =>
                              handleArrayInputChange(
                                "patientCare",
                                e.target.value,
                                true
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      {editingDepartment
                        ? "Update Department"
                        : "Add Department"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddForm(false);
                        setEditingDepartment(null);
                        setFormData({});
                      }}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
