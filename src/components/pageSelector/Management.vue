<template>
<!-- 管理员展示界面 -->
       
        <el-container>
            <el-header>
                <img src="../../assets/img/login/schoolLogos.png" alt="">
                <ul>
                    <li>
                        <router-link to="/welcome">统计报表</router-link>
                    </li>
                    <li>
                        <router-link to="/welcome">房屋折旧</router-link>
                    </li>
                    <li>
                        <router-link to="/welcome">系统对接</router-link>
                    </li>
                    <li>
                        <router-link to="/welcome">系统管理维护</router-link>
                    </li>
                    <li>
                        <el-dropdown>
                            <i class="el-icon-caret-bottom" style="margin-right: 5px;color:white;"></i>
                            <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span>王小虎</span>
                    </li>
                    <li>
                        <el-button type="danger" @click="loginOut" size="mini" icon="el-icon-switch-button">退出</el-button>\
                    </li>
                </ul>
                 
            </el-header>
            <el-container>
                <el-aside width="225px" >
                    <ul>
                        <!-- 综合查询部分 -->
                        <li>
                            <h3>综合查询</h3>
                        </li>
                        
                        <!-- 土地管理部分 -->
                        <li>
                            <h3>土地</h3>
                            <router-link to="/management/land/landInformation">基本信息录入</router-link>
                            <router-link to="/management/land/landInquiry">信息查询</router-link>
                            <router-link to="/management/land/landSummary">信息汇总</router-link>
                        </li>
                        
                        <!-- 公用房管理部分 -->
                        <li>
                            <h3>公用房管理</h3>
                            <router-link to="/management/commonRoom/roomsInformation">基本信息录入</router-link>
                            <router-link to="/management/commonRoom/roomInquire">信息查询</router-link>
                            <router-link to="/management/commonRoom/application">公用房申请管理</router-link>
                            <router-link to="/management/commonRoom/roomSummary">信息汇总</router-link>
                        </li>
                        
                        <!-- 住房管理部分 -->
                        <li>
                            <h3>住房管理</h3>
                            <router-link to="/management/house/houseInformation">基本信息录入</router-link>
                            <router-link to="/management/house/houseInformation">信息查询</router-link>
                            <router-link to="/management/house/houseInformation">周转房申请管理</router-link>
                            <router-link to="/management/house/residentialHouse">居民用房管理</router-link>
                            <router-link to="/management/house/houseInformation">信息汇总</router-link>
                        </li>
                        
                        <!-- 经营性用房管理 -->
                        <li>
                            <h3>经营性用房管理</h3>
                            <router-link to="/management/IntegrQuery">房屋信息维护</router-link>
                            <router-link to="/management/IntegrQuery">合同管理</router-link>
                            <router-link to="/management/IntegrQuery">资料档案管理</router-link>
                            <router-link to="/management/IntegrQuery">租金管理</router-link>
                            <router-link to="/management/IntegrQuery">信息汇总</router-link>
                        </li>
                        
                        <!-- 报告厅管理 -->
                        <li>
                            <h3>报告厅管理</h3>
                            <router-link to="/management/IntegrQuery">基本信息录入</router-link>
                            <router-link to="/management/lectureHall/hallApplication">报告厅申请管理</router-link>
                            <router-link to="/management/lectureHall/service">维修申请管理</router-link>
                        </li>
                        
                    </ul>
                </el-aside>
                
                <el-main>
                    <!-- 路由占位符 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        // 退出登录
        loginOut(){
            window.sessionStorage.clear('token')
            this.$router.push('/login')
        }
    },
    
}
</script>
<style scoped>

    .el-container{
        height: 150%;
    }
    .el-header{
        position: relative;
        height: 10%;
        background-color: #03B295;
    }
    .el-header img{
        position: absolute;
        left: 100px;
        top: 0;
        height: 100%;
    }
    .el-header ul{
        position: absolute;
        top: 20px;
        right: 100px;
    }
    .el-header ul li{
        color: #fff;
        display: inline-block;
        list-style: none;
        margin-right: 30px;
    }
    .el-header ul li a{
        color: #fff;
        text-decoration: none;
    }
    .el-header ul li a:hover{
        color: #F56C6C;
    }
    .el-header .el-button{
        position: absolute;
        padding: 10px 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .el-main{
        background-color: #F9F8F8;
    }
    .el-aside ul{
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .el-aside ul li{
        list-style: none;
        border-bottom: 1px #E5E5E5 solid;
        margin: 10px;
    }
    .el-aside ul li h3{
        border-left: 5px solid #00b38a;
        padding-left: 20px;
        font-size: 18px;
        font-family: KaiTi;
    }
    .el-aside ul li a{
        text-decoration: none;  
        display: inline-block;
        padding: 5px 5px;
        margin-bottom: 5px;
        letter-spacing: -1px;
        color: #5a5959;
        font-size: 15px;
        font-family: KaiTi;
    }
    .el-aside ul li a:hover{
        background-color: #b3b7c1;
        border-radius: 5px;
    }
    
    
</style>
