import ParagraphText from "@/components/text/ParagraphText";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-lvh w-full flex flex-col justify-center items-center">
      <h1 className="font-jost decoration-0 text-8xl">404</h1>
      <ParagraphText text="Page not found" className="text-6xl" />
      <Link
        href="/"
        className="text-2xl text-primary hover:underline hover:text-accent"
      >
        Back to home
      </Link>
    </div>
  );
}
