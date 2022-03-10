import { MarketName } from "../../@types";

interface mapProps {
  cattleMarketName: MarketName;
}
const Map = ({ cattleMarketName }: mapProps) => {
  return (
    <>
      <div id="myMap" className="aspect-[1.5/1]   w-full "></div>
    </>
  );
};

export default Map;
