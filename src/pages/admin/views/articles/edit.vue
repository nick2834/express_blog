<template>
  <div>编辑</div>
</template>

<script>
import { getList, getOneByid, deleteArticle } from "@/api/admin/article";
export default {
  methods: {
    getByid(id) {
      getOneByid({id}).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    const { params } = this.$route;
    console.log(this.$route);
    this.getByid(params.id);
  }
};
</script>

<style></style>
