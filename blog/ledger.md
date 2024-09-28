# Ledger 参考语句

## 查询某个位置范围的变动

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
