import { RefObject } from "react";
import ButtonFilled from "../global/ButtonFilled";
import ButtonOutlined from "../global/ButtonOutlined";

const Hero = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  return (
    <section
      ref={refer}
      className="flex flex-col items-center bg-white px-3 py-44 font-inter "
    >
      <span className=" color-black mb-4 w-full text-center text-lg text-neutral-700 md:text-xl">
        Hi, i'm Mateus
      </span>
      <h1 className="mb-4 text-center text-5xl font-semibold md:text-7xl">
        <span className="bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Full Stack
        </span>{" "}
        Developer.
      </h1>
      <span className="mb-8 text-center text-lg text-neutral-600 md:max-w-[50ch] md:text-xl">
        I seek to apply my logical and problem-solving skills to create
        impactful and innovative experiences using mainly the{" "}
        <span className="font-bold text-black">React</span>,{" "}
        <span className="font-bold text-black">TypeScript</span> and{" "}
        <span className="font-bold text-black">Node</span> ecosystem.
      </span>
      <div className="flex gap-5">
        <a href="https://github.com/mateusdotjs" target="_blank">
          <ButtonFilled>GitHub</ButtonFilled>
        </a>
        <a href="https://www.linkedin.com/in/mateus-soares27/" target="_blank">
          <ButtonOutlined>LinkedIn</ButtonOutlined>
        </a>
      </div>
    </section>
  );
};

export default Hero;
