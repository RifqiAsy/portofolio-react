import achievements from "../data/achievements";
import AchievementCard from "../components/common/AchievementCard";

export default function Achievements() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Achievements
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <AchievementCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
