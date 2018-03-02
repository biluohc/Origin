<template>
<tr>
    <td>{{id}}</td>
    <td><input v-model="se_name" :size="size_name" placeholder="编辑名字"></td>
    <td><input v-model="se_url" :size="size_url" placeholder="编辑链接"></td>
    <td><input v-model="se_query" :size="size_query" placeholder="编辑查询参数"></td>
    <td><button  @click='se_remove_by_idx' class="sites-x">x</button></td>
</tr>
</template>

<script>
export default {
  props: {
    id: Number,
    seInit: Object,
    se_remove: Function
  },
  data: function() {
    return {
      se_name: this.seInit.name,
      se_url: this.seInit.url,
      se_query: this.seInit.query
    };
  },
  computed: {
    size_name: function() {
      return this.se_name.length + 1;
    },
    size_url: function() {
      return this.se_url.length;
    },
    size_query: function() {
      return this.se_query.length;
    }
  },
  watch: {
    se_name: function(val) {
      this.$emit("se-name-change", val, this.id);
    },
    se_url: function(val) {
      this.$emit("se-url-change", val, this.id);
    },
    se_query: function(val) {
      this.$emit("se-query-change", val, this.id);
    }
  },
  methods: {
    se_remove_by_idx() {
      this.se_remove(this.id);
    }
  }
};
</script>

<style scoped>
.sites-x {
  color: red;
}
</style>
