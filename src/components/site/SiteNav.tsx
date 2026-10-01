import FloatingNavbar from "@/components/smoothui/floating-navbar";
import ThemeSwitch from "./ThemeSwitch";

type Props = {
  items: { id: string; label: string; href: string }[];
  activeId?: string;
  langHref: string;
  langLabel: string;
  themeLabel: string;
  className?: string;
};

/** SmoothUI floating pill navbar: hides on scroll down, springs back on scroll up. */
export default function SiteNav({ items, activeId, langHref, langLabel, themeLabel, className }: Props) {
  return (
    <FloatingNavbar
      actions={
        <>
          <a className="rounded-full px-2.5 py-1.5 font-semibold text-muted-foreground text-sm no-underline hover:text-foreground" href={langHref}>
            {langLabel}
          </a>
          <ThemeSwitch label={themeLabel} />
        </>
      }
      activeId={activeId ?? ""}
      className={`fixed ${className ?? ""}`}
      items={items}
    />
  );
}
