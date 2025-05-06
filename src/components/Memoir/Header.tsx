// components/Memoir/Header.tsx
export default function Header({
  title,
  subtitle,
  slogan,
}: {
  title: string;
  subtitle: string;
  slogan: string;
}) {
  return (
    <div className="text-center">
      {/* 1) Main title */}
      {/* <h1 className="text-5xl font-bold text-yellow-400">{title}</h1> */}

      {/* 2) Subtitle */}
      <p className="text-xs uppercase text-gray-300 tracking-wide mt-1">
        {subtitle}
      </p>

      {/* 3) Divider + slogan */}
      <hr className="border-t border-gray-600 my-4 mx-auto w-2/3" />
      <p className="text-gray-200 italic">{slogan}</p>
    </div>
  );
}
