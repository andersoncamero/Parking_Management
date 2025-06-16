import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
  return (
    <div className="mb-4">
      {label && <label className="label-primary">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-primary ${className}`}
      />
    </div>
  );
};
