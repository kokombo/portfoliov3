import { PreviewLink, ScrollTop, TextGroup } from "@/components";
import { projectData } from "@/constant/data";
import { Shots } from "@/containers";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectData.map((project) => project.slug);
}

const Page = async ({ params }: Props) => {
  const currentProject = projectData.find(
    (project) => project.slug === params.slug.toString()
  );

  if (!currentProject) notFound();

  return (
    <div className="section flex flex-col gap-10">
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
    </div>
  );
};

export default Page;
