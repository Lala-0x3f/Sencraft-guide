# 颜色组

在 ezEdits 中，颜色组代表了可以在多个命令中使用的一列方块，其中方块的顺序将被保留。

内置预设颜色组可以使用 `##` 访问。例如 `##LegacyWool` 表示内置的羊毛颜色组，从白色羊毛、橙色羊毛到红色羊毛，最后是黑色羊毛。

![](https://ezedits.gitbook.io/~gitbook/image?url=https%3A%2F%2F62542430-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmwyNbIIrWCkyIco2qJ9j%252Fuploads%252FVdI8YOxQ0JqMfXcDJ4Sf%252F2024-02-04_19.31.54.png%3Falt%3Dmedia%26token%3D0ac9106f-8618-4747-bb37-5f802d11444a&width=768&dpr=4&quality=100&sign=4d478b57e3b88670730fd1a2b57bf80cf2a289c47bf814cfe51b2f0fb36f8603)

用户保存的颜色组可以使用 `#` 前缀进行保存和访问

一些使用颜色组的功能包括：

- `//eztexture ...` - 纹理命令
- `#palette - 蒙版`
- `//ezbrush gradient ...` - 笔刷

### 颜色组解释

在 ezEdits 中，颜色组代表了可以在多个命令中使用的方块列表，其中方块的顺序将被保留。

用户保存的颜色组可以使用 `!` 前缀进行保存和访问，内置预设颜色组可以使用 `#` 访问。
例如 `#LegacyWool` 表示内置的羊毛颜色组，从白色羊毛、橙色羊毛到红色羊毛，最后是黑色羊毛。

一些使用颜色组的功能包括：

- `//eztexture ...` - 纹理命令
- `#palette` - 蒙版
- `//ezbrush gradient ...` - 画笔

颜色组可以通过简单的方块列表构建，也可以通过几种修饰符构建：

- `,` - 连接：将一个方块或颜色组添加到前一个方块或颜色组的**末尾**。
  例如 `stone,dirt` 是一个由石头和泥土组成的两个方块的颜色组。`stone, #LegacyWool` 是一个由石头和内置的羊毛颜色组的方块组成的颜色组。

- `-` - 反转：反转颜色组的顺序。
  例如 `-#LegacyWool` 是羊毛预设颜色组的反转顺序（从黑色开始而不是白色）。

- `(start:end)` - 子颜色组：返回颜色组的一部分。
  例如 `#LegacyWool(1:8)` 将返回内置羊毛颜色组的**前8个方块**。

- `*` - 重复器：重复前一个片段指定的次数。
  例如 `gold_block*10, diamond_block` 将返回10个金块，然后是一个钻石块的颜色组。

- `[]` - 分组：将颜色组组合在一起，以便修饰符将其视为单个颜色组。
  例如 `-#LegacyWool, gold_block-[#LegacyWool, gold_block]` 将以**反转顺序**返回内置的羊毛颜色组，最后是一个金块。其中 `#LegacyWool, gold_block` 将以金块开头。

- `=` - 结果：允许根据需要将颜色组自动完成为其方块列表。

## 指令

所有的颜色组指令皆以 `//ezpalette ...` 开头

### 定义颜色组

```sh
//ezpalette fetch <paletteName> [direction] [length] [-f] [-s]
```

定义一个颜色组，并指定名称。

`direction`（默认：AIM）：抓取的方向。默认为用户所面对的方向。

`direction`（默认：0）：要抓取的方块数。长度为0（默认）将一直抓取方块，直到到达空气为止。

`-f`：激活时，将覆盖同名的现有颜色组。

`-s`：激活以从选择中抓取颜色组。轴由不是1个方块长的一侧定义。

![](https://ezedits.gitbook.io/~gitbook/image?url=https%3A%2F%2F62542430-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmwyNbIIrWCkyIco2qJ9j%252Fuploads%252FSvT88repFEVTDXGpBaft%252Fezp_fetch.gif%3Falt%3Dmedia%26token%3D54d28d19-1105-443d-b0b9-5360d4fbb5a2&width=300&dpr=1&quality=100&sign=c9c5b3b759362dfad7447c2c5b3d464ea1bc946e9fa3b223d5bfbf7e9627df20)

### 删除颜色组

```sh
//ezpalette delete <paletteName>
```

删除与给定名称匹配的用户定义颜色组。

### 列出颜色组

```sh
//ezpalette list [SET]
```

列出所有可用的颜色组。

`ALL` - 列出所有可用的颜色组。

`DEFAULT` - 列出所有默认插件颜色组。

`MINE` - 列出所有用户定义的颜色组。

### 放置颜色组

```sh
//ezpalette place <palette> [direction]
```

将颜色组以一排方块的形式放置在给定方向。
默认方向为用户所面对的方向。

### 交换色板

```sh
//ezpalette swap <sourcePalette> <targetPalette> [-a] [-f]
```
区域操作，用源颜色组的方块与目标颜色组的方块交换。

`-a`：激活以包含空气方块（如果源颜色组包含空气）。

`-f`：激活以拉伸目标颜色组，使其与源颜色组的大小匹配。

### 在聊天栏打印颜色组

```sh
//ezpalette print <palette>
```
在聊天中打印给定颜色组的方块。可以点击方块列表进行复制。

### 颜色组编码

```sh
//ezpalette encode <palette>
```

打印表示给定颜色组的编码字符串。单击字符串进行复制。
仅支持原版 Minecraft 方块。

### 颜色组解码

```sh
//ezpalette decode <string>
```

打印给定编码颜色组字符串的方块。可以点击方块列表进行复制。



