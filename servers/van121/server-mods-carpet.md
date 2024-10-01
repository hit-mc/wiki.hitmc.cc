# carpet 模组选项

服务器上 carpet 相关模组有四个，分别是

| 模组文件名                                        | 名称                     | mcmod                                        | GitHub                                                  | 规则说明                                                                         |
| ------------------------------------------------- | ------------------------ | -------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `fabric-carpet-1.21-1.4.147+v240613.jar`          | Carpet 本体模组          | [link](https://www.mcmod.cn/class/2361.html) | [link](https://github.com/gnembon/fabric-carpet)        | [link](https://github.com/gnembon/fabric-carpet/wiki/Current-Available-Settings) |
| `carpet-extra-1.21-1.4.147.jar`                   | Carpet 扩展              | [link](https://www.mcmod.cn/class/3325.html) | [link](https://github.com/gnembon/carpet-extra)         | [link](https://github.com/gnembon/carpet-extra)                                  |
| `carpet-tis-addition-v1.63.1-mc1.21.1.jar`        | Carpet TIS Addition      | [link](https://www.mcmod.cn/class/5664.html) | [link](https://github.com/TISUnion/Carpet-TIS-Addition) | [link](https://carpet.tis.world/zh-Hans/docs/rules)                                    |
| `gugle-carpet-addition-mc1.21-2.9.0+build.52.jar` | [GCA]Gugle的Carpet附加包 | [link](https://www.mcmod.cn/class/7305.html) | [link](https://github.com/Gu-ZT/gugle-carpet-addition)  | [link](https://github.com/Gu-ZT/gugle-carpet-addition)                           |

可以在**规则说明**中找到该 mod 官方的选项文档。

如果你觉得有任何值得打开的选项，可以联系管理打开。

- 优化类（体验优化/服务器优化）不影响平衡性的，无冲突则可以直接打开
- 可能会影响平衡性的投票等决定是否打开

## 目前开启的配置选项

### 基础设置

#### `language zh_cn`

`carpet`

默认语言：简体中文

### 假人相关

#### `commandPlayer true`

`carpet`

允许玩家使用 `/player` 指令控制/召唤假人

#### `fakePlayerNamePrefix bot_`

`tis`

为 `/player` 指令召唤出来的假人名称添加指定前缀

#### `openFakePlayerInventory true`

`gca`

允许玩家打开假人的背包

#### `openFakePlayerEnderChest true`

`gca`

潜行状态下，打开假人的末影箱

#### `fakePlayerResident true`

`gca`

服务器重启后，假人自动加入服务器（即不会消失）

#### `fakePlayerAutoReplenishment true`

`gca`

假人自动 replenishment（补货？复活？待确定）

### 体验优化

#### `stackableShulkerBoxes 8`

`carpet`

空的潜影盒当被扔在地上时可以堆叠，或者在背包中操作时也可以堆叠

#### `witherSpawnedSoundDisabled true`

`tis`

禁用凋灵在召唤后生命值回满时发出的世界中所有玩家都能听到的音效

#### `xpNoCooldown true`

`carpet`

经验吸收无冷却时间

#### `creativeOpenContainerForcibly true`

`tis`

允许创造模式的玩家打开被阻挡的容器，如潜影盒

#### `creativeNoClip true`

`carpet`

> GPT:
>
> 它允许玩家在创造模式下自由穿墙。以下是对此选项的详细说明：
>
> 1. **服务器和客户端双向设置**: 此选项在服务器和客户端两边都设置为 `true` 才能正常工作。如果只在服务器端设置，没有任何效果。
> 2. **本地效果**: 如果只在客户端设置为 `true`，玩家仍然可以通过使用一些技巧（例如通过活板门）进入方块，但效果不完全。
> 3. **允许穿墙**: 当选项打开时，玩家可以在创造模式下穿越方块，就像“幽灵模式”一样。

#### `renewableDeepslate false`

`carpet`

熔岩和水在 Y0 以下生成 深板岩 和 深板岩圆石

#### `enderPearlChunkLoading true`

`extra`

将水平移动的末影珍珠作为实体加载以进行区块加载

#### `missingTools true`

`carpet`

使用镐子可以更快地破坏玻璃

#### `flippinCactus true`

`carpet`

允许玩家在手持仙人掌（cactus）时可以翻转和旋转方块。

在翻转或旋转方块时，不会触发方块更新。

该功能适用于活塞（pistons）、观察者（observers）、投掷器（droppers）、比较器（repeaters）以及其他可以旋转或翻转的方块，比如阶梯（stairs）和釉面陶瓦（glazed terracotta）等。

#### `accurateBlockPlacement true`

`extra`

客户端可以提供替代的方块放置方式

> GPT: 客户端将能够在放置方块时提供额外的放置选项或功能，使得玩家在建造和规划时更加精准。这意味着你可以放置方块在更具体的位置或角度，而不是受到默认放置规则的限制。

### 性能优化

#### `yeetUpdateSuppressionCrash true`

`tis`

阻止服务端因 `StackOverflowError`、`OutOfMemoryError` 或 `ClassCastException` 异常而造成的服务器崩溃

具体功能实现类似 carpet 的 `updateSuppressionCrashFix` 规则，但包含更多信息

#### `fastRedstoneDust true`

`carpet`

> GPT:
> 
> 1. **性能优化**：
>    - 启用` fastRedstoneDust true`后，红石粉的处理将会得到优化，从而减少由于红石线路复杂性带来的游戏卡顿和延迟问题。这对大型红石电路和复杂红石机械尤其有用，因为它们通常会显著增加服务器负载。
> 2. **修复原版问题**：
>    - 此选项还修复了一些与原版红石粉运作相关的定位性问题，例如MC-11193。MC-11193是一个已知的Minecraft漏洞，与红石电路的位置有关的问题，这种漏洞可能导致红石设备的不一致行为。
> 3. **行为变化**：
>    - 由于这些优化和修复，一些依赖于原版红石粉定位行为的装置可能不会按照预期工作。这意味着那些基于原版红石行为设计的特定装置或电路在启用此选项后，可能会表现出不同的行为，甚至可能停止正常工作。
> 
> 总结来说，`fastRedstoneDust true`通过优化红石粉的处理来提高游戏性能，并修复了一些原版Bug。但是，启用该选项会改变红石电路的一些行为，因此对于依赖原版红石特定行为设计的机械装置，可能需要重新调整。

#### `defaultLoggers mobcaps,tps`

`carpet`

> GPT: 这个选项设置了在玩家首次进入游戏或者新创建的世界中，默认启用哪些日志记录器（loggers）。日志记录器可以实时监测和报告游戏内的各种状态和指标。
> 
> 具体来说，上述选项将以下两个日志记录器设为默认：
> 1. **mobcaps**：监控游戏中生物的数量上限（mob caps），帮助玩家了解不同区块中的生物生成情况。
> 2. **tps**：监控服务器每秒的游戏刻（ticks per second），帮助玩家了解服务器性能是否稳定。

通过这个选项，你可以确保每个新玩家一进游戏就能够自动获取这些有用的信息，无需手动启用。

#### `synchronizedLightThread true`

`tis`

将光照线程与主线程同步，这样光照线程就不会于落后主线程而失去同步

服务器将会在每个世界开始运算时等待光照线程的任务完成

你可以借此安全地 `/tick warp` 而不用担心潜在的光照抑制或光照不同步


#### `lagFreeSpawning true`

`carpet`

减少生成实体过程所需的 CPU 和内存资源。

