<template>
  <div class="dashboard-container">
    <div class="padding10 fcenter ops-con">
      <el-input :style="inputStyle" placeholder="合同单号" v-model="form.name"></el-input>
      <el-select :style="inputStyle" v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      <el-input :style="inputStyle" placeholder="合同单号" v-model="form.name"></el-input>
      <el-date-picker
        :style="{width: '600px', marginRight: '10px'}"
        v-model="picker_date"
        type="datetimerange"
        start-placeholder="创建开始时间"
        end-placeholder="创建结束时间"
        :default-time="['12:00:00']">
      </el-date-picker>
      <el-button type="primary" size="mini">查询</el-button>
    </div>
    <el-table
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
    </div>
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
</style>
