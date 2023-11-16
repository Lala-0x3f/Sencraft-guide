<template>
  <div class="logo">
    <img src="/logo.svg">
    <b>
      Sen
    </b>
    <span>
      Craft
    </span>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.logo {
  display: flex;
  flex: auto;
}

.logo >* {
  position: relative;
}

b {
  font-size: 1.3em;
}

span {
  font-family: 'Monotype Corsiva',sans-serif;
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

