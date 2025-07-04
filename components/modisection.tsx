"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Replace with your button

export default function HospitalSection() {
  return (
    <section className="relative overflow-visible bg-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute  -top-2 left-1/2 -translate-x-1/2 z-20"
      >
        {/* <Image
          src="https://i0.wp.com/www.newdelhitimes.com/wp-content/uploads/2020/01/Modi-1.png?quality=80&ssl=1"
          alt="Ayushman Card"
          width={200}
          height={100}
          //   className="rounded-xl shadow-xl"
        /> */}
      </motion.div>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-4 text-center font-semibold text-lg relative z-10">
        Ayushman card also available in our hospital
      </div>

      {/* Image that comes out of banner */}

      {/* Main Content */}
    </section>
  );
}
