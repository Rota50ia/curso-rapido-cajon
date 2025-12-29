import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "@/components/SectionTitle";

const faqs = [
  {
    question: "Preciso de cajón profissional?",
    answer: "Não! O método funciona com qualquer cajón (até os de R$200).",
  },
  {
    question: "Tenho 50 anos, é muito velho?",
    answer: "Nosso aluno mais velho tem 68 e tocou na festa de aniversário dos netos.",
  },
  {
    question: "E se eu não tiver tempo?",
    answer: "Aulas de 10-15min/dia. Você assiste no celular enquanto espera ônibus.",
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediato após pagamento. Email com login + senha em até 2 minutos.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-petroleum-dark/50">
      <div className="container max-w-3xl mx-auto">
        <SectionTitle>
          Perguntas <span className="text-gradient">Frequentes</span>
        </SectionTitle>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-glass rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
