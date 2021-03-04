<template>
    <div>
        <!-- <h1>公用房信息查询</h1> -->
         <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>公用房</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-card>
            <el-form :model="roomForm">
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
                        <el-form-item label="单元">
                            <el-select v-model="roomForm.unit">
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
                        <el-form-item label="房间号">
                            <el-select v-model="roomForm.roomNumber">
                                <el-option label="北区" value="北区"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="面积">
                            <el-select v-model="roomForm.area">
                                <el-option label="北区" value="北区"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="价值">
                            <el-select v-model="roomForm.value">
                                <el-option label="北区" value="北区"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="竣工日期">
                            <el-select v-model="roomForm.completionDate">
                                <el-option label="北区" value="北区"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="录入状态">
                            <el-select v-model="roomForm.inputType">
                                <el-option label="北区" value="北区"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <el-input v-model="roomForm.search" placeholder="请输入校区楼栋名称"></el-input>
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
        <!-- 功能区域 -->
        <div class="features">
            <div class="btn">
                <el-button @click="roomsImport" icon="el-icon-download" size="medium" plain>导入</el-button>
                <el-button @click="roomsExport" icon="el-icon-upload2" size="medium" plain>导出</el-button>
                <el-button @click="roomsDelete" icon="el-icon-delete" size="medium" plain>删除</el-button>
                <el-button @click="roomsScreen" icon="el-icon-search" size="medium" plain>筛查</el-button>
                <el-tag type="info">总数: {{this.total}} 条</el-tag>
            </div>
        </div>
        <!-- 数据展示界面 -->
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
            roomForm:{
                schoolName:'',
                build:'',
                unit:'',
                floor:'',
                roomNumber:'',
                area:'',
                value:'',
                completionDate:'',
                inputType:'',
                search:'' 
            },
            roomslist:[],
                // 查询得到的数据条数
            total:104,
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
           ],
        }
    },
    created(){
        this.getRoomsList()
    },
    methods: {
        
        // 获取表单数据
        getRoomsList(){
            // console.log(this.TableData);
            this.roomslist = this.TableData
        },
        search(){
            console.log(this.roomForm);
        },
        
        // 每页展示变化
        handleSizeChange(){},        
        // 页码变化
        handleCurrentChange(){},
        //  按钮操作  导入 导出 删除 筛查
        roomsImport(){},
        roomsExport(){},
        roomsDelete(){},
        roomsScreen(){},
        
        // 查看房间详情
        showDetails(row){
            // console.log(row._id);
            this.$router.push(`roomsDetails/${row._id}`)
        },
    },
}
</script>
<style scoped>
    
</style>
