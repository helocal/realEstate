<template>
    <div>
        <!-- <h1>公用房申请管理</h1> -->
         <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>公用房</el-breadcrumb-item>
            <el-breadcrumb-item>公用房申请管理</el-breadcrumb-item>
        </el-breadcrumb>
        
        <!-- 查询模块 -->
        <el-card>
            <el-form :model="roomForm" label-width="100px">
                <el-row :gutter="5">
                    <el-col :span="6">
                        <el-form-item label="校区">
                            <el-select v-model="roomForm.schoolName">
                                <el-option label="北区" value="北区"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="楼栋">
                            <el-select v-model="roomForm.build">
                                <el-option label="北区" value="北区"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="楼层">
                            <el-select v-model="roomForm.floor">
                                <el-option label="北区" value="北区"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    
                    <el-col :span="6">
                        <el-form-item label="公用房名称">
                            <el-input v-model="roomForm.roomName"></el-input>
                        </el-form-item>
                    </el-col>
                    
                    <el-col :span="6">
                        <el-form-item label="处理状态">
                            <el-select v-model="roomForm.status">
                                <el-option label="已处理" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label=申请人>
                            <el-input v-model="roomForm.applicationName" placeholder="请输入申请人姓名"></el-input>
                        </el-form-item>
                    </el-col>
                    <!-- 按钮 -->
                    <el-col :span="4" :offset="1">
                        <el-button type="primary" @click="search">查询</el-button>
                        <el-button type="info">重置</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        
        <!-- 功能模块 -->
        <div class="features">
            <div class="btn">
                <el-button @click="roomsImport" icon="el-icon-download" size="medium" plain>导入</el-button>
                <el-button @click="roomsExport" icon="el-icon-upload2" size="medium" plain>导出</el-button>
                <el-button @click="roomsDelete" icon="el-icon-delete" size="medium" plain>删除</el-button>
                <el-button @click="roomsScreen" icon="el-icon-search" size="medium" plain>筛查</el-button>
                <el-button type="danger" size="mini">有{{this.maturityNumber}}个申请即将到期<i class="el-icon-search el-icon--right"></i></el-button>
                <el-tag type="info">总数: {{this.total}} 条</el-tag>
            </div>
        </div>
        
        <!--数据展示 -->
        <el-card>
            <el-table :data="roomslist" stripe :header-cell-style="{backgroundColor:'#f3f3f5'}">
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
                    <template slot-scope="">
                        
                        <!-- 同意按钮 -->
                        <el-button size="mini" type="success" icon="el-icon-check"></el-button>
                        <!-- 拒绝按钮 -->
                        <el-tooltip effect="dark" content="拒绝" placement="top" :enterable="false">
                            <el-button size="mini" type="warning" icon="el-icon-close"></el-button>
                        </el-tooltip>
                        <!-- 详情按钮 -->
                        <el-tooltip effect="dark" content="详情" placement="top" :enterable="false">
                            <el-button type="primary" icon="el-icon-search" size="mini"></el-button>
                        </el-tooltip>
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
            roomForm:{
               schoolName:'',
               build:'',
                floor:'',
                roomName:'',
                status:'',
                applicationName:''
            },
            total:123,
            maturityNumber:123,
            TableData:[
               {
                _id:'322253263568',
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
                _id:'14134237461274',
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
            ]
        }
    },
    created(){
        this.getApplicationsList()  
    },
    methods:{
        getApplicationsList(){
            this.roomslist = this.TableData
        },
        search(){
            console.log(this.roomForm);
        }
    }
}
</script>
<style scoped>
    
</style>
