import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { footer, socials } from "@/data/portfolio";

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
};

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {footer.name} &copy; {new Date().getFullYear()}
          </p>
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.platform];
              return Icon ? (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
