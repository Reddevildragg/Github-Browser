import {GET_PROJECTS, GET_FILTERS} from "@/store/Modules/Project/types";

export default{
    [GET_PROJECTS]: (state) => state.projects,
    [GET_FILTERS]: (state) => state.filters
}