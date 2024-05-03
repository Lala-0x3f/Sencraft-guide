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
```sg
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

##