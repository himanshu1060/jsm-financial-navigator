import { TrendingUp, Landmark, BarChart3, Briefcase, PiggyBank, BadgeDollarSign } from "lucide-react";

const services = [
  { icon: TrendingUp, title: "Mutual Fund", desc: "SIP, SWP, Lumpsum, Education, Marriage, Retirement" },
  { icon: Landmark, title: "Loan Against MF", desc: "Quick loans against your mutual fund investments" },
  { icon: BarChart3, title: "Equity & ETFs", desc: "Direct equity and exchange-traded fund investments" },
  { icon: Briefcase, title: "Portfolio Management (PMS)", desc: "Professional portfolio management services" },
  { icon: PiggyBank, title: "National Pension Scheme", desc: "Secure your retirement with NPS" },
  { icon: BadgeDollarSign, title: "Fixed Deposit & Bonds", desc: "Stable returns with FDs and bonds" },
];

const WealthServices = () => (
  <section id="wealth" className="section-padding bg-background">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-4">
        JSM Wealth Services
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Access a wide range of financial products under one window with online transaction facility
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

export default WealthServices;
