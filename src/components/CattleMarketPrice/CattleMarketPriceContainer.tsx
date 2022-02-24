import Highcharts from "highcharts";
import React from "react";
import stockOptions from "../../datas/minimalData";
import TrendGraph from "../../pages/TrendPage/TrendGraph";
import HighChartCowDataMaker from "../../service/highcart-data-maker/highchart-cow-data-maker";
import HighchartCowOptionMaker from "../../service/highchart-option-maker/highchart-cow-option-maker";
import meatPrice from "../../datas/heifer.json";
import cowGraphInfo from "../../datas/cowGraphInfo";
import ICowGraphInfo from "../../@types/CowGraphInfo";

const highChartDataMaker = HighChartCowDataMaker.getInstance();
const cowPriceData = highChartDataMaker.getData(meatPrice, 10);
const seriesoption: Highcharts.SeriesOptionsType[] = [
  {
    name: "수송아지",
    color: "#d48f93",
    type: "line",
    lineWidth: 1,

    data: cowPriceData.data.thisYearData,
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

    data: cowPriceData.data.lastYearData,
  },
];
const meatSeriesOption: Highcharts.SeriesOptionsType[] = [
  {
    name: "지육 가격",
    color: "#edb445",
    type: "line",
    lineWidth: 1,

    data: cowPriceData.data.thisYearData,
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
    data: cowPriceData.data.lastYearData,
  },
];
const highChartOptionMaker = HighchartCowOptionMaker.getInstance();
const minimalOption = highChartOptionMaker.getCowStockOptions(
  seriesoption,
  "만원"
);
const meatPriceOption = highChartOptionMaker.getCowStockOptions(
  meatSeriesOption,
  "원"
);

const CattleMarketPriceContainer = () => {
  const cowChangeOfPrice = cowPriceData.changeOfPrice;
  const cattleGraphInfo = {
    ...cowGraphInfo.cow,
    rateOfChagne: cowChangeOfPrice.rateOfChagne,
    change: cowChangeOfPrice.change,
    latestData: cowChangeOfPrice.latestData,
  } as ICowGraphInfo;

  return (
    <article className=" lg:max-w-9xl mx-auto px-4  sm:pb-14   sm:pt-8 md:max-w-full">
      <div>
        <div
          className={
            " border-blue text-subtitle text-blue  border-b-[1px] border-solid  py-3 font-bold sm:text-[1.688rem]  "
          }
        >
          <h2 className=" lg:px-content">우시장 가격 정보</h2>
        </div>
        <div className="sm:px-content mt-4 flex flex-col justify-between sm:mt-7 lg:flex-row">
          <TrendGraph data={minimalOption} graphInfo={cattleGraphInfo} />
          <TrendGraph data={meatPriceOption} graphInfo={cattleGraphInfo} />
        </div>
      </div>
    </article>
  );
};

export default CattleMarketPriceContainer;
