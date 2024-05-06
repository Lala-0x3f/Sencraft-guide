# 增强选取

## 高级选区工具

超级魔杖工具提供了四种不同的模式用于点选和操作，为区域选择提供了更广泛的工作方式。

强烈推荐使用 [WorldEditCUI](https://modrinth.com/mod/worldedit-cui)

### 模式

- TRACE 模式：选择你瞄准的方块。
- POSITION 模式：选择你当前所在位置的方块。
- RELATIVE 模式：选择相对于上一个放置点和玩家瞄准方向的点。
- GRAB 模式：启用抓取和移动一个点或整个选区。

### 控制

- 右击：
  - 在点选模式下，选择一个新的点或替换最近的点（如果选区已满）。
  - 在 GRAB 模式下，拾取一个点或整个选区，并随着玩家的移动一起移动。

- 左击：
  - 在点选模式下，移除最后设置的点。
  - 在 GRAB 模式下，释放点或选区。

- 潜行 + 左击：循环切换工具模式。

- 交换手键（默认为 F 键）：反转选区中点的顺序。

- 潜行 + F：将所有凸多边形选区的点沿列表中的位置移动一位。

## 选区指令

### 加载选区
```sh
//selload [selection]
```

`//ezsel load`的替代

该命令从玩家保存的选择列表中检索以前保存的选区。`//selload`

`selection`：以前保存的选区。

### 选区自移
```sh
//next <direction> <gap>
```

该命令根据指定方向将当前选区向其自身大小移动。`//next`

`direction`（默认玩家面朝方向）：指定向哪个方向移动选区。如果未提供，则默认为玩家瞄准的方向。

`gap`（默认：0）：一个可选参数，用于在当前选区位置和移动后位置之间添加额外的间隔。

### 选区移动到玩家
```sh
//selhere [selectionPosition]
```

> 别名：` //seltome`

该命令将当前选择移动到您的位置。`//selhere`

`SelectionPosition`（默认值：POS1）：指定选择中的哪个点移动到玩家的位置。所有其他点将移动到相对位置。

- POS1 - 选择的“Pos1”，或凸/多边形选择的第一个点。

- POS2 - 选择的“Pos2”，或凸/多边形选择的最后一个点。

- CENTER - 选择的中心点

### 反转点序
```sh
//ezselinvert
```

> 别名：` //selinvert`

该命令将颠倒选区框架的点顺序。
这在凸选择中最为明显，因为在长方体选择中，pos1 和 pos2 将简单地交换位置，而凸选择将颠倒每个点的顺序。`//ezselinvert`

### 撤销选点
```sh
//delpos2
```

> 别名：`//-2`

该命令将删除 convex 和 poly 选区的最后一个辅助选择点。`//delpos2`

## 选区管理

如 `//ezselection` `//ezsel` `//ezsel list`

```sh
//ezselection list [-g]
```

列出用户保存的所有选区。单击要加载的选区名称。
`-g`：按类型对选区进行分组

```sh
//ezselection load <selection>
```

检索之前保存的选区。

```sh
//ezselection <selectionName> [-f]
```

保存选区

`selectionName`：选区保存的名称
`-f`：覆盖同名项

```sh
//ezselection delete <selectionName>
```

删除具有给定名称的选区。

`selectionName`：要删除的选区名称