<script lang="ts" setup>
import { provide } from 'vue'
import { Urgent } from './Urgent'
import CreatVue from './Components/Creat.vue'

const instance = new Urgent()
provide('instance', instance)
const {
    mapDom,
    tools,
    addAlert,
    form

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Urgent">
        <div class="map" ref="mapDom"></div>
        <div class="Tools">
            <div class="item" v-for="i in tools" :key="i.id" @click="instance.x()">
                <img :src="i.icon" alt="">
            </div>
        </div>
        <div class="Create">
            <el-button @click="addAlert = true">
                click
            </el-button>
        </div>
        <el-dialog v-model="addAlert" title="添加警情" width="600px">
            <el-form :model="form" label-width="120px">
                <el-form-item label="Activity name">
                    <el-input v-model="form.extarea" :rows="2" type="textarea" placeholder="描述" />
                </el-form-item>
            </el-form>

            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="addAlert = false">Cancel</el-button>
                    <el-button type="primary" @click="addAlert = false">
                        Confirm
                    </el-button>
                </div>

            </template>
        </el-dialog>




        <!-- <transition>
            <CreatVue v-show="false"></CreatVue>
        </transition> -->
    </div>
</template>

<style lang="scss" scoped>
@import "./Urgent.scss"
</style>