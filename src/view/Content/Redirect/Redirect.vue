<script lang="ts" setup>
import { provide } from 'vue'
import { Redirect } from './Redirect'
import  MenuVue  from './components/Menu/Menu.vue';
import  NavVue  from './components/Nav/Nav.vue';


const instance = new Redirect()
provide('instance', instance)
const {

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Redirect">
        <div class="navBar">
            <NavVue></NavVue>
        </div>
        <div class="router">
            <MenuVue></MenuVue>
            <!-- <el-button @click="instance.ToPage">hh</el-button> -->
        </div>
        <div class="Content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./Redirect.scss"
</style>