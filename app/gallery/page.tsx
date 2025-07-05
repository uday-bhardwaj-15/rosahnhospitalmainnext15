"use client";
import React, { useState } from "react";
import {
  X,
  ZoomIn,
  Camera,
  ArrowLeft,
  Users,
  Building,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/WhatsApp Image 2025-07-05 at 14.19.51_1c9683da.jpg",
    alt: "Roshan Hospital Team - Our Dedicated Healthcare Professionals",
    category: "Team",
    featured: true,
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Modern Hospital Building",
    category: "Infrastructure",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Emergency Department",
    category: "Emergency Care",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Operating Theater",
    category: "Surgery",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Patient Room",
    category: "Patient Care",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Medical Equipment",
    category: "Technology",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Consultation Room",
    category: "Consultation",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Laboratory",
    category: "Diagnostics",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/4021774/pexels-photo-4021774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Pharmacy",
    category: "Pharmacy",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "ICU Ward",
    category: "Critical Care",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/4021772/pexels-photo-4021772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Reception Area",
    category: "Infrastructure",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/4021776/pexels-photo-4021776.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Cafeteria",
    category: "Amenities",
  },
];

const categories = [
  "All",
  "Team",
  "Infrastructure",
  "Patient Care",
  "Technology",
  "Emergency Care",
  "Surgery",
  "Diagnostics",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredImage = galleryImages.find((img) => img.featured);
  const regularImages = galleryImages.filter((img) => !img.featured);

  const filteredImages =
    activeCategory === "All"
      ? regularImages
      : regularImages.filter((image) => image.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      {/* <section className=" bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Hospital Gallery
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our state-of-the-art facilities, dedicated team, and
              modern healthcare environment through our comprehensive photo
              gallery.
            </p>
          </div>
        </div>
      </section> */}

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hospital Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our state-of-the-art facilities, dedicated team, and
              modern healthcare environment through our comprehensive photo
              gallery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      {featuredImage && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Healthcare Heroes
                  </h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Meet the dedicated professionals who make Roshan Hospital a
                  center of excellence in healthcare.
                </p>
              </div>

              <div
                className="relative group cursor-pointer"
                onClick={() => openLightbox(featuredImage)}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative">
                    <img
                      src={featuredImage.src}
                      alt={featuredImage.alt}
                      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                        <ZoomIn className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {featuredImage.alt}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            {featuredImage.category}
                          </span>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">
                              Dedicated to Your Health
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Building className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Facilities & Infrastructure
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our modern facilities and advanced medical
              infrastructure.
            </p>
          </div>

          {/* Category Filter */}
          <div className="animate-fade-in-up-delay mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .filter((cat) => cat !== "Team")
                .map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                    }`}
                  >
                    {category}
                  </button>
                ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="animate-fade-in-up-stagger group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {image.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-6xl w-full max-h-[90vh] animate-scale-in">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedImage.alt}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
