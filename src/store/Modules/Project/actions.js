import {FETCH_PROJECTS, SET_PROJECTS} from "@/store/Modules/Project/types";

import github from "@/api/Github";

export default
{
    async [FETCH_PROJECTS](context) {
        try
        {
            let data = [];
            console.log(this)
            for(let i = 0; i < this.$UserRepos.length; i++)
            {
                let response = await github.GetUserProjects(this.$UserRepos[i]);
                data = data.concat(response);
            }
            for(let i = 0; i < this.$OrgRepos.length; i++)
            {
                let response = await github.GetUserProjects(this.$OrgRepos[i]);
                data = data.concat(response);
            }

            context.commit(SET_PROJECTS, data)
        }
        catch (error)
        {
            alert(error)
            console.log(error)
        }
    },
}