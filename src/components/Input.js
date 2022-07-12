import React, { useState } from "react";
import Validate from "../functions/Validate";

export default function Input({
  type,
  label,
  placeholder = "",
  id,
  data,
  name,
  handleInput,
  active,
}) {
  const [error, setError] = useState(false);
  return (
    <div className="form__group field">
      <input
        style={{ borderBottom: error ? "2px solid red" : true }}
        type={type}
        value={data}
        className="form__field"
        placeholder={placeholder}
        name={name}
        id={name}
        disabled={!active ? true : false}
        onChange={handleInput}
        onBlur={() => {
          Validate(data, id) ? setError(false) : setError(true);
        }}
        required
      />
      {error ? (
        <div className="error-message">{label} must be in the correct form</div>
      ) : (
        <span></span>
      )}
      <label htmlFor={label} className="form__label">
        {label}
      </label>
    </div>
  );
}
