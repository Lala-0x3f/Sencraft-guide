<template>
  <div class="container">
    <div class="text">
      <slot />
    </div>
    <div class="imagearea" :style="{ backgroundColor: color }">
      <img v-if="imageUrl" :src="imageUrl" alt="Image" >
      <video v-else :src="videoUrl" autoplay muted preload="auto" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  videoUrl?: string
  imageUrl?: string
  color?: string
}>()

</script>


<style scoped>


.container {
  position: relative;
  margin: 2rem 0;
}

.imagearea {
  height: 40vh;
  width: 100%;
  overflow: hidden;
  opacity: 0.8;
  top: 0;
}

.text {
  font-size: 7vw;
  width: 150%;
  line-height: 1em;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Consolas, "fira code", "SF Mono", Monaco, sans-serif;
  position: absolute;
  z-index: 2;
}

img,video {
  all: initial;
  aspect-ratio: auto;
  min-height: 100%;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  mix-blend-mode: normal;
  transition: all ease-out 150ms; 
  opacity: 40%;
  &:hover {
    opacity: 100%;
  }
}

@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .imagearea {
    height: 100vh;
    grid-column: span 3 / span 3;
    grid-column-start: 2;
  }

  .text {
    font-size: 7vw;
    text-wrap: nowrap;
    position: relative;
  }
}
</style>