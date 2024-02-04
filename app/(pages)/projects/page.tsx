import { getProjects } from '@/sanity/sanity-utils';

export default async function Projects() {

  const projects = await getProjects();
  return (
    <main className="">
      {projects.map((project) => (
        <div className="flex items-center">{project.name}</div>
      ))}
    </main>
  );
}
