import React from "react";

export default function Footer() {
  return (
    <div className="text-center mt-8 text-gray-400 flex items-center justify-center space-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 20l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 12l9-5-9-5-9 5 9 5z"
        />
      </svg>
      <span>Luxury Memoir</span>
    </div>
  );
}
