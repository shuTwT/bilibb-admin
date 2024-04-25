<script setup lang="ts">
import { useFansAnalsis } from "./utils/hook";
const {
  fansTypeFilter,
  onClickFansType,
  chartRef,
  selectOpen1,
  selectValue1,
  selectChange1,
  selectOpen2,
  selectValue2,
  selectChange2
} = useFansAnalsis();
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
                <span @click="selectOpen1 = !selectOpen1">{{
                  selectValue1
                }}</span
                ><i
                  class="select-icon icon-font"
                  :class="{
                    'icon-arrow-up': selectOpen1,
                    'icon-arrow-down': !selectOpen1
                  }"
                  @click="selectOpen1 = !selectOpen1"
                />
                <ul
                  class="options-box"
                  :style="selectOpen1 ? '' : `display:none;`"
                >
                  <li
                    class="option"
                    :class="{ active: selectValue1 == '近7日' }"
                    @click="selectChange1('近7日')"
                  >
                    近7日
                  </li>
                  <li
                    class="option"
                    :class="{ active: selectValue1 == '近30日' }"
                    @click="selectChange1('近30日')"
                  >
                    近30日
                  </li>
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
      <div class="fans-source-anlysis-content">
        <header class="fans-header">
          <div class="title-info">
            <div class="title">粉丝来源</div>
          </div>
          <div class="select-bar">
            <div class="item">
              <span>时间选择</span>
              <div class="seperator" />
              <div class="selector">
                <span @click="selectOpen2 = !selectOpen2">{{
                  selectValue2
                }}</span
                ><i
                  class="select-icon icon-font"
                  :class="{
                    'icon-arrow-up': selectOpen2,
                    'icon-arrow-down': !selectOpen2
                  }"
                  @click="selectOpen2 = !selectOpen2"
                />
                <ul
                  class="options-box"
                  :style="selectOpen2 ? '' : `display:none;`"
                >
                  <li
                    class="option"
                    :class="{ active: selectValue2 == '近7日' }"
                    @click="selectChange2('近7日')"
                  >
                    近7日
                  </li>
                  <li
                    class="option"
                    :class="{ active: selectValue2 == '近30日' }"
                    @click="selectChange2('近30日')"
                  >
                    近30日
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div class="empty-info">暂无数据</div>
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

.fans-analysis-content,
.fans-source-anlysis-content {
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

.fans-source-anlysis-content {
  padding: 29px 22px 75px 31px;
  margin-top: 18px;
  background: #fff;
  border-radius: 12px;

  .empty-info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 266px;
    font-size: 16px;
    color: #9499a0;
    border: 1px solid #e9eaec;
    border-radius: 12px;
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

    .option:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
