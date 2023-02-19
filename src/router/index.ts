import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/code',
        component: () => import("@/views/wechCode/index.vue")
    },
    {
        path: '/base64',
        component: () => import("@/views/common/Base64Trans.vue")
    }, {
        path: '/canvas',
        component: () => import("@/views/canvas/index.vue"),
        children: [{
            path: "rect",
            component: () => import("@/views/canvas/base/rect.vue")
        }, {
            path: "circle",
            component: () => import("@/views/canvas/base/circle.vue")
        },{
            path: "fire",
            component: () => import("@/views/canvas/makeFire/fire.vue")
        }]
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})