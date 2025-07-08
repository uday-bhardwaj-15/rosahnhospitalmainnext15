// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//   Car,
//   Bus,
//   Armchair as Wheelchair,
//   Users,
//   Loader2,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";

// const contactInfo = [
//   {
//     icon: Phone,
//     title: "Phone Numbers",
//     items: [
//       { label: "Main Reception", value: "+91 9111222234" },
//       { label: "Emergency", value: "+91 7554261002" },
//       { label: "Emergency", value: "+91 7024144851" },
//     ],
//   },
//   {
//     icon: Mail,
//     title: "Email Addresses",
//     items: [
//       { label: "General Inquiries", value: "infoatroshanhospital@gmail.com" },
//       // { label: "Appointments", value: "appointments@roshanhospital.com" },
//       // { label: "Patient Records", value: "records@roshanhospital.com" },
//     ],
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     items: [
//       { label: "Address", value: "7, A-B, Raisen Rd, Govind Garden" },
//       { label: "City", value: "Sector B, Govindpura, Bhopal" },
//       { label: "Directions", value: "Madhya Pradesh 462023" },
//     ],
//   },
//   {
//     icon: Clock,
//     title: "Operating Hours",
//     items: [
//       { label: "Emergency Services", value: "24/7" },
//       { label: "General Consultation", value: "Mon-Sat: 8AM-8PM" },
//       { label: "Pharmacy", value: "24/7" },
//     ],
//   },
// ];

// const departments = [
//   "General Inquiry",
//   "Cardiology",
//   "Neurology",
//   "Orthopedics",
//   "Pediatrics",
//   "Gynecology",
//   "Emergency Services",
//   "Billing & Insurance",
//   "Patient Records",
// ];

// const reasons = [
//   "Schedule Appointment",

//   "Insurance Inquiry",
//   "General Information",
//   "Complaint/Feedback",
//   "Emergency ",
//   "Other",
// ];

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     department: "",
//     reason: "",
//     message: "",
//     preferredContact: "email",
//     isEmergency: false,
//   });

//   const { toast } = useToast();
//   const [isLoading, setIsLoading] = useState(false);
//   const handleInputChange = (field: string, value: string | boolean) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async () => {
//     console.log("Button clicked");

//     if (formData.isEmergency) {
//       toast({
//         title: "Emergency Situation Detected",
//         description:
//           "For emergencies, please call 7554261002 immediately or visit our emergency department.",
//         variant: "destructive",
//       });
//       return;
//     }

//     // Basic validation
//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.message
//     ) {
//       toast({
//         title: "Validation Error",
//         description: "Please fill in all required fields.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();

//       if (res.ok) {
//         toast({
//           title: "Message Sent Successfully",
//           description:
//             "Thank you for contacting us. We'll get back to you within 24 hours.",
//         });

//         // Reset form
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           department: "",
//           reason: "",
//           message: "",
//           preferredContact: "email",
//           isEmergency: false,
//         });
//       } else {
//         throw new Error(result.message || "Something went wrong");
//       }
//     } catch (err) {
//       console.error("Submit error:", err);
//       toast({
//         title: "Error",
//         description: "Failed to send message. Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // console.log(formData);
//   return (
//     <div className="min-h-screen bg-gradient-to-br overflow-x-hidden from-blue-50 via-white to-green-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
//             <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//               We're here to help. Reach out to us for appointments, questions,
//               or any assistance you need.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Emergency Alert */}
//       <section className="py-4 bg-red-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="font-semibold">
//               🚨 FOR MEDICAL EMERGENCIES: Call 7554261002 or visit our Emergency
//               Department immediately
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Get In Touch
//             </h2>
//             <p className="text-lg text-gray-600">
//               Multiple ways to reach us for your convenience
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={info.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
//                   <CardHeader className="text-center">
//                     <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <info.icon className="w-8 h-8 text-blue-600" />
//                     </div>
//                     <CardTitle className="text-xl">{info.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-3">
//                       {info.items.map((item, idx) => (
//                         <div key={idx}>
//                           <p className="font-medium text-gray-900 text-sm">
//                             {item.label}
//                           </p>
//                           <p className="text-gray-600 text-sm">{item.value}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {/* Contact Form and Map */}
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Send Us a Message</CardTitle>
//                   <CardDescription>
//                     Fill out the form below and we'll get back to you as soon as
//                     possible.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-6">
//                     {/* Emergency Checkbox */}
//                     <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
//                       <Checkbox
//                         id="emergency"
//                         checked={formData.isEmergency}
//                         onCheckedChange={(checked) =>
//                           handleInputChange("isEmergency", checked as boolean)
//                         }
//                       />
//                       <Label
//                         htmlFor="emergency"
//                         className="text-red-700 font-medium"
//                       >
//                         This is a medical emergency
//                       </Label>
//                     </div>

//                     {/* Name Fields */}
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="firstName">First Name *</Label>
//                         <Input
//                           id="firstName"
//                           value={formData.firstName}
//                           onChange={(e) =>
//                             handleInputChange("firstName", e.target.value)
//                           }
//                           placeholder="Enter your first name"
//                           disabled={isLoading}
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="lastName">Last Name *</Label>
//                         <Input
//                           id="lastName"
//                           value={formData.lastName}
//                           onChange={(e) =>
//                             handleInputChange("lastName", e.target.value)
//                           }
//                           placeholder="Enter your last name"
//                           disabled={isLoading}
//                         />
//                       </div>
//                     </div>

//                     {/* Contact Information */}
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="email">Email Address *</Label>
//                         <Input
//                           id="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={(e) =>
//                             handleInputChange("email", e.target.value)
//                           }
//                           placeholder="your.email@example.com"
//                           disabled={isLoading}
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="phone">Phone Number</Label>
//                         <Input
//                           id="phone"
//                           type="tel"
//                           value={formData.phone}
//                           onChange={(e) =>
//                             handleInputChange("phone", e.target.value)
//                           }
//                           placeholder="+1 (555) 123-4567"
//                           disabled={isLoading}
//                         />
//                       </div>
//                     </div>

//                     {/* Department and Reason */}
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="department">Department</Label>
//                         <Select
//                           value={formData.department}
//                           onValueChange={(value) =>
//                             handleInputChange("department", value)
//                           }
//                           disabled={isLoading}
//                         >
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select a department" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {departments.map((dept) => (
//                               <SelectItem key={dept} value={dept}>
//                                 {dept}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div>
//                         <Label htmlFor="reason">Reason for Contact</Label>
//                         <Select
//                           value={formData.reason}
//                           onValueChange={(value) =>
//                             handleInputChange("reason", value)
//                           }
//                           disabled={isLoading}
//                         >
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select a reason" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {reasons.map((reason) => (
//                               <SelectItem key={reason} value={reason}>
//                                 {reason}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </div>

//                     {/* Message */}
//                     <div>
//                       <Label htmlFor="message">Message *</Label>
//                       <Textarea
//                         id="message"
//                         rows={4}
//                         value={formData.message}
//                         onChange={(e) =>
//                           handleInputChange("message", e.target.value)
//                         }
//                         placeholder="Please describe your inquiry or concern in detail..."
//                         disabled={isLoading}
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <Button
//                       type="button"
//                       className="w-full"
//                       size="lg"
//                       onClick={handleSubmit}
//                       disabled={isLoading}
//                     >
//                       {isLoading ? (
//                         <>
//                           <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="w-4 h-4 mr-2" />
//                           Send Message
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Map and Directions */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <Card className="shadow-lg">
//                 <CardContent className="p-0">
//                   <div className="aspect-video rounded-t-lg relative overflow-hidden">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117303.44451154201!2d77.35672350246504!3d23.252814207267576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397c42043a6c624f%3A0x4ea4ae4b80550599!2s7%2C%20A-B%2C%20Raisen%20Rd%2C%20Govind%20Garden%2C%20Sector%20B%2C%20Govindpura%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!3m2!1d23.2528357!2d77.4391251!5e0!3m2!1sen!2sin!4v1751707377858!5m2!1sen!2sin"
//                       className="absolute inset-0 w-full h-full border-0"
//                       allowFullScreen={true}
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <Button
//                       className="w-full"
//                       variant="outline"
//                       onClick={() =>
//                         window.open(
//                           "https://maps.app.goo.gl/VtjyTDDZS9Nkbmqy9",
//                           "_blank"
//                         )
//                       }
//                     >
//                       <MapPin className="w-4 h-4 mr-2" />
//                       Get Directions
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Transportation & Accessibility */}
//               <Card className="shadow-lg">
//                 <CardHeader>
//                   <CardTitle>Transportation & Accessibility</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-start space-x-3">
//                     <Car className="w-5 h-5 text-blue-600 mt-1" />
//                     <div>
//                       <h4 className="font-medium">Parking</h4>
//                       <p className="text-sm text-gray-600">
//                         Free parking available in our 500-space garage. Valet
//                         service available.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <Bus className="w-5 h-5 text-blue-600 mt-1" />
//                     <div>
//                       <h4 className="font-medium">Public Transportation</h4>
//                       <p className="text-sm text-gray-600">
//                         Subway lines 4, 5, 6 - Medical Center Station. Multiple
//                         bus routes available.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <Wheelchair className="w-5 h-5 text-blue-600 mt-1" />
//                     <div>
//                       <h4 className="font-medium">Accessibility</h4>
//                       <p className="text-sm text-gray-600">
//                         Fully wheelchair accessible with elevators, ramps, and
//                         accessible restrooms.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <Users className="w-5 h-5 text-blue-600 mt-1" />
//                     <div>
//                       <h4 className="font-medium">Visitor Information</h4>
//                       <p className="text-sm text-gray-600">
//                         Visiting hours: 8AM-8PM daily. Two visitors per patient
//                         maximum.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
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
  Users,
  Loader2,
  Armchair as Wheelchair,
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
      { label: "Emergency", value: "+91 7554261002" },
      { label: "Emergency", value: "+91 7024144851" },
    ],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    items: [
      { label: "General Inquiries", value: "infoatroshanhospital@gmail.com" },
    ],
  },
  {
    icon: MapPin,
    title: "Location",
    items: [
      { label: "Address", value: "7, A-B, Raisen Rd, Govind Garden" },
      { label: "City", value: "Sector B, Govindpura, Bhopal" },
      { label: "State", value: "Madhya Pradesh 462023" },
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
  "Insurance Inquiry",
  "General Information",
  "Complaint/Feedback",
  "Emergency",
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
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const requiredFields = ["firstName", "lastName", "email", "message"];
    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (missingFields.length > 0) {
      return { isValid: false, message: "Please fill in all required fields." };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { isValid: false, message: "Please enter a valid email address." };
    }

    // Phone validation (optional but if provided should be valid)
    if (formData.phone) {
      const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
      if (!phoneRegex.test(formData.phone)) {
        return {
          isValid: false,
          message: "Please enter a valid phone number.",
        };
      }
    }

    return { isValid: true, message: "" };
  };

  const handleSubmit = async () => {
    // console.log("Button clicked");

    if (formData.isEmergency) {
      toast({
        title: "Emergency Situation Detected",
        description:
          "For emergencies, please call 7554261002 or 7024144851 immediately or visit our emergency department.",
        variant: "destructive",
      });
      return;
    }

    // Enhanced validation
    const validation = validateForm();
    if (!validation.isValid) {
      toast({
        title: "Validation Error",
        description: validation.message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
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
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err) {
      // console.error("Submit error:", err);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
              🚨 FOR MEDICAL EMERGENCIES: Call 7554261002 or 7024144851
              immediately or visit our Emergency Department
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
                          <p className="text-gray-600 text-sm break-words">
                            {item.value}
                          </p>
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
                  <div className="space-y-6">
                    {/* Emergency Checkbox */}
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 font-medium">
                      🚨 This is a medical emergency — please call{" "}
                      <span className="font-semibold">+91 7554261002</span> or{" "}
                      <span className="font-semibold">+91 7024144851</span>.
                    </div>

                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="Enter your first name"
                          disabled={isLoading}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Enter your last name"
                          disabled={isLoading}
                          className="mt-1"
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
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your.email@example.com"
                          disabled={isLoading}
                          className="mt-1"
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
                          placeholder="+91 9876543210"
                          disabled={isLoading}
                          className="mt-1"
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
                          disabled={isLoading}
                        >
                          <SelectTrigger className="mt-1">
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
                          disabled={isLoading}
                        >
                          <SelectTrigger className="mt-1">
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
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Please describe your inquiry or concern in detail..."
                        disabled={isLoading}
                        className="mt-1"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="button"
                      className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                      size="lg"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
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
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video rounded-t-lg relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117303.44451154201!2d77.35672350246504!3d23.252814207267576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397c42043a6c624f%3A0x4ea4ae4b80550599!2s7%2C%20A-B%2C%20Raisen%20Rd%2C%20Govind%20Garden%2C%20Sector%20B%2C%20Govindpura%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!3m2!1d23.2528357!2d77.4391251!5e0!3m2!1sen!2sin!4v1751707377858!5m2!1sen!2sin"
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Roshan Hospital Location"
                    />
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
                    <Car className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Parking</h4>
                      <p className="text-sm text-gray-600">
                        Free parking available. Convenient and secure parking
                        facilities for patients and visitors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Bus className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Public Transportation</h4>
                      <p className="text-sm text-gray-600">
                        Well-connected by local bus routes. Easy access from
                        major areas of Bhopal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Wheelchair className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Accessibility</h4>
                      <p className="text-sm text-gray-600">
                        Fully wheelchair accessible with ramps, elevators, and
                        accessible facilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Visitor Information</h4>
                      <p className="text-sm text-gray-600">
                        Visiting hours: 8AM-8PM daily. Please follow hospital
                        guidelines for visitor safety.
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
