import React from "react";
import Highcharts from "highcharts";
import MinimalChart from "./MinimalChart";

const ChartContainer = ({ data }: { data: Highcharts.Options }) => {
  return (
    <div className="mx-auto mt-4 w-full pb-[18px] sm:mt-8">
      <MinimalChart highcharts={Highcharts} options={data} />
    </div>
  );
};

export default ChartContainer;
