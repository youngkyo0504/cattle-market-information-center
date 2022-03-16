import styles from "./Page.module.scss";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
// import MarketsPage from "./MarketsPage/MarketsPage";

const CattlePage = lazy(() => import("./CattlePage/CattlePage"));
const FaqPage = lazy(() => import("./FaqPage/FaqPage"));
const KPNPage = lazy(() => import("./KPNPage/KPNPage"));
const MarketsPage = lazy(() => import("./MarketsPage/MarketsPage"));

const Page = () => {
  return (
    <main className={"flex-1"}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/cattle" element={<CattlePage />} />
          <Route path="/kpn/:kpnId" element={<KPNPage />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Page;
