# Project Celebration

This "Project Celebration" website was personally crafted with love to create a unique, interactive, and memorable digital experience for a special someone's birthday. Designed with a whimsical, romantic, and hand-crafted "digital scrapbook" aesthetic, it combines modern web technologies with heartfelt personalization to deliver a truly unique gift.

## Features

-   **Homepage & Hero Section:**
    -   Full viewport height hero featuring a central photo carousel of cherished moments.
    -   A personalized birthday message animated with Framer Motion.
    -   Gentle floating background particles (hearts/balloons) to set a romantic mood.
    -   A cute Mascot peeking from the corner, expressing different moods.
    -   A subtle scroll indicator inviting further exploration.
-   **Audio Player:**
    -   A sticky, floating music control (bottom-right) allows for playing and muting a special birthday song.
-   **The Love Letter Vault:**
    -   An interactive vintage safe UI featuring a 4-digit PIN pad.
    -   Entering the correct secret PIN animates the safe door open, revealing a deeply personal letter.
    -   An incorrect PIN entry triggers a playful shake animation.
-   **The Memory Jar:**
    -   A charming glass jar illustration visually filled with digital notes.
    -   A "Shake the Jar" interaction randomly selects and beautifully displays a precious memory in a modal pop-up.
-   **"Adventures Awaiting" Map:**
    -   A custom map background adorned with absolute positioned, interactive pins.
    -   Clicking a pin opens a pop-up detailing a future adventure you dream of sharing.
    -   A "Claim Adventure" button triggers a celebratory confetti explosion.
-   **"Why I Love You" Polaroid Wall:**
    -   A beautifully arranged masonry-style gallery of Polaroid-like photos.
    -   Each Polaroid showcases a photo and a short reason why she's loved.
    -   Clicking a Polaroid flips it over to reveal a longer, more detailed heartfelt note.
-   **Countdown Timer:**
    -   Precisely displays Days : Hours : Minutes : Seconds until the special birthday.
    -   As the big day draws near, a "Daily Clue" box unlocks hints, one each day, adding to the anticipation.
    -   Transforms into an "It's Party Time!" banner once the birthday arrives.
-   **Digital Unwrapping Card:**
    -   An engaging 3D animated envelope that gracefully "unwraps" on click (the top flap flips, and a card slides out).
    -   Reveals a QR code (placeholder) and a special riddle hinting at a real-world gift.
-   **Mobile Navigation (Hamburger Menu):**
    -   A modern, mobile-only hamburger menu provides intuitive navigation.
    -   Clicking the top-right hamburger icon triggers a smooth Framer Motion 'Slide-in Drawer' from the right.
    -   Features a semi-transparent dark background, ensuring the main content remains subtly visible.
    -   Includes easily tappable links to all main sections: Home, Vault, Memories, Adventures, Reasons, Countdown, and Gift.
-   **The "Easter Egg":**
    -   A charming global 'Pet Mascot' component.
    -   A fun, hidden surprise: rapid-clicking the mascot 10 times triggers a massive confetti explosion and reveals a secret modal message.

## Tech Stack

-   **Framework:** Next.js 14+ (App Router)
-   **Styling:** Tailwind CSS
-   **Animation:** Framer Motion
-   **Icons:** Lucide React
-   **Components:** Shadcn/UI (semantic HTML structures)
-   **Confetti:** `react-confetti`

## Design Language

-   **Vibe:** Whimsical, Romantic, Hand-crafted, "Digital Scrapbook."
-   **Fonts:** Features a handwriting font ('Caveat') for headers, adding a personal touch, and a clean sans-serif ('Inter') for body text, ensuring readability.
-   **Colors:** A soft pastel palette (Cream, Blush Pink, Sage Green, Slate Blue) chosen for a warm and romantic feel.
-   **Mascot System:** A delightful global 'Pet Mascot' component, designed to add charm and interactivity, with mood-based emoji representations.

## Getting Started

Follow these instructions to set up and run this personalized project locally.

### Prerequisites

-   Node.js (LTS version recommended)
-   npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Issah721/birthday-site.git
    cd birthday-site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To run the application in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your personalized creation.

The page will hot-reload as you make changes.

### Building for Production

To build the application for production:

```bash
npm run build
```

Then, to start the production server:

```bash
npm start
```

## Project Structure

-   `src/app/`: Next.js App Router root, including `page.tsx` (main homepage) and `layout.tsx`.
-   `src/components/`: Reusable React components (Hero, Vault, MemoryJar, Countdown, etc.).
-   `src/context/`: React Context for global state management (e.g., `AppContext.tsx`).
-   `src/data/`: Mock data and content configurations (e.g., `adventures.ts`, `reasons.ts`).
-   `src/hooks/`: Custom React hooks (e.g., `useActiveSection.ts`).
-   `src/lib/`: Utility functions and **the core `birthdayData.ts` file for all personalized content.**
-   `public/`: Static assets like images (`/images`), audio (`birthday-song.mp3`), and map textures.

## Customizing Content

This project is designed for easy personalization! All the special messages, dates, and hints are centrally managed in `src/lib/birthdayData.ts`. You can easily update:

-   **Profile:** Set the name and specific birthday.
-   **Vault:** Define the secret `password`, a helpful `hint`, and craft the heartfelt `letter` content.
-   **Memories:** Populate the array of `{ title, body }` objects with your unique shared experiences.
-   **Countdown:** Adjust the `targetDate` and write your own engaging `dailyClues`.
-   **Final Reveal:** Customize the `message` and the `riddle` that leads to the real-world gift.

You can also replace the images in `public/images/` with your personal photos and update the audio file in `public/birthday-song.mp3` with a favorite song.

## Acknowledgements

-   Developed with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
-   Icons from Lucide React.
-   Components inspired by Shadcn/UI principles.
-   Placeholder images from [placehold.co](https://placehold.co) (used during development).
-   Confetti effect powered by `react-confetti`.

---
Made with ✨ by a loving boyfriend (with assistance from Gemini CLI Agent)