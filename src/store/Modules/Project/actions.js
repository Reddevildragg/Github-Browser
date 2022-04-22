import {FETCH_PROJECTS, SET_PROJECTS} from "@/store/Modules/Project/types";

import github from "@/api/Github";

export default
{
    async [FETCH_PROJECTS](context, repos) {
        try
        {
            let data = [];
            const users = repos["users"];
            const org = repos["org"];
            for(let i = 0; i < users.length; i++)
            {
                console.log("fetching data for ", users[i])
                let response = await github.GetUserProjects(users[i]);
                data = data.concat(response);
            }
            for(let i = 0; i < org.length; i++)
            {
                console.log("fetching data for ", org[i])
                let response = await github.GetUserProjects(org[i]);
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