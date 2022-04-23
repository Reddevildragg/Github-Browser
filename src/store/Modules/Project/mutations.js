import {SET_PROJECTS} from "@/store/Modules/Project/types";

export default{
    [SET_PROJECTS](state, projects)
    {
        state.projects = projects
    },
}