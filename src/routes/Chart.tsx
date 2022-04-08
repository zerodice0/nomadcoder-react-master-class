// eslint-disable-next-line import/default
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";

import { fetchCoinHistory } from "@/api";

interface ChartProps {
  coinId: string;
}

interface ChartInterface {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<ChartInterface[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  return (
    <>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map(price => price.close) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 300,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              categories: data?.map(price => price.time_close) ?? [],
              type: "datetime",
            },
            yaxis: {
              show: false,
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return `$${val.toFixed(2)} USD`;
                  return "$" + val + " USD";
                },
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#0066FF"],
              },
            },
            colors: ["#1dd1a1"],
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
          }}
        ></ApexChart>
      )}
    </>
  );
};

export default Chart;
