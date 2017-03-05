webpackJsonp([4],{0:function(t,e,r){(function(t,e){"use strict";var o=function(){function t(t,e){var r=[],o=!0,a=!1,l=void 0;try{for(var n,i=t[Symbol.iterator]();!(o=(n=i.next()).done)&&(r.push(n.value),!e||r.length!==e);o=!0);}catch(c){a=!0,l=c}finally{try{!o&&i["return"]&&i["return"]()}finally{if(a)throw l}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r(45),r(7),r(49),t.locale("zh-tw"),t.updateLocale("zh-tw",{relativeTime:{m:"1分鐘",h:"1小時",d:"1天",M:"1個月",y:"1年"}}),e(function(){function t(t){if(!t)return!1;e("#loading").show();var r="/json/{{filename}}.json?raw=1";r=r.replace("{{filename}}",t),e.getJSON(r).then(function(t){e("#bsTable").bootstrapTable("load",t),e("#loading").hide()})}var r=window.location.hash.substr(1);e(".bsTable").on("load-success.bs.table",function(t,o){r&&e(".bootstrap-table .search input").val(r).trigger("keyup")}),e(".bsTable").on("click-row.bs.table",function(t,r,o){o.next().is("tr.detail-view")?e(this).bootstrapTable("collapseRow",o.data("index")):e(this).bootstrapTable("expandRow",o.data("index"))}),e("#filter button").click(function(){e(this).data("type")&&e("#filter button[data-type]").removeClass("btn-primary").filter(this).addClass("btn-primary"),e(this).data("group")&&e("#filter button[data-group]").removeClass("btn-success").filter(this).addClass("btn-success");var r=e("#filter button.btn-primary[data-type]").data("type"),o=e("#filter button.btn-success[data-group]").data("group"),a="valid"==r?o:o+"-expire";t(a)}),google.maps.event.addDomListener(window,"load",function(){var t=new google.maps.Geocoder,r=function(e,r,o){var a=new google.maps.LatLng(e,r);t.geocode({latLng:a},function(t,e){if(e===google.maps.GeocoderStatus.OK&&t){var r=t[0].formatted_address,a=t[0].address_components;if(a.length>4){a.shift(),a.pop();var l="TW"==a[a.length-1].short_name?"":", ";r=a.reverse().map(function(t){return t.long_name}).join(l)}return void o(r)}o("")})};e("body").on("mouseover","a.latlng",function(){var t=e(this),a=e(this).data("latlng").split(","),l=o(a,2),n=l[0],i=l[1];r(n,i,function(e){t.attr("title",e+(" ("+t.data("latlng")+")"))})})})})}).call(e,r(3),r(1))},6:function(t,e,r){(function(t){"use strict";var r='\t\t<svg width="{{width}}" height="{{height}}" viewBox="{{viewBox}}" xmlns="http://www.w3.org/2000/svg">\t\t\t{{path}}\t\t\t<text x="{{textOffsetX}}" y="{{textOffsetY}}"\t\t\t\tfill="{{textColor}}" text-anchor="middle" \t\t\t\tstyle="font-size:{{textSize}}px; font-weight: bolder; text-shadow: 1px 1px 0px #333, -1px -1px 0px #333, 1px -1px 0px #333, -1px 1px 0px #333;">\t\t\t\t{{text}}\t\t\t</text>\t\t</svg>',o={width:30,height:30,viewBox:"0 0 30 30",path:"",text:{offset:{x:15,y:15},color:"#FFFFFF",size:35,value:""},strokeColor:"#4F595D"},a=function(e){var a=t.extend(!0,{},o,e),l=r.replace(/{{width}}/g,a.width).replace(/{{height}}/g,a.height).replace(/{{viewBox}}/g,a.viewBox).replace(/{{path}}/g,a.path).replace(/{{textOffsetX}}/g,a.text.offset.x).replace(/{{textOffsetY}}/g,a.text.offset.y).replace(/{{textColor}}/g,a.text.color).replace(/{{textSize}}/g,a.text.size).replace(/{{text}}/g,a.text.value);return l},l=function(t){return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(t)};e.getCircleUrl=function(t,e){var r=(arguments.length<=2||void 0===arguments[2]?40:arguments[2],2),n=o.strokeColor,i=t,c='\t\t\t<circle r="40" stroke="{{strokeColor}}" stroke-width="{{strokeWidth}}" fill="{{fillColor}}" />\t\t';c=c.replace(/{{strokeWidth}}/g,r).replace(/{{strokeColor}}/g,n).replace(/{{fillColor}}/g,i);var s={viewBox:"-45 -45 90 90",path:c,text:{offset:{x:0,y:13},value:e}},p=a(s);return l(p)},e.getHomeUrl=function(t,e){var r=1,n=o.strokeColor,i=t,c='\t\t\t<g fill="{{fillColor}}" stroke="{{strokeColor}}" stroke-width="{{strokeWidth}}" >\t\t\t\t<path d="M33.609,20.96v12.384c0,1.104-0.896,2-2,2H7.805c-1.104,0-2-0.896-2-2V20.96c0-0.69,0.355-1.332,0.94-1.696l11.901-7.433\t\t\t\t\tc0.648-0.405,1.472-0.405,2.119,0l11.901,7.433C33.253,19.628,33.609,20.269,33.609,20.96z M38.475,15.432L20.768,4.374\t\t\t\t\tc-0.648-0.405-1.471-0.405-2.119,0L0.94,15.432c-0.937,0.585-1.221,1.819-0.637,2.756c0.584,0.938,1.816,1.224,2.756,0.638\t\t\t\t\tL19.707,8.428l16.646,10.396c0.33,0.206,0.695,0.304,1.059,0.304c0.667,0,1.318-0.333,1.697-0.941\t\t\t\t\tC39.695,17.249,39.41,16.017,38.475,15.432z"/>\t\t\t</g>\t\t';c=c.replace(/{{strokeWidth}}/g,r).replace(/{{strokeColor}}/g,n).replace(/{{fillColor}}/g,i);var s={viewBox:"-2 -2 44 44",path:c,text:{offset:{x:20,y:32},size:14,value:e}},p=a(s);return l(p)},e.getCloudUrl=function(t,e){var r=15,n=o.strokeColor,i=t,c='\t\t\t<g fill="{{fillColor}}" stroke="{{strokeColor}}" stroke-width="{{strokeWidth}}">\t\t\t\t<path d="M62.513,153.087c-0.009-0.525-0.02-1.049-0.02-1.575c0-50.155,40.659-90.814,90.814-90.814\t\t\t\tc43.222,0,79.388,30.196,88.562,70.643c8.555-4.789,18.409-7.531,28.91-7.531c32.766,0,59.328,26.562,59.328,59.328\t\t\t\tc0,1.339-0.06,2.664-0.148,3.981c24.325,9.03,41.661,32.444,41.661,59.911c0,35.286-28.605,63.892-63.892,63.892H79.865\t\t\t\tC35.757,310.921,0,275.164,0,231.056C0,192.907,26.749,161.011,62.513,153.087z"/>\t\t\t</g>\t\t';c=c.replace(/{{strokeWidth}}/g,r).replace(/{{strokeColor}}/g,n).replace(/{{fillColor}}/g,i);var s={viewBox:"-20 -20 420 420",path:c,text:{offset:{x:190,y:290},size:140,value:e}},p=a(s);return l(p)},e.getFactoryUrl=function(t,e){var r=10,n=o.strokeColor,i=t,c='\t\t\t<path fill="{{fillColor}}" stroke="{{strokeColor}}" stroke-width="{{strokeWidth}}" \t\t\td="M499.669,495.616C406.528,348.416,373.333,159.595,373.333,32c0-28.885-85.781-32-122.667-32C213.781,0,128,3.115,128,32\t\t\tc0,104.875-15.04,304.555-115.669,463.616c-2.091,3.285-2.219,7.445-0.341,10.859c1.877,3.413,5.461,5.525,9.344,5.525h469.333\t\t\tc3.883,0,7.467-2.112,9.344-5.525S501.76,498.923,499.669,495.616z M343.403,32.853c-0.747,0.235-1.429,0.469-2.24,0.683\t\t\tc-2.091,0.597-4.459,1.195-7.061,1.771c-0.491,0.107-0.875,0.213-1.365,0.32c-3.2,0.683-6.784,1.365-10.688,2.005\t\t\tc-1.003,0.171-2.176,0.32-3.221,0.469c-3.008,0.469-6.187,0.896-9.579,1.323c-1.6,0.192-3.285,0.363-4.971,0.555\t\t\tc-3.221,0.341-6.592,0.661-10.112,0.96c-1.941,0.149-3.883,0.32-5.909,0.448c-3.797,0.256-7.829,0.469-11.947,0.661\t\t\tc-1.963,0.085-3.84,0.192-5.867,0.256c-6.272,0.213-12.8,0.341-19.755,0.341c-6.955,0-13.483-0.128-19.755-0.341\t\t\tc-2.027-0.064-3.904-0.171-5.867-0.256c-4.117-0.192-8.149-0.384-11.947-0.661c-2.027-0.149-3.989-0.299-5.909-0.448\t\t\tc-3.52-0.299-6.891-0.597-10.112-0.96c-1.685-0.171-3.371-0.363-4.971-0.555c-3.392-0.405-6.571-0.853-9.579-1.323\t\t\tc-1.045-0.171-2.219-0.32-3.221-0.469c-3.904-0.64-7.488-1.323-10.688-2.005c-0.512-0.107-0.875-0.213-1.365-0.32\t\t\tc-2.603-0.576-4.992-1.173-7.061-1.771c-0.811-0.235-1.493-0.469-2.24-0.683c-0.981-0.299-1.813-0.597-2.645-0.896\t\t\tc13.803-4.864,46.037-10.624,95.381-10.624s81.536,5.76,95.339,10.624C345.216,32.256,344.384,32.555,343.403,32.853z"/>\t\t';c=c.replace(/{{strokeWidth}}/g,r).replace(/{{strokeColor}}/g,n).replace(/{{fillColor}}/g,i);var s={viewBox:"-94 -94 680 680",path:c,text:{offset:{x:256,y:480},size:200,value:e}},p=a(s);return l(p)}}).call(e,r(1))},7:function(t,e){},36:function(t,e,r){(function(e){"use strict";var o=r(6);t.exports={formatter:{sn:function(t,e,r){return 1+r},location:function(t,e,r){var o="/@"+t.lat+","+t.lng,a=[t.lat,t.lng].join(", ");return['<a href="'+o+'" class="latlng" target="_blank" data-latlng="'+a+'">','<span class="glyphicon glyphicon-map-marker"></span>',"</a>"].join("")},detail:function(t,e,r){return["<div class='col-sm-6'>",bsTable.generate.table("Data",["Index","Value"],e.Data),"</div>","<div class='col-sm-6'>",bsTable.generate.table("RawData",["Index","Value"],e.RawData),"</div>"].join("")},updateTime:function(t){var r=e(t).fromNow(),o=e(t).format("YYYY-MM-DD HH:mm");return'<span title="'+o+'"><span class="glyphicon glyphicon-time"></span> '+r+"</span>"},siteName:function(t,e){var r="/site#"+e.SiteGroup+"$"+e.uniqueKey;return"<a href='"+r+"' target='_blank'><span class='glyphicon glyphicon-bookmark'></span> "+t+"</a>"},ranking:function(t){if(null==t)return"";for(var e=[],r='<span class="glyphicon glyphicon-{{icon}}"></span>',o=1;o<=5;o++)e.push(r.replace("{{icon}}",o<=t?"star":"star-empty"));return e.join("")},status:function(t){if(null===t)return"";var e='<img src="{{url}}" title="{{hint}}" />',r={indoor:"可能放置於室內或設備故障",longterm:"可能接近長時間的固定污染源或設備故障",shortterm:"偵測到小型污染源"},a="#333",l="",n=[];return t.indexOf("indoor")>-1&&n.push(e.replace("{{url}}",o.getHomeUrl(a,l)).replace("{{hint}}",r.indoor)),t.indexOf("longterm-pollution")>-1&&n.push(e.replace("{{url}}",o.getFactoryUrl(a,l)).replace("{{hint}}",r.longterm)),t.indexOf("shortterm-pollution")>-1&&n.push(e.replace("{{url}}",o.getCloudUrl(a,l)).replace("{{hint}}",r.shortterm)),n.join("")}},generate:{table:function(t,e,r){var o="<tr><th>"+e.join("</th><th>")+"</th></tr>",a="";for(var l in r){var n=r[l];a+=["<tr>","<th>"+l+"</th>","<td>"+n+"</td>","</tr>"].join("")}return['<div class="panel panel-info">','<div class="panel-heading">',t,"</div>","<table class='table table-striped'>","<thead>",o,"</thead>","<tbody>",a,"</tbody>","</table>","</div>"].join("")}}}}).call(e,r(3))},45:function(t,e,r){(function(e){t.exports=e.bsTable=r(36)}).call(e,function(){return this}())},49:function(t,e){}});
//# sourceMappingURL=list.js.map