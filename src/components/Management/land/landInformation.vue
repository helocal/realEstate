<template>
    <div>
        <!-- <h1>土地基本信息录入</h1> -->
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>土地</el-breadcrumb-item>
            <el-breadcrumb-item>基本信息录入</el-breadcrumb-item>
        </el-breadcrumb>
        
        <!-- 进度条 -->
         <!-- 卡片视图 -->
        <el-card>
            <!-- 提示区域 -->
            <el-alert title="添加土地基本信息" type="info" center show-icon :closable="false"></el-alert>
            <!-- 步骤条   将像数字的字符串转换成数值-->
            <el-steps :active="activeIndex -0" finish-status="success" align-center>
                <el-step title="基本信息"></el-step>
                <el-step title="附件信息"></el-step>
                <el-step title="其他信息"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
            
            
            <!-- 表单主题 -->
            <el-form :model="form" label-position="top" ref="landFormRefs" :rules="landFormRules">
                <el-tabs v-model="activeIndex" :tab-position="'left'" @tab-click="tabClicked" :before-leave="beforeTabLeave">
                <!-- 基本信息 -->
                    <el-tab-pane label="基本信息" name="0">
                        <el-form-item label="土地名称" prop="landName">
                            <el-input  v-model="form.landName" style="width:60%" placeholder="请输入土地名称"></el-input>
                        </el-form-item>
                        <el-form-item label="土地证号" prop="landNumber">
                            <el-input  v-model="form.landNumber" style="width:60%" placeholder="请输入土地证号"></el-input>
                        </el-form-item>
                        <el-form-item label="土地性质">
                            <el-select placeholder="请选择土地性质" style="width:60%" v-model="form.region">
                                <el-option label="农用" value="农用"></el-option>
                                <el-option label="工用" value="工用"></el-option>
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
                                    <el-option label="捐赠" value="捐赠"></el-option>
                                    <el-option label="购买" value="购买"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item label="获得时间" prop="date">
                                <el-date-picker type="date" placeholder="选择日期"  style="width: 60%;" v-model="form.date"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="土地位置" prop="landLocation">
                                <el-cascader style="width:60%" v-model="form.landLocation" :options="landList" ></el-cascader>
                        </el-form-item>
                        
                        <el-form-item>
                            <el-button type="primary" @click="nextSteps">下一步</el-button>
                            <el-button type="info" @click="resetBaseLandForm">重置</el-button>
                        </el-form-item>
                    </el-tab-pane>
                    
                    <el-tab-pane label="附件信息" name="1">
                        
                    </el-tab-pane>
                    <el-tab-pane label="其他信息" name="2">
                        
                    </el-tab-pane>
                    
                </el-tabs>
            </el-form>
            
        </el-card>
        
        <!-- 信息录入主体 -->
        <!-- <el-card>
           
            <el-row>
                左半部分表单
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
                
                右半部分表单
                <el-col :span="12">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                
            </el-row>
            
            <div>
            </div>
         
        </el-card> -->
        
        
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
            },
            // 进度条激活
            activeIndex:'0',
        }
    },
    methods: {
        // 切换tabs
        tabClicked(){
            // if(this.form.landName!==''&&this.form.landNumber!==''){
            //     this.activeIndex++;
            // }else{
            //     this.$message.error('请输入土地名称和土地证号！')
            // }
        },
        // 重置表单
        resetBaseLandForm(){
            // 表单的引用对象 ref="landFormRef"  this指向这个实例对象
            // console.log(this);
            this.$refs.landFormRefs.resetFields();
        },
        
        beforeTabLeave(activeName,oldActiveName){
            if(oldActiveName === '0' && this.form.landName ===''&&this.form.landNumber ===''){
                this.$message.error('请输入土地名称和土地证号！')
                return false
            }
        },
        // 进行下一步数据提交
        nextSteps(){
            if(this.form.landName!==''&&this.form.landNumber!==''){
                this.activeIndex++;
            }else{
                this.$message.error('请输入土地名称和土地证号！')
            }
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
