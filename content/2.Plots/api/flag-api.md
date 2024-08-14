# API Flags 文档

## 简介

地块 Flags 是可以分配给地块的任何属性，它会以某种方式改变其功能。用户大多数可以在游戏内或通过配置文件（对于地块区域）分配这些属性。

要创建新的 Flags ，只需扩展 PlotFlag，或以下默认类型之一：

### Flags 类型：
* [BlockTypeListFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/BlockTypeListFlag.html) （保存 WorldEdit BlockTypes）
* [BlockTypeWrapper](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/BlockTypeWrapper.html)
* [BooleanFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/BooleanFlag.html)
* [DoubleFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/DoubleFlag.html)
* [IntegerFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/IntegerFlag.html)
* [ListFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/ListFlag.html)
* [LongFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/LongFlag.html)
* [NonNegativeIntegerFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/NonNegativeIntegerFlag.html)
* [NumberFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/NumberFlag.html)
* [StringFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/StringFlag.html)
* [TimedFlag](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/plot/flag/types/TimedFlag.html)

 Flags 本质上是不可变的值容器。 Flags 值必须能够从字符串解析，并稍后序列化为字符串。

## 查询 Flags 状态

如果您想知道地块上 Flags 的当前值，只需写入

```java
boolean pvp = plot.getFlag(PvpFlag.class);
```

在这个例子中，我们正在查询 PvpFlag 的状态，这是一个 `BooleanFlag`，该方法直接返回我们要使用的值。

## 创建 Flags 

每个 Flags 包含一个不可变的值。这个值的类型作为一个通用参数提供给 PlotFlag 类，如下所示：

```java
import com.plotsquared.core.plot.flag.FlagParseException;
import com.plotsquared.core.plot.flag.PlotFlag;

public class YourFlag extends PlotFlag<YourValueType, YourFlag> {
// ...
}
```

 Flags 可以实现 `com.plotsquared.core.plot.flag.InternalFlag`，在这种情况下， Flags 对用户不可见。这允许你使用 Flags 框架存储与地块关联的信息。

PlotFlag 构造函数需要三个参数：

* （非 null）不可变的 Flags 值
* Flags 类别
* Flags 描述

类别和描述应该是一个 TranslatableCaption `com.plotsquared.core.configuration.caption.TranslatableCaption`。
可以使用 `com.plotsquared.core.configuration.caption.StaticCaption` 创建 Caption 实例。

你的 Flags 构造函数应该看起来像这样：

```java
public YourFlag(final YourValueType value) {
super(value, TranslatableCaption.of("flags.your_flag"), TranslatableCaption.of("flags.your_description"));
}
```

你的 Flags 类需要重写以下方法：

* `YourFlag parse(@NotNull String input) throws FlagParseException`
* `YourFlag merge(@NotNull YourValueType newValue)`
* `String toString()`：返回当前值的字符串序列化。
* `String getExample()`：返回一个示例参数。
* `YourFlag flagOf(@NotNull YourValueType value)`：返回你的 Flags 的新实例。

`parse(String input)` 方法解析一个字符串输入，并返回一个新的 Flags 实例。
如果输入无效，则抛出 `FlagParseException`。它应该看起来像这样：

```java
@Override
public YourFlag parse(@NotNull final String input) throws FlagParseException {
if (isValid(input)) {
YourValueType type = convertSomehow(input);
return flagOf(type);
}
throw new FlagParseException(this, input, TranslatableCaption.of("flags.caption_message"));
}
```

标题的创建方法与构造函数相同。在 message_en.json 文件中，有一些预制的错误标题，前缀为 `lags.flag_error_`。FlagParseException 可以接受进一步的参数，这些参数将替换标题中的占位符值（`+<{value}>+`），如果需要的话。

::alert{type="warning"}
这个方法*永远*不应该返回 null。如果无法解析值，就抛出异常。
::

merge 方法允许你合并两个不同的 Flags 实例，从而允许用户在 Flags 上使用 `/plot flag add <flag> <value>` 命令。如果不支持合并，只需返回 `flagOf(newValue)`。

由于值是不可变的，可以（也鼓励）重复使用 Flags 实例。

有关示例，请参见[此处](https://github.com/IntellectualSites/PlotSquared/tree/main/Core/src/main/java/com/plotsquared/core/plot/flag/implementations)

## 注册 Flags 

所有 Flags 都必须在 `GlobalFlagContainer` 中注册，否则它们将无法在游戏中使用。
每个 Flags 将应用于每个地块，因此必须选择适当的默认 Flags 值。

要注册 Flags ，使用：
`com.plotsquared.plot.flags.GlobalFlagContainer().getInstance().addFlag(flagInstance)`

## 添加 Flags 到地块

要将 Flags 添加到地块，使用 `plot.setFlag(flagInstance)`。如果你需要一个新的 Flags 实例，并且只有 Flags 类型，可以使用 `plot.addFlag(GlobalFlagContainer.getInstance().getFlag(flagInstance).createFlagInstance(flagValue))` 添加 Flags 。