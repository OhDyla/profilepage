const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./vue/main/main.vue') },
        { path: '/history', component: httpVueLoader('./vue/history/history.vue') },
        // { path: '/detail', component: httpVueLoader('./vue/detail.vue') },
    ]
})

const app = new Vue({
    el: "#app",
    components: {
        'app-vue': httpVueLoader('./vue/app.vue')
    },
    router
});