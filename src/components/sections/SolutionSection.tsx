import { Brain, RotateCcw, MessageCircle, TrendingUp, Check } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const learningPhysics = [
  {
    icon: Brain,
    title: "SEQUENCIAMENTO LÓGICO",
    description: "Aulas na ordem exata que seu cérebro aprende",
  },
  {
    icon: RotateCcw,
    title: "REPETIÇÃO ESPAÇADA",
    description: "Exercícios que fixam na memória muscular",
  },
  {
    icon: MessageCircle,
    title: "FEEDBACK IMEDIATO",
    description: "Correção de erros antes que virem vícios",
  },
  {
    icon: TrendingUp,
    title: "MOTIVAÇÃO CONTÍNUA",
    description: "Progresso que você pode medir",
  },
];

const results = [
  "Fundamentos sólidos (postura, golpes básicos, timing)",
  "Padrões Rítmicos completo (mão direita + esquerda)",
  "Variações e dinâmicas",
  "Execução fluente de 3 músicas completas",
];

const SolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-petroleum-dark/50 section-glow">
      <div className="container max-w-4xl mx-auto relative z-10">
        <span className="block text-center text-cyan-light text-sm font-medium tracking-wider uppercase mb-4">
          A Solução Que Ninguém Te Ofereceu
        </span>
        
        <SectionTitle>
          Apresentando: <span className="text-gradient">Curso Rápido de Cajón</span>
          <br />
          <span className="text-xl md:text-2xl font-normal text-muted-foreground mt-2 block">
            O Método Para Dominar o Cajón em 30 Dias
          </span>
        </SectionTitle>

        <p className="text-center text-foreground/80 text-lg mb-12 max-w-2xl mx-auto">
          Não é "mais um curso de cajón". Ele nasce de um sistema de testes, erros e acertos desenvolvido após analisar os erros de 500+ alunos iniciantes e 35 anos tocando cajón.
        </p>

        <h3 className="text-xl font-semibold text-center text-highlight mb-8">
          Como funciona a física do aprendizado acelerado:
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {learningPhysics.map((item, index) => (
            <div
              key={index}
              className="card-glass rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:scale-[1.02]"
            >
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="card-glass rounded-2xl p-8 border border-primary/30">
          <h3 className="text-xl font-semibold text-center mb-8">
            O Que Você Vai Conseguir em <span className="text-highlight">Apenas 30 Dias</span>:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/90">{result}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-muted-foreground italic">
            <span className="text-highlight font-semibold">Diferencial radical:</span> Enquanto cursos de R$300 te inundam com 50 aulas genéricas, Curso Rápido de Cajón foca no{" "}
            <span className="text-foreground">ESSENCIAL QUE FUNCIONA</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
