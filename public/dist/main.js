/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),
A={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=
g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,
e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+
k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

"use strict";!function(a){var b=a.module("datePicker",[]);b.constant("datePickerConfig",{template:"templates/datepicker.html",view:"month",views:["year","month","date","hours","minutes"],step:5}),b.filter("time",function(){function a(a){return("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)}return function(b){return b instanceof Date||(b=new Date(b),!isNaN(b.getTime()))?a(b):void 0}}),b.directive("datePicker",["datePickerConfig","datePickerUtils",function(b,c){return{require:"?ngModel",template:'<div ng-include="template"></div>',scope:{model:"=datePicker",after:"=?",before:"=?"},link:function(d,e,f,g){function h(){var a=d.view;d.model&&!j&&(d.date=new Date(d.model),j=!1);var b=d.date;switch(a){case"year":d.years=c.getVisibleYears(b);break;case"month":d.months=c.getVisibleMonths(b);break;case"date":d.weekdays=d.weekdays||c.getDaysOfWeek(),d.weeks=c.getVisibleWeeks(b);break;case"hours":d.hours=c.getVisibleHours(b);break;case"minutes":d.minutes=c.getVisibleMinutes(b,k)}}function i(){return"date"!==d.view?d.view:d.date?d.date.getMonth():null}var j=!1;d.date=new Date(d.model||new Date),d.views=b.views.concat(),d.view=f.view||b.view,d.now=new Date,d.template=f.template||b.template;var k=parseInt(f.step||b.step,10),l=!!f.partial;if(g){if(a.isDefined(f.minDate)){var m;g.$validators.min=function(b){return!c.isValidDate(b)||a.isUndefined(m)||b>=m},f.$observe("minDate",function(a){m=new Date(a),g.$validate()})}if(a.isDefined(f.maxDate)){var n;g.$validators.max=function(b){return!c.isValidDate(b)||a.isUndefined(n)||n>=b},f.$observe("maxDate",function(a){n=new Date(a),g.$validate()})}}d.views=d.views.slice(d.views.indexOf(f.maxView||"year"),d.views.indexOf(f.minView||"minutes")+1),(1===d.views.length||-1===d.views.indexOf(d.view))&&(d.view=d.views[0]),d.setView=function(a){-1!==d.views.indexOf(a)&&(d.view=a)},d.setDate=function(a){if(!f.disabled){d.date=a;var b=d.views[d.views.indexOf(d.view)+1];if(!b||l||d.model){d.model=new Date(d.model||a),g&&g.$setViewValue(d.date);var c=l?"minutes":d.view;switch(c){case"minutes":d.model.setMinutes(a.getMinutes());case"hours":d.model.setHours(a.getHours());case"date":d.model.setDate(a.getDate());case"month":d.model.setMonth(a.getMonth());case"year":d.model.setFullYear(a.getFullYear())}d.$emit("setDate",d.model,d.view)}b&&d.setView(b),b||"true"!==f.autoClose||(e.addClass("hidden"),d.$emit("hidePicker"))}},d.$watch(i,h),d.next=function(a){var b=d.date;switch(a=a||1,d.view){case"year":case"month":b.setFullYear(b.getFullYear()+a);break;case"date":b.setMonth(b.getMonth()+a);break;case"hours":case"minutes":b.setHours(b.getHours()+a)}j=!0,h()},d.prev=function(a){return d.next(-a||-1)},d.isAfter=function(a){return d.after&&c.isAfter(a,d.after)},d.isBefore=function(a){return d.before&&c.isBefore(a,d.before)},d.isSameMonth=function(a){return c.isSameMonth(d.model,a)},d.isSameYear=function(a){return c.isSameYear(d.model,a)},d.isSameDay=function(a){return c.isSameDay(d.model,a)},d.isSameHour=function(a){return c.isSameHour(d.model,a)},d.isSameMinutes=function(a){return c.isSameMinutes(d.model,a)},d.isNow=function(a){var b=!0,c=d.now;switch(d.view){case"minutes":b&=~~(a.getMinutes()/k)===~~(c.getMinutes()/k);case"hours":b&=a.getHours()===c.getHours();case"date":b&=a.getDate()===c.getDate();case"month":b&=a.getMonth()===c.getMonth();case"year":b&=a.getFullYear()===c.getFullYear()}return b}}}}]),a.module("datePicker").factory("datePickerUtils",function(){return{getVisibleMinutes:function(a,b){a=new Date(a||new Date),a=new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours());for(var c=[],d=a.getTime()+36e5;a.getTime()<d;)c.push(a),a=new Date(a.getTime()+60*b*1e3);return c},getVisibleWeeks:function(a){a=new Date(a||new Date);var b=a.getMonth(),c=a.getYear();a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0),a.setDate(0===a.getDay()?-5:a.getDate()-(a.getDay()-1)),1===a.getDate()&&a.setDate(-6);for(var d=[];d.length<6&&!(a.getYear()===c&&a.getMonth()>b);){for(var e=[],f=0;7>f;f++)e.push(new Date(a)),a.setDate(a.getDate()+1);d.push(e)}return d},getVisibleYears:function(a){var b=[];a=new Date(a||new Date),a.setFullYear(a.getFullYear()-a.getFullYear()%10);for(var c=0;12>c;c++)b.push(new Date(a.getFullYear()+(c-1),0,1));return b},getDaysOfWeek:function(a){a=new Date(a||new Date),a=new Date(a.getFullYear(),a.getMonth(),a.getDate()),a.setDate(a.getDate()-(a.getDay()-1));for(var b=[],c=0;7>c;c++)b.push(new Date(a)),a.setDate(a.getDate()+1);return b},getVisibleMonths:function(a){a=new Date(a||new Date);for(var b=a.getFullYear(),c=[],d=0;12>d;d++)c.push(new Date(b,d,1));return c},getVisibleHours:function(a){a=new Date(a||new Date),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0);for(var b=[],c=0;24>c;c++)b.push(a),a=new Date(a.getTime()+36e5);return b},isAfter:function(a,b){return a=void 0!==a?new Date(a):a,b=new Date(b),a&&a.getTime()<=b.getTime()},isBefore:function(a,b){return a=void 0!==a?new Date(a):a,b=new Date(b),a.getTime()>=b.getTime()},isSameYear:function(a,b){return a=void 0!==a?new Date(a):a,b=new Date(b),a&&a.getFullYear()===b.getFullYear()},isSameMonth:function(a,b){return a=void 0!==a?new Date(a):a,b=new Date(b),this.isSameYear(a,b)&&a.getMonth()===b.getMonth()},isSameDay:function(a,b){return a=void 0!==a?new Date(a):a,b=new Date(b),this.isSameMonth(a,b)&&a.getDate()===b.getDate()},isSameHour:function(a,b){return a=void 0!==a?new Date(a):a,b=new Date(b),this.isSameDay(a,b)&&a.getHours()===b.getHours()},isSameMinutes:function(a,b){return a=void 0!==a?new Date(a):a,b=new Date(b),this.isSameHour(a,b)&&a.getMinutes()===b.getMinutes()},isValidDate:function(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}}});var b=a.module("datePicker");b.directive("dateRange",function(){return{templateUrl:"templates/daterange.html",scope:{start:"=",end:"="},link:function(a,b,c){a.start=new Date(a.start||new Date),a.end=new Date(a.end||new Date),c.$observe("disabled",function(b){a.disableDatePickers=!!b}),a.$watch("start.getTime()",function(b){b&&a.end&&b>a.end.getTime()&&(a.end=new Date(b))}),a.$watch("end.getTime()",function(b){b&&a.start&&b<a.start.getTime()&&(a.start=new Date(b))})}}});var c="ng-pristine",d="ng-dirty",b=a.module("datePicker");b.constant("dateTimeConfig",{template:function(a){return'<div date-picker="'+a.ngModel+'" '+(a.view?'view="'+a.view+'" ':"")+(a.maxView?'max-view="'+a.maxView+'" ':"")+(a.autoClose?'auto-close="'+a.autoClose+'" ':"")+(a.template?'template="'+a.template+'" ':"")+(a.minView?'min-view="'+a.minView+'" ':"")+(a.partial?'partial="'+a.partial+'" ':"")+(a.step?'step="'+a.step+'" ':"")+'class="date-picker-date-time"></div>'},format:"yyyy-MM-dd HH:mm",views:["date","year","month","hours","minutes"],dismiss:!1,position:"relative"}),b.directive("dateTimeAppend",function(){return{link:function(a,b){b.bind("click",function(){b.find("input")[0].focus()})}}}),b.directive("dateTime",["$compile","$document","$filter","dateTimeConfig","$parse","datePickerUtils",function(b,e,f,g,h,i){var j=e.find("body"),k=f("date");return{require:"ngModel",scope:!0,link:function(e,f,l,m){function n(a){return k(a,s)}function o(){return m.$modelValue}function p(a){a.stopPropagation(),m.$pristine&&(m.$dirty=!0,m.$pristine=!1,f.removeClass(c).addClass(d),t&&t.$setDirty(),m.$render())}function q(){y&&(y.remove(),y=null),A&&(A.remove(),A=null)}function r(){if(!y){if(y=b(D)(e),e.$digest(),e.$on("setDate",function(a,b,c){p(a),x&&u[u.length-1]===c&&q()}),e.$on("hidePicker",function(){f.triggerHandler("blur")}),e.$on("$destroy",q),"absolute"===z){var c=a.extend(f.offset(),{height:f[0].offsetHeight});y.css({top:c.top+c.height,left:c.left,display:"block",position:z}),j.append(y)}else A=a.element("<div date-picker-wrapper></div>"),f[0].parentElement.insertBefore(A[0],f[0]),A.append(y),y.css({top:f[0].offsetHeight+"px",display:"block"});y.bind("mousedown",function(a){a.preventDefault()})}}var s=l.format||g.format,t=f.inheritedData("$formController"),u=h(l.views)(e)||g.views.concat(),v=l.view||u[0],w=u.indexOf(v),x=l.dismiss?h(l.dismiss)(e):g.dismiss,y=null,z=l.position||g.position,A=null;if(-1===w&&u.splice(w,1),u.unshift(v),m.$formatters.push(n),m.$parsers.unshift(o),a.isDefined(l.minDate)){var B;m.$validators.min=function(b){return!i.isValidDate(b)||a.isUndefined(B)||b>=B},l.$observe("minDate",function(a){B=new Date(a),m.$validate()})}if(a.isDefined(l.maxDate)){var C;m.$validators.max=function(b){return!i.isValidDate(b)||a.isUndefined(C)||C>=b},l.$observe("maxDate",function(a){C=new Date(a),m.$validate()})}var D=g.template(l);f.bind("focus",r),f.bind("blur",q)}}}]),a.module("datePicker").run(["$templateCache",function(a){a.put("templates/datepicker.html",'<div ng-switch="view">\r\n  <div ng-switch-when="date">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev()">&lsaquo;</th>\r\n        <th colspan="5" class="switch" ng-click="setView(\'month\')">{{date|date:"yyyy MMMM"}}</th>\r\n        <th ng-click="next()">&rsaquo;</i></th>\r\n      </tr>\r\n      <tr>\r\n        <th ng-repeat="day in weekdays" style="overflow: hidden">{{ day|date:"EEE" }}</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr ng-repeat="week in weeks">\r\n        <td ng-repeat="day in week">\r\n          <span\r\n            ng-class="{\'now\':isNow(day),\'active\':isSameDay(day),\'disabled\':(day.getMonth()!=date.getMonth()),\'after\':isAfter(day),\'before\':isBefore(day)}"\r\n            ng-click="setDate(day)" ng-bind="day.getDate()"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div ng-switch-when="year">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev(10)">&lsaquo;</th>\r\n        <th colspan="5" class="switch">{{years[0].getFullYear()}}-{{years[years.length-1].getFullYear()}}</th>\r\n        <th ng-click="next(10)">&rsaquo;</i></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan="7">\r\n          <span ng-class="{\'active\':isSameYear(year),\'now\':isNow(year)}"\r\n                ng-repeat="year in years"\r\n                ng-click="setDate(year)" ng-bind="year.getFullYear()"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div ng-switch-when="month">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev()">&lsaquo;</th>\r\n        <th colspan="5" class="switch" ng-click="setView(\'year\')">{{ date|date:"yyyy" }}</th>\r\n        <th ng-click="next()">&rsaquo;</i></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan="7">\r\n          <span ng-repeat="month in months"\r\n                ng-class="{\'active\':isSameMonth(month),\'after\':isAfter(month),\'before\':isBefore(month),\'now\':isNow(month)}"\r\n                ng-click="setDate(month)"\r\n                ng-bind="month|date:\'MMM\'"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div ng-switch-when="hours">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev(24)">&lsaquo;</th>\r\n        <th colspan="5" class="switch" ng-click="setView(\'date\')">{{ date|date:"dd MMMM yyyy" }}</th>\r\n        <th ng-click="next(24)">&rsaquo;</i></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan="7">\r\n          <span ng-repeat="hour in hours"\r\n                ng-class="{\'now\':isNow(hour),\'active\':isSameHour(hour)}"\r\n                ng-click="setDate(hour)" ng-bind="hour|time"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div ng-switch-when="minutes">\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th ng-click="prev()">&lsaquo;</th>\r\n        <th colspan="5" class="switch" ng-click="setView(\'hours\')">{{ date|date:"dd MMMM yyyy" }}\r\n        </th>\r\n        <th ng-click="next()">&rsaquo;</i></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td colspan="7">\r\n          <span ng-repeat="minute in minutes"\r\n                ng-class="{active:isSameMinutes(minute),\'now\':isNow(minute)}"\r\n                ng-click="setDate(minute)"\r\n                ng-bind="minute|time"></span>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n'),a.put("templates/daterange.html",'<div>\r\n    <table>\r\n        <tr>\r\n            <td valign="top">\r\n                <div date-picker="start" ng-disabled="disableDatePickers"  class="date-picker" date after="start" before="end" min-view="date" max-view="date"></div>\r\n            </td>\r\n            <td valign="top">\r\n                <div date-picker="end" ng-disabled="disableDatePickers"  class="date-picker" date after="start" before="end"  min-view="date" max-view="date"></div>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n')}])}(angular);
!function(t,n){"use strict";t["angular-flatpickr"]=n(t.angular,t.flatpickr)}(this,function(t){"use strict";var n=t.module("angular-flatpickr",[]);return n.directive("ngFlatpickr",[function(){return{require:"ngModel",restrict:"A",scope:{fpOpts:"&",fpOnSetup:"&"},link:function(t,n,e,i){var r=new Flatpickr(n[0],t.fpOpts());t.fpOnSetup&&t.fpOnSetup({fpItem:r}),n.on("click",function(){t.$apply(function(){i.$setViewValue(r.selectedDateObj)})})}}}]),n});
//# sourceMappingURL=ng-flatpickr.min.js.map

/* Templates e Rotas */

angular.module( 'schedule', [ 'diretivas', 'ngRoute', 'services', 'angular-flatpickr' ])
.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {

    $locationProvider.html5Mode( true );

    /* Página inicial */
    $routeProvider.when( '/schedule',{
        templateUrl: 'partials/principal.html',
        controller: 'CompromisesController'
    });

    /* Criação de novo compromisso */
    $routeProvider.when( '/schedule/new',{
        templateUrl: 'partials/compromise.html',
        controller: 'CompromiseController'
    });

    /* Edição de compromisso */
    $routeProvider.when( '/schedule/edit/:compromiseId',{
        templateUrl: 'partials/compromise.html',
        controller: 'CompromiseController'
    });

    $routeProvider.otherwise( { redirectTo: '/schedule' } );
}]);


