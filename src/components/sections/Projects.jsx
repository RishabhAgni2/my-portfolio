import SectionHeading from "../ui/SectionHeading";
import FeaturedProjectCard from "../ui/FeaturedProjectCard";
import { projects } from "../../data/projects";

const badgeLabels = {
  trusttrade: "Featured Project",
  chainverify: "Blockchain Project",
  fintrack: "Data & Analytics Project",
  creditsea: "Full-Stack Assignment Project",
  healthcarebackend: "Backend Project",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Full-stack systems with production-grade backend architecture — secure payments, job queues, real-time features, and fault-tolerant design."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              badgeLabel={badgeLabels[project.id] || "Project"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}