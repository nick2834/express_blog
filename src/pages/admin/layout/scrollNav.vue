<template>
  <div class="scroll_nav">
    <div class="scroll_container">
      <div class="scroll_view">
        <span class="tags-view__item"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
