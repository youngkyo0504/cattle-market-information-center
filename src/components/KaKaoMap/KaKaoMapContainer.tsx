import React, { FC, useCallback, useEffect, useState } from "react";
import Map from "./KaKaoMap";
import { cattleMarket } from "../../datas";
import { MarketName } from "../../@types";
import useMap from "../../hooks/useMap";
import { ReactComponent as PlaceIcon } from "../../assets/market-info-icon/icon1_place.svg";
import { ReactComponent as TelIcon } from "../../assets/market-info-icon/icon2_tel.svg";
import { ReactComponent as DayIcon } from "../../assets/market-info-icon/icon3_day.svg";
import { ExternalLinkIcon } from "@heroicons/react/outline";

// *스크립트로 kakao maps api를 심어서 가져오면 window전역 객체에 들어가게 된다. 그리고 그걸 사용하려면 window에서 kakao객체를 뽑아서 사용하면 된다.

const MarketInfoItem = ({
  cattleMarketName,
}: {
  cattleMarketName: MarketName;
}) => (
  <>
    <li className="mb-2 flex w-full items-center tracking-[-0.0319rem] last:mb-0">
      <PlaceIcon className="mr-2 flex h-4 sm:mr-4 sm:h-6" />

      <span className="mr-2">소재지 </span>
      <span className="break-words text-gray-info">
        {cattleMarket[cattleMarketName].address}
      </span>
    </li>
    <li className="mb-2 flex w-full items-center tracking-[-0.0319rem] last:mb-0">
      <TelIcon className=" mr-2 flex h-3 sm:mr-3 sm:h-5 " />

      <span className="mr-2">전화번호 </span>
      <span className="break-words text-gray-info">
        {cattleMarket[cattleMarketName].phone}
      </span>
    </li>
    <li className="mb-2 flex w-full items-center tracking-[-0.0319rem] last:mb-0">
      <DayIcon className="mr-2 flex h-3 sm:mr-4  sm:h-5 " />

      <span className="mr-2">개장일 </span>
      <span className="break-words text-gray-info">
        {cattleMarket[cattleMarketName]["opening-date"]}
      </span>
    </li>
  </>
);

interface IKaKaoMapContainerprops {
  setCattleMarket: React.Dispatch<React.SetStateAction<MarketName>>;
  cattleMarketName: MarketName;
}

const KaKaoMapContainer: FC<IKaKaoMapContainerprops> = ({
  setCattleMarket,
  cattleMarketName,
}) => {
  const { map } = useMap({ setCattleMarket });

  useEffect(() => {
    if (map) {
      const position = map.getLatlLon(cattleMarket[cattleMarketName].position);
      map.panTo(position);
    }
  }, [cattleMarketName]);

  return (
    <>
      <div className="mt-2 mb-10 flex sm:mt-6 sm:mb-20 sm:justify-between">
        <h2 className="mr-10 pl-2 text-xs tracking-[-0.54px] sm:mr-0 sm:text-[1.35rem] ">
          <a
            className="group text-blue transition-all ease-in hover:font-semibold"
            href={cattleMarket[cattleMarketName].url}
            target="#"
          >
            <div className="flex items-center justify-center">
              <span className="">
                {cattleMarket[cattleMarketName].name} 우시장
              </span>
              <span>
                <ExternalLinkIcon className="ml-1 h-6 transition-all group-hover:stroke-[2.4px]" />
              </span>
            </div>
          </a>
        </h2>
        <ul className="flex max-w-[26rem] flex-col text-[0.625rem] tracking-[-0.54px] sm:text-lg lg:w-full">
          <MarketInfoItem cattleMarketName={cattleMarketName} />{" "}
        </ul>
      </div>

      <Map cattleMarketName={cattleMarketName} />
    </>
  );
};

export default KaKaoMapContainer;
