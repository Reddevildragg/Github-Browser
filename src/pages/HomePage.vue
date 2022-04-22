<template>
  <div class="hello">
    <topics-dropdown></topics-dropdown>
    <ProjectLayout></ProjectLayout>
  </div>
</template>


<script>
import TopicsDropdown from "@/Components/TopicsDropdown";
import ProjectLayout from "@/Components/ProjectLayout";
import { mapActions } from 'vuex'
import {FETCH_PROJECTS} from "@/store/Modules/Project/types";

export default {
  name: 'HomePage',
  components: {ProjectLayout, TopicsDropdown},
  data(){
    return{
      filter: [],
    }
  },
  methods:
      {
        ...mapActions('project',{
          fetchProjects: FETCH_PROJECTS
        })
  },
  mounted()
  {
    this.fetchProjects({"users":this.$UserRepos, "org":this.$OrgRepos});
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
