import React, { ChangeEvent } from 'react';

interface SelectableInputProps {
  label?: string;
  options: { value: string | number; label: string }[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const SelectableInput: React.FC<SelectableInputProps> = ({
  label,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-2 font-bold text-gray-700">{label}</label>}
      <select
        className="rounded-lg border border-gray-400 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectableInput;
