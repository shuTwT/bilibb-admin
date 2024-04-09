<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";

const form = reactive({
  coin_type: "0",
  gift_id: "",
  uname: "",
  begin_time: ""
});
</script>

<template>
  <div class="my-room-gift-list">
    <div class="a-move-in-left">
      <div role="heading" class="page-title">
        <span class="v-middle">直播收益</span
        ><!----><!----><!----><span class="dp-i-block v-bottom hint"
          >可查询直播间内收到的礼物详情以及大航海登陆详情，该数据展示仅为道具收益，最终收益将会结合运营奖惩进行结算。</span
        ><span class="dp-i-block v-bottom hint gift-des"
          >若您是公会主播，您收到的礼物道具“星钻徽章”、“时空晶体”、“探月车”、“时空隧道”、“时空旅人”将会正常进行收益分成，但不计入公会奖励，详情请咨询您的公会。</span
        >
      </div>
      <div class="section-block with-radius with-padding">
        <div class="select-bar">
          <div class="item type">
            <span class="hint">分类</span>
            <el-select v-model="form.coin_type" style="width: 108px">
              <el-option label="全部道具" value="0" />
              <el-option label="电池道具" value="1" />
              <el-option label="银瓜子道具" value="2" />
            </el-select>
          </div>
          <div class="item gift">
            <span class="hint">类型</span>
            <el-select v-model="form.gift_id" style="width: 130px">
              <el-option label="所有历史道具" value="" />
            </el-select>
          </div>
          <div class="item time">
            <span class="hint">时间选择</span>
            <el-date-picker v-model="form.begin_time" type="date" />
          </div>
          <div class="item nickName">
            <el-input
              v-model="form.uname"
              placeholder="请输入用户昵称"
              style="width: 136px"
            />
          </div>
          <el-button type="primary">搜索</el-button>
        </div>
        <div class="list-cntr">
          <p class="gift-desc" style="display: none">
            <span>您搜索的 2024 年 04 月 09 日 的</span
            ><span class="gift">全部道具</span><span>的</span
            ><span class="gift">所有历史道具</span
            ><span>个人税前收益金仓鼠总数为</span><span class="income">0</span>
          </p>
        </div>
        <div class="progress-tv-ctnr loading">
          <div
            role="progress"
            class="progress-tv w-100 h-100 p-absolute p-zero"
            style=" display: none;background-color: rgb(255 255 255)"
          >
            <div class="progress-img bg-no-repeat bg-center p-center" />
          </div>
        </div>
        <div class="content-wrapper">
          <div class="no-data">
            <img
              src="//s1.hdslb.com/bfs/static/blive/blfe-link-center/static/img/no-data.42ab6cc.png"
            />
            <div class="tips">
              <p>辛勤直播才会有收获哦～</p>
              <p>请选择查询条件进行查询</p>
            </div>
          </div>
        </div>
        <div class="list-pagination" style="display: none">
          <button class="page-button-pre" style="display: none">上一页</button
          ><button class="page-button-next" style="display: none">
            下一页
          </button>
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

.v-bottom {
  vertical-align: bottom;
}

.dp-i-block {
  display: inline-block;
}

.my-room-gift-list {
  .hint {
    margin-left: 12px;
    font-size: 14px;
    color: #9b9b9b;
    white-space: nowrap;
  }

  .hint.gift-des {
    margin-left: 108px;
  }

  .section-block {
    position: relative;
    min-height: 500px;
  }

  .list-pagination {
    margin-top: 20px;
    text-align: center;
  }

  .select-bar {
    .item {
      display: inline-block;

      .hint {
        margin-right: 10px;
        margin-left: 0;
        font-size: 14px;
        color: #9b9b9b;
      }

      .item.nickName .live-btn {
        width: 52px;
        min-width: 52px;
        margin-left: 10px;
        font-size: 12px;
      }

      .selector {
        display: inline-block;
        vertical-align: middle;
      }
    }

    .item:not(:last-child) {
      margin-right: 30px;
    }
  }

  .no-data {
    margin-top: 130px;
    text-align: center;

    .tips {
      margin-top: 30px;
      color: #999;
    }
  }
}

.selector {
  position: relative;
  z-index: 99;
  width: 100px;
  height: 32px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #e3e8ec;
  border-radius: 4px;

  .current {
    height: 32px;
    padding-left: 8px;
    line-height: 32px;
    color: #646c7a;
  }

  .triangle {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
  }

  .data-list {
    position: absolute;
    top: 32px;
    left: -1px;
    z-index: 10;
    width: 100px;
    max-height: 160px;
    overflow-y: auto;
    background: #fff;
    border: 1px solid #ddd;
    border-top: 0;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 1px 2px 0 rgb(105 115 133 / 22%);

    > li[data-v-dcefeb74] {
      padding: 10px 0 10px 8px;
      color: #999;
    }
  }
}

.section-block {
  margin-bottom: 12px;
  background-color: #fff;
}

.section-block.with-radius {
  border: 1px solid #e9eaec;
  border-radius: 12px;
}

.section-block.with-padding {
  padding: 24px;
}

.bl-button {
  position: relative;
  box-sizing: border-box;
  display: inline-flexbox;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  margin: 0;
  overflow: hidden;
  line-height: 1;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: none;
  -ms-flex-pack: center;
  -ms-flex-align: center;
}

.bl-button--primary {
  color: #fff;
  background-color: #23ade5;
  border-radius: 4px;
}

.bl-button--size {
  min-width: 104px;
  height: 32px;
  font-size: 14px;
}

.live-btn.default {
  color: #fff;
  background: #4fc1e9;
}
</style>
