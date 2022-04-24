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
            console.log("raw filters", this.filters)
            projects = this.FilterByTopic(projects);
            projects = this.FilterByOwner(projects);
            console.log("active Projects", projects)
            return projects;
        }
        else {
            return projects
        }
    }
    static validateFilterCategory(category)
    {
        const validFilters = _.where(this.filters, {category: category}).map(x => x.name);
        console.log(`valid filters for ${category}`, validFilters)
        return validFilters;
    }
    static FilterByTopic(projects)
    {
        const validFilters = this.validateFilterCategory("Topic");

        if(validFilters.length === 0)
        {
            return projects;
        }

        return projects.filter(project =>
        {
            for(let i = 0; i < validFilters.length; i++)
            {
                if(_.contains(project.topics, validFilters[i]))
                {
                    return true;
                }
            }
            return false;
        });
    }
    static FilterByOwner(projects)
    {
        const validFilters = this.validateFilterCategory("Owner");
        if(validFilters.length === 0)
        {
            return projects;
        }

        return projects.filter(project =>
        {
            for(let i = 0; i < validFilters.length; i++)
            {
                if(project.owner.login === validFilters[i])
                {
                    return true;
                }
            }

            return false;
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