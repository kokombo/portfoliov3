"use client";

import { PreviewLink, ScrollTop, TextGroup } from "@/components";
import { useParams } from "next/navigation";
import { projectData } from "@/constant/data";
import { Fragment } from "react";
import { Shots } from "@/containers";

const ProjectPage = () => {
  const { slug } = useParams();

  const currentProject = projectData.find(
    (project) => project.slug === slug.toString()
  );

  return (
    <Fragment>
      {currentProject && (
        <main className="section flex flex-col gap-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-end lg:gap-4">
            <article className="flex flex-col gap-10">
              <TextGroup
                heading="Project Title"
                subheading={currentProject.title}
              />
              <TextGroup
                heading="Description"
                subheading={currentProject.description}
              />

              <TextGroup heading="Stack" subheading={currentProject.stack} />
            </article>

            <div className="flex items-center gap-8">
              {currentProject.live && (
                <PreviewLink label="Preview" href={currentProject.live} />
              )}

              {currentProject.github && (
                <PreviewLink label="GitHub" href={currentProject.github} />
              )}
            </div>
          </div>

          <Shots currentProject={currentProject} />

          <ScrollTop />
        </main>
      )}
    </Fragment>
  );
};

export default ProjectPage;
