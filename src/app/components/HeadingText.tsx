import { hanalei_fill } from "../layout";

export default function HeadingText({ text }: { text: string }) {
  return (
    <h3
      className={`text-primary font-hanalei underline decoration-dotted decoration-accent  underline-offset-4 text-[28px] md:text-[32px] lg:text-[44px]  ${hanalei_fill.className}`}
    >
      {text}
    </h3>
  );
}
