import SmoothButton from "@/components/smoothui/smooth-button";

/** A link styled as SmoothUI's solid pill button in the accent color. */
export function LinkButton({ href, label, variant = "solid" }: { href: string; label: string; variant?: "solid" | "outline" }) {
  return (
    <SmoothButton asChild className="[--btn-fg:var(--accent-foreground)] [--btn-hover:var(--accent-strong)] [--btn:var(--accent)]" shape="pill" size="lg" variant={variant}>
      <a className="no-underline" href={href}>{label}</a>
    </SmoothButton>
  );
}

export function PrintButton({ label }: { label: string }) {
  return (
    <SmoothButton className="[--btn-fg:var(--accent-foreground)] [--btn-hover:var(--accent-strong)] [--btn:var(--accent)]" onClick={() => window.print()} shape="pill" variant="solid">
      {label}
    </SmoothButton>
  );
}
