"use client";
import React, { useState } from "react";

const QuestionLists = () => {
  const [openQuestion, setopenQuestion] = useState(false);
  return (
    <div className="">
      <div className="bg-red-300 p-4 rounded-sm flex flex-row">
        <p>
          Can I use FrontendPro to prepare for a Frontend Developer interview?
        </p>
        <button
          className="ml-4 font-semibold sm:text-xl md:text-2xl"
          onClick={() => setopenQuestion(!openQuestion)}
        >
          {openQuestion ? 'x' : '+'}
        </button>
      </div>

      <div>{openQuestion && <div className="bg-red-300 p-4">Sure</div>}</div>
    </div>
  );
};

export default QuestionLists;
