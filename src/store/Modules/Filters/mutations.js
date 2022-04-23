import {SET_FILTERS} from "@/store/Modules/Filters/types";

export default{

    [SET_FILTERS](state, filters)
    {
        state.filters = filters
    }
}