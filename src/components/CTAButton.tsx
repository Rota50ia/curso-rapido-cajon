import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary";
}

const CTAButton = ({ children, href, className, variant = "primary" }: CTAButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
