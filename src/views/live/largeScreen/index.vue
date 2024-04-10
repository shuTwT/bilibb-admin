<script setup lang="ts">
//@ts-ignore
import bili_favicon from "@/assets/bili-favicon.png";
import autoFit from "autofit.js";
import {
  BorderBox1,
  BorderBox8,
  Decoration5,
  Loading,
  ScrollRankingBoard,
  ActiveRingChart,
  Charts
} from "@kjgl77/datav-vue3";
import { useDark } from "@pureadmin/utils";
import { ref, onBeforeMount, onBeforeUnmount, onMounted } from "vue";
import { refreshLargeScreenData } from "@/api/live";
import { reactive } from "vue";

const { isDark, toggleDark } = useDark();
const dropdownList1 = ref([]);
const isComp1Loaded = ref(false);
const isComp2Loaded = ref(false);
const isComp3Loaded = ref(false);
const isComp4Loaded = ref(false);
const isComp5Loaded = ref(false);
const isComp6Loaded = ref(false);
const rankingBoardConfig = reactive({
  data: [
    {
      name: "周口",
      value: 55
    },
    {
      name: "南阳",
      value: 120
    },
    {
      name: "西峡",
      value: 78
    },
    {
      name: "驻马店",
      value: 66
    },
    {
      name: "新乡",
      value: 80
    },
    {
      name: "信阳",
      value: 45
    },
    {
      name: "漯河",
      value: 29
    }
  ],
  unit: "万元"
});
const ActiveRingChartConfig = reactive({
  lineWidth: 48,
  radius: "60%",
  activeRadius: "65%",
  digitalFlopStyle: {
    fill: "pink"
  },
  data: [
    {
      name: "男",
      value: 98
    },
    {
      name: "女",
      value: 150
    },
    {
      name: "未知",
      value: 62
    }
  ]
});
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
const chart1Option = reactive({});
const chart2Option = reactive({});
const chart3Option = reactive({});
let pollTimer = null;

const onTick = () => {
  pollTimer = setTimeout(() => {
    polling();
  }, 10000);
};

