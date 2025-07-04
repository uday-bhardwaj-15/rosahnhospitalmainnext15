'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Baby, Eye, Bone, Stethoscope, TestTube, Pill, Clock, Shield, Users, Award, ArrowRight, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const departments = [
  {
    id: 'emergency',
    name: 'Emergency Services',
    icon: Shield,
    description: '24/7 emergency care with state-of-the-art trauma center',
    color: 'bg-red-500',
    services: [
      'Trauma Care',
      'Critical Care Unit',
      'Emergency Surgery',
      'Cardiac Emergency',
      'Stroke Care',
      'Pediatric Emergency'
    ],
    features: [
      '10-minute response time',
      'Level 1 Trauma Center',
      'Helicopter landing pad',
      'Advanced life support ambulances'
    ],
    image: 'https://images.pexels.com/photos/8845216/pexels-photo-8845216.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    availability: '24/7',
    contactNumber: '+1 (555) 911-HELP'
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: Heart,
    description: 'Comprehensive heart care from prevention to advanced interventions',
    color: 'bg-red-600',
    services: [
      'Cardiac Catheterization',
      'Angioplasty',
      'Pacemaker Implantation',
      'Heart Surgery',
      'Cardiac Rehabilitation',
      'Preventive Cardiology'
    ],
    features: [
      'Cath lab available 24/7',
      'Minimally invasive procedures',
      'Heart transplant program',
      'Cardiac imaging center'
    ],
    image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    availability: 'Mon-Fri 8AM-6PM, Emergency 24/7',
    contactNumber: '+1 (555) 123-HEART'
  },
  {
    id: 'neurology',
    name: 'Neurology & Neurosurgery',
    icon: Brain,
    description: 'Advanced neurological care for brain and spine conditions',
    color: 'bg-purple-600',
    services: [
      'Brain Surgery',
      'Spine Surgery',
      'Stroke Treatment',
      'Epilepsy Management',
      'Movement Disorders',
      'Neurological Rehabilitation'
    ],
    features: [
      'Gamma Knife radiosurgery',
      'Minimally invasive spine surgery',
      'Comprehensive stroke center',
      'Neuro ICU'
    ],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    availability: 'Mon-Fri 8AM-5PM, Emergency 24/7',
    contactNumber: '+1 (555) 123-NEURO'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & NICU',
    icon: Baby,
    description: 'Specialized care for children from birth to adolescence',
    color: 'bg-pink-500',
    services: [
      'Newborn Care',
      'NICU Level 2',
      'Pediatric Surgery',
      'Child Development',
      'Vaccination Programs',
      'Adolescent Medicine'
    ],
    features: [
      'NICU with 24-bed capacity',
      'Pediatric intensive care',
      'Child-friendly environment',
      'Family-centered care'
    ],
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    availability: 'Mon-Sat 8AM-8PM, NICU 24/7',
    contactNumber: '+1 (555) 123-KIDS'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: Bone,
    description: 'Complete bone, joint, and muscle care with advanced treatments',
    color: 'bg-blue-600',
    services: [
      'Joint Replacement',
      'Arthroscopy',
      'Sports Medicine',
      'Spine Surgery',
      'Trauma Surgery',
      'Physical Therapy'
    ],
    features: [
      'Robotic-assisted surgery',
      'Same-day surgery center',
      'Sports injury clinic',
      'Rehabilitation center'
    ],
    image: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    availability: 'Mon-Fri 7AM-6PM, Emergency 24/7',
    contactNumber: '+1 (555) 123-BONES'
  },
  {
    id: 'gynecology',
    name: 'Gynecology & Obstetrics',
    icon: Heart,
    description: 'Comprehensive women\'s health and maternity services',
    color: 'bg-teal-600',
    services: [
      'Prenatal Care',
      'Labor & Delivery',
      'High-Risk Pregnancy',
      'Gynecological Surgery',
      'Fertility Treatment',
      'Menopause Management'
    ],
    features: [
      'LDRP suites',
      'High-risk pregnancy unit',
      'Minimally invasive surgery',
      'Breastfeeding support'
    ],
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    availability: 'Mon-Sat 8AM-6PM, Delivery 24/7',
    contactNumber: '+1 (555) 123-WOMEN'
  }
];

