(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{369:function(t,n,e){var a=e(377);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(64)(a,o);a.locals&&(t.exports=a.locals)},370:function(t,n,e){var a=e(384);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(64)(a,o);a.locals&&(t.exports=a.locals)},371:function(t,n,e){var a=e(390);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(64)(a,o);a.locals&&(t.exports=a.locals)},372:function(t,n,e){"use strict";var a={name:"Dialog",props:{show:Boolean,type:String,title:{type:String,default:"Are You Sure?"},text:{type:String,default:""},dismiss:{type:Boolean,default:!1}}},o=(e(383),e(17)),i=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"}},[t.show?e("div",{staticClass:"z-index-high"},[e("div",{staticClass:"overlay visible",on:{click:function(n){return n.preventDefault(),t.$emit("close")}}}),t._v(" "),e("div",{class:["dialog",t.type]},[t._t("title",[e("h1",[t._v(t._s(t.title))])]),t._v(" "),t._t("text",[t.text?e("p",[t._v(t._s(t.text))]):t._e()]),t._v(" "),t._t("default"),t._v(" "),e("div",{staticClass:"buttonCon"},[t.dismiss?t._e():e("button",{staticClass:"no",on:{click:function(n){return n.preventDefault(),t.$emit("close")}}},[t._v("CANCEL")]),t._v(" "),t._t("buttons"),t._v(" "),e("button",{class:t.dismiss?"no":"yes",on:{click:function(n){return n.preventDefault(),t.$emit(t.dismiss?"close":"submit")}}},[t._v(t._s(t.dismiss?"CLOSE":"CONTINUE"))])],2)],2)]):t._e()])},[],!1,null,"731354aa",null);n.a=i.exports},375:function(t,n,e){"use strict";var a={name:"Input",props:{value:{type:String,default:""},label:String,required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},model:{prop:"value",event:"input"},data:function(){return{used:null}},mounted:function(){this.value&&(this.used=this.value.length>0)}},o=(e(376),e(17)),i=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"group flex__center flex"},[e("input",{attrs:{type:"text",required:t.required,disabled:t.disabled},domProps:{value:t.value},on:{focus:function(n){t.used=!0},blur:function(n){t.used=t.value&&t.value.length>0},input:function(n){return t.$emit("input",n.target.value)}}}),t._v(" "),e("label",{class:{used:t.used}},[t._v(t._s(t.label))])])},[],!1,null,null,null);n.a=i.exports},376:function(t,n,e){"use strict";var a=e(369);e.n(a).a},377:function(t,n,e){(t.exports=e(63)(!1)).push([t.i,".group {\n  position: relative;\n  margin: 10px 0;\n  padding: 0 5px;\n  flex-basis: 100%;\n}\n.group.small {\n  flex-basis: 50%;\n}\n.group input {\n  outline: 0;\n  padding: 15px;\n  -webkit-appearance: none;\n  color: var(--title-sec-color);\n  border: none;\n  border-radius: 0;\n  background: var(--input-background-color);\n  font-size: 16px;\n  width: 100%;\n  border: 1px solid var(--menu-color);\n  border-radius: 4px;\n}\n.dark .group input {\n  border: none;\n}\n.group input,\nlabel {\n  font-size: 16px;\n}\n.group label {\n  color: var(--nav-link-color);\n  width: auto;\n  text-align: left;\n  font-weight: 400;\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  pointer-events: none;\n  font-size: 14px;\n}\n.group label.used {\n  top: -8px;\n  left: 15px;\n  font-size: 11px;\n  color: var(--main-color);\n  background-color: var(--background-color);\n  padding: 3px;\n  border-radius: 5px;\n  transform: translateY(0%);\n  font-weight: 500;\n}",""])},382:function(t,n,e){"use strict";e.d(n,"c",function(){return c}),e.d(n,"b",function(){return u}),e.d(n,"d",function(){return d}),e.d(n,"a",function(){return f});var a=e(388),o=e.n(a),i=e(532),r=e.n(i);function s(t,n,e,a,o,i,r){try{var s=t[i](r),l=s.value}catch(t){return void e(t)}s.done?n(l):Promise.resolve(l).then(a,o)}function l(t){return function(){var n=this,e=arguments;return new Promise(function(a,o){var i=t.apply(n,e);function r(t){s(i,a,o,r,l,"next",t)}function l(t){s(i,a,o,r,l,"throw",t)}r(void 0)})}}function c(t){return/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(t)}function u(t){return/^[0-9Xx]*$/.test(t)&&(10==t.length||13==t.length)}function d(t){var n={id:t.routeKey,type:"URL"==t.type?"webpage":"book",title:t.article_title,publisher:t.web_title};if(t.last_name&&""!=t.last_name&&(n.author=[],n.author[0]={},n.author[0].family=t.last_name,t.first_name&&""!=t.first_name&&(n.author[0].given=t.first_name)),t.date&&""!=t.date&&(n.issued={},n.issued.raw=t.date.split("T")[0]),t.created_at&&""!=t.created_at){var e=t.created_at;e=e.split(" ")[0],n.accessed={},n.accessed.raw=e}return n[t.type]=t.source,n}function p(t){return v.apply(this,arguments)}function v(){return(v=l(o.a.mark(function t(n){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return e=t.sent,t.abrupt("return",e.text());case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}function f(t,n){return h.apply(this,arguments)}function h(){return(h=l(o.a.mark(function t(n,e){var a,i,s,l,c,u,d;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.key.replace("dependent/",""),t.next=3,p("https://www.zotero.org/styles/".concat(a));case 3:if(i=t.sent,!n.key.includes("dependent/")){t.next=9;break}return s=new DOMParser,l=s.parseFromString(i,"text/xml"),c=l.querySelector('link[rel="independent-parent"]').getAttribute("href").replace("http:","https:"),t.next=8,p(c);case 8:i=t.sent;case 9:return u={retrieveLocale:function(t){var n=new XMLHttpRequest;return n.open("GET","https://raw.githubusercontent.com/citation-style-language/locales/master/locales-".concat(t,".xml"),!1),n.send(null),n.responseText},retrieveItem:function(t){return e[t]}},(d=new r.a.Engine(u,i)).updateItems(Object.keys(e)),t.abrupt("return",d.makeBibliography());case 13:case"end":return t.stop()}},t)}))).apply(this,arguments)}},383:function(t,n,e){"use strict";var a=e(370);e.n(a).a},384:function(t,n,e){(t.exports=e(63)(!1)).push([t.i,".z-index-high[data-v-731354aa] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.dialog[data-v-731354aa] {\n  z-index: 999;\n  min-height: 180px;\n  max-height: 90%;\n  width: 38%;\n  max-width: 608px;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--menu-box-background-color);\n  padding: 20px;\n  border-radius: 2px;\n  box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.dialog.big[data-v-731354aa] {\n  width: 60%;\n  max-width: 1000px;\n  padding: 20px 30px;\n}\n.dialog[data-v-731354aa] > h1 {\n  font-weight: 500;\n  font-size: 24px;\n  color: var(--title-color);\n  margin: 12px 0;\n}\n.dialog[data-v-731354aa] > p {\n  display: block;\n  color: var(--title-sec-color);\n  font-size: 16px;\n  margin-bottom: 12px;\n  padding: 0;\n  line-height: 30px;\n}\n.dialog[data-v-731354aa] .big-input {\n  padding: 15px;\n  font-size: 20px;\n  width: 100%;\n  background-color: var(--menu-color);\n  border: none;\n  border-radius: 3px;\n  color: var(--default-text-color);\n  z-index: 2;\n  outline: 0;\n}\n.dialog[data-v-731354aa].big {\n  width: 60%;\n  max-width: 1000px;\n}\n.dialog[data-v-731354aa].big > h1 {\n  font-size: 30px;\n}\n.dialog[data-v-731354aa] .ais-SearchBox {\n  padding: 0 5px;\n}\n.dialog[data-v-731354aa] .options {\n  padding: 0;\n}\n.dialog[data-v-731354aa] .options.overflow {\n  flex: 1;\n  max-height: 200px;\n  overflow: scroll;\n}\n.dialog[data-v-731354aa] .options li {\n  display: block;\n  background: var(--menu-box-background-color);\n  padding: 20px 10px;\n  cursor: pointer;\n  transition: 0.3s all ease-in;\n}\n.dialog[data-v-731354aa] .options li.selected {\n  pointer-events: none;\n}\n.dialog[data-v-731354aa] .options li.selected h3 {\n  color: var(--main-color);\n}\n.dialog[data-v-731354aa] .options li h3 {\n  font-size: 20px;\n  font-weight: 400;\n  color: var(--title-color);\n}\n.dialog[data-v-731354aa] .options li h4 {\n  font-size: 14px;\n  font-weight: 300;\n  color: var(--title-sec-color);\n}\n.dialog[data-v-731354aa] button {\n  letter-spacing: normal;\n  margin-right: 8px;\n  padding: 8.5px 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 15px;\n  color: var(--main-color);\n  text-transform: uppercase;\n  font-weight: 700;\n  outline: 0;\n  background: transparent;\n  border-radius: 3px;\n  transition: 0.3s all ease-in;\n  min-width: 64px;\n  overflow: hidden;\n  position: relative;\n}\n.dialog[data-v-731354aa] button:active, .dialog[data-v-731354aa] button:hover {\n  background: rgba(78, 154, 247, 0.1);\n}\n.dialog[data-v-731354aa] button.no {\n  color: var(--title-sec-color);\n}\n.dialog[data-v-731354aa] button.no:active, .dialog[data-v-731354aa] button.no:hover {\n  background: var(--menu-sel-color);\n}\n.dialog .buttonCon[data-v-731354aa] {\n  padding-top: 16px;\n  padding-bottom: 4px;\n  width: 100%;\n  text-align: right;\n}\n.dialog form .group[data-v-731354aa]:first-child {\n  margin-top: 20px;\n}\n.dialog form .group[data-v-731354aa]:last-child {\n  margin-bottom: 0;\n}\n@media only screen and (max-width: 600px) {\n.dialog[data-v-731354aa] {\n    width: 95% !important;\n    left: 2.5%;\n    height: auto;\n    top: 50%;\n    transform: translate(0, -50%);\n}\n}",""])},389:function(t,n,e){"use strict";var a=e(371);e.n(a).a},390:function(t,n,e){(t.exports=e(63)(!1)).push([t.i,".row[data-v-c8d7dfbc] {\n  word-break: break-word;\n  color: var(--default-text-color);\n  border-bottom: 1px dotted var(--border-color);\n  padding: 20px;\n  border-radius: 2px;\n  line-height: 30px;\n  position: relative;\n  width: 100%;\n}\n.row[data-v-c8d7dfbc]:last-of-type {\n  border-bottom: none;\n}\n.row p[data-v-c8d7dfbc] {\n  font-size: 16px;\n  padding: 10px;\n  flex: 1;\n  font-weight: 400;\n  color: var(--text-color);\n}\n.row p[data-v-c8d7dfbc] .links {\n  color: var(--main-color);\n}\n.row p[data-v-c8d7dfbc] .links:hover {\n  text-decoration: underline;\n}\n.row .edit[data-v-c8d7dfbc] {\n  font-weight: 700;\n  color: var(--title-color);\n  font-size: 7px;\n  padding: 0 5px;\n}\n.row .edit i[data-v-c8d7dfbc] {\n  font-size: 20px;\n}",""])},393:function(t,n,e){var a=e(571);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(64)(a,o);a.locals&&(t.exports=a.locals)},526:function(t,n,e){"use strict";var a={name:"Citation",props:{routeKey:{type:String,default:null},string:String,page:{type:String,default:"view"},project_id:{type:String,default:null}}},o=(e(389),e(17)),i=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return"view"==t.page?e("div",{staticClass:"row flex flex__center"},[e("p",{domProps:{innerHTML:t._s(t.string)}}),t._v(" "),t.project_id?e("router-link",{staticClass:"edit flex flex__center",attrs:{to:"/projects/"+t.project_id+"/citations/"+t.routeKey}},[e("i",{staticClass:"material-icons"},[t._v("edit")])]):t._e()],1):e("p",{domProps:{innerHTML:t._s(t.string)}})},[],!1,null,"c8d7dfbc",null);n.a=i.exports},570:function(t,n,e){"use strict";var a=e(393);e.n(a).a},571:function(t,n,e){(t.exports=e(63)(!1)).push([t.i,"[data-v-34109899].vdatetime {\n  width: 100%;\n}\n[data-v-34109899].vdatetime .vdatetime-calendar__month__day--selected > span > span,[data-v-34109899].vdatetime .vdatetime-calendar__month__day--selected:hover > span > span,[data-v-34109899].vdatetime .vdatetime-popup__header {\n  background-color: var(--main-color);\n}\n[data-v-34109899].vdatetime .vdatetime-popup__actions__button {\n  color: var(--main-color);\n}\n[data-v-34109899].vdatetime input {\n  outline: 0;\n  padding: 15px;\n  -webkit-appearance: none;\n  color: var(--title-sec-color);\n  border: none;\n  border-radius: 0;\n  background: var(--input-background-color);\n  font-size: 16px;\n  width: 100%;\n  border-radius: 4px;\n}",""])},587:function(t,n,e){"use strict";e.r(n);var a=e(388),o=e.n(a),i=e(382),r=e(526),s=e(372),l=e(375),c=e(566),u=(e(568),{name:"Input",props:{value:{type:String,default:""}},watch:{value:function(t){this.$emit("input",t)}},model:{prop:"value",event:"input"},components:{Datetime:c.Datetime}}),d=(e(570),e(17)),p=Object(d.a)(u,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"group flex__center flex"},[e("Datetime",{attrs:{type:"date"},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}}),t._v(" "),e("label",{class:{used:t.value&&t.value.length>0}},[t._v("Date")])],1)},[],!1,null,"34109899",null).exports;function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(e,!0).forEach(function(n){h(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function m(t,n,e,a,o,i,r){try{var s=t[i](r),l=s.value}catch(t){return void e(t)}s.done?n(l):Promise.resolve(l).then(a,o)}var g,b,x={name:"Form",data:function(){return{style:null,citation:null,deleteCitationDialog:!1,sources:[],string:"",length:null}},computed:{page:function(){return this.$route.meta.page}},watch:{citation:{handler:(g=o.a.mark(function t(n){var e,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e={})[n.routeKey]=Object(i.d)(f({},n)),t.next=4,Object(i.a)(this.style,e);case 4:a=t.sent,this.string=a[1][0];case 6:case"end":return t.stop()}},t,this)}),b=function(){var t=this,n=arguments;return new Promise(function(e,a){var o=g.apply(t,n);function i(t){m(o,e,a,i,r,"next",t)}function r(t){m(o,e,a,i,r,"throw",t)}i(void 0)})},function(t){return b.apply(this,arguments)}),deep:!0}},mounted:function(){"edit"==this.page?this.getCitation():(this.sources=JSON.parse(decodeURIComponent(this.$route.query.sources)),this.length=this.sources.length,this.retrieveCitation())},methods:{retrieveCitation:function(){var t=this,n=this.sources.shift();"URL"==n.type&&(n.source=decodeURIComponent(n.source)),this.$http.post("projects/".concat(this.$route.params.project_id,"/citations/retrieve"),n).then(function(n){t.style=n.data.project.style,t.citation=n.data})},getCitation:function(){var t=this;this.$http.get("projects/".concat(this.$route.params.project_id,"/citations/").concat(this.$route.params.citation_id)).then(function(n){t.style=n.data.project.style,t.citation=n.data}).catch(function(n){t.$router.push({name:"404 Not Found"})})},addCitation:function(){var t=this,n=f({},this.citation);this.citation=null,this.$http.post("projects/".concat(this.$route.params.project_id,"/citations"),n).then(function(n){t.sources.length>0?t.retrieveCitation():t.$router.push({name:"View Project",params:{project_id:t.$route.params.project_id}})})},editCitation:function(){var t=this,n=f({},this.citation);this.$http.put("projects/".concat(this.$route.params.project_id,"/citations/").concat(this.$route.params.citation_id),n).then(function(n){t.$router.push({name:"View Project",params:{project_id:t.$route.params.project_id}})})},deleteCitation:function(){var t=this;this.deleteCitationDialog=!1,this.$http.delete("projects/".concat(this.$route.params.project_id,"/citations/").concat(this.$route.params.citation_id)).then(function(n){t.$router.push({name:"View Project",params:{project_id:t.$route.params.project_id}})})}},components:{Citation:r.a,Dialog:s.a,Input:l.a,DatePicker:p}},_=Object(d.a)(x,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.citation?e("div",{staticClass:"container",staticStyle:{"margin-top":"20px"}},[e("Dialog",{attrs:{show:t.deleteCitationDialog,type:"small delete-citation",text:"Citation can't be recovered after this. Do you wish to proceed?"},on:{submit:t.deleteCitation,close:function(n){t.deleteCitationDialog=!1}}}),t._v(" "),e("div",{staticClass:"data",attrs:{id:"ref"}},[t.style?e("Citation",{attrs:{string:t.string}}):t._e()],1),t._v(" "),e("form",{staticClass:"form flex",attrs:{"data-type":t.citation.type,method:"POST"}},[e("Input",{ref:"firstName",staticClass:"small",attrs:{label:"First Name"},model:{value:t.citation.first_name,callback:function(n){t.$set(t.citation,"first_name",n)},expression:"citation.first_name"}}),t._v(" "),e("Input",{ref:"lastName",staticClass:"small",attrs:{label:"Last Name"},model:{value:t.citation.last_name,callback:function(n){t.$set(t.citation,"last_name",n)},expression:"citation.last_name"}}),t._v(" "),e("Input",{ref:"articleTitle",staticClass:"small",attrs:{label:"Title",required:!0},model:{value:t.citation.article_title,callback:function(n){t.$set(t.citation,"article_title",n)},expression:"citation.article_title"}}),t._v(" "),e("Input",{ref:"webTitle",staticClass:"small",attrs:{label:"Publisher",required:!0},model:{value:t.citation.web_title,callback:function(n){t.$set(t.citation,"web_title",n)},expression:"citation.web_title"}}),t._v(" "),e("DatePicker",{model:{value:t.citation.date,callback:function(n){t.$set(t.citation,"date",n)},expression:"citation.date"}}),t._v(" "),e("Input",{ref:"source",attrs:{label:"Source",disabled:!0},model:{value:t.citation.source,callback:function(n){t.$set(t.citation,"source",n)},expression:"citation.source"}}),t._v(" "),e("button",{staticClass:"button",on:{click:function(n){n.preventDefault(),"edit"==t.page?t.editCitation():t.addCitation()}}},[t._v(t._s("edit"==t.page?"Update":"Add ("+(t.length-t.sources.length)+"/"+t.length+")"))]),t._v(" "),"edit"==t.page?e("button",{staticClass:"button button-red",on:{click:function(n){n.preventDefault(),t.deleteCitationDialog=!0}}},[t._v("Delete")]):t._e()],1)],1):t._e()},[],!1,null,null,null);n.default=_.exports}}]);