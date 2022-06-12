<script setup lang="ts">
import { FormInstance, FormRules, ElMessageBox } from 'element-plus'
import { ref, reactive, watch, computed } from 'vue'

interface User {
    date: string,
    name: string,
    address: string
}

const props = defineProps<{
    dialogFormVisible: boolean,
    user: User
}>()

const emits = defineEmits([
    'update:dialogFormVisible'
])

const fromRef = ref<FormInstance>()
const form = reactive(computed(() => {
    return props.user
}))

</script>

<template>
    <div class="dialog-form">
        <el-dialog v-model="dialogFormVisible" title="子表单">
            <el-form :model="form" ref="fromRef" status-icon>
                <el-form-item label="Promotion name">
                    <el-input v-model="form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Zones">
                    <el-select v-model="form.date" placeholder="Please select a zone">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="emits('update:dialogFormVisible', false)">Cancel</el-button>
                    <el-button type="primary" @click="emits('update:dialogFormVisible', false)"
                    >Confirm</el-button
                    >
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped lang="scss">

</style>