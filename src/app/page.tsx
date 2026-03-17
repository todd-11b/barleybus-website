import HeroSection from "@/components/bolt/hero-section";
import StickyBookButton from "@/components/bolt/sticky-book-button";
import UpcomingTrips from "@/components/bolt/upcoming-trips";
import TourGrid from "@/components/bolt/tour-grid";
import HowItWorks from "@/components/bolt/how-it-works";
import SocialProof from "@/components/bolt/social-proof";
import FeaturedTour from "@/components/bolt/featured-tour";
import VideoSection from "@/components/bolt/video-section";
import WallOfLove from "@/components/bolt/wall-of-love";
import PrivateEventsTeaser from "@/components/bolt/private-events-teaser";
import FAQSection from "@/components/bolt/faq-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <StickyBookButton />
      <HeroSection />
      <UpcomingTrips />
      <TourGrid />
      <HowItWorks />
      <SocialProof />
      <FeaturedTour />
      <VideoSection />
      <WallOfLove />
      <PrivateEventsTeaser />
      <FAQSection />
    </div>
  );
}