/* Controller de Compromisso */

angular.module( 'schedule' ).controller( 'CompromiseController',
    [ '$scope', 'createCompromise', 'recursoCompromisso', '$routeParams' ,
    function( $scope, createCompromise, recursoCompromisso, $routeParams ) {

    $scope.compromise = {};
    $scope.mensagem = '';

    /* Configurações do flatpickr */
    $scope.dateOpts = {
        dateFormat: 'd/m/Y H:i',
        locale: "pt",
        enableTime: true
    };

    /* Adquirindo todas informações do compromisso */
    if( $routeParams.compromiseId ) {
        recursoCompromisso.get({ compromiseId: $routeParams.compromiseId }, function( compromise ) {

            $scope.compromise = compromise;

        }, function( erro ) {
            console.log( erro );
            $scope.mensagem = 'Não foi possível obter o compromisso';
        });
    }

    /* Chamando criação de compromisso */
    $scope.submeter = function() {
        if( $scope.formulario.$valid ) {
            createCompromise
                .create( $scope.compromise, $scope )
                .then( function( dados ) {
                    $scope.mensagem = dados.mensagem;

                    if( dados.inclusao ) {
                        $scope.compromise = {};
                    }
                })
                .catch( function( erro ) {
                    $scope.mensagem = erro.mensagem;
                });
        }
    };

}]);

