// stores/users.js
import { defineStore } from 'pinia'
import Config from "@/Config";
import github from "@/Scripts/api/Github";

const state = {
    projects:[],
}
const actions = {
    async FetchProjects() {
        try
        {
            let data = [];
            for(let i = 0; i < Config.userRepos.length; i++)
            {
                let response = await github.GetUserProjects(Config.userRepos[i]);
                data = data.concat(response);
            }
            for(let i = 0; i < Config.orgRepos.length; i++)
            {
                let response = await github.GetOrgProjects(Config.orgRepos[i]);
                data = data.concat(response);
            }

            // eslint-disable-next-line no-inner-declarations
            async function FetchProjectCustomData(project) {
                project.CustomData = await github.GetCustomProjectData(project)
            }
            for(let i = 0; i < data.length; i++)
            {
                // noinspection ES6MissingAwait
                FetchProjectCustomData(data[i]);
            }

            this.projects = data;
        }
        catch (error)
        {
            alert(error)
            console.log(error)
        }
    },
}

export const useProjectStore = defineStore("Projects",{
    state: () => state,
    getters:
    {
    },
    actions: actions,
})