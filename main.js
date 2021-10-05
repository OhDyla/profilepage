const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./vue/main.vue') },
        { path: '/page2', component: httpVueLoader('./vue/page2.vue') },
        { path: '/page3', component: httpVueLoader('./vue/page3.vue') },
        { path: '/page4', component: httpVueLoader('./vue/page2.vue') },
    ]
})

const app = new Vue({
    el: "#app",
    router
});