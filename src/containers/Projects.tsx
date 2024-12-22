import { ProjectCard, SectionHeading } from "@/components";
import { projectData as projects } from "@/constant/data";

const Projects = () => {
  return (
    <section className="section overflow-hidden">
      <SectionHeading>A Few Projects</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          return (
            <div key={index.toString()}>
              <ProjectCard
                title={project.title}
                meta={project.description}
                to={`/project/${project.slug}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
