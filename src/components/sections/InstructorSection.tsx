import SectionTitle from "@/components/SectionTitle";

const InstructorSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <SectionTitle>
          Quem Vai Te <span className="text-gradient">Ensinar</span>
        </SectionTitle>

        <div className="card-glass rounded-2xl p-8 md:p-12 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-3xl font-bold text-primary-foreground">EM</span>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-2">Edilson Morais</h3>
          <p className="text-primary mb-6">35 anos de experiência em percussão</p>

          <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            <span className="text-highlight font-semibold">Missão:</span> Democratizar o acesso à percussão de qualidade.
          </p>
          
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Não sou um "guru do marketing". Sou músico que cansou de ver pessoas desistindo por falta de método. Desenvolvi o CURSO RÁPIDO DE CAJÓN para ser a solução que eu gostaria de ter tido quando comecei.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
