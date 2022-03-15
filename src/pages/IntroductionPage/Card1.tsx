import React from "react";
import ImageGeo from "../../assets/presentation/1.1.png";
export default function Card1({}) {
  return (
    <article className="flex h-full min-h-screen flex-col justify-around text-center ">
      <div>
        <div className="animate-fade-in-up text-3xl font-bold text-blue sm:text-6xl">
          전국 90개의 우시장
        </div>
        <div className="mt-3 animate-fade-in-up   sm:mt-7 sm:text-3xl ">
          흩어져 있는 정보들을 하나로
        </div>
        <div className="mx-auto mt-24 max-w-[76rem] animate-fade-in-up ">
          <img className="w-full" src={ImageGeo} alt="" />
        </div>
      </div>
    </article>
  );
}
