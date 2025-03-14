export default function PrimaryText({ text }: { text: string }) {
  return <p className="text-primary text-lg md:text-xl text-justify">{text}</p>;
}
