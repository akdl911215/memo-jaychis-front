// pages/index.tsx
import Layout from "@/components/Memoir/Layout";
import Header from "@/components/Memoir/Header";
import Footer from "@/components/Memoir/Footer";
import { useEffect, useState, useMemo } from "react";
import TiptapEditor from "@/components/Memoir/TiptapEditor";
import api from "@/lib/api";
import { getOrSetDraftId } from "@/lib/draftSession";
import { useDebounce } from "@/hooks/useDebounce";

export default function Home() {
  const draftId = useMemo(() => getOrSetDraftId(), []);
  const [text, setText] = useState<string>("");
  const [initialText, setInitialText] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    if (!draftId) return;
    api
      .get<string>(`/memos/${draftId}`)
      .then((res) => {
        setText(res.data);
        setInitialText(res.data);
      })
      .catch((err) => console.error("Load error:", err));
  }, [draftId]);

  const debouncedText = useDebounce(text, 1500);

  useEffect(() => {
    if (debouncedText === "" || debouncedText === initialText) return;

    setSaving(true);
    api
      .post("/memos", { draftId, content: debouncedText })
      .catch((err) => console.error("Save error:", err))
      .finally(() => setSaving(false));
  }, [debouncedText, draftId, initialText]);

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
