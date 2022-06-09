<script setup lang="ts">
import { ref } from 'vue'

const handleSelect = () => {

}
</script>

<template>
    <el-menu
    :default-active="$route.path"
    mode="horizontal"
    :ellipsis="false"
    router
    @select="handleSelect"
    >
        <el-menu-item index="1">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="2">
        <template #title>
            <el-avatar :size="40" src="" />
            <span style="padding-left: 10px;">name</span>
        </template>
            <el-menu-item index="2-1">个人中心</el-menu-item>
            <el-menu-item index="2-2">密码修改</el-menu-item>
            <el-menu-item index="2-3">消息通知</el-menu-item>
        </el-sub-menu>   
        <el-sub-menu index="5">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style scoped lang="scss">
    .el-menu {
        .flex-grow {
            flex-grow: 1
        }
    }
</style>