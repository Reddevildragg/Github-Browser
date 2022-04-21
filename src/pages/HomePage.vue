<template>
  <div class="hello">

    <topics-dropdown @DropDownChanged="DropDownChanged"></topics-dropdown>
    <ProjectLayout></ProjectLayout>
  </div>
</template>

<script>
import TopicsDropdown from "@/Components/TopicsDropdown";
import ProjectLayout from "@/Components/ProjectLayout";

export default {
  name: 'HomePage',
  components: {ProjectLayout, TopicsDropdown},
  data(){
    return{
      filter: [],
    }
  },
  methods: {
    DropDownChanged()
    { }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a
{
  color: #42b983;
}

</style>
