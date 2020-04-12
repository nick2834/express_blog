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
      </el-header>
      <!-- <navbar :isCollapse="isCollapse" @toggleClick="toggleClick"></navbar> -->
      <el-main class="app_main">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sidebarItem from "./sidebarItem";
// import navbar from "./navbar";
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  components: { sidebarItem },
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
.el-main {
  height: calc(100vh - 50px);
}
</style>
