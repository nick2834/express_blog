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
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "首页",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "文章",
          name: "2",
          content: "Tab 2 content"
        },
        {
          title: "新增文章",
          name: "3",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2
    };
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
    handleClick(e){
      console.log(e)
    }
  }
};
</script>

<style lang="scss">
.el-tabs--card {
  .el-tabs__header {
    margin: 0;
    border-bottom: none !important;
    .el-tabs__item{
      height: 34px;
      line-height: 34px;
      padding: 0 8px;
    font-size: 12px;
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
