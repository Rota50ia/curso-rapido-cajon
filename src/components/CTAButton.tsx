import { cn } from "@/lib/utils";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary";
}

const CTAButton = ({ children, href, className, variant = "primary" }: CTAButtonProps) => {
  const handleClick = () => {
    // Google Ads conversion event
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17852256064',
        'event_category': 'CTA',
        'event_label': 'Compra Cajón'
      });
    }
    
    // Meta Pixel conversion event
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Curso Rápido de Cajón',
        content_category: 'Curso Online'
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300",
        variant === "primary" && "bg-gradient-to-r from-primary to-accent text-primary-foreground btn-glow animate-pulse-glow",
        variant === "secondary" && "bg-secondary text-secondary-foreground border border-border hover:bg-petroleum-light",
        className
      )}
    >
      {children}
    </a>
  );
};

export default CTAButton;
