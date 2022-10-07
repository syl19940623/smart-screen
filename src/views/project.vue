<template>
  <div class="project">
    <div class="type">
      <div class="typeSearch">
        <input type="text" placeholder="请输入关键字">
        <i class="fa fa-search"></i>
      </div>
      <div class="typeContent">
        <div class="oneType hideScrollBar">
          <ul>
            <li v-for="(item, index) in sideMenu" :style="index === oneTypeIndex ? {'background': $store.state.activeColor} : ''" @click="oneTypeChange(index)">
              <i :class="item.icon"></i>
              <h1>{{item.name}}</h1>
            </li>
          </ul>
        </div>
        <div class="twoType hideScrollBar">
          <ul>
            <li v-for="(item, index) in sideMenu[oneTypeIndex]?.children" :style="index === twoTypeIndex ? {'background': $store.state.activeColor} : ''" @click="twoTypeChange(index)">{{item.name}}</li>
          </ul>
        </div>
        <div class="threeType hideScrollBar">
          <ul>
            <li v-for="item in sideMenu[oneTypeIndex]?.children[twoTypeIndex]?.children" class="typeItem">
              <div class="top">
                <ul class="circle">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div class="name">{{item.name}}</div>
              </div>
              <div class="bot">
                <img :src="require('../assets/img/chartDemo/' + item.type + '_' + $store.state.theme + '.webp')" alt="" draggable="true" @dragstart="onDragstart($event, item)" @drag="onDrag">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="workspace" ref="workspace">
      <div
        class="workspaceBoard"
        ref="workspaceBoard"
        :style="[workspaceBoardBasicStyle, workspaceBoardExtendStyle]"
        @dragenter="onDragenter"
        @dragover="onDragover"
        @drop="onDrop"
        @click.self="currentOperateVdrIndex = -1">
        <template v-for="(item, index) in workspaceList">
          <vdr
            ref="vdr"
            class-name="vdrClass"
            class-name-active="vdrActiveClass"
            :key="index"
            :parent="true"
            :grid=[10,10]
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :snap="true"
            :on-drag-start="onDragStartCb"
            @dragging="onDragging"
            @resizing="onResizing"
            @refLineParams="getRefLineParams">
            <ECharts :id="'container' + index" :type="item.type" :width="item.w" :height="item.h"></ECharts>
          </vdr>
        </template>
        <!-- 辅助线 -->
        <span class="ref-line v-line"
          v-for="item in vLine"
          v-show="item.display"
          :style="{left: item.position, top: item.origin, height: item.lineLength}"
        />
        <span class="ref-line h-line"
          v-for="item in hLine"
          v-show="item.display"
          :style="{top: item.position, left: item.origin, width: item.lineLength}"
        />
        <!-- 辅助线 -->
      </div>
    </div>
    <div class="config">
      <div class="pageConfig" v-if="currentOperateVdrIndex == -1">
        <ul class="tab">
          <li :style="{'background': $store.state.activeColor}">页面配置</li>
        </ul>
        <div class="pageSize">
          <div class="pageSizeItem">
            <h1>宽度</h1>
            <input type="number" placeholder="请输入" v-model="pageWidth">
          </div>
          <div class="pageSizeItem">
            <h1>高度</h1>
            <input type="number" placeholder="请输入" v-model="pageHeight">
          </div>
        </div>
        <div class="pageBg">
          <div class="hasImg" v-if="pageBg">
            <img :src="pageBg" alt="">
          </div>
          <div class="noImg" v-else>
            <img src="../assets/img/noImg.png" alt="">
            <h1>背景图片需小于5M，格式为JPG或PNG</h1>
          </div>
          <input type="file" accept="image/*" class="uploadPageBg" @change="uploadPageBg">
        </div>
        <div class="pageBgcolor">
          <h1>背景色</h1>
          <input type="color" v-model="pageBgcolor">
        </div>
        <div class="previewMode">
          <h1>预览方式</h1>
          <div class="previewModeItem">
            <span v-for="item in previewModeList" :style="previewMode === item.type ? {'background': $store.state.activeColor} : ''" @click="previewMode = item.type">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </span>
          </div>
        </div>
        <div class="chartTheme">
          <h1>图表主题</h1>
          <div class="chartThemeItem" v-for="(item, index) in chartThemeList" :style="chartThemeIndex === index ? {'border': '1px solid ' + $store.state.activeColor} : ''">
            <div class="colorItem" v-for="childItem in item" :style="{'background': childItem}"></div>
          </div>
        </div>
      </div>
      <div class="componentConfig" v-else>
        <ul class="tab">
          <li
            v-for="(item, index) in componentTabList"
            :style="componentTabIndex === index ? {'background': $store.state.activeColor} : ''"
            @click="componentTabIndex = index">
            {{item.name}}
          </li>
        </ul>
        <div v-if="componentTabIndex === 0">
          <div class="pageSize">
            <div class="pageSizeItem">
              <h1>宽度</h1>
              <input type="number" placeholder="请输入" v-model="workspaceList[currentOperateVdrIndex].w">
            </div>
            <div class="pageSizeItem">
              <h1>高度</h1>
              <input type="number" placeholder="请输入" v-model="workspaceList[currentOperateVdrIndex].h">
            </div>
          </div>
        </div>
        <div v-else-if="componentTabIndex === 1">
          动画
        </div>
        <div v-else-if="componentTabIndex === 2">
          数据
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ECharts from "@/components/ECharts/ECharts";
  import { sideMenu } from "@/assets/json/sideMenu.json";

  export default {
    name: "project",
    components: {
      ECharts
    },
    data() {
      return {
        oneTypeIndex: 0,
        twoTypeIndex: 0,
        pageWidth: 1080,
        pageHeight: 760,
        pageBg: '',
        pageBgcolor: '#ffffff',
        previewModeList: [
          {
            type: 'adaptive',
            name: '自适应',
            icon: 'fa fa-arrows'
          },
          {
            type: 'widthFull',
            name: '页宽撑满',
            icon: 'fa fa-arrows-h'
          },
          {
            type: 'heightFull',
            name: '页高撑满',
            icon: 'fa fa-arrows-v'
          },
          {
            type: 'pageFull',
            name: '页面撑满',
            icon: 'fa fa-arrows-alt'
          }
        ],
        previewMode: 'adaptive',
        chartThemeList: [
          ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
        ],
        chartThemeIndex: 0,
        vLine: [],
        hLine: [],
        initX: 0,
        initY: 0,
        finalX: 0,
        finalY: 0,
        currentDragType: '',
        workspaceList: [],
        currentOperateVdrIndex: -1,
        componentTabList: [
          {
            name: '定制',
            type: 'custom'
          },
          {
            name: '动画',
            type: 'animation'
          },
          {
            name: '数据',
            type: 'data'
          }
        ],
        componentTabIndex: 0,
        sideMenu: []
      }
    },
    computed: {
      workspaceBoardBasicStyle() {
        return {
          'width': this.pageWidth + 'px',
          'height': this.pageHeight + 'px',
          'background-color': this.pageBgcolor
        }
      },
      workspaceBoardExtendStyle() {
        if (this.pageBg) {
          return {
            'background-image': 'url(' + this.pageBg + ')',
            'background-size': '100% 100%',
            'background-repeat': 'no-repeat'
          }
        }
      }
    },
    methods: {
      oneTypeChange(index) {
        this.oneTypeIndex = index
        this.twoTypeIndex = 0
      },
      twoTypeChange(index) {
        this.twoTypeIndex = index
      },
      uploadPageBg(event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = e => {
          this.pageBg = e.target.result
        }
      },
      onDragstart(e, item) {
        this.initX = e.x - e.target.x
        this.initY = e.y - e.target.y
        this.currentDragType = item.type
      },
      onDrag(e) {
        this.finalX = e.x - this.initX - this.$refs.workspaceBoard.offsetLeft + this.$refs.workspace.scrollLeft
        this.finalY = e.y - this.initY - this.$refs.workspaceBoard.offsetTop + this.$refs.workspace.scrollTop
      },
      onDragenter(e) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      },
      onDragover(e) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      },
      numConvertTenMultiple(num) {
        num = parseInt(num)
        const numLen = num.toString().length - 1
        const basicNum = Math.pow(10, numLen)
        return num <= 10 ? 10 : Math.floor(num / basicNum) * basicNum;
      },
      onDrop(e) {
        if (e) {
          this.workspaceList.push({
            type: this.currentDragType,
            x: this.numConvertTenMultiple(this.finalX) <= this.pageWidth - 400 ? this.numConvertTenMultiple(this.finalX) : this.pageWidth - 400,
            y: this.numConvertTenMultiple(this.finalY) <= this.pageHeight - 300 ? this.numConvertTenMultiple(this.finalY) : this.pageHeight - 300,
            w: 400,
            h: 300
          })
        }
        this.currentDragType = ''
      },
      onDragStartCb(event) {
        this.currentOperateVdrIndex = event.target.parentNode.parentNode.id.replace('container', '')
      },
      onDragging(left, top) {
        this.workspaceList[this.currentOperateVdrIndex].x = left
        this.workspaceList[this.currentOperateVdrIndex].y = top
      },
      onResizing(left, top, width, height) {
        this.workspaceList[this.currentOperateVdrIndex].x = left
        this.workspaceList[this.currentOperateVdrIndex].y = top
        this.workspaceList[this.currentOperateVdrIndex].w = width
        this.workspaceList[this.currentOperateVdrIndex].h = height
      },
      getRefLineParams (params) {
        const { vLine, hLine } = params
        this.vLine = vLine
        this.hLine = hLine
      }
    },
    mounted() {
      this.sideMenu = sideMenu
    }
  }
