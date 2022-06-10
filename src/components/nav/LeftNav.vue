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

const handleSelect = (index: string, indexPath: Array<string>, item: any, routeResult: string) => {
    console.log(index, indexPath, item, routeResult)
}
</script>

<template>
    <div class="left-nav">
        <el-menu
        :default-active="$route.path"
        :collapse="turnOff"
        router
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        >
            <el-menu-item index="" :onclick="changeTurnOff" style="color: black;">
                <el-icon><Operation /></el-icon>
                <template #title>侧边栏</template>
            </el-menu-item>
            <el-sub-menu index="form">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>表单</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="/simple/form">基本表单</el-menu-item>
                    <el-menu-item index="/step/form">分布表单</el-menu-item>
                    <el-menu-item index="/child/form">子表单</el-menu-item>
                    <el-menu-item index="/transfer/form">穿梭表单</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
             <el-sub-menu index="table">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>表格</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="/simple/table">基本表格</el-menu-item>
                    <el-menu-item index="/head/table">表头表格</el-menu-item>
                    <el-menu-item index="/count/table">统计表格</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
             <el-sub-menu index="echart">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>视图</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="/simple/echart">普通视图</el-menu-item>
                    <el-menu-item index="3-1-2">item two</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
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