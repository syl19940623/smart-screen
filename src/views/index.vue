<template>
  <div class="index">
    <div class="title">
      <span>全部项目</span>
    </div>
    <div class="content clear">
      <template v-for="item in 11">
        <div class="card">
          <ul class="cardTop">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="cardMid">
            <img src="../assets/img/demo.png" alt="">
          </div>
          <div class="cardBot">
            <h1 class="name ellipsis">测试项目名称{{item}}</h1>
            <div class="menu">
              <div class="menuBtn" @click="$router.push('project?id=' + item)">
                <i class="fa fa-pencil"></i>
              </div>
              <div class="menuBtn" @click="delCard(item)">
                <i class="fa fa-trash"></i>
              </div>
              <div class="menuBtn" @click="handleDropdown">
                <i class="fa fa-ellipsis-h"></i>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="cardAdd" @click="$router.push('project')">
        <div class="cardAddTxt">
          <i class="fa fa-plus"></i>
          <h1>添加项目</h1>
        </div>
      </div>
    </div>
    <div class="title">
      <span>我的模板</span>
    </div>
    <div class="content clear">
      <template v-for="item in 11">
        <div class="card">
          <ul class="cardTop">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="cardMid">
            <img src="../assets/img/demo.png" alt="">
          </div>
          <div class="cardBot">
            <h1 class="name ellipsis">测试模板名称{{item}}</h1>
            <div class="menu">
              <div class="menuBtn" @click="$router.push('template?id=' + item)">
                <i class="fa fa-pencil"></i>
              </div>
              <div class="menuBtn" @click="delCard(item)">
                <i class="fa fa-trash"></i>
              </div>
              <div class="menuBtn" @click="handleDropdown">
                <i class="fa fa-ellipsis-h"></i>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="cardAdd" @click="$router.push('template')">
        <div class="cardAddTxt">
          <i class="fa fa-plus"></i>
          <h1>添加模板</h1>
        </div>
      </div>
    </div>
    <Dialog :show.sync="dialogShow" @dialogSure="dialogSure"></Dialog>
    <Dropdown :show.sync="dropdownShow" :position="dropdownPosition"></Dropdown>
  </div>
</template>

<script>
  import Dialog from "@/components/Dialog/Dialog";
  import Dropdown from "@/components/Dropdown/Dropdown";

  export default {
    name: "index",
    components: {
      Dialog,
      Dropdown
    },
    data() {
      return {
        dialogShow: false,
        dropdownShow: false,
        dropdownPosition: {
          x: 0,
          y: 0
        }
      }
    },
    methods: {
      delCard(item) {
        this.dialogShow = true
      },
      dialogSure() {
        console.log('点击了确定')
      },
      handleDropdown(e) {
        this.dropdownPosition = {
          x: e.x + 'px',
          y: e.y + 'px'
        }
        this.dropdownShow = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .index{padding: 15px 25px;background: var(--bg1);height: calc(100vh - 60px);overflow-y: auto;
    .title{margin: 20px 0;border-bottom: 1px solid var(--border);position: relative;
      span{position: absolute;top: 50%;left: 25px;transform: translateY(-50%);padding: 0 15px;background: var(--bg1);line-height: 2px;}
    }
    .content{
      .card{background: var(--bg);border: 1px solid var(--border);float: left;border-radius: 2px;cursor: pointer;margin-right: 15px;margin-bottom: 15px;transition: all .3s;
        &:hover{transform: translateY(-5px);}
        .cardTop{overflow: hidden;padding: 12px 15px;
          li{width: 12px;height: 12px;border-radius: 50%;cursor: pointer;text-align: center;float: left;margin-right: 7.5px;}
          li:nth-child(1){background: #FC625D;}
          li:nth-child(2){background: #FCBC40;}
          li:nth-child(3){background: #34C749;}
        }
        .cardMid{padding: 0 15px 15px;
          img{width: 300px;height: 168px;}
        }
        .cardBot{border-top: 1px solid var(--border);padding: 12px 15px;overflow: hidden;
          .name{float: left;line-height: 24px;width: 162px;}
          .menu{float: right;
            .menuBtn{float: left;border: 1px solid var(--border);width: 36px;height: 24px;margin-left: 10px;text-align: center;border-radius: 2px;
              i{line-height: 22px;}
            }
          }
        }
      }
      .cardAdd{width: 332px;height: 270px;border: 1px dashed var(--border);float: left;border-radius: 2px;cursor: pointer;margin-bottom: 15px;position: relative;
        .cardAddTxt{position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align: center;}
      }
    }
  }
</style>