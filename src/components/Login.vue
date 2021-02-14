<template>
    <el-container style="height:100%" direction="vertical" >
        <el-header>
            <img src="../assets/img/login/schoolLogos.png" alt="">
            <div class="line"></div>
            <div class="logo_right">
                <span>房产管理系统</span>
            </div>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="12">
                    <div class="location">
                        <img src="../assets/img/login/loginDitu.png" alt="华东交通大学">
                        <p>新的起点，从房产系统开始</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="login_box">
                        <el-form ref="form" :model="loginForm" class="loginForm">
                            <span>用户登录</span>
                            <el-form-item class="marginTopMini" prop="username">
                                <el-input placeholder="请输入用户名"  v-model="loginForm.username" prefix-icon="el-icon-user" ></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input placeholder="请输入密码" type="password"  v-model="loginForm.password"  prefix-icon="el-icon-s-claim" ></el-input>
                            </el-form-item>
                            <el-radio>记住密码</el-radio>
                            <el-form-item>
                                <el-button type="primary" class="btn" @click="login">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </el-main>
        <el-footer>
            <div id="footer">
                <ul>
                    <li>华东交通大学版权所有CopyRight 2021.All Right Reserved</li>
                    <li>地址：江西省南昌市经济开发区双港东大街808号</li>
                </ul>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data(){
        return{
            loginForm:{
                username:'admin',     
                password:'admin'
            },
            token:'12345WAGSGNKBBBVSB'
        }
    },
    // 生命周期函数
    created(){
        
    },
    methods:{
        login(){
            if(this.loginForm.username && this.loginForm.password !==''){
                
                // 判断用户是否登录
                window.sessionStorage.setItem('token',this.token);
                this.$message.success('登陆成功！')
                this.$router.push('/home')
            }
            else{
                this.$message.error('登录失败！')
            }
        }
    }
}
</script>

<style scoped>
    .el-container{
        background-color: #CAE2EA;
        padding: 0px;
        margin: 0px;
    }
    /* login顶部以及底部共同样式 */
    .el-header,.el-footer{
        position: relative;
        height: 10%;
    }
    /* login的header的样式 */
    .el-header img{
        position: absolute;
        left: 21%;
        top: 50%;
        transform: translateY(-50%);
        height: 80%;
    }
    .el-header .line{ 
        position: absolute;
        left: 37%;
        top: 50%;
        transform: translateY(-50%);
        width: 0px;    
        height: 50%;
        border-right: 2px solid#20668b;   
    }
    .el-header .logo_right{
        position: absolute;
        left: 39%;
        /* width: 20%; */
        height: 100%; 
        display:table;
    }
    .el-header .logo_right span{
        font-family: STXingkai;
        font-size: 25px;
        color: #20668b;
        display:table-cell;
        vertical-align: middle;
    }
    /* login中间页面 */
    .el-main{
       height: 80%;
       background: url('../assets/img/login/loginBack.png') no-repeat 100% 100%;
    }
    .el-main .location img{
        float: right;
        margin: 4% 20% 0 0;
        height: 400px;
        opacity: 0.6;
    }
    .el-main .location p{  
        font-family: STXingkai;
        font-size: 25px;
        color: #fefefe;
        opacity: 0.7;
        float: right;
        margin: 5% 12% 0 40%;
    }
    /* 登录框 */
    .login_box{
        width: 292px;
        height: 315px;
        border-radius: 10px;
        background-color: #ffffff;
        margin: 14% 34% 17% 14%;
    }
    .login_box .loginForm{
        padding-top: 14%;
    }
    .loginForm span{
        font-family: Microsoft YaHei;
        font-size: 18px;
        color: #0896d8;
        margin-left: 10%;
    }
    .loginForm  .el-input{
        width: 80%;
        margin-left:10%;
    }
    .login_box .el-radio{
        float: right;
        margin-right: 10%;
    }
    .loginForm .btn{
        width: 80%;
        margin: 5% 10% 0 10%;
    } 
    /* 底部栏 */
    #footer ul{
        padding: 0;
        margin: 0 ;
        text-align: center;
    }
    #footer ul li{
        font-size: 13px;
        list-style: none;
        margin-top: 5px;
        /* opacity: 0.7; */
	    color: #20668b;
	    font-family: Microsoft YaHei;
    }
</style>
