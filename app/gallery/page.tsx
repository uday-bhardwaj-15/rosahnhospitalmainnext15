// "use client";
// import React, { useState } from "react";
// import {
//   X,
//   ZoomIn,
//   Camera,
//   ArrowLeft,
//   Users,
//   Building,
//   Heart,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// interface GalleryImage {
//   id: number;
//   src: string;
//   alt: string;
//   category: string;
//   featured?: boolean;
// }

// const galleryImages: GalleryImage[] = [
//   {
//     id: 1,
//     src: "/WhatsApp Image 2025-07-05 at 14.19.51_1c9683da.jpg",
//     alt: "Roshan Hospital Team - Our Dedicated Healthcare Professionals",
//     category: "Team",
//     featured: true,
//   },
//   {
//     id: 2,
//     src: "gallery/Lift .jpg",
//     alt: "Lift",
//     category: "Infrastructure",
//   },
//   {
//     id: 3,
//     src: "gallery/Pediatrics OPD Director_s.jpg",
//     alt: "Pediatrics OPD Director's Office",
//     category: "Pediatrics",
//   },
//   {
//     id: 4,
//     src: "gallery/Helping staff.jpg",
//     alt: "Helping Staff",
//     category: "Team",
//   },
//   {
//     id: 5,
//     src: "gallery/Pediatrics Front Image.jpg",
//     alt: "Pediatrics Front View",
//     category: "Pediatrics",
//   },
//   {
//     id: 6,
//     src: "gallery/NICU.jpg",
//     alt: "NICU",
//     category: "Critical Care",
//   },
//   {
//     id: 7,
//     src: "gallery/Dedicated Specious Waiting Lounge.jpg",
//     alt: "Spacious Waiting Lounge",
//     category: "Infrastructure",
//   },
//   {
//     id: 8,
//     src: "gallery/ICU(1).jpg",
//     alt: "ICU View 1",
//     category: "Critical Care",
//   },
//   {
//     id: 9,
//     src: "gallery/ICU(2).jpg",
//     alt: "ICU View 2",
//     category: "Critical Care",
//   },
//   {
//     id: 10,
//     src: "gallery/ICU.jpg",
//     alt: "ICU",
//     category: "Critical Care",
//   },
//   {
//     id: 11,
//     src: "gallery/Specious Coridoors.jpg",
//     alt: "Spacious Corridors",
//     category: "Infrastructure",
//   },
//   {
//     id: 12,
//     src: "gallery/Ayushman Kiosk.jpg",
//     alt: "Ayushman Kiosk",
//     category: "Amenities",
//   },
//   {
//     id: 13,
//     src: "gallery/Dedicated Emergency Room.jpg",
//     alt: "Dedicated Emergency Room",
//     category: "Emergency Care",
//   },
//   {
//     id: 14,
//     src: "gallery/dedicated emergency OT.jpg",
//     alt: "Dedicated Emergency OT",
//     category: "Surgery",
//   },
//   {
//     id: 15,
//     src: "gallery/Emergency Room.jpg",
//     alt: "Emergency Room",
//     category: "Emergency Care",
//   },
//   {
//     id: 16,
//     src: "gallery/Dedicated Labour Room.jpg",
//     alt: "Dedicated Labour Room",
//     category: "Maternity",
//   },
//   {
//     id: 17,
//     src: "gallery/Gynae OT.jpg",
//     alt: "Gynae Operation Theatre",
//     category: "Surgery",
//   },
//   {
//     id: 18,
//     src: "gallery/Modular OT.jpg",
//     alt: "Modular Operation Theatre",
//     category: "Surgery",
//   },
//   {
//     id: 19,
//     src: "gallery/Temple.jpg",
//     alt: "Temple",
//     category: "Amenities",
//   },
//   {
//     id: 20,
//     src: "gallery/IMG_1311[1].jpg",
//     alt: "Hospital Image - IMG_1311",
//     category: "General",
//   },
//   {
//     id: 21,
//     src: "gallery/IMG_1310[1].jpg",
//     alt: "Hospital Image - IMG_1310",
//     category: "General",
//   },
//   {
//     id: 22,
//     src: "gallery/IMG_1329[1].jpg",
//     alt: "Hospital Image - IMG_1329",
//     category: "General",
//   },
//   {
//     id: 23,
//     src: "gallery/IMG_1308[1].jpg",
//     alt: "Hospital Image - IMG_1308",
//     category: "General",
//   },
//   {
//     id: 24,
//     src: "gallery/IMG_1326[1].jpg",
//     alt: "Hospital Image - IMG_1326",
//     category: "General",
//   },
//   {
//     id: 25,
//     src: "gallery/IMG_1335[1].jpg",
//     alt: "Hospital Image - IMG_1335",
//     category: "General",
//   },
//   {
//     id: 26,
//     src: "gallery/IMG_1361[1].jpg",
//     alt: "Hospital Image - IMG_1361",
//     category: "General",
//   },
//   {
//     id: 27,
//     src: "gallery/IMG_1339[1].jpg",
//     alt: "Hospital Image - IMG_1339",
//     category: "General",
//   },
//   {
//     id: 28,
//     src: "gallery/IMG_1374[1].jpg",
//     alt: "Hospital Image - IMG_1374",
//     category: "General",
//   },
//   {
//     id: 29,
//     src: "gallery/IMG_1380[1].jpg",
//     alt: "Hospital Image - IMG_1380",
//     category: "General",
//   },
//   {
//     id: 30,
//     src: "gallery/IMG_1375[1].jpg",
//     alt: "Hospital Image - IMG_1375",
//     category: "General",
//   },
//   {
//     id: 31,
//     src: "gallery/IMG_1400[1].jpg",
//     alt: "Hospital Image - IMG_1400",
//     category: "General",
//   },
//   {
//     id: 32,
//     src: "gallery/IMG_1391 - Copy.jpg",
//     alt: "Hospital Image - IMG_1391 Copy",
//     category: "General",
//   },
//   {
//     id: 33,
//     src: "gallery/IMG_1391.jpg",
//     alt: "Hospital Image - IMG_1391",
//     category: "General",
//   },
//   {
//     id: 34,
//     src: "gallery/IMG_1400.jpg",
//     alt: "Hospital Image - IMG_1400",
//     category: "General",
//   },
//   {
//     id: 35,
//     src: "gallery/IMG_1394.jpg",
//     alt: "Hospital Image - IMG_1394",
//     category: "General",
//   },
//   {
//     id: 36,
//     src: "gallery/IMG_1392.jpg",
//     alt: "Hospital Image - IMG_1392",
//     category: "General",
//   },
//   {
//     id: 37,
//     src: "gallery/IMG_1392 - Copy.jpg",
//     alt: "Hospital Image - IMG_1392 Copy",
//     category: "General",
//   },
//   {
//     id: 38,
//     src: "gallery/IMG_1384.jpg",
//     alt: "Hospital Image - IMG_1384",
//     category: "General",
//   },
//   {
//     id: 39,
//     src: "gallery/IMG_1386.jpg",
//     alt: "Hospital Image - IMG_1386",
//     category: "General",
//   },
//   {
//     id: 40,
//     src: "gallery/IMG_1409.jpg",
//     alt: "Hospital Image - IMG_1409",
//     category: "General",
//   },
//   {
//     id: 41,
//     src: "gallery/IMG_1419 - Copy.jpg",
//     alt: "Hospital Image - IMG_1419 Copy",
//     category: "General",
//   },
//   {
//     id: 42,
//     src: "gallery/IMG_1421.jpg",
//     alt: "Hospital Image - IMG_1421",
//     category: "General",
//   },
//   {
//     id: 43,
//     src: "gallery/IMG_1423 - Copy.jpg",
//     alt: "Hospital Image - IMG_1423 Copy",
//     category: "General",
//   },
//   {
//     id: 44,
//     src: "gallery/IMG_1423.jpg",
//     alt: "Hospital Image - IMG_1423",
//     category: "General",
//   },
//   {
//     id: 45,
//     src: "gallery/IMG_1424.jpg",
//     alt: "Hospital Image - IMG_1424",
//     category: "General",
//   },
//   {
//     id: 46,
//     src: "gallery/IMG_1428 - Copy.jpg",
//     alt: "Hospital Image - IMG_1428 Copy",
//     category: "General",
//   },
//   {
//     id: 47,
//     src: "gallery/IMG_1442.jpg",
//     alt: "Hospital Image - IMG_1442",
//     category: "General",
//   },
//   {
//     id: 48,
//     src: "gallery/IMG_1445.jpg",
//     alt: "Hospital Image - IMG_1445",
//     category: "General",
//   },
//   {
//     id: 49,
//     src: "gallery/IMG_1449 - Copy.jpg",
//     alt: "Hospital Image - IMG_1449 Copy",
//     category: "General",
//   },
//   {
//     id: 50,
//     src: "gallery/IMG_1449.jpg",
//     alt: "Hospital Image - IMG_1449",
//     category: "General",
//   },
//   {
//     id: 51,
//     src: "gallery/IMG_1441.jpg",
//     alt: "Hospital Image - IMG_1441",
//     category: "General",
//   },
//   {
//     id: 52,
//     src: "gallery/IMG_1451 - Copy.jpg",
//     alt: "Hospital Image - IMG_1451 Copy",
//     category: "General",
//   },
//   {
//     id: 53,
//     src: "gallery/IMG_1451.jpg",
//     alt: "Hospital Image - IMG_1451",
//     category: "General",
//   },
//   {
//     id: 54,
//     src: "gallery/IMG_1444.jpg",
//     alt: "Hospital Image - IMG_1444",
//     category: "General",
//   },
//   {
//     id: 55,
//     src: "gallery/IMG_1443.jpg",
//     alt: "Hospital Image - IMG_1443",
//     category: "General",
//   },
//   {
//     id: 56,
//     src: "gallery/IMG_1450.jpg",
//     alt: "Hospital Image - IMG_1450",
//     category: "General",
//   },
//   {
//     id: 57,
//     src: "gallery/IMG_1452.jpg",
//     alt: "Hospital Image - IMG_1452",
//     category: "General",
//   },
//   {
//     id: 58,
//     src: "gallery/IMG_1453.jpg",
//     alt: "Hospital Image - IMG_1453",
//     category: "General",
//   },
// ];

