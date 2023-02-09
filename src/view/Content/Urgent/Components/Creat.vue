<script lang="ts" setup>
import { inject } from 'vue'
import { Urgent } from '../Urgent'
const instance = inject('instance') as Urgent
const {} = instance.InitStates()

const {

} = instance.Creat.InitStates()
instance.Creat.InitHooks()
instance.Creat.Run()
</script>

<template>
    <div class="Create">
        <span class="Widget">
            <span class="Header">
                <span class="Label">新建航线</span>
                <span class="Close" >
                    <img  alt="">
                </span>
            </span>
            <span class="Body">
                <span class="Name">
                    <span class="Title">航线名称<span :style="{ color: 'red' }">*</span></span>
                    <span class="Input">
                        <input type="text" class="RouteName" placeholder="请输入航线名称">
                    </span>
                </span>
                <span class="Dock">
                    
                </span>
                <span class="Btn">
                    <span class="Cancel" >取消</span>
                    <span class="Sure" >确认</span>
                </span>
            </span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Creat.scss"
</style>