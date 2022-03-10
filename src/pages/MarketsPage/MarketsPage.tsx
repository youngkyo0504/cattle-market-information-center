import MarketList from "./../../components/MarketList/MarketList";
import KaKaoMapContainer from "../../components/KaKaoMap/KaKaoMapContainer";
import { cattleMarket } from "../../datas";
import useMarket from "../../hooks/useMarket";

const MarketsPage = () => {
  const { cattleMarketName, setCattleMarket, changeMarket } = useMarket();

  return (
    <>
      <div className="mx-auto mt-28 mb-20 flex min-h-[70vh] max-w-9xl flex-col sm:mb-24 sm:justify-between  md:mt-56 md:flex-row">
        <MarketList
          marketKey={cattleMarketName}
          changeState={changeMarket}
          marketList={cattleMarket}
        />
        <div className="flex w-full max-w-[800px] flex-col p-4 md:mt-6 ">
          <KaKaoMapContainer
            setCattleMarket={setCattleMarket}
            cattleMarketName={cattleMarketName}
          />
        </div>
      </div>
    </>
  );
};

export default MarketsPage;
