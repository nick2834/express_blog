<template>
  <div class="article">
    <el-row>
      <el-col :span="8">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="文章标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="form.author"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="文章分类">
            <el-select v-model="form.category_id" placeholder="文章分类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="内容">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        title: "",
        author: "",
        description: "",
        content: "",
        category_id: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$refs["form"].validate(valid => {
        console.log(this.form);
        axios
          .post("/article/add", this.form)
          .then(({ data }) => {

          });
      });
    }
  }
};
</script>

<style></style>
