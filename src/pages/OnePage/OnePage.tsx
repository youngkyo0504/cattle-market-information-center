import React, { useEffect, useState } from "react";
// import ReactPageScroller from "react-page-scroller";
// import {
//   color,
//   background,
//   ColorProps,
//   BackgroundImageProps,
// } from "styled-system";
// import styled from "styled-components/macro";
// import MainPage from "../MainPage/MainPage";

// const ColorDiv = styled.div<BackgroundImageProps>`
//   ${background};
//   height: 100vh;
//   width: 100vw;
//   background-size: cover;
// `;

const OnePage = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const handlePageChange = (number: number) => {
  //   setCurrentPage(number);
  //
  //   if (currentPage > 1) {
  //     document.body.style.overflowY = "scroll";
  //   } else {
  //     document.body.style.overflowY = "hidden";
  //   }
  // };

  // const handleBeforePageChange = (number: number) => {};
  // useEffect(() => {
  //   const navBar = document.querySelector<HTMLHeadElement>(".navbar");
  //
  //   if (navBar) {
  //     navBar.style.zIndex = "999999";
  //   }
  //   window.onload = function () {
  //     setTimeout(function () {
  //       window.scrollTo(0, 0);
  //     }, 10);
  //   };
  //   const footer = document.querySelector<HTMLElement>(".footer");
  //   if (footer) {
  //     footer.style.display = "none";
  //   }
  //   document.body.style.overflowY = "hidden";

  //   return () => {
  //     document.body.style.overflowY = "scroll";
  //   };
  // }, []);

  return (
    <>
      {/* <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
        animationTimer={700}
      >
        <ColorDiv
          backgroundImage={
            "url(https://cdn.pixabay.com/photo/2021/12/29/19/02/peter-6902548_1280.jpg)"
          }
        >
          <h1 style={{ margin: 0, color: "white" }}> Hello World!!</h1>
        </ColorDiv>
        <ColorDiv
          backgroundImage={
            "url(https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg)"
          }
        />
        <ColorDiv
          backgroundImage={
            "url(https://cdn.pixabay.com/photo/2021/01/06/09/19/dresden-5893714_1280.jpg)"
          }
        />
      </ReactPageScroller>
      <div>
        <h1>안녕하세요!!</h1>
        <div>그냥 그렇죠</div>
        <MainPage />
      </div> */}
    </>
  );
};

export default OnePage;
