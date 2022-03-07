import { CSSProperties, useEffect, useState } from "react";
type overflow = "auto" | "hidden";

const useToggleScroll = () => {
  const [bodyOverflow, setBodyOverflow] = useState<overflow>("hidden");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
  }, [bodyOverflow]);
  return { setBodyOverflow };
};

export default useToggleScroll;