// const categories = [
//   "All",
//   "Team",
//   "Infrastructure",
//   "Patient Care",
//   "Technology",
//   "Emergency Care",
//   "Surgery",
//   "Diagnostics",
// ];

// const Gallery: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
//   const [activeCategory, setActiveCategory] = useState("All");

//   const featuredImage = galleryImages.find((img) => img.featured);
//   const regularImages = galleryImages.filter((img) => !img.featured);

//   const filteredImages =
//     activeCategory === "All"
//       ? regularImages
//       : regularImages.filter((image) => image.category === activeCategory);

//   const openLightbox = (image: GalleryImage) => {
//     setSelectedImage(image);
//     document.body.style.overflow = "hidden";
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = "unset";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
//       {/* Header */}

//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               Hospital Gallery
//             </h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Explore our state-of-the-art facilities, dedicated team, and
//               modern healthcare environment through our comprehensive photo
//               gallery.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Image Section */}
//       {featuredImage && (
//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="animate-fade-in-up mb-12">
//               <div className="text-center mb-8">
//                 <div className="inline-flex items-center space-x-3 mb-4">
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
//                     <Users className="w-5 h-5 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold text-gray-900">
//                     Our Healthcare Heroes
//                   </h2>
//                 </div>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   Meet the dedicated professionals who make Roshan Hospital a
//                   center of excellence in healthcare.
//                 </p>
//               </div>

