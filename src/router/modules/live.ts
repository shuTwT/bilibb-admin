export default {
  path: "/live",
  redirect: "/live/connect",
  meta: {
    icon: "ri:list-check",
    title: "直播管理",
    rank: 1
  },
  children: [
    {
      path: "/live/connect",
      name: "LiveConnect",
      component: () => import("@/views/live/connect/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "连接管理",
        showParent: true
      }
    },
    {
      path: "/live/room",
      name: "LiveRoom",
      component: () => import("@/views/live/room/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "房间管理",
        showParent: true
      }
    },
    {
      path: "/live/live",
      name: "LiveLive",
      component: () => import("@/views/live/live/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "直播管理",
        showParent: true
      }
    },
    {
      path: "/live/options",
      name: "LiveOptions",
      component: () => import("@/views/live/options/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "直播设置",
        showParent: true
      }
    },
    {
      path: "/live/user",
      name: "LiveUser",
      component: () => import("@/views/live/user/list/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "用户管理",
        showParent: true
      }
    },
    {
      path: "/live/user/:uid/:roomId?",
      name: "LiveUserDetail",
      component: () => import("@/views/live/user/detail/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "用户详情",
        showParent: true,
        showLink: false
      }
    },
    {
      path: "/live/mine",
      name: "LiveMine",
      component: () => import("@/views/live/mine/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "我的直播间",
        showParent: true
      }
    },
    {
      path: "/live/danmu/list/:roomId?",
      name: "LiveDanmu",
      component: () => import("@/views/live/danmu/list/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "弹幕列表",
        showLink: false
      }
    }
  ]
} satisfies RouteConfigsTable;
