import React from "react";

export default function Heading({ value }) {
  return (
    <div className="header">
      <a href="#default" className="logo">
        {value}
      </a>
      <div className="header-right">
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}
