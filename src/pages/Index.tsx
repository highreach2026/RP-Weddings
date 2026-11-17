import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/page-shell";
import { FEED_POSTS, HIGHLIGHTS } from "@/data/weddings";
import { BudgetEstimatorCard } from "./home/_components/budget-estimator-card";
import { DifferenceCard } from "./home/_components/difference-card";
import { FaqSection } from "./home/_components/faq-section";
import { HeroHookCard } from "./home/_components/hero-hook-card";
import { HighlightRow } from "./home/_components/highlight-row";
import { JourneyCarousel } from "./home/_components/journey-carousel";
import { PackagesCard } from "./home/_components/packages-card";
import { PostCard } from "./home/_components/post-card";
import { SocialProofHookCard } from "./home/_components/social-proof-hook-card";
import { StoryModal } from "./home/_components/story-modal";

export default function Index() {
  const [storyIndex, setStoryIndex] = useState<number | null>(null);
  const [visitedIds, setVisitedIds] = useState<Set<string>>(() => new Set());

  const handlePrevStory = useCallback(() => {
    setStoryIndex((prev) => (prev !== null ? Math.max(0, prev - 1) : null));
  }, []);

  const handleNextStory = useCallback(() => {
    setStoryIndex((prev) => {
      if (prev === null) return null;
      let nextIdx = prev + 1;
      while (nextIdx < HIGHLIGHTS.length && HIGHLIGHTS[nextIdx].isBudgetTrigger) {
        nextIdx += 1;
      }
      if (nextIdx >= HIGHLIGHTS.length) return null;
      setVisitedIds((v) => new Set(v).add(HIGHLIGHTS[nextIdx].id));
      return nextIdx;
    });
  }, []);

  return (
    <PageShell>
      {({ openBudget, openAppointment }) => (
        <>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <HighlightRow
              highlights={HIGHLIGHTS}
              visitedIds={visitedIds}
              onOpen={(idx) => {
                const target = HIGHLIGHTS[idx];
                setVisitedIds((prev) => new Set(prev).add(target.id));
                if (target.isBudgetTrigger) {
                  openBudget();
                  return;
                }
                setStoryIndex(idx);
              }}
            />
          </motion.div>

          <HeroHookCard onBookClick={() => openAppointment("Private Wedding Consultation")} />

          <SocialProofHookCard onEnquire={() => openAppointment("Couple Stories Enquiry")} />

          <PostCard
            post={FEED_POSTS[0]}
            onEnquire={(heading) => openAppointment(heading)}
          />

          <JourneyCarousel onEnquire={() => openAppointment("4-Stage Planning Journey")} />

          <PostCard
            post={FEED_POSTS[1]}
            onEnquire={(heading) => openAppointment(heading)}
          />

          <DifferenceCard
            onBookAppointment={() => openAppointment("The RP Weddings Difference")}
          />

          <PostCard
            post={FEED_POSTS[2]}
            onEnquire={(heading) => openAppointment(heading)}
          />

          <BudgetEstimatorCard
            onOpenEstimator={openBudget}
            onEnquire={() => openAppointment("Wedding Budget Enquiry")}
          />

          <PackagesCard onEnquire={(label) => openAppointment(label)} />

          <PostCard
            post={FEED_POSTS[3]}
            onEnquire={(heading) => openAppointment(heading)}
          />

          <FaqSection />

          <StoryModal
            highlights={HIGHLIGHTS}
            activeIndex={storyIndex}
            onClose={() => setStoryIndex(null)}
            onPrevHighlight={handlePrevStory}
            onNextHighlight={handleNextStory}
          />
        </>
      )}
    </PageShell>
  );
}
