//import the createStore object from Vuex
import Vue from 'vue'
import { createStore } from 'vuex'
import FilterModule from '../store/Modules/Filters/index';
import {FILTERS} from "@/store/Modules/Filters/types";

const state = {}
const actions = ({})
const mutations = ({})
const getters = ({})

const modules = {
    [FILTERS]: FilterModule,
}

export default createStore({
    state,
    actions,
    mutations,
    getters,
    modules
})