<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/management/land/landInquiry'}">土地查询</el-breadcrumb-item>
            <el-breadcrumb-item>土地详情</el-breadcrumb-item>
        </el-breadcrumb>  
        
        <!-- 卡片视图 -->
        
        <el-card>
            <div class="landDetailsTop">
                <div class="landImg">
                    <el-image style="width: 180px; height: 180px" :src="url" fit="fill"></el-image>
                </div>
                <div class="landDetails">
                    <div class="top">
                        <ul>
                            <li>
                                <p>[土地]{{this.landDetails.landName}}</p>
                            </li>
                            <li>
                                <p>{{this.landDetails.landNumber}}</p>
                            </li>
                            <li>
                                <el-button plain icon="el-icon-edit" size="mini">修改</el-button>
                            </li>
                        </ul>
                    </div>
                    <!-- tags -->
                    <div class="middle">
                        <el-tag type="success">标签一</el-tag>
                        <el-tag type="success">标签一</el-tag>
                        <el-tag type="success">标签一</el-tag>
                    </div>
                    <div class="footer">             
                        <el-row>
                            <el-col :span="2">
                                <div class="price">
                                    <p>{{this.landDetails.vaule}}万</p>
                                    <span>价值</span>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="landAries">
                                    <p>{{this.landDetails.landArea}}㎡</p>
                                    <span>土地面积</span>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="bulidAries">
                                    <p>{{this.landDetails.bulidAries}}㎡</p>
                                    <span>建筑面积</span>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="type">
                                    <p>{{this.landDetails.type}}</p>
                                    <span>性质</span>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="getRoad">
                                    <p>{{this.landDetails.getRoad}}</p>
                                    <span>获得方式</span>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="getDate">
                                    <p>{{this.landDetails.getData}}</p>
                                    <span>获得日期</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
            <div class="landImages">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <el-image style="height:200px ;width:600px" :src="url" fit="contain"></el-image>
                    </el-carousel-item>
                </el-carousel>
                <div>
                    <p> <i class="el-icon-document-copy"></i> 共{{imgTotal}}张图片(土地、附着物、地籍图纸、权属证书、建筑物)</p>
                </div>
            </div>
            
            <div class="landFooter">
                <el-row>
                    <el-col :span="6">
                            <p>坐落位置</p>
                            <span>{{this.landDetails.location}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>地上附着物</p>
                            <span>{{this.landDetails.aboveGround}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>地下设施</p>
                            <span>{{this.landDetails.unserGround}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>其他</p>
                            <span>{{this.landDetails.other}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>相关事件</p>
                            <span>{{this.landDetails.above}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>相关图纸</p>
                            <span>{{this.landDetails.drawing}}</span>
                    </el-col>
                    <el-col :span="6">
                        <p>备注</p>
                        <span>{{this.landDetails.remarks}}</span>
                    </el-col>
                </el-row>
            </div>
            
        </el-card>
    </div>
</template>
<script>
export default {
    props:{
        id:{}
    },
    data() {
        return {
            // 图片地址
            url:'',
            imgTotal:12,
            landDetails:{
                landName:'北区001',
                landNumber:'00001号',
                vaule:'1200',
                landArea:'5000',
                bulidAries:'2000',
                type:'公用',
                getRoad:'划分',
                getData:'2020-11-11',
                
                location:'双港东大街华东交通大学',
                aboveGround:'树、房子、篮球场',
                unserGround:'水管',
                other:'其他',
                // 相关事件
                above:'土地证等',
                drawing:'建筑图纸等',
                remarks:'某某某'
            }
        }
        
    },
}
</script>
<style scoped>
</style>
