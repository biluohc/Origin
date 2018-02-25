function list_urls() {
    var eles = [
        // ["搜狗搜索", "https://www.sogou.com/"],
        // ["谷歌搜索", "https://www.google.com/ncr"],
        // ["Duck", "https://duckduckgo.com/"],
        // ["微软必应", "https://cn.bing.com/"],

        ["ArchWiKi", "https://wiki.archlinux.org/index.php/List_of_applications_%28%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%29"],
        ["openSUSE", "https://software.opensuse.org/421/zh_CN"],
        ["维基百科", "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5"],
        ["CnBeta", "http://www.cnbeta.com/"],

        ["W3C", "http://www.w3cschool.cn/"],
        ["W3S", "http://www.w3school.com.cn/index.html"],
        ["Go", "https://go-zh.org/doc/"],
        ["Docs.rs", "https://docs.rs/"],

        ["GitHub", "https://github.com/biluohc"],
        ["V2EX", "https://www.v2ex.com/"],
        ["知乎", "https://www.zhihu.com/"],
        ["百度贴吧", "http://tieba.baidu.com/home/main?id=155a7773707378696e678148&suofr=userbar"],

        ["YouTube", "https://www.youtube.com/"],
        ["AcFun", "http://www.acfun.tv/"],
        ["网易云", "http://music.163.com/#"],
        ["哔哩哔哩", "http://www.bilibili.com/"],

        ["京东商城", "http://www.jd.com/"],
        ["淘宝网", "https://www.taobao.com/"],
        ["亚马逊", "http://www.amazon.cn/"],
        ["中关村", "http://www.zol.com.cn/"],

        ["百度图片", "http://image.baidu.com/"],
        ["网盘搜", "http://www.wangpansou.cn/"],
        ["盘搜搜", "http://www.pansoso.com/#fromapp"],
        ["淘林网", "http://www.cntaolin.com/"],


        ["谷歌翻译", "http://translate.google.cn/"],
        ["谷歌图片", "https://www.google.com/imghp?hl=zh-CN"],
        ["TinEye", "https://tineye.com/"],
        ["搜狗图片", "http://pic.sogou.com/ "],
    ];

    //transparent  透明
    var colorf0 = "red";
    var colorf1 = "blue";
    var colorb0 = "transparent";
    var colorb1 = "transparent";
    var fontcolor = colorb0;

    var style0 = "style=\"width:20%;" + "color:" + colorf0 + ";border:1px solid " + colorf0 + ";\"";
    var style1 = "style=\"width:20%;" + "color:" + colorf1 + ";border:1px solid " + colorf1 + ";\"";
    var astyle = style0;

    //表头，表格版  width表行的宽度,frame表四条边框,all所有元素的边框 style的设置不会被多数浏览器忽视
    var urls = "<table frame=\"box\" rules=\"all\" cellspacing=\"6\" style=\"color:#0099CC; text-align:left; font-size:48px; font-weight:bold; margin-left:3%; width:80%; height:70%;text-align:center;border:1px solid red;empty-cells:hide;\"><tbody>";

    //表身
    for (i = 0; i < eles.length; i++) {
        // 单元格点击支持+元素点击支持
        urls += "<td " + astyle + " onclick=\"window.location.href='" + eles[i][1] + "';\">" + "<a style=\"text-decoration:none;\"" + "href=\"" + eles[i][1] + "\">" + eles[i][0] + "</a> </td>";
        if ((i + 1) % 4 === 0) {
            urls += "</tr> <tr>";
            if (astyle == style0) {
                astyle = style1;
            } else {
                astyle = style0;
            }
        }
    }
    //表尾
    urls = urls + "</tbody></table>";
    document.getElementById("url").innerHTML = urls;
}

