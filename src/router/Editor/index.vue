<template>
<div align="center">
    <div class="inline" ><router-link to="/"><button>Home</button></router-link></div>
    <div class="inline">
      <button @click="download">导出</button>
     <router-link to="/upload"><button>导入</button></router-link>
      <button :disabled="disabled" @click="save">保存</button>
    </div>
    <h1>Editor</h1>
    <SitesTrLength
    :sites_tr_length="sites_tr_length" 
    @sites-tr-length-up="sites_tr_length_up" 
    @sites-tr-length-down="sites_tr_length_down">
    </SitesTrLength>
    <SearchEngines :search_engines="search_engines"></SearchEngines>
    <Sites :sites="sites"></Sites>    
</div>
</template>

<script>
import SitesTrLength from "./components/SitesTrLength.vue";
import SearchEngines from "./components/SearchEngines.vue";
import Sites from "./components/Sites.vue";

// function deepCopy(obj){
//     if(typeof obj != 'object'){
//         return obj;
//     }
//     var newobj = {};
//     for ( var attr in obj) {
//         newobj[attr] = deepCopy(obj[attr]);
//     }
//   console.log(JSON.stringify(newobj))
//     return newobj;
// }
function deepCopy(obj) {
  // fake js...
  return JSON.parse(JSON.stringify(obj));
}
function deepEq(obj0, obj1) {
  return JSON.stringify(obj0) === JSON.stringify(obj1);
}
export default {
  data: function() {
    return {
      sites: deepCopy(window.store.sites),
      sites_tr_length: window.store.sites_tr_length,
      search_engines: deepCopy(window.store.search_engines),
      sites_unchange: true,
      sites_tr_length_unchange: true,
      search_engines_unchange: true
    };
  },
  components: {
    SitesTrLength,
    SearchEngines,
    Sites
  },
  methods: {
    sites_tr_length_up: function() {
      this.sites_tr_length++;
    },
    sites_tr_length_down: function() {
      this.sites_tr_length--;
    },
    save: function() {
      console.log("save()");
      // console.log("this.sites_tr_length", this.sites_tr_length);
      // console.log("this.sites", JSON.stringify(this.sites));
      // console.log("this.search_engines", JSON.stringify(this.search_engines));
      window.store.update(this.sites_tr_length, this.sites, this.search_engines);
      // console.log(JSON.stringify(window.store));
      window.store.save_config_to_localStorage();
      alert("通知：保存成功");
    },
    download: function() {
      var json = JSON.stringify(window.store.copy());
      var blob = new Blob([json], { type: "application/json;charset=utf-8" });
      var date = new Date();
      var file_name =
        "Origin-Config." + date.toLocaleString() + ".json";
      window.FileSaver.saveAs(blob, file_name);
    }
  },
  watch: {
    sites_tr_length: {
      handler: function(val, oldVue) {
        this.sites_tr_length_unchange =
          this.sites_tr_length === window.store.sites_tr_length;
        console.log("sites_tr_length_unchange", this.sites_tr_length_unchange);
      }
    },
    sites: {
      handler: function(val, oldVue) {
        this.sites_unchange = deepEq(this.sites, window.store.sites);
        console.log("sites_unchange", this.sites_unchange);
      },
      deep: true
    },
    search_engines: {
      handler: function(val, oldVue) {
        this.search_engines_unchange = deepEq(
          this.search_engines,
          window.store.search_engines
        );
        console.log("search_engines_unchange", this.search_engines_unchange);
      },
      deep: true
    }
  },
  computed: {
    disabled: function() {
      return (
        this.sites_tr_length_unchange &&
        this.sites_unchange &&
        this.search_engines_unchange
      );
    }
  }
};
</script>

<style scoped>
.inline {
  width: 49%;
  display: inline-block;
}
</style>