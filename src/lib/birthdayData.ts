// src/lib/birthdayData.ts

export interface Memory {
  title: string;
  body: string;
}

export interface PolaroidItem {
  id: string;
  imageUrl: string;
  caption: string;
  longNote: string;
}


export const BIRTHDAY_CONTENT = {
  profile: {
    name: "Rubi",
    birthday: "January 26th",
  },
  vault: {
    password: "0126",
    hint: "Four digits... the day the stars aligned to bring you into the world.",
    letter: `
      My Dearest Rubi,

      If you're reading this, you've successfully unlocked a little piece of my heart. Happy Birthday, my love! Another year, another adventure, and my love for you only grows deeper with each passing moment.

      I wanted to take a moment, in this digital space, to tell you just a few things I cherish about you. I adore your bright, infectious laughter that can light up even my darkest days. I love the way your eyes sparkle with curiosity and kindness, always seeing the best in the world and in everyone around you. Your compassion, your strength, and your unwavering spirit inspire me constantly.

      You make every ordinary moment extraordinary, transforming simple days into cherished memories. From our quiet evenings in, filled with comfortable silences and shared dreams, to our wild adventures and silly escapades, every second with you is a treasure.

      Thank you for being you, for your warmth, your understanding, and for filling my life with so much joy and love. I am incredibly grateful to have you by my side, today and always.

      Here's to celebrating you, today and every day. May this new year bring you all the happiness, success, and love you so richly deserve.

      Forever and always,
      Your Love
    `,
  },
  memories: [
    {
      title: "The Beginning",
      body: "Our first meeting at JKUAT. That day at Aticas Cafe where it all started.",
    },
    {
      title: "The Great Trek",
      body: "That day we walked 10,000km through town just because we didn't want the day to end.",
    },
    {
      title: "Midnight Whispers",
      body: "All those late-night chats that turned into early mornings.",
    },
    {
      title: "Quiet Comfort",
      body: "Our sweet sleep dates—the most peaceful moments in the world.",
    },
  ],
  countdown: {
    targetDate: "2026-01-26T00:00:00", // January 26th, 2026
    dailyClues: [
      "Your gift has a connection to our first 'infamous' cooking night.", // 9 days away
      "It's something sweet, just like you. Look for something that comes in a small, delightful package.", // 8 days away
      "Think about places that make you smell good and feel fresh.", // 7 days away
      "It's cuddly and soft, and perfect for snuggling.", // 6 days away
      "It has a melody, but you can't sing along to it.", // 5 days away
      "This clue is about something that lights up a room, just like your smile.", // 4 days away
      "It's a reflection of our shared dreams and future adventures.", // 3 days away
      "Something that reminds you of our quiet, comforting moments.", // 2 days away
      "The final clue is hidden where we keep our 'adventures awaiting' map.", // 1 day away
    ],
  },
  finalReveal: {
    message: "You've found the final secret. I love you, Rubi.",
    riddle: "I am sweet but don't speak, I am soft but have no heartbeat, I sparkle but I'm not a star, and I linger in the air wherever you are. Look where under the table.",
  },
};
