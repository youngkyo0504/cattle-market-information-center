import { PointOptionsObject } from "highcharts";
import carcassPrices from "../../datas/heifer.json";
import { IPriceData } from "../../@types";
import HighStockSeriesData from "../../@types/HighStockSeriesData";
import HighchartSeriesDataMaker from "./highchart-data-maker";
import ICowGraphInfo from "../../@types/CowGraphInfo";

export default class HighChartCowDataMaker implements HighchartSeriesDataMaker {
  private static instance: HighchartSeriesDataMaker;
  private constructor() {}

  public getData(cowPriceData: IPriceData[], divide: number = 1) {
    //*올해와 작년의 데이터가 반환된다.
    const { thisYearPriceData, lastYearPriceData } =
      this.divideIntoLastYearAndThisYear(cowPriceData, divide);
    // dependency cowData에 종속되어있다.
    const data = {
      lastYearData: lastYearPriceData,
      thisYearData: thisYearPriceData,
    };
    const changeOfPrice = this.getChange(data.thisYearData);
    return { data, changeOfPrice };
  }

  getChange(
    priceDatas: number[][]
  ): Omit<ICowGraphInfo, "name" | "unit" | "reference"> {
    const length = priceDatas.length;
    const todayPrice = priceDatas[length - 1][1];
    const yesterdayPrice = priceDatas[length - 2][1];
    const change = todayPrice - yesterdayPrice;
    const rateOfChage = (change / yesterdayPrice) * 100;
    return {
      latestData: todayPrice,
      change: change,
      rateOfChagne: rateOfChage,
    };
  }

  static getInstance(): HighchartSeriesDataMaker {
    // 싱글톤
    return this.instance || (this.instance = new this());
  }

  private divideIntoLastYearAndThisYear(
    cowPriceData: IPriceData[],
    divide: number
  ) {
    const YEAR = 86400000 * 365;
    const today = Number(cowPriceData[0].date[0]) * 1000;
    const lastYearToday = today - YEAR;
    const twoYearsAgoToday = lastYearToday - YEAR;
    const thisYearPriceData: number[][] = [];
    const lastYearPriceData: number[][] = [];

    cowPriceData
      .reverse()
      .filter((priceData) => this.isValid(priceData))
      .forEach((priceData) => {
        const { day, price } = this.getPriceAndDate(priceData);
        if (day > lastYearToday) {
          thisYearPriceData.push([day, price / divide]);
        } else if (day > twoYearsAgoToday) {
          lastYearPriceData.push([day + YEAR, price / divide]);
        }
      });
    return { thisYearPriceData, lastYearPriceData };
  }
  private getPriceAndDate(priceData: IPriceData) {
    const day = Number(priceData.date[0]) * 1000; // 시간축 맞춰주기 위해서
    const price = Number(priceData["price"][0]);
    return { day, price };
  }

  private isValid = (priceData: IPriceData) => {
    if (
      String(priceData["date"][0]) !== "NA" &&
      priceData["price"][0] !== "NA" &&
      priceData["price"][0] !== 0
    ) {
      return true;
    }
  };
}
