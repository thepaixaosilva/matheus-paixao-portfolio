import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Matheus Paixão Silva
            </h3>
            <p className="text-sm text-muted-foreground">
              Desenvolvedor de Sistemas
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Matheus Paixão Silva. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.linkedin.com/in/matheus-paix%C3%A3o-silva-66338321a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/thepaixaosilva"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;