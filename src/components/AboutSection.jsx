import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { about } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            {about.heading}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {about.description}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-4">
              {about.experiences.map((exp, i) => (
                <Card key={i} className="bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{exp.role}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>
                    <Separator className="my-3" />
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {about.education.map((edu, i) => (
                <Card key={i} className="bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.school}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {edu.period}
                      </span>
                    </div>
                    {edu.description && <Separator className="my-3" />}
                    {edu.description && (
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
