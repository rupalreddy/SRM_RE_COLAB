import Navbar from "@/components/layout/Navbar";

import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialSection";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/landing/CTASection";
import ResearchFeedSection from "@/components/landing/ResearchFeedSection";
import CreatePostSection from "@/components/landing/CreatePostSection";
import NotificationPanel from "@/components/landing/NotificationPanel";
import ProfileHighlightSection from "@/components/landing/ProfileHighlightSection";
import CollaborationRoomsSection from "@/components/landing/CollaborationRoomsSection";
import UpcomingEventsSection from "@/components/landing/UpcomingEventsSection";
import AnalyticsSection from "@/components/landing/AnalyticsSection";
import AIAssistantSection from "@/components/landing/AIAssistantSection";
import LiveChatSection from "@/components/landing/LiveChatSection";
import SmartMeetingSection from "@/components/landing/SmartMeetingSection";
import ResearchPapersSection from "@/components/landing/ResearchPapersSection";
import SearchSection from "@/components/landing/SearchSection";
import ResearchDomainsSection from "@/components/landing/ResearchDomainsSection";



export default function Home() {
  return (
    <main>

      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <CreatePostSection />

      <ResearchFeedSection />

      <NotificationPanel />

      <ProfileHighlightSection />

      <CollaborationRoomsSection />

      <UpcomingEventsSection />

      <AnalyticsSection />

      <AIAssistantSection />

      <LiveChatSection />

      <SmartMeetingSection />

      <ResearchPapersSection />

      <SearchSection />

      <ResearchDomainsSection />

      <StatsSection />

      <TestimonialsSection />

      <CTASection />

      <Footer />

    </main>
  );
}