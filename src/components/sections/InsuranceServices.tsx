import { HeartPulse, Shield, User, Building2, Plane } from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Life Insurance", desc: "Protect your family's financial future" },
  { icon: Shield, title: "Health Insurance", desc: "Comprehensive health coverage plans" },
  { icon: User, title: "Personal Insurance", desc: "Tailored personal insurance solutions" },
  { icon: Building2, title: "General Insurance", desc: "Coverage for assets and liabilities" },
  { icon: Plane, title: "Travel Insurance", desc: "Travel with peace of mind worldwide" },
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <s.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InsuranceServices;
