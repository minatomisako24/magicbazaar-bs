<script setup lang="ts">
import { ref } from 'vue'

const turnOff = ref<boolean>(false)
const changeTurnOff = () => {
    turnOff.value = !turnOff.value
}
const handleOpen = () => {

}

const handleClose = () => {

}
</script>

<template>
    <div class="left-nav">
        <el-menu
        default-active="1"
        :collapse="turnOff"
        @open="handleOpen"
        @close="handleClose"
        >
            <el-menu-item index="" :onclick="changeTurnOff" style="color: black;">
                <el-icon><Operation /></el-icon>
                <template #title>侧边栏</template>
            </el-menu-item>
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
    .left-nav {
        ::v-deep(.el-menu) {
            .el-menu-item:first-child .el-menu-item.is-active {
                color: black;
            }
        }
    }
</style>