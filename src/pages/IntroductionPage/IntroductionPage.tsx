import Card3 from "./Card3";
import Card4 from "./Card4";
import Card2 from "./Card2";
import Card1 from "./Card1";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Keyboard } from "swiper";
import FadeInSection from "../../components/FadeInSection/FadeInsection";
import { MousewheelOptions } from "swiper/types";
import useToggleScroll from "../../hooks/useToggleScroll";
import { isMobileWidth } from "../../util";

function IntroductionPage() {
  isMobileWidth();
  const s = useSwiper();
  const ref = useRef<SwiperCore>();
  const scrollHeight = document.documentElement.clientHeight;

  console.log(document.documentElement.clientWidth);
  console.log(scrollHeight);
  useToggleScroll();
  useEffect(() => {
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
            document.body.style.overflow = "hidden";
          }
        }, 300);
      }
    };
    return () => {};
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
          <Card1 />
        </FadeInSection>
      </SwiperSlide>
      <SwiperSlide className="  h-full">
        <FadeInSection>
          <Card2 />
        </FadeInSection>
      </SwiperSlide>

      <SwiperSlide className=" h-full bg-[#eeeeee]">
        <FadeInSection>
          <Card3 />
        </FadeInSection>
      </SwiperSlide>

      <SwiperSlide className=" h-full bg-[#363636]">
        <div className="presentation-1 flex h-full flex-col">
          <FadeInSection>
            <Card4 />
          </FadeInSection>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default IntroductionPage;
