import { useState } from "react";
import { HeartPulse, Shield, User, Building2, ChevronDown, ChevronUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  {
    icon: HeartPulse,
    title: "Life Insurance",
    subs: ["Annuity", "Assurance", "Traditional", "ULIP"],
  },
  {
    icon: Shield,
    title: "Health Insurance",
    subs: ["CI", "Health", "Health Top Up"],
  },
  {
    icon: User,
    title: "Personal Insurance",
    subs: ["Personal Accident", "Home"],
  },
  {
    icon: Building2,
    title: "Motor",
    subs: ["CV", "MISC", "Private Car", "TP Only", "CVTP"],
  },
  {
    icon: Building2,
    title: "Others",
    subs: ["WC", "Travel", "Fire", "Marine", "Other"],
  },
];

const InsuranceServices = () => (
  <section id="insurance" className="section-padding bg-secondary">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-4">
        JSM Insurance Services
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Access a wide range of insurance products under one window
      </p>

      {/* Desktop: hover-based grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
          >
            <cat.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-foreground mb-3">{cat.title}</h3>
            <ul className="space-y-1 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300">
              {cat.subs.map((sub) => (
                <li key={sub} className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent">
                  {sub}
                </li>
              ))}
            </ul>
            {/* Always visible hint */}
            <p className="text-xs text-muted-foreground/60 mt-2 group-hover:hidden">Hover to see subcategories</p>
          </div>
        ))}
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden">
        <Accordion type="single" collapsible className="space-y-3">
          {categories.map((cat, i) => (
            <AccordionItem key={cat.title} value={`ins-${i}`} className="bg-card border border-border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <cat.icon className="h-6 w-6 text-accent shrink-0" />
                  <span className="font-semibold text-foreground">{cat.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1 pl-9">
                  {cat.subs.map((sub) => (
                    <li key={sub} className="text-sm text-muted-foreground relative before:content-['•'] before:absolute before:-left-4 before:text-accent">
                      {sub}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default InsuranceServices;
