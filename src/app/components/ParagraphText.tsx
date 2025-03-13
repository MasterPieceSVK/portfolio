export default function ParagraphText({ text }: { text: string }) {
  return (
    <p className="text-secondary text-lg md:text-xl text-justify">{text}</p>
  );
}
