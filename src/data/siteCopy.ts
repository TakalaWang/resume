import type { projects, experience } from './resume';

export type Lang = 'zh' | 'en';

export const copy = {
  zh: {
    nav: { work: '作品', experience: '經歷', contact: '聯絡', language: 'EN' },
    hero: { role: 'Software Engineer · AI Researcher', thesis: 'Building useful systems.', work: '查看精選作品' },
    profile: { eyebrow: 'PROFILE', title: '個人資料', summary: '學歷、工作方向與可直接聯絡的方式。', current: '目前學歷', bachelor: '學士背景', focus: '主要方向', online: '直接聯絡', topSix: 'Computer Science · Top 6%' },
    work: { eyebrow: 'SELECTED WORK', title: '精選作品', summary: '五個最能代表我在產品、開源與 AI 系統上的實作。', contribution: '我的貢獻', outcome: '成果', open: '開啟專案', more: '查看更多作品', moreHint: '查看完整作品、研究與開源工具' },
    experience: { eyebrow: 'EXPERIENCE', title: '經歷', summary: '工程工作、研究與長期協作。' },
    footer: { note: 'Software Engineer · AI Researcher', blog: 'Blog' },
  },
  en: {
    nav: { work: 'Work', experience: 'Experience', contact: 'Contact', language: '中文' },
    hero: { role: 'Software Engineer · AI Researcher', thesis: 'Building useful systems.', work: 'View selected work' },
    profile: { eyebrow: 'PROFILE', title: 'Profile', summary: 'Education, engineering focus, and direct ways to get in touch.', current: 'Current education', bachelor: 'Undergraduate', focus: 'Focus', online: 'Get in touch', topSix: 'Computer Science · Top 6%' },
    work: { eyebrow: 'SELECTED WORK', title: 'Selected work', summary: 'Five projects that represent my work across products, open source, and AI systems.', contribution: 'My contribution', outcome: 'Outcome', open: 'Open project', more: 'View all work', moreHint: 'Explore every project, research system, and open-source tool' },
    experience: { eyebrow: 'EXPERIENCE', title: 'Experience', summary: 'Engineering roles, research, and long-term collaboration.' },
    footer: { note: 'Software Engineer · AI Researcher', blog: 'Blog' },
  },
} as const;

