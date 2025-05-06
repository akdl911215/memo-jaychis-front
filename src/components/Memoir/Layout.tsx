// components/Memoir/Layout.tsx

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Parent container with fixed size */}
      <div className="h-[90vh] w-[90vw] max-w-3xl">
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-30 filter blur-lg rounded-2xl"></div>

        {/* Glass card: now fills its parent */}
        <div className="relative w-full h-full bg-gray-900 bg-opacity-60 rounded-2xl shadow-2xl p-8 box-border">
          {children}
        </div>
      </div>
    </div>
  );
}
