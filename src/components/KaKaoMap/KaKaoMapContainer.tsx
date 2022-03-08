import React, { useCallback, useEffect, useState } from "react";
import Map from "./KaKaoMap";
import { cattleMarket } from "../../datas";
import { MarketName } from "../../@types";
import useMap from "../../hooks/useMap";
// *스크립트로 kakao maps api를 심어서 가져오면 window전역 객체에 들어가게 된다. 그리고 그걸 사용하려면 window에서 kakao객체를 뽑아서 사용하면 된다.

const MarketInfoItem = ({
  cattleMarketName,
}: {
  cattleMarketName: MarketName;
}) => (
  <li className="mb-4 last:mb-0">
    <span className="mr-4 text-gray-subtitle">개장일</span>
    <span className="text-gray-info">
      {cattleMarket[cattleMarketName].name}
    </span>
  </li>
);

interface IKaKaoMapContainerprops {
  setCattleMarket: React.Dispatch<React.SetStateAction<MarketName>>;
  cattleMarketName: MarketName;
}

const KaKaoMapContainer = ({
  setCattleMarket,
  cattleMarketName,
}: IKaKaoMapContainerprops) => {
  const { map } = useMap({ setCattleMarket });

  useEffect(() => {
    if (map) {
      const position = map.getLatlLon(cattleMarket[cattleMarketName].position);
      map.panTo(position);
    }
  }, [cattleMarketName]);

  return (
    <>
      <div className="mb-20 flex justify-between">
        <h2 className="pl-2 text-[1.35rem] tracking-[-0.54px] text-blue">
          {cattleMarket[cattleMarketName].name} 우시장
        </h2>
        <ul className="trakcng-[-0.54px] flex flex-col text-lg">
          <MarketInfoItem cattleMarketName={cattleMarketName} />{" "}
        </ul>
      </div>

      <Map cattleMarketName={cattleMarketName} />
    </>
  );
};

export default KaKaoMapContainer;
