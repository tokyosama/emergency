<script lang="ts" setup>
import { provide } from 'vue'
import { Monitor } from './Monitor'
import StatusVue from './components/status/Status.vue';
import RecordVue from './components/record/Record.vue';
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
        <StatusVue></StatusVue>
        <RecordVue></RecordVue>
    </div>
</template>

<style lang="scss" scoped>
@import "./Monitor.scss"
</style>