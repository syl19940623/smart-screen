<template>
  <div id="app" :class="$store.state.theme">
    <div class="header">
      <div class="logo">
        <img src="./assets/img/hblogo.png" alt="">
        <h1>智慧大屏</h1>
      </div>
      <div class="changeBtn"></div>
      <ul class="toolbar">
        <li id="searchInputOut">
          <i class="fa fa-search" @click="toggleSearch"></i>
          <input type="text" placeholder="请输入关键字" :style="{'width': searchInputWidth + 'px'}" ref="searchInput">
        </li>
        <li @click="changeTheme">
          <i :class="['fa', $store.state.theme === 'light' ? 'fa-moon-o' : 'fa-sun-o']"></i>
        </li>
        <li :style="{'background': $store.state.activeColor}">
          <i class="fa fa-tachometer" style="color: #fff;"></i>
          <input type="color" style="position: absolute;top: 0;left: 0;font-size: 0;cursor: pointer;opacity: 0;" :value="$store.state.activeColor" @change="changeActiveColor">
        </li>
        <li @click="toggleFullscreen">
          <i :class="['fa', fullscreen ? 'fa-compress' : 'fa-expand']"></i>
        </li>
        <li>
          <img src="./assets/img/avatar.png" alt="">
        </li>
      </ul>
    </div>
    <div class="main">
      <transition name="slide-fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        searchInputWidth: 0,
        theme: true,
        fullscreen: false
      }
    },
    methods: {
      toggleSearch() {
        if (this.searchInputWidth === 0) {
          this.searchInputWidth = 160
          this.$refs.searchInput.focus()
        } else {
          this.searchInputWidth = 0
        }
      },
      changeTheme() {
        const theme = this.$store.state.theme === 'light' ? 'dark' : 'light'
        this.$store.commit('changeTheme', theme)
      },
      changeActiveColor(e) {
        this.$store.commit('changeActiveColor', e.target.value)
      },
      toggleFullscreen() {
        this.fullscreen ? document.exitFullscreen() : document.querySelector('#app').requestFullscreen();
      }
    },
    mounted() {
      document.addEventListener('fullscreenchange', e => {
        this.fullscreen = !this.fullscreen
      })

      document.addEventListener('mouseup',(e) => {
        const element = document.getElementById('searchInputOut')
        if (element && !element.contains(e.target)) {
          this.searchInputWidth = 0
        }
      })
    }
  }
</script>

<style lang="less">
  @import "./assets/css/base.css";
  @import "./assets/css/font-awesome.min.css";

  #app{width: 100vw;height: 100vh;background: var(--bg);color: var(--color);overflow: hidden;
    .header{height: 60px;padding: 14px 25px;border-bottom: 1px solid var(--border);
      .logo{float: left;
        img{width: 32px;float: left;}
        h1{float: left;margin-left: 8px;line-height: 32px;font-size: 16px;font-weight: bold;}
      }
      .changeBtn{float: left;}
      .toolbar{float: right;overflow: hidden;
        li{float: left;border-radius: 16px;border: 1px solid var(--border);text-align: center;overflow: hidden;margin-left: 25px;cursor: pointer;position: relative;
          i{color: var(--color);line-height: 30px;width: 30px;height: 30px;}
          img{background: #FFFFFF;width: 30px;height: 30px;}
          input{transition: width .3s;}
        }
      }
    }
    .main{height: calc(100vh - 60px);}
  }

  // transition动画
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(30px);
    opacity: 0;
  }
</style>
