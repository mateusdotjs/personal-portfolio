import { RefObject, useRef } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Tools from "./Tools";

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);

  type elementReturn = RefObject<HTMLDivElement> | null;

  const getElementByRef = (elementId: string): elementReturn => {
    switch (elementId) {
      case "hero":
        return heroRef;

      case "projects":
        return projectsRef;

      case "tools":
        return toolsRef;

      case "contact":
        return contactRef;

      default:
        console.log("error");
        return null;
    }
  };

  const scrollToDiv = (elementId: string) => {
    const elementRef = getElementByRef(elementId);

    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <Header scrollToDiv={scrollToDiv} />
      <Hero refer={heroRef} />
      <Projects refer={projectsRef} />
      <Tools refer={toolsRef} />
      <Contact refer={contactRef} />
      <Footer />
    </>
  );
}

export default App;
