export default {
  path: "/finance",
  redirect: "/finance/report",
  meta: {
    icon: "ri:list-check",
    title: "财务管理",
    rank: 4
  },
  children: [
    {
      path: "/finance/report",
      name: "FinanceReport",
      component: () => import("@/views/finance/report/index.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "概览",
        showParent: true
      }
    }
  ]
};
