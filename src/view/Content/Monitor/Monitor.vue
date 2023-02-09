<script lang="ts" setup>
import { provide } from 'vue'
import { Monitor } from './Monitor'

const instance = new Monitor()
provide('instance', instance)
const {
    number
} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Monitor">
        <div>Monitor</div>
        <!-- <el-button @click="instance.Add()">{{ number }}</el-button> -->

    </div>
</template>

<style lang="scss" scoped>
@import "./Monitor.scss"
</style>