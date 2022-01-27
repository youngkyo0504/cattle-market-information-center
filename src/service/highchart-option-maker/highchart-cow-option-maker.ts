import HighchartOptionMaker from "./highchart-option-maker";
import carcassPrices from "../../datas/heifer.json";
import { IPriceData } from "../../@types";
import getCowStockOptions from "../../datas/cowData";
import Highcharts, { Options } from "highcharts";

interface cowData {
  // 타입을 다시설정한다.
  areaData: (
    | number
    | Highcharts.PointOptionsObject
    | [string | number, number | null]
    | null
  )[];
  lineData: (
    | number
    | Highcharts.PointOptionsObject
    | [string | number, number | null]
    | null
  )[];
}
// singletone pattern
export default class HighchartCowOptionMaker implements HighchartOptionMaker {
  private static instance: HighchartOptionMaker;
  private constructor() {}

  static getInstance(): HighchartOptionMaker {
    return this.instance || (this.instance = new this());
  }
  private divideIntoLastYearAndThisYear() {
    const YEAR = 86400000 * 365;
    const today = carcassPrices[0].date[0] * 1000;
    const lastYearToday = today - YEAR;
    const twoYearsAgoToday = lastYearToday - YEAR;
    const thisYearPriceData: number[][] = [];
    const lastYearPriceData: number[][] = [];

    carcassPrices //의존적이다. 빼야됨
      .reverse()
      .forEach((priceData) => {
        if (this.isValid(priceData)) {
          const { day, price } = this.getPriceAndDate(priceData);
          if (day > lastYearToday) {
            thisYearPriceData.push([day, price]);
          } else if (day > twoYearsAgoToday) {
            lastYearPriceData.push([day + YEAR, price]);
          }
        }
      });

    return { thisYearPriceData, lastYearPriceData };
  }

  private getPriceAndDate(
    priceData:
      | { date: number[]; 암송아지: number[] }
      | { date: number[]; 암송아지: string[] }
  ) {
    const day = priceData.date[0] * 1000;
    const price = Number(priceData["암송아지"][0]);
    return { day, price };
  }

  public getData() {
    //*올해와 작년의 데이터가 반환된다.
    const { thisYearPriceData, lastYearPriceData } =
      this.divideIntoLastYearAndThisYear();
    const cowData = {
      areaData: lastYearPriceData,
      lineData: thisYearPriceData,
    };
    const cowStockOption = this.getCowStockOptions(cowData);
    console.log(cowStockOption);
    return cowStockOption;
  }

  private isValid = (priceData: IPriceData) => {
    if (
      String(priceData["date"][0]) !== "NA" &&
      priceData["암송아지"][0] !== "NA" &&
      priceData["암송아지"][0] !== 0
    ) {
      return true;
    }
  };
  private getCowStockOptions({ areaData, lineData }: cowData): Options {
    return {
      title: {
        text: "",
      },
      chart: {
        height: "300px",
      },
      rangeSelector:{

      },
      series: [
        {
          type: "line",
          data: lineData,
        },
      ],
    };
  }
  private getMinimalCowStockOptions({ areaData, lineData }: cowData): Options {
    return {
      plotOptions: {
        series: {
          stickyTracking: false, // 마우스가 계속 따라가는 것
          states: {
            inactive: {
              opacity: 1,
            },
            hover: {
              enabled: false,
              halo: {
                opacity: 1,
              },
            },
          },
        },
        area: {
          gapSize: 100,
          connectNulls: true, // null인 값들 모두 연결할지 말지
          // enableMouseTracking: false,
          stickyTracking: false,

          states: {
            hover: {
              opacity: 1,
              enabled: false,
              halo: {
                opacity: 1,
              },
            },
          },
        },
      },
      yAxis: [
        {
          crosshair: false,
          range: 2000,
          lineWidth: 0,
          minorGridLineWidth: 0,

          lineColor: "transparent",
          gridLineColor: "transparent",
          labels: {
            enabled: false,
          },
          title: {
            text: null,
          },
          minPadding: 0.3,
          maxPadding: 0.1,
        },
      ],
      credits: { enabled: false },
      rangeSelector: {
        labelStyle: { display: "none" },
        inputEnabled: false,
        buttonPosition: {
          align: "right",
        }, //버튼의 위치
        allButtonsEnabled: false,
        enabled: false,
      },
      xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: "transparent",
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        crosshair: false,
        minorTickLength: 0,
        tickLength: 0,
        minPadding: 0,
        maxPadding: 0,
      },
      tooltip: {
        shared: true,
        useHTML: true,
        animation: false,
        formatter: function () {
          if (this.points) {
            return this.points.reduce(function (s, point) {
              return (
                s +
                '<br/><span style="color:' +
                point.color +
                ';">\u25CF ' +
                point.series.name +
                "</span> " +
                ": <b>" +
                point.y +
                " 천원</b>"
              );
            }, "<b>" + new Date(this.x).toISOString().slice(0, 10) + "</b>");
          }
        },
        enabled: true,
        xDateFormat: "%y-%m-%y",
        split: false,
      },
      chart: {
        width: 272, //전체 차트 넓이를나타낸다.
        height: 112,
        borderColor: "#c8c8c8",
        borderWidth: 0.5,
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
      },

      navigator: { enabled: false },
      scrollbar: { enabled: false },
      series: [
        {
          data: areaData, //lastyear
          lineWidth: 1,
          type: "area", //가격이 밑에 남는 것 색깔이 중요한듯..
          gapSize: 5,
          opacity: 0.5,
          states: {
            inactive: {
              opacity: 0.5, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
            },
          },
          showInNavigator: false,
          color: "rgba(192,192,192,0.85)",
          name: "작년 송아지 가격",
          id: "cattle",
          animation: {
            duration: 1000,
          },
          findNearestPointBy: "xy",
          selected: true,
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, "rgba(240, 241, 242)"],
              [1, "rgba(240, 241, 242,0)"],
            ],
          },
        },
        {
          data: lineData, //this year
          lineWidth: 1,
          showCheckbox: true,
          type: "line",
          // color: "#edacb1",
          color: "rgb(30 58 138)",
          name: "송아지 가격",
          id: "cattle",
          description: "소 가격",
          animation: {
            duration: 1000,
          },
          states: {
            hover: { enabled: false },
          },
        },
      ],
    };
  }
}
