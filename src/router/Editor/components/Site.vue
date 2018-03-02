<template>
<tr>
     <td>{{id}}</td>
    <td><input v-model="site_name" :size="size_name" placeholder="编辑名字"></td>
    <td><input v-model="site_url" :size="size_url" placeholder="编辑链接"></td>
    <td><button  @click='site_remove_by_idx' class="sites-x">x</button></td>
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
    }
  },
  props: {
    id: Number,
    siteInit: Object,
    site_remove: Function
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
      this.site_remove(this.id);
    }
  }
};
</script>

<style scoped>
.sites-x {
  color: red;
}
</style>
