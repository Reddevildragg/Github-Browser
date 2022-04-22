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
          console.log(this.filters);
          let projects = this.projects;
          if(this.filters.length > 0)
          {
            projects = this.FilterByTopic(projects);
            projects = this.FilterByOwner(projects);
            return projects;
          }
          else {
            return this.projects
          }
        }
      },
  methods:
  {
    validateFilterCategory(category)
    {
      let filter = false;
      for(let i = 0; i < this.filters.length; i++)
      {
        if(this.filters[i].category === category)
        {
          filter = true;
          break;
        }
      }
      return filter;
    },
    FilterByTopic(projects)
    {
      let vm = this;

      if(!this.validateFilterCategory("Topic"))
      {
        return projects;
      }

      return projects.filter(x =>
      {
        for(let i = 0; i < vm.filters.length; i++)
        {
          if(vm.filters[i].category === "Topic")
          {
            return _.contains(x.topics, vm.filters[i].name)
          }
        }
      })
    },
    FilterByOwner(projects)
    {
      let vm = this;

      if(!this.validateFilterCategory("Owner"))
      {
        return projects;
      }

      return projects.filter(x =>
      {
        for(let i = 0; i < vm.filters.length; i++)
        {
          if(vm.filters[i].category === "Owner")
          {
            console.log(x.owner.login);
            return x.owner.login === vm.filters[i].name;
          }
        }
      })
    }
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