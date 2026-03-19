import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

const HeroSection = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 5000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setDismissed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary/20 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-muted-foreground mb-2">
            {personalInfo.greeting}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            {personalInfo.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4">
            {personalInfo.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {personalInfo.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showArrow && !dismissed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
