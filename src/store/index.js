//import the createStore object from Vuex
import Vue from 'vue'
import { createStore } from 'vuex'
import ProjectModule from '../store/Modules/Project/index';
import FilterModule from '../store/Modules/Filters/index';
import {PROJECTS} from "@/store/Modules/Project/types";
import {FILTERS} from "@/store/Modules/Filters/types";

const state = {}
const actions = ({})
const mutations = ({})
const getters = ({})

const modules = {
    [PROJECTS] : ProjectModule,
    [FILTERS]: FilterModule,
}

export default createStore({
    state,
    actions,
    mutations,
    getters,
    modules
})