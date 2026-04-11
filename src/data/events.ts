export type EventData = {
  title: string;
  cover: string;
  mainVisual: string;
  navi: { title: string; url: string }[];
};

export const events: Record<string, EventData> = {
  nara2026: {
    title: "Scratch Day 2026 in Nara",
    cover: "/images/OGP/scratch-day-in-nara.png",
    mainVisual: "/images/main/scratch-day-in-nara.png",
    navi: [
      { title: "開催概要", url: "/2026/nara/" },
      // { title: '参加申込', url: '/2026/nara/entry/' },
      // { title: 'Show&Tell', url: '/2026/nara/show-tell/' },
      // { title: '展示', url: '/2026/nara/exhibition/' },
      // { title: 'ワークショップ', url: '/2026/nara/workshop/' },
      { title: "会場アクセス", url: "/2026/nara/access/" },
      // { title: '注意事項', url: '/2026/nara/notice/' },
      // { title: 'レポート', url: '/2026/nara/report/' },
    ],
  },
  nara2025: {
    title: "Scratch Day 2025 in Nara",
    cover: "/images/OGP/scratch-day-in-nara.png",
    mainVisual: "/images/main/scratch-day-in-nara.png",
    navi: [
      { title: "開催概要", url: "/2025/nara/" },
      { title: "参加申込", url: "/2025/nara/entry/" },
      { title: "Show&Tell", url: "/2025/nara/show-tell/" },
      { title: "展示", url: "/2025/nara/exhibition/" },
      { title: "ワークショップ", url: "/2025/nara/workshop/" },
      { title: "会場アクセス", url: "/2025/nara/access/" },
      { title: "注意事項", url: "/2025/nara/notice/" },
      { title: "レポート", url: "/2025/nara/report/" },
    ],
  },
};
