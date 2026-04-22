import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type LangCode = "de" | "en" | "he";

// Hebrew translations exist in the codebase but are hidden from the UI
// until the client approves them. Re-add { code: "he", ... } below to re-enable.
const languages: { code: LangCode; label: string; short: string; native: string }[] = [
  { code: "de", label: "Deutsch", short: "DE", native: "Deutsch" },
  { code: "en", label: "English", short: "EN", native: "English" },
];

type Props = {
  className?: string;
  variant?: "navbar" | "mobile";
};

const LanguageSelector = ({ className = "", variant = "navbar" }: Props) => {
  const { i18n } = useTranslation();

  const currentCode: LangCode = (["de", "en", "he"] as const).includes(
    (i18n.language || "en").slice(0, 2) as LangCode
  )
    ? ((i18n.language || "en").slice(0, 2) as LangCode)
    : "en";

  const current = languages.find((l) => l.code === currentCode) ?? languages[1];

  const handleSelect = (code: LangCode) => {
    i18n.changeLanguage(code);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={`flex items-center gap-1.5 text-sm tracking-wider uppercase text-temple-on-dark/70 hover:text-temple-gold transition-colors focus:outline-none ${className}`}
        aria-label="Select language"
      >
        <Globe size={15} />
        <span>{current.short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={variant === "mobile" ? "start" : "end"}
        className="min-w-[140px] bg-temple-midnight border border-temple-gold/30 text-temple-on-dark"
      >
        {languages.map((lang) => {
          const active = lang.code === currentCode;
          return (
            <DropdownMenuItem
              key={lang.code}
              onSelect={() => handleSelect(lang.code)}
              className={`cursor-pointer font-ui text-sm flex items-center justify-between gap-3 ${
                active
                  ? "text-temple-gold focus:text-temple-gold"
                  : "text-temple-on-dark/80 focus:text-temple-gold"
              } focus:bg-temple-gold/10`}
            >
              <span>{lang.native}</span>
              {active && <Check size={14} className="text-temple-gold" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
