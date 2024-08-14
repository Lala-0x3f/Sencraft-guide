# API 文档

## Maven 和 Gradle 示例

* Javadocs：[intellectualsites.github.io/plotsquared-javadocs](https://intellectualsites.github.io/plotsquared-javadocs)
* 主要升级差异：[intellectualsites.github.io/plotsquared-api-diff](https://intellectualsites.github.io/plotsquared-diff/)

::alert{type="tip"}
建议在使用 PlotSquared API 时使用 Gradle。确保 [toolchain](https://docs.gradle.org/current/userguide/toolchains.html) 指向 Java 17 或更高版本。
::

::alert{type="info"}
如果您正在寻找快照版本，请将 S01 OSS Sonatype（`https://s01.oss.sonatype.org/`）添加到仓库模块中。
::

### Gradle - PlotSquared 核心模块

如果您需要访问 PlotSquared 的 Bukkit 模块，请复制下面的示例。

```kotlin
repositories {
    mavenCentral()
    maven { url = uri("https://repo.papermc.io/repository/maven-public/") }
}

dependencies {
    implementation(platform("com.intellectualsites.bom:bom-newest:1.40"))
    compileOnly("com.intellectualsites.plotsquared:plotsquared-core")
}
```

### Gradle - PlotSquared 核心和 Bukkit

```kotlin
repositories {
    mavenCentral()
    maven { url = uri("https://repo.papermc.io/repository/maven-public/") }
}

dependencies {
    implementation(platform("com.intellectualsites.bom:bom-newest:1.40"))
    compileOnly("com.intellectualsites.plotsquared:plotsquared-core")
    compileOnly("com.intellectualsites.plotsquared:plotsquared-bukkit") { isTransitive = false }
}
```

### Maven - PlotSquared 核心模块

```xml
<repositories>
    <repository>
        <id>papermc</id>
        <url>https://repo.papermc.io/repository/maven-public/</url>
    </repository>
</repositories>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.intellectualsites.bom</groupId>
            <artifactId>bom-newest</artifactId>
            <version>1.40</version>
            <scope>import</scope>
            <type>pom</type>
        </dependency>
    </dependencies>
</dependencyManagement>
<dependencies>
    <dependency>
        <groupId>com.intellectualsites.plotsquared</groupId>
        <artifactId>plotsquared-core</artifactId>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

### Maven - PlotSquared 核心和 Bukkit

```xml
<repositories>
    <repository>
        <id>papermc</id>
        <url>https://repo.papermc.io/repository/maven-public/</url>
    </repository>
</repositories>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.intellectualsites.bom</groupId>
            <artifactId>bom-newest</artifactId>
            <version>1.40</version>
            <scope>import</scope>
            <type>pom</type>
        </dependency>
    </dependencies>
</dependencyManagement>
<dependencies>
<dependency>
    <groupId>com.intellectualsites.plotsquared</groupId>
    <artifactId>plotsquared-core</artifactId>
    <scope>provided</scope>
</dependency>

<dependency>
    <groupId>com.intellectualsites.plotsquared</groupId>
    <artifactId>plotsquared-bukkit</artifactId>
    <scope>provided</scope>
    <exclusions>
        <exclusion>
            <artifactId>plotsquared-core</artifactId>
            <groupId>*</groupId>
        </exclusion>
    </exclusions>
</dependency>
</dependencies>
```

### 有用的 PlotSquared 类

* [PlotAPI](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/PlotAPI.java)
* [PlotPlayer](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/player/PlotPlayer.java)
* [FlagContainer](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/plot/flag/FlagContainer.java)
* [SchematicHandler](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/util/SchematicHandler.java)
* [ChunkManager](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/util/ChunkManager.java)
* [UUIDPipeline](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/uuid/UUIDPipeline.java)

## 教程

* [获取 PlotSquared 的实例](event-api.md#getting-an-instance)
* [标志 API](flag-api.md)
* [事件 API](event-api.md)

## 术语

### 地皮区域

地皮区域是 PlotSquared 将管理/处理的任何区域。如果这是一个无限地皮世界，则整个世界被视为地皮区域。如果使用地皮集群，则只有世界的一部分将是地皮区域，地皮区域外的任何地方都不会被 PlotSquared 处理。

**参见：**[PlotAreaManager.java](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/plot/world/PlotAreaManager.java) `#getPlotAreaByString(...)`

### 集群

集群可以在现有地皮区域内创建，或者可以在以前非地皮世界中创建，这将反过来创建它自己的地皮区域。

**参见：**[PlotCluster.java](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/plot/PlotCluster.java)

**参见：**[PlotSquared.java](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/PlotSquared.java)

### 道路

道路是分隔每个地皮的内容，并包括围绕每个地皮的墙。尝试在这个位置获取地皮将返回 null。

**参见：**[Location.java](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/location/Location.java) `#isPlotRoad(...)`

### 地皮

地皮可以是已认领的或未认领的。在一个位置获取地皮，如果那里没有认领的地皮，将返回一个新的无主地皮对象。

**参见：**[PlotArea.java](https://github.com/IntellectualSites/PlotSquared/blob/v6/Core/src/main/java/com/plotsquared/core/plot/PlotArea.java)  `#getPlots(...)`