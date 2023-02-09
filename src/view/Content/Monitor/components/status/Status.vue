<script lang="ts" setup>
import { inject } from 'vue'
import { Monitor } from '../../Monitor'
const instance = inject('instance') as Monitor
const { } = instance.InitStates()

const {

} = instance.Status.InitStates()
instance.Status.InitHooks()
instance.Status.Run()
</script>

<template>
    <div class="Status">
        atatus

    </div>
</template>

<style lang="scss" scoped>
@import "./Status.scss"
</style>