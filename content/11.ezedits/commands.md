# 指令

## //ezshapes
> 别名 `//ezsh`
形状生成指令，如：`//ezshapes polydome`

### 圆锥体
```sh
//ezsh cone <pattern> <radii> <height> [rotation] [-do]
```

`pattern`：指定块模式。

`radii`：定义圆锥的半径。第一个值用于北/南方向，第二个值用于东/西。如果圆锥体旋转，这些方向可能会改变。

`height`：设置圆锥体的高度。

`rotation`（默认值：0）：确定绕 y 轴的旋转角度（以度为单位）。如果使用开关，这可以与玩家的瞄准方向对齐。

`-d`：激活后，生成尖面朝下的圆锥体。

`-o`：使用时，会考虑玩家的瞄准方向来考虑圆锥体的旋转。

### 穹顶
```sh
//ezsh polydome <pattern> <sides> <radius> <height> [-v]
```

`pattern`：指定块模式。

`sides`：定义多圆顶的边数。

`radius`：设置多圆顶的半径。

`height`（默认值：1）：确定圆顶的高度。

`-v`：指定顶点阵列，更改多圆顶顶点的外观。

### 多边形

```sh
//ezsh polygon <pattern> <sides> <radius> <height> [direction]
```

`pattern`：指定块模式。

`sides`：定义多边形的边数。

`radius`：设置多边形的半径。

`height`（默认值：1）：确定多边形的高度。

`direction`（默认：玩家 AIM）：指定放置方向，其中可以包括对角线。

### 正方形
```sh
//ezsh square <pattern> <radius> <height> [-fw]
```

`pattern`：指定块模式。

`radius`：设置正方形的半径。

`height`（默认值：1）：确定正方形的高度。

`-f`：激活后，仅生成正方形的面。

`-w`：使用时，仅生成正方形的墙壁。

### 四面体
```sh
//ezsh tetrahedron <pattern> <radius> [rotation] [-o]
```

`pattern`：指定块模式。

`radius`：设置四面体的大小。

`rotation`（默认值：0）：确定绕 y 轴的旋转角度（以度为单位）。如果使用 -o 开关，这可以与玩家的瞄准方向对齐。

`-o`：使用时，四面体的旋转会考虑玩家的瞄准方向。

### 甜甜圈
```sh
//ezsh torus <pattern> <major_radius> <minor_radius> [-dors]
```

`pattern`：指定块模式。

`major_radius`：设置圆环的主要半径。

`minor_radius`：设置圆环的短半径。

`-d`：创建具有菱形横截面的圆环。

`-o`：使用时，圆环的旋转与玩家的瞄准方向对齐。

`-r`：创建横截面为圆角正方形的圆环。

`-s`：创建横截面为正方形的圆环。

## //ezdeform

变形，例如 `//ezdeform` `//ezd` `//ezdeform hexagonalize`

### 六边形
```sh
//ezdeform hexagonalize [size] [air_gap] [x_rotation] [z_rotation] [offset_angle]
```

`size`（默认：12）：设置六边形的大小。

`air_gap`（默认值：0.0）：定义列之间的气隙宽度。

`x_rotation`（默认：0.0）：设置沿 X 轴的列旋转角度（以度为单位）。

`z_rotation`（默认：0.0）：设置沿 Z 轴的列旋转角度（以度为单位）。

`offset_angle`（默认：60.0）：调整偏移角度，控制形状（范围：0-90 度）。

### 噪声
```sh
//ezdeform noise <noise> [strength] [-z <scale>] [-s <seed>]
```

`noise`：指定用于变形的噪声类型。

`strength`（默认：2.0）：设置噪点效果的强度。

`scale`（默认：1）：确定噪声的比例。

`-s`（默认值：-1）：噪声模式的可选种子。

`-h`：使用时，仅使区域水平变形。

`-v`：使用时，仅使区域垂直变形。

### 旋转
```sh
//ezdeform rotate <angle> [-o] 
```

`angle`：设置旋转角度（以度为单位）。

`-o`：使用时，使用玩家的位置作为旋转中心，而不是选择的中心。

### Voronoi 化
```sh
//ezdeform voronoialize [size] [air_gap] [-s <seed>]
```

