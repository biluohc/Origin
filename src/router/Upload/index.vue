<template>
<div align='center'>
    <div class="inline" ><router-link to="/"><button>Home</button></router-link></div>    
    <div class="inline" ><router-link to="/editor"><button>Editor</button></router-link></div>    
    <h1>导入配置文件</h1>
    <p/>
    <h2>从本地文件导入</h2>    
    <form id="upload">
        <input type="file" @change="change"/> 
        <input type="button" value="保存" :disabled="disabled" @click="load"/> 
    </form>
    <p/>    
    <p/>
    <p/>    
    <h2>从远程链接导入</h2>
    <p>如果从其它服务器加载，要注意<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS">跨域</a>
    <form id="upload">
        <input type="text" v-model="url" :size="size" @keyup.enter="load_from_url"/> 
        <input type="button" value="保存" @click="load_from_url"/> 
    </form>
</div>
</template>

<script>
var file = null;

export default {
  data: function() {
    return {
      disabled: true,
      url: ""
    };
  },
  computed: {
    size: function() {
      if (this.url.length + 1 < "从远程链接导入".length) {
        return "从远程链接导入".length;
      }
      return this.url.length + 1;
    }
  },
  methods: {
    change: function(event) {
      try {
        if (event.target.files.length == 1) {
          this.disabled = false;
        }
        console.log(event.target.files[0]);
        file = event.target.files[0];
      } catch (error) {
        this.disabled = true;
        console.log("event.target.files.length: ", error);
      }
    },
    load: function() {
      console.log("load()");
      var reader = new FileReader();
      var self = this;
      reader.onload = function(event) {
        try {
          var tmpJson = JSON.parse(event.target.result);
          self.store.update(
            tmpJson.sites_tr_length,
            tmpJson.sites,
            tmpJson.search_engines
          );
          self.store.save_config_to_localStorage();
          alert("通知：保存成功");
        } catch (error) {
          console.log(event.target.result);
          console.log(error);
          alert("解析错误：配置文件不是正确的的 JSON");
        }
      };
      reader.onerror = function() {
        console.log(error);
        alert("配置文件读取错误");
      };
      reader.readAsText(file);
    },
    load_from_url: function() {
      console.log("load_from_url()");
      var self = this;
      this.http
        .get(this.url)
        .then(function(resp) {
          self.store.update(
            resp.data.sites_tr_length,
            resp.data.sites,
            resp.data.search_engines
          );
          self.store.save_config_to_localStorage();
          alert("通知：保存成功");
        })
        .catch(function(error) {
          alert("保存失败: ", error.message);
          console.log(self.url);
          console.log(error);
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.inline {
  width: 49%;
  display: inline-block;
}
</style>
