import HighchartOptionMaker from "./highchart-option-maker";
import carcassPrices from "../../datas/heifer.json";
import { IPriceData } from "../../@types";
import getCowStockOptions from "../../datas/cowData";
import Highcharts, { Options } from "highcharts";
import HighStockSeriesData from "../../@types/HighStockSeriesData";

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
  private static instance: HighchartCowOptionMaker;
  private constructor() {}

  static getInstance(): HighchartCowOptionMaker {
    return this.instance || (this.instance = new this());
  }

  public getCowStockOptions({
    lastYearData,
    thisYearData,
  }: HighStockSeriesData): Options {
    return {
      title: {
        text: "",
      },
      navigator: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      chart: {
        height: "300px",
      },
      rangeSelector: {
        inputEnabled: false,
        buttonPosition: {
          align: "right",
          x: 0,
          y: 0,
        },

        buttons: [
          {
            type: "month",
            count: 1,
            text: "한달",
            title: "View 1 month",
          },
          {
            type: "month",
            count: 3,
            text: "3개월",
            title: "View 3 months",
          },
          {
            type: "month",
            count: 6,
            text: "6개월",
            title: "View 6 months",
          },

          {
            type: "year",
            count: 1,
            text: "년",
            title: "년",
          },
          {
            type: "all",
            text: "전체",
            title: "View all",
          },
        ],
        // 한달 , 두달 씩 끊어서 보는 것
      },
      series: [
        {
          color: "rgb(30 58 138)",
          type: "line",
          data: thisYearData,
        },
      ],
    };
  }

  public getMinimalCowStockOptions({
    lastYearData,
    thisYearData,
  }: HighStockSeriesData): Options {
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
        // width //전체 차트 넓이를나타낸다.

        height: "300px",
        borderColor: "#c8c8c8",
        borderWidth: 0.5,
        spacingBottom: 30,
        spacingTop: 30,
        spacingLeft: 30,
        spacingRight: 30,
        style: { pading: "100px" },
        className: "kyoyoung",
      },
      lang: {
        rangeSelectorZoom: "",
      },
      navigator: { enabled: false },
      scrollbar: { enabled: false },
      series: [
        {
          data: lastYearData, //HighStockSeriesData
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
          data: thisYearData, //this year
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