`size`（默认值：12）：确定 voronoi 单元格的大小。

`air_gap`（默认值：0.0）：指定单元格之间的气隙宽度。

`-s`（默认值：-1）：用于生成模式的可选种子。

```sh
//ezdeform voronoialize2 <amount> [air_gap] [-s <seed>] [-r <seed_repulsion>] [-n <normalOffset>]
```

`amount`：指定 voronoi 模式中的单元格数量。

`air_gap`（默认值：0.0）：确定单元格之间气隙的宽度。

`-s`（默认值：-1）：用于生成模式的可选种子。

`-r`（默认值：15）：设置 voronoi 种子点排斥因子。

`-n`（默认值：5）：调整法线偏移系数，对于较细的形状，可以减小该系数。

### 体素化

```sh
//ezdeform voxelize <scales> <gap> <distortion> [-i <primary>] [-j <secondary>] [-s <seed>] [-hv]
```

`scales`（默认：3,3,3）：设置每个维度的比例。

`gap`（默认值：0.0）：定义体素之间的气隙宽度。

`distortion`（默认：0.0）：调整随机网格失真强度（范围：0-1）。

`-i`（默认值：y）：指定栅格旋转的主轴。

`-j`（默认值：-x）：指定栅格旋转的次轴。

`-s`（默认值：-1）：随机失真的可选种子。

`-h`：使用时，仅水平体素化。

`-v`：使用时，仅垂直体素化。

## //eztexture

呈现纹理，例如 `//eztexture` `//ezt` `//eztexture ambient`

### 环境
```sh
//ezt ambient <mask> <palette> [radius] [brightness] [contrast]
```

通过近似区域中块的氛围来呈现纹理。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`radius`（默认值：3）：命令评估环境差异的半径。半径越大，每次计算的区域越宽，过渡就越平滑。

`brightness`（默认值：0.0）：调整朝向调色板开始或结束的偏差。较高的值加强了调色板的开始，而较低的值则强调结束。

`contrast`（默认值：0.0）：放大或减少平滑的环境场与局部变化之间的差异，增强或柔化纹理的冲击力。

### 轴对齐渐变
```sh
//ezt axisgradient <mask> <palette> [axis] [-r]
```

使用与单个轴对齐的渐变对区域进行纹理处理。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`axis`（默认值：“y”）：确定应用梯度的轴（“x”、“y”或“z”），引导梯度流的方向。

`-r`：激活相对渐变模式，将调色板拉伸到整列。

### 混色
```sh
//ezt blend <palette> [radius] [-v]
```

混合区域内的色彩，创造柔和的色彩过渡。

`palette`：指定用于混合的调色板。

`radius`（默认值：“0.5”）：确定混合半径，影响混合效果在每个块周围应用的广度。

`-v`：激活完全混合模式，允许混合非曲面块。

### 方块光照
```sh
//ezt blocklight <mask> <palette> [-v] [-s]
```

根据游戏中的方块光照级别（不包括天窗）对区域进行纹理处理。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`-v`：激活时，仅考虑方块正上方的光照水平。

`-s`：激活后，将考虑天窗级别。

### 细胞纹理
```sh
//ezt cells <mask> <palette> <amount> [brightness] [contrast] [-s] [-r]
```

使用细胞格状图案对区域进行纹理处理。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`amount`：确定纹理中单元格的数量。

`brightness`（默认值：0.0）：调整朝向调色板开始或结束的偏差。较高的值加强了调色板的开始，较低的值加强了调色板的结束。

`contrast`（默认值：0.0）：修改单元格之间的对比度，增强图案的清晰度和分离度。

`-s`（默认值：-1）：用于生成单元格图案的可选种子。

`-r`（默认值：5）：设置 Voronoi 图中种子点的排斥因子，影响像元的形状和分布。

### 曲率纹理
```sh
//ezt curvature <mask> <palette> [radius] [brightness] [contrast]
```

通过近似曲率对区域进行纹理处理。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`radius`（默认值：3）：指定计算曲率的半径，影响效果的细微程度或突出程度。

`brightness`（默认值：0.0）：调整朝向调色板开始或结束的偏差。较高的值加强了调色板的开始，而较低的值则强调结束。

