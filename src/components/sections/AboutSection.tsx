import { Search, TrendingUp, ShieldCheck } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary">
    <div className="container mx-auto max-w-5xl">
      <div className="bg-card rounded-lg p-8 shadow-sm max-w-4xl mx-auto">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary text-center mb-6 whitespace-nowrap">
          What Smart decisions, Strategic growth, Managed wealth Means
        </h3>
        <ul className="space-y-4">
          {[
            { label: "Smart decisions", desc: "Careful, research-backed choices" },
            { label: "Strategic growth", desc: "Aligned with long-term goals" },
            { label: "Managed wealth", desc: "Professionally guided & reviewed" },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{item.label}</span> → {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
