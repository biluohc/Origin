const localStorageKey = "Start.Config";

const OBJ = {
  "sites": [
    {
      "name": "ArchWiki",
      "url":
        "https://wiki.archlinux.org/index.php/List_of_applications_%28%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%29",
    },
    {
      "name": "维基百科",
      "url": "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5",
    },
    {
      "name": "Reddit",
      "url": "https://www.reddit.com/",
    },
    {
      "name": "推酷",
      "url": "https://www.tuicool.com/a/",
    },
    {
      "name": "Ruby China",
      "url": "https://ruby-china.org/",
    },
    {
      "name": "W3S",
      "url": "http://www.w3school.com.cn/index.html",
    },
    {
      "name": "MDN",
      "url": "https://developer.mozilla.org/zh-CN/",
    },
    {
      "name": "Vue3.js",
      "url": "https://v3.cn.vuejs.org/",
    },
    {
      "name": "Go",
      "url": "https://golang.google.cn/pkg/",
    },
    {
      "name": "StudyGo",
      "url": "https://studygolang.com/",
    },
    {
      "name": "TailwindCSS",
      "url": "http://tailwind.wyz.xyz/",
    },
    {
      "name": "Rust",
      "url": "https://www.rust-lang.org/zh-CN/documentation.html",
    },
    {
      "name": "crates.io",
      "url": "https://crates.io/",
    },
    {
      "name": "Docs.rs",
      "url": "https://docs.rs/",
    },
    {
      "name": "Rust.cc",
      "url": "https://rust.cc/",
    },
    {
      "name": "GitHub",
      "url": "https://github.com/biluohc",
    },
    {
      "name": "V2EX",
      "url": "https://www.v2ex.com/",
    },
    {
      "name": "知乎",
      "url": "https://www.zhihu.com/topic#",
    },
    {
      "name": "百度贴吧",
      "url":
        "http://tieba.baidu.com/home/main?id=155a7773707378696e678148&suofr=userbar",
    },
    {
      "name": "Deno",
      "url": "https://deno.land/",
    },
    {
      "name": "YouTube",
      "url": "https://www.youtube.com/",
    },
    {
      "name": "网易云",
      "url": "http://music.163.com/#",
    },
    {
      "name": "哔哩哔哩",
      "url": "http://www.bilibili.com/",
    },
    {
      "name": "谷歌翻译",
      "url": "https://translate.google.com/",
    },
    {
      "name": "搜狗翻译",
      "url": "https://fanyi.sogou.com/",
    },
    {
      "name": "京东商城",
      "url": "http://www.jd.com/",
    },
    {
      "name": "淘宝网",
      "url": "https://www.taobao.com/",
    },
    {
      "name": "亚马逊",
      "url": "http://www.amazon.cn/",
    },
    {
      "name": "谷歌图片",
      "url": "https://www.google.com/imghp?hl=zh-CN",
    },
    {
      "name": "百度图片",
      "url": "http://image.baidu.com/",
    },
    {
      "name": "TinEye",
      "url": "https://tineye.com/",
    },
    {
      "name": "搜狗图片",
      "url": "http://pic.sogou.com/ ",
    },
    {
      "name": "鸠摩搜索",
      "url": "https://www.jiumodiary.com/",
    },
    {
      "name": "点点文档",
      "url": "https://www.torrent.org.cn/bd",
    },
    {
      "name": "微米分享",
      "url": "https://www.dzsfx.com/",
    },
  ],
  "sites_tr_length": 5,
  "search_engines": [
    {
      "name": "谷歌",
      "url": "https://www.google.com/search",
      "query": "q",
    },
    {
      "name": "Duck",
      "url": "https://duckduckgo.com/",
      "query": "q",
    },
    {
      "name": "百度",
      "url": "https://www.baidu.com/s",
      "query": "word",
    },
    {
      "name": "必应",
      "url": "https://cn.bing.com/search",
      "query": "q",
    },
    {
      "name": "搜狗",
      "url": "https://www.sogou.com/web",
      "query": "query",
    },
    {
      "name": "GitHub",
      "url": "https://github.com/search?utf8=✓",
      "query": "q",
    },
    {
      "name": "openSUSE",
      "url": "https://software.opensuse.org/search?utf8=✓",
      "query": "q",
    },
  ],
  copy: function () {
    var tmp = {};
    tmp.sites = this.sites;
    tmp.sites_tr_length = this.sites_tr_length;
    tmp.search_engines = this.search_engines;
    return tmp;
  },
  update: function (new_sites_tr_length, new_sites, new_search_engines) {
    this.sites_tr_length = new_sites_tr_length;
    for (var index = 0; index < new_sites.length; index++) {
      this.sites.splice(index, 1, new_sites[index]);
    }
    this.sites.length = new_sites.length;
    for (var index = 0; index < new_search_engines.length; index++) {
      this.search_engines.splice(index, 1, new_search_engines[index]);
    }
    this.search_engines.length = new_search_engines.length;
  },
  save_config_to_localStorage: function () {
    var tmp = this.copy();
    tmp.date = new Date();
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(tmp));
    } catch (error) {
      console.log("save_config_to_localStorage_failed: ", error);
    }
  },
  read_config_from_localStorage: function () {
    var tmp = localStorage.getItem(localStorageKey);
    var tmp_json = JSON.parse(tmp);
    // 不够健壮，更多的判断？
    if (tmp_json !== undefined && tmp_json !== null && tmp_json.date) {
      this.update(
        tmp_json.sites_tr_length,
        tmp_json.sites,
        tmp_json.search_engines,
      );
      return true;
    }
  },
  bakeup: function () {
    this.rawJson = JSON.stringify(this.copy());
  },
  reset: function () {
    var tmp_json = JSON.parse(this.rawJson);
    this.update(
      tmp_json.sites_tr_length,
      tmp_json.sites,
      tmp_json.search_engines,
    );
    this.save_config_to_localStorage();
  },
};

OBJ.bakeup();

if (!OBJ.read_config_from_localStorage()) {
  OBJ.save_config_to_localStorage();
}

export default OBJ;
