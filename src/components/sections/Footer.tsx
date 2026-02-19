const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Disclaimer", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Contact Us", href: "#contact" },
  { label: "Site Map", href: "#" },
];

const handleClick = (href: string) => {
  if (href.startsWith("#") && href.length > 1) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
          <div className="space-y-3 text-sm text-primary-foreground/80">
            <p>📞 +91 9425393438 / +91 9406960918</p>
            <p>📍 96, Good Shepherd Colony, Banjari, Kolar Road, Bhopal (M.P.) 462042</p>
            <p>✉️ jainjsm@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Important Disclaimer */}
      <div className="border-t border-primary-foreground/20 mt-10 pt-6">
        <h3 className="text-base font-semibold mb-3">Important Disclaimer</h3>
        <p className="text-xs text-primary-foreground/60 leading-relaxed">
          SMART SIP 360 is a Unit Linked Insurance Plan offered by Tata AIA Life Insurance.
          Investment in market-linked funds is subject to market risks. Past performance does not guarantee future returns. Tax benefits are subject to prevailing tax laws.
          Please read sales brochure carefully before investing.
        </p>
      </div>

      <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} JSM Wealth Health & Insurance. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
