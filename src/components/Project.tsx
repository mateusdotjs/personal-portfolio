import ButtonFilled from "./ButtonFilled";
import ButtonOutlined from "./ButtonOutlined";

type ProjectProps = {
  title: string;
  text: string;
  repoLink: string;
  demoLink: string;
};

const Project = ({ title, text, repoLink, demoLink }: ProjectProps) => {
  return (
    <div
      className="flex w-full flex-col rounded-md border-[1px] border-neutral-700 bg-neutral-800 p-7 transition 
    duration-200 hover:border-violet-400 md:w-96"
    >
      <span className="mb-2 text-xl text-white">{title}</span>
      <span className="mb-8 flex-1 text-lg text-neutral-500">{text}</span>
      <div className="flex gap-3">
        <a href={repoLink} target="_blank">
          <ButtonOutlined>Repo</ButtonOutlined>
        </a>
        <a href={demoLink} target="_blank">
          <ButtonFilled>Demo</ButtonFilled>
        </a>
      </div>
    </div>
  );
};

export default Project;
