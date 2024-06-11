import { projects } from "@/utils/projects";
import Link from "next/link";

export default function MyProjects() {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-copper">
            Projects
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-copper p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-copper">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper mt-4 inline-block hover:underline"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
