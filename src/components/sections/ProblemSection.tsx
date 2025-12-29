import { AlertCircle, Clock, XCircle, Frown } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const problems = [
  {
    icon: AlertCircle,
    text: "FICA MAIS CONFUSO do que quando começou",
  },
  {
    icon: Clock,
    text: "PERDE SEMANAS tentando decifrar técnicas contraditórias",
  },
  {
    icon: XCircle,
    text: "DESENVOLVE VÍCIOS que depois custam meses para corrigir",
  },
  {
    icon: Frown,
    text: "DESISTE frustrado, achando que 'não tem talento'",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-petroleum-dark/50">
      <div className="container max-w-4xl mx-auto">
        <SectionTitle>
          <span className="text-highlight">"Já Tentei Tudo no YouTube e Nada Funciona"</span>
          <br />
          <span className="text-muted-foreground text-xl md:text-2xl font-normal mt-2 block">
            Sente isso?
          </span>
        </SectionTitle>

        <div className="card-glass rounded-2xl p-6 md:p-10 mb-10">
          <p className="text-foreground/90 text-lg mb-8 leading-relaxed">
            Você passa horas procurando "como tocar samba no cajón", assiste 15 vídeos diferentes, cada um dizendo uma coisa... e no final:
          </p>

          <div className="grid gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 transition-all duration-300 hover:border-primary/30"
              >
                <problem.icon className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground/90">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-glass rounded-2xl p-6 md:p-10 border-l-4 border-primary">
          <p className="text-lg text-foreground/90 leading-relaxed">
            <span className="text-highlight font-semibold">A verdade que ninguém te conta:</span> O YouTube tem 10.427 vídeos sobre cajón. Nenhum foi feito <span className="text-highlight">PARA VOCÊ</span>. São gravações aleatórias, sem sequência lógica, sem correção de erros, sem acompanhamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
