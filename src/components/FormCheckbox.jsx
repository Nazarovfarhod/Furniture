import React from "react";

function FormCheckbox({ name, label, defaultValue, size }) {
  return (
    <div className="form-control gap-3 items-center">
      <label htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary h-6 mb-7 ${size}`}
      />
    </div>
  );
}

export default FormCheckbox;