const polling = () => {
  refreshLargeScreenData()
    .then(res => {
      largeScreenData.Room = res.data.Room;
      largeScreenData.todayData = res.data.todayData;
      onTick();
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {});
};
polling();

onBeforeMount(() => {
  if (!isDark.value) {
    toggleDark();
  }

  autoFit.init({
    dh: 1080,
    dw: 1920,
    el: "#app",
    resize: true
  });
});

onMounted(() => {
  setTimeout(() => {
    isComp1Loaded.value = true;
    isComp2Loaded.value = true;
    isComp3Loaded.value = true;
    isComp4Loaded.value = true;
    isComp5Loaded.value = true;
    isComp6Loaded.value = true;
  }, 2000);
});
onBeforeUnmount(() => {
  autoFit.off();
  if (isDark.value) {
    toggleDark();
  }
  clearTimeout(pollTimer);
});
</script>

<template>
  <div v-cloak class="dap-main">
    <div class="title-1">
      <div class="title1-logo">
        <el-image class="title1-logo-img" :src="bili_favicon" />
      </div>
      <h2>直播数据大屏</h2>
    </div>
    <div class="title-2">
      <div class="title-left">
        <img class="anchor-avatar" src="/img/avatar.webp" alt="" />
        <div class="anchor-name">xxx</div>
        <div class="live-room-title">{{ largeScreenData.Room.title }}</div>
        <div class="live-state">直播结束</div>
      </div>
      <div class="title-right">
        <div class="live-duration">直播时长 01:14:56</div>
      </div>
    </div>
    <div class="component1">
      <div class="dap-card">
        <border-box-8>
          <div class="card-header">
            <div class="card-header__left">互动趋势</div>
            <div class="card-header__right">
              <el-dropdown trigger="click">
                <span>按累计观看人数统计 ▼</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>action 1</el-dropdown-item>
                    <el-dropdown-item divided>action 2</el-dropdown-item>
                    <el-dropdown-item divided>action 3</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div class="card-body">
            <template v-if="!isComp1Loaded">
              <loading>
                <div color-white>Loading...</div>
              </loading>
            </template>
            <template v-else>
              <div class="flex w-full" style="margin: 0 5px">
                <div class="mini-card mini-card-1" color-white>
                  <div class="mini-card-content">
                    <div class="title">新增关注</div>
                    <div class="num" />
                  </div>
                </div>
                <div class="mini-card mini-card-2" color-white>
                  <div class="mini-card-content">
                    <div class="title">加入粉丝团人数</div>
                    <div class="num" />
                  </div>
                </div>
                <div class="mini-card mini-card-3" color-white>
                  <div class="mini-card-content">
                    <div class="title">发送弹幕</div>
                    <div class="num" />
                  </div>
                </div>
              </div>
            </template>
          </div>
        </border-box-8>
      </div>
    </div>
    <div class="component2">
      <div class="card-body">
        <border-box-1 ref="borderRef">
          <template v-if="!isComp2Loaded">
            <loading>
              <div color-white>Loading...</div>
            </loading>
          </template>
          <template v-else>
            <div class="number-panel-area">
              <div class="top-area">
                <div class="row">
                  <div class="col">
                    <div class="label">累计观看人数</div>
                    <div class="num">645</div>
                  </div>
                </div>
              </div>
              <div class="bottom-area">
                <div class="row">
                  <div class="col">
                    <div class="label">实时在线人数</div>
                    <div class="num">-</div>
                    <div class="label">评论人数</div>
                    <div class="num">237</div>
                  </div>
                  <div class="col">
                    <div class="label">最高在线人数</div>
                    <div class="num">63</div>
                    <div class="label">分享直播间人数</div>
                    <div class="num">43</div>
                  </div>
                  <div class="col">
                    <div class="label">人均观看时长</div>
                    <div class="num">5分钟31秒</div>
                    <div class="label">总热度</div>
                    <div class="num">0</div>
                  </div>
                  <div class="col">
                    <div class="label">新增关注</div>
                    <div class="num">28</div>
                    <div class="label">点赞次数</div>
                    <div class="num">5882</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </border-box-1>
      </div>
    </div>
    <div class="component3">
      <div class="dap-card">
        <border-box-8>
          <div class="card-header">
            <div class="card-header__left">用户画像</div>
            <div class="card-header__right">
              <el-dropdown trigger="click">
                <span>人群分布 ▼</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>人群分布</el-dropdown-item>
                    <el-dropdown-item divided>年龄分布</el-dropdown-item>
                    <el-dropdown-item divided>地域分布</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div class="card-body">
            <template v-if="!isComp3Loaded">
              <loading>
                <div color-white>Loading...</div>
              </loading>
            </template>
            <template v-else>
              <active-ring-chart
                :config="ActiveRingChartConfig"
                style="width: 100%; height: 100%"
              />
            </template>
          </div>
        </border-box-8>
      </div>
    </div>
    <div class="component4">
      <div class="dap-card">
        <border-box-8>
          <div class="card-header">
            <div class="card-header__left">流量趋势</div>
            <div class="card-header__right">
              <el-dropdown trigger="click">
                <span>按累计观看人数统计 ▼</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>action 1</el-dropdown-item>
                    <el-dropdown-item divided>action 2</el-dropdown-item>
                    <el-dropdown-item divided>action 3</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div class="card-body">
            <template v-if="!isComp4Loaded">
              <loading>
                <div color-white>Loading...</div>
              </loading>
            </template>
            <template v-else>
              <div class="flex w-full" style="margin: 0 5px">
                <div class="mini-card mini-card-1" color-white>
                  <div class="mini-card-content">
                    <div class="title">在线人数</div>
                    <div class="num" />
                  </div>
                </div>
                <div class="mini-card mini-card-2" color-white>
                  <div class="mini-card-content">
                    <div class="title">进房人数</div>
                    <div class="num" />
                  </div>
                </div>
                <div class="mini-card mini-card-3" color-white>
                  <div class="mini-card-content">
                    <div class="title">离开人数</div>
                    <div class="num" />
                  </div>
                </div>
              </div>
            </template>
          </div>
        </border-box-8>
      </div>
    </div>
    <div class="component5">
      <div class="dap-card">
        <border-box-8>
          <div class="card-header">
            <div class="card-header__left">来源趋势</div>
            <div class="card-header__right">
              <el-dropdown trigger="click">
                <span>按累计观看人数统计 ▼</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>action 1</el-dropdown-item>
                    <el-dropdown-item divided>action 2</el-dropdown-item>
                    <el-dropdown-item divided>action 3</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div class="card-body">
            <template v-if="!isComp5Loaded">
              <loading>
                <div color-white>Loading...</div>
              </loading>
            </template>
            <template v-else>
              <div />
            </template>
          </div>
        </border-box-8>
      </div>
    </div>
    <div class="component6">
      <div class="dap-card">
        <border-box-8>
          <div class="card-header">
            <div class="card-header__left">观众弹幕排行</div>
            <div class="card-header__right">
              <el-dropdown trigger="click">
                <span>全部统计 ▼</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>七日统计</el-dropdown-item>
                    <el-dropdown-item divided>当月统计</el-dropdown-item>
                    <el-dropdown-item divided>全部统计</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div class="card-body">
            <template v-if="!isComp6Loaded">
              <loading>
                <div color-white>Loading...</div>
              </loading>
            </template>
            <template v-else>
              <scroll-ranking-board
                :config="rankingBoardConfig"
                style="width: 100%; height: 100%"
              />
            </template>
          </div>
        </border-box-8>
      </div>
    </div>
    <div class="decoration-bottom">
      <decoration5 :dur="2" style="width: 960px; height: 40px" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dap-main {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5px;
  user-select: none;
  background: 0% 0% / 100% 100% rgb(20 20 20);
}

.dap-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(26 26 26);
  border-radius: 12px;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    font-size: 12px;
    color: rgb(127 127 127);
  }

  .card-body {
    display: flex;
    flex: 1;
    padding: 10px;
  }
}

