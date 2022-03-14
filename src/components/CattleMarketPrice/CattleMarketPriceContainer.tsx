import TrendGraph from "../../pages/TrendPage/TrendGraph";
import useGraphOption from "../../hooks/useGraphOption";

const CattleMarketPriceContainer = () => {
  const { meatGraphInfo, cattleGraphInfo, minimalOption, meatPriceOption } =
    useGraphOption();

  return (
    <article className=" mx-auto px-4 sm:pb-14  sm:pt-8   md:max-w-full lg:max-w-9xl">
      <div>
        <div
          className={
            " border-b-[1px] border-solid border-blue  py-3 text-subtitle  font-bold text-blue sm:text-[1.688rem]  "
          }
        >
          <h2 className=" lg:px-content">우시장 가격 정보</h2>
        </div>
        <div className="mt-4 flex flex-col justify-between sm:mt-7 sm:px-content lg:flex-row">
          <TrendGraph data={minimalOption} graphInfo={cattleGraphInfo} />
          <TrendGraph data={meatPriceOption} graphInfo={meatGraphInfo} />
        </div>
      </div>
    </article>
  );
};

export default CattleMarketPriceContainer;
