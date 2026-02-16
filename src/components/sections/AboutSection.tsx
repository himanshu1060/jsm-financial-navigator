import { Search, TrendingUp, ShieldCheck } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-8">
        JSM – Judicious. Strategic. Management.
      </h2>

      <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 leading-relaxed">
        At JSM, wealth is not merely accumulated — it's architected with precision for discerning
        individuals and families who value structure, discretion, and long-term financial
        sophistication. We understand that money is never just numbers; it's about security, dreams,
        and the people you love.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {[
          {
            icon: Search,
            title: "Judicious",
            text: "Deep evaluation, risk intelligence, and macroeconomic insight ensure your hard-earned money gets careful, responsible handling.",
          },
          {
            icon: TrendingUp,
            title: "Strategic",
            text: "Bespoke plans for your goals — child's education, retirement, family protection, tax efficiency, risk mitigation, and legacy preservation.",
          },
          {
            icon: ShieldCheck,
            title: "Active Management",
            text: "Continuous monitoring, rebalancing, and optimization preserve capital, drive growth, and secure your family's stable future.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <item.icon className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg p-8 shadow-sm max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-primary text-center mb-6">
          What Smart decisions. Strategic growth. Managed wealth. Means
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
