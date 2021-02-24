<template>
    <div>
        <!-- <h1>土地基本信息录入</h1> -->
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>土地</el-breadcrumb-item>
        <el-breadcrumb-item>基本信息录入</el-breadcrumb-item>
        </el-breadcrumb>
        
        <!-- 信息录入主体 -->
        <el-card>
           
            <el-row>
                <!-- 左半部分表单 -->
                <el-col :span="12">
                    <div>
                        <el-form ref="landFormRef" :rules="landFormRules" :model="form" label-width="200px">
                            <h3>基本信息</h3>
                            <el-form-item label="土地名称" prop="landName">
                                <el-input  v-model="form.landName" style="width:60%" placeholder="请输入土地名称"></el-input>
                            </el-form-item>
                            <el-form-item label="土地证号" prop="landNumber">
                                <el-input  v-model="form.landNumber" style="width:60%" placeholder="请输入土地证号"></el-input>
                            </el-form-item>
                            <el-form-item label="土地性质">
                                <el-select placeholder="请选择土地性质" style="width:60%" v-model="form.region">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="土地面积" prop="landArea">
                                <el-input  v-model="form.landArea" style="width:60%" placeholder="请输入土地面积"></el-input>
                            </el-form-item>
                            <el-form-item label="土地价值" prop="landPrice">
                                <el-input  v-model="form.landPrice" style="width:60%" placeholder="请输入土地价值"></el-input>
                            </el-form-item>
                            <el-form-item label="获得方式" prop="type">
                                <el-select placeholder="请选择获得方式" style="width:60%" v-model="form.type">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="获得时间" prop="date">
                                <el-date-picker type="date" placeholder="选择日期"  style="width: 60%;" v-model="form.date"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="土地位置" prop="landLocation">
                                <el-cascader style="width:60%" v-model="form.landLocation" :options="landList" ></el-cascader>
                            </el-form-item>
                            
                            
                            <el-form-item>
                                <el-button type="primary" @click="submit">录入</el-button>
                                <el-button type="info" @click="resetLandForm">重置</el-button> 
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                
                <!-- 右半部分表单 -->
                <el-col :span="12">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                
            </el-row>
            
            <div>
            </div>
         
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 表单
            form:{
                landName:'',
                landNumber:'',
                landArea:'',
                landPrice:'',
                region:'',
                date:'',
                type:'',
                landLocation:'',
            },
            // 级联选择器的数据
            landList:[],
            // 表单验证规则
            landFormRules:{
                landName:[
                    {required:true,message:"请输入土地名称",trigger:"blur"} 
                ],
                landNumber:[
                    {required: true, message:'请输入土地证号', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        // 重置表单
        resetLandForm(){
            // 表单的引用对象 ref="landFormRef"  this指向这个实例对象
            // console.log(this);
            this.$refs.landFormRef.resetFields();
        },
        // 提交表单信息
        submit(){
            console.log(this.form);
        }
    },
}
</script>
<style scoped>

</style>
