import React from "react";
import CattleMarketPriceContainer from "../../components/CattleMarketPrice/CattleMarketPriceContainer";
import CattleMarketQuote from "../../components/CattleMarketQuote/CattleMarketQuote";
import MainBannerContainer from "../../components/MainBanner/MainBannerContainer";
const MainPage = () => {
  return (
    <>
      <MainBannerContainer />
      <CattleMarketPriceContainer />
      <CattleMarketQuote />
    </>
  );
};

export default MainPage;
