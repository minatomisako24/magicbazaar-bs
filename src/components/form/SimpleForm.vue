<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus';
import { ref, reactive } from 'vue'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: '',
    region: '',
    count: '',
    startDate: '',
    endDate: '',
    delivery: false,
    resource: '',
    type: [],
    description: ''
})
const options = ref<any>([
    {label: 1, value: 1}
])


const testCheck = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入密码'))
    }
    setTimeout(() => {
        if (!/^[A-z0-9_+-.]{6,16}$/.test(value as string)) {
            callback(new Error('密码输入不符合要求'))
        } else {
            callback()
        }
    }, 300)
}

const phoneCheck = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入手机号'))
    }
    setTimeout(() => {
        if (!/^[1][0-9]{10}$/.test(value as string)) {
            callback(new Error('手机号输入不符合要求'))
        } else {
            callback()
        }
    }, 300)
}

const emailCheck = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入邮箱'))
    }
    setTimeout(() => {
        if (!/^[A-z0-9][A-z0-9_]{6,14}[A-z0-9][@][A-z0-9]{1,3}[.][A-z]{1,3}$/.test(value as string)) {
            callback(new Error('邮箱输入不符合要求'))
        } else {
            callback()
        }
    }, 300)
}



const rules = reactive<FormRules>({
    // simple
    pass: [
        { required: true, message: 'not', trigger: 'blur' },
        { min: 3, max: 16, message: '?', trigger: 'blur' },
        { pattern: /^[A-z0-9]{3,16}$/, message: 'pattren', trigger: 'blur' },
        { validator: testCheck, message: 'no', trigger: 'blur'}
    ]
})

const submitForm = async (form: FormInstance | undefined) => {
    if (!form) return
    await form.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (from: FormInstance | undefined) => {
    if (!from) return
    from.resetFields()
}
</script>

<template>
    <div class="simple-form">
        <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
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
            <el-form-item label="Activity zone" prop="region">
                <el-select v-model="ruleForm.region" placeholder="Activity zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
                <el-form-item label="Activity count" prop="count">
                <el-select-v2
                    v-model="ruleForm.count"
                    placeholder="Activity count"
                    :options="options"
                />
            </el-form-item>
            <el-form-item label="Activity time" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker
                            v-model="ruleForm.startDate"
                            type="date"
                            label="Pick a date"
                            placeholder="Pick a date"
                            style="width: 100%"
                        />
                    </el-form-item>
                </el-col>
                <el-col class="text-center" :span="2" style="text-align: center;">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker
                            v-model="ruleForm.endDate"
                            label="Pick a time"
                            placeholder="Pick a time"
                            style="width: 100%"
                        />
                        </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery" prop="delivery">
                <el-switch v-model="ruleForm.delivery" />
            </el-form-item>
            <el-form-item label="Activity type" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="Sponsorship" />
                    <el-radio label="Venue" />
                </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form" prop="desc">
                <el-input v-model="ruleForm.description" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                    >Submit</el-button
                >
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="scss">

</style>