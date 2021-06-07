<template>
    <div class="layout">
        <el-container>
            <el-aside width="200px">
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    :collapse="switchvalue"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item index="" @click="switchvalue = !switchvalue">
                        <i class="el-icon-d-arrow-right" v-if="switchvalue"></i>
                        <i class="el-icon-d-arrow-left" v-else></i>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-notebook-1"></i>
                            <span @click="scrollToView('#e')">相关</span>
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
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-notebook-1"></i>
                            <span>react相关</span>
                        </template>
                        <el-submenu index="4-1">
                            <template slot="title">react基础</template>
                            <el-menu-item index="layout/1-1-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4-2">
                            <template slot="title">react进阶</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4-3">
                            <template slot="title">react高级</template>
                            <el-menu-item index="layout/1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container class="main-content">
                <el-main>
                    <div id="a" class="common">a</div>
                    <div id="b" class="common">b</div>
                    <div id="c" class="common">c</div>
                    <div id="d" class="common">d</div>
                    <div id="e" class="common">e</div>
                    <div id="f" class="common">f</div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator"

@Component
export default class Layout extends Vue {
    @Prop({
        type: Number,
        default: 1,
        required: false
    })
    typeIdx = 2

    public switchvalue = false
    private count:number = 2

    @Watch('typeIdx', {
        deep: true
    })
    public changeCount():void {
        console.log(this.typeIdx);
    }

    public handleOpen():void {
        console.log(1);
    }
    public handleClose():void {
        console.log(2);
    }
    public scrollToView(nodeId: string):void {
        this.$route.query.id = String(Math.random())
        this.$el.querySelector(nodeId)?.scrollIntoView({
            behavior: "smooth",  // 平滑过渡
            block:    "start"  // 上边框与视窗顶部平齐。默认值
        })
    }
    mounted() {
        console.log(this.$route.query);
    }
}
</script>

<style scoped lang="less">
.el-menu {
    height: calc(100vh - 16px);
    overflow: auto;
    overflow-x: hidden;
}
.common {
    height: 400px;
}
.main-content {
    height: calc(100vh - 16px);
    overflow: auto;
    overflow-x: hidden;
}
</style>