# Project Celebration

A highly interactive, mobile-first Birthday Website, "Project Celebration" is designed to create a whimsical, romantic, and hand-crafted digital experience. Built with modern web technologies, it features engaging animations, personalized content, and a delightful user journey for a loved one's special day.

## Features

-   **Homepage & Hero Section:**
    -   Full viewport height hero with a central photo carousel.
    -   "Happy Birthday, Babe!" text animated with Framer Motion.
    -   Floating background particles (hearts/balloons).
    -   Mascot peeking from the bottom left with mood-based emojis.
    -   Scroll indicator.
-   **Audio Player:**
    -   Sticky, floating music control (bottom-right) with play/pause and mute/unmute functionality.
    -   Plays `birthday-song.mp3`.
-   **The Love Letter Vault:**
    -   An interactive vintage safe UI with a 4-digit PIN pad.
    -   Correct PIN ('0126' by default) animates the safe door open, revealing a personalized letter.
    -   Incorrect PIN triggers a shake animation.
-   **The Memory Jar:**
    -   A glass jar illustration filled with folded paper notes representing cherished memories.
    -   "Shake the Jar" interaction randomly selects and displays a memory in a modal.
-   **"Adventures Awaiting" Map:**
    -   A map background with absolute positioned, interactive pins.
    -   Clicking a pin opens a pop-up with adventure details.
    -   "Claim Adventure" button triggers a confetti explosion.
-   **"Why I Love You" Polaroid Wall:**
    -   A masonry/scattered grid layout of Polaroid-style photos.
    -   Each Polaroid features an image and a short caption.
    -   On click, the Polaroid flips to reveal a longer, heartfelt note.
-   **Countdown Timer:**
    -   Displays Days : Hours : Minutes : Seconds until a target birthday date.
    -   "Daily Clue" box that reveals hints based on the current system date when the birthday is near.
    -   Transitions to an "It's Party Time!" banner when the date is reached.
-   **Digital Unwrapping Card:**
    -   A 3D animated envelope that "unwraps" (top flap flips, card slides out) on click.
    -   Reveals a QR code placeholder and a special riddle for a real-world gift.
-   **Mobile Navigation (Hamburger Menu):**
    -   Replaced traditional bottom navigation with a modern hamburger menu for mobile users.
    -   Hamburger icon in the top-right corner triggers a Framer Motion 'Slide-in Drawer' from the right.
    -   Semi-transparent dark background for the drawer.
    -   Contains links to Home, Vault, Memories, Adventures, Reasons, Countdown, and Gift sections.
-   **The "Easter Egg":**
    -   A global 'Pet Mascot' component.
    -   Rapidly clicking the mascot 10 times triggers a massive confetti explosion and a hidden modal message.

## Tech Stack

-   **Framework:** Next.js 14+ (App Router)
-   **Styling:** Tailwind CSS
-   **Animation:** Framer Motion
-   **Icons:** Lucide React
-   **Components:** Shadcn/UI (semantic HTML structures)
-   **Confetti:** `react-confetti`

## Design Language

-   **Vibe:** Whimsical, Romantic, Hand-crafted, "Digital Scrapbook."
-   **Fonts:** Handwriting font ('Caveat') for headers and a clean sans-serif ('Inter') for body text.
-   **Colors:** Soft Pastels (Cream, Blush Pink, Sage Green, Slate Blue).
-   **Mascot System:** A global 'Pet Mascot' with mood-based emoji representations.

## Getting Started

Follow these instructions to set up and run the project locally.

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

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

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
-   `src/data/`: Mock data and content configurations (e.g., `adventures.ts`, `reasons.ts`, `clues.ts`).
-   `src/hooks/`: Custom React hooks (e.g., `useActiveSection.ts`).
-   `src/lib/`: Utility functions and centralized project data (e.g., `birthdayData.ts`, `utils.ts`).
-   `public/`: Static assets like images (`/images`), audio (`birthday-song.mp3`), and map textures.

## Customizing Content

All personalized content for "Rubi" is managed in `src/lib/birthdayData.ts`. You can easily update:

-   **Profile:** `name`, `birthday`.
-   **Vault:** `password`, `hint`, and the `letter` content.
-   **Memories:** The array of `{ title, body }` objects.
-   **Countdown:** `targetDate` and `dailyClues`.
-   **Final Reveal:** `message` and `riddle`.

You can also replace the images in `public/images/` and the audio file in `public/birthday-song.mp3` with your own assets.

## Acknowledgements

-   Developed with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
-   Icons from Lucide React.
-   Components inspired by Shadcn/UI principles.
-   Placeholder images from [placehold.co](https://placehold.co).
-   Confetti effect powered by `react-confetti`.

---
Made with ✨ by Gemini CLI Agent