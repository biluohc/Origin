<template>
<div id="sites">
<h2>sites(站点)</h2>
<hr/>
<table id="sites-editor">
    <thead>
      <td>下标</td>
      <td>名字</td>
      <td>链接</td>
      <td>点击删除</td>
    </thead>
    <tbody>
      <Site v-for="(site,idx) in sites" :key="key(idx)"
      :id="idx" :site-init="site" 
      :site_remove="site_remove"      
      @site-name-change="site_name_change"
      @site-url-change="site_url_change"
      ></Site>
      </tbody>
</table>
<p><button @click='site_add()'>+</button></p>
<!-- [class.selected]="hero === selected"> -->
<hr/>
</div>
</template>

<script>
import Site from "./Site.vue";

export default {
  props: {
    sites: Array
  },
  components: {
    Site
  },
  computed: {
    sites_length: function() {
      return this.sites.length;
    }
  },
  methods: {
    // 被key坑的要死，要是编辑时变化，就会重新渲染丢失光标，
    // 要是直接用key，key不变就不会更新。。
    // idx+1: 直接用idx删除0不会重新渲染(key还是0)，结果数据删除0,视图删的是1
    key: function(idx) {
      return this.sites_length * (idx + 1);
    },
    site_add: function() {
      this.sites.push({
        name: "",
        url: ""
      });
    },
    site_remove: function(idx) {
      console.log("Remove", idx, " --> ", this.sites[idx].name);
      this.sites.splice(idx, 1);
      console.log("Remove-after", idx, " --> ", this.sites[idx].name);
    },
    site_name_change: function(val, idx) {
      console.log(idx, "\n site-name ", this.sites[idx].name, " --> ", val);
      this.sites[idx].name = val;
    },
    site_url_change: function(val, idx) {
      console.log(idx, "\n site-url", this.sites[idx].url, " --> ", val);
      this.sites[idx].url = val;
    }
  }
};
</script>

<style scoped>
#sites {
  font-size: medium;
}
table thead {
  font-weight: bold;
}
</style>
