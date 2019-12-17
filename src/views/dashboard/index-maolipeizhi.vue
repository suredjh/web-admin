<template>
  <div class="dashboard-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="财务低价" name="first">
        <div class="fcenter inline-container-box space-between">
          <div class="fcenter flex-column space-between" style="height: 440px;width: 55%; align-items:space-between;">
            <div class="inline-container flex-column" style="width: 100%;height: 300px;">
              <div class="inline-container-name">【合同主体】</div>
              <div class="fcenter tab-list">
                <div>主体结算金额提成比例：</div>
                <el-input v-model="form.name" size="mini" :style="inputStyle"></el-input>
                <div class="container-title">销售价XXX元/套米 毛利XX元/套米</div>
              </div>
              <div class="fcenter tab-list">
                <div>配件结算金额提成比例：</div>
                <el-input v-model="form.name" size="mini" :style="inputStyle"></el-input>
                <div class="container-title">销售价XXX元/套米 毛利XX元/套米</div>
              </div>
              <div class="fcenter tab-list">
                <div>配件结算金额提成比例：</div>
                <el-input v-model="form.name" size="mini" :style="inputStyle"></el-input>
                <div class="container-title">销售价XXX元/套米 毛利XX元/套米</div>
              </div>
            </div>
            <div class="inline-container flex-column" style="width: 100%;height: 120px;">
              <div class="inline-container-name">【配件】</div>
              <div class="fcenter tab-list">
                <div>主体结算金额提成比例：</div>
                <el-input v-model="form.name" size="mini" :style="inputStyle"></el-input>
                <div class="container-title">销售价XXX元/套米 毛利XX元/套米</div>
              </div>
            </div>
          </div>
          <div class="inline-container" style="width: 44%; height: 440px;">
            <div class="inline-container-name">代购件</div>
            <el-table
              :data="tableData"
              border
              height="400px"
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
                label="所属类别">
              </el-table-column>
              <el-table-column
                prop="name"
                label="毛利(%)">
              </el-table-column>
              <el-table-column
                label="操作">
                <template>
                  <div>
                    <span>+</span> <span>-</span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <div class="fcenter txt-container-box flex-column">
          <div class="fcenter flex-end txt-info">
            <div class="txt-img"></div>
            <div>综合毛利率：<span class="active-color-red">XX</span>%</div>
          </div>
          <div class="fcenter flex-start remark">备注：1、毛利率=（小计金额-项目成本）/小计金额*100%</div>
        </div>
        <div class="fcenter txt-container-box flex-column">
          <div class="fcenter flex-end">
            <el-button type="danger" size="mini">关闭</el-button>
            <el-button type="primary" size="mini">保存</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="业务员" name="second">业务员</el-tab-pane>
      <el-tab-pane label="导购" name="third">导购</el-tab-pane>
    </el-tabs>
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
        width: '200px'
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
    padding-left: 20px;
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
  padding-bottom: 3px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ffffff;
}
</style>
