<template>
  <a :href="project.html_url" target="_blank">
    <div class="image">
      <img src="https://source.unsplash.com/random/300x300" :alt="project.name" v-on:load="isLoaded()" v-bind:class="{ active: isActive }">
    </div>
    <div class="description">
      <h3 class="title">{{ project.name }}</h3>
      <p class="artist">{{ project.name }}</p>
    </div>
  </a>
</template>

<script>

export default {
  name: "ProjectBox",
  props: {
    index: Number,
    project: Object,
  },
  data(){
    return{
      isActive:false
    }
  },
methods:{
  isLoaded()
  {
    this.isActive = true;
  }
}
}
</script>

<style scoped lang="scss">

$card: #2B2A34;

a {
  color: #42b983;
}

    .image {
      position: relative;
      width: 100%;
      &:after {
        // This forces the image container to be a square
        content: '';
        display: block;
        padding-bottom: 100%;
      }
      &:before {
        content: '•••';
        font-size: 24px;
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: rgba(white, 0.1);
        z-index: 0;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        opacity: 0;
        &.active {
          animation: imageFadeIn 0.5s ease-in forwards;
          animation-delay: 0.5s;
        }
      }
    }

// ANIMATIONS
@keyframes imageFadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>