`contrast`（默认：0.0）：修改不同曲率区域之间的对比度，增强图案的清晰度和分离度。

### 流场纹理
```sh
//ezt flow <mask> <palette> [exposure] [iterations] [velocity] [paletteScalar] [noise] [-m] [-g] [-f]
```

在所选内容内的所有曲面上生成流场效果。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`exposure`（默认值：0.6）：控制流线的整体密度，从而影响调色板的使用量。

`iterations`（默认值：32）：绘制每条线所花费的步骤数，迭代次数越多，线条就越长。

`velocity`（默认值：0.5）：点在曲面上移动的速度。

`paletteScalar`（默认：1.0）：缩放用于选择调色板块的值。

`noise`（默认值：[Type：Perlin]）：用于生成流场的噪声类型。

`-m`：点动量加权，混合先前的运动方向。

`-g`：对点施加重力，将它们拉向指定方向。

`-f`：用最低的调色板块填充空白。

### 噪声纹理
```sh
//ezt noise <mask> <palette> <noise> [-z] [-s]
```

使用给定噪声对区域进行纹理处理。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`noise`（默认值：）：设置要使用的噪声。Perlin(Freq:0.05)

`-z`（默认值：1）：调整噪声的刻度。

`-s`（默认值：-1）：用于生成噪声模式的可选种子值。

### 点光效果
```sh
//ezt pointlight <mask> <palette> [range] [radius] [interval] [-l] [-o] [-r][-f]
```

根据曲面相对于光源的方向对区域进行纹理处理。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`range`（默认：0）：设置衰减范围，即光点的亮度。如果设置为 0，则使用玩家与区域中心之间的距离。

`radius`（默认值：1）：指定影响光源边缘柔和度的法线近似半径。

`interval`（默认值：“0,90”）：以度为单位定义曲面方向间隔，其中 0 直接朝向光线，180 面向远方。此区间内的曲面将进行纹理处理，任何低于或高于的曲面都将使用第一个或最后一个调色板块进行纹理处理。

`-f`：禁用光衰减，在整个区域应用均匀的光强度，而不考虑与光源的距离。

`-l`：将光源位置更改为给定坐标，否则使用玩家的位置。

`-o`（默认值：0.0）：确定遮挡的强度。较高的值会导致“较暗”的阴影。预期范围为 0-1。

`-r`（默认值：1）：确定遮挡（阴影）的平滑半径。

### 错位效果
```sh
//ezt shift <palette> [shift]
```

通过将调色板移动一定量来修改区域的纹理。

`palette`：指定要使用的调色板。

`shift`（默认值：1）：确定调色板中要移动的块数。

### 日光效果
```sh
//ezt sunlight <mask> <palette> [radius] [interval] [-l] [-o] [-r]
```

使用全局光源方向对区域进行纹理处理，以控制调色板的应用。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`radius`（默认值：1）：定义法线近似半径，影响表面相对于太阳光方向的计算。

`interval`（默认值：“0,180”）：以度为单位定义表面方向间隔，其中 0 直接朝向光线，180 面向远方。此区间内的曲面将进行纹理处理，任何低于或高于的曲面都将使用第一个或最后一个调色板块进行纹理处理。

`-l`（默认值：向下）：光线照射到的全局方向。

`-o`（默认值：0.0）：确定遮挡的强度。较高的值会导致“较暗”的阴影。预期范围为 0-1。

`-r`（默认值：1）：确定遮挡（阴影）的平滑半径。

### 自定义/组合纹理
```sh
//ezt advanced <mask> <palette> <texture>
```

使用eztexture的更强大的界面。它可以访问所有其他 eztexture 命令，也可以混合/组合它们。这意味着您可以同时进行环境纹理和阳光纹理处理。

`mask`：要替换的块。

`palette`：指定要使用的调色板。

`texture`：纹理规范。

**如何定义** `<texture>`

*A* 遵循以下指定复杂对象的常用方法： 每个 Texture 类型都有自己的一组参数。您可以根据需要设置任意数量的参数。如果未设置参数，则将改用默认值。每个参数可以接受不同的输入。**有些参数接受数字，有些接受 3D 向量，有些接受 Noise 参数，有些甚至接受 Texture 对象本身。** *A* 可以是任何现有的纹理模式。一些简单的例子：`<texture><type>(<parameter1>:<value1>,<parameter2>:<value2>)<texture>`

