import { HeartPulse, Shield, User, Building2, Car, Home, MoreHorizontal } from "lucide-react";

const categories = [
  {
    icon: HeartPulse,
    title: "Life Insurance",
    subs: ["Annuity Assurance", "Traditional ULIP"],
  },
  {
    icon: Shield,
    title: "Health Insurance",
    subs: ["CI", "Health", "Health Top Up"],
  },
  {
    icon: User,
    title: "Personal Insurance",
    subs: ["Personal Accident"],
  },
  {
    icon: Home,
    title: "Home",
    subs: ["Home Insurance"],
  },
  {
    icon: Car,
    title: "Motor",
    subs: ["CV", "MISC", "Private Car", "TP Only", "CVTP"],
  },
  {
    icon: MoreHorizontal,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
          >
            <cat.icon className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-3">{cat.title}</h3>
            <ul className="space-y-1">
              {cat.subs.map((sub) => (
                <li key={sub} className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent">
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InsuranceServices;
