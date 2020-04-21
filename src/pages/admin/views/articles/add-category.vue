<template>
  <el-dialog title="新增分类" :visible.sync="dialogFormVisible">
    <el-form :model="form" ref="cate" :rules="rules">
      <el-form-item label="分类名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="副标题" :label-width="formLabelWidth" prop="mainKey">
        <el-input v-model="form.mainKey" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { addCategory } from "@/api/admin/article";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        mainKey: ""
      },
      rules: {
        name: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
        mainKey: [
          { required: true, message: "请输入分类副标题", trigger: "blur" }
        ]
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    onSubmit() {
      this.$refs["cate"].validate(valid => {
        if (valid) {
          console.log(this.form);
          addCategory(this.form).then(({ data }) => {
            console.log(data);
            this.dialogFormVisible = false;
            this.$emit('refreshData')
          });
        } else {
        }
      });
    }
  }
};
</script>


<style>
</style>