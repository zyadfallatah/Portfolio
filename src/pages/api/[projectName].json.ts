import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params }) => {
  const name = params.projectName;
  const projects = await getCollection("projects");
  const currentProject = projects
    .filter((project) => project.data.linkName === name)
    .at(0);

  if (!currentProject)
    return new Response(JSON.stringify(`{status: "not found"}`), {
      status: 404,
    });

  return new Response(JSON.stringify(currentProject.data));
};

export function getStaticPaths() {
  return [
    { params: { projectName: "mulabbi" } },
    { params: { projectName: "devflow" } },
  ];
}
