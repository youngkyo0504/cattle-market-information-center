import Iframe from "../../components/Iframe/Iframe";
import { cattleMarket } from "../../datas";
import MarketList from "../../components/MarketList/MarketList";
import useMarket from "../../hooks/useMarket";

const CattlePage = () => {
  const { cattleMarketName, setCattleMarket, changeMarket } = useMarket();

  return (
    <>
      <div className="mx-auto mt-28 mb-20 flex min-h-[70vh] max-w-9xl flex-col justify-between sm:mb-24  md:mt-56 md:flex-row">
        <MarketList
          marketKey={cattleMarketName}
          changeState={changeMarket}
          marketList={cattleMarket}
        />

        <div className="flex w-full max-w-[865px] items-center justify-center ">
          <Iframe
            className={" mt-4 min-h-[1200px] w-full overflow-y-auto md:px-3"}
            src={"/cattle-market-information-center/iframe/gch.html"}
          />
        </div>
      </div>
    </>
  );
};

export default CattlePage;
