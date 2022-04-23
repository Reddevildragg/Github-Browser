// stores/users.js
import { defineStore } from 'pinia'
import {FETCH_PROJECTS, GET_PROJECTS, PROJECTS} from "@/store/Modules/Project/types";
import Config from "@/Config";
import github from "@/Scripts/api/Github";

const state = {
    projects:[],
}
export const useProjectStore = defineStore(PROJECTS,{
    state: () => state,
    getters: {
        [GET_PROJECTS]: (state) => state.projects,
    },
    actions: {
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

                for(let i = 0; i < data.length; i++)
                {
                    data[i].CustomData = await github.GetCustomProjectData(data[i]);
                }

                this.projects = data;
            }
            catch (error)
            {
                alert(error)
                console.log(error)
            }
        },
    },
})