<template>
    <div class="layout">
        <el-container>
            <el-aside width="200px">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    :collapse="switchvalue"
                    :router="true"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item index="" @click="switchvalue = !switchvalue">
                        <i class="el-icon-d-arrow-right" v-if="switchvalue"></i>
                        <i class="el-icon-d-arrow-left" v-else></i>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-notebook-1"></i>
                            <span>css相关</span>
                        </template>
                        <el-submenu index="1-1">
                            <template slot="title">css基础</template>
                            <el-menu-item index="layout/1-1-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                            <template slot="title">css进阶</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-3">
                            <template slot="title">css高级</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-notebook-1"></i>
                            <span>JavaScript相关</span>
                        </template>
                        <el-submenu index="2-1">
                            <template slot="title">js基础</template>
                            <el-menu-item index="layout/1-1-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-2">
                            <template slot="title">js进阶</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-3">
                            <template slot="title">js高级</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-notebook-1"></i>
                            <span>vue相关</span>
                        </template>
                        <el-submenu index="3-1">
                            <template slot="title">vue基础</template>
                            <el-menu-item index="layout/1-1-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-2">
                            <template slot="title">vue进阶</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-3">
                            <template slot="title">vue高级</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-notebook-1"></i>
                            <span>react相关</span>
                        </template>
                        <el-submenu index="3-1">
                            <template slot="title">vue基础</template>
                            <el-menu-item index="layout/1-1-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-2">
                            <template slot="title">vue进阶</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-3">
                            <template slot="title">vue高级</template>
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
    public switchvalue = false
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