import { RefObject } from "react";
import ButtonFilled from "../global/ButtonFilled";
import ButtonOutlined from "../global/ButtonOutlined";

const Hero = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  return (
    <section
      ref={refer}
      className="bg-linesHero flex flex-col items-center bg-neutral-950 px-3 pt-36 font-inter md:pt-44"
    >
      <span className=" color-black mb-4 text-lg text-neutral-400 md:text-xl">
        Hi, i'm Mateus
      </span>
      <h1 className="mb-4 text-center text-5xl font-semibold text-neutral-200 md:text-7xl">
        <span className="bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">
          Front End Developer.
        </span>
      </h1>
      <span className="mb-8 text-center text-lg text-neutral-400 md:max-w-[50ch] md:text-xl">
        I seek to apply my logical and problem-solving skills to create simple,
        impactful and innovative experiences using mainly React, TypeScript and
        Node ecosystem.
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
