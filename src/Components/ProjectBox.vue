<template>
  <div class="card">
  <a :href="project.html_url" target="_blank">
    <div class="image">
      <img :src="GetImage()" :alt="project.name" v-on:load="isLoaded()" v-bind:class="{ active: isActive }">
    </div>
    <div class="projectInformation">
      <div class="coreInformation">
        <h3>{{ project.name }}</h3>
        <p>{{ project.owner.login }}</p>
      </div>
      <div class="description">
        <h3>{{ GetDescription() }}</h3>
      </div>
    </div>
  </a>
  </div>
</template>

<script>

import axios from "axios";
import github from "@/api/Github";

export default {
  name: "ProjectBox",
  props: {
    index: Number,
    project: Object,
    name123: String
  },
  data(){
    return{
      isActive:false,
      ProjectCustom: null
    }
  },
  watch: {
    project: {
      // Run as soon as the component loads
      immediate: true,
      async handler() {
        this.ProjectCustom = await github.GetCustomProjectData(this.project);
      }
    },
  },
methods:{
  isLoaded()
  {
    this.isActive = true;
  },
  GetImage()
  {
    if(this.ProjectCustom && this.ProjectCustom.image_url)
    {
      return this.ProjectCustom.image_url
    }
    else if(this.project.owner && this.project.owner.avatar_url)
    {
      return this.project.owner.avatar_url;
    }
    else
    {
      return "https://source.unsplash.com/random/300x300"
    }
  },
  GetDescription()
  {
    if(this.ProjectCustom && this.ProjectCustom.description)
    {
      return this.ProjectCustom.description
    }
    else if(this.project.description && this.project.description != null)
    {
      return this.project.description;
    }
    else
    {
      return "https://source.unsplash.com/random/300x300"
    }
  }
}
}
</script>

<style scoped lang="scss">
@import "../styles/style";

.card {
  --hex-parent-height: 10vh;

  counter-increment: rank;
  position: relative;
  background: $card;
  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  border-radius: 4px;
  overflow: hidden;
  animation: mouseOut 0.3s ease-in;
  padding-bottom: var(--hex-parent-height);
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

  .projectInformation
  {
    position: absolute;
    height: 100%;
    width: 100%;
    background: $card;
    z-index: 10;
    animation: ProjectInformationHoverOut 0.3s ease-in;

    top: calc(100% - var(--hex-parent-height));

    display: flex;
    flex-direction: column;

    .coreInformation
    {
      height: calc(100% - (100% - var(--hex-parent-height)));
      display: inline-block;
      width: 100%;
    }
    .description
    {
      background-color: #42b983;
      flex-grow: 1;

      h3
      {
        padding: 15px;
        color: $card;
        height: 100%;
        word-wrap: break-word;
      }
    }

    @keyframes ProjectInformationHoverOut {
      0% {
        top: 0%;
      }
      100% {
        top: calc(100% - var(--hex-parent-height));
      }
    }
  }
}
.card:hover {
  animation: mouseOver 0.3s ease-in forwards;

  .projectInformation
  {
    animation: ProjectInformationHoverOn 0.3s ease-in forwards;
    @keyframes ProjectInformationHoverOn {
      0% {
        top: calc(100% - var(--hex-parent-height));
      }
      100% {
        top: 0%;
      }
    }
  }
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