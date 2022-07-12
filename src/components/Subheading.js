import React from "react";

export default function Subheading({ value }) {
  return (
    <div className="subheading">
      <h4>
        <b>{value}</b>
      </h4>
    </div>
  );
}
