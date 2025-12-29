import { Play, Users, Award } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import SectionTitle from "@/components/SectionTitle";

const CHECKOUT_URL = "https://chk.eduzz.com/VWGZ2XYO07?utm_source=cajon&utm_medium=an&utm_campaign=cam+1+cajon&utm_id=pv";

const packageItems = [
  {
    icon: Play,
    title: "MÓDULO EM VÍDEO HD",
    description: "20 aulas em vídeo (10-15 min cada)",
    value: "R$297",
  },
  {
    icon: Users,
    title: "COMUNIDADE VIP",
    description: "Grupo WhatsApp exclusivo com outros alunos, respostas em até 24h",
    value: "R$67",
  },
  {
    icon: Award,
    title: "CERTIFICAÇÃO",
    description: "Certificado digital de conclusão",
    value: "R$36",
  },
];

const PackageSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <SectionTitle subtitle="O que você recebe no pacote completo">
          Dentro do <span className="text-gradient">Método</span>
        </SectionTitle>

        <div className="card-glass rounded-2xl p-6 md:p-10 mb-8">
          <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">
            PACOTE COMPLETO CAJÓN RÁPIDO{" "}
            <span className="text-foreground/50">(Valor Real: R$400)</span>
          </h3>

          <div className="space-y-4 mb-10">
            {packageItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-secondary/50 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <span className="text-muted-foreground line-through text-sm">{item.value}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <div className="text-center mb-6">
              <p className="text-muted-foreground mb-2">
                <span className="line-through">Total de Valor: R$400</span>
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Seu Investimento Hoje:{" "}
                <span className="text-gradient">Apenas R$147</span>
              </p>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50">
                <span className="text-primary font-semibold">DESCONTO IMEDIATO: 60%</span>
              </div>
            </div>

            <div className="flex justify-center">
              <CTAButton href={CHECKOUT_URL}>
                QUERO DOMINAR O CAJÓN POR R$147
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
