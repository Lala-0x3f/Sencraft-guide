<template>
  <div :style="{ backgroundImage: `url(${backgroundImage})` }" class="background-component">
    <!-- Your component content goes here -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'BackgroundComponent',
  setup() {
    const backgroundImage = ref<string>('');

    const detectColorMode = (mediaQueryList: MediaQueryList) => {
      // Choose the appropriate background image based on the detected color mode
      backgroundImage.value = mediaQueryList.matches
        // ? 'https://fastly.jsdelivr.net/gh/Lala-0x3f/picx-images-hosting@master/20231128/Screenshot-2023-11-28-162729.3663n6820jw0.webp'
        // : 'https://fastly.jsdelivr.net/gh/Lala-0x3f/picx-images-hosting@master/20231128/Screenshot-2023-11-28-162623.5p2y2c7ejao0.webp';
        ? 'https://i0.hdslb.com/bfs/new_dyn/c89abe82032c09cb186c39f3752f27fd340820855.png@1080w_720h_1e_1c.avif'
        :   'https://i0.hdslb.com/bfs/new_dyn/0f16d4789b821ca6a4b98063981a7e9e340820855.jpg@1052w_!web-dynamic.avif'
    };

    // Call the detectColorMode function when the component is mounted
    onMounted(() => {
      const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

      // Initial detection
      detectColorMode(mediaQueryList);

      // Listen for changes in color mode
      mediaQueryList.addEventListener('change', (event) => detectColorMode(event.target as MediaQueryList));
    });

    return {
      backgroundImage,
    };
  },
});
</script>

<style scoped>

.background-component {
  height: 100vh;
  width: 100vw;
  z-index: -999;
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
}
</style>

