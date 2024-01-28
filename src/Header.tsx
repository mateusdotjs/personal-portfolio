import { useState } from "react";
import Menu from "./assets/menu.svg?react";

type functionProps = (elementId: string) => void;

const Header = ({ scrollToDiv }: { scrollToDiv: functionProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed z-10 w-full items-center border-b-[1px] border-neutral-800 
    bg-neutral-900 p-6 font-inter"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl justify-end md:justify-center">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
        <nav
          className={`right-5 top-20 z-50 rounded-md bg-neutral-950 px-7 py-5 md:static md:block md:bg-transparent md:p-0
        ${isOpen ? "absolute" : "hidden"}`}
        >
          <ul className="flex flex-col gap-5 text-neutral-200 md:flex-row md:gap-10">
            <li
              className="hover:text-violet-400"
              onClick={() => scrollToDiv("hero")}
            >
              <a>Home</a>
            </li>
            <li
              className="hover:text-violet-400"
              onClick={() => scrollToDiv("projects")}
            >
              <a>Projects</a>
            </li>
            <li
              className="hover:text-violet-400"
              onClick={() => scrollToDiv("tools")}
            >
              <a>Tools</a>
            </li>
            <li
              className="hover:text-violet-400"
              onClick={() => scrollToDiv("contact")}
            >
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
