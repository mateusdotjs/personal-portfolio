import { ComponentProps } from "react";

const Tool = ({
  children,
  onMouseEnter,
  onMouseLeave,
}: ComponentProps<"div">) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex h-40 w-40 cursor-pointer
    items-center justify-center rounded-md
    border-[1px] border-neutral-700 bg-neutral-800 transition duration-200 hover:border-violet-400"
    >
      {children}
    </div>
  );
};

export default Tool;
