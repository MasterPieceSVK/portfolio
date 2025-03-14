export default function TitleText({ text }: { text: string }) {
  return (
    <h4
      className={`text-primary font-hanalei text-[24px] md:text-[28px] lg:text-[36px] `}
    >
      {text}
    </h4>
  );
}
