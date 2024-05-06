# 蒙版

### 临近蒙版

```
#near[mask][distance]
#near[mask][minDistance][maxDistance]
```

蒙版到距离 `mask` 一定球形（欧几里得）距离内的所有方块。

不会修改与内部匹配的方块。

也可以设置为排除距离小于最小距离的方块。

| 效果 | 参数变化 |
| --- | --- |
| ![](https://ezedits.gitbook.io/~gitbook/image?url=https%3A%2F%2F62542430-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmwyNbIIrWCkyIco2qJ9j%252Fuploads%252FSyl0Q63A7ntN8Ci06zWv%252Fmask_near_mask.gif%3Falt%3Dmedia%26token%3D0cb73039-28a3-4a2e-ac86-5c3af5e282ba&width=300&dpr=1&quality=100&sign=79faf7d7ef951f98f26d84069d3e1ffdedf06ae50d48cb223721a75d27ff2cdc) | [mask] |
| ![](https://ezedits.gitbook.io/~gitbook/image?url=https%3A%2F%2F62542430-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmwyNbIIrWCkyIco2qJ9j%252Fuploads%252F76WibCLevcPChWEkTooR%252Fmask_near_max.gif%3Falt%3Dmedia%26token%3D8dcaadde-c5e6-4552-b0bd-91b367ca96b8&width=300&dpr=1&quality=100&sign=f866379e7ba2e0df07776b893a2f7cabe0106a93f4d95c0c9bd79774804bc1ba) | [distance] |
| ![](https://ezedits.gitbook.io/~gitbook/image?url=https%3A%2F%2F62542430-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmwyNbIIrWCkyIco2qJ9j%252Fuploads%252FZ8TuHE0R7eeZjNL7weaa%252Fmask_near_min_max.gif%3Falt%3Dmedia%26token%3D1da658e2-8a68-4bc9-9fe3-d9d6e3f6033e&width=300&dpr=1&quality=100&sign=3bf6da5bdbd679c9248050cf75be4d4671755f22744bd64ff9a992e71acaa79f) | [minDistance][maxDistance] |

### 对准的方块

```
#aim
```

将你对准的方块作为蒙版

### 区块照度蒙版

```
#blocklight[lightLevel]
#blocklight[minLevel][maxLevel]
```

蒙版到给定块光照级别的方块（由非天窗光源提供照明）。可选地采用最小和最大光照级别，匹配该范围内的任何级别。

### 全关照蒙版

```
#truelight[lightLevel]
#truelight[minLevel][maxLevel]
```

蒙版到给定总光照级别的方块（由包括天窗在内的所有光源提供照明）。可选地采用最小和最大光照级别，匹配该范围内的任何级别。

### 纹理蒙版

```
#eznoisemask[noisePreset][<scale>][<threshold>][<seed>]
#eznm
```
使用纹理预设作为蒙版

`threshold`：阈值，只会匹配高于此值的方块 `0 ~ 1`

### 向量渐变蒙版

```
#vectorgradientmask[vector][distance][<noisePreset>][<noiseScale>][noiseSeed]
#vgradientm
```
蒙版沿着给定距离长度的向量的方块。距离更近的方块更有可能通过蒙版检查。(兼容噪声预设）

### 毗邻蒙版

```
#attached[<vector,vector,vector ...>]
```

至少与一个相邻的非空气方块连接的方块。

可选地采用要检查的方向向量列表，而不是检查每个侧面。
例如 `#attached[up,down,left,north]`

在任何情况下，"attached" 意味着方块与相邻方块"接触"。因此，底部半砖不会通过，而带有状态的灯笼会通过。`#attached[up]` `[hanging=true]`

### 完整方块蒙版

填充整个立方体空间的方块。

例如，1-7层的雪不会计入，但8层的雪、像石头这样的方块，或者像玻璃这样的透明方块会被计入。

### 颜色组内蒙版

严格：
- `#palette[palette][<strict>]`
宽松：
- `#fuzzypalette[palette]`
- `#fpalette`

匹配在指定颜色组中的方块。

`strict`：是否匹配方块状态，如朝向、含水等。

宽松模式不匹配方块状态，等效于 `#palette[palette][False]`