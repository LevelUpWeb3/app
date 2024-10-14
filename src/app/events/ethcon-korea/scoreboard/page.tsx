"use client";

import {
  getScoreboardData,
  type ScoreboardType,
} from "@/app/events/ethcon-korea/actions";
import {
  ErrorMsg,
  EthconPageLayout,
} from "@/app/events/ethcon-korea/components";
import ECharts from "echarts-for-react";
import { memo, useEffect, useState } from "react";

const Chart_ = ({ data }: { data: ScoreboardType }) => {
  const totalScores = {};

  return (
    <ECharts
      option={{
        title: {
          left: "center",
          text: "Top 10 Users",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          containLabel: true,
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            saveAsImage: {},
          },
        },
        legend: {
          type: "scroll",
          orient: "horizontal",
          align: "left",
          bottom: 35,
          data: Object.keys(data).map((k) => data[k].name),
        },
        xAxis: {
          type: "time",
        },
        yAxis: {
          type: "value",
        },
        dataZoom: [
          {
            id: "dataZoomX",
            type: "slider",
            xAxisIndex: [0],
            filterMode: "filter",
            height: 20,
            top: 35,
            fillerColor: "rgba(233, 236, 241, 0.4)",
          },
        ],
        series: Object.keys(data).map((k) => {
          return {
            name: data[k].name,
            type: "line",
            label: {
              normal: {
                position: "top",
              },
            },
            data: data[k].solves.map((solve) => {
              if (totalScores[k] === undefined) totalScores[k] = solve.value;
              else totalScores[k] += solve.value;

              return [solve.date, totalScores[k]];
            }),
          };
        }),
      }}
      opts={{ renderer: "svg", width: "auto", height: "auto" }}
    />
  );
};
const Chart = memo(Chart_);

const Scoreboard_ = ({ data }: { data: ScoreboardType }) => {
  return (
    <table className="table-auto text-center text-4xl">
      <thead>
        <tr>
          <th>Place</th>
          <th>User</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        {data &&
          Object.keys(data).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{data[key].name}</td>
              <td>{data[key].score}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
const Scoreboard = memo(Scoreboard_);

export default function ScoreboardPage() {
  const [scoreboard, setScoreboard] = useState<ScoreboardType>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getScoreboardData()
      .then(setScoreboard)
      .catch((e) => {
        console.error(e);
        setIsError(true);
      });
  }, []);

  if (isError) return <ErrorMsg message="Failed to get scoreboard" />;

  if (!scoreboard) return null;

  return (
    <EthconPageLayout>
      <div className="m-auto flex max-w-[140rem] flex-col gap-6 py-[6.8rem]">
        <div className="flex flex-col">
          <div className="max-h-1/3">
            <Chart data={scoreboard} />
          </div>

          <Scoreboard data={scoreboard} />
        </div>
      </div>
    </EthconPageLayout>
  );
}
