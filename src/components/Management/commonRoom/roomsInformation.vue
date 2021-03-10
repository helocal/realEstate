<template>
    <div>
        <!-- <h3>公用房基本信息录入</h3> -->
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>公用房</el-breadcrumb-item>
            <el-breadcrumb-item>基本信息录入</el-breadcrumb-item>
        </el-breadcrumb>
        
        <!-- 卡片视图 -->
        <el-card>
            <el-tabs v-model="activeName" :stretch="true">
                <el-tab-pane label="校区信息录入" name="1">
                    <el-form ref="form" :model="schoolForm" label-width="80px">
                        <el-row :gutter="30">
                            <h5>基本信息</h5>
                            <el-col :span="12">
                                <el-form-item label="校区名称" prop="name">
                                    <el-input v-model="schoolForm.name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="校区编号">
                                    <el-input v-model="schoolForm.number"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="性质">
                                    <el-select v-model="schoolForm.region" placeholder="请选择房间性质"  style="width:100%">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="占地面积">
                                    <el-input v-model="schoolForm.area"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="建筑面积">
                                    <el-input v-model="schoolForm.buildArea"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="位置">
                                    <el-select v-model="schoolForm.location" placeholder="请选择校区位置"  style="width:100%">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            
                            <h5>添加本校区楼栋信息</h5>
                            
                            
                            <h5>土地地籍图纸、权属证书、照片</h5>
                            <el-col :span="11" :offset="1">
                                <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传图片</el-button>
                                    <div slot="tip" class="el-upload__tip">支持jpeg、png格式上传</div>
                                </el-upload>
                            </el-col>
                            <el-col :span="11" :offset="1">
                                <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传文件</el-button>
                                    <div slot="tip" class="el-upload__tip">支持word、pdf格式上传</div>
                                </el-upload>
                            </el-col>
                            
                            
                            <el-col :span="4" :offset="10">
                                <el-button type="info">重置</el-button>
                                <el-button type="primary" @click="schoolFormSubmit">导入</el-button>
                            </el-col>
                        </el-row>
                       
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="楼栋信息录入" name="2">
                    <el-form ref="form" :model="buildingForm" label-width="80px">
                        <el-row :gutter="30">
                            <h5>基本信息</h5>
                            <el-col :span="12">
                                <el-form-item label="校区名称" prop="name">
                                    <el-select v-model="buildingForm.schoolName" style="width:100%">
                                        <el-option label="华东交通大学南区" value="shanghai"></el-option>
                                        <el-option label="华东交通大学北区" value="华东交通大学北区"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="楼栋名称">
                                    <el-input v-model="buildingForm.buildName"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="校区编号">
                                    <el-input v-model="buildingForm.schoolNumber"></el-input>
                                </el-form-item>
                            </el-col>
                            
                            <el-col :span="12">
                                <el-form-item label="性质">
                                    <el-select v-model="buildingForm.region" placeholder="请选择楼栋性质"  style="width:100%">
                                        <el-option label="教学" value="shanghai"></el-option>
                                        <el-option label="学生宿舍" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="建筑面积">
                                    <el-input v-model="buildingForm.buildArea"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="使用面积">
                                    <el-input v-model="buildingForm.useArea"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="价值">
                                    <el-input v-model="buildingForm.value"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="位置">
                                    <el-select v-model="buildingForm.location" placeholder="请选择楼栋位置"  style="width:100%">
                                        <el-option label="华东交通大学南区" value="shanghai"></el-option>
                                        <el-option label="华东交通大学北区" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="单元数">
                                    <el-input v-model="buildingForm.unitsNmuber"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="楼层数">
                                    <el-input v-model="buildingForm.floorNumber"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="竣工日期">
                                     <el-date-picker type="date" placeholder="选择日期" v-model="buildingForm.completionDate" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            
                            <h5>添加本校区楼栋信息</h5>
                            
                            
                            <h5>土地地籍图纸、权属证书、照片</h5>
                            <el-col :span="11" :offset="1">
                                <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传图片</el-button>
                                    <div slot="tip" class="el-upload__tip">支持jpeg、png格式上传</div>
                                </el-upload>
                            </el-col>
                            <el-col :span="11" :offset="1">
                                <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传文件</el-button>
                                    <div slot="tip" class="el-upload__tip">支持word、pdf格式上传</div>
                                </el-upload>
                            </el-col>
                            
                            
                            <el-col :span="4" :offset="10">
                                <el-button type="info">重置</el-button>
                                <el-button type="primary">录入</el-button>
                            </el-col>
                        </el-row>
                       
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="楼层信息录入" name="3">
                    <el-form ref="form" :model="schoolForm" label-width="80px">
                        <el-row :gutter="30">
                            <h5>基本信息</h5>
                            <el-col :span="12">
                                <el-form-item label="校区名称" prop="name">
                                    <el-input v-model="schoolForm.name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="校区编号">
                                    <el-input v-model="schoolForm.number"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="性质">
                                    <el-select v-model="schoolForm.region" placeholder="请选择房间性质"  style="width:100%">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="占地面积">
                                    <el-input v-model="schoolForm.name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="建筑面积">
                                    <el-input v-model="schoolForm.number"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="位置">
                                    <el-select v-model="schoolForm.location" placeholder="请选择房间位置"  style="width:100%">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            
                            <h5>添加本校区楼栋信息</h5>
                            
                            
                            <h5>土地地籍图纸、权属证书、照片</h5>
                            <el-col :span="11" :offset="1">
                                <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传图片</el-button>
                                    <div slot="tip" class="el-upload__tip">支持jpeg、png格式上传</div>
                                </el-upload>
                            </el-col>
                            <el-col :span="11" :offset="1">
                                <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传文件</el-button>
                                    <div slot="tip" class="el-upload__tip">支持word、pdf格式上传</div>
                                </el-upload>
                            </el-col>
                            
                            
                            <el-col :span="4" :offset="10">
                                <el-button type="info">重置</el-button>
                                <el-button type="primary">导入</el-button>
                            </el-col>
                        </el-row>
                       
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="房间信息录入" name="4">
                    <el-form ref="form" :model="schoolForm" label-width="80px">
                        <el-row :gutter="30">
                            <h5>基本信息</h5>
                            <el-col :span="12">
                                <el-form-item label="校区名称" prop="name">
                                    <el-input v-model="schoolForm.name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="校区编号">
                                    <el-input v-model="schoolForm.number"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="性质">
                                    <el-select v-model="schoolForm.region" placeholder="请选择房间性质"  style="width:100%">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="占地面积">
                                    <el-input v-model="schoolForm.name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="建筑面积">
                                    <el-input v-model="schoolForm.number"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="位置">
                                    <el-select v-model="schoolForm.location" placeholder="请选择房间位置"  style="width:100%">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            
                            <h5>添加本校区楼栋信息</h5>
                            
                            
                            <h5>土地地籍图纸、权属证书、照片</h5>
                            <el-col :span="11" :offset="1">
                                <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传图片</el-button>
                                    <div slot="tip" class="el-upload__tip">支持jpeg、png格式上传</div>
                                </el-upload>
                            </el-col>
                            <el-col :span="11" :offset="1">
                                <el-upload list-type="picture" action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传文件</el-button>
                                    <div slot="tip" class="el-upload__tip">支持word、pdf格式上传</div>
                                </el-upload>
                            </el-col>
                            
                            
                            <el-col :span="4" :offset="10">
                                <el-button type="info">重置</el-button>
                                <el-button type="primary">导入</el-button>
                            </el-col>
                        </el-row>
                       
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName:'1',
            schoolForm:{
                name:'',
                number:'',
                region:'',
                location:'',
                Area:'',
                buildArea:''
            },
            buildingForm:{
                schoolName:'',
                buildName:'',
                schoolNumber:'',
                region:'',
                useArea:'',
                buildArea:'',
                
                location:'',
                value:'',
                // 单元数
                unitsNmuber:'',
                // 楼层数
                floorNumber:'',
                // 竣工日期
                completionDate:''
            }
        }
    },
    methods: {
        schoolFormSubmit(){
            console.log(this.schoolForm);
        }
    },
}
</script>
<style scoped>
    .el-card .el-tabs .el-tab-pane{
        width: 100%;
    }
    .el-card h5{
        margin:30px 30px;
        color:#4994fb;
    }
    .el-card .el-form .el-row .el-col:last-child{
        margin-top: 100px;
    }
</style>
