import {SET_PROJECTS, SET_FILTERS} from "@/store/Modules/Project/types";

export default{
    [SET_PROJECTS](state, projects)
    {
        state.projects = projects
    },

    [SET_FILTERS](state, filters)
    {
        state.filters = filters
    }
}