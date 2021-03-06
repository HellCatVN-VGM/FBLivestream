function openCbox() {
    var a = document.getElementById("conversions-box");
    a.setAttribute("class", "conversions-box-open"), document.getElementById("conversions-box-close").onclick = function() {
        return closeCbox(), !1 } }

function getCookie(a) {
    var b, c, d, e = document.cookie.split(";");
    for (b = 0; b < e.length; b++)
        if (c = e[b].substr(0, e[b].indexOf("=")), d = e[b].substr(e[b].indexOf("=") + 1), c = c.replace(/^\s+|\s+$/g, ""), c == a) return unescape(d) }

function closeCbox() {
    var a = document.getElementById("conversions-box");
    a.setAttribute("class", "");
    var b = "conversionbox_closed",
        c = !0,
        d = 30,
        e = new Date;
    e.setDate(e.getDate() + d);
    var f = escape(c) + (null == d ? "" : "; expires=" + e.toUTCString());
    document.cookie = b + "=" + f + ";path=/;domain=." + document.location.hostname }
var css = "@media screen and (max-width: 420px) {#conversions-box{display:none}}#conversions-box{background:rgba(0,0,0,0.8);position:fixed;z-index:9999;bottom:-95px;left:10px;color:#fff;font-size:13px;font-weight:700;font-family:Arial, sans-serif;border-radius:3px;transition:all .5s ease-out;padding:5px 35px 32px 15px}#conversions-box-close{box-sizing: content-box;}#conversions-box.conversions-box-open{bottom:10px}#conversions-box span{min-width: 100px;display: block;text-align: center;}#conversions-box iframe{position:absolute;left:50%;margin-left:-40px;top:32px}#conversions-box-close{position:absolute;top:10px;right:10px;background-image:url(https://i.imgur.com/KSL6NsA.png);background-size:16px 32px;width:9px;height:9px;text-decoration:none;padding:4px;}#conversions-box-close:hover{background-position:0 -16px;}@media only screen and -webkit-min-device-pixel-ratio 15,only screen and min--moz-device-pixel-ratio 15,only screen and -o-min-device-pixel-ratio 32,only screen and device-pixel-ratio 15,only screen and min-resolution 15dppx}}",
    ConversionsBox = function(a, b, c) {
        if (!getCookie("conversionbox_closed")) {
            var d = document.createElement("style");
            d.setAttribute("type", "text/css"), d.innerHTML = css, document.getElementsByTagName("head")[0].appendChild(d);
            var e = document.createElement("div");
            e.setAttribute("id", "conversions-box");
            var f = "http://",
                g = "https://";
            b.substr(0, f.length) !== f && b.substr(0, g.length) !== g && (b = f + b), document.getElementsByTagName("body")[0].appendChild(e), document.getElementById("conversions-box").innerHTML = '<a href="#" id="conversions-box-close"></a><span>' + decodeURIComponent(a) + '</span><iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(b) + '&amp;send=false&amp;layout=button_count&amp;width=95&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21&amp;appId=231274287282509" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:95px; height:21px;" allowTransparency="true"></iframe>', "hide-info" == c && document.getElementById("conversions-box-info").setAttribute("style", "display:none");
            var h, i = Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight)),
                j = window,
                k = document,
                l = k.documentElement,
                m = k.getElementsByTagName("body")[0],
                o = (j.innerWidth || l.clientWidth || m.clientWidth, j.innerHeight || l.clientHeight || m.clientHeight),
                p = !1;
            o == i && (setTimeout("openCbox();", 3e3), p = !0);
            var q = i / 100 * 10;
            0 == p && (window.onscroll = function() {
                var b = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
                h = document.all ? b : window.pageYOffset, h >= q && (openCbox(), window.onscroll = !1), o + h >= i && (openCbox(), window.onscroll = !1) }) } };
