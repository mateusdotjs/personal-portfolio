import { useEffect, useState } from "react";
import Menu from "../../assets/menu.svg?react";

type functionProps = (elementId: string) => void;

const Header = ({ scrollToDiv }: { scrollToDiv: functionProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed z-10 w-full items-center border-b-[1px] border-neutral-200 bg-white p-6 font-inter">
      <div className="mx-auto flex w-full max-w-screen-2xl justify-end md:justify-center">
        <button
          aria-label="menu"
          className="rounded-md border-[1px] border-neutral-300 bg-neutral-50 p-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
        <nav
          className={`right-5 top-20 z-50 rounded-md bg-neutral-100  px-7 py-5 md:static md:block md:bg-transparent md:p-0
        ${isOpen ? "absolute border-[1px] border-neutral-300" : "hidden"}`}
        >
          <ul className="flex flex-col gap-5 text-neutral-700 md:flex-row md:gap-10">
            <li
              className="cursor-pointer hover:text-indigo-500"
              onClick={() => scrollToDiv("hero")}
            >
              <a>Home</a>
            </li>
            <li
              className="cursor-pointer hover:text-indigo-500"
              onClick={() => scrollToDiv("projects")}
            >
              <a>Projects</a>
            </li>
            <li
              className="cursor-pointer hover:text-indigo-500"
              onClick={() => scrollToDiv("tools")}
            >
              <a>Tools</a>
            </li>
            <li
              className="cursor-pointer hover:text-indigo-500"
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
