<template>
  <div>
    <VueMultiselect v-model="selected"
                    :options="GetUniqueTopics"
                    :multiple="true"
                    :searchable="false"
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
          // map `this.doneCount` to `this.$store.getters.doneTodosCount`
          projects: GET_PROJECTS,
        }),
        //TODO: may be able to simplify the code down here slightly
        GetUniqueTopics()
        {
          const distinct = [];
          for (let i = 0; i < this.projects.length; i++)
          {
            for(let x =0; x < this.projects[i].topics.length; x++)
            {
              if(!distinct.includes(this.projects[i].topics[x]))
              {
                distinct.push(this.projects[i].topics[x])
              }
            }
          }
          console.log("all topics", distinct)

          return distinct
        }
      },
  methods:
      {
        ...mapMutations('project',{
          SetFilters: SET_FILTERS // map `this.add()` to `this.$store.commit('increment')`
        }),
        updateValueAction(selectedOption)
        {
          this.SetFilters(this.selected)
        },
      }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>