import SectionHeading from "../ui/SectionHeading";
import FeaturedProjectCard from "../ui/FeaturedProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  // Secondary projects (ChainVerify, FinTrack) will be rendered
  // below the featured card in Phase 6b.

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Full-stack systems with production-grade backend architecture — secure payments, job queues, real-time features, and fault-tolerant design."
        />

        {featuredProject && <FeaturedProjectCard project={featuredProject} />}
      </div>
    </section>
  );
}