// eslint-disable-next-line react/prop-types
export default function ButtonCancel({ type, handleCancel, content }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className="bg-slate-700 text-white px-4 rounded-md"
      onClick={handleCancel}
    >
      {content}
    </button>
  );
}