- `Ambient`
- `Ambient()`
- `Ambient(Radius:2)`
- `Ambient(Radius:2,Brightness:0.2,Contrast:0.3)`
- `Flow(Noise:@@ridged(Freq:0.12))`

澄清一下：以下两个命令将执行相同的操作。

- `//eztexture ambient #existing ##grayscale 2 0.2 0.3`

- `//eztexture advanced #existing ##grayscale Ambient(Radius:2,Brightness:0.2,Contrast:0.3)`

**组合纹理**

以下纹理具有 `()/()` 参数，这些参数本身接受参数，允许您组合纹理模式：`Texture1` `T1` `Texture2` `T2` `<texture>`

- `Add(T1:...,T2:...)`
- `Subtract(T1:...,T2:...)`
- `Multiply(T1:...,T2:...)`
- `Divide(T1:...,T2:...)`
- `WeightedAverage(T1:...,T2:...)`
- `Darken(T1:...,T2:...)`
- `Lighten(T1:...,T2:...)`
- `Difference(T1:...,T2:...)`

以下纹理具有`()` 参数，这些参数本身接受参数，允许您调整/后处理纹理：`Texture` `T` `<texture>`

- `Adjust(T:...,Brightness:...,Contrast:...)`
- `Invert(T:...)`
- `Blend(T:...,Radius:...)`

例子：

- `WeightedAverage(T1:Sun(),T2:Ambient())`
- `Blend(T:Flow(Noise:@@ridged(Freq:0.12)),Radius:0.7)`
- `Darken(T1:Noise(Noise:@@smoothcells(freq:0.5)),T2:Flow)`
- `Adjust(T:Pointlight,Contrast:0.5)`

> 请注意，`//` `(//)` 不是可选的。您必须将它们设置为使用这些组合/调整纹理。（如果您不设置它们，您将收到一条错误消息）。`Texture` `Texture1` `Texture2` `T` `T1` `T2` `cannot be null`

## //ezscatter

散射指令

> 别名：`//ezsc`

命令将形状分散在所选内容中块的曲面上，它带有许多预定义的形状，以及使用 WorldEdit 表达式来定义您自己的形状的能力。

```sh
//ezscatter [-s <dimensions>] [-o <sizeMultiplier>] [-n <density>] [-c <angleDeg>] [-k <rotationAxis>] [-i <primaryAxis>] [-j <secondaryAxis>] [-d <filterDirections>] [-e <filterThreshold>] [-m <maskFilter>] [-p <palette>] <shape> [-a] [-b] [-r] [-u] [-w]
```

`shape`：形状类型

::alert{type="info"}
**内置形状**

- bean
- cube
- curl
- cylinder
- ellipsoid
- fur
- leaf
- lemon
- onion
- polygon(Sides)
- pyramid(Sides)
- spike
- supersphere(Exponent)
- tetrahedron
- torus(Thickness)

---

**表达式**

`Expression;<expression>` `Expr;<expression>`

例如，此表达式将创建螺旋

`//ezsc expr;x+=sin(2*pi*y)/2;z+=cos(2*pi*y)/2;x*x+z*z<0.3^2`

::

`-s`（默认值：“20”）：定义要散点的形状的大小。可以为统一形状指定一种尺寸，也可以为 （X，Y，Z） 指定三种尺寸。

`-o`（默认值：“0.8”）：控制形状集之间的大小差异。设置为 1 可保持大小不变。

`-n`（默认值：“2.0%”）：控制形状在区域中的分布密度（以百分比表示）。

`-c`（默认值：“0”）：指定形状的旋转角度。

`-k`（默认值：“up”）：确定形状旋转的轴。
如果常量：

`-i`（默认值：“y”）：定义形状方向的主轴。

`-j`（默认值：“x”）：定义形状方向的次轴。

`-d`：将放置限制在特定方向。

`-e`（默认值：“0.5”）：增强或减弱方向滤波效果。

