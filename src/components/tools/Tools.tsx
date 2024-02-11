/// <reference types="vite-plugin-svgr/client" />
import Title from "../global/Title";
import Tool from "./Tool";
import Node from "../../assets/node.svg?react";
import Tailwind from "../../assets/tailwind.svg?react";
import Typescript from "../../assets/typescript.svg?react";
import ReactJs from "../../assets/react.svg?react";
import Sass from "../../assets/sass.svg?react";
import { RefObject, useState } from "react";

const technologies = [
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
];

const Tools = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  const [toolDescription, setToolDescription] = useState<string | null>(null);

  return (
    <section ref={refer} className="bg-neutral-900 pt-16 md:pt-44">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-5 lg:grid-cols-2">
        <div>
          <Title>Tools I use</Title>
          <span className="my-5 hidden text-xl text-neutral-500 lg:block">
            Some of the tools I use in my work. Among them are the most modern
            and used Frameworks. Hover over the elements to see their
            description.
          </span>
          {toolDescription && (
            <span className="hidden text-xl text-violet-200 lg:block">
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
