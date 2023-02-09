<script lang="ts" setup>
import { inject } from 'vue'
import { Info } from '../../Info';
const instance = inject('instance') as Info
const {} = instance.InitStates()

const {

} = instance.Role.InitStates()
instance.Role.InitHooks()
instance.Role.Run()
</script>

<template>
    <div class="account-manage">
        accountt

    </div>
</template>

<style lang="scss" scoped>
@import "./Account.scss"
</style>