//               <div
//                 className="relative group cursor-pointer"
//                 onClick={() => openLightbox(featuredImage)}
//               >
//                 <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
//                   <div className="relative">
//                     <img
//                       src={featuredImage.src}
//                       alt={featuredImage.alt}
//                       className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
//                         <ZoomIn className="w-8 h-8 text-blue-600" />
//                       </div>
//                     </div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                       <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">
//                           {featuredImage.alt}
//                         </h3>
//                         <div className="flex items-center space-x-4">
//                           <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
//                             {featuredImage.category}
//                           </span>
//                           <div className="flex items-center space-x-2 text-gray-600">
//                             <Heart className="w-4 h-4" />
//                             <span className="text-sm">
//                               Dedicated to Your Health
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Gallery Section */}
//       <section className="py-16 bg-white/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="animate-fade-in-up text-center mb-12">
//             <div className="inline-flex items-center space-x-3 mb-6">
//               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                 <Building className="w-5 h-5 text-blue-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900">
//                 Facilities & Infrastructure
//               </h2>
//             </div>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Take a virtual tour of our modern facilities and advanced medical
//               infrastructure.
//             </p>
//           </div>

//           {/* Category Filter */}
//           <div className="animate-fade-in-up-delay mb-8">
//             <div className="flex flex-wrap justify-center gap-3">
//               {categories
//                 .filter((cat) => cat !== "Team")
//                 .map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setActiveCategory(category)}
//                     className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                       activeCategory === category
//                         ? "bg-blue-600 text-white shadow-lg"
//                         : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//             </div>
//           </div>

