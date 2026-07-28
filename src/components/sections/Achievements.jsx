import SectionHeading from "../ui/SectionHeading";
import AchievementCard from "../ui/AchievementCard";
import { achievements } from "../../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Competitive programming & recognitions"
          description="Consistent problem-solving practice and results under pressure."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, i) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}