/* Controller de compromissos */

angular.module( 'schedule' ).controller( 'CompromisesController', [ '$scope', 'recursoCompromisso',
    function( $scope, recursoCompromisso ) {

    $scope.compromises = [];
    $scope.mensagem = '';

    /* Ordenando compromissos por data mais próxima */

    recursoCompromisso.query( function( compromises ) {
        $scope.compromises = compromises.slice().sort( function( a, b ){
            return new Date( a.dateTime )  <  new Date( b.dateTime ) ? -1 : 1;
        });
    }, function( erro ) {
        console.log( erro );
    });

    /* Chamada da remoção de compromisso */

    $scope.remover = function( compromise ) {
        recursoCompromisso.delete( { compromiseId: compromise._id }, function() {

            var compromiseIndex = $scope.compromises.indexOf( compromise );
            $scope.compromises.splice( compromiseIndex, 1 );
            $scope.mensagem = `Compromisso ' ${ compromise.titulo }' removido com sucesso!`;

        }, function( erro ) {
            console.log( erro );
            $scope.mensagem = `Não foi possível apagar o compromisso ' ${ compromise.titulo }' `;
        });
    };
}]);

angular.module( 'diretivas', [] )
.directive( 'listCompromises', function() {

    /* Listagem de compromissos - diretiva */

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        titulo: '@',
        descricao: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/list-compromises.html';


    return ddo;

})
.directive( 'delete', function() {

    /* Botão delete de cada compromisso */

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&'
    };

    ddo.template = '<button name="button" class="remove" ng-click="acao( compromise )"><i class="fa fa-trash" aria-hidden="true"></i></button>';

    return ddo;

})
.directive( 'meuFocus', function() {

    /* Focus no botão voltar a cada compromisso cadastrado ou enviado */

    var ddo = {};

    ddo.restrict = "A";

    ddo.link = function( scope, element ) {
        scope.$on( 'compromissoCadastrado', function(){
            element[0].focus();
        });
    };

    return ddo;

});