`-m`：将形状放置限制为与指定蒙版匹配的曲面块。

`-p`：选择用于分散形状的块调色板。如果未设置，则使用现有块。

`-a`：如果启用，则不会放置空气。

`-b`：跳过放置部分位于该区域之外的形状。

`-r`：将形状与曲面法线对齐。

`-u`：禁用均匀的种子点分布，允许更随机的形状放置。

`-w`：删除原始形状，只留下分散的形状。

## //ezsurface

表面处理指令

> 别名：`//ezsu`

例如`//ezsurface` `//ezsu` `//ezsurface rockify`

### 表面模糊
```sh
//ezsu fuzzify <radius> [smooth_radius] [smooth_iterations] [-c] [-e] [-m] [-t]
```

使用白噪声使表面看起来更模糊。

`radius`：一个浮点值，用于确定可以进行修改的表面的最大距离。

`smooth_radius`（默认值：0）：指定平滑操作的半径。

`smooth_iterations`（默认值：0）：确定应用平滑操作的次数。

`-c`：将修改限制为仅雕刻到地形中。

`-e`：将操作限制为仅从地形向外扩展。

`-m`：应用蒙版以仅修改符合指定条件的曲面。
由于匹配曲面的复杂性增加，此选项会大大减慢该过程的速度。

`-t`：尝试保留区域的拓扑。

### 表面岩石化
```sh
//ezsu rockify <radius> [size] [oct] [smooth_radius] [smooth_iterations] [-c] [-e] [-m] [-t]
```

使用柏林噪音使表面变得岩石。

`radius`：一个浮点值，用于确定可以进行修改的表面的最大距离。

`size`（默认值：10）：控制所用噪声的比例。

`oct`（默认：1）：设置应用的噪声层数。

`smooth_radius`（默认值：1）：指定平滑操作的半径。

`smooth_iterations`（默认值：4）：确定应用平滑操作的次数。

`-c`：将修改限制为仅雕刻到地形中。

`-e`：将操作限制为仅从地形向外扩展。

`-m`：应用蒙版以仅修改符合指定条件的曲面。
由于匹配曲面的复杂性增加，此选项会大大减慢该过程的速度。

`-t`：尝试保留区域的拓扑。

### 表面 Voronoi 化
```sh
//ezsu voronoify <radius> [cell_size] [smooth_radius] [smooth_iterations] [-c] [-e] [-m] [-t]
```

使用 Voronoi 噪声使曲面变形。

`radius`：一个浮点值，用于确定可以进行修改的表面的最大距离。

`cell_size`（默认值：12）：确定 Voronoi 图案中每个格的平均大小，从而影响纹理的比例。

`smooth_radius`（默认值：0）：指定平滑操作的半径。

`smooth_iterations`（默认值：0）：确定应用平滑操作的次数。

`-c`：将修改限制为仅雕刻到地形中。

`-e`：将操作限制为仅从地形向外扩展。

`-m`：应用蒙版以仅修改符合指定条件的曲面。
由于匹配曲面的复杂性增加，此选项会大大减慢该过程的速度。

`-t`：尝试保留区域的拓扑。

### 表面噪声化
```sh
//ezsu noisify <radius> <noise> [scale] [smooth_radius] [smooth_iterations] [-c] [-e] [-m] [-t]
```

使用噪点预设使曲面变形。

`radius`：一个浮点值，用于确定可以进行修改的表面的最大距离。

`noise`：指定用于修改的噪声。

`scale`（默认：1）：调整噪声的比例。

`smooth_radius`（默认值：1）：指定平滑操作的半径。

`smooth_iterations`（默认值：4）：确定应用平滑操作的次数。

`-c`：将修改限制为仅雕刻到地形中。

`-e`：将操作限制为仅从地形向外扩展。

`-m`：应用蒙版以仅修改符合指定条件的曲面。
由于匹配曲面的复杂性增加，此选项会大大减慢该过程的速度。

`-t`：尝试保留区域的拓扑。

## //ezspline

样条生成指令
> 样条意思是指通过一组给定点集来生成平滑曲线的柔性带。此概念源于生产实践，“样条”是绘制曲线的一种绘图工具，是富有弹性的细长条。绘图时用压铁使样条通过指定的形值点（样点），并调整样条使它具有满意的形状，然后沿样条画出曲线。