const projectTranslations: Record<string, { description: string; contribution: string; outcome: string }> = {
  NOJV: {
    description: 'An open-source online judge platform. I work across judge throughput, reference solution validation, release pipelines, and production deployment.',
    contribution: 'Worked on low-latency execution, throughput, validation, release automation, and production deployment.',
    outcome: 'Improved reliability across performance, correctness, and delivery for an open-source judge.',
  },
  'OnStage TW': {
    description: 'A Taiwan theatre discovery platform that combines ticket sources with search, calendar, maps, bookmarks, RSS, PWA, and indexable event pages.',
    contribution: 'Built source integration, venue mapping, search, SEO, RSS, calendar, and map flows.',
    outcome: 'Turned scattered ticket information into a searchable, trackable product.',
  },
  'Speech Examination Platform': {
    description: 'An English speaking assessment platform with exam management, recording, Azure Speech scoring, Azure OpenAI evaluation, queues, and admin workflows.',
    contribution: 'Implemented exam management, audio processing, speech and LLM scoring, background jobs, and failure handling.',
    outcome: 'Connected speech evaluation, result generation, and administration into a working product flow.',
  },
  Hinagiku: {
    description: 'An intelligent system for educational discussions. I worked on LLM chat, audio and text processing, summaries, PDF/DOCX export, and classroom feedback.',
    contribution: 'Contributed to the LLM chat core, discussion and summary APIs, PDF parsing, voice records, and document exports.',
    outcome: '74 commits and 32 merged PRs supporting real-time analysis and feedback in education.',
  },
  'Cool English': {
    description: 'An English learning platform. I contributed to SSML voice generation, scenario-based conversation, AI speaking assessment, and learning flows.',
    contribution: 'Built parts of the SSML rich-text editor, scenario chat, voice generation, and speaking assessment.',
    outcome: 'A learning platform serving more than 100,000 users.',
  },
  TWLinter: {
    description: 'A Traditional Chinese terminology checker and Discord bot. Its reusable Rust core powers a CLI, Chrome extension, and Discord adapter.',
    contribution: 'Designed the reusable Rust core and connected the CLI, extension, Discord adapter, and Gemini decision layer.',
    outcome: 'Turned personal language rules into an open-source tool shared across interfaces.',
  },
  'Coz Planner': {
    description: 'A course search and timetable planning tool with conflict hints, advanced filters, official school data, and cloud schedules.',
    contribution: 'Worked on timetable previews, conflict hints, filters, official school data, and cloud schedules.',
    outcome: 'Made course search useful for planning an actual semester timetable.',
  },
  'NYCU LIFE Events': {
    description: 'A campus event management system with poster handling, preferences, admin tools, audit history, email, and tracing.',
    contribution: 'Worked on poster handling, preferences, admin flows, audit history, email, and observability.',
    outcome: 'A deployable and traceable system built through long-term collaboration.',
  },
  'Delta-NTNU ChatBot': {
    description: 'An enterprise knowledge assistant built with GraphRAG, LightRAG, semantic indexing, vector retrieval, and knowledge graphs.',
    contribution: 'Explored retrieval architecture, semantic indexing, knowledge graphs, and evaluation workflows.',
    outcome: 'A research system with retrieval accuracy consistently above 70%.',
  },
  'GPET Assessment': {
    description: 'A multimodal speaking assessment research project combining images, questions, and speech.',
    contribution: 'Worked on BLIP-2 fine-tuning, T5 prompt engineering, and unseen-data evaluation.',
    outcome: 'Accepted to SLaTE 2025.',
  },
  'repo-lens': {
    description: 'A web tool that turns Git repository structure and development signals into a readable interface.',
    contribution: 'Built the repository analysis flow and its web presentation.',
    outcome: 'A live demo for exploring repository structure.',
  },
  'readme-waves': {
    description: 'An open-source generator for music equalizer SVGs and videos used in README files.',
    contribution: 'Built the audio visualization and embeddable SVG/video generation flow.',
    outcome: 'Reusable open-source visual assets for project documentation.',
  },
};

const experienceTranslations: Record<string, { title: string; description: string }> = {
  'Full-Stack Developer · GitRoll': { title: 'Full-Stack Developer · GitRoll', description: 'Product engineering, AI-assisted development, assessment platforms, and reliable software delivery.' },
  'R&D Summer Intern · Acer': { title: 'R&D Summer Intern · Acer', description: 'Joined Acer\'s R&D internship program and documented engineering and interview experience.' },
  'M.S. Computer Science · NYCU': { title: 'M.S. Computer Science · NYCU', description: 'Master\'s student in Computer Science at National Yang Ming Chiao Tung University.' },
  'Engineering Collaborator · NYCU LIFE': { title: 'Engineering Collaborator · NYCU LIFE', description: 'Long-term collaboration across campus products, event systems, identity, and infrastructure.' },
  'Research Developer · LTTC / NTNU': { title: 'Research Developer · LTTC / NTNU', description: 'Multimodal AI research for speaking assessment, including VLM fine-tuning, prompt engineering, speech scoring, and system integration.' },
  'Research Developer · Delta Electronics': { title: 'Research Developer · Delta Electronics', description: 'Enterprise knowledge assistant research with GraphRAG, LightRAG, semantic indexing, and retrieval evaluation.' },
  'Full-Stack Developer · Cool English': { title: 'Full-Stack Developer · Cool English', description: 'Core features across SSML voice generation, scenario-based chat, and AI speaking assessment for more than 100,000 users.' },
};

export function projectText(project: (typeof projects)[number], lang: Lang) {
  if (lang === 'zh') return { description: project.description, contribution: project.contribution ?? '', outcome: project.outcome ?? '' };
  return projectTranslations[project.title] ?? { description: project.description, contribution: project.contribution ?? '', outcome: project.outcome ?? '' };
}

export function experienceText(item: (typeof experience)[number], lang: Lang) {
  if (lang === 'zh') return item;
  return { ...item, ...experienceTranslations[item.title] };
}
