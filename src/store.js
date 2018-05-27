import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    userOpinions : {
        yes: 12,
        no: 10
    }
}

const actions = {
    addYes(context) {
        context.commit('ADD_YES')
    }
}

const mutations = {
    ADD_YES (state) {
        state.userOpinions.yes++
    }
}
const store = new Vuex.Store({
    state,
    actions,
    mutations

})