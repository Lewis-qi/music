import Vue from 'vue'
import VueRouter from 'vue-router'

import recommend from '../pages/recommend.vue';

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:recommend
        }
    ]
})