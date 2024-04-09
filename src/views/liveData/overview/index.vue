<script setup lang="ts"></script>

<template>
  <div class="report-wrap">
    <div class="data-overview">
      <div role="heading" class="page-title">
        <span class="v-middle">数据总览</span
        ><!----><!----><!---->
      </div>
      <div class="card-wrapper">
        <div class="header">
          <div class="left">
            <div class="title">直播表现</div>
            <i class="icon-font icon-question" data-popover-uid="10" />
          </div>
          <div class="right" />
        </div>
        <div class="live-performance">
          <div
            class="radar-chart radar-chart-wrap"
            data-v-515806d8=""
            _echarts_instance_="ec_1712648352453"
            style="
              position: relative;
              user-select: none;
              -webkit-tap-highlight-color: transparent;
            "
          >
            <div
              style="
                position: relative;
                width: 325px;
                height: 300px;
                padding: 0;
                margin: 0;
                border-width: 0;
              "
            >
              <canvas
                data-zr-dom-id="zr_0"
                width="487"
                height="450"
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 325px;
                  height: 300px;
                  padding: 0;
                  margin: 0;
                  user-select: none;
                  border-width: 0;
                  -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
                "
              />
            </div>
            <div />
          </div>
          <div class="right">
            <div class="legend">
              <div class="legend-item">
                <div class="dot" style="background-color: rgb(251 114 153)" />
                <div class="name">你的直播</div>
                <div class="seperator" />
                <div class="desc">统计你的直播表现数据</div>
              </div>
              <div class="legend-item">
                <div class="dot" style="background-color: rgb(35 173 229)" />
                <div class="name">同水平主播</div>
                <div class="seperator" />
                <div class="desc">统计同水平主播直播表现数据</div>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="card-wrapper core-data">
        <div class="header">
          <div class="left">
            <div class="title">核心数据</div>
            <!---->
          </div>
          <div class="right">
            <div class="extra-wrap">
              <span>时间选择</span>
              <div class="seperator" />
              <div class="selector">
                <span>近七日</span
                ><i class="select-icon icon-font icon-arrow-down" />
                <ul class="options-box" style="display: none">
                  <li class="option">今日</li>
                  <li class="option active">近七日</li>
                  <li class="option">近30日</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="report-wrap">
            <div class="core-data-wrap">
              <div class="data-card-wrap">
                <div class="data-card active">
                  <div class="name">收益</div>
                  <div class="value">
                    <span class="num">0</span><span class="unit">元</span>
                  </div>
                </div>
                <div class="data-card">
                  <div class="name">直播时长</div>
                  <div class="value">
                    <span class="num">0</span><span class="unit" />
                  </div>
                </div>
                <div class="data-card">
                  <div class="name">新增粉丝</div>
                  <div class="value">
                    <span class="num">0</span><span class="unit">人</span>
                  </div>
                </div>
                <div class="data-card">
                  <div class="name">累计观看</div>
                  <div class="value">
                    <span class="num">0</span><span class="unit" />
                  </div>
                </div>
                <div class="data-card">
                  <div class="name">弹幕数</div>
                  <div class="value">
                    <span class="num">0</span><span class="unit" />
                  </div>
                </div>
                <div class="data-card">
                  <div class="name">累计有效观看时长</div>
                  <div class="value">
                    <span class="num">0</span><span class="unit" />
                  </div>
                </div>
              </div>
              <!---->
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper fans-rank">
        <div class="header">
          <div class="left">
            <div class="title">近七日粉丝贡献排行</div>
            <!---->
          </div>
          <div class="right" />
        </div>
        <div class="report-wrap">
          <div>
            <div class="fans-rank">
              <div class="rank-wrap">
                <div class="rank-item">
                  <div class="rank-title">电池贡献</div>
                  <div class="no-data">暂无数据</div>
                </div>
                <div class="rank-item">
                  <div class="rank-title">弹幕数量</div>
                  <div class="no-data">暂无数据</div>
                </div>
                <div class="rank-item">
                  <div class="rank-title">观看时长</div>
                  <div class="no-data">暂无数据</div>
                </div>
              </div>
              <div class="show-more">展开查看全部</div>
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

.card-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  border: 1px solid #e9eaec;
  border-radius: 12px;
}

.card-wrapper .header {
  display: flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .left {
    display: inline-flex;
    align-items: center;

    .title {
      margin-right: 4px;
      font-size: 18px;
      color: #18191c;
    }
  }

  .right {
    color: #999;
  }
}

.live-performance {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .radar-chart-wrap {
    flex-basis: 325px;
  }
}

.radar-chart {
  width: 100%;
  height: 300px;
}

.legend .legend-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
  font-size: 14px;

  .dot {
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
  }

  .name {
    width: 70px;
  }

  .seperator {
    width: 1px;
    height: 12px;
    margin: 0 8px;
    background: #d9d9d9;
  }

  .desc {
    color: #999;
  }
}

.data-card-wrap {
  display: flexbox;
  display: flex;
  margin-top: 24px;

  .data-card {
    box-sizing: border-box;
    min-width: 130px;
    height: 75px;
    padding: 12px 20px;
    margin-right: 15px;
    white-space: nowrap;
    cursor: pointer;
    background-color: #f6f7f8;
    border-radius: 8px;

    .name {
      font-size: 12px;
      color: #61666d;
      white-space: nowrap;
      opacity: 0.8;
    }

    .value {
      display: flexbox;
      display: flex;
      align-items: center;
      margin: 12px 0;
      -ms-flex-align: center;

      .num {
        font-size: 20px;
        color: #18191c;
      }

      .unit {
        margin-left: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }

  .data-card.active {
    background-color: #00aeec;

    .value .num,
    .value .unit {
      color: #fff;
    }
  }

  .data-card:hover:not(.active) {
    background-color: rgb(35 173 229 / 10%);
  }
}

.core-data .extra-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 4px;
  color: #61666d;
  text-align: right;

  .seperator {
    width: 1px;
    height: 10px;
    margin: 0 10px;
    background-color: #c9ccd0;
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
  }
}

.rank-wrap {
  display: flexbox;
  display: flex;
  justify-content: space-between;
  margin-top: 28px;

  .rank-item {
    flex: 1;
    padding: 24px 15px 24px 24px;
    margin-right: 10px;
    border: 1px solid #f1f2f3;
    border-radius: 8px;

    .rank-title {
      font-size: 14px;
      color: #18191c;
    }

    .no-data {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: 100px;
      font-size: 16px;
      color: #999;
    }
  }
}

.show-more {
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  margin-top: 12px;
  font-size: 14px;
  line-height: 48px;
  color: #61666d;
  text-align: center;
  cursor: pointer;
  border: 1px solid #f1f2f3;
  border-radius: 8px;
}
</style>
