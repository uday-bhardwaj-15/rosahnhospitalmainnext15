"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plus,
  Edit,
  Trash2,
  Search,
  Image as ImageIcon,
  Upload,
  Eye,
  Filter,
  Grid,
  List,
} from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const categories = [
  "All",
  "Infrastructure",
  "Medical Equipment",
  "Staff",
  "Facilities",
  "Events",
  "Awards",
  "Patient Care",
];

const initialGallery: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/Dedicated Specious Waiting Lounge.jpg",
    alt: "Spacious Waiting Lounge",
    category: "Infrastructure",
  },
  {
    id: 2,
    src: "/gallery/modern-equipment.jpg",
    alt: "Modern Medical Equipment",
    category: "Medical Equipment",
  },
  {
    id: 3,
    src: "/gallery/hospital-staff.jpg",
    alt: "Dedicated Hospital Staff",
    category: "Staff",
  },
];

interface GalleryManagerProps {
  onClose: () => void;
}

export default function GalleryManager({ onClose }: GalleryManagerProps) {
  const [gallery, setGallery] = useState<GalleryImage[]>(initialGallery);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null);
  const [formData, setFormData] = useState<Partial<GalleryImage>>({
    src: "",
    alt: "",
    category: "Infrastructure",
  });

  const filteredGallery = gallery.filter((image) => {
    const matchesSearch =
      image.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (field: keyof GalleryImage, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.src || !formData.alt || !formData.category) {
      alert("Please fill all required fields.");
      return;
    }

    const payload = {
      title: formData.alt,
      category: formData.category,
      imageDataUrl: formData.src,
    };

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.error);

      alert("Image uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to upload image to CMS");
    }

    setFormData({
      src: "",
      alt: "",
      category: "Infrastructure",
    });
    setShowAddForm(false);
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData(image);
    setShowAddForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setGallery((prev) => prev.filter((image) => image.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        handleInputChange("src", result);
      };
      reader.readAsDataURL(file);
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
          className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ImageIcon className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">Gallery Management</h2>
                  <p className="text-purple-100">
                    Manage hospital gallery images and categories
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
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search images..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map((category, index) => (
                      <option
                        key={`category-${index}-${category}-${Math.random()}`}
                        value={category}
                      >
                        {category}
                      </option>
                    ))}
                  </select>

                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-3 ${
                        viewMode === "grid"
                          ? "bg-purple-600 text-white"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-3 ${
                        viewMode === "list"
                          ? "bg-purple-600 text-white"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Add Image</span>
                  </button>
                </div>

                {/* Gallery Display */}
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredGallery.map((image) => (
                      <motion.div
                        key={image.id + image.alt}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="aspect-square relative overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                              <button
                                onClick={() => setPreviewImage(image)}
                                className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleEdit(image)}
                                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(image.id)}
                                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium text-gray-900 text-sm truncate">
                            {image.alt}
                          </h4>
                          <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full mt-1">
                            {image.category}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredGallery.map((image) => (
                      <motion.div
                        key={image.id + image.alt}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">
                              {image.alt}
                            </h4>
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full mt-1">
                              {image.category}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setPreviewImage(image)}
                              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleEdit(image)}
                              className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-colors"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(image.id)}
                              className="p-2 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* Add/Edit Form */
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {editingImage ? "Edit Image" : "Add New Image"}
                  </h3>
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingImage(null);
                      setFormData({});
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image Upload
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                        {formData.src ? (
                          <div className="space-y-4">
                            <img
                              src={formData.src}
                              alt="Preview"
                              className="max-w-full h-48 object-cover mx-auto rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => handleInputChange("src", "")}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Remove Image
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                            <div>
                              <label className="cursor-pointer">
                                <span className="text-purple-600 hover:text-purple-800 font-medium">
                                  Click to upload
                                </span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                  className="hidden"
                                />
                              </label>
                              <p className="text-gray-500 text-sm mt-1">
                                or drag and drop
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Or enter image URL below
                      </p>
                      <input
                        type="url"
                        value={formData.src || ""}
                        onChange={(e) =>
                          handleInputChange("src", e.target.value)
                        }
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mt-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image Title/Alt Text *
                      </label>
                      <input
                        type="text"
                        value={formData.alt || ""}
                        onChange={(e) =>
                          handleInputChange("alt", e.target.value)
                        }
                        placeholder="Describe the image"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        value={formData.category || "Infrastructure"}
                        onChange={(e) =>
                          handleInputChange("category", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        {categories
                          .filter((cat) => cat !== "All")
                          .map((category, index) => (
                            <option
                              key={`form-category-${index}-${category}-${Math.random()}`}
                              value={category}
                            >
                              {category}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      {editingImage ? "Update Image" : "Add Image"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddForm(false);
                        setEditingImage(null);
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

      {/* Image Preview Modal */}
      {previewImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900">
                {previewImage.alt}
              </h3>
              <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded-full mt-2">
                {previewImage.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
