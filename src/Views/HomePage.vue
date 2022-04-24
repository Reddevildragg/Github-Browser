<template>
    <topics-dropdown></topics-dropdown>
    <ProjectLayout></ProjectLayout>
</template>


<script>
import TopicsDropdown from "@/Components/TopicsDropdown";
import ProjectLayout from "@/Components/ProjectLayout";
import {useProjectStore} from "@/store/projects";

export default {
  name: 'HomePage',
  components: {ProjectLayout, TopicsDropdown},
  setup()
  {
    useProjectStore().FetchProjects()
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a
{
  color: #42b983;
}

</style>
