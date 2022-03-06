import React, { ReactNode, useEffect, useRef } from "react";
const FadeInSection = ({
  children,
  cb,
}: {
  children: ReactNode | ReactNode[];
  cb?: Function;
}) => {
  const domRef = useRef<HTMLElement>(null);

  const [isVisible, setVisible] = React.useState(false);
  useEffect(() => {
    if (!isVisible && cb) {
      cb();
    } else if (cb && isVisible) {
      //   console.log("appear", cb);
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
          console.log("false");
          setVisible(false);
        }
      },
      { threshold: [1] }
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
    <section ref={domRef} className={"h-full"}>
      <div className={(isVisible ? "block" : "hidden") + " h-full"}>
        {children}
      </div>
    </section>
  );
};

export default FadeInSection;
