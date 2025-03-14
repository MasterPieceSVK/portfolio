export default function Tag({ text }: { text: string }) {
  return (
    <span className="text-xs font-medium bg-gray-custom w-fit grid place-items-center px-3.5 py-1 rounded-[50px] text-primary">
      {text}
    </span>
  );
}
