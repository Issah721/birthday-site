export interface PolaroidItem {
  id: string;
  imageUrl: string;
  caption: string;
  longNote: string;
}

export const polaroidReasons: PolaroidItem[] = [
  {
    id: "1",
    imageUrl: "/images/birth1.png",
    caption: "Your infectious smile",
    longNote: "Your smile is the first thing that drew me in. It lights up any room and always makes my day brighter.",
  },
  {
    id: "2",
    imageUrl: "/images/birth2.png",
    caption: "Your contagious laugh",
    longNote: "I love how easily you laugh, and how it always makes me laugh too. It's truly one of my favorite sounds in the world.",
  },
  {
    id: "3",
    imageUrl: "/images/photo5.png",
    caption: "Your boundless kindness",
    longNote: "You are the most genuinely kind person I know. You always go out of your way to help others, and it inspires me every day.",
  },
  {
    id: "4",
    imageUrl: "/images/photo3.png",
    caption: "The sparkle in your eyes",
    longNote: "Your eyes tell a story, full of curiosity, warmth, and a little bit of mischief. I could get lost in them.",
  },
  {
    id: "5",
    imageUrl: "/images/birth1.png", // Cycle back to the first image
    caption: "Your unwavering passion",
    longNote: "When you talk about things you love, your passion is electrifying. It's amazing to watch you pursue your dreams.",
  },
  {
    id: "6",
    imageUrl: "/images/birth2.png", // Cycle back
    caption: "Your incredible strength",
    longNote: "You've faced challenges with grace and resilience. Your inner strength is something I deeply admire.",
  },
  {
    id: "7",
    imageUrl: "/images/photo5.png", // Cycle back
    caption: "Our shared adventures",
    longNote: "Every moment with you is an adventure, whether we're exploring new places or just discovering something new about each other.",
  },
  {
    id: "8",
    imageUrl: "/images/photo3.png", // Cycle back
    caption: "Your quick wit and humor",
    longNote: "You always know how to make me laugh, even on the toughest days. Your sense of humor is one of my favorite things about you.",
  },
  {
    id: "9",
    imageUrl: "/images/birth1.png", // Cycle back
    caption: "Your endless support",
    longNote: "You're always my biggest cheerleader, encouraging me and believing in me. That support means the world to me.",
  },
  {
    id: "10",
    imageUrl: "/images/birth2.png", // Cycle back
    caption: "Your beautiful heart",
    longNote: "Above all, I love your kind, generous, and beautiful heart. It's truly a privilege to know you.",
  },
];
