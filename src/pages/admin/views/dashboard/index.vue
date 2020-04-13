<template>
  <section>
    Dashboard
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      totalCount: 0,
      tableData: []
    };
  }
};
</script>

<style lang="scss" scope>
.toolbar {
  margin-bottom: 20px;
}
</style>
