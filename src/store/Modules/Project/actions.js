import {FETCH_PROJECTS, SET_PROJECTS} from "@/store/Modules/Project/types";

import github from "@/api/Github";

export default
{
    async [FETCH_PROJECTS](context) {
        try
        {
            const data = await github.GetUserProjects();
            context.commit(SET_PROJECTS, data)
        }
        catch (error)
        {
            alert(error)
            console.log(error)
        }
    },
}