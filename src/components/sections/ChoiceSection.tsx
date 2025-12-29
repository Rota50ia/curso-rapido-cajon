import { X, Check, AlertTriangle } from "lucide-react";

const ChoiceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Escolha <span className="text-gradient">Agora</span>:
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Option A */}
          <div className="card-glass rounded-2xl p-6 md:p-8 border border-destructive/30 opacity-70">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <span className="text-lg font-semibold text-destructive">OPÇÃO A</span>
            </div>
            
            <p className="text-foreground/70 leading-relaxed">
              Continue perdendo 15 horas no YouTube, desenvolvendo vícios, desistindo frustrado.
            </p>
            
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Custo: R$450 em tempo perdido + frustração + oportunidade musical perdida
              </p>
            </div>
          </div>

          {/* Option B */}
          <div className="card-glass rounded-2xl p-6 md:p-8 border border-primary/50 relative">
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              RECOMENDADO
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-semibold text-primary">OPÇÃO B</span>
            </div>
            
            <p className="text-foreground/90 leading-relaxed">
              Invista R$147 (menos que 2 pizzas), domine PELO MENOS 3 RITMOS em 7 dias, ganhe confiança, toque em eventos, viva a música.
            </p>
            
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-sm text-highlight font-medium">
                Custo: R$147 com garantia de devolução
              </p>
            </div>
          </div>
        </div>

        <div className="card-glass rounded-xl p-6 border border-gold/30 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-foreground font-medium mb-2">
              ATENÇÃO: Vagas Limitadas
            </p>
            <p className="text-muted-foreground text-sm">
              Para manter a qualidade do suporte personalizado, estamos limitando a 30 vagas por mês. Das 30 vagas de janeiro, restam apenas 7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoiceSection;
