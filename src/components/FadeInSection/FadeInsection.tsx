import React, { ReactNode, useEffect, useRef } from "react";
const FadeInSection = ({
  children,
  threshold,
  cb,
}: {
  children: ReactNode | ReactNode[];
  cb?: Function;
  threshold: number;
}) => {
  const domRef = useRef<HTMLElement>(null);

  const [isVisible, setVisible] = React.useState(false);
  useEffect(() => {
    if (!isVisible && cb) {
      cb();
    } else if (cb && isVisible) {
      //
      //   const a = document.querySelector<HTMLElement>("#header");
      //   a && (a.style.display = "block");
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible && cb) {
      cb();
    } else if (cb && isVisible) {
      const a = document.querySelector<HTMLElement>("#header");
      a && (a.style.display = "block");
    }
    const observer = new IntersectionObserver(
      (entries) => {
        // In your case there's only one element to observe:
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:
          setVisible(true);

          // No need to keep observing:
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else {
          setVisible(false);
        }
      },
      { threshold: [threshold] }
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <section ref={domRef} className={"min-h-screen"}>
      <div className={(isVisible ? "block" : "hidden") + " h-full"}>
        {children}
      </div>
    </section>
  );
};

export default FadeInSection;
