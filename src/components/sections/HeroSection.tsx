import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  /* Replace these placeholder URLs with actual image links */
  "https://via.placeholder.com/1200x600/1a5632/ffffff?text=Financial+Growth",
  "https://via.placeholder.com/1200x600/1e6b3a/ffffff?text=Wealth+Management",
  "https://via.placeholder.com/1200x600/237d43/ffffff?text=Insurance+Solutions",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Replace this image URL with actual image link */}
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 max-w-4xl leading-tight">
          Secure Your Financial Future with JSM
        </h1>
        <p className="text-base md:text-xl text-primary-foreground/90 mb-2 max-w-2xl">
          Your trusted partner in wealth, health, and insurance solutions
        </p>
        <p className="text-sm md:text-lg text-primary-foreground/80 mb-8 max-w-xl">
          Personalized Solutions which help you achieve your goals
        </p>
        <Button
          size="lg"
          className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-base px-8 py-6"
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Book Free Consultation
        </Button>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-background/30 hover:bg-background/50 rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-background/30 hover:bg-background/50 rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent scale-125" : "bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
