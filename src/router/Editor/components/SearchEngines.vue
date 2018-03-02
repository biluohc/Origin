<template>
<div id="ses">
<h2>search_engines(搜索引擎)</h2>
<p>Ps: 第一个是默认的</p>
<hr/>
<table id="ses-editor">
    <thead>
      <td>下标</td>
      <td>名字</td>
      <td>链接</td>
      <td>查询参数名</td>
      <td>点击删除</td>
    </thead>
    <tbody>
      <SearchEngine v-for="(se,idx) in search_engines" :key="key(idx)"
      :id="idx" :se-init="se"
      :se_remove="se_remove"      
      @se-name-change="se_name_change"
      @se-url-change="se_url_change"
      @se-query-change="se_query_change"
      >
      </SearchEngine>
      </tbody>
</table>
<p><button @click='se_add()'>+</button></p>
<hr/>
</div>
</template>

<script>
import SearchEngine from "./SearchEngine.vue";

export default {
  props: {
    search_engines: Array
  },
  components: {
    SearchEngine
  },
  computed: {
    ses_length: function() {
      return this.search_engines.length;
    }
  },
  methods: {
    key: function(idx) {
      return this.ses_length * (idx + 1);
    },
    se_add: function() {
      this.search_engines.push({
        name: "",
        url: "",
        query: ""
      });
    },
    se_remove: function(idx) {
      console.log("Remove", idx, " --> ", this.search_engines[idx].name);
      this.search_engines.splice(idx, 1);
      console.log("Remove-after", idx, " --> ", this.search_engines[idx].name);
    },
    se_name_change: function(val, idx) {
      console.log(
        idx,
        "\n se-name",
        this.search_engines[idx].name,
        " --> ",
        val
      );
      this.search_engines[idx].name = val;
    },
    se_url_change: function(val, idx) {
      console.log(idx, "\n se-url", this.search_engines[idx].url, " --> ", val);
      this.search_engines[idx].url = val;
    },
    se_query_change: function(val, idx) {
      console.log(
        idx,
        "\n se-query",
        this.search_engines[idx].query,
        " --> ",
        val
      );
      this.search_engines[idx].query = val;
    }
  }
};
</script>

<style scoped>
table thead {
  font-weight: bold;
}
</style>
