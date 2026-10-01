export type ExperienceMedia = {
  src: string;
  alt: { zh: string; en: string };
  /** Public post the photo came from; omitted for photos the owner supplied directly. */
  source?: string;
  kind: 'event-photo' | 'poster-photo';
};

// Verified public-post photographs only; provenance and credits are recorded in
// docs/internal/experience-media-2026-09-21.md. These are not product screenshots.
export const experienceMedia: Record<string, ExperienceMedia[]> = {
  'gdsc-ntnu-gdg-on-campus-ntnu': [
    {
      src: '/media/experience/gdg-talk-2026.webp',
      alt: {
        zh: '2026-05-20 在 GDG on Campus NTNU 分享的現場：講者坐在講台旁操作筆電，投影片標題為「體制內練功，體制外打怪。」',
        en: 'At a GDG on Campus NTNU talk on 2026-05-20: the speaker works a laptop beside the podium, with a slide titled “體制內練功，體制外打怪。”',
      },
      kind: 'event-photo',
    },
  ],
  'ntnu-cs-camp': [
    {
      src: '/media/experience/camp-2025-teaching-team.webp',
      alt: {
        zh: '2025 臺師大資工營教學組 8 位工作人員的合照，每人掛著寫有名字的名牌。',
        en: 'The eight-person teaching team of the 2025 NTNU CSIE Camp, each wearing a name tag.',
      },
      source: 'https://www.instagram.com/p/DWmVHYrAUDLWb0N3Gv6QCUsi-zrRY0-P4OqCoo0/',
      kind: 'event-photo',
    },
    {
      src: '/media/experience/camp-2025-staff-backdrop.webp',
      alt: {
        zh: '2025 臺師大資工營 3 位工作人員穿著營服，站在「資遊你和我的師界」主視覺背板前。',
        en: 'Three 2025 NTNU CSIE Camp staff members in camp shirts in front of the camp’s main-visual backdrop.',
      },
      source: 'https://www.instagram.com/p/DWmVHYrAUDLWb0N3Gv6QCUsi-zrRY0-P4OqCoo0/',
      kind: 'event-photo',
    },
    {
      src: '/media/experience/camp-2022-activity-team.webp',
      alt: {
        zh: '2022 師大資工營活動組工作人員在校園戶外的合照。',
        en: 'The 2022 NTNU CSIE Camp activity team posing outdoors on campus.',
      },
      source: 'https://www.instagram.com/p/Cf1OZI1jojbP4EtLloE2uhs3h4Ogry7XFwitr40/',
      kind: 'event-photo',
    },
  ],
  'weave-in': [
    {
      src: '/media/experience/weave-in-hackathon-team.webp',
      alt: {
        zh: 'Weave-In 四位隊員在 Sea x OpenAI Regional Codex Hackathon Taiwan 背板前的自拍合照，脖子上掛著參賽證。',
        en: 'A selfie of four Weave-In teammates wearing participant lanyards in front of the Sea x OpenAI Regional Codex Hackathon Taiwan backdrop.',
      },
      source: 'https://www.linkedin.com/feed/update/urn:li:activity:7507458395633926144/',
      kind: 'event-photo',
    },
  ],
  'acer-medical': [
    {
      src: '/media/experience/acer-internship-group.webp',
      alt: {
        zh: 'Acer 暑期實習期間的團體合照，眾人站在戶外的綠色 Acer 標誌前。',
        en: 'A group photograph from the Acer summer internship, in front of the green Acer sign outdoors.',
      },
      source: 'https://www.linkedin.com/posts/takalawang_acerabrsummerabrinternshipabrprogram-aigait-ugcPost-7382116478952587265-QeR7/',
      kind: 'event-photo',
    },
  ],
  'buildmode-gen-ai-hackathon-2026': [
    {
      src: '/media/experience/urtube-buildmode-award.webp',
      alt: {
        zh: 'urtube 五位隊員在 BUILDMODE GEN-AI HACKATHON 2026 合照，手持第一名獎金看板。',
        en: 'Five urtube teammates holding the first-prize board at BUILDMODE GEN-AI HACKATHON 2026.',
      },
      source: 'https://www.linkedin.com/posts/takalawang_buildmode-sitcon-futuremode-activity-7502762950148136960-xuCw',
      kind: 'event-photo',
    },
  ],
  'a-novel-data-augmentation-approach-for-automatic-speaking-assessment-on-opinion-expressions': [
    {
      src: '/media/experience/slate-2025-poster.webp',
      alt: {
        zh: 'SLaTE 2025 論文發表貼文中的雙人合照，身後海報題名為「A Novel Data Augmentation Approach for Automatic Speaking Assessment on Opinion Expressions」。',
        en: 'Two people beside the poster titled “A Novel Data Augmentation Approach for Automatic Speaking Assessment on Opinion Expressions,” from the SLaTE 2025 presentation post.',
      },
      source: 'https://www.linkedin.com/feed/update/urn:li:activity:7371805723913224192/',
      kind: 'poster-photo',
    },
  ],
};
