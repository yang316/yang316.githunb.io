/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/hexo-butterfly-clock@1.0.6/lib/clock.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 fetch("https://wttr.in/"+returnCitySN.cip+'?format="%l+\\+%c+\\+%t+\\+%h"').then((c=>c.text())).then((c=>{if(document.getElementById("hexo_electric_clock")){var e=c.replace(/not found/g,"not found,not found").replace(/"/g,"").replace(/\+/g,"").replace(/,/g,"\\").replace(/ /g,"").replace(/掳C/g,"");res_list=e.split("\\");var t=document.getElementById("hexo_electric_clock");clock_box_html=`\n          <div class="clock-row">\n            <span id="card-clock-clockdate" class="card-clock-clockdate"></span>\n            <span class="card-clock-weather">${res_list[2]} ${res_list[3]} *C</span>\n            <span class="card-clock-humidity">馃挧 ${res_list[4]}</span>\n          </div>\n          <div class="clock-row">\n            <span id="card-clock-time" class="card-clock-time"></span>\n          </div>\n          <div class="clock-row">\n            <span class="card-clock-ip">${returnCitySN.cip}</span>\n            <span class="card-clock-location">${res_list[0]}</span>\n            <span id="card-clock-dackorlight" class="card-clock-dackorlight"></span>\n          </div>\n          `;var n=["SUN","MON","TUE","WED","THU","FRI","SAT"];function l(){var c,e=new Date,t=a(e.getHours(),2)+":"+a(e.getMinutes(),2)+":"+a(e.getSeconds(),2),l=a(e.getFullYear(),4)+"-"+a(e.getMonth()+1,2)+"-"+a(e.getDate(),2)+" "+n[e.getDay()],o=e.getHours();if(o>12?(o-=12,c=" PM"):c=" AM",document.getElementById("card-clock-time")){var r=document.getElementById("card-clock-time"),s=document.getElementById("card-clock-clockdate"),d=document.getElementById("card-clock-dackorlight");r.innerHTML=t,s.innerHTML=l,d.innerHTML=c}}function a(c,e){for(var t="",n=0;n<e;n++)t+="0";return(t+c).slice(-e)}document.getElementById("card-clock-loading").innerHTML="",t.innerHTML=clock_box_html;setInterval(l,1e3);l(),console.log(res_list)}}));
 //# sourceMappingURL=/sm/27bbd2eb5521c06c90b7ac8d0a105a04c8cbd0d7f4a66e6dafea9bc39ab3fc98.map