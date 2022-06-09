<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <div class="error-container">
        <el-result
        icon="error"
        title="404"
        sub-title="未找到该页面"
        >
            <template #extra>
                <el-button type="primary" @click="$router.go(-1)">返回</el-button>
            </template>
        </el-result>
    </div>
</template>

<style scoped lang="scss">
    .error-container {
        ::v-deep(.el-result) {
            margin-top: 250px;
        }
    }
</style>