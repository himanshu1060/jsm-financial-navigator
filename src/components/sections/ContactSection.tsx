import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground">9425393438 / 9406960918</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-muted-foreground">
                  96, Good Shepherd Colony, Banjari, Kolar Road, Bhopal (M.P.) 462042
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground">jainjsm@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="rounded-lg"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="rounded-lg"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <Input
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="rounded-lg"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="rounded-lg min-h-[120px]"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
