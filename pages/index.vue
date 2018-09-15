<style lang="less" scoped>
  .page-login {
    min-height: 800px;
    background: #352959 url('../assets/images/base-bgi.png') no-repeat 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*justify-content: center;*/
    padding-top: 100px;
    position: relative;
    box-sizing: border-box;
    .emailValid {
      padding-bottom: 10px;
    }
    .regist-wrap {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      .forget-pwd {
        color: #ff001d
      }
      .res-item-self {
        color: #2b89e1
      }
      .regist-item:not(:last-child) {
        margin-right: 10px;
      }
    }
    .bottom-instructions {
      opacity: 0.8;
      position: absolute;
      bottom: 51px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .group-top {
        li:not(:last-child) {
          .com-mlr(@pl:0, @pr:38px, @pb:0, @pt:0);
        }
      }
      li {
        list-style-type: none;
        display: inline-block;
      }
    }
    .titele-content {
      font-family: PingFangSC-Medium;
      font-size: 36px;
      color: #ffffff;
      letter-spacing: 0;
      top: 160px;
      text-align: center;
      box-sizing: border-box;
    }
    .content {
      // position: absolute;
      border-radius: 4px;
      margin-top: 20px;
      // top: 50%;
      // left: 50%;
      width: 472px;
      /*height: 429px;*/
      // /*transform: translate(-50%, -50%);*/
      // margin-top: -200px;
      // margin-left: -15%;
      background-color: @backGroundColor;

      // padding: 40px;
      /*
      h3 {
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        margin-bottom: 20px;
        text-align: center;
      }
      */
      .longin-title {
        font-family: PingFangSC-Medium;
        font-size: @fontSize + 10;
        color: #7352bf;
        .com-plr();
      }
      .news {
        width: 70px;
        margin-top: 5px;
        font-size: 24px;
        padding-right: 10px;
        text-align: right;
      }
      .input-login {
        .com-mlr(@pl:61px, @pr:61px,@pt:0,@pb:0);
        .auto-login {
          .com-mlr(@pl:0, @pr:0, @pb:32px, @pt:12px);
          font-family: PingFangSC-Regular;
          font-size: @fontSize;
        }
        .btn-login {
          padding: 20px 0 40px;
          display: flex;
          justify-content: center;
        }
      }
    }
    // 混合函数
    .com-mlr(@pl: 61px,@pr:0,@pb:32px, @pt: 64px) {
      margin: @pt @pr @pb @pl;
    }
    .com-plr(@pl: 61px,@pr:0,@pb:32px, @pt: 64px) {
      padding: @pt @pr @pb @pl
    }
  }
</style>
<style lang="less">
  .input-login {
    .el-form-item {
      padding: 20px 0;
      margin-bottom: 0;
    }
    .el-button--primary {
      width: 400px;
    }
  }

</style>
<template>
  <div class="page-login">
    <div class="login">
      <p class='titele-content'>测试</p>
      <div class="content">
        <!-- <p>KYE绩效管理平台</p> -->
        <div class="input-login">
          <el-form :model="form"
                   label-position="top"
                   :rules="rules"
                   label-width="70px"
                   ref="loginForm">
            <el-form-item :label="测试" prop="mobileNumber">
              <el-input v-model="form.mobileNumber"
                        :placeholder="测试"
                        clearable
                        :maxlength="20">
                <i slot="prefix"
                   class='iconfont icon-zhanghu'>
                </i>
              </el-input>
            </el-form-item>
            <el-form-item :label="测试" prop="loginPword">
              <el-input v-model="form.loginPword"
                        type="password"
                        :placeholder="测试"
                        @keydown.enter.native="handleLogin"
                        clearable
                        :maxlength="20">
                <i slot="prefix"
                   class='iconfont icon-mima'>
                </i>
              </el-input>
            </el-form-item>
            <div class="regist-wrap">
              <div class="regist-item res-item-self">测试</div>
              <div class="regist-item forget-pwd">测试</div>
              <div class="res-item-self regist-item">|</div>
              <div class="regist-item forget-pwd">测试</div>
            </div>
            <div class='btn-login'>
              <el-button type="primary" @click="handleLogin">测试</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <TipDialog :diaShow="diaShow"
               :diaTitle="diaTitle"
               :showDiaClass="showDiaClass"
               @confirmSendCode="sendCode"
               @close="diaClose">
      <div slot="diaBody">
        <div class="emailValid">测试</div>
        <el-input v-model="verificationCode">
          <template slot="append">
            <span>|</span>
            <span class="pointer"
                  @click="getCode" v-if="beginDownTimeShow">{{downTimeSec}}</span>
            <span class="pointer"
                  @click="getCode" v-else>测试</span>
          </template>
        </el-input>
      </div>
    </TipDialog>
  </div>
