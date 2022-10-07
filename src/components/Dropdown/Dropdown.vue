<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp">
    <div class="dropdown" id="dropdown" v-if="show" :style="{'top': position.y, 'left': position.x}">
      <ul>
        <li>
          <i class="fa fa-desktop"></i><span>预览</span>
        </li>
        <li>
          <i class="fa fa-copy"></i><span>克隆</span>
        </li>
        <li>
          <i class="fa fa-edit"></i><span>重命名</span>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Dropdown",
    props: {
      show: Boolean,
      position: Object
    },
    mounted() {
      document.addEventListener('mouseup',(e) => {
        const element = document.getElementById('dropdown')
        if (element && !element.contains(e.target)) {
          this.$emit('update:show', false)
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .dropdown{width: 100px;background: var(--bg);position: fixed;border-radius: 2px;
    ul{padding: 5px;
      li{line-height: 32px;cursor: pointer;padding: 0 10px;border-radius: 2px;
        &:hover{background: var(--bg1);}
        i{margin-right: 5px;}
      }
    }
  }
</style>