import Vue from "vue";
import VueRouter from "vue-router";
// import goTo from "vuetify/es5/services/goto";
// import * as easings from 'vuetify/es5/services/goto/easing-patterns'

Vue.use(VueRouter);
export const router = new VueRouter({
  base: "/",
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "projectList",
      meta: { title: "项目" },
      component: () => import("@/views/ProjectList"),
    },
    {
      path: "/projectDetail",
      name: "projectDetail",
      meta: { title: "项目详情" },
      props: (route => ({ id: route.query.id })),
      component: () => import("@/views/ProjectDetail"),
    },
    {
      path: "/trackProject",
      name: "trackProject",
      meta: { title: "添加跟踪记录" },
      component: () => import("@/views/TrackProject"),
    },
    {
      path: "/customerInformation",
      name: "customerInformation",
      meta: { title: "客户信息" },
      component: () => import("@/views/CustomerInformation"),
    },
    {
      path: "/moneyInformation",
      name: "moneyInformation",
      meta: { title: "款项回款情况" },
      component: () => import("@/views/MoneyInformation"),
    },
    {
      path: "/moneyReceived",
      name: "moneyReceived",
      meta: { title: "已收款项" },
      props: (route => ({ dataIndex: route.query.dataIndex })),
      component: () => import("@/views/MoneyReceived"),
    },
    {
      path: "/myInformation",
      name: "myInformation",
      meta: { title: "我的" },
      component: () => import("@/views/MyInformation"),
    },
    {
      path: "/settings",
      name: "settings",
      meta: { title: "设置" },
      component: () => import("@/views/Settings"),
    },
    {
      path: "/invoiceInformation",
      name: "invoiceInformation",
      meta: { title: "公司开票信息" },
      component: () => import("@/views/InvoiceInformation"),
    },
    {
      path: "/netError/:errStatus",
      name: "netError",
      meta: { title: "netError" },
      props: true,
      component: () => import("@/assets/netError/netError.vue"),
    },
    {
      path: "/404",
      name: "404",
      meta: "404",
      component: () => import("@/assets/404/404.vue"),
    },
    {
      path: "*",
      redirect: { name: "404" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          // goTo(savedPosition.y, {
          //   duration: 500,
          //   offset: 0,
          //   easing: easings.easeInOutCubic
          // });
          resolve(savedPosition);
        } else {
          resolve({ x: 0, y: 0 });
        }
      }, 100);
    });
  },
});
router.beforeEach((to, from, next) => {
  if (Vue.$_cancelList.length) {
    Vue.$_cancelList.forEach((item) => {
      item.cancel(item.message);
    });
    Vue.$_cancelList = [];
  }
  document.title = to.matched.map((item) => item.meta.title).join("  |  ");
  next();
});
