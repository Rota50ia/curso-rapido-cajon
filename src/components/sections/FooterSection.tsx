const FooterSection = () => {
  return (
    <footer className="py-10 px-4 border-t border-border/30">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
          <a
            href="https://politica-de-privacidade.rota50ia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Termos de Uso
          </a>
          <span className="text-border">|</span>
          <a
            href="https://politica-de-privacidade.rota50ia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Política de Privacidade
          </a>
        </div>

        <p className="text-muted-foreground text-sm mb-2">
          Todos os direitos reservados – Edilson Morais 2025
        </p>
        
        <p className="text-muted-foreground/70 text-sm mb-4">
          Contato:{" "}
          <a
            href="mailto:edilsomdil@gmail.com"
            className="text-primary hover:underline"
          >
            edilsomdil@gmail.com
          </a>
        </p>

        <p className="text-muted-foreground/50 text-xs">
          Desenvolvido por Edilson Morais
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