</template>

<script>
import TipDialog from '~/components/com/dialogs'

export default {
  name: 'login',
  components: {
    TipDialog
  },
  data () {
    return {
      beginDownTimeShow: false,
      verificationCode: '',
      countDownIntervalId: null,
      downTimeSec: null,
      token: null,
      diaTitle: '测试',
      diaShow: false,
      showDiaClass: true,
      form: {
        mobileNumber: null,
        loginPword: null,
        token: 'FFFF0000000001780E11:1535614568834:0.8230985557133212',
        csessionid: '0152JIZgtMjy7iQLwB8JakWfg7J-YE2sJ6c6eB22_lYCViYb2LMIOHePByX06BdpqL90uxPJADUE24FhMMBx2RH5kaMJay7fX-ss8I12lTJhJ3a83_-al7j3XBYlp2X8wQhT_2ZGpNXlh5ZtXRIJexQw',
        sig: '05a1C7nT4bR5hcbZlAujcdyQcj1X44i2llKMn7d0AncSkp8YaF9r9X9Gpz_O6NllGQ3llSwh-_TCyJFixXD0gGMDW2h25-wcAkPSZBzsaL5JFiGp4-RSlo2wwzH2kqN58cQ_i0WWR-8BVBKPH8epiAF7ApOvI9aSK81UQ4HN2B5ftrgiJdgRcAmFnaJuo6LWsSVsnjXLmVeS1Ydzq70CyeykM9e_g5piySUTWYmXhUI9X4hcpWK4bY5WgCu2-KlAc-CAYfy_EpXyZZPl1tp-4sTaj7pq0VHHQZ2du5bIgr_CpuijDIAuQTQYPdYyviey9aPRkVLWbPjPgc_kP0-Qd1BHusfhpVlndiqMQdpjK8ni6tYws4KM6nsDVNNjiJDaQmg70kweA1J0RD2Rg0qVCssw'
      },
      rules: {
        mobileNumber: [
          {required: true, message: '用户名不能为空', trigger: 'change'}
        ],
        loginPword: [
          {required: true, message: '密码不能为空', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    sendCode () {
      let getUrl = this.$route.query.url
      let variCode = this.verificationCode
      if (!variCode && variCode !== '0') {
        this.$message.error('验证码为空!')
        return false
      }
      let codeParams = {
        token: this.token,
        authCode: variCode
      }
      if (this.beginDownTimeShow) {
        this.$http.post('user/confirm_login', codeParams).then((res) => {
          if (+res.code === 0) {
            this.diaShow = false
            let childWin = window.open(getUrl)
            setTimeout(() => {
              childWin.postMessage(this.token, getUrl)
            }, 1000)
            console.log(res)
          } else {
            this.$message.error(res.msg)
          }
        })
      } else {
        this.$message.error('验证码已过期,请重新获取验证码')
      }
    },
    beginCountDown () {
      let num = 90
      this.downTimeSec = num
      if (!this.countDownIntervalId) {
        this.beginDownTimeShow = true
        this.countDownIntervalId = setInterval(() => {
          --num
          this.downTimeSec = `${num}s`
          if (num <= 0) {
            clearInterval(this.countDownIntervalId)
            this.beginDownTimeShow = false
            this.countDownIntervalId = null
            return false
          }
        }, 1000)
      }
    },
    diaClose () {
      this.beginDownTimeShow = false
      this.diaShow = false
      clearInterval(this.countDownIntervalId)
      this.countDownIntervalId = null
    },
    getCode () {
      let loginToken = {
        operationType: 4,
        token: this.token
      }
      this.$http.post('common/emailValidCode', loginToken).then(res => {
        if (res.code === '10005') this.$message.error(res.msg)
        if (res.code === '0') {
          this.beginCountDown()
        } else {
          this.$message.error(res.msg)
        }
      }).catch(error => {
        this.$message.error(error)
      })
    },
    handleLogin () {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          this.$http.post('user/login_in', this.form).then(rs => {
            if (+rs.code === 0) {
              this.beginCountDown()
              this.diaShow = true
              this.token = rs.data.token
              this.getCode()
              // localStorage.setItem('token', rs.data.token)
              // localStorage.setItem('user', JSON.stringify(rs.data.info))
              // // 初始化面包屑组件
              // this.$store.dispatch('resetBasicData')
              // this.$store.dispatch('setNavList', ['首页'])
              // location.replace('/index')
            } else {
              this.$message.error(rs.msg)
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
