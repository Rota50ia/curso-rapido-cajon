import { CheckCircle, Mail, MessageCircle, Calendar } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "CONFIRMAÇÃO (0-2 MINUTOS)",
    items: [
      "Página de agradecimento com vídeo de boas-vindas",
      "Email automático com credenciais de acesso",
      "Convite para grupo WhatsApp",
    ],
  },
  {
    icon: Mail,
    title: "ONBOARDING (PRIMEIRAS 24H)",
    items: [
      'Email sequencial "Dia 1: Seu primeiro ritmo"',
      "Lembrete para assistir primeira aula",
      "Incentivo para postar no grupo",
    ],
  },
  {
    icon: Calendar,
    title: "ACOMPANHAMENTO (7 DIAS)",
    items: [
      "Email diário com motivação e dica extra",
      "Checagem de progresso no dia 3 e 7",
      "Oferecimento de ajuda extra se necessário",
    ],
  },
];

const AfterPurchaseSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          O Que Acontece <span className="text-gradient">Depois da Compra</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Nosso compromisso: Sua evolução musical é nossa prioridade.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-glass rounded-xl p-6 flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  ETAPA {index + 1}: {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterPurchaseSection;
