<template>
  <section>
    <div class="toolbar">
      <el-button icon="el-icon-plus" type="primary" @click="handleAdd"
        >发布文章</el-button
      >
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="50"> </el-table-column>
      <el-table-column prop="title" label="标题" width="250"> </el-table-column>
      <el-table-column prop="author" label="作者" width="120">
      </el-table-column>
      <el-table-column prop="description" label="描述" width="250">
      </el-table-column>
      <el-table-column prop="create_time" label="发布日期" width="200">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <router-link
            :to="'/article/edit/' + scope.row.id"
            style="margin: 0 10px"
          >
            <el-button type="text" size="small">
              编辑
            </el-button>
          </router-link>
          <el-button type="text" size="small" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="pageIndex"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="totalCount"
    >
    </el-pagination>
    <article-drawer
      :drawer="drawer"
      :aData="aData"
      @handleClose="handleClose"
    ></article-drawer>
  </section>
</template>

<script>
import { getList, getOneByid, deleteArticle } from "@/api/admin/article";
import { parseTime } from "@/utils";
import articleDrawer from "./articleDrawer";
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      totalCount: 0,
      tableData: [],
      drawer: false,
      aData: null
    };
  },
  components: { articleDrawer },
  methods: {
    getLists() {
      getList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }).then(({ data }) => {
        if (data && data.status == 0) {
          let result = data.result;
          result.data.map(item => {
            item.create_time = parseTime(item.create_time);
          });
          this.tableData = result.data;
          this.totalPage = result.total;
          this.pageIndex = result.page;
          this.totalCount = result.count;
        }
      });
    },
    handleClick(row) {
      getOneByid(row).then(({ data }) => {
        console.log(data);
        if (data.status == 0) {
          this.aData = data.result;
          this.drawer = true;
        }
      });
    },
    handleClose() {
      this.drawer = false;
    },
    handleDelete(row) {
      const { id } = row;
      deleteArticle({ id }).then(({ data }) => {
        if (data.status == 0) {
          this.getLists();
        }
      });
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getLists();
    },
    handleAdd() {
      this.$router.push({
        path: "/article/add"
      });
    }
  },
  mounted() {
    this.getLists();
  }
};
</script>

<style lang="scss" scope>
.toolbar {
  margin-bottom: 20px;
}
</style>
