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
      <td>上移</td>
      <td>下移</td>
      <td>点击删除</td>
    </thead>
    <tbody>
      <SearchEngine v-for="(se,idx) in search_engines" :key="key(idx)"
      :id="idx" :length="ses_length" :se-init="se"
      @se-name-change="se_name_change"
      @se-url-change="se_url_change"
      @se-query-change="se_query_change"
      @se-up="se_up"
      @se-down="se_down"
      @se-remove="se_remove"
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
  data: function() {
    return {
      keys: this.search_engines.map(function(val, index, array) {
        return "" + array.length + index;
      })
    };
  },
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
      return this.keys[idx];
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
    },
    se_up: function(idx) {
      if (idx > 0) {
        var tmp = this.search_engines[idx];
        this.search_engines.splice(idx, 1, this.search_engines[idx - 1]);
        this.search_engines.splice(idx - 1, 1, tmp);
        for (var i = 0; i < this.keys.length; i++) {
          this.keys.splice(
            i,
            1,
            "" +
              this.search_engines.length +
              i +
              "up" +
              idx +
              new Date().valueOf()
          );
        }
      }
    },
    se_down: function(idx) {
      if (idx + 1 < this.search_engines.length) {
        var tmp = this.search_engines[idx + 1];
        this.search_engines.splice(idx + 1, 1, this.search_engines[idx]);
        this.search_engines.splice(idx, 1, tmp);
        for (var i = 0; i < this.keys.length; i++) {
          this.keys.splice(
            i,
            1,
            "" +
              this.search_engines.length +
              i +
              "down" +
              idx +
              new Date().valueOf()
          );
        }
      }
    }
  }
};
</script>

<style scoped>
table thead {
  font-weight: bold;
}
</style>
