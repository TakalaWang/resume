import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import SmoothButton from './ui/smoothui/smooth-button';
import { projectMedia } from '../data/projectMedia';
import { projects } from '../data/resume';
import { projectText, type Lang } from '../data/siteCopy';

const featuredTitles = ['NOJV', 'OnStage TW', 'Speech Examination Platform', 'Hinagiku', 'Cool English'];

type Project = (typeof projects)[number];

export default function ProjectShowcase({ lang, featured = false }: { lang: Lang; featured?: boolean }) {
  const collection = featured ? featuredTitles.map((title) => projects.find((project) => project.title === title)).filter((project): project is Project => Boolean(project)) : projects;
  const [activeTitle, setActiveTitle] = useState(collection[0]?.title ?? '');
  const active = collection.find((project) => project.title === activeTitle) ?? collection[0];

  if (!active) return null;

  const text = projectText(active, lang);
  const media = projectMedia[active.title];
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const mediaUrl = media ? `${basePath}${media}` : undefined;
  const labels = lang === 'en'
    ? { contribution: 'Contribution', outcome: 'Outcome', open: 'Open project', selected: 'Selected project' }
    : { contribution: '我的貢獻', outcome: '成果', open: '開啟專案', selected: '目前選擇' };

  return (
    <div className="showcase">
      <div className="showcase-nav" role="tablist" aria-label={lang === 'en' ? 'Select a project' : '選擇作品'}>
        {collection.map((project, index) => {
          const isActive = project.title === active.title;
          return (
            <button
              key={project.title}
              className={`showcase-tab${isActive ? ' is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTitle(project.title)}
              onMouseEnter={() => setActiveTitle(project.title)}
            >
              <span className="showcase-tab-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="showcase-tab-copy"><strong>{project.title}</strong><small>{project.kind}</small></span>
              <ChevronRight aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div className="showcase-main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={active.title} className="showcase-frame" initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }} transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}>
            <div className="showcase-frame-bar"><span className="showcase-frame-status"><i /> {labels.selected}</span><span>{active.title}</span><span>{String(collection.indexOf(active) + 1).padStart(2, '0')} / {String(collection.length).padStart(2, '0')}</span></div>
            {mediaUrl ? <img src={mediaUrl} alt={`${active.title} project preview`} /> : <div className="showcase-placeholder"><span>{active.title}</span><small>{active.stack}</small></div>}
            <div className="showcase-frame-footer"><span>{active.stack}</span>{active.href && <a href={active.href} target="_blank" rel="noopener noreferrer" aria-label={`${labels.open}: ${active.title}`}><ArrowUpRight aria-hidden="true" /></a>}</div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={active.title} className="showcase-details" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, delay: 0.06 }}>
            <div className="showcase-heading"><div><p className="showcase-kind">{active.kind}</p><h3>{active.title}</h3></div>{active.href && <SmoothButton asChild size="sm" variant="outline" color="blue"><a href={active.href} target="_blank" rel="noopener noreferrer">{labels.open}<ArrowUpRight aria-hidden="true" /></a></SmoothButton>}</div>
            <p className="showcase-description">{text.description}</p>
            <dl className="showcase-proof"><div><dt>{labels.contribution}</dt><dd>{text.contribution}</dd></div><div><dt>{labels.outcome}</dt><dd>{text.outcome}</dd></div></dl>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
