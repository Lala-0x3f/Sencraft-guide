<template>
  <div class="logo">
    <SpeedInsights />
    <img src="/logo.svg">
    <b>Sen</b><span>Craft </span>
  </div>
</template>

<script setup lang="ts">
  import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<style scoped>

@import url(https://gfonts.aby.pub/css2?family=Allura&family=Pixelify+Sans:wght@400;500;600;700&display=swa);
@font-face {
  font-family: 'Optima';
  src: url('~/assets/fonts/Optima Medium.woff');
}

.logo {
  display: flex;
  flex: auto;
}

.logo>* {
  position: relative;
}

b {
  font-size: 1.3em;
  font-family: 'Optima',sans-serif;
}

span {
  font-family: 'Allura','Monotype Corsiva','Courier New', Courier, monospace;
  font-size: 1.75em;
  bottom: 0.15em;
}

img {
  height: 100%;
  margin-inline: 1rem;
  display: block;
  /* filter: invert(1);
  mix-blend-mode: difference; */
}
</style>



