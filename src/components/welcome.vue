<template>
    <div>
          <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>主页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <h1>欢迎使用华东交通大学房地产管理系统！</h1>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
