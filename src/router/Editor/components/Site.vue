<template>
<tr>
     <td>{{id}}</td>
    <td><input v-model="site_name" :size="size_name" placeholder="编辑名字"></td>
    <td><input v-model="site_url" :size="size_url" placeholder="编辑链接"></td>
    <td><button :disabled='disabled_up' @click='site_up_by_idx' class="site-up">Up</button></td>
    <td><button :disabled='disabled_down'  @click='site_down_by_idx' class="site-dwon">Down</button></td>
    <td><button  @click='site_remove_by_idx' class="site-x">x</button></td>
</tr>
</template>

<script>
export default {
  data: function() {
    return {
      site_name: this.siteInit.name,
      site_url: this.siteInit.url
    };
  },
  computed: {
    size_name: function() {
      return this.site_name.length + 1;
    },
    size_url: function() {
      return this.site_url.length;
    },
    disabled_up: function() {
      return this.id <= 0;
    },
    disabled_down: function() {
      return this.id + 1 >= this.length;
    }
  },
  props: {
    id: Number,
    length: Number,
    siteInit: Object
  },
  watch: {
    site_name: function(val) {
      this.$emit("site-name-change", val, this.id);
    },
    site_url: function(val) {
      this.$emit("site-url-change", val, this.id);
    }
  },
  methods: {
    site_remove_by_idx() {
      this.$emit("site-remove", this.id);
    },
    site_up_by_idx() {
      this.$emit("site-up", this.id);
    },
    site_down_by_idx() {
      this.$emit("site-down", this.id);
    }
  }
};
</script>

<style scoped>
.site-x {
  color: red;
}
</style>
