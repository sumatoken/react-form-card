import React from "react";

export default function Button({
  active,
  value,
  btnBgColor,
  textColor,
  handleClick,
  padding,
}) {
  return (
    <div>
      <input
        type="button"
        className="button"
        style={{
          backgroundColor: btnBgColor,
          color: textColor,
          padding: padding,
        }}
        value={value}
        disabled={!active ? true : false}
        id={!active ? "disabled" : ""}
        onClick={handleClick}
      />
    </div>
  );
}
