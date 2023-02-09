<script lang="ts" setup>
import { provide, inject } from 'vue'
import { Info } from './Info';
import RoleVue from './compontents/Role/Role.vue'
import AccountVue from './compontents/Account/Account.vue'
const instance=new Info()
provide('instance', instance)
const {
    activeName,
    containerRef,
    searchRef,
    tableH
} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div ref="containerRef" class="app-container list-cantainer">
        <div ref="searchRef" class="list-search tab-top">
            <div class="tab-btn">
                <span :class="{ active: activeName === '1' }" @click="instance.changeTab('1')">角色管理</span>
                <span :class="{ active: activeName === '2' }" @click="instance.changeTab('2')">账号管理</span>
            </div>
        </div>
        <div v-show="activeName === '1'" :style="{ height: tableH + 'px' }" class="role">
            <RoleVue></RoleVue>
        </div>
        <div v-show="activeName === '2'" :style="{ height: tableH + 'px' }"  class="account">
            <AccountVue></AccountVue>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./Info.scss"
</style>
