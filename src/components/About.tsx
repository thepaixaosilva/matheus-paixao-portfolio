import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e objetivos profissionais
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Formação Acadêmica</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Análise e Desenvolvimento de Sistemas</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Fatec Indaiatuba • 6º Semestre (2022-2024)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Origem e Residência</h3>
                    <p className="text-muted-foreground mb-2">
                      Natural de <strong>São Paulo</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Residente em Indaiatuba há quase 3 anos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Objetivos</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Curto prazo:</strong> Desenvolvimento Back-end
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Longo prazo:</strong> Especialização em Segurança da Informação
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/cc1a64d7-66ee-4fd2-829d-51d20c121c4d.png" 
                alt="FIEC - Fundação Indaiatubana de Educação e Cultura" 
                className="w-full rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">FIEC - Onde desenvolvo meus projetos</p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-elegant">
              <h3 className="text-xl font-semibold mb-4">Minha Jornada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Minha paixão por tecnologia me levou da capital paulista para Indaiatuba, 
                onde encontrei na Fatec e na FIEC o ambiente ideal para crescer profissionalmente. 
                Cada projeto que desenvolvo é uma oportunidade de aprender e contribuir para 
                soluções que realmente fazem a diferença no dia a dia das pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;