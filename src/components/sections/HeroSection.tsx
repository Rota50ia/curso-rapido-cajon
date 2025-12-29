import CTAButton from "@/components/CTAButton";
import { Music } from "lucide-react";

const CHECKOUT_URL = "https://chk.eduzz.com/VWGZ2XYO07?utm_source=cajon&utm_medium=an&utm_campaign=cam+1+cajon&utm_id=pv";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden section-glow">
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-secondary text-cyan-light border border-border">
            Método comprovado por 217 alunos
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Pare de Procurar no YouTube:{" "}
          <span className="text-gradient glow-text">
            Domine o Cajón em 30 Dias
          </span>{" "}
          com Método Simples ou{" "}
          <span className="text-highlight">Devolvemos Seu Dinheiro</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Descubra o sistema passo a passo que já transformou 217 iniciantes em percussionistas confiantes – mesmo que você nunca tenha tocado um instrumento na vida.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <CTAButton href={CHECKOUT_URL}>
            <Music className="w-5 h-5" />
            QUERO DOMINAR O CAJÓN POR R$147
          </CTAButton>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Acesso Vitalício
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            15 Dias de Garantia
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Suporte 24h
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
