import { useCallback, useEffect, useState } from "react";
import { MarketName } from "../@types";

const useMarket = () => {
  const [cattleMarketName, setCattleMarket] = useState<MarketName>("gcch");
  const changeMarket = useCallback(
    (marketName: MarketName) => {
      return () => {
        setCattleMarket(marketName);
      };
    },
    [setCattleMarket]
  );
  return { cattleMarketName, setCattleMarket, changeMarket };
};

export default useMarket;
