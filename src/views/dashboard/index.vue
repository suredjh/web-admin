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
          <div class="list-img"></div>
          <div :style="{paddingLeft: '10px'}">销售收入</div>
        </div>
        <div class="list-num"><span class="active-color-red">1212121221</span> 元</div>
        <div class="fcenter list-tag list-tag-first">
          <div :style="{paddingRight: '5px'}">同期增长：<span class="txt-select-color">15%</span></div> 
          <div :style="{paddingLeft: '5px'}">完成情况：<span class="txt-select-color">15%</span></div>
        </div>
      </div>
      <div class="fcenter flex-column flex-start index-list">
        <div class="list-img"></div>
        <div class="list-ind">综合毛利</div>
        <div class="list-num txt-select-color">24%</div>
        <div class="list-tag">同期增长：<span class="txt-select-color">15%</span></div>
      </div>
      <div class="fcenter flex-column flex-start index-list">
        <div class="list-img"></div>
        <div class="list-ind">费用报销</div>
        <div class="list-num"><span class="active-color-red">1212121221</span> 元</div>
      </div>
      <div class="fcenter flex-column flex-start index-list">
        <div class="list-img"></div>
        <div class="list-ind">财务产值</div>
        <div class="list-num"><span class="active-color-red">1212121221</span> 元</div>
        <div class="list-tag">同期增长：<span class="txt-select-color">15%</span></div>
      </div>
      <div class="fcenter flex-column flex-start index-list">
        <div class="list-img"></div>
        <div class="list-ind">运营提成</div>
        <div class="list-num"><span class="active-color-red">1212121221</span> 元</div>
      </div>
    </div>
    <div class="fcenter inline-container-box space-between">
      <div class="inline-container" style="width: 55%;">
        <div class="fcenter space-between inline-container-name">
          <div class="fcenter flex-start inline-title">
            <div class="inline-timg"></div>
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
        <el-table
          :data="tableData"
          border
          height="250"
          :row-class-name="tableRowClassName"
          header-row-class-name="table-row-class-name"
          align="center"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="项目">
          </el-table-column>
          <el-table-column
            prop="name"
            label="材料">
          </el-table-column>
          <el-table-column
            prop="name"
            label="型号/花色">
          </el-table-column>
          <el-table-column
            prop="name"
            label="造型/封边">
          </el-table-column>
          <el-table-column
            prop="name"
            label="备注">
          </el-table-column>
        </el-table>
      </div>
      <div class="inline-container" style="width: 44%;">
        <div class="inline-container-name">价格</div>
        <el-table
          :data="tableData"
          border
          height="250"
          :row-class-name="tableRowClassName"
          header-row-class-name="table-row-class-name"
          align="center"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="项目">
          </el-table-column>
          <el-table-column
            prop="name"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="name"
            label="单价">
          </el-table-column>
          <el-table-column
            prop="name"
            label="金额">
          </el-table-column>
          <el-table-column
            prop="name"
            label="备注">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- <el-table
      :data="tableData"
      border
      :row-class-name="tableRowClassName"
      header-row-class-name="table-row-class-name"
      align="center"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="合同单号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="产品系列">
      </el-table-column>
      <el-table-column
        prop="name"
        label="报价方式">
      </el-table-column>
      <el-table-column
        prop="name"
        label="下单客户">
      </el-table-column>
      <el-table-column
        prop="name"
        label="客户电话">
      </el-table-column>
      <el-table-column
        prop="name"
        label="合同金额">
      </el-table-column>
      <el-table-column
        prop="name"
        label="综合毛利率">
      </el-table-column>
      <el-table-column
        prop="date"
        label="确认日期">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template>
          <div>
            <span>预览</span> <span>编辑</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="padding10 fcenter">
      <el-pagination
        background
        layout="pager"
        :total="tableData.length">
      </el-pagination>
    </div> -->
    <!-- 新增弹层 -->
    <!-- <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="代码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="系列名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="所属类别">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单位">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Echarts from 'vue-echarts'
export default {
  name: 'Dashboard',
  data () {
    return {
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
  background-color: #ffffff;
  margin-right: 10px;
}
.index-list {
  width: 18%;
  height: 160px;
  padding-top: 20px;
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
  width: 20px;
  height: 20px;
  background-color: #ffffff;
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
