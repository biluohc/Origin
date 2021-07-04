<template>
<!-- 表头，表格版  width表行的宽度,frame表四条边框,all所有元素的边框 style的设置不会被多数浏览器忽视 -->
<table id="sites" frame="box" rules="all" cellspacing="6">
    <tbody>
      <tr v-for="sites in sites_list" :key="sites.id">
        <!-- 单元格点击支持+元素点击支持 -->
         <td  v-for="site in sites" :key="site.name" @click='jump(site.url)'>
          <a :href="site.url">
           <span>{{ site.name }}</span>
          </a>
         </td>
      </tr>
      </tbody>
</table>
</template>

<script>
export default {
  data: function() {
    return {
      sites_raw: window.store.sites,
      sites_tr_length: window.store.sites_tr_length
    };
  },
  methods: {
    jump: function(url) {
      window.location.href = url;
    }
  },
  computed: {
    sites_list: function() {
      var sites_raw = this.sites_raw;
      var sites_list = [];
      var sites_tmp = [];
      for (var i = 0; i < sites_raw.length; i++) {
        if ((i + 1) % this.sites_tr_length === 0) {
          sites_tmp.push(sites_raw[i]);
          sites_list.push(sites_tmp);
          sites_tmp = [];
        } else {
          sites_tmp.push(sites_raw[i]);
          if (i + 1 === sites_raw.length) {
            sites_list.push(sites_tmp);
          }
        }
      }
      console.log(sites_list);
      return sites_list;
    }
  }
};
</script>

<style lang='scss' scoped>
table {
  font-size: 48px;
  font-weight: bold;
  width: 80%;
  height: 70%;
  text-align: center;
  border: 1px midium #aaa;
  empty-cells: hide;
}
a {
  text-decoration: none;
}
</style>
