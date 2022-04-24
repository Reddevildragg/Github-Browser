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
import { defineComponent, computed } from 'vue'
import FilterUtilities from "@/Scripts/FilterUtilities";
import {useFiltersStore} from "@/store/filters";

export default {
  name: "TopicsDropdown",
  components: { VueMultiselect  },
  data () {
    return {
      selected: [],
    }},
  setup() {
    const filterStore = useFiltersStore()
    return { filterStore }
  },
  computed:
      {
        GetMenuItems()
        {
          return FilterUtilities.GetAllFilters();
        },
      },
  methods:
      {
        updateValueAction()
        {
          this.filterStore.filters = this.selected;
        }
      }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>