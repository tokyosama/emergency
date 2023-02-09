<script lang="ts" setup>
import { inject } from 'vue'
import { Redirect } from '../../Redirect'
const instance = inject('instance') as Redirect
const {} = instance.InitStates()

const {

} = instance.Nav.InitStates()
instance.Nav.InitHooks()
instance.Nav.Run()
</script>

<template>
    <div class="Nav">
        nnnnnnnn

    </div>
</template>

<style lang="scss" scoped>
@import "./Nav.scss"
</style>