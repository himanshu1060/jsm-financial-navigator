import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const SmartSip360 = () => (
  <section id="smartsip" className="section-padding bg-primary text-primary-foreground">
    <div className="container mx-auto max-w-4xl text-center">
      <Zap className="h-14 w-14 mx-auto mb-6 text-accent" />
      <h2 className="text-2xl md:text-4xl font-bold mb-6">SMART SIP 360</h2>
      <p className="text-base md:text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
        A disciplined and strategic investment approach designed to create long-term wealth through
        systematic and well-managed investment planning. SMART SIP 360 combines research-backed fund
        selection, goal-aligned allocation, and continuous portfolio monitoring.
      </p>
      <Button
        size="lg"
        className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-base px-8 py-6"
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Start Your SMART SIP Today
      </Button>
    </div>
  </section>
);

export default SmartSip360;
