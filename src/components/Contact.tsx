import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. 
            Entre em contato comigo através dos canais abaixo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-elegant hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground mb-4">
                Conecte-se comigo para networking profissional e atualizações de carreira
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/matheus-paix%C3%A3o-silva-66338321a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visitar Perfil
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-4">
                Explore meus projetos e contribuições em código aberto
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <a 
                  href="https://github.com/thepaixaosilva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver Repositórios
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-elegant bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-3 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span>Indaiatuba, São Paulo</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span>Disponível via LinkedIn</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            "A tecnologia é melhor quando conecta pessoas." - Matt Mullenweg
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;