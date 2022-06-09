<script setup lang="ts">
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
                <el-aside width="200px">
                </el-aside>
                <el-main></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
    .header, .footer {
        padding: 0;
    }
    ::v-deep(.header) {
        .el-affix--fixed {
            background-color: #ffffff;
        }
    }
    .main {
        padding: 0;
    }
</style>