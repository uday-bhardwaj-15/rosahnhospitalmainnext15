"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Upload,
  X,
  ChevronLeft,
  ChevronRight,
  Building2,
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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ImageCarousel from "@/components/admin/ImageCarousel";

interface Department {
  id: number;
  name: string;
  description: string;
  head: string;
  images: string[];
  doctorCount: number;
  established: string;
}

const mockDepartments: Department[] = [
  {
    id: 1,
    name: "Cardiology",
    description:
      "Comprehensive heart care with advanced cardiac procedures and treatments.",
    head: "Dr. Michael Chen",
    images: [
      "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
    doctorCount: 8,
    established: "2015",
  },
  {
    id: 2,
    name: "Neurology",
    description: "Advanced neurological care for brain and spine conditions.",
    head: "Dr. Sanjana Gupta",
    images: [
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/8845216/pexels-photo-8845216.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
    doctorCount: 6,
    established: "2016",
  },
  {
    id: 3,
    name: "Pediatrics",
    description: "Specialized care for children from birth to adolescence.",
    head: "Dr. Sarah Johnson",
    images: [
      "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
    doctorCount: 5,
    established: "2017",
  },
  {
    id: 4,
    name: "Orthopedics",
    description:
      "Complete bone, joint, and muscle care with advanced treatments.",
    head: "Dr. James Wilson",
    images: [
      "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
    doctorCount: 7,
    established: "2018",
  },
];

const doctors = [
  "Dr. Michael Chen",
  "Dr. Sanjana Gupta",
  "Dr. Sarah Johnson",
  "Dr. James Wilson",
  "Dr. Sherry Ross",
  "Dr. Jen Gunter",
];

export default function DepartmentsManager() {
  const [departments, setDepartments] = useState<Department[]>(mockDepartments);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    head: "",
    images: [] as string[],
    established: "",
  });
  const { toast } = useToast();

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.head.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingDepartment) {
      // Update existing department
      setDepartments((prev) =>
        prev.map((dept) =>
          dept.id === editingDepartment.id
            ? { ...dept, ...formData, doctorCount: dept.doctorCount }
            : dept
        )
      );
      toast({
        title: "Department Updated",
        description: "Department information has been successfully updated.",
      });
    } else {
      // Add new department
      const newDepartment: Department = {
        id: Date.now(),
        ...formData,
        doctorCount: 0,
      };
      setDepartments((prev) => [...prev, newDepartment]);
      toast({
        title: "Department Added",
        description: "New department has been successfully created.",
      });
    }

    // Reset form
    setFormData({
      name: "",
      description: "",
      head: "",
      images: [],
      established: "",
    });
    setEditingDepartment(null);
    setIsAddDialogOpen(false);
  };

  const handleEdit = (department: Department) => {
    setEditingDepartment(department);
    setFormData({
      name: department.name,
      description: department.description,
      head: department.head,
      images: department.images,
      established: department.established,
    });
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setDepartments((prev) => prev.filter((dept) => dept.id !== id));
    toast({
      title: "Department Deleted",
      description: "Department has been successfully removed.",
      variant: "destructive",
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages].slice(0, 5), // Max 5 images
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Departments
            </h1>
            <p className="text-gray-600">
              Manage hospital departments and their information
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setEditingDepartment(null);
                  setFormData({
                    name: "",
                    description: "",
                    head: "",
                    images: [],
                    established: "",
                  });
                }}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Department
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingDepartment ? "Edit Department" : "Add New Department"}
                </DialogTitle>
                <DialogDescription>
                  {editingDepartment
                    ? "Update the department information below."
                    : "Fill in the details to create a new department."}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Department Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="e.g., Cardiology"
                    />
                  </div>
                  <div>
                    <Label htmlFor="established">Established Year</Label>
                    <Input
                      id="established"
                      value={formData.established}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          established: e.target.value,
                        }))
                      }
                      placeholder="e.g., 2015"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="head">Department Head</Label>
                  <Select
                    value={formData.head}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, head: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department head" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor} value={doctor}>
                          {doctor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={3}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Brief description of the department..."
                  />
                </div>

                <div>
                  <Label>Department Images (Max 5)</Label>
                  <div className="mt-2">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Click to upload images
                        </p>
                        <p className="text-xs text-gray-500">
                          JPG, PNG up to 5MB each
                        </p>
                      </div>
                    </label>
                  </div>

                  {formData.images.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Uploaded Images:
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {formData.images.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-20 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingDepartment ? "Update Department" : "Add Department"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDepartments.map((department, index) => (
          <motion.div
            key={department.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                {/* Image Carousel */}
                <div className="aspect-video relative">
                  <ImageCarousel images={department.images} />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {department.name}
                    </h3>
                    <Badge variant="secondary">{department.established}</Badge>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {department.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Department Head:</span>
                      <span className="font-medium">{department.head}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Doctors:</span>
                      <span className="font-medium">
                        {department.doctorCount}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(department)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(department.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredDepartments.length === 0 && (
        <div className="text-center py-16">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No departments found
          </h3>
          <p className="text-gray-600 mb-6">
            {searchTerm
              ? "Try adjusting your search criteria."
              : "Get started by adding your first department."}
          </p>
          {!searchTerm && (
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add First Department
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}
