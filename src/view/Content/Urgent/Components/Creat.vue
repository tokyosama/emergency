<script lang="ts" setup>
import { inject } from 'vue'
import { Urgent } from '../Urgent'
const instance = inject('instance') as Urgent
const { } = instance.InitStates()

const {
    isShow,
    form,
    mapDom
    

} = instance.Creat.InitStates()
instance.Creat.InitHooks()
instance.Creat.Run()
</script>

<template>
    <div class="Create1">
        <el-button @click="instance.Creat.add()">添加</el-button>
        <el-dialog v-model="isShow" >
            <el-form :model="form" label-width="120px">
                <el-form-item label="警情详情">
                    <el-input v-model="form.name" type="textarea" />
                </el-form-item>
                <el-form-item label="警情位置">
                    <el-input v-model="form.location"  />
                </el-form-item>
                <el-form-item >
                    <el-row :gutter="20">
                        <el-col :span="3">经度:</el-col>
                        <el-col :span="9"><el-input v-model="form.lng"  /></el-col>
                        <el-col :span="3">纬度:</el-col>
                        <el-col :span="9"><el-input v-model="form.lng"  /></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <div class="map" ref="mapDom"></div>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="isShow = false">Cancel</el-button>
                    <el-button type="primary" @click="isShow = false">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style lang="scss" scoped>
@import "./Creat.scss"
</style>