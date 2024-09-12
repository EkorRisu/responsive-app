// components/TestimonialCard.tsx
"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface TestimonialCardProps {
  name: string;
  title: string;
  rating: number;
  content: string;
  isActive: boolean;
}

const Testimonials = ({
  name,
  title,
  rating,
  content,
  isActive,
}: TestimonialCardProps) => {
  return (
    <div
      className={`bg-white p-5 shadow-lg min-w-[300px] max-w-[400px] ${
        isActive ? "scale-105" : "scale-100"
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} className="text-[#FFBA79]" />
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">{content}</p>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <Image
          src="/avatar.jpeg"
          alt="User avatar"
          width={56}
          height={56}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-xs text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;