<template>
  <transition-group tag="repoBoxes" name="cards">
    <project-box v-for="(item, index) in ActiveProjects" :key="index" :index="index" :project="item">
    </project-box>
  </transition-group>
</template>

<script>
import ProjectBox from "@/Components/ProjectBox";
import FilterUtilities from "@/Scripts/FilterUtilities";

export default {
  name: "ProjectLayout",
  components: {ProjectBox},
  data(){
    return{
    }
  },
  computed:
      {
        ActiveProjects()
        {
          return FilterUtilities.GetActiveProjects();
        }
      },
  methods:
  {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
repoBoxes
{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  counter-reset: rank;
  margin: 4%;
}

.cards-move,
.cards-enter-active,
.cards-leave-active {
  transition: all .5s ease;
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.cards-leave-active {
  //position: absolute!important;
}

</style>