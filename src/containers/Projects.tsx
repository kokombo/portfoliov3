import { ProjectCard, SectionHeading } from "@/components";
import { projectData as projects } from "@/constant/data";

const Projects = () => {
  return (
    <section className="section">
      <SectionHeading heading="A Few Side Projects" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id.toString()}
              title={project.title}
              meta={project.description}
              to={`/project/${project.slug}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
