import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import GallerySection from "@/components/GallerySection";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import ActionsSection from "@/components/ActionsSection";
import ParticipateSection from "@/components/ParticipateSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <GallerySection />
      <ActionsSection />
      <TeamPreviewSection />
      <ParticipateSection />
    </div>
  );
};

export default Index;
