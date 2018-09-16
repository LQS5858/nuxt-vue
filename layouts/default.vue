<style lang="less">
  html {
    height: 100%;
    min-width: 1200px;
    body {
      height: 100%;
      min-width: 1200px;
      background-color: #ffffff;
      .app {
        height: 100%;
        .el-header {
          height: 72px;
          box-sizing: border-box;
          .header-wrap {
            position: relative;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            height: 100%;
            box-shadow: inset 0 -2px 0 0 #dcdae2;
            width: 100%;
            .header-title {
              display: flex;
              flex-flow: row wrap;
            }
            .head-logo {
              width: 142px;
              margin-right: 30px;
            }
            .header-right {
              position: absolute;
              right: 0;
            }
            .li-wrap, .item-li-right {
              display: inline-block;
            }
            .li-wrap {
              margin-left: 20px;
            }
            .item-li {
              display: inline-block;
              margin: 0 15px
            }
          }
        }
        .bituan-footer {
          padding: 40px 20px 0;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
<style lang="less">
  .app {
    .el-header {
      height: 72px !important;
    }
    .li-wrap {
      .el-select {
        width: 120px;
      }
      .el-input--suffix .el-input__inner {
        border: none
      }
    }
    .el-main {
      padding: 0
    }
    .el-container {
      height: 100%;
      .el-main {
        padding: 0;
        position: relative;
      }
    }
  }

  .el-dropdown-menu__item {
    text-align: center;
  }
</style>
<template>
  <div class="app">
    <el-container>
      <el-header>
        <div class="header-wrap">
          <div class="head-logo item-wrap">
            <router-link to="/index"><img :src="headerObj.imgLogo" alt="网络异常,图片加载失败"></router-link>
          </div>
          <div class="header-title item-wrap">
            <ul>
              <!--<li class="item-li" v-for="(item ,itemKey) in getTitleList" :key="itemKey">-->
              <!--<router-link :to="item.path">{{item.title}}-->
              <!--</router-link>-->
              <!--</li>-->
              <li>测试</li>
            </ul>
          </div>
          <div class="header-right item-wrap">
            <ul class="li-wrap ">
              <template v-if="true">
                <li class="item-li-right pointer">测试</li>
                <li class="item-li-right pointer">测试</li>
                <li class="item-li-right pointer"></li>
              </template>
              <template v-else>
                <li class="item-li-right pointer" @click="login">测试</li>
                <li class="item-li-right pointer">|</li>
                <li class="item-li-right pointer">测试</li>
              </template>
            </ul>
            <ul class="li-wrap ">
              <el-dropdown>
               <span class="el-dropdown-link">
                   测试<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <a :href="headerObj.appDownUrl" target="_blank" download><img
                      src="@/assets/images/appdown/qr-prod.png"
                      alt="网络异常,加载图片失败"><br>测试</a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </ul>
            <ul class="li-wrap ">
              <el-select v-model="headerObj.lanValue" placeholder="请选择" @change="selectLan">
                <el-option
                  v-for="item in langObjList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
              <!--<li class="item-li-right" v-for="(item,index) in headerObj.langList" :key="index">{{item.name}}</li>-->
            </ul>
          </div>
        </div>
      </el-header>
      <nuxt></nuxt>
      <el-footer>
        <div class="bituan-footer">
          <BituanFooter></BituanFooter>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import BituanFooter from '@/components/com/footer'
// import {mapState} from 'vuex'

export default {
  name: 'layout',
  data () {
    return {
      headerObj: {
        langList: [],
        appDownUrl: null,
        langId: '',
        lanValue: ''
      }
    }
  },
  asyncData ({store}) {
    // store.dispatch('setToken','testToken')
  },
  components: {
    BituanFooter
  },
  computed: {
    // ...mapState(['Basic']),
    getTitleList () {
      return ''
    },
    langObjList () {
      return this.headerObj.langList.slice(0, 2)
    }
  },
  beforeCreate () {
    this.$store.dispatch('setToken', 'testToken')
    // let te = this.$route.query.id
    this.$http.post('common/public_info').then(res => {
      this.headerObj.imgLogo = res.data.logoUrl
      this.headerObj.langList = res.data.lan.lanList
      this.headerObj.lanValue = this.headerObj.langList[0].name
      this.headerObj.appDownUrl = res.data.app_update.Android.url
    })
  },
  methods: {
    login () {
      this.$router.push({path: '/login', query: {url: 'http://localhost:8080'}})
    },
    selectLan (e) {
      let getLanID = this.headerObj.lanValue
      // this.$i18n.locale = getLanID
    }
  },
  mounted () {
  }
}
</script>
