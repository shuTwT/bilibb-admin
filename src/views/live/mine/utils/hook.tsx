import { ref } from "vue";
import { useECharts } from "@pureadmin/utils";
type FilterType = "近7天" | "近3周" | "近3月" | "近6月" | "近12月";
export function useMine() {
  const chart1Ref = ref();
  const chart2Ref = ref();
  const filterType = ref<FilterType>("近7天");

  const { setOptions: setOptions1 } = useECharts(chart1Ref);
  const { setOptions: setOptions2 } = useECharts(chart2Ref);
  function renderEcharts(
    xAxis1Data: string[],
    data1: number[],
    xAxis2Data: string[],
    data2: number[]
  ) {
    setOptions1({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        }
      },
      xAxis: {
        type: "category",
        data: xAxis1Data
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "新进房量",
          data: data1,
          type: "line",
          smooth: false,
          lineStyle: {
            color: "rgb(172, 109, 255)",
            width: 4
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "rgb(172, 109, 255)",
            color: "rgb(172, 109, 255)"
          }
        }
      ]
    });
    setOptions2({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        }
      },
      xAxis: {
        type: "category",
        data: xAxis2Data
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "弹幕数量",
          data: data2,
          type: "line",
          smooth: false,
          lineStyle: {
            color: "rgb(172, 109, 255)",
            width: 4
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "rgb(172, 109, 255)",
            color: "rgb(172, 109, 255)"
          }
        }
      ]
    });
  }
  renderEcharts(
    [
      "2024-04-10",
      "2024-04-11",
      "2024-04-12",
      "2024-04-13",
      "2024-04-14",
      "2024-04-15",
      "2024-04-16"
    ],
    [0, 0, 0, 0, 0, 0, 0],
    [
      "2024-04-10",
      "2024-04-11",
      "2024-04-12",
      "2024-04-13",
      "2024-04-14",
      "2024-04-15",
      "2024-04-16"
    ],
    [0, 0, 0, 0, 0, 0, 0]
  );
  function changeFilter(type: FilterType) {
    filterType.value = type;
    renderEcharts(
      [
        "2024-04-10",
        "2024-04-11",
        "2024-04-12",
        "2024-04-13",
        "2024-04-14",
        "2024-04-15",
        "2024-04-16"
      ],
      [0, 0, 0, 0, 0, 0, 0],
      [
        "2024-04-10",
        "2024-04-11",
        "2024-04-12",
        "2024-04-13",
        "2024-04-14",
        "2024-04-15",
        "2024-04-16"
      ],
      [0, 0, 0, 0, 0, 0, 0]
    );
  }
  return {
    chart1Ref,
    chart2Ref,
    filterType,
    changeFilter
  };
}
