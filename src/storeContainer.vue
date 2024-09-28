<script setup>
import {ref} from 'vue';

// 接收 props
const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
});

const roleMap = {
    'librarian': '图书管理员',
};

const cateMap = {
    'enchanting': '附魔',
}

const list = ref(props.data.list);
list.value.sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>职业</th>
                    <th>商品类型</th>
                    <th>名称</th>
                    <!-- <th>Level</th> -->
                    <th>价格</th>
                    <th>位置</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="index">
                    <td>{{ roleMap[item.role] }}</td>
                    <td>{{ cateMap[item.category] }}</td>
                    <td>{{ item.name }}</td>
                    <!-- <td>{{ item.level }}</td> -->
                    <td>{{ item.price }}</td>
                    <td>
                        {{ item.position.floor }} 层
                        {{ item.position.row }} 排
                        {{ item.position.index }} 号
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>