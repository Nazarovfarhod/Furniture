export { default as SectionTitle } from "./SectionTitle";
import React from "react";
function SectionTitle({ text }) {
  return (
    <div className="border-b border-base-300 pb-5 py-20">
      <h1 className="text-3xl font-medium tracking-wider capitalize">{text}</h1>

    </div>
  );
}

export default SectionTitle;
