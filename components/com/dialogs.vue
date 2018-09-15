<style lang="less" scoped>
</style>
<style lang="less">
  .loginDialogCls {
    .el-dialog__header {
      border-bottom: 1px solid #868686;
    }
    .el-dialog__footer {
      display: flex;
      justify-content: center;
    }
  }
</style>
<template>
  <div :class="{loginDialogCls:showDiaClass}">
    <el-dialog :title="diaTitle"
               :visible="diaShow"
               @close="close"
               :width="diaWidth">
      <slot name="diaBody"></slot>
      <div slot="footer"
           class="dialog-footer attendance-btn">
        <el-button type="primary"
                   @click="submitConfirm"
                   v-text="diaConfirm"
                   :size="buttonSize">
        </el-button>
        <el-button @click="close"
                   v-text="diaCancel"
                   :size="buttonSize"></el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'diaLog',
  props: {
    diaTitle: {
      type: String,
      default: ''
    },
    diaShow: {
      type: Boolean,
      default: false
    },
    buttonSize: {
      type: String,
      default: 'medium'
    },
    diaWidth: {
      type: String,
      default: '450px'
    },
    diaConfirm: {
      type: String,
      default: '确定'
    },
    diaCancel: {
      type: String,
      default: '取消'
    },
    showDiaClass: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submitConfirm () {
      this.$emit('confirmSendCode')
    }
  }
}
</script>