</script>

<style lang="less" scoped>
  .project{display: flex;height: calc(100vh - 60px);
    .type{width: 300px;
      .typeSearch{padding: 6px;border-bottom: 1px solid var(--border);position: relative;
        input{height: 30px;background: var(--bg1);width: 100%;padding: 0 12px;border-radius: 2px;}
        i{position: absolute;display: block;line-height: 43px;top: 0;right: 18px;}
      }
      .typeContent{display: flex;height: calc(100vh - 107px);
        .oneType{width: 64px;overflow-y: auto;
          ul{padding: 6px;
            li{text-align: center;padding: 12px 0;border-radius: 2px;cursor: pointer;margin-bottom: 6px;
              i{margin-bottom: 3px;}
              &:hover{background: var(--bg1);}
            }
          }
        }
        .twoType{width: 64px;border-left: 1px solid var(--border);border-right: 1px solid var(--border);overflow-y: auto;
          ul{padding: 6px;
            li{line-height: 30px;text-align: center;cursor: pointer;border-radius: 2px;margin-bottom: 6px;font-size: 12px;
              &:hover{background: var(--bg1);}
            }
          }
        }
        .threeType{flex: 1;overflow-y: auto;
          ul{padding: 6px;
            li{cursor: pointer;border-radius: 2px;margin-bottom: 6px;background: var(--bg1);
              .top{overflow: hidden;border-bottom: 1px solid var(--border);
                .circle{overflow: hidden;padding: 8px 0 8px 6px;float: left;
                  li{width: 10px;height: 10px;border-radius: 50%;cursor: pointer;text-align: center;float: left;margin-right: 3px;margin-bottom: 0;}
                  li:nth-child(1){background: #FC625D;}
                  li:nth-child(2){background: #FCBC40;}
                  li:nth-child(3){background: #34C749;}
                }
                .name{float: right;font-size: 12px;line-height: 26px;padding-right: 6px;}
              }
              .bot{padding: 6px;
                img{transition: all .3s;}
              }
              &:hover{
                .bot{
                  img{transform: scale(1.05);}
                }
              }
            }
          }
        }
      }
    }
    .workspace{flex: 1;padding: 6px;border-left: 1px solid var(--border);border-right: 1px solid var(--border);overflow: auto;
      .workspaceBoard{border: 1px solid var(--border);border-top: none;position: relative;background-image: linear-gradient(-90deg, var(--border) 1px, transparent 1px), linear-gradient(var(--border) 1px, transparent 1px);background-repeat: repeat;background-position: top left;background-size: 20px 20px;
        .vdrClass{border: 1px solid #01F3F4;position: absolute;}
        .vdrActiveClass{border: 1px solid #FFC30C;background: rgba(255,195,12,.1);}
      }
    }
    .config{width: 350px;padding: 6px;overflow-y: auto;
      .tab{padding: 6px;background: var(--bg1);border-radius: 2px;display: flex;
        li{border-radius: 2px;line-height: 30px;text-align: center;cursor: pointer;flex: 1;}
        .active{background: var(--bg);}
      }
      .pageSize{display: flex;justify-content: space-between;padding: 12px 0;
        .pageSizeItem{width: calc(50% - 12px);
          h1{width: 40px;line-height: 30px;float: left;}
          input{width: calc(100% - 40px);background: var(--bg1);height: 30px;float: left;padding: 0 6px;border-radius: 2px;}
        }
      }
      .pageBg{border: 1px dashed var(--border);border-radius: 2px;position: relative;height: 190px;
        .hasImg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 2;padding: 6px;
          img{height: 178px;}
        }
        .noImg{width: 100%;position: absolute;top: 50%;left: 0;transform: translateY(-50%);z-index: 1;
          img{width: 50%;margin: 0 auto;}
          h1{text-align: center;margin-top: 10px;}
        }
        .uploadPageBg{width: 100%;height: 100%;opacity: 0;position: absolute;top: 0;left: 0;z-index: 3;font-size: 0;cursor: pointer;}
      }
      .pageBgcolor{margin-top: 12px;
        h1{margin-bottom: 6px;}
        input{width: 100%;border: 1px solid var(--border);height: 36px;background: var(--bg1);cursor: pointer;border-radius: 2px;}
      }
      .previewMode{margin-top: 12px;
        h1{margin-bottom: 6px;}
        .previewModeItem{border: 1px solid var(--border);border-radius: 2px;display: flex;padding: 6px;background: var(--bg1);
          span{flex: 1;text-align: center;cursor: pointer;border-radius: 2px;
            i{line-height: 24px;}
            span{font-size: 12px;margin-left: 6px;}
          }
        }
      }
      .chartTheme{margin-top: 12px;
        h1{margin-bottom: 6px;}
        .chartThemeItem{border: 1px solid var(--border);padding: 6px;border-radius: 18px;display: flex;justify-content: space-around;background: var(--bg1);cursor: pointer;
          .colorItem{width: 24px;height: 24px;border-radius: 50%;}
        }
      }
    }
  }
</style>