<template>
    <topics-dropdown></topics-dropdown>
    <ProjectLayout></ProjectLayout>
</template>


<script>
import TopicsDropdown from "@/Components/TopicsDropdown";
import ProjectLayout from "@/Components/ProjectLayout";
import { mapActions } from 'vuex'
import {PROJECTS,FETCH_PROJECTS} from "@/store/Modules/Project/types";

export default {
  name: 'HomePage',
  components: {ProjectLayout, TopicsDropdown},
  methods:
      {
        ...mapActions(PROJECTS,{
          FetchProjects: FETCH_PROJECTS
        })
  },
  mounted()
  {
    this.FetchProjects();
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
