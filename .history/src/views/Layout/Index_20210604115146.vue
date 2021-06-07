<template>
    <div class="layout">
        <el-container>
            <el-aside width="max-content;">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    :collapse="switchvalue"
                    :router="true"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item index="">
                        <i class="el-icon-d-arrow-right"  @click="switchvalue = false" v-if="switchvalue"></i>
                        <i class="el-icon-d-arrow-left"  @click="switchvalue = true" v-else></i>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Layout extends Vue {
    public switchvalue = true
    public handleOpen():void {
        console.log(1);
    }
    public handleClose():void {
        console.log(2);
    }
}
</script>

<style scoped lang="less">
.el-menu {
    min-height: calc(100vh - 16px);
}
</style>