const diagnosticServices = [
  {
    name: 'Laboratory Services',
    icon: TestTube,
    description: 'Comprehensive diagnostic testing with rapid results',
    services: ['Blood Tests', 'Urine Analysis', 'Microbiology', 'Pathology', 'Molecular Diagnostics'],
    turnaround: '2-24 hours',
    availability: '24/7 for emergency tests'
  },
  {
    name: 'Radiology & Imaging',
    icon: Eye,
    description: 'Advanced imaging technology for accurate diagnosis',
    services: ['X-Ray', 'CT Scan', 'MRI', 'Ultrasound', 'Mammography', 'Nuclear Medicine'],
    turnaround: '30 minutes - 2 hours',
    availability: 'Mon-Sat 7AM-10PM, Emergency 24/7'
  },
  {
    name: 'Pharmacy Services',
    icon: Pill,
    description: 'Full-service pharmacy with medication management',
    services: ['Prescription Filling', 'Drug Information', 'Medication Therapy', 'Compounding'],
    turnaround: '15-30 minutes',
    availability: 'Mon-Sat 8AM-8PM'
  }
];

const supportServices = [
  { name: 'Blood Bank', description: 'Safe blood supply for transfusions', availability: '24/7' },
  { name: 'Physiotherapy', description: 'Rehabilitation and physical therapy', availability: 'Mon-Sat 8AM-6PM' },
  { name: 'Nutrition Counseling', description: 'Dietary planning and nutrition education', availability: 'Mon-Fri 9AM-5PM' },
  { name: 'Social Services', description: 'Patient advocacy and support services', availability: 'Mon-Fri 8AM-5PM' },
  { name: 'Chaplaincy', description: 'Spiritual care and counseling', availability: '24/7 on-call' },
  { name: 'Patient Education', description: 'Health education and wellness programs', availability: 'Mon-Fri 9AM-4PM' }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by expert medical professionals 
              using state-of-the-art technology and compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Services</h3>
                  <p className="text-gray-600 mb-4">24/7 emergency care available</p>
                  <Button variant="destructive" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 911
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Appointment</h3>
                  <p className="text-gray-600 mb-4">Schedule your consultation today</p>
                  <Button className="w-full">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Telemedicine</h3>
                  <p className="text-gray-600 mb-4">Virtual consultations available</p>
                  <Button variant="secondary" className="w-full">
                    Start Video Call
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Medical Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized departments offer expert care across all major medical disciplines
            </p>
          </motion.div>

          <Tabs defaultValue="emergency" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {departments.map((dept) => (
                <TabsTrigger
                  key={dept.id}
                  value={dept.id}
                  className="flex items-center space-x-2 data-[state=active]:bg-blue-100"
                >
                  <dept.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{dept.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {departments.map((dept) => (
              <TabsContent key={dept.id} value={dept.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="overflow-hidden shadow-lg">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="aspect-video lg:aspect-auto relative">
                        <Image
                          src={dept.image}
                          alt={dept.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className={`w-12 h-12 ${dept.color} rounded-full flex items-center justify-center mb-2`}>
                            <dept.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">{dept.name}</h3>
                        </div>
                      </div>
                      
                      <CardContent className="p-8">
                        <p className="text-lg text-gray-600 mb-6">{dept.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3">Services Offered</h4>
                            <ul className="space-y-2">
                              {dept.services.map((service, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600">{service}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {dept.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <Award className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="border-t pt-6">
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium">Availability</p>
                                <p className="text-sm text-gray-600">{dept.availability}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium">Contact</p>
                                <p className="text-sm text-gray-600">{dept.contactNumber}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-4">
                            <Button className="flex-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              Book Appointment
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Phone className="w-4 h-4 mr-2" />
                              Call Department
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Diagnostic Services */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Diagnostic Services
            </h2>
            <p className="text-lg text-gray-600">
              Advanced diagnostic capabilities for accurate and timely results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {diagnosticServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Services Include:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.services.map((item) => (
                            <Badge key={item} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Turnaround: </span>
                          {service.turnaround}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Available: </span>
                        {service.availability}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support services to enhance your healthcare experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Medical Care?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert medical team is ready to provide you with the highest quality care. 
              Contact us today to schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" variant="secondary">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}