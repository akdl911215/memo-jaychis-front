// components/Memoir/EditorActions.tsx
export default function EditorActions({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <>
      <button
        onClick={onCancel}
        className="px-4 py-2 bg-white shadow rounded-lg hover:bg-gray-100"
      >
        취소
      </button>
      <button
        onClick={onSave}
        className="px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
      >
        저장
      </button>
    </>
  );
}
