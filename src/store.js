const localStorageKey = "Cloud-home-Page.Config"

const OBJ = {
  "sites": [
    {
      "name": "ArchWiki",
      "url": "https://wiki.archlinux.org/index.php/List_of_applications_%28%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%29"
    },
    {
      "name": "openSUSE",
      "url": "https://software.opensuse.org/421/zh_CN"
    },
    {
      "name": "suse.org.cn",
      "url": "https://forum.suse.org.cn/"
    },
    {
      "name": "维基百科",
      "url": "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5"
    },
    {
      "name": "CnBeta",
      "url": "http://www.cnbeta.com/"
    },
    {
      "name": "W3C",
      "url": "http://www.w3cschool.cn/"
    },
    {
      "name": "W3S",
      "url": "http://www.w3school.com.cn/index.html"
    },
    {
      "name": "MDN",
      "url": "https://developer.mozilla.org/zh-CN/"
    },
    {
      "name": "Vue.js",
      "url": "https://cn.vuejs.org/"
    },
    {
      "name": "Go",
      "url": "https://go-zh.org/doc/"
    },
    {
      "name": "動漫花園",
      "url": " https://share.dmhy.org/"
    },
    {
      "name": "Rust",
      "url": "https://www.rust-lang.org/zh-CN/documentation.html"
    },
    {
      "name": "crates.io",
      "url": "https://crates.io/"
    },
    {
      "name": "Docs.rs",
      "url": "https://docs.rs/"
    },
    {
      "name": "Rust.cc",
      "url": "https://rust.cc/"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/biluohc"
    },
    {
      "name": "V2EX",
      "url": "https://www.v2ex.com/"
    },
    {
      "name": "知乎",
      "url": "https://www.zhihu.com/"
    },
    {
      "name": "百度贴吧",
      "url": "http://tieba.baidu.com/home/main?id=155a7773707378696e678148&suofr=userbar"
    },
    {
      "name": "中关村",
      "url": "http://www.zol.com.cn/"
    },
    {
      "name": "YouTube",
      "url": "https://www.youtube.com/"
    },
    {
      "name": "网易云",
      "url": "http://music.163.com/#"
    },
    {
      "name": "哔哩哔哩",
      "url": "http://www.bilibili.com/"
    },
    {
      "name": "必应翻译",
      "url": " https://www.bing.com/translator"
    },
    {
      "name": "谷歌翻译",
      "url": "http://translate.google.cn/"
    },
    {
      "name": "京东商城",
      "url": "http://www.jd.com/"
    },
    {
      "name": "淘宝网",
      "url": "https://www.taobao.com/"
    },
    {
      "name": "亚马逊",
      "url": "http://www.amazon.cn/"
    },
    {
      "name": "谷歌图片",
      "url": "https://www.google.com/imghp?hl=zh-CN"
    },
    {
      "name": "百度图片",
      "url": "http://image.baidu.com/"
    },
    {
      "name": "TinEye",
      "url": "https://tineye.com/"
    },
    {
      "name": "搜狗图片",
      "url": "http://pic.sogou.com/ "
    },
    {
      "name": "网盘搜",
      "url": "http://www.wangpansou.cn/"
    },
    {
      "name": "盘搜搜",
      "url": "http://www.pansoso.com/#fromapp"
    },
    {
      "name": "淘林网",
      "url": "http://www.cntaolin.com/"
    }
  ],
  "sites_tr_length": 5,
  "search_engines": [
    {
      "name": "百度",
      "url": "https://www.baidu.com/s",
      "query": "word"
    },
    {
      "name": "必应",
      "url": "https://cn.bing.com/search",
      "query": "q"
    },
    {
      "name": "谷歌",
      "url": "https://www.google.com/search",
      "query": "q"
    },
    {
      "name": "Duck",
      "url": "https://duckduckgo.com/",
      "query": "q"
    },
    {
      "name": "搜狗",
      "url": "https://www.sogou.com/web",
      "query": "query"
    }
  ],
  copy: function () {
    var tmp = {}
    tmp.sites = JSON.parse(JSON.stringify(this.sites))
    for (var index = 0; index < tmp.sites.length; index++) {
      delete tmp.sites[index].class_
    }
    tmp.sites_tr_length = this.sites_tr_length
    tmp.search_engines = this.search_engines
    return tmp
  },
  update: function (new_sites_tr_length, new_sites, new_search_engines) {
    this.sites_tr_length = new_sites_tr_length
    for (var index = 0; index < new_sites.length; index++) {
      this.sites.splice(index, 1, new_sites[index])
    }
    for (var index = 0; index < new_search_engines.length; index++) {
      this.search_engines.splice(index, 1, new_search_engines[index])
    }
  },
  save_config_to_localStorage: function () {
    var tmp = this.copy()
    tmp.date = new Date()
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(tmp))
    } catch (error) {
      console.log("save_config_to_localStorage_failed: ", error)
    }
  },
  read_config_from_localStorage: function () {
    var tmp = localStorage.getItem(localStorageKey)
    var tmp_json = JSON.parse(tmp)
    // 不够健壮，更多的判断？
    if (tmp_json !== undefined && tmp_json !== null && tmp_json.date) {
      this.update(tmp_json.sites_tr_length, tmp_json.sites, tmp_json.search_engines)
      return true
    }
  }
}

if (!OBJ.read_config_from_localStorage()) {
  OBJ.save_config_to_localStorage()
}

export default OBJ
