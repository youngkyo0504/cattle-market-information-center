import React from "react";
import { Link } from "react-router-dom";
export default function Card4({}) {
  return (
    <article className=" flex h-full min-h-screen flex-1 flex-col items-center justify-end text-center font-bold">
      <div className="mb-4 max-w-[50rem] animate-fade-in-up text-xl font-bold leading-tight tracking-[-1.13px;] text-white sm:mb-9  sm:text-4xl  sm:leading-normal">
        우리 함께 보석같은
        <br /> 송아지를 찾으러 가볼까요?
      </div>
      <div className="mb-[15%] animate-fade-in-up cursor-pointer rounded-4xl bg-white px-3.5 py-2 text-xs font-bold leading-[1.63] tracking-[-0.3px] transition ease-in hover:bg-white/90 sm:mb-[10%] sm:px-[3.25rem] sm:py-4 sm:text-2xl  sm:tracking-[-0.59px]">
        <Link to="/cattle">출품우 정보 보러가기</Link>
      </div>
    </article>
  );
}
