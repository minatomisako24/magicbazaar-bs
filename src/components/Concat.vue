<script setup lang="ts">
import { ref } from 'vue'

import BaseHeader from './nav/BaseHeader.vue'
import LeftNav from './nav/LeftNav.vue'
</script>

<template>
    <div>
        <el-container>
            <el-header class="header">
                <el-affix>
                    <BaseHeader></BaseHeader>
                </el-affix>
            </el-header>
            <el-container>
                <el-aside width="200px" style="z-index: 100;">
                    <LeftNav></LeftNav>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
    .header {
        padding: 0;
    }
</style>