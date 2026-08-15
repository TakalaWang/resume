import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, Layers3 } from 'lucide-react';
import { useState } from 'react';
import SmoothButton from './ui/smoothui/smooth-button';
import { projectMedia } from '../data/projectMedia';
import { projects } from '../data/resume';
import { projectText, type Lang } from '../data/siteCopy';

const featuredTitles = ['NOJV', 'OnStage TW', 'Speech Examination Platform', 'Hinagiku', 'Cool English'];
type Project = (typeof projects)[number];

export default function SmoothWorkList({ lang, featured = false }: { lang: Lang; featured?: boolean }) {
  const collection = featured
    ? featuredTitles.map((title) => projects.find((project) => project.title === title)).filter((project): project is Project => Boolean(project))
    : projects;
  const [activeTitle, setActiveTitle] = useState(collection[0]?.title ?? '');
  const active = collection.find((project) => project.title === activeTitle) ?? collection[0];

  if (!active) return null;

  const text = projectText(active, lang);
  const image = projectMedia[active.title];
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const labels = lang === 'en'
    ? { live: 'Live view', contribution: 'Contribution', outcome: 'Outcome', open: 'Open project' }
    : { live: '作品預覽', contribution: '我的貢獻', outcome: '成果', open: '開啟專案' };

  return (
    <div className="smooth-work">
      <div className="smooth-work-tabs" role="tablist" aria-label={lang === 'en' ? 'Select a project' : '選擇作品'}>
        {collection.map((project, index) => {
          const selected = project.title === active.title;
          return (
            <SmoothButton
              key={project.title}
              type="button"
              role="tab"
              aria-selected={selected}
              variant={selected ? 'soft' : 'ghost'}
              color={selected ? 'blue' : 'neutral'}
              size="sm"
              className={`smooth-work-tab${selected ? ' is-selected' : ''}`}
              onClick={() => setActiveTitle(project.title)}
            >
              <span className="smooth-work-tab-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="smooth-work-tab-name">{project.title}</span>
              <ArrowUpRight aria-hidden="true" />
            </SmoothButton>
          );
        })}
      </div>

      <div className="smooth-work-stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={active.title}
            className="smooth-project"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="smooth-project-topline">
              <span><i /> {labels.live}</span>
              <span>{String(collection.indexOf(active) + 1).padStart(2, '0')} / {String(collection.length).padStart(2, '0')}</span>
            </div>
            {image ? <img src={`${basePath}${image}`} alt={`${active.title} screenshot`} /> : <div className="smooth-project-empty"><Layers3 aria-hidden="true" /><strong>{active.title}</strong><span>{active.stack}</span></div>}
            <div className="smooth-project-body">
              <div className="smooth-project-title">
                <div><span>{active.kind}</span><h3>{active.title}</h3></div>
                <div className="smooth-project-actions">
                  {active.href && <SmoothButton asChild variant="solid" color="blue" size="sm"><a href={active.href} target="_blank" rel="noopener noreferrer">{labels.open}<ExternalLink aria-hidden="true" /></a></SmoothButton>}
                </div>
              </div>
              <p>{text.description}</p>
              <dl className="smooth-project-proof"><div><dt>{labels.contribution}</dt><dd>{text.contribution}</dd></div><div><dt>{labels.outcome}</dt><dd>{text.outcome}</dd></div></dl>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
