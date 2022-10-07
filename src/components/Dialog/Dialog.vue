<template>
  <div class="container">
    <div class="dialogMask" v-if="show"></div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut">
      <div class="dialog" v-if="show">
        <div class="title">
          <h1>这是Dialog标题</h1>
          <i class="fa fa-times" @click="dialogClose"></i>
        </div>
        <div class="content">是否确定删除此内容?</div>
        <div class="btn">
          <div class="sure" @click="dialogSure" :style="{'background': $store.state.activeColor}">确定</div>
          <div class="cancel" @click="dialogClose">取消</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Dialog",
    props: {
      show: Boolean
    },
    methods: {
      dialogClose() {
        this.$emit('update:show', false)
      },
      dialogSure() {
        this.dialogClose()
        this.$emit('dialogSure')
      }
    }
  }
</script>

<style lang="less" scoped>
  .container{
    .dialogMask{width: 100%;height: 100%;background: rgba(29,33,41,.6);position: fixed;top: 0;left: 0;}
    .dialog{width: 320px;background: var(--bg);border-radius: 2px;position: fixed;top: 50%;left: 50%;margin-top: -91px;margin-left: -160px;
      .title{line-height: 48px;position: relative;padding: 0 15px;border-bottom: 1px solid var(--border);
        i{position: absolute;line-height: 48px;top: 0;right: 15px;cursor: pointer;}
      }
      .content{padding: 25px 15px;line-height: 20px;}
      .btn{border-top: 1px solid var(--border);padding: 15px;overflow: hidden;
        div{float: right;width: 60px;height: 32px;text-align: center;line-height: 32px;border-radius: 2px;margin-left: 15px;cursor: pointer;}
        .sure{color: #fff;}
        .cancel{background: var(--bg1);}
      }
    }
  }
</style>