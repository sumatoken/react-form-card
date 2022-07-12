import React from "react";

export default function Heading({ value }) {
  return (
    <div class="header">
      <a href="#default" class="logo">
        {value}
      </a>
      <div class="header-right">
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}
