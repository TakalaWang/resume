import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ease } from "./spring";

export type Item = { id: string; href: string; title: string; meta: string; summary: string; tags: string[] };
type Group = { id: string; title: string; items: Item[] };
type Labels = { filter: string; clear: string; empty: string; count: string; more: string; less: string };

// On phones the full tag cloud fills a screen before any work shows; keep the most common ones.
const MOBILE_TAGS = 10;

/** All work, filterable by technology; results fade in and out. */
export default function WorkFilter({ groups, labels }: { groups: Group[]; labels: Labels }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const all = groups.flatMap(g => g.items);
  // Technologies used by more than one entry, most common first.
  const counts = new Map<string, number>();
  for (const item of all) for (const tag of item.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  const popular = [...counts].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]).map(([tag]) => tag);
  const match = (item: Item) => selected.every(tag => item.tags.includes(tag));
  const toggle = (tag: string) => setSelected(s => (s.includes(tag) ? s.filter(t => t !== tag) : [...s, tag]));
  const total = all.filter(match).length;

  return (
    <>
      <div aria-label={labels.filter} className="mt-8 flex flex-wrap gap-2" role="group">
        {popular.map((tag, i) => (
          <button
            aria-pressed={selected.includes(tag)}
            className={`${!expanded && i >= MOBILE_TAGS && !selected.includes(tag) ? "max-sm:hidden " : ""}rounded-full border px-3 py-1 text-sm transition-colors hover:border-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-foreground`}
            key={tag}
            onClick={() => toggle(tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
        {popular.length > MOBILE_TAGS && (
          <button aria-expanded={expanded} className="px-3 py-1 font-semibold text-accent text-sm underline underline-offset-4 sm:hidden" onClick={() => setExpanded(e => !e)} type="button">
            {expanded ? labels.less : `${labels.more} +${popular.length - MOBILE_TAGS}`}
          </button>
        )}
      </div>
      <p className="mt-6 text-muted-foreground text-sm">
        {labels.count.replace("{n}", String(total))}
        {selected.length > 0 && (
          <button className="ml-3 font-semibold text-accent underline underline-offset-4" onClick={() => setSelected([])} type="button">
            {labels.clear}
          </button>
        )}
      </p>
      {groups.map(group => {
        const items = group.items.filter(match);
        return items.length ? (
          <section key={group.id}>
            <h2 className="mt-14 mb-2 font-semibold text-muted-foreground text-xs uppercase tracking-[0.18em]">{group.title}</h2>
            <AnimatePresence initial={false}>
              {items.map(item => (
                <motion.a
                  animate={{ opacity: 1, y: 0 }}
                  className="group block border-b py-5 no-underline"
                  exit={reduce ? undefined : { opacity: 0 }}
                  href={item.href}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  key={item.id}
                  layout={!reduce}
                  transition={{ duration: 0.5, ease }}
                >
                  <p className="text-muted-foreground text-xs">{item.meta}</p>
                  <h3 className="mt-1 font-bold text-foreground text-lg group-hover:text-accent">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{item.summary}</p>
                </motion.a>
              ))}
            </AnimatePresence>
          </section>
        ) : null;
      })}
      {total === 0 && <p className="mt-10 text-muted-foreground">{labels.empty}</p>}
    </>
  );
}
