<script setup lang="ts">
import { ref, computed } from 'vue'
import SimpleTableForm from './SimpleTableForm.vue'
import { ElMessage, ElMessageBox, ElTable } from 'element-plus'

interface User {
    date: string,
    name: string,
    address: string
}

const dialogFormVisible = ref<boolean>(false)

const user = ref<User>({
    date: '',
    name: '',
    address: ''
})

const handleEdit = (index: number, row: User) => {
    console.log(index, row)
    user.value = JSON.parse(JSON.stringify(row))
    dialogFormVisible.value = true
}

const handleDelete = (index: number, row: User) => {
    console.log(index, row)
    ElMessageBox.confirm(
        '删除?',
        'warn',
        {
            confirmButtonText: 'ok',
            cancelButtonText: 'cancel',
            type: 'warning'
        }
    ).then(() => {
        ElMessage({
            message: 'success',
            type: 'success'
        })
    }).catch(() => {
        ElMessage({
            message: 'error',
            type: 'warning'
        })
    })
}

const tableData: User[] = [
    {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const searchName = ref<string>('')
const searchDate = ref<string>('')

const tableFilterData = computed(() => tableData
.filter((data) => !searchName.value || data.name.toLowerCase().includes(searchName.value.toLowerCase()))
.filter((data) => !searchDate.value || data.date == searchDate.value))


const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const toggleSelection = (rows?: User[]) => {
    if (rows) {
        rows.forEach((row) => {
            // TODO: improvement typing when refactor table
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            multipleTableRef.value!.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value!.clearSelection()
    }
}
</script>

<template>
    <div class="simple-table">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >Toggle selection status of second and third rows</el-button
        >
        <el-button @click="toggleSelection()">Clear selection</el-button>
        <el-table :data="tableFilterData" style="width: 100%" ref="multipleTableRef" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column type="selection" width="55" />
            <el-table-column label="Date" width="180" prop="date" sortable>
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon><timer /></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Name" width="180">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>name: {{ scope.row.name }}</div>
                            <div>address: {{ scope.row.address }}</div>
                        </template>
                        <template #reference>
                            <el-tag>{{ scope.row.name }}</el-tag>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column>
                <template #header>
                    <el-row>
                        <el-col :span="5">
                            name<el-input v-model="searchName" size="small" placeholder="Type to search" />
                        </el-col>
                        <el-col :span="5" :offset="1">
                            date<el-input v-model="searchDate" size="small" placeholder="Type to search" />
                        </el-col>
                    </el-row>
                </template>
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                    >Edit</el-button
                    >
                    <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >Delete</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <SimpleTableForm v-model:dialogFormVisible="dialogFormVisible" :user="user"></SimpleTableForm>
    </div>
</template>

<style scoped lang="scss">

</style>