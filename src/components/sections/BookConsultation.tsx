import { Button } from "@/components/ui/button";

const BookConsultation = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Secure Your Future?
      </h2>
      <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
        Get expert guidance on wealth management and insurance tailored to your goals.
      </p>
      <Button
        size="lg"
        className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-base px-8 py-6"
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Book Free Consultation
      </Button>
    </div>
  </section>
);

export default BookConsultation;
