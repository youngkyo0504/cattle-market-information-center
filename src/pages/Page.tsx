import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
import { lazyWithPreload } from "../util";
import preloadImage from "../util/preloadImages";

const CattlePage = lazyWithPreload(() => import("./CattlePage/CattlePage"));
const FaqPage = lazyWithPreload(() => import("./FaqPage/FaqPage"));
const KPNPage = lazyWithPreload(() => import("./KPNPage/KPNPage"));
const MarketsPage = lazyWithPreload(() => import("./MarketsPage/MarketsPage"));

const Page = () => {
  useEffect(() => {
    preloadImage(["/cattle-market-information-center/assets/1.1.png"]);
  });
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