//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredImages.map((image, index) => (
//               <div
//                 key={image.id}
//                 className="animate-fade-in-up-stagger group cursor-pointer"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => openLightbox(image)}
//               >
//                 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
//                   <div className="relative aspect-square overflow-hidden">
//                     <Image
//                       src={image.src}
//                       alt={image.alt}
//                       width={100}
//                       height={100}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
//                         <ZoomIn className="w-6 h-6 text-blue-600" />
//                       </div>
//                     </div>
//                     <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
//                       {image.category}
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
//                       {image.alt}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Empty State */}
//           {filteredImages.length === 0 && (
//             <div className="text-center py-12">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Camera className="w-8 h-8 text-gray-400" />
//               </div>
//               <p className="text-gray-500">No images found in this category.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
//           <div className="relative max-w-6xl w-full max-h-[90vh] animate-scale-in">
//             <button
//               onClick={closeLightbox}
//               className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-colors"
//             >
//               <X className="w-6 h-6 text-white" />
//             </button>

//             <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
//               <div className="relative">
//                 <img
//                   src={selectedImage.src}
//                   alt={selectedImage.alt}
//                   className="w-full h-auto max-h-[75vh] object-contain"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">
//                       {selectedImage.alt}
//                     </h3>
//                     <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
//                       {selectedImage.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  X,
  ZoomIn,
  Camera,
  Users,
  Building,
  Heart,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/client";

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
    src: "/gallery/IMG_1308[1].jpg",
    alt: "Hospital Image - IMG_1308",
    category: "General",
  },
  {
    id: 3,
    src: "/gallery/IMG_1310[1].jpg",
    alt: "Hospital Image - IMG_1310",
    category: "General",
  },
  {
    id: 4,
    src: "/gallery/IMG_1310[1].jpg",
    alt: "Hospital Image - IMG_1310 (Duplicate)",
    category: "General",
  },
  {
    id: 5,
    src: "/gallery/IMG_1449.jpg",
    alt: "Hospital Image - IMG_1449",
    category: "General",
  },
  {
    id: 6,
    src: "/gallery/IMG_1451.jpg",
    alt: "Hospital Image - IMG_1451",
    category: "General",
  },
  {
    id: 7,
    src: "/gallery/IMG_1452.jpg",
    alt: "Hospital Image - IMG_1452",
    category: "General",
  },
  {
    id: 8,
    src: "/gallery/IMG_1453.jpg",
    alt: "Hospital Image - IMG_1453",
    category: "General",
  },
  {
    id: 9,
    src: "/gallery/ganpati ji main.JPG",
    alt: "Ganpati Ji Main",
    category: "Amenities",
  },
  {
    id: 10,
    src: "/gallery/reception main.JPG",
    alt: "Reception",
    category: "Amenities",
  },
  {
    id: 11,
    src: "/gallery/IMG_1421.jpg",
    alt: "Hospital Image - IMG_1421",
    category: "General",
  },
  {
    id: 12,
    src: "/gallery/IMG_1423.jpg",
    alt: "Hospital Image - IMG_1423",
    category: "General",
  },
  {
    id: 13,
    src: "/gallery/IMG_1424.jpg",
    alt: "Hospital Image - IMG_1424",
    category: "General",
  },
  {
    id: 15,
    src: "/gallery/directors room 2.JPG",
    alt: "Director's Room 2",
    category: "Pediatrics",
  },
  {
    id: 16,
    src: "/gallery/staff ,main.JPG",
    alt: "Staff Area",
    category: "Pediatrics",
  },

  // Remaining 42 items (IDs 17–58) — auto-filled from original array, excluding already used
  {
    id: 17,
    src: "/gallery/Lift .jpg",
    alt: "Lift",
    category: "Infrastructure",
  },
  {
    id: 18,
    src: "/gallery/Pediatrics OPD Director_s.jpg",
    alt: "Pediatrics OPD Director's Office",
    category: "Pediatrics",
  },
  {
    id: 19,
    src: "/gallery/Helping staff.jpg",
    alt: "Helping Staff",
    category: "Team",
  },
  {
    id: 20,
    src: "/gallery/nicu main.JPG",
    alt: "NICU",
    category: "Critical Care",
  },
  {
    id: 21,
    src: "/gallery/Dedicated Specious Waiting Lounge.jpg",
    alt: "Spacious Waiting Lounge",
    category: "Infrastructure",
  },
  {
    id: 22,
    src: "/gallery/specious icu.JPG",
    alt: "ICU View 1",
    category: "Critical Care",
  },
  {
    id: 23,
    src: "/gallery/ICU(2).jpg",
    alt: "ICU View 2",
    category: "Critical Care",
  },
  {
    id: 24,
    src: "/gallery/sonography machine pic.JPG",
    alt: "Sonography Machine",
    category: "Critical Care",
  },
  {
    id: 25,
    src: "/gallery/Specious Coridoors.jpg",
    alt: "Spacious Corridors",
    category: "Infrastructure",
  },
  {
    id: 26,
    src: "/gallery/Ayushman Kiosk.jpg",
    alt: "Ayushman Kiosk",
    category: "Amenities",
  },
  {
    id: 27,
    src: "/gallery/Dedicated Emergency Room.jpg",
    alt: "Dedicated Emergency Room",
    category: "Emergency Care",
  },
  {
    id: 28,
    src: "/gallery/dedicated emergency OT.jpg",
    alt: "Dedicated Emergency OT",
    category: "Surgery",
  },
  {
    id: 29,
    src: "/gallery/Emergency Room.jpg",
    alt: "Emergency Room",
    category: "Emergency Care",
  },
  {
    id: 30,
    src: "/gallery/Dedicated Labour Room.jpg",
    alt: "Dedicated Labour Room",
    category: "Maternity",
  },
  {
    id: 31,
    src: "/gallery/Gynae OT.jpg",
    alt: "Gynae Operation Theatre",
    category: "Surgery",
  },
  {
    id: 32,
    src: "/gallery/Modular OT.jpg",
    alt: "Modular Operation Theatre",
    category: "Surgery",
  },
  {
    id: 33,
    src: "/gallery/Temple.jpg",
    alt: "Temple",
    category: "Amenities",
  },

  {
    id: 35,
    src: "/gallery/IMG_1329[1].jpg",
    alt: "Hospital Image - IMG_1329",
    category: "General",
  },
  {
    id: 36,
    src: "/gallery/IMG_1335[1].jpg",
    alt: "Hospital Image - IMG_1335",
    category: "General",
  },
  {
    id: 37,
    src: "/gallery/IMG_1339[1].jpg",
    alt: "Hospital Image - IMG_1339",
    category: "General",
  },
  {
    id: 38,
    src: "/gallery/IMG_1361[1].jpg",
    alt: "Hospital Image - IMG_1361",
    category: "General",
  },
  {
    id: 39,
    src: "/gallery/IMG_1374[1].jpg",
    alt: "Hospital Image - IMG_1374",
    category: "General",
  },
  {
    id: 40,
    src: "/gallery/IMG_1375[1].jpg",
    alt: "Hospital Image - IMG_1375",
    category: "General",
  },
  {
    id: 41,
    src: "/gallery/IMG_1380[1].jpg",
    alt: "Hospital Image - IMG_1380",
    category: "General",
  },
  {
    id: 42,
    src: "/gallery/IMG_1384.jpg",
    alt: "Hospital Image - IMG_1384",
    category: "General",
  },
  {
    id: 43,
    src: "/gallery/IMG_1386.jpg",
    alt: "Hospital Image - IMG_1386",
    category: "General",
  },
  {
    id: 44,
    src: "/gallery/IMG_1391.jpg",
    alt: "Hospital Image - IMG_1391",
    category: "General",
  },
  {
    id: 45,
    src: "/gallery/IMG_1392.jpg",
    alt: "Hospital Image - IMG_1392",
    category: "General",
  },
  {
    id: 46,
    src: "/gallery/IMG_1394.jpg",
    alt: "Hospital Image - IMG_1394",
    category: "General",
  },

  {
    id: 49,
    src: "/gallery/IMG_1409.jpg",
    alt: "Hospital Image - IMG_1409",
    category: "General",
  },

  {
    id: 51,
    src: "/gallery/IMG_1442.jpg",
    alt: "Hospital Image - IMG_1442",
    category: "General",
  },
  {
    id: 52,
    src: "/gallery/IMG_1444.jpg",
    alt: "Hospital Image - IMG_1444",
    category: "General",
  },
  {
    id: 53,
    src: "/gallery/IMG_1445.jpg",
    alt: "Hospital Image - IMG_1445",
    category: "General",
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

const IMAGES_PER_PAGE = 6;

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedCount, setDisplayedCount] = useState(IMAGES_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const [sanityImages, setSanityImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchSanityImages = async () => {
      const res = await fetch("/api/gallery", { method: "GET" });
      const json = await res.json();

      if (json.success) {
        const fetchedImages: GalleryImage[] = json.data.map(
          (item: any, i: number) => ({
            id: 100 + i, // avoid ID collision with local images
            src: urlFor(item.image).width(800).url(),
            alt: item.title,
            category: item.category,
          })
        );
        setSanityImages(fetchedImages);
      }
    };

    fetchSanityImages();
  }, []);

  const featuredImage = galleryImages.find((img) => img.featured);
  // const regularImages = galleryImages.filter((img) => !img.featured);
  const regularImages = [
    ...galleryImages.filter((img) => !img.featured),
    ...sanityImages, // appended after static
  ];

  const filteredImages =
    activeCategory === "All"
      ? regularImages
      : regularImages.filter((image) => image.category === activeCategory);

  const displayedImages = filteredImages.slice(0, displayedCount);
  const hasMoreImages = displayedCount < filteredImages.length;

  const loadMoreImages = useCallback(() => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setDisplayedCount((prev) =>
        Math.min(prev + IMAGES_PER_PAGE, filteredImages.length)
      );
      setIsLoading(false);
    }, 500);
  }, [filteredImages.length]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setDisplayedCount(IMAGES_PER_PAGE);
  };

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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
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
                    <Image
                      src={featuredImage.src}
                      alt={featuredImage.alt}
                      width={1200}
                      height={600}
                      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
            </motion.div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
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
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .filter((cat) => cat !== "Team")
                .map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
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
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {displayedImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {hasMoreImages && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <button
                onClick={loadMoreImages}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
                <span>
                  {isLoading
                    ? "Loading..."
                    : `View More (${
                        filteredImages.length - displayedCount
                      } remaining)`}
                </span>
              </button>
            </motion.div>
          )}

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
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[75vh] object-contain"
                    priority
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
