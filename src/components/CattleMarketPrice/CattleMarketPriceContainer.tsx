import Highcharts from "highcharts";
import React from "react";
import stockOptions from "../../datas/minimalData";
import TrendGraph from "../../pages/TrendPage/TrendGraph";
import HighChartCowDataMaker from "../../service/highcart-data-maker/highchart-cow-data-maker";
import HighchartCowOptionMaker from "../../service/highchart-option-maker/highchart-cow-option-maker";
import meatPrice from "../../datas/json/heifer.json";
import amPrice from "../../datas/json/am1.json";
import suPrice from "../../datas/json/su1.json";
import meanMeatPrice from "../../datas/json/meat1.json";
import cowGraphInfo from "../../datas/cowGraphInfo";
import ICowGraphInfo from "../../@types/CowGraphInfo";

const highChartDataMaker = HighChartCowDataMaker.getInstance();
const cowPriceData = highChartDataMaker.getData(meatPrice, 10);
const suPriceData = highChartDataMaker.getData(suPrice, 10, 2);
const amPriceData = highChartDataMaker.getData(amPrice, 10, 2);
const meanMeatPriceData = highChartDataMaker.getData(meanMeatPrice, 10);
console.log([...suPriceData.data.lastYearData]);
const seriesoption: Highcharts.SeriesOptionsType[] = [
  {
    name: "수송아지",
    color: "#d48f93",
    type: "line",
    lineWidth: 1,

    // data: [...suPriceData.data.lastYearData, ...suPriceData.data.thisYearData],
    data: [...suPriceData.data.thisYearData],
    // TODO line 굵기나 다른 것 변경 예정
    states: {
      inactive: {
        opacity: 1, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
      },
      hover: { enabled: false },
    },
  },
  {
    name: "암송아지",
    color: "#7a9cd7",
    type: "line",
    lineWidth: 1,
    states: {
      inactive: {
        opacity: 1, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
      },
      hover: { enabled: false },
    },

    // data: [...amPriceData.data.lastYearData, ...amPriceData.data.thisYearData],
    data: [...amPriceData.data.thisYearData],
  },
];
const meatSeriesOption: Highcharts.SeriesOptionsType[] = [
  {
    name: "지육 가격",
    color: "#edb445",
    type: "line",
    lineWidth: 1,

    data: meanMeatPriceData.data.thisYearData,
    // TODO line 굵기나 다른 것 변경 예정
    states: {
      inactive: {
        opacity: 1, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
      },
      hover: { enabled: false },
    },
  },
  {
    name: "작년 지육가격",
    color: "rgba(192,192,192,0.85)",
    type: "line",
    lineWidth: 1,
    states: {
      inactive: {
        opacity: 1, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
      },
      hover: { enabled: false },
    },
    data: meanMeatPriceData.data.lastYearData,
  },
];
const highChartOptionMaker = HighchartCowOptionMaker.getInstance();
const minimalOption = highChartOptionMaker.getCowStockOptions(
  seriesoption,
  "만원"
);
const meatPriceOption = highChartOptionMaker.getMeatStockOptions(
  meatSeriesOption,
  "원"
);

const CattleMarketPriceContainer = () => {
  console.log();
  const meanMeatChangeOfPrice = meanMeatPriceData.changeOfPrice;
  const suChangeOfPrice = suPriceData.changeOfPrice;
  const cowChangeOfPrice = cowPriceData.changeOfPrice;
  const cattleGraphInfo = {
    rateOfChagne: suChangeOfPrice.rateOfChagne,
    change: suChangeOfPrice.change,
    latestData: suChangeOfPrice.latestData,
    ...cowGraphInfo.cow,
  } as ICowGraphInfo;

  const meatGraphInfo = {
    rateOfChagne: meanMeatChangeOfPrice.rateOfChagne,
    change: meanMeatChangeOfPrice.change,
    latestData: meanMeatChangeOfPrice.latestData,
    ...cowGraphInfo.meat,
  } as ICowGraphInfo;
  return (
    <article className=" mx-auto px-4 sm:pb-14  sm:pt-8   md:max-w-full lg:max-w-9xl">
      <div>
        <div
          className={
            " border-b-[1px] border-solid border-blue  py-3 text-subtitle  font-bold text-blue sm:text-[1.688rem]  "
          }
        >
          <h2 className=" lg:px-content">우시장 가격 정보</h2>
        </div>
        <div className="mt-4 flex flex-col justify-between sm:mt-7 sm:px-content lg:flex-row">
          <TrendGraph data={minimalOption} graphInfo={cattleGraphInfo} />
          <TrendGraph data={meatPriceOption} graphInfo={meatGraphInfo} />
        </div>
      </div>
    </article>
  );
};

export default CattleMarketPriceContainer;