angular.module( 'services', [ 'ngResource' ] )
.factory( 'recursoCompromisso', function( $resource ) {
    return $resource( 'compromises/schedule/:compromiseId', null, {
        'update': {
            method: 'PUT'
        }
    });

})
.factory( 'createCompromise', function( recursoCompromisso, $q, $rootScope ) {

    var servico = {};
    var evento = 'compromissoCadastrado';

    servico.create = function( compromise, $scope ) {
        return $q( function( resolve, reject ) {

            /* Formatando data */
            var tempDate = compromise.formattedDate.split('/');
            compromise.dateTime = new Date(`${ tempDate[ 1 ]}/${ tempDate[ 0 ]}/${ tempDate[ 2 ]}`);

            if( compromise._id ) {

                /* Chamada da atualização de compromissos */
                recursoCompromisso.update( { compromiseId: compromise._id }, compromise, function() {

                    $rootScope.$broadcast( evento );

                    resolve({
                        mensagem: ` Compromisso '${ compromise.titulo }' atualizado com sucesso`,
                        inclusao: false
                    });

                }, function( erro ){
                    console.log( erro );
                    reject({
                        mensagem: `Não foi possível atualizar o compromisso '${ compromise.titulo }' `
                    });
                });
            } else {

                /* Salvando compromissos */
                recursoCompromisso.save( compromise, function() {

                    $rootScope.$broadcast( evento );

                    resolve({
                        mensagem: `Compromisso ${ compromise.titulo } foi incluido com sucesso!`,
                        inclusao: false
                    });

                }, function( erro ) {
                    console.log( erro );
                    reject({
                        mensagem: `Não foi possível incluir o compromisso '${ compromise.titulo }'`
                    });
                });
            }
        });
    };

    return servico;
});
