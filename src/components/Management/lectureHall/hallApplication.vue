<template>
    <div>
        <!-- <h1>报告厅申请管理</h1> -->
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>报告厅管理</el-breadcrumb-item>
            <el-breadcrumb-item>申请管理</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-card>
            <el-form ref="form" :inline="true" :model="form" >
                <el-form-item label="校区" prop="school">
                    <el-select v-model="form.school" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="楼栋" prop="region1">
                    <el-select v-model="form.school" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="楼层" prop="region2">
                    <el-select v-model="form.school" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="名称" prop="region2">
                    <el-select v-model="form.school" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="状态" prop="region2">
                    <el-select v-model="form.school" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="价值" prop="price">
                    <el-date-picker v-model="form.school" type="datetime" placeholder="datetime"></el-date-picker>
                </el-form-item>
                
                <el-form-item prop="name">
                    <el-input v-model="form.name" placeholder="请输入申请人名称"></el-input>
                </el-form-item>
                
                <!-- 按钮 -->
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                    <el-button type="info" @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        
        <!-- 功能区域 -->
        <div class="features">
            <div class="btn">
                <el-button @click="landsImport" icon="el-icon-download" size="medium" plain>导入</el-button>
                <el-button @click="landsExport" icon="el-icon-upload2" size="medium" plain>导出</el-button>
                <el-button @click="landsDelete" icon="el-icon-delete" size="medium" plain>删除</el-button>
                <el-button @click="landsScreen" icon="el-icon-search" size="medium" plain>筛查</el-button>
                <el-button type="danger" size="mini">有{{this.total}}个申请即将到期<i class="el-icon-search el-icon--right"></i></el-button>
                <el-tag type="info">总数: {{this.total}} 条</el-tag>
            </div>
        </div>
        
        <!-- 数据展示 -->
        <el-card>
            
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            total:12,
            form:{
                school:'',
                name:''
            }
        }
    },
    created(){},
    methods: {
        
    },
}
</script>
<style scoped>

</style>
