# Ledger 操作指南

op 的 Ledger 权限是全开放的。但是如果有服务器 shell 可以直接去数据库查原始数据（查询范围和自由度更大，且大批量数据展示效果要好一些）

## 服务器 op 权限（使用 `/ledger` 命令查询）



## 有服务器 shell（使用数据库管理工具查询 PostgreSQL）

在 `config/ledger.toml` 文件最后有数据库的连接地址、端口、密码等。形如

```toml
[database_extensions]
database = "POSTGRESQL"
url = "HOST:PORT/DB"
username = "USER"
password = "PASS"
properties = []
```

在命令行使用 `psql -U USER -p PORT -W -h HOST -d DB` 连接数据库（替换为上面的 USER 等）

```shell
psql -U USER -p PORT -W -h HOST -d DB

# 之后提示
Password: # 在这里输入密码，没有显示

# 连接成功后，输出
psql (15.8 (Debian 15.8-0+deb12u1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, compression: off)
Type "help" for help.

# 使用 \dt; 列出当前数据库的表
DB=> \dt;
              List of relations
 Schema |       Name        | Type  | Owner
--------+-------------------+-------+--------
 public | actionidentifiers | table | USER
 public | actions           | table | USER
 public | objectidentifiers | table | USER
 public | players           | table | USER
 public | sources           | table | USER
 public | worlds            | table | USER
(6 rows)

```

### 查询某个位置范围的变动

```sql
SELECT
    actions.time,
    players.player_name,
    actionidentifiers.action_identifier,
    objectidentifiers.identifier
FROM actions
    join actionidentifiers on actions.action_id = actionidentifiers.id
    join players on actions.player_id = players.id
    join objectidentifiers on actions.object_id = objectidentifiers.id
WHERE x >= -82
    and x <= -66
    and z >= -415
    and z <= -395
    and objectidentifiers.identifier like '%torch%' -- 如果要查询某个物品
    and players.player_name like '%name%' -- 如果要查询某个玩家
order by time desc; -- desc 为降序，不写为升序
```
