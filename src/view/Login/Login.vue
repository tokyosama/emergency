<script lang="ts" setup>
import { provide } from 'vue'
import { Login } from './Login'

const instance = new Login()
provide('instance', instance)
const {
    number
} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Login">
        <el-button @click="instance.Add()">{{ number }}</el-button>

    </div>
</template>

<style lang="scss" scoped>
@import "./Login.scss"
</style>