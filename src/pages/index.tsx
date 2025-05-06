// pages/index.tsx
import Layout from "@/components/Memoir/Layout";
import Header from "@/components/Memoir/Header";
import Editor from "@/components/Memoir/Editor";
import EditorActions from "@/components/Memoir/EditorActions";
import Footer from "@/components/Memoir/Footer";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

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
          <Editor value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="px-6 pb-6 flex justify-end space-x-3">
          <EditorActions
            onCancel={() => setText("")}
            onSave={() => console.log(text)}
          />
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
