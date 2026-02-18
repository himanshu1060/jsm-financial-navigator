import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    /* Replace with video URL */
    video: "https://via.placeholder.com/1200x600/1a5632/ffffff?text=Video+Placeholder+1",
    headline: "Secure Your Financial Future with JSM",
  },
  {
    /* Replace with video URL */
    video: "https://via.placeholder.com/1200x600/1e6b3a/ffffff?text=Video+Placeholder+2",
    headline: "Your trusted partner in wealth, health, and insurance solutions",
  },
  {
    /* Replace with video URL */
    video: "https://via.placeholder.com/1200x600/237d43/ffffff?text=Video+Placeholder+3",
    headline: "Personalized Solutions which help you achieve your goals",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);
  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Video Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Replace with video URL */}
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content – single headline per slide */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          key={animKey}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl leading-tight animate-fade-up"
        >
          {slides[current].headline}
        </h1>
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
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setAnimKey((k) => k + 1);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
