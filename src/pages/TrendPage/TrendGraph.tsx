import Highcharts from "highcharts";
import ChartContainer from "../../components/Chart/ChartContainer";
import ICowGraphInfo from "../../@types/CowGraphInfo";

const TrendGraph = ({
  data,
  graphInfo,
}: {
  data: Highcharts.Options;
  graphInfo: ICowGraphInfo;
}) => {
  return (
    <>
      <div className="   flex   flex-auto  flex-col lg:max-w-[29rem]">
        {/* // graph head */}

        <div className=" flex justify-between ">
          {/* Title */}
          <div className="flex flex-col">
            <div className="flex text-lg font-bold -tracking-[0.65px] text-gray-subtitle sm:text-subtitle ">
              <span>{graphInfo.name}</span>
              <span className="ml-1.5 py-1 text-xs font-medium -tracking-[0.38px] text-gray-unit ">
                {graphInfo.unit}
              </span>
            </div>
            <div className=" text-sm  font-medium -tracking-[0.43px]  text-gray-info">
              {graphInfo.reference}{" "}
            </div>
          </div>
          {/* changeDown */}
          <div
            className={`-tracking-[0.5px]" text-right ${
              graphInfo.change > 0 ? "text-red" : "text-blue"
            }`}
          >
            <div className=" text-lg font-bold sm:text-subtitle ">
              {graphInfo.latestData}
            </div>
            <div className="flex sm:text-sm ">
              <div className=" ">
                {graphInfo.change > 0 ? "▲" : "▼"} {graphInfo.change}
              </div>
              {/* ▲ */}
              <div className="pl-3 ">{graphInfo.rateOfChagne}%</div>
            </div>
          </div>
        </div>
        <ChartContainer data={data} />
      </div>
    </>
  );
};

export default TrendGraph;
