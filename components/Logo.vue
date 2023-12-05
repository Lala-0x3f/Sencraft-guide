<template>
  <div class="logo">
    <img src="/logo.svg">
    <b>Sen</b><span>Craft </span>
  </div>
</template>

<style scoped>
/* @font-face {
  font-family: 'Monotype Corsiva';
  src: url('Monotype Corsiva.ttf') format("ttf");
  src: local('Monotype Corsiva');
} */

.logo {
  display: flex;
  flex: auto;
}

.logo>* {
  position: relative;
}

b {
  font-size: 1.3em;
}

span {
  font-family: 'Monotype Corsiva','Courier New', Courier, monospace;
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

