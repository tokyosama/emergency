<script lang="ts" setup>
import { inject } from 'vue'
import { Redirect } from '../../Redirect'
const instance = inject('instance') as Redirect
const {} = instance.InitStates()

const {
    menuList,
    currentPath

} = instance.Menu.InitStates()
instance.Menu.InitHooks()
instance.Menu.Run()
</script>

<template>
    <div class="Menu">
        <div class="List" >
            <div class="Item" v-for="item in menuList" :key="item.path" :class="{Active: item.type==currentPath}" @click="instance.Menu.ToSelectPage(item)">
                <div class="Icon">
                    <img :src="item.icon" alt="" :title="item.name">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./Menu.scss"
</style>