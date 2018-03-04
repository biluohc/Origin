<template>
  <div align="center">
        <TopBar> </TopBar>

        <!--搜索引擎表单-->
        <SearchBar></SearchBar>

        <br/>
        <p> </p>

        <!--导航URL列表-->
        <SiteTable></SiteTable>
</div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import SearchBar from "./components/SearchBar.vue";
import SiteTable from "./components/SiteTable.vue";

export default {
  name: "Home",
  components: {
    TopBar,
    SearchBar,
    SiteTable
  }
};
</script>

<style>
a {
  color: #339999;
}
a:hover {
  background-color: transparent;
  color: #fda000;
}
</style>
