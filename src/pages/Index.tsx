import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PackageSection from "@/components/sections/PackageSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstructorSection from "@/components/sections/InstructorSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import ChoiceSection from "@/components/sections/ChoiceSection";
import FAQSection from "@/components/sections/FAQSection";
import AfterPurchaseSection from "@/components/sections/AfterPurchaseSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Curso Rápido de Cajón | Domine o Cajón em 30 Dias</title>
        <meta
          name="description"
          content="Aprenda cajón do zero com método comprovado. 217 alunos transformados, 97% de satisfação. Domine 3 ritmos em 7 dias ou seu dinheiro de volta."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://cursorapidodecajon.com.br" />
      </Helmet>

      <main className="min-h-screen overflow-x-hidden">
        <HeroSection />
        <ProblemSection />
        <ComparisonSection />
        <SolutionSection />
        <PackageSection />
        <TestimonialsSection />
        <InstructorSection />
        <GuaranteeSection />
        <ChoiceSection />
        <FAQSection />
        <AfterPurchaseSection />
        <FinalCTASection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
