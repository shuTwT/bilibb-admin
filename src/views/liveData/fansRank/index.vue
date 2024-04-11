<script setup lang="ts">
import { ref } from "vue";

type DataType = "income" | "watchTime" | "barrage";

const loading = ref(true);
const dataType = ref<DataType>("income");

const changeDataType = (type: DataType) => {
  loading.value = true;
  dataType.value = type;
  setTimeout(() => {
    loading.value = false;
  }, 500);
};

setTimeout(() => {
  loading.value = false;
}, 500);
</script>

<template>
  <div class="report-wrap">
    <div>
      <div role="heading" class="page-title">
        <span class="v-middle">贡献排行</span
        ><!----><!----><!---->
      </div>
      <div class="fans-rank-content">
        <header class="rank-header">
          <div class="rank-tabs">
            <div
              class="rank-tab"
              :class="{ current: dataType == 'income' }"
              @click="changeDataType('income')"
            >
              <div class="tab-content">电池贡献</div>
            </div>
            <div
              class="rank-tab"
              :class="{ current: dataType == 'watchTime' }"
              @click="changeDataType('watchTime')"
            >
              <div class="tab-content">观看时长</div>
            </div>
            <div
              class="rank-tab"
              :class="{ current: dataType == 'barrage' }"
              @click="changeDataType('barrage')"
            >
              <div class="tab-content">弹幕数量</div>
            </div>
          </div>
          <div class="select-bar">
            <div>
              <div class="item">
                <span>时间选择</span>
                <div class="seperator" />
                <div class="selector">
                  <span>七日排行</span
                  ><i class="select-icon icon-font icon-arrow-down" />
                  <ul class="options-box" style="display: none">
                    <li class="option">日排行</li>
                    <li class="option active">七日排行</li>
                    <li class="option">月排行</li>
                  </ul>
                </div>
                <div
                  class="el-date-editor rank-date-picker el-input el-date-editor--month"
                  style="display: none"
                >
                  <!----><i class="el-input__icon el-icon-date" /><input
                    autocomplete="off"
                    placeholder="选择月"
                    type="text"
                    rows="2"
                    class="el-input__inner"
                  /><!----><!---->
                </div>
              </div>
              <div class="tip" style="display: none">
                统计周期： 每日12:00更新前一日数据
              </div>
            </div>
          </div>
        </header>
        <div v-if="loading" data-v-05727fa6="" class="link-progress-tv">
          <div class="text" />
        </div>
        <div v-else>
          <div class="no-data" />
          <div class="no-data-msg" />
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

.fans-rank-content {
  padding-bottom: 20px;
  background: #fff;
  border: 1px solid #e9eaec;
  border-radius: 12px;
}

.rank-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0 32px;

  .rank-tabs {
    display: flex;

    .rank-tab {
      margin-right: 40px;
      font-size: 16px;
      color: #61666d;
      cursor: pointer;
    }

    .rank-tab.current {
      color: #00aeec;
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

    .tip {
      margin-left: 20px;
    }
  }
}

.link-progress-tv {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  background-image: url("//s1.hdslb.com/bfs/static/blive/blfe-link-center/static/img/pic.loading-tv.e11a9bf.gif");
  background-repeat: no-repeat;
  background-position: center center;

  .text {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: 50px;
    font-size: 13px;
    text-align: center;
  }
}

.no-data {
  height: 350px;
  margin: 20px auto;
  background: url("//s1.hdslb.com/bfs/static/blive/blfe-link-center/static/img/2.273d197.png")
    no-repeat center top #fff;
  border-radius: 12px;
}

.no-data-msg {
  width: 600px;
  margin: auto;
  color: #ff6c6c;
  text-align: center;
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

.report-wrap:has(.link-progress-tv) {
  position: relative;
  height: 100%;
}
</style>
