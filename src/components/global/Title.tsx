import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-center text-4xl text-white md:text-5xl lg:text-left">
      {children}
      <span className="text-violet-500">.</span>
    </h2>
  );
};

export default Title;
