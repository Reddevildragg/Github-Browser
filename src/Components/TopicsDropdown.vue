<template>
  <div>
    <VueMultiselect v-model="selected"
                    :options="GetUniqueTopics"
                    :multiple="true"
                    :group-select="true"
                    placeholder="Type to search"
                    @select="dispatchAction"
    >
    </VueMultiselect>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
  name: "TopicsDropdown",
  components: { VueMultiselect  },
  props: {
        RawData:
            {
              default: () => [],
              type: Array
            },
  },
  data () {
    return {
      selected: [],
    }},
  computed:
      {
        //TODO: may be able to simplify the code down here slightly
        GetUniqueTopics()
        {
          const distinct = [];
          for (let i = 0; i < this.RawData.length; i++)
          {
            for(let x =0; x < this.RawData[i].topics.length; x++)
            {
              if(!distinct.includes(this.RawData[i].topics[x]))
              {
                distinct.push(this.RawData[i].topics[x])
              }
            }
          }
          console.log("all topics", distinct)

          return distinct
        }
      },
  methods:
      {
        dispatchAction(actionName)
        {
          this.$emit('DropDownChanged', this.selected)
        }
      }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>