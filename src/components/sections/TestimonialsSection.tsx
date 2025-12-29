import { Star, Quote } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const testimonials = [
  {
    quote: "Comprei 3 cursos antes e não aprendi nada. O Curso Rápido de Cajón me fez tocar samba completo no terceiro dia. Minha banda da igreja não acreditou! Já indiquei para 5 amigos.",
    name: "Carlos",
    age: 42,
    location: "São Paulo",
    highlight: "Em 3 dias já estava tocando na igreja",
  },
  {
    quote: "Tentava aprender sozinho há 2 anos e travava na mão esquerda. Em 2 dias com o método, descobri o erro básico que ninguém no YouTube mencionava. Revolucionário!",
    name: "Ana",
    age: 28,
    location: "Rio de Janeiro",
    highlight: "Resolvi problema de 2 anos em 48 horas",
  },
  {
    quote: "Paguei R$147 na segunda. Na sexta já fui chamado para tocar num evento e ganhei R$300. Melhor investimento da minha vida musical.",
    name: "Roberto",
    age: 35,
    location: "Belo Horizonte",
    highlight: "Retorno de investimento em 1 semana",
  },
];

const stats = [
  { value: "97%", label: "completam as 30 aulas" },
  { value: "87%", label: "tocam 3 ritmos antes do 7º dia" },
  { value: "73%", label: "são chamados para eventos em 30 dias" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-petroleum-dark/50">
      <div className="container max-w-4xl mx-auto">
        <SectionTitle>
          O Que Nossos <span className="text-gradient">Alunos</span> Dizem
        </SectionTitle>

        <div className="grid gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-highlight font-semibold mb-4 text-lg">
                "{testimonial.highlight}"
              </p>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-foreground/80 leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">{testimonial.name}</span>
                  , {testimonial.age} anos • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 rounded-xl bg-secondary/50 border border-border/50"
            >
              <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
