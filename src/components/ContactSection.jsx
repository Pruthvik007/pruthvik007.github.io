import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { contact, socials } from "@/data/portfolio";

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.formAction) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(contact.formAction, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            {contact.heading}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium mb-2 block"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium mb-2 block"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium mb-2 block"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                minLength={25}
              />
            </div>
            <Button
              type="submit"
              className="w-full gap-2"
              disabled={loading || !contact.formAction}
            >
              <Send className="h-4 w-4" />
              {!contact.formAction
                ? "Contact form coming soon"
                : loading
                  ? "Sending..."
                  : "Send Message"}
            </Button>
            {status === "success" && (
              <p className="text-sm text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            Or reach me directly
          </span>
          <Separator className="flex-1" />
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          {socials.map((social) => {
            const Icon = iconMap[social.platform];
            return Icon ? (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{social.label}</span>
                </Button>
              </a>
            ) : null;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
