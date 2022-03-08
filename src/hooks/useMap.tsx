import { useEffect, useState } from "react";
import { MarketName } from "../@types";
import { cattleMarket } from "../datas";
import KaKaoMap from "../service/kakao-map";
interface IUseMapProps {
  setCattleMarket: React.Dispatch<React.SetStateAction<MarketName>>;
}
const useMap = ({ setCattleMarket }: IUseMapProps) => {
  const [map, setMap] = useState<any>(null);

  // * 로드시 스크립트를 삽입하고 카카오 지도 표현
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b730b97a99b3e4393cfafbd5dd7ffeb8&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao }: any = window;
      kakao.maps.load(() => {
        const cattleMarketMap = new KaKaoMap(setCattleMarket, cattleMarket);
        setMap(cattleMarketMap);
      });
    };
  }, []);

  return { map };
};
export default useMap;
