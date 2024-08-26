<template>
  <NuxtLink :to="to" class="a">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>

<style scoped>
.a {
  z-index: 1;
  line-height: 1.2em;

  &::after {
    position: relative;
    content: '↗';
    left: 0;
    top: 0;
    transition: all 50ms ease-in;
  }

  &:hover::after {
    left: 0.1em;
    top: -0.1em;
  }
}
</style>