<script setup lang="ts">
import { ref } from 'vue'
import DialogForm from './DialogForm.vue'

const dialogFormVisible = ref<boolean>(false)
</script>

<template>
    <div class="child-form">
        <el-button type="primary" @click="dialogFormVisible = true">测试</el-button>
        <DialogForm v-model:dialogFormVisible="dialogFormVisible"></DialogForm>
    </div>
</template>

<style scoped lang="scss">
    .child-form {
        
    }
</style>