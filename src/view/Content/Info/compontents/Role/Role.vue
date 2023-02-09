<script lang="ts" setup>
import { inject } from 'vue'
import { Info } from '../../Info'
const instance = inject('instance') as Info
const { } = instance.InitStates()

const {
    data,
    roleList,
    roleTitle,
    roleOpen,
    limitData,
    limitType

} = instance.Role.InitStates()
instance.Role.InitHooks()
instance.Role.Run()
</script>

<template>
    <div class="role-manage">
        <div class="left">
            <div class="role-header">
                <span class="role-list">角色列表</span>
                <span class="role-add" @click="instance.Role.addRole()">添加</span>
            </div>
            <div class="role-container">
                <el-button class="role-item" v-for="r in roleList" :key="r.id" @click="instance.Role.roleLimit(r.id)">
                    <span class="role-name">{{ r.name }}</span>
                    <svg-icon icon-class="edit" class="role-edit"></svg-icon>
                    <svg-icon icon-class="delete" class="role-del"></svg-icon>
                </el-button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "./Role.scss"
</style>