import { Button } from "@/components/ui/button";
import { Github, Linkedin, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-subtle px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Matheus Paixão Silva
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Desenvolvedor de Sistemas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground items-center lg:items-start lg:justify-start justify-center">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>22 anos</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Indaiatuba, SP</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estudante de Análise e Desenvolvimento de Sistemas na Fatec Indaiatuba, 
              atualmente estagiário em Desenvolvimento na FIEC. Apaixonado por tecnologia 
              e focado em criar soluções web inovadoras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start lg:justify-start justify-center">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-smooth"
                asChild
              >
                <a href="#contato">Entre em Contato</a>
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" asChild>
                  <a 
                    href="https://www.linkedin.com/in/matheus-paix%C3%A3o-silva-66338321a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a 
                    href="https://github.com/thepaixaosilva" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src="/lovable-uploads/32959e2e-8ef2-4275-b1d4-522dbc7a686e.png" 
                  alt="Matheus Paixão Silva" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;