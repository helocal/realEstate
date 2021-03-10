<template>
    <div>
        <!-- <h1>维修管理</h1> -->
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>报告厅管理</el-breadcrumb-item>
            <el-breadcrumb-item>维修申请管理</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-card>
            <el-form ref="form"  :model="form" label-width="40px" size="mini">
                <el-col :span="3">
                    <el-form-item label="校区">
                        <el-select v-model="form.school" placeholder="">
                            <el-option label="北区" value="北区" ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col> 
              <el-col :span="3">
                    <el-form-item label="楼栋" >
                        <el-select v-model="form.floor" placeholder="">
                            <el-option label="宅1栋" value="宅1栋" ></el-option>
                        </el-select>
                    </el-form-item>
              </el-col>
              <el-col :span="3">
                    <el-form-item label="楼层" >
                        <el-select v-model="form.school" placeholder="">
                            <el-option label="1F" value="1F" ></el-option>
                        </el-select>
                    </el-form-item>
              </el-col>
              <el-col :span="3">
                    <el-form-item label="户型" >
                        <el-select v-model="form.school" placeholder="">
                            <el-option label="复式" value="复式" ></el-option>
                        </el-select>
                    </el-form-item>
              </el-col>
              
              <el-col :span="3" :offset="2">
                    <el-form-item>
                        <el-input type="text" placeholder="房间号" v-model="form.roomNumber"></el-input>
                    </el-form-item>
              </el-col>
              <el-button type="primary" size="mini" @click="searchRoom">提交</el-button>
            </el-form>
        </el-card>
         <div class="features"></div>
        <!-- 数据展示 -->
        <el-card>
            <el-table :data="data" style="width: 100%">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="room" label="房间"></el-table-column>
                <el-table-column prop="people" label="报修人"></el-table-column>
                <el-table-column prop="number" label="保修单号"></el-table-column>
                <el-table-column prop="because" label="原因"></el-table-column>
                <el-table-column prop="tel" label="报修人电话"></el-table-column>
                <el-table-column prop="data" label="时间"></el-table-column>
                <el-table-column prop="caozuo" label="操作">
                    <template>
                        <el-button size="mini" type="warning">立即处理</el-button>
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
            total:132,
            form:{
                school:'',
                floor:'',
                roomNumber:''
            },
            data:{
                room:'',
                people:'',
                number:'',
                because:'',
                tel:'',
                data:'',
            },
            TableData:[
               {
                room:'1F-106',
                people:'xxxx',
                number:'1000001',
                because:'故障报修',
                tel:'11111111',
                data:'2020-1-1',
               },
               {
                room:'1F-106',
                people:'xxxx',
                number:'1000001',
                because:'故障报修',
                tel:'11111111',
                data:'2020-1-1',
               }
            ],
        }
    },

    
    created(){
        this.getRoomList();
    },
    
    methods: {
        getRoomList(){
          this.data = this.TableData;
        },
        searchRoom(){
            console.log(this.form);
        },
        // 分页
        handleSizeChange(){},
        handleCurrentChange(){}
    },
}
</script>
<style scoped>
    .el-button{
        margin-left: 10px;
    }
    .el-form .el-form-item:nth-child(-n+4){
        margin-left: 15px;
    }
</style>
