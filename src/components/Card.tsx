import Image from "next/image";
import ParagraphText from "./text/ParagraphText";
import TitleText from "./text/TitleText";
import Tag from "./Tag";
import LinkButton from "./LinkButton";
import { GithubInvertedIcon, OutwardLinkIcon } from "./Icon";

export default function Card() {
  return (
    <div className="flex-1 min-w-[300px] max-w-[550px] h-fit grid gap-[5px] bg-transparent backdrop-blur-xs rounded-[10px] pb-3">
      <div className="relative w-full h-[200px]">
        <Image
          src={"/ontimebusapp.png"}
          alt="Bus app"
          fill
          //   className="object-cover"
          loading="eager"
        />
      </div>
      <TitleText text="On time - bus app" />
      <div className="flex gap-[5px] flex-wrap justify-center">
        <Tag text="React" />
        <Tag text="NextJs" />
        <Tag text="NextJs" />
        <Tag text="NextJs" />
        <Tag text="NextJs" />
      </div>

      <ParagraphText
        text="orem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod tristique risus sit amet viverra. Vivamus vel sodales est. Proin consequat ipsum vel odio aliquet, eget convallis arcu ornare. Fusce et ante eget nisl sollicitudin mollis. Proin nec metus quis lorem ornare tempor. Cras nisl augue, molestie ullamcorper mattis in, rhoncus varius mi. Nulla id rutrum "
        className="text-base/5 sm:text-lg/6 px-1"
      />
      <div className="flex gap-2.5">
        <LinkButton
          href="https://github.com/MasterPieceSVK/OnTime"
          text="Code"
          icon={<GithubInvertedIcon />}
        />
        <LinkButton
          href="https://on-time-nine.vercel.app"
          text="Live"
          icon={<OutwardLinkIcon />}
        />
      </div>
    </div>
  );
}
