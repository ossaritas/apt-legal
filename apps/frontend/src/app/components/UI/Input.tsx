const Input = ({ label, placeholder, value, onChange, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-2 font-bold text-gray-700">{label}</label>}
      <input
        className="rounded-lg border border-gray-400 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
