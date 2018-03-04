<template>
<tr>
    <td>{{id}}</td>
    <td><input v-model="se_name" :size="size_name" placeholder="编辑名字"></td>
    <td><input v-model="se_url" :size="size_url" placeholder="编辑链接"></td>
    <td><input v-model="se_query" :size="size_query" placeholder="编辑查询参数"></td>
    <td><button class="se-up" :disabled='disabled_up'  @click='se_up_by_idx'>Up</button></td>
    <td><button class="se-dwon" :disabled='disabled_down' @click='se_down_by_idx'>Down</button></td>
    <td><button class="se-x"  @click='se_remove_by_idx'>x</button></td>
</tr>
</template>

<script>
export default {
  props: {
    id: Number,
    length: Number,
    seInit: Object
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
    },
    disabled_up: function() {
      return this.id <= 0;
    },
    disabled_down: function() {
      return this.id + 1 >= this.length;
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
      this.$emit("se-remove", this.id);
    },
    se_up_by_idx() {
      this.$emit("se-up", this.id);
    },
    se_down_by_idx() {
      this.$emit("se-down", this.id);
    }
  }
};
</script>

<style scoped>
.se-x {
  color: red;
}
</style>
