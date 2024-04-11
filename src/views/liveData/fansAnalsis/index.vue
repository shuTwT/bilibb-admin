<script setup lang="ts">
import { ref, reactive } from "vue";
import { useECharts } from "@pureadmin/utils";
import { computed } from "vue";
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
</script>

<template>
  <div class="report-wrap">
    <div class="fans-analysis">
      <div role="heading" class="page-title">
        <span class="v-middle">粉丝分析</span>
      </div>
      <div class="fans-analysis-content">
        <header class="fans-header">
          <div class="title-info">
            <div class="title">粉丝活跃分布</div>
            <div class="subtitle">基于用户在直播平台的活跃数据统计</div>
            <i class="icon-font icon-question" data-popover-uid="12" />
          </div>
          <div class="select-bar">
            <div class="item">
              <span>时间选择</span>
              <div class="seperator" />
              <div class="selector">
                <span>近7日</span
                ><i class="select-icon icon-font icon-arrow-down" />
                <ul class="options-box" style="display: none">
                  <li class="option active">近7日</li>
                  <li class="option">近30日</li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div class="fans-analysis-wrap">
          <div class="tab-wrapper">
            <div
              class="tab"
              :class="{ active: fansTypeFilter.live_fans }"
              @click="onClickFansType('live_fans')"
            >
              <div class="label">关注粉丝</div>
            </div>
            <div
              class="tab"
              :class="{ active: fansTypeFilter.pay_user }"
              @click="onClickFansType('pay_user')"
            >
              <div class="label">付费粉丝</div>
            </div>
            <div
              class="tab"
              :class="{ active: fansTypeFilter.big_r_num }"
              @click="onClickFansType('big_r_num')"
            >
              <div class="label">大R粉丝</div>
            </div>
            <div
              class="tab"
              :class="{ active: fansTypeFilter.anchor_guard_num }"
              @click="onClickFansType('anchor_guard_num')"
            >
              <div class="label">大航海粉丝</div>
            </div>
            <div
              class="tab"
              :class="{ active: fansTypeFilter.watch_num }"
              @click="onClickFansType('watch_num')"
            >
              <div class="label">看过直播的用户</div>
            </div>
          </div>
          <div class="chart-wrap">
            <div class="header">
              <div class="title">用户活跃时间</div>
              <div class="subtitle">更新于2024-04-08</div>
            </div>
            <div ref="chartRef" style="height: 300px" />
            <div class="bottom-tips">
              <div v-if="fansTypeFilter.anchor_guard_num" class="type">
                <div class="dot" style="background-color: rgb(0 174 236)" />
                关注粉丝
              </div>
              <div v-if="fansTypeFilter.pay_user" class="type">
                <div class="dot" style="background-color: rgb(255 102 153)" />
                付费粉丝
              </div>
              <div v-if="fansTypeFilter.big_r_num" class="type">
                <div class="dot" style="background-color: rgb(255 127 36)" />
                大R粉丝
              </div>
              <div v-if="fansTypeFilter.live_fans" class="type">
                <div class="dot" style="background-color: rgb(42 200 100)" />
                大航海粉丝
              </div>
              <div v-if="fansTypeFilter.watch_num" class="type">
                <div class="dot" style="background-color: rgb(172 109 255)" />
                看过直播的用户
              </div>
              <div class="live">你的开播时段</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-title {
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: normal;
  color: #333;
}

.v-middle {
  vertical-align: middle;
}

.fans-analysis-content {
  padding-bottom: 20px;
  background: #fff;
  border: 1px solid #e9eaec;
  border-radius: 12px;

  .fans-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    padding: 0 32px;

    .title-info {
      display: inline-flex;
      gap: 8px;
      align-items: center;

      .title {
        font-size: 18px;
        color: #18191c;
      }

      .subtitle {
        font-size: 12px;
        color: #999;
      }
    }

    .select-bar {
      display: inline-flex;
      align-items: center;

      .item {
        display: inline-flex;
        align-items: center;
        margin-left: 20px;
        color: #61666d;

        .seperator {
          width: 1px;
          height: 10px;
          margin: 0 10px;
          background: #c9ccd0;
        }
      }
    }
  }

  .fans-analysis-wrap {
    padding: 0 32px;

    .tab-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      align-content: flex-start;
      align-items: flex-start;
      padding: 6px 0;
      padding-bottom: 24px;

      .tab {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 160px;
        height: 39px;
        font-size: 12px;
        color: rgb(97 102 109 / 80%);
        cursor: pointer;
        background: #f6f7f8;
        border-radius: 8px;
      }

      .tab.active {
        font-weight: 500;
        color: #fff;
        background-color: #00aeec;
      }

      .tab:hover:not(.active) {
        background-color: #ecf6fd;
      }
    }

    .chart-wrap .header {
      display: inline-flexbox;
      display: inline-flex;
      gap: 8px;
      align-items: center;
      -ms-flex-align: center;

      .title {
        font-size: 14px;
        color: #000;
      }

      .subtitle {
        font-size: 12px;
        color: #999;
      }
    }

    .chart-wrap .bottom-tips {
      display: flexbox;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      font-size: 12px;
      color: #999;

      .type {
        display: inline-flex;
        align-items: center;
        margin-right: 16px;

        .dot {
          width: 8px;
          height: 8px;
          margin-right: 6px;
          border-radius: 50%;
        }
      }

      .live::before {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 6px;
        content: "";
        background-color: #c8cbcf;
        border-radius: 50%;
      }
    }
  }
}

.selector {
  position: relative;
  display: flexbox;
  display: flex;
  align-items: center;
  cursor: pointer;
  -ms-flex-align: center;

  .options-box {
    position: absolute;
    right: 0;
    bottom: -5px;
    z-index: 100;
    list-style-type: none;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(100%);

    .option {
      padding: 10px 20px;
      text-align: right;
      white-space: nowrap;
    }

    .option.active {
      color: #00aeec;
    }
  }
}
</style>
