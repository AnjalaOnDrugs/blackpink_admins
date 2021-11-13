import Vuex from 'vuex';
import Vue from 'vue';
import dashboard from './modules/dashboard';

Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        dashboard
    }
})
