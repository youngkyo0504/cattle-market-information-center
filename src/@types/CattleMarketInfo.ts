import IPosition from "./Position";

interface ICattleMarketInfo {
  name: string;
  position: IPosition;
  phone: string;
  address: string;
  "opening-date": string;
  url: string;
}

export default ICattleMarketInfo;
