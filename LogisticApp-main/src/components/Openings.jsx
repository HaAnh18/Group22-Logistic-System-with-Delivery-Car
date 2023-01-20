import React from "react";

function Openings({ title, body }) {
  return (
    <div className="text-center mb-5">
      <h1 className=" p-2 font-semibold text-2xl md:text-3xl lg:text-5xl">
        {title}
      </h1>
      <p className="text-[#6B707F] md:text-2xl lg:text-4xl font-medium">
        {body}
      </p>
    </div>
  );
}

export default Openings;
