<template>
  <div class="dashboard-container">
    <div class="fcenter container-box padding10 space-between">
      <div class="container-title">【主要成本配置】</div>
      <div>
        <el-button type="primary" size="mini" @click="carouselList.push({})">添加</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </div>
    </div>
    <div class="container-box transparent" v-if="carouselList.length > 0">
      <el-carousel type="card" height="240px" :autoplay="autoplay">
        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
          <div class="fcenter carousel-top padding10 space-between">
            <div>
              名称：<el-input v-model="form.name" size="mini" :style="inputStyle"></el-input>
            </div>
            <i class="icon-remove-btn el-icon-remove"></i>
          </div>
          <el-table
            size="mini"
            :data="tableData"
            border
            height="140px"
            :row-class-name="tableRowClassName"
            header-row-class-name="table-row-class-name"
            align="center"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="数量">
            </el-table-column>
            <el-table-column
              width="120"
              label="所属成本">
              <template slot-scope="{$index}">
                <el-select size="mini" v-model="value" placeholder="请选择" :key="$index">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="单价">
            </el-table-column>
            <el-table-column
              label="操作">
              <template>
                <div>
                  <i class="el-icon-btn el-icon-plus"></i> <i class="el-icon-btn el-icon-minus"></i>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="fcenter txt-container-box flex-column">
            <div class="fcenter flex-end">
              项目小计：<span class="active-color-red">399</span> 元
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container-box padding10">
      <div class="inline-container-name">【柜体比例配置】</div>
      <div class="fcenter tab-list">
        <div class="fcenter flex-column flex-start">
          <div class="fcenter flex-start">
            <div>主体结算金额提成比例：</div>
            <el-input v-model="form.name" size="mini" :style="inputStyle"></el-input>
          </div>
          <div class="fcenter flex-start container-title">销售价XXX元/套米 毛利XX元/套米</div>
        </div>
        <div class="fcenter flex-column flex-start">
          <div class="fcenter flex-start">
            <div>主体结算金额提成比例：</div>
            <el-input v-model="form.name" size="mini" :style="inputStyle"></el-input>
          </div>
          <div class="fcenter flex-start container-title">销售价XXX元/套米 毛利XX元/套米</div>
        </div>
      </div>
    </div>
    <div class="fcenter txt-container-box space-between">
      <div class="fcenter flex-end txt-info">
        <div class="fcenter flex-start txt-info-first">
          <div class="txt-info-list"><span class="txt-select-color">台面成本：</span><span class="active-color-red">150</span>/套米</div>
          <div class="txt-info-list"><span class="txt-select-color">地柜成本：</span><span class="active-color-red">150</span>/套米</div>
          <div class="txt-info-list"><span class="txt-select-color">吊柜成本：</span><span class="active-color-red">150</span>/套米</div>
        </div>
        <div class="fcenter flex-end" style="width: auto;">
          <div class="txt-img"></div>
          <div>综合毛利率：<span class="active-color-red">XX</span>%</div>
        </div>
      </div>
      <!-- <div class="fcenter flex-start remark">备注：1、毛利率=（小计金额-项目成本）/小计金额*100%</div> -->
    </div>
    <div class="fcenter txt-container-box flex-column">
      <div class="fcenter flex-end">
        <el-button type="danger" size="mini">关闭</el-button>
        <el-button type="primary" size="mini">保存</el-button>
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

export default {
  name: 'Dashboard',
  data () {
    return {
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
