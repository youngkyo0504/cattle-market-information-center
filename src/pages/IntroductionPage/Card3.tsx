import React from "react";
import Image1 from "../../assets/presentation/2.1.png";
import Image2 from "../../assets/presentation/2.2.png";
import Image3 from "../../assets/presentation/2.3.png";
export default function Card3() {
  return (
    <article className="mx-auto flex h-full max-w-9xl animate-fade-in-up flex-col justify-evenly text-center font-bold">
      <div className="mb-10 sm:mb-0">
        <p className=" text-2xs font-bold capitalize text-blue sm:text-base">
          STORY 2.
        </p>
        <p className="mt-2 font-bold sm:mt-4 sm:text-2xl">기술소개</p>
      </div>
      {/* 기술소개들 */}
      <div className=" flex flex-col justify-between sm:flex-row  ">
        <div className="mb-8 flex animate-fade-in-up-1 flex-col sm:mb-0 ">
          <div className="flex flex-col items-center justify-between sm:h-80">
            <div>
              <p className="text-2xs font-bold capitalize  text-blue sm:text-base">
                Service 1.
              </p>
              <p className="mt-1 text-xs font-bold sm:mt-2 sm:text-2xl">
                AI 한우 능력 분석
              </p>
            </div>
            <div>
              <img
                className="mt-4 max-w-[6rem] sm:max-w-[16rem]"
                src={Image1}
                alt=""
              />
            </div>
          </div>

          <div className="mx-auto mt-4 w-56 text-[0.7rem] tracking-tighter sm:mt-16 sm:text-sm">
            <p>
              KPN, 혈통, 송아지 생산자, 출하성적 등 23만건 이상의 축산물 이력제
              빅데이터를 앤틀러의 AI 분석을 통해 보다 정확한 <br /> 송아지
              구매기준을 제시합니다.
            </p>
          </div>
        </div>
        <div className="mb-8 flex animate-fade-in-up-2 flex-col justify-between sm:mb-0">
          <div className="flex  flex-col items-center justify-between sm:h-80">
            <div>
              <p className="text-sm:text-base text-2xs font-bold capitalize text-blue sm:text-base">
                Service 2.
              </p>
              <p className="mt-1 text-xs font-bold sm:mt-2 sm:text-2xl">
                유사도 분석
              </p>
            </div>
            <div>
              <img
                className="mt-4 max-w-[6rem] sm:max-w-[14rem]"
                src={Image2}
                alt=""
              />
            </div>
          </div>

          <div className="mx-auto mt-4 w-56 text-[0.7rem] tracking-tighter sm:mt-16 sm:text-sm">
            <p>
              거래된 소와 비슷한 잠재능력을 가진 다른 송아지가 최근 얼마에
              거래되었는지 가격 비교 정보를 통해 보다 합리적인 <br />
              송아지 구매기준을 제시합니다.
            </p>
          </div>
        </div>
        <div className="flex animate-fade-in-up-3 flex-col ">
          <div className="flex  flex-col items-center justify-between sm:h-80">
            <div>
              <p className="font-boldsm:text-base text-2xs capitalize text-blue sm:text-base">
                Service 3.
              </p>
              <p className="mt-1 text-xs font-bold sm:mt-2 sm:text-2xl">
                정보 제공
              </p>
            </div>
            <div>
              <img
                className="mt-4   max-w-[6rem] sm:max-w-[12rem]"
                src={Image3}
                alt=""
              />
            </div>
          </div>

          <div className="mx-auto mt-4 w-56 text-[0.7rem] tracking-tighter sm:mt-16 sm:text-sm">
            <p>
              많은 시험 범위를 보기 편하게 요약한 핵심 노트처럼, 한우사육과
              시세에 영향을 줄 수 있는 이슈, 질병, 지원사업 등 정보를 <br />
              편하고 쉽게 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
