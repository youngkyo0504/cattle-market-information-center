import React from "react";
import Iframe from "../../components/Iframe/Iframe";
import { cattleMarket } from "../../datas";
import { ReactComponent as PlusIcon } from "../../assets/plus-sm.svg";

const CattlePage = () => {
  return (
    <>
      <div className="mx-auto mt-28 mb-20 flex min-h-[70vh] max-w-9xl flex-col justify-between sm:mb-24  md:mt-56 md:flex-row">
        <div className="px-4  md:mt-6">
          <h1 className="mb-12 hidden px-1.5 text-2xl font-bold text-blue md:block">
            우시장 둘러보기
          </h1>
          <div className="flex flex-col">
            <div className="flex justify-between border-b border-blue px-1.5 pb-3.5 font-medium  -tracking-[0.03rem] text-blue sm:mb-3  sm:text-lg ">
              <span className="font-bold">우시장 목록</span>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 sm:block">
            {Object.values(cattleMarket).map((market) => (
              <li
                onClick={() => {}}
                className="flex cursor-pointer justify-between border-b border-gray-info px-1.5 py-2 text-xs -tracking-[0.025rem] text-gray-nav hover:fill-blue hover:text-blue sm:border-0 sm:text-base "
              >
                <span>{market.title}</span>
                <span>
                  <PlusIcon className="h-4 sm:hidden" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full max-w-[865px] items-center justify-center ">
          <Iframe
            className={" mt-4 min-h-[1200px] w-full overflow-y-auto md:px-3"}
            src={"/cattle-market-information-center/iframe/gch.html"}
          />
        </div>

        {/* <Iframe
          className={"w-3/6"}
          src={"/cattle-market-information-center/iframe/woo-table2.html"}
        />
        <Iframe
          className={"w-4/12"}
          src={"/cattle-market-information-center/iframe/kpn.html"}
        /> */}
      </div>
    </>
  );
};

export default CattlePage;
