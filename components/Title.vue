<template>
  <h1 ref="titleRef" class="text-nowrap" >
    <slot />
  </h1>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

// Props 定义
const props = defineProps({
  // title: {
  //   type: String,
  //   // required: true
  // },
  // className: {
  //   type: String,
  //   default: ''
  // }
});

const titleRef = ref(null);
const fontSize = ref(150); // 初始字体大小

const adjustFontSize = async () => {

  const parentWidth = titleRef.value?.parentElement?.offsetWidth ?? 0;
  // const parentWidth = titleRef.value?.parentElement?.scrollWidth ?? 0;

  let newFontSize = fontSize.value;
  // let newFontSize = titleRef.value.style.fontSize

  titleRef.value.style.fontSize = `${newFontSize}px`;
  while (titleRef.value.scrollWidth > parentWidth && newFontSize > 5) {
    newFontSize--;
    titleRef.value.style.fontSize = `${newFontSize}px`;
  }
  while (titleRef.value.scrollWidth < parentWidth) {
    newFontSize++;
    titleRef.value.style.fontSize = `${newFontSize}px`;
  }

};

// 在组件挂载时调整字体大小
onMounted(() => {
  titleRef.value.style.fontSize = `${fontSize.value}px`
  adjustFontSize();
  titleRef.value.style.color = "var(--docus-body-color)"
  window.addEventListener('resize', adjustFontSize);
});

// 组件销毁前移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('resize', adjustFontSize);
});

// 当变化时调整字体大小
watch(() => props.$slots, () => {
  // adjustFontSize();
});
</script>

<style scoped>
h1 {
  color: transparent;
  font-weight: 900;
}

.text-nowrap {
  white-space: nowrap;
}
</style>
