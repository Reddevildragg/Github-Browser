<template>
  <transition-group tag="repoBoxes">
    <article v-for="(item, index) in projects" :key="index" class="card">
      <project-box :index="index" :project="item" :filter="filter"></project-box>
    </article>
  </transition-group>
</template>

<script>
import github from "@/Service/Github";
import ProjectBox from "@/Components/ProjectBox";

export default {
  name: "ProjectLayout",
  components: {ProjectBox},
  props:{
    filter: [],
  },
  data(){
    return{
      projects:[],
    }
  },
  mounted()
  {
    this.GetProjects();
  },
  methods:{
    async GetProjects()
    {
      this.projects = await github.GetUserProjects();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$card: #2B2A34;

a {
  color: #42b983;
}

repoBoxes
{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  counter-reset: rank;
  margin: 4%;

  article {
    counter-increment: rank;
    position: relative;
    background: $card;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    border-radius: 4px;
    overflow: hidden;
    animation: mouseOut 0.3s ease-in;
  }
  article:hover {
    animation: mouseOver 0.3s ease-in forwards;
  }

  // ANIMATIONS
  @keyframes mouseOver {
    0% {
      top: 0;
    }
    100% {
      top: -5px;
    }
  }

  @keyframes mouseOut {
    0% {
      top: -5px;
    }
    100% {
      top: 0;
    }
  }
}
</style>