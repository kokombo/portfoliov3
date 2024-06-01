import { ProjectCard, SectionHeading } from "@/components";
import { projectData as projects } from "@/constant/data";

const Projects = () => {
  return (
    <section className="px-4 py-10 md:px-6 md:py-12 lg:px-24 lg:py-14">
      <SectionHeading heading="A Few Side Projects" />

      <div className="grid grid-cols-2 gap-6">
        {projects.slice(0, 4).map((project) => {
          return (
            <ProjectCard
              key={project.id.toString()}
              title={project.title}
              meta={project.description}
              to={project.slug}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