function se_rewrite(se_value, input_value) {
    //form表单
    var form0 = "<form action=\"";
    // action 是搜索引擎链接
    var form1 = "\" method=\"get\" target=\"_self\" align=\"middle\" style=\"background-color:transparent; text-align:left; font-size:32px; font-weight:bold; margin-left:8%; width:90%; height:70%;text-align:center;border:1px solid transparent;empty-cells:hide;\">";

    //input 表单
    var input0 = "<input type=\"text\" name=\"";
    // name 是搜索引擎关键词参数    
    var input1 = "\" value=\"";
    //  input_value 是搜索框原有值
    var input2 = "\" autofocus=\"autofocus\" maxlength=\"64\" size=\"86\" id=\"input\" style=\"background-color:transparent;width:60%;height:20%;font-size:32px; font-weight:bold;\">";

    //option表单
    var option0 = "<select id = \"se\" style=\"background-color:transparent; font-size:32px; font-weight:bold; width:6%; height:20%;\" onchange=\"se_change()\">";
    // option下拉表单seletc的内容
    var option1 = "</select>";
    //submit 按钮表单
    var submit0 = "<input type=\"submit\" value=\"搜索\" style=\"background-color:transparent;width:10%;height:20%;font-size:32px; font-weight:bold;\">";
    //form表单闭合
    var form2 = "</form>";

    //搜索引擎，链接，keyword，名字；顺序排列,第一个为默认值
    var sr = [
        ["baidu", "https://www.baidu.com/s", "word", "百度"],
        ["bing", "https://cn.bing.com/search", "q", "必应"],
        ["google", "https://www.google.com/search", "q", "谷歌"],
        ["duck", "https://duckduckgo.com/", "q", "Duck"],
        ["sogou", "https://www.sogou.com/web", "query", "搜狗"],
    ];

    //option 列表 key-value对象
    var so = {};
    for (var i = 0; i < sr.length; i++) {
        var tmp = sr[i][0];
        so[tmp] = sr[i];
    }
    var ops = "";
    var first_index;
    for (var i = 0; i < sr.length; i++) {
        if (sr[i][0] === se_value) {
            first_index = i;
            continue;
        }
        ops += "<option value=\"" + sr[i][0] + "\">" + sr[i][3] + "</option>";
    }
    //选中的搜索引擎
    if (first_index !== undefined) {
        ops = "<option value=\"" + sr[first_index][0] + "\">" + sr[first_index][3] + "</option>" + ops;
    }

    var the_value = (se_value === "") ? so[sr[0][0]] : so[se_value];
    //保留原搜索框的值
    return form0 + the_value[1] + form1 + input0 + the_value[2] + input1 + input_value + input2 + option0 + ops + option1 + submit0 + form2;

}


function se_change() {
    //null是未定义，undefined是未初始化
    //取得原有搜索引擎值
    var object_SE = document.getElementById("se");
    var se_value = (object_SE === null) ? "" : object_SE.options[object_SE.selectedIndex].value;

    //取得原有INPUT值
    var object_INPUT = document.getElementById("input");
    var input_value = (object_INPUT === null) ? "" : object_INPUT.value;
    // alert(se_value + "||" + input_value);

    var the_write = se_rewrite(se_value, input_value);
    document.getElementById("form").innerHTML = the_write;

    //给予input文本框元素焦点。html5 input 的autofocus只在载入页面时触发
    document.getElementById('input').focus();
}

function data_show() {
    function get_hour(n) {
        var hour = (n < 13) ? "上午" : "下午";
        n = (hour === "上午") ? n : n - 12;
        return hour + " " + n;
    }

    function get_minute(minute) {
        return (minute < 10) ? "0" + minute : "" + minute;
    }
    //定义星期的描述
    var week_day = ["日", "一", "二", "三", "四", "五", "六"];
    //取得当前日期对象
    var now = new Date();
    //定义需要显示的字符串: 年，月，日，星期...
    //getFullYear() getMonth getDate getDay getHours getMinutes getSeconds
    var msg = (now.getMonth() + 1) + "月" + now.getDate() + "日 星期" + week_day[now.getDay()] + " " + get_hour(now.getHours()) + ":" + get_minute(now.getMinutes());
    document.getElementById("head1").innerHTML = msg;

}

//初始化搜索引擎
se_change();
//排列URLs
list_urls();

//初始化日期
data_show();
setInterval("data_show()", 1000); //1*1000毫秒更新