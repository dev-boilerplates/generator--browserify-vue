import Vue from 'vue'; 
import VueRouter from 'vue-router';
import store from './data/store';

import {routes} from './routes';

import Root from './components/Root';
import Custom from './components/custom';

const spa = false;

if(!spa) {
    const app = new Vue({
        el: '#root',
        components: [Custom],
        data: {
            store
        }
    })
} else {
    Vue.use(VueRouter);
    const router = new VueRouter();
    routes(router);
    router.start(Root, '#root');
}