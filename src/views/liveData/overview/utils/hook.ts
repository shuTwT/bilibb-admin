import { computed, reactive, ref } from "vue";
import { useECharts } from "@pureadmin/utils";

type DataType =
  | "income"
  | "broadcast"
  | "fans"
  | "watchedCount"
  | "barrage"
  | "watchTime";
const dataTypeNames = {
  income: "收益",
  broadcast: "直播时长",
  fans: "新增粉丝",
  watchedCount: "累计观看",
  barrage: "弹幕数",
  watchTime: "累计有效观看时长"
};

const coreDataList = {
  income: [0, 0, 0, 0, 0, 0, 0],
  broadcast: [0, 0, 0, 0, 0, 0, 0],
  fans: [0, 0, 0, 0, 0, 0, 0],
  watchedCount: [0, 0, 0, 0, 0, 0, 0],
  barrage: [0, 0, 0, 0, 0, 0, 0],
  watchTime: [0, 0, 0, 0, 0, 0, 0]
};

const indicator = [
  {
    name: "收益",
    max: 100
  },
  {
    name: "弹幕数量",
    max: 100
  },
  {
    name: "开播时长",
    max: 100
  },
  {
    name: "用户平均观看时长",
    max: 100
  },
  {
    name: "新增粉丝",
    max: 100
  },
  {
    name: "累计观看",
    max: 100
  }
];
export function useOverview() {
  const selectOpen = ref(false);
  const selectValue = ref("今日");
  const chartRef2 = ref();
  const dataType = ref<DataType>("income");
  const dataTypeName = computed(() => dataTypeNames[dataType.value]);
  const option = reactive({
    radar: {
      indicator: indicator,
      polygon: true
    },
    series: [
      {
        type: "radar",
        name: "你的直播",
        radarStyle: {
          stroke: "rgba(251, 114, 153,0.8)",
          fill: "rgba(251, 114, 153,0.8)"
        },
        label: {
          show: false
        },
        data: [0, 0, 0, 0, 0, 0]
      },
      {
        type: "radar",
        name: "同水平主播",
        radarStyle: {
          stroke: "rgba(35, 173, 229,0.8)",
          fill: "rgba(35, 173, 229,0.8)"
        },
        label: {
          show: false
        },
        data: [0, 0, 0, 0, 0, 0]
      }
    ]
  });

  const { setOptions } = useECharts(chartRef2);

  function renderEcharts(
    seriesName: string,
    xAxisData: string[],
    data: number[]
  ) {
    setOptions({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        }
      },
      xAxis: {
        type: "category",
        data: xAxisData
      },
      yAxis: {
        type: "value",
        interval: 0.2
      },
      series: [
        {
          name: seriesName,
          data: data,
          type: "line",
          smooth: false,
          lineStyle: {
            color: "#00aeec",
            width: 4
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "#00aeec",
            color: "#00aeec"
          }
        }
      ]
    });
  }

  const changeType = (type: DataType) => {
    dataType.value = type;
    renderEcharts(
      dataTypeNames[dataType.value],
      [
        "2024/4/10",
        "2024/4/11",
        "2024/4/12",
        "2024/4/13",
        "2024/4/14",
        "2024/4/15",
        "2024/4/16"
      ],
      coreDataList[dataType.value]
    );
  };

  function selectChange(value: string) {
    selectValue.value = value;
    selectOpen.value = false;
  }

  return {
    option,
    changeType,
    dataType,
    dataTypeName,
    chartRef2,
    selectOpen,
    selectChange,
    selectValue
  };
}
