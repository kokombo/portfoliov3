import { ProjectCard, SectionHeading, SlideItem } from "@/components";
import { projectData as projects } from "@/constant/data";

const Projects = () => {
  return (
    <section className="section overflow-hidden">
      <SlideItem position="left">
        <SectionHeading heading="A Few Side Projects" />
      </SlideItem>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          return (
            <SlideItem
              key={project.id}
              position="bottom"
              className={`delay-${(index + 1) * 100}`}
            >
              <ProjectCard
                title={project.title}
                meta={project.description}
                to={`/project/${project.slug}`}
              />
            </SlideItem>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
