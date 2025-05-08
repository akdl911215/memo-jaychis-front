// pages/index.tsx
import Layout from "@/components/Memoir/Layout";
import Header from "@/components/Memoir/Header";
import Footer from "@/components/Memoir/Footer";
import { useEffect, useState } from "react";
import TiptapEditor from "@/components/Memoir/TiptapEditor";
import api from "@/lib/api";
import { getOrSetDraftId } from '@/lib/draftSession';


export default function Home() {
  const [text, setText] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);
  
  useEffect(() => {
    if (text === "") return;
  
    const draftId = getOrSetDraftId();
    console.log('draftId : ', draftId);

    setSaving(true); 
    const handler = setTimeout(async () => {
      try {
        await api.post("/memo", { draftId, content: text }); // 2) Do your save
      } catch (e: any) {
        console.error("Error saving memo:", e.message);
      } finally {
        setSaving(false); // 3) Turn off spinner when done
      }
    }, 1500);

    return () => clearTimeout(handler);
  }, [text]);

  return (
    <Layout>
      <Header
        title="MEMOIR"
        subtitle="PREMIUM EDITION"
        slogan="기록하지 않으면, 그것은 단지 꿈일 뿐이다."
      />

      {/* White card */}
      <div className="mt-8 bg-white rounded-xl border-t-4 border-yellow-400 shadow-lg overflow-hidden h-[80vh] flex flex-col">
        <div className="flex-1 p-6 overflow-auto">
          <TiptapEditor initialContent={text} onUpdate={setText} />
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
