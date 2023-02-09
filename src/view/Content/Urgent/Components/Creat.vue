<script lang="ts" setup>
import { inject } from 'vue'
import { Urgent } from '../Urgent'
const instance = inject('instance') as Urgent
const { } = instance.InitStates()

const {
    isShow,
    form,
    mapDom,
    blurs,
    blursFlag


} = instance.Creat.InitStates()
instance.Creat.InitHooks()
instance.Creat.Run()
</script>

<template>
    <div class="Create1">
        <el-button @click="instance.Creat.add()">添加</el-button>
        <el-dialog v-model="isShow">
            <el-col @mouseleave="instance.Creat.BlurInput()">
                <el-form :model="form" label-width="120px">
                    <el-form-item label="警情详情">
                        <el-input v-model="form.name" type="textarea" />
                    </el-form-item>
                    <el-form-item label="警情位置">
                        <el-input v-model="form.location" clearable @focus="instance.Creat.moreLocation"
                            @click="instance.Creat.moreLocation" />
                        <div class="blur" v-show="blursFlag">
                            <div class="item" v-for="t in blurs">{{ t.district + t.address + t.name }}</div>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-row :gutter="20">
                            <el-col :span="3">经度:</el-col>
                            <el-col :span="9"><el-input v-model="form.lng" /></el-col>
                            <el-col :span="3">纬度:</el-col>
                            <el-col :span="9"><el-input v-model="form.lat" /></el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <div class="maps" ref="mapDom"></div>
                    </el-form-item>
                </el-form>
            </el-col>

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