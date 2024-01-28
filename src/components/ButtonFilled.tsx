import { ComponentProps } from "react";


const ButtonFilled = ({ children, onClick }: ComponentProps<'button'>) => {
  return (
    <button
      className={`rounded-md bg-violet-600 px-6 py-3 text-base text-white transition 
      duration-300 
      hover:bg-violet-700`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonFilled;
