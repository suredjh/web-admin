<template>
  <div class="dashboard-container">
    <div class="fcenter container-box padding10 space-between transparent">
      <div class="container-title">
        <el-checkbox v-model="checked">按年显示</el-checkbox>
        <el-select v-model="value" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="fcenter container-box padding10 space-between transparent">
      <div class="fcenter flex-column flex-start index-list">
        <div class="fcenter top-info">
          <div class="fcenter list-img">
            <img :src="img1" alt="" />
          </div>
          <div :style="{paddingLeft: '10px'}">销售收入</div>
        </div>
        <div class="list-num"><span class="active-color-red">1212121221</span> 元</div>
        <div class="fcenter list-tag list-tag-first">
          <div :style="{paddingRight: '5px'}">同期增长：<span class="txt-select-color">15%</span></div> 
          <div :style="{paddingLeft: '5px'}">完成情况：<span class="txt-select-color">15%</span></div>
        </div>
      </div>
      <div class="fcenter flex-column flex-start index-list">
        <div class="fcenter list-img">
          <img :src="img2" alt="" />
        </div>
        <div class="list-ind">综合毛利</div>
        <div class="list-num txt-select-color">24%</div>
        <div class="list-tag">同期增长：<span class="txt-select-color">15%</span></div>
      </div>
      <div class="fcenter flex-column flex-start index-list">
        <div class="fcenter list-img">
          <img :src="img3" alt="" />
        </div>
        <div class="list-ind">费用报销</div>
        <div class="list-num"><span class="active-color-red">1212121221</span> 元</div>
      </div>
      <div class="fcenter flex-column flex-start index-list">
        <div class="fcenter list-img">
          <img :src="img4" alt="" />
        </div>
        <div class="list-ind">财务产值</div>
        <div class="list-num"><span class="active-color-red">1212121221</span> 元</div>
        <div class="list-tag">同期增长：<span class="txt-select-color">15%</span></div>
      </div>
      <div class="fcenter flex-column flex-start index-list">
        <div class="fenter list-img">
          <img :src="img5" alt="" />
        </div>
        <div class="list-ind">运营提成</div>
        <div class="list-num"><span class="active-color-red">1212121221</span> 元</div>
      </div>
    </div>
    <div class="fcenter inline-container-box space-between">
      <div class="inline-container" style="width: 55%;">
        <div class="fcenter space-between inline-container-name">
          <div class="fcenter flex-start inline-title">
            <div class="fcenter inline-timg">
              <img :src="img6" alt="" />
            </div>
            <span>产品系列</span>
          </div>
          <el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <v-chart :options="barOptions" autoresize theme="light"></v-chart>
      </div>
      <div class="inline-container" style="width: 44%;">
        <div class="fcenter space-between inline-container-name">
          <div class="fcenter flex-start inline-title">
            <div class="fcenter inline-timg">
              <img :src="img7" alt="" />
            </div>
            <span>报价方式</span>
          </div>
        </div>
        <div style="width: 100%; height: 300px">
          <v-chart :options="circleOptions" autoresize theme="light"></v-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Echarts from 'vue-echarts'
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/markLine";
import "echarts/lib/component/graphic";
import img1 from '@/assets/icons/icon-13.png';
import img2 from '@/assets/icons/icon-14.png';
import img3 from '@/assets/icons/icon-15.png';
import img4 from '@/assets/icons/icon-16.png';
import img5 from '@/assets/icons/icon-17.png';
import img6 from '@/assets/icons/icon-18.png';
import img7 from '@/assets/icons/icon-19.png';
export default {
  name: 'Dashboard',
  components: {
    "v-chart": Echarts
  },
  data () {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      barOptions: {
        textStyle: {
          color: '#fff'
        },
        grid: {
          top: 30,
          borderColor: "#ffffff",
          height: 180
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            boundaryGap: true
        },
        yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: '#999'
              }
            },
            axisTick: {
              show: false
            }
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            itemStyle: {
              barWidth: '40%',
              barBorderRadius: 10
            },
            barWidth: '40%'
        }]
      },
      circleOptions: {
        graphic: {
          type: "group",
          top: "100",
          left: "26%",
          children: [
            {
              type: "text",
              left: "100%",
              style: {
                text: "￥100000万",
                textAlign: "center",
                textVerticaAlign: "middle",
                fill: "#7f50d4",
                font: "15px 'Helvetica',sans-serif"
              }
            }
          ]
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'left',
            top: 220,
            orient: 'horizontal',
            data: ['西凉', '益州','兖州','荆州','幽州'],
            textStyle: {
              color: "#ffffff"
            }
        },
        series : [
            {
                type: 'pie',
                radius : ['30%', '40%'],
                center: ['32.5%', '26%'],
                selectedMode: 'single',
                label: {
                  formatter: '{d}%',
                },
                data:[
                    {value:1548, name: '幽州'},
                    {value:535, name: '荆州'},
                    {value:510, name: '兖州'},
                    {value:634, name: '益州'},
                    {value:735, name: '西凉'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      },
      checked: false,
      carouselList: [],
      autoplay: false,
      inputStyle: {
        width: '140px'
      },
      activeName: 'first',
      mock_date: '',
      dialogVisible: true,
      picker_date: [],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '黄金糕',
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 0) {
        return 'even-row';
      } 
      return 'odd-row'
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },  
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.inline-timg {
  width: 30px;
  height: 30px;
  // background-color: #ffffff;
  margin-right: 10px;
}
.index-list {
  width: 18%;
  height: 185px;
  padding-top: 10px;
  background: #2b3648;
  font-size: 16px;
  &:first-child {
    width: 24%;
  }
}
.list-tag-first {
  padding-top: 30px;
  
}
.list-img {
  width: 50px;
  height: 50px;
  // background-color: #ffffff;
}
.list-ind {
  padding-top: 15px;
}
.list-num {
  padding: 20px 0;
}
.tab-list {
  justify-content: flex-start;
  padding-bottom: 25px;
  padding-top: 25px;
  .container-title {
    font-size: 12px;
    text-align: left;
    color: #999999;
    padding-top: 10px;
  }
}
.txt-container-box {
  line-height: 1.5;
  .remark {
    font-size: 12px;
  }
}
.txt-img {
  width: 14px;
  height: 14px;
  margin-left: 40px;
  margin-right: 6px;
  background: #ffffff;
}
.txt-info {
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  padding-left: 10px;
  border-bottom: 1px solid #ffffff;
}
.txt-info-first {
  flex: 1;
}
.txt-info-list {
  padding-right: 50px;
}
.carousel-top {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
