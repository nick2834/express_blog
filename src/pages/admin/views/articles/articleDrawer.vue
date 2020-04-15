<template>
  <el-drawer
    title="我是标题"
    :visible.sync="drawer"
    direction="rtl"
    :before-close="handleClose"
  >
    <span>我来啦!</span>
  </el-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    aData: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    }
  }
};
</script>

<style></style>
