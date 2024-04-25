export default {
  path: "/live-data",
  redirect: "/live-data/overview",
  meta: {
    icon: "ri:list-check",
    title: "直播数据",
    rank: 3
  },
  children: [
    {
      path: "/live-data/overview",
      name: "liveDataOverview",
      component: () => import("@/views/liveData/overview/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "数据总览",
        showParent: true
      }
    },
    {
      path: "/live-data/fans-analsis",
      name: "liveDataFansAnalsis",
      component: () => import("@/views/liveData/fansAnalsis/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "粉丝分析",
        showParent: true
      }
    },
    {
      path: "/live-data/session-data",
      name: "liveDataSessionData",
      component: () => import("@/views/liveData/sessionData/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "场次数据",
        showParent: true
      }
    },
    {
      path: "/live-data/gift-list",
      name: "liveDataGiftList",
      component: () => import("@/views/liveData/giftList/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "直播收益",
        showParent: true
      }
    },
    {
      path: "/live-data/fans-rank",
      name: "liveDataFansRank",
      component: () => import("@/views/liveData/fansRank/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "贡献排行",
        showParent: true
      }
    }
  ]
};
