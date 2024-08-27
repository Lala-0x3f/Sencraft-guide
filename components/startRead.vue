<template>
  <div class="s" style="height: 50vh; background-image:url(https://i.111666.best/image/DIko6z4XSVppZzr3SEeSCp.jpg);background-size: cover;">
    <div style="position: relative;overflow: hidden;width: 70%;height: 12vh;background-color: white;">
      <div class="con">
        <i>
          阅读全部内容
        </i>
      </div>
      <div class="background-grid">
        <!-- 使用字符 ↗ 生成网格 -->
        <span v-for="n in totalCells" :key="n" class="grid-cell">↗</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const totalCells = 4000
</script>

<style scoped>
p{
  background-color: white;
}
.s{
  background-blend-mode: lighten;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.background-grid {
  user-select: none;
  position: absolute;
  flex-wrap: wrap;
  white-space: break-spaces;
  width: 100%;
  display: flex;
  line-height: 1em;
  transition: all;
  animation: moveGrid 20s linear infinite;
  &:hover span{
    font-weight: 600;
  }
}

@keyframes moveGrid {
  0% {
    top: 0em;
  }

  50% {
    top: -12em;
  }

  100% {
    top: -18em;
  }
}

.con{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

i{
  font-size: 2rem;
  background-color: var(--docus-body-backgroundColor);
  padding: 2pt 6pt;
  z-index: 3;
  line-height: 1em;
}

span{
  transition: color 100ms ease;
  &:hover{
  color: transparent;
}}


.grid-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12pt;
  /* 设置字体颜色和其他样式 */
}
</style>
