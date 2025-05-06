// pages/index.tsx
import Layout from "@/components/Memoir/Layout";
import Header from "@/components/Memoir/Header";
import Editor from "@/components/Memoir/Editor";
import EditorActions from "@/components/Memoir/EditorActions";
import Footer from "@/components/Memoir/Footer";
import { useEffect, useState } from "react";
import TiptapEditor from "@/components/Memoir/TiptapEditor";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    if (text === "") return;

    setSaving(true);
    const handler = setTimeout(() => {
      saveMemo(text);
    }, 1500);

    return () => clearTimeout(handler);
  }, [text]);

  const saveMemo = (value: string) => {
    console.log("Auto-saving: ", value);

    setSaving(false);
  };

  return (
    <Layout>
      <Header
        title="MEMOIR"
        subtitle="PREMIUM EDITION"
        slogan="기록하지 않으면, 그것은 단지 꿈일 뿐이다."
      />

      {/* White card */}
      <div className="mt-8 bg-white rounded-xl border-t-4 border-yellow-400 shadow-lg overflow-hidden">
        <div className="h-80 p-6">
          <TiptapEditor
            initialContent={text}
            onUpdate={(html) => {
              setText(html);

              console.log("Auto-saved HTML:", html);
            }}
          />
        </div>
        <div className="px-6 pb-6">
          <span className="text-sm text-gray-500">
            {saving ? "자동 저장 중…" : "저장 완료"}
          </span>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
