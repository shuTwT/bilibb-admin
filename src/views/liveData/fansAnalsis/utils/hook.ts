import { ref, reactive } from "vue";
import { useECharts } from "@pureadmin/utils";
import { computed } from "vue";
export function useFansAnalsis() {
  const fansTypeFilter = reactive({
    watch_num: false,
    big_r_num: false,
    live_fans: false,
    anchor_guard_num: true,
    pay_user: false
  });
  const chartRef = ref();
  const fakeData = [
    {
      left: "0:00",
      right: "1:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "1:00",
      right: "2:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "2:00",
      right: "3:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "3:00",
      right: "4:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "4:00",
      right: "5:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "5:00",
      right: "6:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "6:00",
      right: "7:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "7:00",
      right: "8:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "8:00",
      right: "9:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "9:00",
      right: "10:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "10:00",
      right: "11:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "11:00",
      right: "12:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "12:00",
      right: "13:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "13:00",
      right: "14:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "14:00",
      right: "15:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "15:00",
      right: "16:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "16:00",
      right: "17:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "17:00",
      right: "18:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "18:00",
      right: "19:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "19:00",
      right: "20:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "20:00",
      right: "21:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "21:00",
      right: "22:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "22:00",
      right: "23:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    },
    {
      left: "23:00",
      right: "24:00",
      watch_num: 0,
      big_r_num: 0,
      live_fans: 0,
      anchor_guard_num: 0,
      pay_user: 0
    }
  ];
  const watchNum = computed(() => fakeData.map(item => item.watch_num));
  const bigRNum = computed(() => fakeData.map(item => item.big_r_num));
  const liveFans = computed(() => fakeData.map(item => item.live_fans));
  const anchorGuardNum = computed(() =>
    fakeData.map(item => item.anchor_guard_num)
  );
  const payUser = computed(() => fakeData.map(item => item.pay_user));
  const { setOptions } = useECharts(chartRef);
  function renderEcharts(
    watchNumYData: number[],
    bigRNumYData: number[],
    liveFansYData: number[],
    anchorGuardNumYData: number[],
    payUserYData: number[]
  ) {
    setOptions({
      legend: {
        show: false,
        selected: {
          watchNum: fansTypeFilter.watch_num,
          bigRNum: fansTypeFilter.big_r_num,
          liveFans: fansTypeFilter.live_fans,
          anchorGuardNum: fansTypeFilter.anchor_guard_num,
          payUser: fansTypeFilter.pay_user
        }
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
          "23:00",
          "24:00"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "watchNum",
          data: watchNumYData,
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
          name: "bigRNum",
          data: bigRNumYData,
          type: "line",
          smooth: false,
          lineStyle: {
            color: "rgb(255, 127, 36)",
            width: 4
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "rgb(255, 127, 36)",
            color: "rgb(255, 127, 36)"
          }
        },
        {
          name: "liveFans",
          data: liveFansYData,
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
        },
        {
          name: "anchorGuardNum",
          data: anchorGuardNumYData,
          type: "line",
          smooth: false,
          lineStyle: {
            color: "rgb(42, 200, 100)",
            width: 4
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "rgb(42, 200, 100)",
            color: "rgb(42, 200, 100)"
          }
        },
        {
          name: "payUser",
          data: payUserYData,
          type: "line",
          smooth: false,
          lineStyle: {
            color: "rgb(255, 102, 153)",
            width: 4
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "rgb(255, 102, 153)",
            color: "rgb(255, 102, 153)"
          }
        }
      ]
    });
  }
  renderEcharts(
    watchNum.value,
    bigRNum.value,
    liveFans.value,
    anchorGuardNum.value,
    payUser.value
  );
  const onClickFansType = (type: string) => {
    fansTypeFilter[type] = !fansTypeFilter[type];
    renderEcharts(
      watchNum.value,
      bigRNum.value,
      liveFans.value,
      anchorGuardNum.value,
      payUser.value
    );
  };
  return {
    fansTypeFilter,
    onClickFansType,
    chartRef
  };
}