.component1,
.component4 {
  position: absolute;
  top: 70px;
  left: 18px;
  width: 450px;
  height: 480px;

  .mini-card-1,
  .mini-card-2,
  .mini-card-3 {
    flex: 1 1 0%;
    width: 0;
    height: 89px;
  }
}

.component2 {
  position: absolute;
  top: 120px;
  left: calc(50% - 480px);
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 430px;
}

.component3 {
  position: absolute;
  top: 70px;
  right: 18px;
  width: 450px;
  height: 480px;
}

.component4 {
  position: absolute;
  top: 552px;
  left: 18px;
  width: 450px;
  height: 450px;
}

.component5 {
  position: absolute;
  top: 552px;
  left: calc(50% - 480px);
  width: 960px;
  height: 450px;
}

.component6 {
  position: absolute;
  top: 552px;
  right: 18px;
  width: 450px;
  height: 450px;
}

.component2 .card-body {
  position: relative;
  flex: 1 1 0%;
  width: 100%;
  height: 0;
  overflow: hidden;
  background: rgb(28 28 28);
  border-radius: 10px;

  .text {
    position: absolute;
    font-size: 14px;
  }

  .text-1 {
    top: 33px;
    left: 420px;
    font-size: 16px;
    font-weight: 700;
  }

  .text-2 {
    top: 52px;
    left: 410px;
    font-size: 59px;
    font-style: normal;
    font-weight: bold;
    color: rgb(250 157 59);
    text-shadow: none;
    letter-spacing: 2px;
  }

  .text-3 {
    top: 150px;
    left: 150px;
    color: rgb(188 188 188);
  }

  .text-4 {
    top: 170px;
    left: 180px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: white;
  }

  .text-5 {
    top: 150px;
    left: 320px;
    color: rgb(188 188 188);
  }

  .text-6 {
    top: 170px;
    left: 350px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: white;
  }

  .text-7 {
    top: 150px;
    left: 520px;
    color: rgb(188 188 188);
  }

  .text-8 {
    top: 170px;
    left: 520px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: white;
  }

  .text-9 {
    top: 150px;
    left: 670px;
    color: rgb(188 188 188);
  }

  .text-10 {
    top: 170px;
    left: 680px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: white;
  }

  .text-11 {
    top: 240px;
    left: 160px;
    color: rgb(188 188 188);
  }

  .text-12 {
    top: 265px;
    left: 170px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: white;
  }

  .text-13 {
    top: 240px;
    left: 320px;
    color: rgb(188 188 188);
  }

  .text-14 {
    top: 265px;
    left: 350px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: white;
  }

  .text-15 {
    top: 240px;
    left: 540px;
    color: rgb(188 188 188);
  }

  .text-16 {
    top: 265px;
    left: 550px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: white;
  }

  .text-17 {
    top: 240px;
    left: 670px;
    color: rgb(188 188 188);
  }

  .text-18 {
    top: 265px;
    left: 670px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    color: white;
  }
}

