<script setup lang="ts">
const option = {
  xAxis: {
    type: "category",
    date: [
      "0:00",
      "2:00",
      "4:00",
      "6:00",
      "8:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
      "24:00"
    ]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      type: "line",
      smooth: false
    }
  ]
};
</script>

<template>
  <div class="report-wrap">
    <div class="fans-analysis">
      <div role="heading" class="page-title">
        <span class="v-middle">粉丝分析</span
        ><!----><!----><!---->
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
            <div class="tab active">
              <div class="label">关注粉丝</div>
            </div>
            <div class="tab">
              <div class="label">付费粉丝</div>
            </div>
            <div class="tab">
              <div class="label">大R粉丝</div>
            </div>
            <div class="tab">
              <div class="label">大航海粉丝</div>
            </div>
            <div class="tab">
              <div class="label">看过直播的用户</div>
            </div>
          </div>
          <div class="chart-wrap">
            <div class="header">
              <div class="title">用户活跃时间</div>
              <div class="subtitle">更新于2024-04-08</div>
            </div>
            <div
              class="live-data-line-chart"
              tooltip-label="关注粉丝"
              _echarts_instance_="ec_1712648352454"
              style="
                position: relative;
                user-select: none;
                -webkit-tap-highlight-color: transparent;
              "
            >
              <div
                style="
                  position: relative;
                  width: 873px;
                  height: 300px;
                  padding: 0;
                  margin: 0;
                  cursor: default;
                  border-width: 0;
                "
              >
                <canvas
                  data-zr-dom-id="zr_0"
                  width="1309"
                  height="450"
                  style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 873px;
                    height: 300px;
                    padding: 0;
                    margin: 0;
                    user-select: none;
                    border-width: 0;
                    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
                  "
                />
              </div>
              <div
                style="
                  position: absolute;
                  display: none;
                  border-style: solid;
                  white-space: nowrap;
                  z-index: 9999999;
                  transition:
                    left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s,
                    top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
                  background-color: rgb(255, 255, 255);
                  border-width: 0px;
                  border-color: rgb(51, 51, 51);
                  border-radius: 4px;
                  font: 12px / 21px &quot;Microsoft YaHei&quot;;
                  padding: 8px 12px;
                  left: 302px;
                  top: 155px;
                  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 16px 0px;
                  color: rgb(97, 102, 109);
                  pointer-events: none;
                "
              >
                <div class="tooltip" style="font-size: 12px">
                  <div
                    class="title"
                    style="
                      display: flex;
                      flex-direction: row;
                      margin-bottom: 6px;
                    "
                  >
                    <div
                      class="tooltip-date"
                      style="font-weight: bold; color: #61666d"
                    >
                      6:00-7:00
                    </div>
                  </div>
                  <div style="color: #61666d">
                    <span
                      style="
                        display: inline-block;
                        width: 6px;
                        height: 6px;
                        margin-right: 5px;
                        background-color: #00aeec;
                        border-radius: 6px;
                      "
                    />关注粉丝: 0
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-tips">
              <div class="type">
                <div class="dot" style="background-color: rgb(0 174 236)" />
                关注粉丝
              </div>
              <!----><!----><!----><!---->
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
