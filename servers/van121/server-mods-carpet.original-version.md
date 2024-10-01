# carpet 模组选项

服务器上 carpet 相关模组有四个，分别是

| 模组文件名                                        | 名称                     | mcmod                                        | GitHub                                                  | 规则说明                                                                         |
| ------------------------------------------------- | ------------------------ | -------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `fabric-carpet-1.21-1.4.147+v240613.jar`          | Carpet 本体模组          | [link](https://www.mcmod.cn/class/2361.html) | [link](https://github.com/gnembon/fabric-carpet)        | [link](https://github.com/gnembon/fabric-carpet/wiki/Current-Available-Settings) |
| `carpet-extra-1.21-1.4.147.jar`                   | Carpet 扩展              | [link](https://www.mcmod.cn/class/3325.html) | [link](https://github.com/gnembon/carpet-extra)         | [link](https://github.com/gnembon/carpet-extra)                                  |
| `carpet-tis-addition-v1.63.1-mc1.21.1.jar`        | Carpet TIS Addition      | [link](https://www.mcmod.cn/class/5664.html) | [link](https://github.com/TISUnion/Carpet-TIS-Addition) | [link](https://carpet.tis.world/zh-Hans/docs/rules)                                    |
| `gugle-carpet-addition-mc1.21-2.9.0+build.52.jar` | [GCA]Gugle的Carpet附加包 | [link](https://www.mcmod.cn/class/7305.html) | [link](https://github.com/Gu-ZT/gugle-carpet-addition)  | [link](https://github.com/Gu-ZT/gugle-carpet-addition)                           |
## 目前开启的配置选项

### 基础设置

#### `language zh_cn`

`carpet`

Sets the language for Carpet

-   Type: `String`
-   Default value: `en_us`
-   Allowed options: `en_us`, `fr_fr`, `pt_br`, `zh_cn`, `zh_tw`
-   Categories: `FEATURE`

### 假人相关

#### `fakePlayerNamePrefix bot_`

`tis`

为 `/player` 指令召唤出来的假人名称添加指定前缀

将其设置为 `#none` 以阻止添加前缀

这可阻止玩家召唤奇怪名字的假人，还能让玩家列表变得更整洁

-   类型: `String`
-   默认值: `#none`
-   参考选项: `#none`, `bot_`
-   分类: `TIS`, `CARPET_MOD`

#### `openFakePlayerInventory true`

`gca`

Use `/carpet openFakePlayerInventory true` Allow player to open the fake player's inventory

#### `openFakePlayerEnderChest true`

`gca`

Use `/carpet openFakePlayerEnderChest true` Allow player to open the fake player's ender chest

Sneak to open the fake player's ender chest

#### `fakePlayerResident true`

`gca`

Use `/carpet fakePlayerResident true` to keep the fake player when exiting the level

### 体验优化

#### `stackableShulkerBoxes 8`

`carpet`

Empty shulker boxes can stack when thrown on the ground.\
.. or when manipulated inside the inventories

-   Type: `String`
-   Default value: `false`
-   Suggested options: `false`, `true`, `16`
-   Categories: `SURVIVAL`, `FEATURE`
-   Additional notes:
    -   Value must either be true, false, or a number between 2-64

#### `yeetUpdateSuppressionCrash true`

`tis`

阻止服务端因 `StackOverflowError`、`OutOfMemoryError` 或 `ClassCastException` 异常而造成的服务器崩溃

具体功能实现类似 carpet 的 `updateSuppressionCrashFix` 规则，但包含更多信息

-   移植自：
    -   fabric carpet [1.4.50](https://github.com/gnembon/fabric-carpet/releases/tag/1.4.50) 的规则 `updateSuppressionCrashFix`
    -   TISCarpet13 [build238](https://github.com/TISUnion/TISCarpet113/releases/tag/build238) 的规则 `yeetUpdateSuppressionCrash`

#### `witherSpawnedSoundDisabled true`

`tis`

禁用凋灵在召唤后生命值回满时发出的世界中所有玩家都能听到的音效

-   类型: `boolean`
-   默认值: `false`
-   参考选项: `false`, `true`
-   分类: `TIS`, `CREATIVE`

#### `xpNoCooldown true`

`carpet`

Players absorb XP instantly, without delay

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `CREATIVE`

#### `creativeNoClip true`

`carpet`

Creative No Clip\
On servers it needs to be set on both\
client and server to function properly.\
Has no effect when set on the server only\
Can allow to phase through walls\
if only set on the carpet client side\
but requires some trapdoor magic to\
allow the player to enter blocks

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `CREATIVE`, `CLIENT`
-   Additional notes:
    -   Its a client command so can be issued and potentially be effective when connecting to non-carpet/vanilla servers. In these situations (on vanilla servers) it will only affect the executing player, so each player needs to type it separately for the desired effect

#### `renewableDeepslate false`

`carpet`

Lava and water generate deepslate and cobbled deepslate instead below Y0

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `FEATURE`

#### `fakePlayerAutoReplenishment true`

`gca`

Use `/carpet fakePlayerAutoReplenishment true` to make fake player to auto replenishment

#### `creativeOpenContainerForcibly true`

`tis`

允许创造模式的玩家打开被阻挡的容器，如潜影盒

-   类型: `boolean`
-   默认值: `false`
-   参考选项: `false`, `true`
-   分类: `TIS`, `CREATIVE`

#### `fastRedstoneDust true`

`carpet`

Lag optimizations for redstone dust\
by Theosib\
.. also fixes some locational behaviours or vanilla redstone MC-11193\
so behaviour of locational vanilla contraptions is not guaranteed

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `EXPERIMENTAL`, `OPTIMIZATION`

#### `enderPearlChunkLoading true`

`extra`

Allow horizontally moving Ender Pearls to load chunks as entity ticking.

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `FEATURE`, `EXTRAS`

#### `commandPlayer true`

`carpet`

Enables /player command to control/spawn players

-   Type: `String`
-   Default value: `ops`
-   Allowed options: `true`, `false`, `ops`, `0`, `1`, `2`, `3`, `4`
-   Categories: `COMMAND`
-   Additional notes:
    -   It has an accompanying command
    -   Can be limited to 'ops' only, true/false for everyone/no one, or a custom permission level

#### `defaultLoggers mobcaps,tps`

`carpet`

sets these loggers in their default configurations for all new players\
use csv, like 'tps,mobcaps' for multiple loggers, none for nothing

-   Type: `String`
-   Default value: `none`
-   Suggested options: `none`, `tps`, `mobcaps,tps`
-   Categories: `CREATIVE`, `SURVIVAL`

#### `missingTools true`

`carpet`

Glass can be broken faster with pickaxes

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `SURVIVAL`

#### `synchronizedLightThread true`

`tis`

将光照线程与主线程同步，这样光照线程就不会于落后主线程而失去同步

服务器将会在每个世界开始运算时等待光照线程的任务完成

你可以借此安全地 `/tick warp` 而不用担心潜在的光照抑制或光照不同步

-   类型: `boolean`
-   默认值: `false`
-   参考选项: `false`, `true`
-   分类: `TIS`, `CREATIVE`, `EXPERIMENTAL`

#### `flippinCactus true`

`carpet`

Players can flip and rotate blocks when holding cactus\
Doesn't cause block updates when rotated/flipped\
Applies to pistons, observers, droppers, repeaters, stairs, glazed terracotta etc...

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `CREATIVE`, `SURVIVAL`, `FEATURE`

#### `lagFreeSpawning true`

`carpet`

Spawning requires much less CPU and Memory

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `OPTIMIZATION`

#### `accurateBlockPlacement true`

`extra`

Client can provide alternative block placement.

-   Type: `Boolean`
-   Default value: `false`
-   Allowed options: `true`, `false`
-   Categories: `EXTRAS`, `SURVIVAL`