> 别名：`//ezsp`

例如 `//ezspline` `//ezsp` `//ezspline beads`

请注意，每个样条曲线只能使用凸选择类型 `/; convex` 运行。

### 串珠样条
```sh
//ezsp beads <pattern> <radii> [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域生成珠形样条。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

### 链子样条
```sh
//ezsp chainlink <pattern> <radii> [inner] [offset] [stretch] [spin] [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域生成链节形样条。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`inner`（默认：1.0）：每个链节的内部半径比。

`offset`（默认值：0.0）：每个链节的偏移量，调整链中链节的对齐方式。

`stretch`（默认：1.0）：沿链拉伸各个链接的量。

`spin`（默认值：0.0）：向样条曲线添加扭曲。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

### 立方体样条
```sh
//ezsp cubes <pattern> <radii> [gap] [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

从沿选定凸区域的立方体中生成样条曲线。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`gap`（默认：1.0）：设置多维数据集之间的间隙。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

### 表达式样条
```sh
//ezsp expression <pattern> <radii> [spin] <expression> [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域生成由给定 WorldEdit 表达式形成的样条曲线。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`spin`（默认值：0）：向样条曲线添加扭曲。

`expression`：定义样条形状的 WorldEdit 表达式。支持“x”、“y”、“z”作为变量。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

表达式样条曲线示例：请注意，**表达式必须排在最后**
`//ezsp expression red 20,5 0 -q 4 z^2+y^2<2-x%2`

### 渔网样条
> 可以生成渔网袜
```sh
//ezsp fishnet <pattern> <radii> [spacing] [depth] [width] [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域生成渔网形样条。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`spacing` （Default： 10）：网的网格间距。

`depth`（默认值：2）：网络中每个字符串的深度。

`width`（默认值：2）：每个字符串的宽度。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

### 噪声样条
```sh
//ezsp noise <pattern> <radii> [strength] [stretch] [spin] <noise> [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域创建基于噪声的样条曲线。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`strength`（默认：0.5）：确定噪声强度，影响噪声的强度。

`stretch`（默认值：4.0）：控制沿样条的噪声拉伸系数。

`spin`（默认值：0）：向样条曲线添加扭曲。

`noise`（默认值：）：指定用于生成噪声的类型。Perlin(Freq:3)

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

### 震荡样条
```sh
//ezsp oscillate <pattern> <radii> [depth] [interval] [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域生成具有振荡厚度的样条曲线。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`depth`（默认值：2）：确定振荡的脊深度，影响波的振幅。

`interval`（默认：5）：设置脊间隔，控制沿样条振荡的频率。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

### 多边形样条
```sh
//ezsp polygon <pattern> <radii> [sides] [spin] [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域创建正多边形样条。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`sides`（默认值：6）：确定面的边数。

`spin`（默认值：0.0）：向样条曲线添加扭曲。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

### 绳索样条
```sh
//ezsp rope <pattern> <radii> [ropeCount] [spin] [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域创建绳形样条。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`ropeCount`（默认值：3）：确定缠绕的绳索数量。

`spin`（默认：2.0）：向样条曲线添加扭曲。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。

### 圆柱样条
```sh
//ezsp simple <pattern> <radii> [-p <kb_parameters>] [-q <quality>] [-n <normalMode>] [-g] [-h]
```

沿选定的凸区域创建简单的圆柱样条。

`pattern`：指定方块。

`radii`：样条曲线的粗细，由最多三个逗号分隔值定义。半径 10 从样条曲线的起点到终点为 10,10、5、15 将从 10 开始，在中间减小到 5，最后增加到 15。

`-p`（默认值：“0：0：0”）：设置样条流的参数，包括张力、偏置和连续性，以冒号分隔的格式提供。

`-q`（默认值：1.85）：调整样条生成的质量。增加此值以减少气隙，请注意，较高的值会增加处理时间。

`-n`（默认值：“CONSISTENT”）：确定样条正态计算的模式。

`-g`：使用时，使用三个半径的几何中心计算中心半径。

`-h`：显示帮助页面。