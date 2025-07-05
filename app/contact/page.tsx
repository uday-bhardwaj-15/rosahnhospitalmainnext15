"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Car,
  Bus,
  Armchair as Wheelchair,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    items: [
      { label: "Main Reception", value: "+91 9111222234" },
      // { label: "Emergency", value: "+1 (555) 911-HELP" },
      // { label: "Appointments", value: "+1 (555) 123-BOOK" },
    ],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    items: [
      { label: "General Inquiries", value: "info@roshanhospital.com" },
      { label: "Appointments", value: "appointments@roshanhospital.com" },
      { label: "Patient Records", value: "records@roshanhospital.com" },
    ],
  },
  {
    icon: MapPin,
    title: "Location",
    items: [
      { label: "Address", value: "7, A-B, Raisen Rd, Govind Garden" },
      { label: "City", value: "Sector B, Govindpura, Bhopal" },
      { label: "Directions", value: "Madhya Pradesh 462023" },
    ],
  },
  {
    icon: Clock,
    title: "Operating Hours",
    items: [
      { label: "Emergency Services", value: "24/7" },
      { label: "General Consultation", value: "Mon-Sat: 8AM-8PM" },
      { label: "Pharmacy", value: "24/7" },
    ],
  },
];

const departments = [
  "General Inquiry",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Gynecology",
  "Emergency Services",
  "Billing & Insurance",
  "Patient Records",
];

const reasons = [
  "Schedule Appointment",
  "Medical Records Request",
  "Billing Question",
  "Insurance Inquiry",
  "General Information",
  "Complaint/Feedback",
  "Emergency (Call 911)",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    reason: "",
    message: "",
    preferredContact: "email",
    isEmergency: false,
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.isEmergency) {
      toast({
        title: "Emergency Situation Detected",
        description:
          "For emergencies, please call 911 immediately or visit our emergency department.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      reason: "",
      message: "",
      preferredContact: "email",
      isEmergency: false,
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br overflow-x-hidden from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're here to help. Reach out to us for appointments, questions,
              or any assistance you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-4 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-semibold">
              🚨 FOR MEDICAL EMERGENCIES: Call 911 or visit our Emergency
              Department immediately
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {info.items.map((item, idx) => (
                        <div key={idx}>
                          <p className="font-medium text-gray-900 text-sm">
                            {item.label}
                          </p>
                          <p className="text-gray-600 text-sm">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Emergency Checkbox */}
                    <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <Checkbox
                        id="emergency"
                        checked={formData.isEmergency}
                        onCheckedChange={(checked) =>
                          handleInputChange("isEmergency", checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="emergency"
                        className="text-red-700 font-medium"
                      >
                        This is a medical emergency
                      </Label>
                    </div>

                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Department and Reason */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Select
                          value={formData.department}
                          onValueChange={(value) =>
                            handleInputChange("department", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a department" />
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
                        <Label htmlFor="reason">Reason for Contact</Label>
                        <Select
                          value={formData.reason}
                          onValueChange={(value) =>
                            handleInputChange("reason", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent>
                            {reasons.map((reason) => (
                              <SelectItem key={reason} value={reason}>
                                {reason}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Please describe your inquiry or concern in detail..."
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    {/* <div>
                      <Label>Preferred Contact Method</Label>
                      <div className="flex space-x-6 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="email-contact"
                            checked={formData.preferredContact === "email"}
                            onCheckedChange={() =>
                              handleInputChange("preferredContact", "email")
                            }
                          />
                          <Label htmlFor="email-contact">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="phone-contact"
                            checked={formData.preferredContact === "phone"}
                            onCheckedChange={() =>
                              handleInputChange("preferredContact", "phone")
                            }
                          />
                          <Label htmlFor="phone-contact">Phone</Label>
                        </div>
                      </div>
                    </div> */}

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Directions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              {/* <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Roshan Hospital
                        </h3>
                        <p className="text-gray-600">
                          123 Healthcare Avenue
                          <br />
                          Medical District, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <Button className="w-full" variant="outline">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card> */}
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video rounded-t-lg relative overflow-hidden">
                    {/* Embedded Map as Background */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117303.44451154201!2d77.35672350246504!3d23.252814207267576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397c42043a6c624f%3A0x4ea4ae4b80550599!2s7%2C%20A-B%2C%20Raisen%20Rd%2C%20Govind%20Garden%2C%20Sector%20B%2C%20Govindpura%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!3m2!1d23.2528357!2d77.4391251!5e0!3m2!1sen!2sin!4v1751707377858!5m2!1sen!2sin"
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* Overlay Content */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-70"></div> */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Roshan Hospital
                        </h3>
                        <p className="text-gray-700 font-medium">
                          123 Healthcare Avenue
                          <br />
                          Medical District, NY 10001
                        </p>
                      </div>
                    </div> */}
                  </div>

                  <div className="p-6">
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() =>
                        window.open(
                          "https://maps.app.goo.gl/VtjyTDDZS9Nkbmqy9",
                          "_blank"
                        )
                      }
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Transportation & Accessibility */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Transportation & Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Parking</h4>
                      <p className="text-sm text-gray-600">
                        Free parking available in our 500-space garage. Valet
                        service available.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Bus className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Public Transportation</h4>
                      <p className="text-sm text-gray-600">
                        Subway lines 4, 5, 6 - Medical Center Station. Multiple
                        bus routes available.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Wheelchair className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Accessibility</h4>
                      <p className="text-sm text-gray-600">
                        Fully wheelchair accessible with elevators, ramps, and
                        accessible restrooms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Visitor Information</h4>
                      <p className="text-sm text-gray-600">
                        Visiting hours: 8AM-8PM daily. Two visitors per patient
                        maximum.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
