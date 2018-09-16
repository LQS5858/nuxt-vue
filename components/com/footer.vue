<style lang="less" scoped>
  .footer-wrap {
    background-color: @backGroundColor;
    .discrip-wrap {
      display: flex;
      flex-flow: row wrap;
      box-sizing: border-box;
      border-bottom: 1px solid #1a253d;
      .item-cursor {
        cursor: pointer;
      }
      .item {
        width: 90px;
        font-size: 14px;
        box-sizing: border-box;
        justify-content: space-between;
        padding-bottom: 21px;
        margin-right: 120px;
        white-space: nowrap;
      }
    }
    .footer-bottom {
      padding: 40px 0;
      .blogroll {
        padding-bottom: 20px;
      }
    }
    .footer-img-list {
      display: flex;
      flex-flow: row wrap;
      .img-item:not(:last-child) {
        margin-right: 60px;
      }
    }
  }
</style>
<template>
  <div class="footer-wrap">
    <div class="footer-top">
      <div class="discrip-wrap">
        <!--<ul class="item-ul">-->
        <div class="item item-cursor">
          <router-link tag="span"
                       to="/help_center">测试
          </router-link>
        </div>
        <template>
          <div class="item item-cursor"
               v-for="(item,index) in fotdata" :key="index">
            <router-link tag="span"
                         :to="{path:'/cms',query: {id: item.fileName}}">测试
            </router-link>
          </div>
        </template>
        <!--</ul>-->
      </div>
    </div>
    <div class="footer-bottom">
      <div class="blogroll">测试</div>
      <div class="footer-img-list">
        <div class="img-item"><a href="http://huoxun.com/" target="view_window"><img
          src="@/assets/images/footer/huoxun.png"></a></div>
        <div class="img-item"><a href="https://www.mytoken.io/" target="view_window"><img
          src="@/assets/images/footer/MyToken.png"></a>
        </div>
        <div class="img-item"><a href="https://www.aicoin.net.cn/" target="view_window"><img
          src="@/assets/images/footer/ALCoin.png"></a>
        </div>
        <div class="img-item"><a href="https://www.feixiaohao.com/" target="view_window"><img
          src="@/assets/images/footer/feixiaohao.png"></a></div>
        <div class="img-item"><a href="http://www.qukuaiwang.com.cn/" target="view_window"><img
          src="@/assets/images/footer/qukuaiwang.png"></a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bituan-footer',
  data () {
    return {
      fotdata: []
    }
  },
  beforeCreate () {
    this.$http.post('cms/footer/list').then(res => {
      this.fotdata = res.data
    })
  }
}
</script>
