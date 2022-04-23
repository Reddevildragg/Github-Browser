import {FETCH_PROJECTS, SET_PROJECTS} from "@/store/Modules/Project/types";
import github from "@/Scripts/api/Github";
import Config from "@/Config";

export default
{
    async [FETCH_PROJECTS](context, repos) {
        try
        {
            let data = [];
            for(let i = 0; i < Config.userRepos.length; i++)
            {
                console.log("fetching data for ", Config.userRepos[i])
                let response = await github.GetUserProjects(Config.userRepos[i]);
                data = data.concat(response);
            }
            for(let i = 0; i < Config.orgRepos.length; i++)
            {
                console.log("fetching data for ", Config.orgRepos[i])
                let response = await github.GetOrgProjects(Config.orgRepos[i]);
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