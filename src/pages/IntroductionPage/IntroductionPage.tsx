import Card3 from "./Card3";
import Card4 from "./Card4";
import Card2 from "./Card2";
import Card1 from "./Card1";
import { useEffect, useState } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import FadeInSection from "../../components/FadeInSection/FadeInsection";
import useToggleScroll from "../../hooks/useToggleScroll";
import { isMobileWidth, scrollToTop } from "../../util";
import useCustomSwiper from "../../hooks/useCustomSwiper";
import throttle from "../../util/throttle";
import { MousewheelOptions, SwiperOptions } from "swiper/types";
const swiperOption: any = {
  //   onInit={(swiper) => {
  //     swiperRef.current = swiper;
  //   }}

  preloadImages: true,
  //   height={scrollHeight}
  initialSlide: 0,
  modules: [Keyboard, Mousewheel, Pagination],
  spaceBetween: 0,
  autoHeight: true,
  pagination: { clickable: true },
  touchReleaseOnEdges: false,
  speed: 1000,
  slidesPerView: 1,
  direction: "vertical",
  mousewheel: {
    thresholdTime: 900,
    thresholdDelta: 90,
    releaseOnEdges: false,
    sensitivity: 1,
  },
  keyboard: {
    enabled: true,
  },
  //   onReachEnd={eventHandler.onReachEnd}
  //   className=""
  // >
};
function IntroductionPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollHeight, setScrollHeight] = useState(
    document.documentElement.clientHeight
  );
  const { eventHandler, swiperRef } = useCustomSwiper();
  const { setBodyOverflow } = useToggleScroll();

  const resizeHandler = throttle(() => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
    setScrollHeight(document.documentElement.clientHeight);
  }, 400);

  useEffect(() => {
    scrollToTop();
    window.addEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    console.log(windowWidth);
    if (isMobileWidth(windowWidth)) {
      console.log("디스트로이");
      swiperRef.current?.destroy(false, true);
      setBodyOverflow("auto");
    }
    if (!isMobileWidth(windowWidth)) {
      // swiperRef.current?.init();
      const mousewheelOption = swiperRef.current?.params
        .mousewheel as MousewheelOptions;
      if (swiperRef.current) {
        swiperRef.current.params = {
          ...swiperRef.current.params,
          ...swiperOption,
        };
        swiperRef.current.params.freeMode = true;
        swiperRef.current.params.mousewheel = true;
        swiperRef.current.params.mousewheel = {
          thresholdTime: 900,
          thresholdDelta: 90,
          releaseOnEdges: false,
          sensitivity: 1,
        };
        swiperRef.current?.mousewheel.enable();
        swiperRef.current.update();
      }

      console.log(swiperRef.current?.params);
      console.log(swiperRef.current?.mousewheel.enabled);

      setBodyOverflow("hidden");
      window.addEventListener("keydown", eventHandler.restartSwiperByKeyBoard);
      window.addEventListener("wheel", eventHandler.restartSwiperByWheel);
    }

    return () => {
      window.removeEventListener(
        "keydown",
        eventHandler.restartSwiperByKeyBoard
      );
      window.removeEventListener("wheel", eventHandler.restartSwiperByWheel);
    };
  }, []);

  return (
    <Swiper
      onInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      observer={true}
      observeParents={true}
      // updateOnWindowResize={true}
      preloadImages={true}
      height={scrollHeight}
      initialSlide={0}
      modules={[Keyboard, Mousewheel, Pagination]}
      spaceBetween={0}
      autoHeight={true}
      pagination={{ clickable: true }}
      touchReleaseOnEdges={false}
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
      onReachEnd={eventHandler.onReachEnd}
      className=""
    >
      <SwiperSlide className=" h-full">
        <FadeInSection threshold={isMobileWidth(windowWidth) ? 0.5 : 0.9}>
          <Card1 />
        </FadeInSection>
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <FadeInSection threshold={isMobileWidth(windowWidth) ? 0.5 : 0.9}>
          <Card2 />
        </FadeInSection>
      </SwiperSlide>

      <SwiperSlide className="h-full  bg-[#eeeeee]">
        <FadeInSection threshold={isMobileWidth(windowWidth) ? 0.5 : 0.9}>
          <Card3 />
        </FadeInSection>
      </SwiperSlide>

      <SwiperSlide className=" h-full bg-[#363636]">
        <div className="presentation-1 flex h-full flex-col">
          <FadeInSection threshold={isMobileWidth(windowWidth) ? 0.5 : 0.9}>
            <Card4 />
          </FadeInSection>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default IntroductionPage;
