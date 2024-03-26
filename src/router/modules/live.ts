export default {
  path: "/live",
  redirect: "/live/connect",
  meta: {
    icon: "ri:list-check",
    title: "menus.hsLive",
    rank: 1
  },
  children: [
    {
      path: "/live/connect",
      name: "LiveConnect",
      component: () => import("@/views/live/connect/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "menus.hsLiveConnect",
        showParent: true
      }
    },
    {
      path: "/live/room",
      name: "LiveRoom",
      component: () => import("@/views/live/room/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "menus.hsLiveRoom",
        showParent: true
      }
    },
    {
      path: "/live/live",
      name: "LiveLive",
      component: () => import("@/views/live/live/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "menus.hsLiveLive",
        showParent: true
      }
    },
    {
      path: "/live/options",
      name: "LiveOptions",
      component: () => import("@/views/live/options/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "menus.hsLiveOptions",
        showParent: true
      }
    },
    {
      path: "/live/user",
      name: "LiveUser",
      component: () => import("@/views/live/user/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "menus.hsLiveUser",
        showParent: true
      }
    },
    {
      path: "/live/mine",
      name: "LiveMine",
      component: () => import("@/views/live/mine/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "menus.hsLiveMine",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
