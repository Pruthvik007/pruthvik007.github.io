import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            {certifications.heading}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {certifications.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.items.map((cert) => (
            <motion.div key={cert.title} variants={itemVariants}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="overflow-hidden bg-muted">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 flex items-center justify-between">
                    <h3 className="font-medium text-sm">{cert.title}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
