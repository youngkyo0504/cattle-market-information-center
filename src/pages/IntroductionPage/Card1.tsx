import React from "react";
export default function Card1({}) {
  return (
    <article className="flex h-full flex-col justify-around text-center font-bold">
      <div>
        <div className="animate-fade-in-up text-3xl font-bold text-blue sm:text-6xl">
          전국 90개의 우시장
        </div>
        <div className="mt-3 animate-fade-in-up font-bold sm:mt-7 sm:text-3xl ">
          흩어져 있는 정보들을 하나로
        </div>
        <div className="mx-auto mt-24 max-w-[76rem] animate-fade-in-up ">
          <img src="/cattle-market-information-center/1.1.png" alt="" />
          {/* <img className="w-full" src={ImageGeo} alt="" /> */}
        </div>
      </div>
    </article>
  );
}
