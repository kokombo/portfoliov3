"use client";

import { ScrollTop, TextGroup } from "@/components";
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
          <TextGroup
            heading="Project Title"
            subheading={currentProject.title}
          />
          <TextGroup
            heading="Description"
            subheading={currentProject.description}
          />

          <div>
            <TextGroup heading="Stack" subheading={currentProject.stack} />
          </div>

          <Shots currentProject={currentProject} />

          <ScrollTop />
        </main>
      )}
    </Fragment>
  );
};

export default ProjectPage;
