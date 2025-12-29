import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

const SectionTitle = ({ children, subtitle, className, center = true }: SectionTitleProps) => {
  return (
    <div className={cn("mb-10 md:mb-14", center && "text-center", className)}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
