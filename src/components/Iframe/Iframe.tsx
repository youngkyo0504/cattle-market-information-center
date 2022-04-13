import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
const TABLE_SIZE = 1113.96;

const Iframe = ({ src, className }: { src: string; className: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const onLoadIframe: ReactEventHandler<HTMLIFrameElement> = (event) => {
    if (loadingRef.current) {
      loadingRef.current.style.display = "block";
      // setVisible(false);
    }
    const iframeElement = event.currentTarget;
    if (iframeElement.contentWindow) {
      iframeElement.style.display = "block";
      let scrollHeight = Math.max(
        iframeElement.contentWindow.document.body.scrollHeight,
        iframeElement.contentWindow.document.documentElement.scrollHeight,
        iframeElement.contentWindow.document.body.offsetHeight,
        iframeElement.contentWindow.document.documentElement.offsetHeight,
        iframeElement.contentWindow.document.body.clientHeight,
        iframeElement.contentWindow.document.documentElement.clientHeight,
        TABLE_SIZE
      );

      iframeElement.height = scrollHeight + "px";
      // 원래 iframe 내부의 content height 을 불러온다.
    }
    if (loadingRef.current) {
      loadingRef.current.style.display = "none";
      // setVisible(false);
    }
  };

  const onResizeIframe = (event: Event) => {
    const iframeElement = iframeRef.current;
    if (iframeElement?.contentWindow) {
      let scrollHeight = Math.max(
        iframeElement.contentWindow.document.body.scrollHeight,
        iframeElement.contentWindow.document.documentElement.scrollHeight,
        iframeElement.contentWindow.document.body.offsetHeight,
        iframeElement.contentWindow.document.documentElement.offsetHeight,
        iframeElement.contentWindow.document.body.clientHeight,
        iframeElement.contentWindow.document.documentElement.clientHeight
      );
      iframeElement.height = scrollHeight + "px";
      // 원래 iframe 내부의 content height 을 불러온다.
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResizeIframe);
    return () => {
      window.removeEventListener("resize", onResizeIframe);
    };
  }, []);
  return (
    <>
      <div
        ref={loadingRef}
        className={`${
          visible ? "" : "hidden"
        } flex h-screen w-full items-center justify-center`}
      >
        <div className={"lds-dual-ring"}></div>
      </div>

      <iframe
        ref={iframeRef}
        className={className + " hidden"}
        src={src}
        frameBorder="0"
        scrolling="no"
        onLoad={onLoadIframe}
      ></iframe>
    </>
  );
};

export default Iframe;
