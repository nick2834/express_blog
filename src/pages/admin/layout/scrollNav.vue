<template>
  <div class="scroll_nav">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "首页",
          name: "1",
          route: "/dashboard"
        },
        {
          title: "文章",
          name: "2",
          route: "/article/index"
        },
        {
          title: "新增文章",
          name: "3",
          route: "/article/add"
        }
      ]
    };
  },
  watch: {
    $route(to, from) {
      let self = this;
      if(from.path == to.path) return
      const { path } = to;
      let pathIndex = self.editableTabs.findIndex(item => item.route == path);
      console.log(pathIndex);
      self.editableTabsValue = String(pathIndex);
    }
    // $route(route) {
    //   console.log(route.path);
    //   let index = this.editableTabs.findIndex(item => item.route == route.path);
    //   this.$nextTick(() => {
    //     this.editableTabsValue = String(index);
    //   });
    //   console.log(this.editableTabsValue);
    //   console.log(typeof this.editableTabsValue);
    // }
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
    handleClick(e) {
      let index = e.index;
      let target = this.editableTabs[index];
      this.$router.push(target.route);
    }
  }
};
</script>

<style lang="scss">
.el-tabs--card {
  height: 34px;
  line-height: 34px;
  .el-tabs__header {
    margin: 0;
    border-bottom: none !important;
    .el-tabs__nav {
      border: none !important;
    }
    .el-tabs__item {
      height: 26px;
      line-height: 26px;
      padding: 0 8px;
      font-size: 12px;
      border: 1px solid #e4e7ed !important;
      margin-top: 4px;
      box-sizing: border-box;
      margin-right: 5px;
      &.is-active,
      &:hover {
        background: #42b983;
        color: #ffffff;
        border-color: #42b983;
      }
    }
  }
}

.scroll_container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  .tags-view__item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
  }
}
</style>
