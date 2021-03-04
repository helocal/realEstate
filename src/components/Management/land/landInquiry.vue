<template>
    <div>
        <!-- <h1>土地信息查询</h1> -->
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>土地</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
        </el-breadcrumb>
        
        <!-- 查询-->
        <el-card>
            <el-form ref="landInquiryRefs" :inline="true" :model="formInquiry" >
                <el-form-item label="坐落位置" prop="region">
                    <el-select v-model="formInquiry.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="性质" prop="region1">
                    <el-select v-model="formInquiry.region1" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="获得方式" prop="region2">
                    <el-select v-model="formInquiry.region2" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="获得时间" prop="date">
                    <el-date-picker type="date" placeholder="选择日期"  v-model="formInquiry.date"></el-date-picker>
                </el-form-item>
                
                <el-form-item label="面积" prop="area">
                    <el-input v-model="formInquiry.area"></el-input>
                </el-form-item>
                
                <el-form-item label="价值" prop="price">
                    <el-input v-model="formInquiry.price"></el-input>
                </el-form-item>
                
                <el-form-item label="录入状态" prop="type">
                    <el-input v-model="formInquiry.type"></el-input>
                </el-form-item>
                
                <el-form-item prop="name">
                    <el-input v-model="formInquiry.name" placeholder="请输入土地名 /土地证号"></el-input>
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
                
                <el-tag type="info">总数: {{this.total}} 条</el-tag>
            </div>
        </div>
        
        <!-- 信息展示卡片 -->
        <el-card>  
            <!-- table表格区域 -->
            <el-table :data="landslist" stripe :header-cell-style="{backgroundColor:'#f3f3f5'}">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="lands_name" label="土地名称" width="100px"></el-table-column>
                <el-table-column prop="lands_number" label="土地证号" width="100px"></el-table-column>
                <el-table-column prop="lands_localtion" label="位置" width="100px"></el-table-column>
                <el-table-column prop="lands_area" label="建筑面积(㎡)" width="100px"></el-table-column>
                <el-table-column prop="lands_price" label="价值(元)" width="100px"></el-table-column>
                <el-table-column prop="lands_type" label="性质" width="100px"></el-table-column>
                <el-table-column prop="lands_getType" label="获得方式" width="100px"></el-table-column>
                <el-table-column prop="lands_time" label="获得日期" width="100px"></el-table-column>
                <el-table-column prop="lands_input" label="录入" width="100px">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.lands_input ==='1'">是</el-tag>
                        <el-tag type="warning" v-else>否</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!-- 录入按钮 -->
                        <el-tooltip effect="dark" content="录入" placement="top" :enterable="false">
                            <el-button size="mini" type="success" icon="el-icon-download"></el-button>
                        </el-tooltip>
                        
                        <!-- 详情按钮 -->
                        <el-tooltip effect="dark" content="详情" placement="top" :enterable="false">
                            <el-button size="mini" type="info" icon="el-icon-search" @click="showDetails(scope.row)"></el-button>
                        </el-tooltip>
                        
                        <!-- 编辑按钮 -->
                        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                        <!-- 删除按钮 -->
                        <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            
            <!-- 分页功能 -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="3"
                :page-sizes="[5,10,15,20]"
                :page-size="6"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total" background>
            </el-pagination>
            
            
            
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formInquiry:{
                region:'',
                region1:'',
                region2:'',
                date:'',
                area:'',
                price:'',
                type:'',
                name:'',
                number:''
            },
            landslist:[],
            total:100,
            
            TableData:[
               {
                id:'wegufihui',
                lands_name:'南区11',
                lands_number:'222',
                lands_localtion:'333',
                lands_area:'44411',
                lands_price:'555',
                lands_type:'666',
                lands_getType:'777',
                lands_time:'2020-1-1',
                lands_input:'0'
               },
               {
                id:'wejgufu',
                lands_name:'111',
                lands_number:'222',
                lands_localtion:'333',
                lands_area:'444',
                lands_price:'555',
                lands_type:'666',
                lands_getType:'777',
                lands_time:'2020-1-1', 
                lands_input:'1'
               }
           ],
           
        }
    },
    created(){
        this.getLandsList()
    },
    methods: {
        // 提交
        onSubmit(){
            // console.log(this.formInline);
        },
        // 重置表单
        resetForm(){
            this.$refs.landInquiryRefs.resetFields()
        },
        // 获取表单数据
        getLandsList(){
            // console.log(this.TableData);
            this.landslist = this.TableData
        },
        
        //  按钮操作  导入 导出 删除 筛查
        landsImport(){},
        landsExport(){},
        landsDelete(){},
        landsScreen(){},
        
         // 表单编辑
        showDetails(row){
            this.$router.push(`landsDetails/${row.id}`)
        },
        // 分页功能方法
        handleSizeChange(){},
        handleCurrentChange(){}
        
       
    },
}
</script>
<style scoped>
   
</style>
