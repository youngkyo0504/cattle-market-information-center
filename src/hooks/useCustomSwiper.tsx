import { useCallback, useRef } from "react";
import Swiper from "swiper";
import { MousewheelOptions } from "swiper/types";
import SwiperCore from "swiper";
import throttle from "../util/throttle";

const useCustomSwiper = () => {
  const swiperRef = useRef<SwiperCore>();
  const onReachEnd = useCallback((swiper: SwiperCore) => {
    stopSwiper(swiper);
  }, []);
  const restartSwiperByKeyBoard = useCallback(
    throttle((e: KeyboardEvent) => {
      if (["ArrowUp", "Up", "PageUp"].includes(e.key)) {
        restartSwiper();
      }
    }, 400),
    []
  );

  const restartSwiperByWheel = useCallback(
    throttle((e: WheelEvent) => {
      if (window.scrollY === 0 && e.deltaY < 0) {
        restartSwiper();
      }
    }, 400),
    []
  );

  const restartSwiper = useCallback(() => {
    setTimeout(() => {
      console.log("hey");
      if (swiperRef.current) {
        const mousewheelOption = swiperRef.current.params
          .mousewheel as MousewheelOptions;
        mousewheelOption.releaseOnEdges = false;
        swiperRef.current.mousewheel.enable();
        swiperRef.current.enable();
        document.body.style.overflow = "hidden";
      }
    }, 300);
  }, []);

  const stopSwiper = useCallback((swiper: SwiperCore) => {
    setTimeout(() => {
      const mousewheelOption = swiper.params.mousewheel as MousewheelOptions;
      mousewheelOption.releaseOnEdges = true;
      swiper.mousewheel.disable();
      document.body.style.overflowY = "auto";
      swiper.disable();
    }, 1000);
  }, []);

  const eventHandler = {
    onReachEnd,
    restartSwiperByWheel,
    restartSwiperByKeyBoard,
  };
  return { eventHandler, swiperRef };
};

export default useCustomSwiper;
