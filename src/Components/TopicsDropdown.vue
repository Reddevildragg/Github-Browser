<template>
  <div>
    <VueMultiselect v-model="selected"
                    :options="GetMenuItems"
                    :multiple="true"
                    :searchable="false"

                    track-by="name"
                    label="name"
                    group-values="libs"
                    group-label="language"
                    :group-select="true"

                    placeholder="Type to search"
                    @update:model-value="updateValueAction"
    >
    </VueMultiselect>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import {GET_FILTERS, GET_PROJECTS, SET_FILTERS} from "@/store/Modules/Project/types";
import {mapGetters, mapMutations} from "vuex";
import {_} from "vue-underscore";
import github from "@/api/Github";

export default {
  name: "TopicsDropdown",
  components: { VueMultiselect  },
  data () {
    return {
      selected: [],
    }},
  computed:
      {
        ...mapGetters('project',{
          projects: GET_PROJECTS,
        }),
        GetMenuItems()
        {
          let Options = [];

          Options.push({language:"Topics", libs: this.GetUniqueTopics()});
          Options.push({language:"Owner", libs:this.GetProjectOwners()})

          console.log(Options);
          return Options;
        },
      },
  methods:
      {
        ...mapMutations('project',{
          SetFilters: SET_FILTERS
        }),
        updateValueAction(selectedOption)
        {
          console.log(this.selected)
          this.SetFilters(this.selected)
        },
        //TODO: may be able to simplify the code down here slightly
        GetUniqueTopics()
        {
          const distinct = [];
          for (let i = 0; i < this.projects.length; i++)
          {
            for(let x =0; x < this.projects[i].topics.length; x++)
            {
              console.log(_.where(distinct, {name:this.projects[i].topics[x]}))
              if(_.where(distinct, {name:this.projects[i].topics[x]}).length === 0)
              {
                distinct.push({name:this.projects[i].topics[x], category:"Topic"})
              }
            }
          }
          console.log("all topics", distinct)
          return distinct
        },
        GetProjectOwners()
        {
          const distinct = [];
          for(let i = 0; i < this.$UserRepos.length; i++)
          {
            distinct.push({name:this.$UserRepos[i], category:"Owner"})
          }
          for(let i = 0; i < this.$OrgRepos.length; i++)
          {
            distinct.push({name:this.$OrgRepos[i], category:"Owner"})
          }

          return distinct;
        }
      }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>