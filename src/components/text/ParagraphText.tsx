export default function ParagraphText({
  text,
  color = "text-secondary ",
}: {
  text: string;
  color?: string;
}) {
  return <p className={`text-lg md:text-xl text-justify  ${color}`}>{text}</p>;
}
