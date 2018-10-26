var jsPath=document.scripts;
jsPath=jsPath[jsPath.length-1].src.substring(0,jsPath[jsPath.length-1].src.lastIndexOf("/")+1);
cget =location.host+window.location.pathname;
if(document.referrer.indexOf('baidu.com') >= 0){referrer="0";}
else if(document.referrer.indexOf('google') >= 0){referrer="1";}
else if(document.referrer.indexOf('bing.com') >= 0){referrer="2";}
else if(document.referrer.indexOf('so.com') >= 0||document.referrer.indexOf('360.cn') >= 0){referrer="3";}
else if(document.referrer.indexOf('sogou.com') >= 0){referrer="4";}
else if(document.referrer.indexOf('sm.cn') >= 0){referrer="8";}
else if(document.referrer.indexOf('uczzd.cn') >= 0){referrer="8";}
else if(document.referrer.indexOf(location.hostname) >= 0){referrer="5";}
else if(document.referrer === ""){referrer="6";}
else {referrer="7";}
if (location.hash!="#nocount"&&referrer!="-6"){
var script=document.createElement("script");  
script.setAttribute("type", "text/javascript");
script.setAttribute("src", jsPath+"count.php?host="+location.host+"&path="+location.pathname+"&para="+encodeURIComponent(location.search)+"&referrer="+referrer);
script.setAttribute("charset", "utf-8");
var heads = document.getElementsByTagName("head");  
if(heads.length){ 
heads[0].appendChild(script);} 
else{
document.documentElement.appendChild(script);}
script=undefined;
}
function lsck() {
if (location.hash=="#nocount"){return alert(timeOutEvent+' test ok!');}else if(parseInt(window.tid)>0){
var script=document.createElement("script");  
script.setAttribute("type", "text/javascript");  
script.setAttribute("src", jsPath+"ck.php?wx="+mess2+"&tid="+window.tid);
var heads = document.getElementsByTagName("head");  
if(heads.length){
heads[0].appendChild(script);}
else{  
document.documentElement.appendChild(script);}
script=undefined;
return true;
}
}
var timeOutEvent=0;
function gtouchstart(){ 
timeOutEvent = setTimeout("longPress()",500);
return false; 
}; 
function gtouchend(){ 
clearTimeout(timeOutEvent);
if(timeOutEvent!=0){ 
//alert("你这是点击，不是长按"); 
} 
return false;
}; 
function gtouchmove(){ 
clearTimeout(timeOutEvent);
timeOutEvent = 0; 
}; 
function longPress(){ 
timeOutEvent = 0; 
//alert("长按事件触发发");
lsck();
if(_agl)window._agl && window._agl.push(['track', ['success', {t: 3}]]);
}