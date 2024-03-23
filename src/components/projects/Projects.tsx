import { RefObject } from "react";
import Project from "./Project";
import Title from "../global/Title";

const projects = [
  {
    title: "Vialerta",
    text: "An app that provides the status of São Paulo's subway lines.",
    repoLink: "https://github.com/mateusdotjs/vialerta",
    demoLink: "https://vialerta.netlify.app/",
  },
  {
    title: "São Paulo Subway API",
    text: "An API that returns the status of São Paulo's subway lines via web scraping.",
    repoLink: "https://github.com/mateusdotjs/api-metro-sp",
    demoLink: "https://api-metro-sp.onrender.com/",
  },
  {
    title: "Fintech Dashboard",
    text: "A bento Dashboard project with TypeScript.",
    repoLink: "https://github.com/mateusdotjs/fintech-tsc",
    demoLink: "https://fintech-dashboard-tsc.netlify.app/",
  },
];

const Projects = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  return (
    <section
      ref={refer}
      className="flex flex-col items-center bg-neutral-950 px-4 pt-16 font-inter md:pt-44"
    >
      <Title>Things I crafted</Title>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center">
        <div className="mb-12 mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                text={project.text}
                repoLink={project.repoLink}
                demoLink={project.demoLink}
              />
            );
          })}
        </div>
        <a
          href="https://github.com/mateusdotjs?tab=repositories"
          target="_blank"
          className="text-lg text-violet-400 underline-offset-8 hover:underline"
        >
          Visit more projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
