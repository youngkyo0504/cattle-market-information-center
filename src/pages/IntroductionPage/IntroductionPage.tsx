import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ImageGeo from "../../assets/presentation/1.1.png";
import Image1 from "../../assets/presentation/2.1.png";
import Image2 from "../../assets/presentation/2.2.png";
import Image3 from "../../assets/presentation/2.3.png";
import SwiperCore, { Pagination, Mousewheel, Keyboard } from "swiper";
import FadeInSection from "../../components/FadeInSection/FadeInsection";
import { Link } from "react-router-dom";
import { MousewheelOptions } from "swiper/types";

function IntroductionPage() {
  const s = useSwiper();
  const ref = useRef<SwiperCore>();
  const scrollHeight = document.documentElement.clientHeight;

  console.log(document.documentElement.clientWidth);
  console.log(scrollHeight);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
    window.onkeydown = (e) => {};
    window.onwheel = (e) => {
      // console.log(e.deltaY, window.scrollY);
      if (window.scrollY === 0 && e.deltaY < 0) {
        setTimeout(() => {
          console.log("hey");
          if (ref.current) {
            const mousewheelOption = ref.current.params
              .mousewheel as MousewheelOptions;
            mousewheelOption.releaseOnEdges = false;
            ref.current.mousewheel.enable();
            ref.current.enable();
          }
        }, 300);
      }
    };
    return () => {
      console.log("auto");
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <Swiper
      onInit={(swiper) => {
        ref.current = swiper;
      }}
      preloadImages={true}
      height={scrollHeight}
      initialSlide={0}
      modules={[Keyboard, Mousewheel, Pagination]}
      spaceBetween={0}
      autoHeight={true}
      pagination={{ clickable: true }}
      touchReleaseOnEdges={false}
      // updateOnWindowResize={true}
      speed={1000}
      slidesPerView={1}
      direction={"vertical"}
      mousewheel={{
        thresholdTime: 900,
        thresholdDelta: 90,
        releaseOnEdges: false,
        sensitivity: 1,
      }}
      keyboard={{
        enabled: true,
      }}
      onReachEnd={(swiper) => {
        // document.body.style.overflowY = "";
        console.log("end");

        setTimeout(function () {
          const mousewheelOption = swiper.params
            .mousewheel as MousewheelOptions;
          mousewheelOption.releaseOnEdges = true;
          swiper.mousewheel.disable();
          document.body.style.overflowY = "auto";

          swiper.disable();
        }, 1000);
      }}
      className=""
    >
      <SwiperSlide className=" h-full">
        <FadeInSection>
          <article className="flex h-full flex-col justify-around text-center font-bold">
            <div>
              <div className="animate-fade-in-up text-6xl font-bold text-blue">
                전국 90개의 우시장
              </div>
              <div className="mt-7 animate-fade-in-up text-3xl font-bold ">
                흩어져 있는 정보들을 하나로
              </div>
              <div className="mx-auto mt-24 max-w-[76rem] animate-fade-in-up ">
                <img src="/cattle-market-information-center/1.1.png" alt="" />
                {/* <img className="w-full" src={ImageGeo} alt="" /> */}
              </div>
            </div>
          </article>
        </FadeInSection>
      </SwiperSlide>
      <SwiperSlide className="  h-full">
        <FadeInSection>
          <article className="flex h-full flex-col justify-evenly text-center font-bold">
            <div className="animate-fade-in-up ">
              <p className="font-bold capitalize text-blue">STORY 1.</p>
              <p className="mt-4 text-2xl font-bold">우시장 정보센터란?</p>
            </div>
            <div className=" animate-fade-in-up text-6xl font-bold leading-[1.26] text-black ">
              <p>좋은 송아지를</p>
              <p>
                고르는 기준,
                {/* <span className="text-black">를</span> */}
              </p>
              {/* <p className="text-black">제공하는</p> */}
              <p className="text-blue">우시장 정보센터</p>
            </div>
            <div className="   animate-fade-in-up-2 text-2xl  leading-relaxed">
              <p>좋은 송아지, 어떻게 알아보셨나요?</p>
              <p>수십년간 축적된 경험과 눈썰미가 없더라도 괜찮습니다.</p>
              <p>2,300,000 건 이상 축적된 혈통, 이력 및 출하와 앤틀러의</p>
              <p>
                차별화된 빅데이터를 분석을 통해 숨어있는 보석같은 송아지를
                찾아보세요!
              </p>
              <p>우시장정보센터가 힘껏 도와드리겠습니다.</p>
            </div>
          </article>
        </FadeInSection>
      </SwiperSlide>

      <SwiperSlide className=" h-full bg-[#eeeeee]">
        <FadeInSection>
          {" "}
          <article className="mx-auto flex h-full max-w-9xl animate-fade-in-up flex-col justify-evenly text-center font-bold">
            <div className="">
              <p className=" font-bold capitalize text-blue">STORY 2.</p>
              <p className="mt-4 text-2xl font-bold">기술소개</p>
            </div>
            {/* 기술소개들 */}
            <div className="flex justify-between   ">
              <div className="flex animate-fade-in-up-1 flex-col ">
                <div className="flex h-80 flex-col justify-between">
                  <div>
                    <p className="font-bold capitalize text-blue">Service 1.</p>
                    <p className="mt-2 text-2xl font-bold">AI 한우 능력 분석</p>
                  </div>
                  <div>
                    <img className=" max-w-[16rem]" src={Image1} alt="" />
                  </div>
                </div>

                <div className="mt-16 w-56 text-sm tracking-tighter">
                  <p>
                    KPN, 혈통, 송아지 생산자, 출하성적 등 23만건 이상의 축산물
                    이력제 빅데이터를 앤틀러의 AI 분석을 통해 보다 정확한 <br />{" "}
                    송아지 구매기준을 제시합니다.
                  </p>
                </div>
              </div>
              <div className="flex animate-fade-in-up-2 flex-col justify-between">
                <div className="flex h-80 flex-col justify-between">
                  <div>
                    <p className="font-bold capitalize text-blue">Service 2.</p>
                    <p className="mt-2 text-2xl font-bold">유사도 분석</p>
                  </div>
                  <div>
                    <img className=" max-w-[14rem]" src={Image2} alt="" />
                  </div>
                </div>

                <div className="mt-16 w-56 text-sm tracking-tighter">
                  <p>
                    거래된 소와 비슷한 잠재능력을 가진 다른 송아지가 최근 얼마에
                    거래되었는지 가격 비교 정보를 통해 보다 합리적인 <br />
                    송아지 구매기준을 제시합니다.
                  </p>
                </div>
              </div>
              <div className="flex animate-fade-in-up-3 flex-col ">
                <div className="flex h-80 flex-col justify-between">
                  <div>
                    <p className="font-bold capitalize text-blue">Service 3.</p>
                    <p className="mt-2 text-2xl font-bold">정보 제공</p>
                  </div>
                  <div>
                    <img className=" max-w-[12rem]" src={Image3} alt="" />
                  </div>
                </div>

                <div className="mt-16 w-56 text-sm tracking-tighter">
                  <p>
                    많은 시험 범위를 보기 편하게 요약한 핵심 노트처럼,
                    한우사육과 시세에 영향을 줄 수 있는 이슈, 질병, 지원사업 등
                    정보를 <br />
                    편하고 쉽게 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </FadeInSection>
      </SwiperSlide>

      <SwiperSlide className=" h-full bg-[#363636]">
        <div className="presentation-1 flex h-full flex-col">
          <FadeInSection>
            <article className=" flex h-full flex-1 flex-col items-center justify-end text-center font-bold">
              <div className="mb-9 max-w-[50rem] animate-fade-in-up text-4xl font-bold leading-tight  tracking-[-1.13px;]  text-white">
                우리 함께 보석같은
                <br /> 송아지를 찾으러 가볼까요?
              </div>
              <div className=" mb-[10%] animate-fade-in-up cursor-pointer rounded-4xl bg-white px-[3.25rem] py-4 text-2xl font-bold tracking-[-0.59px] transition ease-in hover:bg-white/90">
                <Link to="/cattle">출품우 정보 보러가기</Link>
              </div>
            </article>
          </FadeInSection>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default IntroductionPage;
