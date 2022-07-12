import React from "react";

export default function Checkbox({
  active,
  value = "",
  checked,
  handleCheckBox,
}) {
  return (
    <>
      <label className="container">
        {value}
        <input
          type="checkbox"
          disabled={!active ? true : false}
          checked={checked}
          onChange={handleCheckBox}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
}
