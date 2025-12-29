import { Music, Check } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const CHECKOUT_URL = "https://chk.eduzz.com/VWGZ2XYO07?utm_source=cajon&utm_medium=an&utm_campaign=cam+1+cajon&utm_id=pv";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 bg-petroleum-dark/50 section-glow">
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            O Tempo Está Passando.{" "}
            <span className="text-gradient">Sua Oportunidade Musical Também.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Daqui a 15 dias você pode estar ainda perdido no YouTube, mais frustrado que hoje... ou tocando vários ritmos no cajón com confiança e técnica.
          </p>
        </div>

        <div className="card-glass rounded-2xl p-8 md:p-12 text-center border border-primary/30">
          <p className="text-foreground/80 mb-6">
            A diferença entre os dois cenários é uma decisão de{" "}
            <span className="text-highlight font-bold">R$147</span> e 15 dias de prática guiada.
          </p>

          <CTAButton href={CHECKOUT_URL} className="mb-8">
            <Music className="w-5 h-5" />
            QUERO DOMINAR O CAJÓN EM 30 DIAS POR R$147
          </CTAButton>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              217 alunos transformados
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              97% taxa de satisfação
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Garantia 15 dias
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span>⚡ Pagamento único</span>
            <span>•</span>
            <span>Acesso vitalício</span>
            <span>•</span>
            <span>15 dias de garantia</span>
            <span>•</span>
            <span>Suporte 24h</span>
          </div>
        </div>

        <div className="mt-10 space-y-3 text-center text-sm text-muted-foreground">
          <p>
            <span className="text-foreground font-medium">P.S.:</span> Vagas estão acabando. Amanhã pode ser tarde.
          </p>
          <p>
            <span className="text-foreground font-medium">P.P.S.:</span> Lembre-se: R$147 é menos que 2 pizzas. Uma pizza você digere em horas.{" "}
            <span className="text-highlight">CAJÓN RÁPIDO DE CAJÓN fica com você para a vida toda.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
