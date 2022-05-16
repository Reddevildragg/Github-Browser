<template>

  <div class="l-navbar" :class="{show: this.openMenu }">
    <nav class="nav">
      <div>
        <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">BBBootstrap</span> </a>

        <div class="nav_list">
          <a href="#" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">Users</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-message-square-detail nav_icon'></i> <span class="nav_name">Messages</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Bookmark</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-folder nav_icon'></i> <span class="nav_name">Files</span> </a>
          <a href="#" class="nav_link"> <i class='bx bx-bar-chart-alt-2 nav_icon'></i> <span class="nav_name">Stats</span> </a>
        </div>

        <div class="header_toggle" @click="this.ToggleNavBar">XXX</div>

      </div>

      <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>

    </nav>
  </div>

  <topics-dropdown></topics-dropdown>
  <ProjectLayout></ProjectLayout>
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
$header-height: 3rem;
$nav-width: 68px;
$first-color: #4723D9;
$first-color-light: #AFA5D9;
$white-color: #F7F6FB;
$body-font: 'Nunito', sans-serif;
$normal-font-size: 1rem;

.header_toggle
{
  font-size: 1.5rem;
  cursor: pointer;
  height: 50px;
}

.l-navbar {
  position: fixed;
  top: 0;
  left: 0;//-30%;
  width: $nav-width;
  height: 100vh;
  background-color: $first-color;
  padding: .5rem 1rem 0 0;
  transition: 5s;
  z-index: $z-fixed
}

.show {
  left: 150px
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden
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

@media screen and (min-width: 768px)
{
  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
    transition: 5s;
  }

  .show {
    width: calc(#{$nav-width} + 156px)
  }
}

</style>
