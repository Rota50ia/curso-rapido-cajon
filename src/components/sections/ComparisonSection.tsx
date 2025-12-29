import { X, Check } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const ComparisonSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <SectionTitle subtitle="Vamos fazer as contas (matemática pura):">
          O Custo Oculto do <span className="text-highlight">"Gratuito"</span>
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          {/* YouTube Column */}
          <div className="card-glass rounded-2xl p-6 md:p-8 border border-destructive/30">
            <h3 className="text-xl font-semibold text-destructive mb-6 text-center">
              Você sozinho no YouTube
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-foreground/80">15 horas procurando conteúdo</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-foreground/80">R$450 em tempo perdido (se ganha R$30/h)</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-foreground/80">Alta probabilidade de desistência</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-foreground/80">Resultado: "Mais ou menos"</span>
              </div>
            </div>
          </div>

          {/* Method Column */}
          <div className="card-glass rounded-2xl p-6 md:p-8 border border-primary/50">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">
              Com Curso Rápido de Cajón
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">2 horas de aula direta</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">R$147 investimento único</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">97% taxa de conclusão</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Resultado: Domínio técnico</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block card-glass rounded-xl p-6 border border-gold/30">
            <p className="text-lg text-foreground">
              <span className="text-gold font-semibold">Conta de Padaria:</span> (15h × R$30) ÷ R$147 ={" "}
              <span className="text-highlight font-bold text-2xl">3 vezes</span>
            </p>
            <p className="text-muted-foreground mt-2">
              Você está pagando mais em tempo perdido do que pagaria em um curso estruturado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
