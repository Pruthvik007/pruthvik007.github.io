import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            {projects.heading}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {projects.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid gap-6 ${projects.items.length === 1 ? "max-w-xl mx-auto" : "md:grid-cols-2"}`}
        >
          {projects.items.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {project.image ? (
                  <div className="overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground/60 select-none">
                      {project.title}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
