import React from "react";
import { cattleMarket } from "../../datas";
import { ReactComponent as PlusIcon } from "../../assets/plus-sm.svg";
import { CattleMarketInfos, MarketName } from "../../@types";

interface IMarketListProps {
  changeState: any;
  marketList: CattleMarketInfos;
  marketKey: MarketName;
  title: string;
}

function MarketList({
  marketList,
  changeState,
  marketKey,
  title,
}: IMarketListProps) {
  return (
    <div className="px-4  md:mt-6">
      <h1 className="mb-12 hidden px-1.5 text-2xl font-bold text-blue md:block">
        {title}
      </h1>
      <div className="flex flex-col">
        <div className="flex justify-between border-b border-blue px-1.5 pb-3.5 font-medium  -tracking-[0.03rem] text-blue sm:mb-3  sm:text-lg ">
          <span className="font-bold">우시장 목록</span>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-x-4 sm:block">
        {Object.entries(marketList).map((marketInfo) => {
          const [key, market] = marketInfo;
          return (
            <li
              onClick={changeState(key)}
              className={`${
                marketKey === key ? "text-blue" : " text-gray-nav"
              } flex cursor-pointer justify-between border-b  border-b-gray-info px-1.5 py-2 text-xs -tracking-[0.025rem] hover:fill-blue hover:text-blue sm:border-0 sm:text-base`}
            >
              <span>{market.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MarketList;
