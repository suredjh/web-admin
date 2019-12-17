<template>
  <div class="dashboard-container">
    <div class="padding10"></div>
    <div class="container-box">
      <el-form :inline="true" ref="form" :model="form" label-width="110px">
        <el-form-item label="合同单号：">
          <el-input size="mini" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="报价方式：">
          <el-select size="mini" v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户姓名：">
          <el-input size="mini" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="客户电话：">
          <el-input size="mini" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="客户地址：">
          <el-input size="mini" v-model="form.name" :style="{width: '600px'}"></el-input>
        </el-form-item>
        <el-form-item label="下单日期：">
          <el-date-picker
            size="mini"
            v-model="mock_date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="确认日期：">
          <el-date-picker
            size="mini"
            v-model="mock_date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="预计发货日期：">
          <el-date-picker
            size="mini"
            v-model="mock_date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="安装日期：">
          <el-date-picker
            size="mini"
            v-model="mock_date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="产   品：">
          <el-select size="mini" v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="柜体材料：">
          <el-input size="mini" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="门板主材：">
          <el-input size="mini" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="台面材料：">
          <el-input size="mini" v-model="form.name"></el-input>
        </el-form-item>
        <!-- <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item> -->
        <!-- <el-form-item>
          <el-button type="primary" size="mini">确定</el-button>
        </el-form-item> -->
      </el-form>
    </div>
    <div class="fcenter container-box padding10 space-between">
      <div class="container-title">【A主件部分】</div>
      <div>
        <el-button type="primary" size="mini">添加</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </div>
    </div>
    <div class="fcenter inline-container-box space-between">
      <div class="inline-container" style="width: 55%;">
        <div class="inline-container-name">材料</div>
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
    <div class="fcenter txt-container-box flex-column">
      <div class="fcenter flex-end">
        小计：<span class="active-color-red">15000</span>元 毛利率：<span class="active-color-red">XX</span>%
      </div>
      <div class="fcenter flex-end remark">备注：1、毛利率=（小计金额-项目成本）/小计金额*100%</div>
    </div>
    <div class="fcenter container-box padding10 space-between">
      <div class="container-title">【B配附件及系统五金部分】</div>
      <div>
        <el-button type="primary" size="mini">添加</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </div>
    </div>
    <div class="fcenter container-box padding10 flex-column">
      <el-table
        :data="tableData"
        border
        :row-class-name="tableRowClassName"
        header-row-class-name="table-row-class-name"
        align="center"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="花色">
        </el-table-column>
        <el-table-column
          prop="name"
          label="型号/造型">
        </el-table-column>
        <el-table-column
          prop="name"
          label="规格">
        </el-table-column>
        <el-table-column
          prop="name"
          label="工艺/封边">
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
      <div class="fcenter txt-container-box flex-column">
        <div class="fcenter flex-end">
          小计：<span class="active-color-red">15000</span>元 毛利率：<span class="active-color-red">XX</span>%
        </div>
      </div>
    </div>
    <div class="fcenter container-box padding10 space-between">
      <div class="container-title">【C特惠无折扣商品】</div>
      <div>
        <el-button type="primary" size="mini">添加</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </div>
    </div>
    <div class="fcenter container-box padding10 flex-column">
      <el-table
        :data="tableData"
        border
        :row-class-name="tableRowClassName"
        header-row-class-name="table-row-class-name"
        align="center"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="品牌名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="型号类型">
        </el-table-column>
        <el-table-column
          prop="name"
          label="规格">
        </el-table-column>
        <el-table-column
          prop="name"
          label="单位">
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
      <div class="fcenter txt-container-box flex-column">
        <div class="fcenter flex-end">
          小计：<span class="active-color-red">15000</span>元 毛利率：<span class="active-color-red">XX</span>%
        </div>
      </div>
    </div>
    <div class="fcenter txt-container-box flex-column">
      <div class="fcenter flex-end txt-info">
        <div class="txt-img"></div>
        <div>合同总计：<span class="active-color-red">15000</span>元</div>
        <div class="txt-img"></div>
        <div>综合毛利率：<span class="active-color-red">XX</span>%</div>
        <div class="txt-img"></div>
        <div>财务产值：<span class="active-color-red">XX</span>元</div>
      </div>
      <div class="fcenter flex-end remark">备注：1、毛利率=（小计金额-项目成本）/小计金额*100%</div>
    </div>
    <div class="fcenter container-box padding10 space-between transparent">
      <div class="container-title">【D电器、水盆尺寸备注】</div>
    </div>
    <div class="fcenter container-box padding10 space-between">
      <el-input type="textarea" v-model="form.desc"></el-input>
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
      inputStyle: {
        width: '260px',
        marginRight: '10px'
      },
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
.ops-con {
  justify-content: flex-start;
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
  padding-bottom: 3px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ffffff;
}
</style>
