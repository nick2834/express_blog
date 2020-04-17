<template>
  <el-aside :width="isCollapse ? '64px' : '200px'"
    ><el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse-transition="false"
      router
    >
      <el-menu-item index="/dashboard">
        <i class="el-icon-house"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="/article/list">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu></el-aside
  >
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  }
};
</script>

<style lang="scss">
.el-aside {
  background: rgb(48, 65, 86);
  border-right: solid 1px #e6e6e6;
  .el-menu {
    border: none;
  }
}
</style>
