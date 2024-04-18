import { onMounted, reactive, ref } from "vue";
import { useECharts } from "@pureadmin/utils";

export function useLargeScreen() {
  const isLoaded = ref(false);
  const chart1Ref = ref();
  const chart2Ref = ref();
  const chart3Ref = ref();
  const chart1Option = reactive({});
  const chart2Option = reactive({});
  const chart3Option = reactive({});
  const largeScreenData = reactive({
    Room: {
      id: 1,
      roomId: "",
      roomOwnerUid: "",
      description: "",
      parentAreaName: "",
      title: "",
      userCover: "",
      keyframe: "",
      tags: "",
      areaName: ""
    },
    todayData: {
      comment: "今日数据",
      newEntryNum: 228,
      entryNum: 2000,
      spekNum: 2000,
      entryNumfor7day: {
        entryNum: [0, 0, 0, 0, 0, 0, 0],
        newEntryNum: [0, 0, 0, 0, 0, 0, 0]
      },
      speakNumfor7day: {
        speakNum: [0, 0, 0, 0, 0, 0, 0],
        speakPeopleNum: [0, 0, 0, 0, 0, 0, 0]
      }
    }
  });

  const { setOptions: setOptions1 } = useECharts(chart1Ref);
  const { setOptions: setOptions2 } = useECharts(chart2Ref);
  const { setOptions: setOptions3 } = useECharts(chart3Ref);

  function renderCharts() {
    setOptions1({
      legend: {
        show: false
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        }
      },
      xAxis: {
        type: "category",
        data: [
          "0:00",
          "1:00",
          "2:00",
          "3:00",
          "4:00",
          "5:00",
          "6:00",
          "7:00",
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "新增关注",
          data: new Array(24).fill(0),
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
        },
        {
          name: "加入粉丝团人数",
          data: new Array(24).fill(0),
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
        },
        {
          name: "发送弹幕",
          data: new Array(24).fill(0),
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
      legend: {
        show: false
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        }
      },
      xAxis: {
        type: "category",
        data: [
          "0:00",
          "1:00",
          "2:00",
          "3:00",
          "4:00",
          "5:00",
          "6:00",
          "7:00",
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "在线人数",
          data: new Array(24).fill(0),
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
        },
        {
          name: "进房人数",
          data: new Array(24).fill(0),
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
        },
        {
          name: "离开人数",
          data: new Array(24).fill(0),
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
    setOptions3({
      legend: {
        show: false
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        }
      },
      xAxis: {
        type: "category",
        data: [
          "0:00",
          "1:00",
          "2:00",
          "3:00",
          "4:00",
          "5:00",
          "6:00",
          "7:00",
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "直播推荐",
          data: new Array(24).fill(0),
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
        },
        {
          name: "短视频引流",
          data: new Array(24).fill(0),
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
        },
        {
          name: "分享",
          data: new Array(24).fill(0),
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

  onMounted(() => {
    setTimeout(() => {
      isLoaded.value = true;
      renderCharts();
    }, 2000);
  });
  return {
    isLoaded,
    chart1Ref,
    chart2Ref,
    chart3Ref,
    chart1Option,
    chart2Option,
    chart3Option,
    largeScreenData
  };
}
