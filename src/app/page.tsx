import AudioPlayer from "@/components/AudioPlayer";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/Hero";
import MemoryJar from "@/components/MemoryJar";
import Vault from "@/components/Vault";
import AdventureMap from "@/components/AdventureMap";
import PolaroidGallery from "@/components/PolaroidGallery";
import Countdown from "@/components/Countdown";
import DigitalCard from "@/components/DigitalCard";
import Mascot from "@/components/Mascot";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Home() {
  return (
    <main className="relative">
      <FloatingParticles />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="countdown">
        <Countdown />
      </section>
      <section id="vault">
        <Vault />
      </section>
      <section id="memory-jar">
        <MemoryJar />
      </section>
      <section id="adventure-map">
        <AdventureMap />
      </section>
      <section id="polaroid-gallery">
        <PolaroidGallery />
      </section>
      <section id="digital-card">
        <DigitalCard />
      </section>
      <AudioPlayer />
      <Mascot />
      <HamburgerMenu />
    </main>
  );
}
