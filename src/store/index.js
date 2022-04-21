//import the createStore object from Vuex
import Vue from 'vue'
import { createStore } from 'vuex'
import ProjectModule from '../store/Modules/Project/index'

const state = {}
const actions = ({})
const mutations = ({})
const getters = ({})

const modules = {
    project : ProjectModule
}

export default createStore({
    state,
    actions,
    mutations,
    getters,
    modules
})