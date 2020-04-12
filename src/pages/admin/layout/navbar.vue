<template>
  <el-header style="height: 50px">
    <i
      class="fold_icon"
      :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="openCollapse"
    ></i>
  </el-header>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    openCollapse() {
      this.$emit("toggleClick");
    }
  }
};
</script>

<style lang="scss">
.el-header {
  /* text-align: center; */
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 !important;
  .fold_icon {
    font-size: 20px;
    line-height: 50px;
    width: 50px;
    text-align: center;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
