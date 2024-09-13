"use client";

import { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Menggunakan ikon untuk tombol navigasi
import Testimonials from "@/components/testimoni/testimonials";

const testimonials = [
  {
    name: "Chealsea Morgan",
    title: "CEO of Subway",
    rating: 5,
    content:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam.",
  },
  {
    name: "Nick Cave",
    title: "CMO of Nokia",
    rating: 5,
    content:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat.",
  },
  {
    name: "Lana Rosenfeld",
    title: "Senior VP of Pinterest",
    rating: 5,
    content:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.",
  },
  // Tambahkan lebih banyak testimonial sesuai kebutuhan
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft = currentIndex * carousel.offsetWidth;
    }
  }, [currentIndex]);

  return (
    <section className="py-12">
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-3xl text-center font-bold text-black">
            What our users are saying
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-hidden scroll-snap-x snap-mandatory px-4 min-h-[420px] items-center scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`snap-center w-full transition-transform duration-300 ${
                  index === currentIndex ? "scale-105" : "scale-100"
                }`}
              >
                <Testimonials
                  name={testimonial.name}
                  title={testimonial.title}
                  rating={testimonial.rating}
                  content={testimonial.content} isActive={false}                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="p-2 bg-white shadow-md rounded-full hover:bg-gray-200 transition-all focus:outline-none"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="p-2 bg-white shadow-md rounded-full hover:bg-gray-200 transition-all focus:outline-none"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
