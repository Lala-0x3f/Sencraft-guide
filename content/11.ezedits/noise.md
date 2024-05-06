# 纹理

## 噪声解释

噪声对于从未深入研究过的人来说很复杂，但简单来说，噪声是从某些输入（通常是 X、Y、Z 坐标）中获取值的一种方式。

你可能最熟悉噪声的地方是在 Minecraft 的地形生成中。在世界的每一点，会结合几个噪声函数来确定是否应该放置一个方块，如果是的话，应该放置哪个方块。

在插件中，你会发现几种不同特性的噪声类型，其中 Cellular 具有许多可自定义的附加参数。

一些使用噪声的功能包括：

- `//eznoisegen ...` - 区域命令

- `#eznoisemask` - 遮罩

- `//ezbrush gradient` ... - 画笔

ezEdits 中的噪声基于 FastNoiseLite 的修改版本，因此我们强烈推荐使用该网站来尝试噪声参数：[FastNoiseLite](http://auburn.github.io/FastNoiseLite/)

每个参数和许多值也有一个速记，例如`Fractal`而不是`FractalType`或`Simplex`而不是`OpenSimplex2`。如果有，速记将写在括号中。

::alert{type="info"}
设置要使用的噪声类型。这是任何噪声的开始，格式为 ，例如，所有其他参数都将位于括号之间。`Noise()` `Perlin()`

- `Perlin (per)`

- `OpenSimplex2 (simplex)`

- `OpenSimplex2S (smooth)`

- `Value (val)`

- `ValueCubic (cubic)`

- `White`

- `Cellular (vor)`

- `Shard`

::

## 参数

### 基本参数

| 属性               | 描述                                                                       |
| ------------------ | -------------------------------------------------------------------------- |
| Seed               | 设置噪声的种子值。-1 或没有值将导致随机噪声种子。                          |
| Frequency (Freq)   | 设置噪声的频率。较高的频率将导致更陡峭的噪声，较低的值将导致更平滑的噪声。 |
| Inverted (Invert)  | 是否反转噪声值。默认值为 false。                                           |
|                    | - True                                                                     |
|                    | - False                                                                    |
| ValueMapping (Map) | 是忽略还是覆盖值映射。默认情况下，对噪声进行采样以映射 0 和 1 之间。       |
|                    | - Default (Def)                                                            |
|                    | - None (No)                                                                |
|                    | - Override (OR)                                                            |
|                    | 如果被覆盖：                                                               |
|                    | - LowerBound (Min)                                                         |
|                    | - UpperBound (Max)                                                         |
| YScaling (Y)       | 使用 3D 噪声时，这可用于拉伸或挤压 Y 轴。                                  |

### Cellular 噪声参数

| 属性                                    | 描述                                                                                                                          |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **CellularJitterModifier (Jitter)**     | 通常控制蜂窝噪声节点的随机抖动或分布。0 是完美的网格，1 是最大“随机”，没有重叠。大于 1 的值将开始与相邻值重叠。范围：0 到 1.0 |
| **CellularDistanceFunction (Distance)** | 控制用于确定每个点到其节点的距离值的数学方法。                                                                                |
|                                         | - Euclidean：欧几里得距离                                                                                                     |
|                                         | - EuclideanSq (sq)：欧几里得距离的平方                                                                                        |
|                                         | - Manhattan (man)：曼哈顿距离                                                                                                 |
|                                         | - Hybrid：混合距离                                                                                                            |
|                                         | - Minkovski1 (m1)：闵可夫斯基距离 1                                                                                           |
|                                         | - Minkowvki4 (m4)：闵可夫斯基距离 4                                                                                           |
|                                         | - Minkowski99 (m99)：闵可夫斯基距离 99                                                                                        |
|                                         | - Rounded (round)：四舍五入距离                                                                                               |
| **CellularReturnType (DistReturn)**     | 控制在返回距离值之前如何修改距离值。所有 Distance2\* 值都是指第 2 个最近的节点，而不是最近的节点。                            |
|                                         | - CellValue (cell)：节点值                                                                                                    |
|                                         | - Distance (1)：距离                                                                                                          |
|                                         | - DistanceSquared (sq)：距离的平方                                                                                            |
|                                         | - DistanceInverse (inv)：距离的倒数                                                                                           |
|                                         | - DistanceLog (log)：距离的对数                                                                                               |
|                                         | - DistanceExp (exp)：距离的指数                                                                                               |
|                                         | - Distance2 (2)：第 2 个最近的节点距离                                                                                        |
|                                         | - Distance2Add (2add)：第 2 个最近的节点距离加上指定值                                                                        |
|                                         | - Distance2Sub (2sub)：第 2 个最近的节点距离减去指定值                                                                        |
|                                         | - Distance2Mul (2mul)：第 2 个最近的节点距离乘以指定值                                                                        |
|                                         | - Distance2Div (2div)：第 2 个最近的节点距离除以指定值                                                                        |
|                                         | - Distance2Sq (2sq)：第 2 个最近的节点距离的平方                                                                              |
|                                         | - Distance2Inv (2inv)：第 2 个最近的节点距离的倒数                                                                            |
|                                         | - Distance2Log (2log)：第 2 个最近的节点距离的对数                                                                            |
|                                         | - Distance2Exp (2exp)：第 2 个最近的节点距离的指数                                                                            |
|                                         | - Edge：边缘距离                                                                                                              |
|                                         | - Rounded (round)：四舍五入距离                                                                                               |
|                                         | - NoiseLookup (noise)：噪声查找                                                                                               |

**其他噪声查找参数：**

`CellularNoiseLookup (Lookup)` 使用 NoiseLookup 返回类型时，这将控制基础噪声以叠加蜂窝噪声。

- `Perlin (per)`

- `OpenSimplex2 (simplex)`

- `OpenSimplex2S (smooth)`

- `Value (val)`

- `ValueCubic (cubic)`

- `White`

- `Cellular (vor)`

`CellularNoiseLookupFrequency (DistReturn)` 控制底层噪声的频率。

### Shard 噪声参数

`Sharpness (Sharp)` 通常控制 Shard 噪声的图案锐度。较高的值在图案中具有更明确的边缘，而较低的值将显得更模糊。`0..1.0`

### Fractal 噪声参数

| 属性                            | 描述                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------ |
| **FractalType (Fractal)**       | 设置要使用的分形噪声类型。                                                     |
|                                 | - None (No)：无分形                                                            |
|                                 | - FBm：分形布朗运动（Fractional Brownian Motion）                              |
|                                 | - Ridged：峭壁噪声                                                             |
|                                 | - PingPong (PP)：乒乓球噪声                                                    |
|                                 | **其他 PingPong 分形参数：**                                                   |
|                                 | - PingPongStrength (PPStr)：乒乓球噪声的强度                                   |
|                                 | **如果未选择分形类型：**                                                       |
|                                 | - None：无                                                                     |
| **Octaves (Oct)**               | 设置要使用的分形噪声的层数。                                                   |
| **Lacunarity (Lac)**            | 设置每个分形层的比例。值 >1 将有效增加每层的频率，值 <1 将有效降低每层的频率。 |
| **Gain**                        | 设置每个分形层的相对强度。值 <1 将降低每一层的强度，值 >1 将增加。             |
| **WeightedStrength (Weighted)** | 设置每层强度对噪声值的响应能力。                                               |

### [**域扭曲**](https://iquilezles.org/articles/warp/)参数

`DomainWarpType (Warp)`
| 属性                          | 描述                       |
| ----------------------------- | -------------------------- |
| **None** (No)                     | 无域变形                   |
| **BasicGrid** (Grid)              | 基本网格域变形             |
| **OpenSimplex2** (Simplex)        | OpenSimplex2 域变形        |
| **OpenSimplex2Reduced** (Reduced) | 减少的 OpenSimplex2 域变形 |
| **Flow**                          | 流域变形                   |
| **Turbulence** (Turb)             | 湍流域变形                 |

如果域变形类型不是 `None` ，将包含以下参数:

| 属性                               | 描述                                       |
| ---------------------------------- | ------------------------------------------ |
| **DomainWarpFreq (WarpFreq)**      | 设置域变形的频率。                         |
| **DomainWarpOct (WarpOct)**        | 设置域变形的层数。                         |
| **DomainWarpGain (WarpGain)**      | 设置每个域变形图层的相对强度。             |
| **DomainWarpAmp (WarpAmp)**        | 设置域翘曲的整体振幅（强度）。             |
| **DomainWarpFrac (WarpFrac)**      | 设置要使用的域变形特定分形类型。           |
|                                    | - None (No)：无特定分形                    |
|                                    | - DomainWarpIndependent (ind)：独立域变形  |
|                                    | - DomainWarpProgressive (prog)：渐进域变形 |
| **DomainWarpLacunarity (WarpLac)** | 设置每个属性域变形图层的比例。             |

## 指令

所有指令皆以 `//eznoise ...` 开头
> 别名：`//ezn`
如 `//eznoise` `//ezn` `//eznoise list`

```sh
//eznoise list [SET]
```
`ALL`：列出所有可用的预设

`DEFAULT`：列出所有默认预设

`MINE`：列出所有自定义的预设

```sh
//eznoise save <presetName> <noise> [-f]
```

保存自定义的预设， `-f` 覆盖同名预设。


```sh
//eznoise delete <presetName>
```

删除指定自定义预设。


```sh
//eznoise print <noise>
```

在聊天栏中打印预设。

## 示例

- `Value(Seed:123,Freq:0.04)`
![](https://ezedits.gitbook.io/~gitbook/image?url=https%3A%2F%2F62542430-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmwyNbIIrWCkyIco2qJ9j%252Fuploads%252FM3SEcqXlG3IVd1vKMR1t%252F2024-01-10_20.38.35.png%3Falt%3Dmedia%26token%3Dc9454504-ab10-4c13-8679-d1b03f622546&width=768&dpr=1&quality=100&sign=a9429259a2da3b407a1dea3d087c8fc13a7a0f6539d56198cab262c5a13de6ce)

- `Cellular(Distance:Euclidean,DistReturn:NoiseLookup,Lookup:Perlin,LookupFreq:0.2,Freq:0.1)`
![](https://ezedits.gitbook.io/~gitbook/image?url=https%3A%2F%2F62542430-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmwyNbIIrWCkyIco2qJ9j%252Fuploads%252FJ95BFIRB18yQCaHkzEKK%252F2024-01-10_20.41.26.png%3Falt%3Dmedia%26token%3D0aca2a3c-24a7-44d6-a967-600d8846195c&width=768&dpr=1&quality=100&sign=967337359b07c4bf17f465e5a1c7d74667766eef768c5a8f9ad1a0529f768275)
