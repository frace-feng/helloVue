import Vue from 'vue';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import MusicPlay from "./components/MusicPlay.vue";
import HelloWorld from "./components/HelloWorld.vue";

Vue.use(ElementUI);
Vue.use(VueRouter);


const routes = [{ path: '/music', component: MusicPlay },
    { path: '/', component: HelloWorld },
]
const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});