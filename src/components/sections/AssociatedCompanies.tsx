const companies = [
  "Aditya Birla Health Insurance",
  "Bajaj Allianz Life",
  "Bajaj Allianz General Insurance",
  "Care Health Insurance",
  "Digit Insurance",
  "Future Generali",
  "HDFC ERGO",
  "HDFC Life",
  "ICICI Lombard",
  "ICICI Prudential",
  "IFFCO Tokio",
  "Kotak Life",
  "Kotak General",
  "ManipalCigna",
  "Max Life",
  "Niva Bupa",
  "Royal Sundaram",
  "Star Health",
  "Tata AIA",
  "Tata AIG",
];

const AssociatedCompanies = () => (
  <section className="py-12 bg-secondary overflow-hidden">
    <div className="container mx-auto max-w-6xl mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
        Our Associated Companies
      </h2>
    </div>

    <div className="relative">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...companies, ...companies].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="inline-flex items-center justify-center mx-4 px-6 py-3 bg-card border border-border rounded-lg shadow-sm min-w-[180px] shrink-0"
          >
            {/* Replace with company logo URL */}
            <span className="text-xs md:text-sm font-medium text-muted-foreground text-center whitespace-normal leading-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AssociatedCompanies;
