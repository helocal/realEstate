<template>
    <div>
        <!-- <h1>房间详情</h1> -->
        
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/management' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/management/commonRoom/roomInquire'}">公用房查询</el-breadcrumb-item>
            <el-breadcrumb-item>公用房详情</el-breadcrumb-item>
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
                                <p>[房间]{{this.roomDetails.roomName}}</p>
                            </li>
                            <li>
                                <p>{{this.roomDetails.roomNumber}}</p>
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
                                    <p>{{this.roomDetails.vaule}}万</p>
                                    <span>价值</span>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="landAries">
                                    <p>{{this.roomDetails.roomArea}}㎡</p>
                                    <span>建筑面积</span>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="bulidAries">
                                    <p>{{this.roomDetails.roomType}}㎡</p>
                                    <span>类型</span>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="type">
                                    <p>{{this.roomDetails.position}}</p>
                                    <span>朝向</span>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="getRoad">
                                    <p>{{this.roomDetails.unitType}}</p>
                                    <span>户型</span>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="getDate">
                                    <p>{{this.roomDetails.floor}}</p>
                                    <span>楼层</span>
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
                            <span>{{this.roomDetails.location}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>设备</p>
                            <span>{{this.roomDetails.equipment}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>其他</p>
                            <span>{{this.roomDetails.other}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>相关图纸</p>
                            <span>{{this.roomDetails.drawing}}</span>
                    </el-col>
                    <el-col :span="6">
                            <p>备注</p>
                            <span>{{this.roomDetails.remarks}}</span>
                    </el-col>
                </el-row>
            </div>
            
        </el-card>
    </div>
</template>
<script>
export default {
    props(){
      _id:{}  
    },
    data() {
        return {
            // 图片地址
            url:'',
            imgTotal:12,
            roomDetails:{
                roomName:'301',
                roomNumber:'0001',
                vaule:'5000',
                roomArea:'2000',
                roomType:'教室',
                position:'坐北朝南',
                unitType:'平式',
                floor:'3层',
                
                location:'双港东大街华东交通大学',
                equipment:['空调','洗衣机'],
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
