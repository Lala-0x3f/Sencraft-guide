<template>
  <article style="padding: 2rem;">
    <title>🧭 SenCraft 指南</title>
    <div class="grid-container" style="padding: 5vh 0;">
      <div style="width: 100%;">

        <ProseH1>
          <Title>
            SenCraft 指南
          </Title>
        </ProseH1>
      </div>
      <div style="padding-top: 1rem">
        <Join />
      </div>
    </div>

    <Card image-url="https://i.111666.best/image/yaic38urPJV3lTmrTzIXTc.jpg"
      color="pink">
      <i style="font-size: 0.25em;">初来乍到可能感觉手足无措、不知道怎么开始玩</i>
      <CatalogLink to="/join/base#服务器地址">服务器IP</CatalogLink>
      <CatalogLink to="/join/rule">服务器规则</CatalogLink>
      <i style="font-size: 0.25em;">和本地存档相比，服务器功能可丰富了</i>
      <CatalogLink to="/join/commands">一些基础指令</CatalogLink>

      <CatalogLink to="/join/chatting">来一起交流</CatalogLink>
    </Card>

    <Card image-url="https://i.111666.best/image/54f0VD6F0FD5fYX1Bk2Xps.jpg" color="PapayaWhip">
      <CatalogLink to="/we">World●Edit</CatalogLink>
      <CatalogLink to="/arceon">Arceon</CatalogLink>
      <CatalogLink to="/vs">Voxel●Sniper</CatalogLink>
      <CatalogLink to="/ezedits">ezEdits</CatalogLink>
      <i style="font-size: 0.25em;">基础的建筑工具，掌握后效率可以提升114514倍</i>
    </Card>
    <LazyEllipsis />
    <Card video-url="https://jx.91vrchat.com/bl/?url=https://www.bilibili.com/video/BV1M44y1Q7hA/" color="cyan">
      <CatalogLink to="/worlds/huimeng">绘梦●共创</CatalogLink>
      <CatalogLink to="/worlds/custom-world">自定义世界</CatalogLink>
      <CatalogLink to="/we">Realms</CatalogLink>
      <i style="font-size: 0.25em;">你可以在领域系统中，使用金币创建一个2048*2048的私人世界，并且可以邀请小伙伴一起创造</i>
      <CatalogLink to="/plots/start">地皮世界</CatalogLink>

      <i style="font-size: 0.25em;">灵活的地皮世界，可为地皮配置各种奇妙 <NuxtLink to="/plots/flags">Flags</NuxtLink></i>
    </Card>
    <Card
      image-url="https://xviewer.pages.dev/d/?i=https://i.111666.best/image/kWVkZL7LQxfJyHISD195z4.jpg"
      color="white">
      <CatalogLink to="/join/import-export">快速导入和导出建筑</CatalogLink>
      <CatalogLink to="/join/eb">优秀建筑</CatalogLink>
    </Card>
    <div class="grid-container" style="padding: 5vh 0;">

      <p>
        这就完了吗，并不。除此之外我们还支持
        GoBrush、GoPaint、METABrush、Axiom、贝塞尔曲线（Twkbeziertemplate、Curvebuilding）以及海量建筑辅助工具。还有方便红石（包括红石音乐）玩家的小功能。
      </p>
    </div>
    <NuxtLink to="/join/getting-started">

      <StartRead />
    </NuxtLink>
    <div class="grid-container" style="padding: 5vh 0;">
      <div>
        <ProseH2>赞助</ProseH2>
        <p>
          欢迎大家对 SenCraft森世界服务器进行无偿捐赠，你的每次投喂都对森服的长久稳定运行有很大帮助！
        </p>
        <ProseA href="https://ifdian.net/a/HoShiNoMino">爱发点赞助 ↗</ProseA>
      </div>
      <div>
        <ProseH2>爱发电赞助名单</ProseH2>
        <Sponsors />
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import CatalogLink from '~/components/CatalogLink.vue';
import Title from '~/components/Title.vue';


</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  /* 1列宽，适用于小屏幕 */
  gap: 16px;
  /* 可选：设置列之间的间距 */
}

@media (min-width: 1080px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* 2列宽，适用于大屏幕 */
    gap: 2rem;
  }

}
</style>
