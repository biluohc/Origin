<template>
<div id="search_engines">
    <form :action="selected_search_engine.url" method="get" target="_self" align="middle">
    <input id="input" :name="selected_search_engine.query" autofocus="autofocus" maxlength="64" size="86" type="text">
    <select id="select" v-model="selected_search_engine_name">
        <option disabled value="">请选择</option>
        <option v-for="search_engine in search_engines" :key="search_engine.name">{{search_engine.name}}</option>
    </select>
        <input id="submit" value="搜索" type="submit">
    </form>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      search_engines: this.store.search_engines,
      selected_search_engine_name: this.store.search_engines[0].name
    };
  },
  computed: {
    selected_search_engine: function() {
      for (var i = 0; i < this.search_engines.length; i++) {
        if (this.search_engines[i].name === this.selected_search_engine_name) {
          return this.search_engines[i];
        }
      }
    }
  }
};
</script>

<style scoped>
form {
  background-color: transparent;
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  margin-left: 8%;
  width: 90%;
  height: 70%;
  text-align: center;
  border: 1px solid transparent;
  empty-cells: hide;
}
#input {
  background-color: transparent;
  width: 60%;
  height: 20%;
  font-size: 32px;
  font-weight: bold;
}
#select {
  background-color: transparent;
  font-size: 32px;
  font-weight: bold;
  width: 6%;
  height: 20%;
}
#submit {
  background-color: transparent;
  width: 10%;
  height: 20%;
  font-size: 32px;
  font-weight: bold;
}
</style>
