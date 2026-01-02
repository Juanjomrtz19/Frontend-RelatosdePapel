const TextField = ({ label, value, onChange, placeholder = "" }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
};

export default TextField;
