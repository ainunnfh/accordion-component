"use client";
import React, { useState } from "react";

interface IProps {
  color?: string;
  question: string;
  answer: string;
}

const QuestionLists = (props: IProps) => {
  const [openQuestion, setopenQuestion] = useState(false);
  return (
    <>
      <div className="">
        <div
          className={`p-4 rounded-sm flex flex-row ${
            props.color ? `bg-${props.color}` : ""
          }`}
        >
          <p>{props.question}</p>
          <button
            className="ml-4 font-semibold sm:text-xl md:text-2xl"
            onClick={() => setopenQuestion(!openQuestion)}
          >
            {openQuestion ? "x" : "+"}
          </button>
        </div>

        <div className={openQuestion ? "" : "hidden"}>
          <div className={`bg-${props.color} p-4`}>{props.answer}</div>
        </div>
      </div>
    </>
  );
};

export default QuestionLists;
