<template>
  <div class="components-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="8">
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" :offset="2">
          <el-form-item label="文章分类" prop="category_id">
            <el-select v-model="ruleForm.category_id" placeholder="请选择文章分类">
              <el-option
                :label="item.name"
                :value="item.cid"
                v-for="item in categoryList"
                :key="item.cid"
              ></el-option>
            </el-select>
            <el-button
              style="margin-left:20px"
              circle
              type="primary"
              icon="el-icon-plus"
              @click="handleAddCategory"
            ></el-button>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="8"></el-col> -->
      </el-row>

      <el-form-item label="描述" prop="description">
        <el-input v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="文章主体" prop="content">
        <tinymce v-model="ruleForm.content" :height="300" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- <div class="editor-content" v-html="content" /> -->

    <add-cate ref="add_category" @refreshData="refreshData" />
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { getCategoryList, addCategory, addArticle } from "@/api/admin/article";
import addCate from "./add-category";
export default {
  name: "TinymceDemo",
  components: { Tinymce, addCate },
  data() {
    return {
      content: "",
      ruleForm: {
        title: "",
        author: "nick",
        description: "description",
        category_id: "",
        content: ""
      },
      rules: {
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        category_id: [
          { required: true, message: "请选择文章分类", trigger: "change" }
        ],
        content: [
          { required: true, message: "请填写文章内容", trigger: "blur" }
        ]
      },
      categoryList: null
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          addArticle(this.ruleForm).then(({ data }) => {
            console.log(data);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getList() {
      getCategoryList().then(({ data }) => {
        console.log(data);
        if (data.status == 0) {
          this.categoryList = data.result;
        }
      });
    },
    handleSelect(e) {
      console.log(e);
      addCategory({ name: e, mainKey: e }).then(({ data }) => {
        console.log(data);
        this.getList();
      });
    },
    handleAddCategory() {
      this.$refs["add_category"].dialogFormVisible = true;
    },
    refreshData() {
      this.getList();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getList();
    });
  }
};
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>
