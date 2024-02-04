import { createClient, groq } from "next-sanity";

import { Project } from '@/types/Projects';

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: '7s0xaoa1',
        dataset: 'portfolio',
        apiVersion: "2024-02-04",
        useCdn: false,
    });

    return client.fetch(
        groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    url,
    content
   } `
    )

}
