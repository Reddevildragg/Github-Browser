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
import {FILTERS, SET_FILTERS} from "@/store/Modules/Filters/types";

import { mapMutations} from "vuex";
import FilterUtilities from "@/Scripts/FilterUtilities";

export default {
  name: "TopicsDropdown",
  components: { VueMultiselect  },
  data () {
    return {
      selected: [],
    }},
  computed:
      {
        GetMenuItems()
        {
          return FilterUtilities.GetAllFilters();
        },
      },
  methods:
      {
        ...mapMutations(FILTERS,{
          SetFilters: SET_FILTERS
        }),
        updateValueAction()
        {
          console.log()
          this.SetFilters(this.selected)
        }
      }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>