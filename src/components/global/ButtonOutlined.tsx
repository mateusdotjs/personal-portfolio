import { ComponentProps } from "react";

const ButtonOutlined = ({ children, onClick }: ComponentProps<"button">) => {
  return (
    <button
      className="rounded-md border-[1px] border-white bg-transparent px-6 py-3 text-base 
      text-white transition duration-300 
      hover:border-violet-500 hover:text-violet-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonOutlined;
