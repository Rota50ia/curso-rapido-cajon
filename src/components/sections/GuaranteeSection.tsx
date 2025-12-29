import { Shield, Check } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const CHECKOUT_URL = "https://chk.eduzz.com/VWGZ2XYO07?utm_source=cajon&utm_medium=an&utm_campaign=cam+1+cajon&utm_id=pv";

const guarantees = [
  "Dominar padrão rítmico básico no cajón",
  "Conseguir tocar pelo menos 1 música completa",
  "Sentir confiança para tocar na frente de outras pessoas",
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4 bg-petroleum-dark/50">
      <div className="container max-w-4xl mx-auto">
        <div className="card-glass rounded-2xl p-8 md:p-12 border-2 border-primary/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-float">
                <Shield className="w-10 h-10 text-primary" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Garantia <span className="text-gradient">Incondicional</span>
            </h2>
            <p className="text-center text-highlight text-lg mb-8">
              RISCO ZERO: EXPERIMENTE POR 15 DIAS COMPLETOS
            </p>

            <div className="bg-secondary/50 rounded-xl p-6 mb-8">
              <p className="text-foreground/90 mb-6 text-center">
                Entre no método, faça todas as aulas, pratique os exercícios, participe da comunidade. Se em 15 dias você não:
              </p>

              <div className="space-y-3 max-w-md mx-auto">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{guarantee}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-foreground/90 mt-6">
                ...basta enviar um email e devolvemos <span className="text-highlight font-semibold">cada centavo</span>. Sem perguntas, sem burocracia.
              </p>
            </div>

            <p className="text-center text-muted-foreground mb-8">
              <span className="text-foreground">Por que tanta confiança?</span> Porque o método funciona. Dos 217 alunos, apenas 3 pediram reembolso (1,4%).
            </p>

            <div className="flex justify-center">
              <CTAButton href={CHECKOUT_URL}>
                🔥 DOMINE O CAJÓN POR R$147 - GARANTIA 15 DIAS 🔥
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
