// components/Memoir/TiptapEditor.tsx
"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// ← add these imports:
import Underline from "@tiptap/extension-underline";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";

export default function TiptapEditor({
  initialContent = "",
  onUpdate,
}: {
  initialContent?: string;
  onUpdate: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      CodeBlock,
      Blockquote,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        spellcheck: "false", // no red underlines
        class: "outline-none w-full h-full p-0 m-0",
      },
    },
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="flex flex-col h-full">
      {/* ─── Toolbar ─── */}
      <div className="flex gap-2 mb-4">
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
        >
          B
        </button>
        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
        >
          I
        </button>
        {/* Underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("underline") ? "bg-gray-200" : ""
          }`}
        >
          U
        </button>
        {/* Bullet list */}
        {/* <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("bulletList") ? "bg-gray-200" : ""
          }`}
        >
          • List
        </button> */}
        {/* Ordered list */}
        {/* <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("orderedList") ? "bg-gray-200" : ""
          }`}
        >
          1. List
        </button> */}
        {/* Blockquote */}
        {/* <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("blockquote") ? "bg-gray-200" : ""
          }`}
        >
          “ ”
        </button> */}
        {/* Code block */}
        {/* <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive("codeBlock") ? "bg-gray-200" : ""
          }`}
        >
          {"</>"}
        </button> */}
        {/* Link */}
        {/* <button
          onClick={() => {
            const attrs = editor.getAttributes("link") || {};
            const previousUrl =
              typeof attrs.href === "string" ? attrs.href : "";
            const url = window.prompt("Enter URL", previousUrl);
            if (url === null) return;
            if (url === "") {
              editor.chain().focus().unsetLink().run();
            } else {
              editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: url })
                .run();
            }
          }}
          disabled={
            !editor
              .can()
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: "" })
              .run()
          }
          className="px-2 py-1 rounded"
        >
          🔗
        </button> */}
      </div>

      {/* ─── Editable Area ─── */}
      <div className="flex-1 overflow-auto prose prose-sm">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
