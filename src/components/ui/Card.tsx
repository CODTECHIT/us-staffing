"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  image?: string;
  overlay?: boolean;
  className?: string;
  href?: string;
  clipPath?: boolean;
}

export default function Card({
  title,
  description,
  icon,
  image,
  overlay = false,
  className = "",
  clipPath = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
    >
      {image && (
        <div
          className={`relative w-full h-full ${clipPath ? "clip-v-shape" : ""}`}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {overlay && <div className="absolute inset-0 bg-transparent" />}
        </div>
      )}

      {!image && (
        <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
          {icon && (
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-teal-500 mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
          {description && (
            <p className="text-gray-600 leading-relaxed">{description}</p>
          )}
        </div>
      )}

      {image && overlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-6">
          {icon && <div className="w-12 h-12 mb-3 text-amber-400">{icon}</div>}
          <h3 className="text-xl font-bold text-center">{title}</h3>
          {description && (
            <p className="text-sm text-gray-200 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}
