<script setup lang="ts">
import { ref, VNode, VNodeProps } from 'vue'

interface Option {
    key: number
    label: string
    disabled: boolean
}

const generalData = (): Option[] => {
    const data: Option[] = []

    for (let i = 0; i < 15; i++) {
        data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 == 0
        })     
    }

    return data
}

const data = ref<any>(generalData())

const leftValue = ref<any>([1])

const renderFunc = (
    h: (type: string, props: VNodeProps | null, children?: string) => VNode,
    option: Option
) => {
    return h('span', null, option.label)
}

const handleChange = (
    value: number | string,
    direction: 'left' | 'right',
    movedKeys: string[] | number[]
) => {
    console.log(value, direction, movedKeys)
}
</script>

<template>
    <div class="transfer-form">
        <el-transfer
        v-model="leftValue"
        style="text-align: left; display: inline-block"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['某个商品', '拿到的商品']"
        :button-texts="['删除', '添加']"
        :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}',
        }"
        :data="data"
        @change="handleChange"
        >
            <template #left-footer>
                <el-button class="transfer-footer" type="primary">测试</el-button>
            </template>
            <template #right-footer>
                <el-button class="transfer-footer" type="primary">测试</el-button>
                <el-button class="transfer-footer" type="primary">More</el-button>
            </template>
        </el-transfer>
    </div>
</template>

<style scoped lang="scss">
    .transfer-form {
        ::v-deep(.el-transfer) {
            .el-transfer-panel {
                width: 500px;
                .el-transfer-panel__body {
                    height: 700px;
                    .el-input {
                        width: 450px;
                    }
                }
                .el-transfer-panel__footer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
</style>