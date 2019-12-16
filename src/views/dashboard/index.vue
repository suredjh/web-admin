<template>
  <div class="dashboard-container">
    <div class="padding10">
      <el-button type="primary" size="mini">新增产品系列</el-button>
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
        label="代号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="name"
        label="单号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="成本">
      </el-table-column>
      <el-table-column
        prop="name"
        label="毛利">
      </el-table-column>
      <el-table-column
        prop="name"
        label="成本">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="date"
        label="最后修改时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template>
          <div>
            编辑
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data () {
    return {
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
</style>
