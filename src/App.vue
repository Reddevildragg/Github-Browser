<template>
  <HomePage/>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import github from "@/Service/Github";

export default {
  name: 'App',
  components: {
     HomePage
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
