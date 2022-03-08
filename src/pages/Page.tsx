import styles from "./Page.module.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
// import MarketsPage from "./MarketsPage/MarketsPage";
import CattlePage from "./CattlePage/CattlePage";
import FaqPage from "./FaqPage/FaqPage";
import KPNPage from "./KPNPage/KPNPage";
import MarketsPage from "./MarketsPage/MarketsPage";

const Page = () => {
  return (
    <main className={"flex-1"}>
      <Routes>
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/cattle" element={<CattlePage />} />
        <Route path="/kpn/:kpnId" element={<KPNPage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </main>
  );
};

export default Page;
