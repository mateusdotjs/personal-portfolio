/// <reference types="vite-plugin-svgr/client" />
import Tool from "./Tool";
import Node from "../../assets/node.svg?react";
import Tailwind from "../../assets/tailwind.svg?react";
import Typescript from "../../assets/typescript.svg?react";
import Next from "../../assets/next.svg?react";
import ReactJs from "../../assets/react.svg?react";
import Sass from "../../assets/sass.svg?react";
import Git from "../../assets/git.svg?react";
import { RefObject, useState } from "react";

const technologies = [
  {
    svg: <Next />,
    info: "Next.js is a React framework that enables server-side rendering, static site generation, and seamless client-side navigation for web applications.",
  },
  {
    svg: <ReactJs />,
    info: "React is a JavaScript library for building user interfaces.",
  },
  {
    svg: <Typescript />,
    info: "TypeScript is a superset of JavaScript that adds static types.",
  },
  {
    svg: <Tailwind />,
    info: "Tailwind CSS is a utility-first CSS framework.",
  },
  {
    svg: <Sass />,
    info: "Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
  },
  {
    svg: <Node />,
    info: "Node is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    svg: <Git />,
    info: "Git is a distributed version control system used for tracking changes in source code during software development.",
  },
];

const Tools = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  const [toolDescription, setToolDescription] = useState<string | null>(null);

  return (
    <section ref={refer} className=" py-16">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-center text-4xl font-medium text-black md:text-5xl lg:text-left">
            <span className="bg-gradient-to-br from-cyan-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Tools
            </span>{" "}
            I use
            <span className="text-purple-500">.</span>
          </h2>
          <span className="my-5 hidden text-xl text-neutral-600 lg:block">
            Some of the tools I use in my work. Among them are the most modern
            and popular frameworks. Hover over the elements to see their
            description.
          </span>
          {toolDescription && (
            <span className="hidden text-xl text-indigo-600 lg:block">
              {toolDescription}
            </span>
          )}
        </div>
        <div className="mt-12 grid grid-cols-2 justify-items-center gap-4 justify-self-center lg:grid-cols-3">
          {technologies.map((technology, index) => {
            return (
              <Tool
                key={index}
                onMouseEnter={() => setToolDescription(technology.info)}
                onMouseLeave={() => setToolDescription(null)}
              >
                {technology.svg}
              </Tool>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
