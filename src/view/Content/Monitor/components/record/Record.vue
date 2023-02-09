<script lang="ts" setup>
import { inject } from 'vue'
import { Monitor } from '../../Monitor'
const instance = inject('instance') as Monitor
const { } = instance.InitStates()

const {
    recordData
} = instance.Record.InitStates()
instance.Record.InitHooks()
instance.Record.Run()
</script>

<template>
    <div class="Record">
        <div class="search">
            <span class="text">记录查询</span>
            <span class="input">
                <!-- <el-form :model="queryParams" ref="queryRef" class="clearfix" :inline="true">
                    <el-form-item prop="status">
                        <el-input class="w-50 m-2" placeholder="Please input" />
                    </el-form-item>
                    <el-form-item prop="status">
                        <el-select placeholder="Select" style="width: 115px">
                            <el-option label="Restaurant" value="1" />
                            <el-option label="Order No." value="2" />
                            <el-option label="Tel" value="3" />
                        </el-select>
                    </el-form-item>
                </el-form> -->
            </span>

        </div>
        <div class="list">
            <el-table :data="recordData" style="width: 100%" height="390">
                <el-table-column prop="address" align="center" label="地址" />
                <el-table-column prop="description" align="center" label="描述" />
                <el-table-column prop="createtime" align="center" label="创建时间" />
                <el-table-column prop="type" align="center" label="警情类型" />
                <el-table-column prop="status" align="center" label="执行状态" />
            </el-table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./Record.scss"
</style>