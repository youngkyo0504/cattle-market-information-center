import React from "react";
export default function Card2({}) {
  return (
    <article className="flex h-full flex-col justify-evenly text-center font-bold">
      <div className="animate-fade-in-up ">
        <p className="text-2xs font-bold capitalize text-blue sm:text-base">
          STORY 1.
        </p>
        <p className="mt-2 font-bold sm:mt-4 sm:text-2xl">우시장 정보센터란?</p>
      </div>
      <div className=" animate-fade-in-up text-3xl font-bold leading-[1.32] tracking-[-1.61px] text-black sm:text-6xl sm:leading-[1.26] ">
        <p>좋은 송아지를</p>
        <p>
          고르는 기준,
          {/* <span className="text-black">를</span> */}
        </p>
        {/* <p className="text-black">제공하는</p> */}
        <p className="text-blue">우시장 정보센터</p>
      </div>
      <div className="animate-fade-in-up-2 px-10 text-xs leading-[1.54] line-clamp-6 sm:text-2xl  sm:leading-[1.37]">
        <p>좋은 송아지, 어떻게 알아보셨나요?</p>
        <p>수십년간 축적된 경험과 눈썰미가 없더라도 괜찮습니다.</p>
        <p>2,300,000 건 이상 축적된 혈통, 이력 및 출하와 앤틀러의</p>
        <p>
          차별화된 빅데이터를 분석을 통해 숨어있는 보석같은 송아지를 찾아보세요!
        </p>
        <p>우시장정보센터가 힘껏 도와드리겠습니다.</p>
      </div>
    </article>
  );
}
