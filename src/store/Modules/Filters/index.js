import actions from './actions.js'
import getters from './getters.js'

const state = {
    filters:[]
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
}