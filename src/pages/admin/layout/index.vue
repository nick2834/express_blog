<template>
  <el-container>
    <sidebar-item :isCollapse="isCollapse"></sidebar-item>
    <el-container>
      <el-header style="height: 50px">
        <i
          class="fold_icon"
          :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          @click="isCollapse = !isCollapse"
        ></i>
        <breadcrumb class="breadcrumb-container" />
      </el-header>
      <scroll-nav></scroll-nav>
      <el-main class="app_main">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import sidebarItem from "./sidebarItem";
import scrollNav from "./scrollNav";
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  components: { sidebarItem, Breadcrumb,scrollNav },
  computed: {
    key() {
      return this.$route.path;
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
  display: flex;
  z-index: 100;
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
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
.scroll_nav {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  // -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
  //   0 0 3px 0 rgba(0, 0, 0, 0.04);
  // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
.el-main {
  // height: calc(100vh - 50px);
  height: calc(100vh - 85px);
}
</style>
