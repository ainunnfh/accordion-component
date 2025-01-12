"use client";
import React, { useState } from "react";

interface IProps {
  color: string;
  question: string;
  answer: string;
}

const QuestionLists = (props: IProps) => {
  const [openQuestion, setopenQuestion] = useState(false);
  return (
    <>
      <div className="relative flex flex-col">
        <div className={`p-4 rounded-sm ${`bg-${props.color}-400`}`}>
          <p>{props.question}</p>
          <button
            className="absolute right-0 top-0 m-4 font-semibold sm:text-xl md:text-2xl"
            onClick={() => setopenQuestion(!openQuestion)}
          >
            {openQuestion ? "x" : "+"}
          </button>
        </div>

        <div
          className={`bg-${props.color}-400 ${openQuestion ? "" : "hidden"}`}
        >
          <div className="p-4">{props.answer}</div>
        </div>
      </div>
    </>
  );
};

export default QuestionLists;
