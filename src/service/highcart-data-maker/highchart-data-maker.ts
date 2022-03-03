import { IPriceData } from "../../@types";
import ICowGraphInfo from "../../@types/CowGraphInfo";
import HighStockSeriesData from "../../@types/HighStockSeriesData";

export default interface HighchartSeriesDataMaker {
  getData(
    jsonData: IPriceData[],
    divide: number,
    howLong?: number
  ): {
    data: HighStockSeriesData;
    changeOfPrice: Omit<ICowGraphInfo, "name" | "unit" | "reference">;
  };
}
