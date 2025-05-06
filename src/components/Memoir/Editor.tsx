import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Editor({ value, onChange }: Props) {
  return (
    <textarea
      className="w-full h-64 p-4 rounded-lg bg-white focus:outline-none resize-none"
      placeholder="메모를 입력하세요..."
      value={value}
      onChange={onChange}
    />
  );
}
