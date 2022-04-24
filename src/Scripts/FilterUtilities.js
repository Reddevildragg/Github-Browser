import {_} from "vue-underscore";
import { useProjectStore } from "@/store/projects";

import Config from "@/Config";
import {useFiltersStore} from "@/store/filters";

export default class FilterUtilities
{
    static filters;

    static #GetProjects()
    {
        const projectStore = useProjectStore();
        return projectStore.projects;
    }

    static #GetFilters()
    {
        const filtersStore = useFiltersStore();
        return filtersStore.filters;
    }

    static GetActiveProjects()
    {
        let projects = this.#GetProjects();
        this.filters = this.#GetFilters();

        if(this.filters.length > 0)
        {
            projects = this.FilterByTopic(projects);
            projects = this.FilterByOwner(projects);
            console.log("activeProjects", projects)
            return projects;
        }
        else {
            return projects
        }
    }
    static validateFilterCategory(category)
    {
        let filter = false;
        for(let i = 0; i < this.filters.length; i++)
        {
            if(this.filters[i].category === category)
            {
                filter = true;
                break;
            }
        }

        return filter;
    }
    static FilterByTopic(projects)
    {
        let vm = this;

        if(!this.validateFilterCategory("Topic"))
        {
            return projects;
        }

        return projects.filter(x =>
        {
            for(let i = 0; i < vm.filters.length; i++)
            {
                if(vm.filters[i].category === "Topic")
                {
                    return _.contains(x.topics, vm.filters[i].name)
                }
            }
        })
    }
    static FilterByOwner(projects)
    {
        let vm = this;

        if(!this.validateFilterCategory("Owner"))
        {
            return projects;
        }

        return projects.filter(x =>
        {
            for(let i = 0; i < vm.filters.length; i++)
            {
                if(vm.filters[i].category === "Owner")
                {
                    return x.owner.login === vm.filters[i].name;
                }
            }
        })
    }


    static GetAllFilters()
    {
        let Options = [];
        Options.push({language:"Topics", libs: this.GetUniqueTopics()});
        Options.push({language:"Owner", libs:this.GetProjectOwners()})
        console.log("dropdown items", Options)
        return Options;
    }
    static GetUniqueTopics()
    {
        const distinct = [];
        const projects = this.#GetProjects();
        for (let i = 0; i < projects.length; i++)
        {
            for(let x =0; x < projects[i].topics.length; x++)
            {
                if(_.where(distinct, {name:projects[i].topics[x]}).length === 0)
                {
                    distinct.push({name:projects[i].topics[x], category:"Topic"})
                }
            }
        }
        return distinct
    }
    static GetProjectOwners()
    {
        const distinct = [];
        for(let i = 0; i < Config.userRepos.length; i++)
        {
            distinct.push({name:Config.userRepos[i], category:"Owner"})
        }
        for(let i = 0; i < Config.orgRepos.length; i++)
        {
            distinct.push({name:Config.orgRepos[i], category:"Owner"})
        }

        return distinct;
    }
}