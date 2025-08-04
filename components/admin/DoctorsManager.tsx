import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Languages,
  Upload,
  Camera,
  Loader2,
  User,
  X,
  Search,
  Plus,
  Star,
  Edit,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/client";
interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  subSpecialty: string;
  image: SanityImage;
  rating: number;
  reviews: number;
  experience: string;
  education: string;
  languages: string[];
  about: string;
  achievements: string[];
}

interface DoctorsManagerProps {
  onClose: () => void;
}

// Mock toast function - replace with your actual toast implementation
function toast(arg0: { title: string; description: string }) {
  alert(`${arg0.title}: ${arg0.description}`);
}

export default function DoctorsManager({ onClose }: DoctorsManagerProps) {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    subSpecialty: "",
    rating: 0,
    reviews: 0,
    experience: "",
    education: "",
    languages: "",
    about: "",
    achievements: "",
    image: "",
  });

  // Fetch doctors on component mount
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/doctors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Ensure data is an array
        if (Array.isArray(data)) {
          setDoctors(data);
        } else if (data && Array.isArray(data.doctors)) {
          // Handle case where API returns { doctors: [...] }
          setDoctors(data.doctors);
        } else if (data && Array.isArray(data.data)) {
          // Handle case where API returns { data: [...] }
          setDoctors(data.data);
        } else {
          console.error("API response is not an array:", data);
          setDoctors([]);
          setError("Invalid response format from server");
        }
      } else {
        console.error(
          "Failed to fetch doctors:",
          response.status,
          response.statusText
        );
        setDoctors([]);
        setError(`Failed to fetch doctors: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setDoctors([]);
      setError("Network error while fetching doctors");
    } finally {
      setLoading(false);
    }
  };

  console.log("Doctors:", doctors);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      specialty: "",
      subSpecialty: "",
      rating: 0,
      reviews: 0,
      experience: "",
      education: "",
      languages: "",
      about: "",
      achievements: "",
      image: "",
    });
    setImagePreview(null);
    setImageFile(null);
    setEditingDoctor(null);
    setShowAddForm(false);
  };

  const handleSubmit = async () => {
    setFormLoading(true);
    setError(null);

    let imageRef: any = null;

    // Upload image if file is selected
    if (imageFile) {
      const imageForm = new FormData();
      imageForm.append("file", imageFile);

      try {
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: imageForm,
        });

        const uploadData = await uploadRes.json();

        if (uploadRes.ok && uploadData?.asset?._id) {
          imageRef = {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: uploadData.asset._id,
            },
          };
        } else {
          throw new Error(uploadData.error || "Image upload failed");
        }
      } catch (uploadErr) {
        setError(
          uploadErr instanceof Error
            ? uploadErr.message
            : "Failed to upload image"
        );
        setFormLoading(false);
        return;
      }
    }

    const payload: any = {
      ...formData,
      image:
        imageRef ||
        (typeof formData.image === "string" ? formData.image : null),
      languages:
        typeof formData.languages === "string"
          ? formData.languages.split(",").map((l) => l.trim())
          : formData.languages,
      achievements:
        typeof formData.achievements === "string"
          ? formData.achievements.split(",").map((a) => a.trim())
          : formData.achievements,
    };

    try {
      const url = editingDoctor
        ? `/api/doctors?id=${editingDoctor._id}`
        : "/api/doctors";
      const method = editingDoctor ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          title: editingDoctor
            ? "Doctor Updated Successfully"
            : "Doctor Added Successfully",
          description: editingDoctor
            ? "The doctor information has been updated."
            : "The new doctor has been added to the system.",
        });
        resetForm();
        fetchDoctors();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this doctor?")) {
      try {
        const response = await fetch(`/api/doctors?id=${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          await fetchDoctors(); // Refresh the list
          toast({
            title: "Doctor Deleted",
            description: "Doctor has been successfully deleted.",
          });
        } else {
          const result = await response.json();
          throw new Error(result.message || "Failed to delete doctor");
        }
      } catch (error) {
        console.error("Error deleting doctor:", error);
        setError(
          error instanceof Error ? error.message : "Error deleting doctor"
        );
      }
    }
  };

  // Filter doctors based on search term
  const filteredDoctors = Array.isArray(doctors)
    ? doctors.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.subSpecialty?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg flex items-center space-x-3">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <span>Loading doctors...</span>
        </div>
      </div>
    );
  }

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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <User className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">Doctors Management</h2>
                  <p className="text-blue-100">
                    Manage hospital doctors and their information
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
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                <div className="flex items-center">
                  <span className="font-medium">Error:</span>
                  <span className="ml-2">{error}</span>
                  <button
                    onClick={() => setError(null)}
                    className="ml-auto text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {!showAddForm ? (
              <>
                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search doctors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Doctor</span>
                  </button>
                </div>

                {/* Doctors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDoctors.map((doctor) => (
                    <motion.div
                      key={doctor._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          {doctor.image && doctor.image.asset?._ref ? (
                            <Image
                              src={urlFor(doctor.image).url()}
                              alt="Doctor Image"
                              width={64}
                              height={64}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                              <User className="w-8 h-8 text-gray-400" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-lg">
                              {doctor.name}
                            </h3>
                            <p className="text-blue-600 text-sm font-medium">
                              {doctor.specialty}
                            </p>
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">
                                {doctor.rating} ({doctor.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            {doctor.experience} experience
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Languages className="w-4 h-4 mr-2" />
                            {doctor.languages?.join(", ") || "Not specified"}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleDelete(doctor._id)}
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

                {filteredDoctors.length === 0 && !loading && (
                  <div className="text-center py-12">
                    <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      {searchTerm
                        ? "No doctors found matching your search"
                        : "No doctors found"}
                    </p>
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="mt-2 text-blue-600 hover:text-blue-800"
                      >
                        Clear search
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              /* Add/Edit Form */
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {editingDoctor ? "Edit Doctor" : "Add New Doctor"}
                  </h3>
                  <button
                    onClick={resetForm}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Image
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Camera className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="image-upload"
                        />
                        <label
                          htmlFor="image-upload"
                          className="cursor-pointer bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-2"
                        >
                          <Upload className="w-4 h-4" />
                          <span>Upload Image</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialty *
                      </label>
                      <input
                        type="text"
                        value={formData.specialty}
                        onChange={(e) =>
                          handleInputChange("specialty", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sub-Specialty
                      </label>
                      <input
                        type="text"
                        value={formData.subSpecialty}
                        onChange={(e) =>
                          handleInputChange("subSpecialty", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rating (0-5)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="5"
                        step="0.01"
                        value={formData.rating}
                        onChange={(e) =>
                          handleInputChange(
                            "rating",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Reviews
                      </label>
                      <input
                        type="number"
                        value={formData.reviews}
                        onChange={(e) =>
                          handleInputChange(
                            "reviews",
                            parseInt(e.target.value) || 0
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience
                      </label>
                      <input
                        type="text"
                        value={formData.experience}
                        onChange={(e) =>
                          handleInputChange("experience", e.target.value)
                        }
                        placeholder="e.g., 10 years"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Education
                      </label>
                      <input
                        type="text"
                        value={formData.education}
                        onChange={(e) =>
                          handleInputChange("education", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Languages (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={formData.languages}
                        onChange={(e) =>
                          handleInputChange("languages", e.target.value)
                        }
                        placeholder="English, Hindi, Spanish"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      About
                    </label>
                    <textarea
                      rows={4}
                      value={formData.about}
                      onChange={(e) =>
                        handleInputChange("about", e.target.value)
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
                      value={formData.achievements}
                      onChange={(e) =>
                        handleInputChange("achievements", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={formLoading}
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {formLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <span>
                          {editingDoctor ? "Update Doctor" : "Add Doctor"}
                        </span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
