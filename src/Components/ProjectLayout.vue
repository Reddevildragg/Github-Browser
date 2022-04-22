<template>
  <transition-group tag="repoBoxes" name="cards">
    <project-box v-for="(item, index) in ActiveProjects" :key="index" :index="index" :project="item">
    </project-box>
  </transition-group>
</template>

<script>
import ProjectBox from "@/Components/ProjectBox";
import { mapGetters } from 'vuex'
import {GET_FILTERS, GET_PROJECTS} from "@/store/Modules/Project/types";
import {_} from "vue-underscore";

export default {
  name: "ProjectLayout",
  components: {ProjectBox},
  data(){
    return{
      currentProjects: []
    }
  },
  computed:
      {
        ...mapGetters('project',{
          projects: GET_PROJECTS,
          filters: GET_FILTERS
        }),
        ActiveProjects()
        {
          let vm = this;
          if(this.filters.length > 0) {
            return this.projects.filter(x => {
              return _.intersection(x.topics, vm.filters).length > 0
            })
          }
          else {
            return this.projects
          }
        }
      },
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
  transform: scaleY(0.01);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.cards-leave-active {
  position: absolute!important;
}

</style>