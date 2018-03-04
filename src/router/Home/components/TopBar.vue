<template>
<div>
    <h1>
      <span align="center" class="h1">{{ datetime }}</span>
      <span align="right" ><router-link to="/editor"><button>Editor</button></router-link></span>            
    </h1>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      datetime: "Cloud home Page"
    };
  },
  methods: {
    datetime_string: function() {
      function get_hour(n) {
        var hour = n < 13 ? "上午" : "下午";
        n = hour === "上午" ? n : n - 12;
        return hour + " " + n;
      }
      function get_minute(minute) {
        return minute < 10 ? "0" + minute : "" + minute;
      }
      //定义星期的描述
      var week_day = ["日", "一", "二", "三", "四", "五", "六"];
      //取得当前日期对象
      var now = new Date();
      //定义需要显示的字符串: 年，月，日，星期...
      //getFullYear() getMonth getDate getDay getHours getMinutes getSeconds
      return (
        now.getMonth() +
        1 +
        "月" +
        now.getDate() +
        "日 星期" +
        week_day[now.getDay()] +
        " " +
        get_hour(now.getHours()) +
        ":" +
        get_minute(now.getMinutes())
      );
    },
    datetime_update: function() {
      this.datetime = this.datetime_string();
    }
  },
  created: function() {
    setInterval(this.datetime_update, 500);
    this.datetime_update;
  }
};
</script>

<style>
.h1 {
  color: #666600;
  font-size: 49px;
}
</style>
