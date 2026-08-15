import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import SmoothButton from './ui/smoothui/smooth-button';
import { projectMedia } from '../data/projectMedia';
import { projects } from '../data/resume';
import { projectText, type Lang } from '../data/siteCopy';

type Filter = 'all' | 'live' | 'open-source' | 'research';

const filters: { value: Filter; zh: string; en: string }[] = [
  { value: 'all', zh: '全部', en: 'All' },
  { value: 'live', zh: '上線', en: 'Live' },
  { value: 'open-source', zh: '開源', en: 'Open source' },
  { value: 'research', zh: '研究', en: 'Research' },
];

export default function ProjectBrowser({ lang }: { lang: Lang }) {
  const [filter, setFilter] = useState<Filter>('all');
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const filtered = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'live') return project.kind.includes('Live') || project.result.includes('Live');
    if (filter === 'open-source') return project.kind.includes('Open source');
    return project.kind.includes('Research');
  });

  return (
    <div className="project-browser">
      <div className="browser-toolbar" aria-label={lang === 'en' ? 'Filter projects' : '篩選作品'}>
        <div className="browser-filters">
          {filters.map((item) => (
            <SmoothButton
              key={item.value}
              type="button"
              size="sm"
              variant={filter === item.value ? 'default' : 'outline'}
              color={filter === item.value ? undefined : 'blue'}
              onClick={() => { setFilter(item.value); setActiveTitle(null); }}
              aria-pressed={filter === item.value}
            >
              {lang === 'en' ? item.en : item.zh}
            </SmoothButton>
          ))}
        </div>
        <span className="browser-count">{String(filtered.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
      </div>

      <div className="browser-records">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, index) => {
            const isOpen = activeTitle === project.title;
            const text = projectText(project, lang);
            const media = projectMedia[project.title];
            const mediaUrl = media ? `${basePath}${media}` : undefined;
            return (
              <motion.article
                key={project.title}
                className="browser-record"
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, delay: index * 0.025 }}
              >
                <button className="browser-record-trigger" type="button" onClick={() => setActiveTitle(isOpen ? null : project.title)} aria-expanded={isOpen}>
                  <span className="browser-record-index">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
                  <span className="browser-record-title">{project.title}</span>
                  <span className="browser-record-meta">{project.kind}<br />{project.stack}</span>
                  <span className="browser-record-action">{isOpen ? (lang === 'en' ? 'Close' : '收起') : (lang === 'en' ? 'Open file' : '開啟檔案')} <span aria-hidden="true">{isOpen ? '↑' : '↓'}</span></span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div className="browser-record-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      {mediaUrl && <div className="browser-record-media"><img src={mediaUrl} alt={`${project.title} project preview`} /></div>}
                      <div className="browser-record-copy">
                        <p>{text.description}</p>
                        <div className="browser-proof"><span><strong>{lang === 'en' ? 'Contribution' : '貢獻'}</strong>{text.contribution}</span><span><strong>{lang === 'en' ? 'Outcome' : '成果'}</strong>{text.outcome}</span></div>
                        {project.href && <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">{lang === 'en' ? 'Open project' : '開啟專案'} <span aria-hidden="true">↗</span></a>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
