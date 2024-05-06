# 样式

### `#aim`

将玩家对准的方块作为样式。

![](https://ezedits.gitbook.io/~gitbook/image?url=https%3A%2F%2F62542430-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmwyNbIIrWCkyIco2qJ9j%252Fuploads%252F699IOaviExrmZAuGj2GW%252FaimPattern.gif%3Falt%3Dmedia%26token%3D90f847f0-c517-45b4-9391-01f8c0d0bf6c&width=300&dpr=2&quality=100&sign=6356aa8dc2488e1404753133159bd2718d74c0a5511a6af0075e7d2783e51893)

### `#eznoise`

```
#eznoisepattern[palette][noisePreset][<scale>][<seed>]
```

别名：`#eznp`

使用噪声预设值返回调色板块。它还具有以下内置预设：

- `#ridged[palette][<scale>][<seed>]`

- `#smoothcells[palette][<scale>][<seed>]`

- `#voronoiedge[palette][<scale>][<seed>]`

### `#vectorgradient`

```
#vectorgradientpattern[palette][vector][distance][<noisePreset>][<noiseScale>][<noiseSeed>]
```

别名：`#vgradientp`

使用给定距离长度沿着矢量设置颜色组，所选方块基于距离加上混合因子进行选择。也可以使用噪声预设。

### `#selection`
```
#selection[selection][<offset>]
```

速记：`#sel[selection][<offset>]`

将选区内容作为样式，类似 `#clipboard` 但是无需复制。

可选变量，用于将模式偏移给定向量。`<offset>`