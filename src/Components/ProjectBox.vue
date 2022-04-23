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

import github from "@/Scripts/api/Github";

export default {
  name: "ProjectBox",
  props: {
    index: Number,
    project: Object,
  },
  data(){
    return{
      isActive:false,
    }
  },
  mounted()
  {
    let div = document.querySelector('div')
    document.addEventListener('DOMContentLoaded', () => {
      // Adding timeout to simulate the loading of the page
      setTimeout(() => {
        div.classList.remove('prevent-animation')
      }, 2000)
    })
    },
  methods:{
    defaultImageUrl: "https://source.unsplash.com/random/300x300",
  isLoaded()
  {
    this.isActive = true;
  },
  GetImage()
  {
    if(this.project.CustomData && this.project.CustomData.image_url && this.project.CustomData.image_url.length > 0)
    {
      return this.project.CustomData.image_url[0];
    }
    else if(this.project.owner && this.project.owner.avatar_url)
    {
      return this.project.owner.avatar_url;
    }
    else
    {
      return this.defaultImageUrl;
    }
  },
  GetDescription()
  {
    if(this.project.CustomData && this.project.CustomData.description)
    {
      return this.project.CustomData.description
    }
    else if(this.project.description)
    {
      return this.project.description;
    }
  }
}
}
</script>

<style scoped lang="scss">
@import "../styles/style";

.card {
  --hex-parent-height: 14vh;

  counter-increment: rank;
  position: relative;
  background: $card;
  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: var(--hex-parent-height);

  transition: top 0.3s;

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
      &.active
      {
        animation: imageFadeIn 0.5s ease-in forwards;
        animation-delay: 0.5s;

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
    display: flex;
    flex-direction: column;

    top: calc(100% - var(--hex-parent-height));

    transition: top 0.3s;

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

  }
}
.card:hover {
  top: -5px;
  .projectInformation
  {
    top:0;
  }
}

</style>