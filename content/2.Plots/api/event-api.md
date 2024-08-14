# 事件 API

## 简介

PlotSquared 使用 [Guava EventBus](https://github.com/google/guava/wiki/EventBusExplained) 来注册监听器和分派事件。

## 事件列表

查看 [PlotSquared 事件](https://intellectualsites.github.io/plotsquared-javadocs/core/com/plotsquared/core/events/package-summary.html) 的 Javadoc。

## 获取实例

```java
import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlotPlugin extends JavaPlugin {
    public static MyPlotPlugin THIS;

    @Override
    public void onEnable() {
        MyPlotPlugin.THIS = this;
        if (Bukkit.getPluginManager().getPlugin("PlotSquared") != null) {
        // Do something
       }
    }
}
```

## 注册监听器

注册监听器非常简单。只需在监听事件的方法上添加 `@Subscribe`（来自 `com.google.common.eventbus` 包）注解，并通过 `PlotAPI#registerListener(Class)` 方法注册类到 EventBus，就完成了！以下是一个例子：

```java
public class P2Listener {

  // if you like the dependency-injection-like approach:
  public P2Listener(PlotAPI api) {
    api.registerListener(this);
  }

  // less OOP, but if you want to make things easy:
  public P2Listener() {
    PlotAPI api = new PlotAPI();
    api.registerListener(this);
  }

  // A method handling a PlayerEnterPlotEvent
  @Subscribe
  public void onPlayerEnterPlot(PlayerEnterPlotEvent e) {
    //do stuff
  }
}
```