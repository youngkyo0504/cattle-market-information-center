import { MarketName } from "../../@types";

interface mapProps {
  cattleMarketName: MarketName;
}
const Map = ({ cattleMarketName }: mapProps) => {
  return (
    <>
      <div
        id="myMap"
        style={{
          width: "100%",
          height: "600px",
        }}
      ></div>
    </>
  );
};

export default Map;