.number-panel-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.number-panel-area .top-area,
.number-panel-area .bottom-area {
  display: flex;
  flex-direction: column;

  .col {
    flex: 1;
    margin: 0 40px;

    :is(div) {
      margin-top: 20px;
    }
  }

  .label {
    color: rgb(188 188 188);
    white-space: nowrap;
  }

  .num {
    color: white;
  }
}

.number-panel-area .top-area {
  margin-bottom: 40px;

  .num {
    font-size: 59px;
    font-weight: bold;
    color: rgb(250 157 59);
  }
}

.row {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  flex-direction: column;
}

.decoration-bottom {
  position: absolute;
  bottom: 0;
  left: calc(50% - 480px);
  display: flex;
}

:deep(.border-box-content) {
  display: flex;
  flex-direction: column;
}

[color-white] {
  color: white;
}

.mini-card {
  position: relative;
  font-size: 14px;
  background: rgb(40 39 39);
}

.mini-card::before {
  position: absolute;
  top: calc(50% - 20px);
  left: 0;
  width: 5px;
  height: 40px;
  content: "";
}

.mini-card-1::before {
  background: orange;
}

.mini-card-2::before {
  background: rgb(99 52 153);
}

.mini-card-3::before {
  background: skyblue;
}

.mini-card-2 {
  margin: 0 5px;
}

.mini-card .mini-card-content {
  padding: 15px 0 0 15px;
}

.dap-main > .title-1 {
  position: absolute;
  top: 40px;
  left: calc(50% - 480px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 960px;
  height: 53.4px;
  color: rgb(127 127 127);

  .title1-logo {
    position: absolute;
    top: 14px;
    left: 375px;
    width: 25px;
    height: 25px;

    .title1-logo-img {
      width: 100%;
      height: 100%;
    }
  }
}

.dap-main > .title-2 {
  position: absolute;
  top: 80px;
  left: calc(50% - 480px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 960px;
  height: 35.6px;
  font-size: 12px;
  color: rgb(184 184 184);

  .title-left {
    display: flex;
    align-items: center;

    .anchor-avatar {
      position: relative;
      width: 26px;
      height: 23.14px;
      margin-left: 20px;
    }

    .anchor-name {
      margin-left: 5px;
    }

    .live-room-title {
      margin-left: 10px;
    }

    .live-state {
      margin-left: 10px;
    }
  }

  .title-right {
    display: flex;
    align-items: center;
  }
}
</style>
