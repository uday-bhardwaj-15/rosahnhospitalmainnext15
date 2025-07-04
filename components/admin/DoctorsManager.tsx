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
  Phone,
  Mail,
  MapPin,
  Users,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  department: string;
  email: string;
  phone: string;
  experience: string;
  education: string;
  image: string;
  bio: string;
  languages: string[];
  consultationFee: string;
  rating: number;
  reviews: number;
}

const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sanjana Gupta",
    specialty: "Neurosurgeon",
    department: "Neurology",
    email: "sanjana.gupta@roshanhospital.com",
    phone: "+1 (555) 123-4567",
    experience: "12 years",
    education: "MBBS, MS, MCh (Neurosurgery)",
    image:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "Dr. Sanjana Gupta is a highly experienced neurosurgeon specializing in complex brain and spine surgeries.",
    languages: ["English", "Hindi", "Spanish"],
    consultationFee: "$200",
    rating: 4.9,
    reviews: 324,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    department: "Cardiology",
    email: "michael.chen@roshanhospital.com",
    phone: "+1 (555) 123-4568",
    experience: "14 years",
    education: "MBBS, MD (Cardiology)",
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "Dr. Michael Chen is an interventional cardiologist with expertise in cardiac catheterization and angioplasty.",
    languages: ["English", "Mandarin"],
    consultationFee: "$190",
    rating: 4.8,
    reviews: 298,
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    department: "Pediatrics",
    email: "sarah.johnson@roshanhospital.com",
    phone: "+1 (555) 123-4569",
    experience: "11 years",
    education: "MBBS, MD (Pediatrics)",
    image:
      "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "Dr. Sarah Johnson is a dedicated pediatrician providing comprehensive care for children.",
    languages: ["English", "French"],
    consultationFee: "$140",
    rating: 4.9,
    reviews: 356,
  },
];

const departments = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Gynecology",
];
const specialties = [
  "Cardiologist",
  "Neurosurgeon",
  "Pediatrician",
  "Orthopedic Surgeon",
  "Gynecologist",
  "Psychiatrist",
];

export default function DoctorsManager() {
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctors);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    department: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    image: "",
    bio: "",
    languages: [] as string[],
    consultationFee: "",
  });
  const { toast } = useToast();

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      !filterDepartment || doctor.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingDoctor) {
      // Update existing doctor
      setDoctors((prev) =>
        prev.map((doctor) =>
          doctor.id === editingDoctor.id
            ? {
                ...doctor,
                ...formData,
                rating: doctor.rating,
                reviews: doctor.reviews,
              }
            : doctor
        )
      );
      toast({
        title: "Doctor Updated",
        description: "Doctor information has been successfully updated.",
      });
    } else {
      // Add new doctor
      const newDoctor: Doctor = {
        id: Date.now(),
        ...formData,
        rating: 0,
        reviews: 0,
      };
      setDoctors((prev) => [...prev, newDoctor]);
      toast({
        title: "Doctor Added",
        description: "New doctor has been successfully added.",
      });
    }

    // Reset form
    setFormData({
      name: "",
      specialty: "",
      department: "",
      email: "",
      phone: "",
      experience: "",
      education: "",
      image: "",
      bio: "",
      languages: [],
      consultationFee: "",
    });
    setEditingDoctor(null);
    setIsAddDialogOpen(false);
  };

  const handleEdit = (doctor: Doctor) => {
    setEditingDoctor(doctor);
    setFormData({
      name: doctor.name,
      specialty: doctor.specialty,
      department: doctor.department,
      email: doctor.email,
      phone: doctor.phone,
      experience: doctor.experience,
      education: doctor.education,
      image: doctor.image,
      bio: doctor.bio,
      languages: doctor.languages,
      consultationFee: doctor.consultationFee,
    });
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setDoctors((prev) => prev.filter((doctor) => doctor.id !== id));
    toast({
      title: "Doctor Removed",
      description: "Doctor has been successfully removed.",
      variant: "destructive",
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Doctors</h1>
            <p className="text-gray-600">
              Manage doctor profiles and information
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setEditingDoctor(null);
                  setFormData({
                    name: "",
                    specialty: "",
                    department: "",
                    email: "",
                    phone: "",
                    experience: "",
                    education: "",
                    image: "",
                    bio: "",
                    languages: [],
                    consultationFee: "",
                  });
                }}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Doctor
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingDoctor ? "Edit Doctor" : "Add New Doctor"}
                </DialogTitle>
                <DialogDescription>
                  {editingDoctor
                    ? "Update the doctor information below."
                    : "Fill in the details to add a new doctor."}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Image */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={formData.image} />
                      <AvatarFallback>
                        {formData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="profile-upload"
                    />
                    <label
                      htmlFor="profile-upload"
                      className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700"
                    >
                      <Upload className="w-4 h-4" />
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Click to upload profile photo
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
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
                      placeholder="Dr. John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialty">Specialty *</Label>
                    <Select
                      value={formData.specialty}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, specialty: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="department">Department *</Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, department: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          experience: e.target.value,
                        }))
                      }
                      placeholder="e.g., 10 years"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="doctor@roshanhospital.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="education">Education</Label>
                    <Input
                      id="education"
                      value={formData.education}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          education: e.target.value,
                        }))
                      }
                      placeholder="MBBS, MD"
                    />
                  </div>
                  <div>
                    <Label htmlFor="consultationFee">Consultation Fee</Label>
                    <Input
                      id="consultationFee"
                      value={formData.consultationFee}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          consultationFee: e.target.value,
                        }))
                      }
                      placeholder="$150"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Biography</Label>
                  <Textarea
                    id="bio"
                    rows={3}
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, bio: e.target.value }))
                    }
                    placeholder="Brief biography and expertise..."
                  />
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
                    {editingDoctor ? "Update Doctor" : "Add Doctor"}
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
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterDepartment} onValueChange={setFilterDepartment}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Departments</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={doctor.image} alt={doctor.name} />
                    <AvatarFallback>
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {doctor.specialty}
                    </p>
                    <Badge variant="secondary">{doctor.department}</Badge>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{doctor.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Experience:</span>
                    <span className="font-medium">{doctor.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Fee:</span>
                    <span className="font-medium">
                      {doctor.consultationFee}
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
                    onClick={() => handleEdit(doctor)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(doctor.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No doctors found
          </h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || filterDepartment
              ? "Try adjusting your search criteria."
              : "Get started by adding your first doctor."}
          </p>
          {!searchTerm && !filterDepartment && (
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add First Doctor
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}
