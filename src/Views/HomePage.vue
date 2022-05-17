<template>

  <div class="l-navbar" :class="{show: this.openMenu }">
    <nav class="nav">
      <div class="nav_logo"> <i class='bi bi-speedometer nav_logo-icon'></i> <span class="nav_logo-name">BBBootstrap</span> </div>

      <div class="nav_list">
        <a href="#" class="nav_link active"> <i class='bi bi-speedometer nav_icon'></i> <span >Dashboard</span> </a>
        <a href="#" class="nav_link"> <i class='bi bi-speedometer nav_icon'></i> <span>Users</span> </a>
        <a href="#" class="nav_link"> <i class='bi bi-speedometer nav_icon'></i> <span>Messages</span> </a>
        <a href="#" class="nav_link"> <i class='bi bi-speedometer nav_icon'></i> <span>Bookmark</span> </a>
        <a href="#" class="nav_link"> <i class='bi bi-speedometer nav_icon'></i> <span>Files</span> </a>
        <a href="#" class="nav_link"> <i class='bi bi-speedometer nav_icon'></i> <span>Stats</span> </a>
      </div>

      <div class="nav_link bi bi-arrow-right-circle expand_toggle" @click="this.ToggleNavBar"></div>

    </nav>
  </div>

  <section class="contentBox">
    <topics-dropdown></topics-dropdown>
    <ProjectLayout></ProjectLayout>
  </section>

</template>


<script>
import TopicsDropdown from "@/Components/TopicsDropdown";
import ProjectLayout from "@/Components/ProjectLayout";
import {useProjectStore} from "@/store/projects";
import { ref } from 'vue'

export default {
  name: 'HomePage',
  components: {ProjectLayout, TopicsDropdown},
  setup()
  {
    let openMenu = ref(false);
    function ToggleNavBar()
    {
      openMenu.value = !openMenu.value;
    }
    useProjectStore().FetchProjects()
    return {
      ToggleNavBar, openMenu
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a
{
  color: #42b983;
}

$z-fixed: 100;
$nav-width: 68px;
$first-color: #4723D9;
$first-color-light: #AFA5D9;
$white-color: #F7F6FB;
$body-font: 'Nunito', sans-serif;
$normal-font-size: 1rem;

.contentBox
{
  padding-left: $nav-width;
}
.expand_toggle
{
  font-size: 1.5rem;
  cursor: pointer;
  height: 50px;
}

.l-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: $nav-width;
  height: 100vh;
  background-color: $first-color;
  padding: .5rem 1rem 0 0;
  transition: width .5s;
  z-index: $z-fixed
}

.show {
  width: calc(#{$nav-width} + 156px)
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden
}

.nav_list
{
  flex: auto;
}

.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: .5rem 0 .5rem 1.5rem
}

.nav_logo {
  margin-bottom: 2rem
}

.nav_link {
  position: relative;
  color: $first-color-light;
  margin-bottom: 1.5rem;
  transition: .3s
}

.nav_icon {
  font-size: 1.25rem
}

.active {
  color: $white-color
}

.active::before {
  content: '';
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: $white-color
}

@media screen and (min-width: 768px)
{
  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
  }
}

</style>
