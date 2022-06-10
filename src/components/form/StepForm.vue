<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus'
import { ref, reactive } from 'vue'
import 'animate.css'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: ''
})

const rulesOne = reactive<FormRules>({

})

const rulesTwo = reactive<FormRules>({

})

const stepOne = ref<any>()
const stepTwo = ref<any>()
const stepThree = ref<any>()
const submitForm = async (form: FormInstance | undefined, self: any, nextElement: any) => {
    if (!form) return
    await form.validate((valid, fields) => {
        if (valid) {
            next(self, nextElement)
        } else {
            console.log('error submit!', fields)
        }
    })
}

const prev = (prev: any, self: any) => {
    prev.classList.remove('animate__fadeOutLeft')
    prev.classList.add('animate__fadeInLeft')
    self.classList.remove('animate__fadeInRight', 'animate__fadeInLeft')
    self.classList.add('animate__fadeOutRight')
}

const next = (self: any, next: any) => {
    self.classList.remove('animate__fadeInLeft', 'animate__fadeInRight')
    self.classList.add('animate__fadeOutLeft')
    next.classList.remove('animate__fadeOutRight')
    next.classList.add('animate__fadeInRight')
}

const resetForm = (from: FormInstance | undefined) => {
    if (!from) return
    from.resetFields()
}
</script>

<template>
    <div class="step-form">
        <div class="step-one animate__animated" ref="stepOne">
            <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rulesOne"
            label-width="120px"
            >
                <el-form-item label="Password" prop="pass">
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" show-password />
                </el-form-item>
                <el-form-item label="Confirm" prop="checkPass">
                    <el-input
                        v-model="ruleForm.checkPass"
                        type="password"
                        autocomplete="off"
                        show-password
                    />
                </el-form-item>
                <el-form-item label="Age" prop="age">
                    <el-input v-model.number="ruleForm.age" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="() => submitForm(ruleFormRef, stepOne, stepTwo)"
                        >下一步</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
        <div class="step-two animate__animated" ref="stepTwo">
            <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rulesTwo"
            label-width="120px"
            >
                <el-form-item label="Password" prop="pass">
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" show-password disabled />
                </el-form-item>
                <el-form-item label="Confirm" prop="checkPass">
                    <el-input
                        v-model="ruleForm.checkPass"
                        type="password"
                        autocomplete="off"
                        show-password
                        disabled
                    />
                </el-form-item>
                <el-form-item label="Age" prop="age">
                    <el-input v-model.number="ruleForm.age" disabled/>
                </el-form-item>
                <el-form-item>
                    <el-button @click="prev(stepOne, stepTwo)">上一步</el-button>
                    <el-button type="primary" @click="() => submitForm(ruleFormRef, stepTwo, stepThree)"
                        >下一步</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
        <div class="step-three animate__animated" ref="stepThree">
            <el-button @click="prev(stepTwo, stepThree)">上一步</el-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .step-form {
        display: flex;
        width: 600px;
        .step-one, .step-two {
            width: 600px;
            position: absolute;
            background-color: white;
        }
        .step-one {
            z-index: 1;
        }
    }
</style>