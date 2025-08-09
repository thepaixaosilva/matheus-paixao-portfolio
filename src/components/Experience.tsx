import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Code2, Database, Globe } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "Sistema de Controle de Estoque",
      description: "Desenvolvimento de ferramenta para controle de produtos químicos",
      icon: <Database className="w-5 h-5" />,
      type: "Sistema Interno"
    },
    {
      title: "Gestão de Eventos Institucionais",
      description: "Plataforma para organização e controle de eventos da instituição",
      icon: <Calendar className="w-5 h-5" />,
      type: "Aplicação Web"
    },
    {
      title: "Sistema de Carteirinhas Estudantis",
      description: "Sistema interno para emissão de carteirinhas para estudantes",
      icon: <Code2 className="w-5 h-5" />,
      type: "Sistema Interno"
    }
  ];

  const technologies = [
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Express", icon: "🚀" },
    { name: "Node.js", icon: "🟢" },
    { name: "MySQL", icon: "🗄️" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Git", icon: "📁" },
    { name: "RESTful APIs", icon: "🔗" }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projetos e responsabilidades em desenvolvimento de sistemas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <Card className="shadow-elegant h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Estagiário em Desenvolvimento</CardTitle>
                    <p className="text-sm text-muted-foreground">FIEC • Junho 2024 - Atual</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/lovable-uploads/5aa4b81f-aa05-43f6-9d16-bdd610bedb27.png" 
                      alt="FIEC Logo" 
                      className="w-8 h-6 object-contain"
                    />
                    <span className="text-sm font-medium">Fundação Indaiatubana de Educação e Cultura</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Sob supervisão do professor Sérgio Furgeri, desenvolvimento de sistemas 
                    internos para otimização de processos institucionais.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              <h3 className="text-xl font-semibold mb-4">Projetos Desenvolvidos</h3>
              {projects.map((project, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{project.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {project.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Stack Tecnológica</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                <span className="mr-2 text-base">{tech.icon}</span>
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;