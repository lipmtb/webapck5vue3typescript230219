import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/chatLearn",
    component: () => import("@/views/chatLearn/index.vue"),
    children: [
      {
        path: "downloadPage",
        component: () => import("@/views/downloadPage/index.vue"),
      },
    ],
  },
  {
    path: "/code",
    component: () => import("@/views/wechCode/index.vue"),
  },
  {
    path: "/base64",
    component: () => import("@/views/common/Base64Trans.vue"),
  },
  {
    path: "/canvas",
    component: () => import("@/views/canvas/index.vue"),
    children: [
      {
        path: "rect",
        component: () => import("@/views/canvas/base/rect.vue"),
      },
      {
        path: "circle",
        component: () => import("@/views/canvas/base/circle.vue"),
      },
      {
        path: "fire",
        component: () => import("@/views/canvas/makeFire/fire.vue"),
      },
    ],
  },
  {
    path: "/cssTest",
    component: () => import("@/views/cssTest/index.vue"),
    redirect: "/cssTest/moveCircle",
    children: [
      {
        path: "animation",
        component: () => import("@/views/cssTest/cssTestAnimation.vue"),
      },
      {
        path: "moveCircle",
        component: () => import("@/views/cssTest/moveCircle.vue"),
      },
      {
        path: "jumpCircle",
        component: () => import("@/views/cssTest/jumpCircle.vue"),
      },
    ],
  },
  {
    path: "/audio",
    component: () => import("@/views/audio/index.vue"),
  },
  {
    path: "/helloAlgo",
    component: () => import("@/views/helloAlgo/index.vue"),
  },
  {
    path: "/algoDeep",
    component: () => import("@/views/algoDeep/index.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
