webpackJsonp([1],{"/YjR":function(t,s){},"/kZa":function(t,s){},"0W3g":function(t,s){},B8Fo:function(t,s){},DfDl:function(t,s,e){var a="http://localhost:80";a="",t.exports={baseUrl:a}},DyoL:function(t,s){t.exports={_from:"buttercms",_id:"buttercms@1.1.1",_inBundle:!1,_integrity:"sha512-Td5d7drciokW2gtlbOEbmlpaYmu3kNT80VKyN7JyrKHPyTJGT1l1w5hkS1ATKm3ulGv4lzXEYZd2jqetBrJkiQ==",_location:"/buttercms",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"buttercms",name:"buttercms",escapedName:"buttercms",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/buttercms/-/buttercms-1.1.1.tgz",_shasum:"fcd502df47e9157e4f6d6fb18b167d0ba056103e",_spec:"buttercms",_where:"/Users/kevinc/Code/schmitzlab-frontend",author:{name:"ButterCMS",email:"support@buttercms.com"},bugs:{url:"https://github.com/buttercms/buttercms-js/issues"},bundleDependencies:!1,dependencies:{axios:"0.9.1"},deprecated:!1,description:"ButterCMS API Client",devDependencies:{"uglify-js":"^2.8.22",webpack:"^2.5.0"},engines:{node:">=0.10.32"},homepage:"https://github.com/buttercms/buttercms-js",keywords:["buttercms","butter","cms","api"],license:"MIT",main:"lib/butter.js",name:"buttercms",repository:{type:"git",url:"git://github.com/buttercms/buttercms-js.git"},scripts:{build:"webpack && uglifyjs ./dist/butter.js -c -m -o ./dist/butter.min.js"},version:"1.1.1"}},FjVb:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("a19Z"),i=e.n(n)()("f1abd4444380e11d8896e53fc3c93404d349c3a9"),r={name:"Logo",data:function(){return{logo:""}},methods:{getLogo:function(){var t=this;i.content.retrieve(["logo"]).then(function(s){t.logo=s.data.data.logo})}},created:function(){this.getLogo()}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{src:this.logo,alt:"Schmitz Lab Logo",width:"112",height:"28"}})},staticRenderFns:[]},c={name:"Nav",components:{logo:e("VU/8")(r,o,!1,null,null,null).exports},data:function(){return{burger:!1}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"navbar is-transparent"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item",attrs:{href:""}},[e("logo")],1),t._v(" "),e("div",{staticClass:"navbar-burger burger",class:{"is-active":t.burger},on:{click:function(s){t.burger=!t.burger}}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])]),t._v(" "),e("div",{staticClass:"navbar-menu",class:{"is-active":t.burger},attrs:{id:""}},[e("div",{staticClass:"navbar-start",on:{click:function(s){t.burger=!1}}},[e("router-link",{staticClass:"navbar-item navbar-main",attrs:{"active-class":"active",to:"/",exact:""}},[t._v("\n        Home\n      ")]),t._v(" "),e("router-link",{staticClass:"navbar-item navbar-main",attrs:{"active-class":"active",to:"/people"}},[t._v("\n        People\n      ")]),t._v(" "),e("router-link",{staticClass:"navbar-item navbar-main",attrs:{"active-class":"active",to:"/research"}},[t._v("\n        Research\n      ")]),t._v(" "),e("router-link",{staticClass:"navbar-item navbar-main",attrs:{"active-class":"active",to:"/publications"}},[t._v("\n        Publications\n      ")]),t._v(" "),e("router-link",{staticClass:"navbar-item navbar-main",attrs:{"active-class":"active",to:"/projects"}},[t._v("\n        Projects\n      ")]),t._v(" "),e("router-link",{staticClass:"navbar-item navbar-main",attrs:{"active-class":"active",to:"/teaching"}},[t._v("\n        Teaching\n      ")]),t._v(" "),e("router-link",{staticClass:"navbar-item navbar-main",attrs:{"active-class":"active",to:"/blog"}},[t._v("\n        Blog\n      ")]),t._v(" "),e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link"},[t._v("\n          More\n        ")]),t._v(" "),e("div",{staticClass:"navbar-dropdown is-boxed"},[e("router-link",{staticClass:"navbar-item",attrs:{"active-class":"active",to:"/"}},[t._v("\n            Pages\n          ")]),t._v(" "),e("hr",{staticClass:"navbar-divider"}),t._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{"active-class":"active",to:"/"}},[t._v("\n            Categories\n          ")])],1)])],1),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("div",{staticClass:"field is-grouped"},[s("p",{staticClass:"control"},[s("a",{staticClass:"bd-tw-button button",attrs:{"data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"http://localhost:4000",target:"_blank",href:"https://twitter.com/ecomorph?ref_src=twsrc%5Etfw"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-twitter"})]),this._v(" "),s("span",[this._v("\n                Follow @ecomorph\n              ")])])])])])])}]};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section"},[e("div",{staticClass:"columns"},[e("div",{attrs:{cass:"column is-3"}})]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-3"},[e("p",{staticClass:"bd-footer-link-title"},[e("a",{attrs:{href:""}},[t._v("Home")])]),t._v(" "),e("p",{staticClass:"bd-footer-link-title"},[e("a",{attrs:{href:""}},[t._v("Blog")])]),t._v(" "),e("p",{staticClass:"bd-footer-link"},[e("a",{attrs:{href:""}},[t._v("\n                  Title of Post 1\n                ")])]),t._v(" "),e("p",{staticClass:"bd-footer-link"},[e("a",{attrs:{href:""}},[t._v("\n                  Title of Post 2\n                ")])]),t._v(" "),e("p",{staticClass:"bd-footer-link"},[e("a",{attrs:{href:""}},[t._v("\n                  Title of Post 3\n                ")])]),t._v(" "),e("p",{staticClass:"bd-footer-link bd-is-more"},[e("a",{attrs:{href:"https://bulma.io/blog"}},[t._v("\n                  View all posts\n                ")])])]),t._v(" "),e("div",{staticClass:"column is-3"},[e("p",{staticClass:"bd-footer-link-title"},[t._v("Projects")]),t._v(" "),e("p",{staticClass:"bd-footer-link"},[e("a",{attrs:{href:""}},[t._v("Labore et dolore magna aliqua")])]),t._v(" "),e("p",{staticClass:"bd-footer-link"},[e("a",{attrs:{href:""}},[t._v("Kanban airis sum eschelor")])]),t._v(" "),e("p",{staticClass:"bd-footer-link"},[e("a",{attrs:{href:""}},[t._v("Modular modern free")])]),t._v(" "),e("p",{staticClass:"bd-footer-link"},[e("a",{attrs:{href:""}},[t._v("The king of clubs")])]),t._v(" "),e("p",{staticClass:"bd-footer-link"},[e("a",{attrs:{href:""}},[t._v("The Discovery Dissipation")])])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("p",{staticClass:"bd-footer-link-title"},[t._v("Areas of Study")]),t._v(" "),e("p",{staticClass:"bd-footer-link bd-has-subtitle"},[e("a",{attrs:{href:"https://bulma.io/expo"}},[e("strong",[t._v("\n                    Functional Morphology\n                  ")]),t._v(" "),e("em",[t._v("\n                    Description goes here\n                  ")])])]),t._v(" "),e("p",{staticClass:"bd-footer-link bd-has-subtitle"},[e("a",{attrs:{href:"https://bulma.io/expo"}},[e("strong",[t._v("\n                    Evolutionary Morphology\n                  ")]),t._v(" "),e("em",[t._v("\n                    Next description goes here\n                  ")])])]),t._v(" "),e("p",{staticClass:"bd-footer-link bd-has-subtitle"},[e("a",{attrs:{href:"https://bulma.io/expo"}},[e("strong",[t._v("\n                    Expo\n                  ")]),t._v(" "),e("em",[t._v("\n                    Official Bulma showcase\n                  ")])])])])])])])]),t._v(" "),e("div",{staticClass:"copyright has-text-centered"},[e("div",{staticClass:"attribution"},[e("img",{attrs:{src:"https://vuejs.org/images/logo.png"}}),t._v(" "),e("a",{attrs:{href:"https://buttercms.com/",_target:""}},[e("img",{attrs:{src:"https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo"}})])]),t._v(" "),e("span",{staticClass:"has-text-grey is-size-7"},[t._v("© Schmitz Lab 2018 | Designed by Kevin Cunanan")])])])}]};var d={name:"App",components:{navigation:e("VU/8")(c,l,!1,function(t){e("FjVb")},"data-v-e2dbe802",null).exports,"footer-nav":e("VU/8")({name:"Footer"},u,!1,function(t){e("B8Fo")},"data-v-4ef42b62",null).exports}},v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("navigation"),this._v(" "),s("transition",{attrs:{name:"fade"}},[s("router-view")],1),this._v(" "),s("footer-nav")],1)},staticRenderFns:[]};var p=e("VU/8")(d,v,!1,function(t){e("iEdM")},null,null).exports,m=e("/ocq"),h=(e("v2ns"),e("7QTg")),f={name:"Slideshow",components:{swiper:h.swiper,swiperSlide:h.swiperSlide},props:{slides:{type:Array}},data:function(){return{swiperOption:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.slides.length>0?e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.slides,function(s,a){return e("swiper-slide",{key:a},[e("section",{staticClass:"hero is-info is-medium is-bold",style:{"background-image":"url("+s.image+")"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[t._v("\n          "+t._s(s.title)+"\n          ")]),t._v(" "),e("div",[e("h2",{staticClass:"subtitle"},[t._v("\n            "+t._s(s.subtitle)+"\n            ")])])])])])])}),t._v(" "),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2):t._e()},staticRenderFns:[]};var _=e("VU/8")(f,g,!1,function(t){e("YRBZ")},"data-v-1714d9ec",null).exports,b={name:"People",props:{limitPeople:Boolean},data:function(){return{people:[],limit:null}},methods:{getCollection:function(){var t=this;i.content.retrieve(["people","people_limit"]).then(function(s){t.limitPeople?(t.limit=s.data.data.people_limit,t.people=s.data.data.people.slice(0,t.limit)):t.people=s.data.data.people})}},created:function(){this.getCollection()}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("masonry",{attrs:{cols:{default:3,1000:2,600:1},gutter:30}},t._l(t.people,function(s,a){return e("div",{key:a,staticClass:"card large"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:t._f("src")(s.image),alt:"Image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4"},[t._v(t._s(s.first_name)+" "+t._s(s.last_name))]),t._v(" "),e("p",{staticClass:"subtitle is-6"},[t._v(t._s(s.college))]),t._v(" "),e("p",{staticClass:"subtitle is-6"},[t._v(t._s(s.affiliation))])])])])])}))},staticRenderFns:[]};var j=e("VU/8")(b,C,!1,function(t){e("pfCt")},"data-v-76d18c26",null).exports,k={name:"publications",props:{limitPublications:Boolean},data:function(){return{publications:[],limit:null}},methods:{getPublications:function(){var t=this;i.content.retrieve(["publications","publications_limit"]).then(function(s){t.limitPublications?(t.limit=s.data.data.publications_limit,t.publications=s.data.data.publications.slice(0,t.limit)):t.publications=s.data.data.publications})}},created:function(){this.getPublications()}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},t._l(t.publications,function(s,a){return e("div",{key:a},[e("div",{domProps:{innerHTML:t._s(s.text)}})])}))},staticRenderFns:[]},x=e("VU/8")(k,y,!1,null,null,null).exports,P={name:"Projects",props:{limitProjects:Boolean},data:function(){return{projects:{type:Array}}},methods:{getCollection:function(){var t=this;i.content.retrieve(["projects","projects_limit"]).then(function(s){t.limitProjects?(t.limit=s.data.data.projects_limit,t.projects=s.data.data.projects.slice(0,t.limit)):t.projects=s.data.data.projects})}},created:function(){this.getCollection()}},w={render:function(){var t=this.$createElement,s=this._self._c||t;return s("masonry",{attrs:{cols:{default:3,1000:2,600:1},gutter:30}},this._l(this.projects,function(t,e){return s("div",{key:e},[s("img",{attrs:{src:t.featured_image}})])}))},staticRenderFns:[]},E=e("VU/8")(P,w,!1,null,null,null).exports,R={name:"Announcements",props:{limitAnnouncements:Boolean},data:function(){return{announcements:{type:Array}}},methods:{getCollection:function(){var t=this;i.content.retrieve(["announcements","announcements_limit"]).then(function(s){t.limitAnnouncements?(t.limit=s.data.data.projects_limit,t.announcements=s.data.data.announcements.slice(0,t.limit)):t.announcements=s.data.data.announcements})}},created:function(){this.getCollection()}},z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.announcements,function(s,a){return e("div",{key:a,staticClass:"notification"},[e("h3",{staticClass:"title is-4"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(s.text)}})])}))},staticRenderFns:[]};var F={name:"HomePage",components:{slides:_,people:j,publications:x,announcements:e("VU/8")(R,z,!1,function(t){e("0W3g")},"data-v-36c7dc7c",null).exports,projects:E},data:function(){return{page:{title:"",content:"",slides:[]},slug:"home"}},methods:{getPage:function(){var t=this;i.page.retrieve("home",this.slug).then(function(s){t.page=s.data.data.fields})}},beforeRouteEnter:function(t,s,e){e(function(t){t.getPage()})}},V={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("slides",{attrs:{slides:t.page.slides}}),t._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-10 is-offset-1"},[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.page.content)}}),t._v(" "),e("section",{staticClass:"widget"},[e("h1",{staticClass:"title"},[t._v("Latest Publications")]),t._v(" "),e("publications",{attrs:{limitPublications:""}})],1),t._v(" "),e("section",{staticClass:"widget"},[e("h1",{staticClass:"title"},[t._v("Projects")]),t._v(" "),e("projects",{attrs:{limitProjects:""}})],1),t._v(" "),e("section",{staticClass:"widget"},[e("h1",{staticClass:"title"},[t._v("People")]),t._v(" "),e("people",{attrs:{limitPeople:""}})],1)])])])],1)},staticRenderFns:[]};var U=e("VU/8")(F,V,!1,function(t){e("jyng")},"data-v-7a3b5b5a",null).exports,L={name:"Hero",props:{hero:{type:Array}}},T={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.hero.length>0?e("div",[e("section",{staticClass:"hero is-info is-medium is-bold",style:{"background-image":"url("+t.hero[0].image+")"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[t._v("\n          "+t._s(t.hero[0].title)+"\n        ")]),t._v(" "),e("div",[e("h2",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.hero[0].subtitle)+"\n          ")])])])])])]):t._e()},staticRenderFns:[]};var B=e("VU/8")(L,T,!1,function(t){e("TWfQ")},"data-v-182f7616",null).exports,M={name:"ProjectPage",components:{projects:E,hero:B},data:function(){return{page:{title:"",content:"",featured_image:[]},slug:"projects"}},methods:{getPage:function(){var t=this;i.page.retrieve("primary_page",this.slug).then(function(s){t.page=s.data.data.fields})}},beforeRouteEnter:function(t,s,e){e(function(t){t.getPage()})}},q={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("hero",{attrs:{hero:this.page.featured_image}}),this._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-10 is-offset-1"},[s("div",{staticClass:"content",domProps:{innerHTML:this._s(this.page.content)}}),this._v(" "),this._m(0),this._v(" "),s("projects")],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"has-text-centered"},[s("h1",{staticClass:"title"},[this._v("Projects")]),this._v(" "),s("hr")])}]},H=e("VU/8")(M,q,!1,null,null,null).exports,$={name:"ResearchPage",components:{hero:B},data:function(){return{page:{title:"",content:"",featured_image:[]},slug:"research"}},methods:{getPage:function(){var t=this;i.page.retrieve("primary_page",this.slug).then(function(s){t.page=s.data.data.fields})}},beforeRouteEnter:function(t,s,e){e(function(t){t.getPage()})}},S={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("hero",{attrs:{hero:this.page.featured_image}}),this._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-10 is-offset-1"},[s("div",{staticClass:"content",domProps:{innerHTML:this._s(this.page.content)}})])])])],1)},staticRenderFns:[]},N=e("VU/8")($,S,!1,null,null,null).exports,O={name:"PublicationsPage",components:{publications:x,hero:B},data:function(){return{page:{title:"",content:"",featured_image:[]},slug:"publications"}},methods:{getPage:function(){var t=this;i.page.retrieve("primary_page",this.slug).then(function(s){t.page=s.data.data.fields})}},beforeRouteEnter:function(t,s,e){e(function(t){t.getPage()})}},D={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("hero",{attrs:{hero:this.page.featured_image}}),this._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-10 is-offset-1"},[s("div",{staticClass:"content",domProps:{innerHTML:this._s(this.page.content)}}),this._v(" "),this._m(0),this._v(" "),s("publications")],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"has-text-centered"},[s("h1",{staticClass:"title"},[this._v("Publications")]),this._v(" "),s("hr")])}]},A=e("VU/8")(O,D,!1,null,null,null).exports,W={name:"ProjectPage",components:{hero:B},data:function(){return{page:{title:"",content:"",featured_image:[]},slug:"teaching"}},methods:{getPage:function(){var t=this;i.page.retrieve("primary_page",this.slug).then(function(s){t.page=s.data.data.fields})}},beforeRouteEnter:function(t,s,e){e(function(t){t.getPage()})}},X={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("hero",{attrs:{hero:this.page.featured_image}}),this._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-10 is-offset-1"},[s("div",{staticClass:"content",domProps:{innerHTML:this._s(this.page.content)}})])])])],1)},staticRenderFns:[]},K=e("VU/8")(W,X,!1,null,null,null).exports,Y={name:"PeoplePage",components:{hero:B,people:j},data:function(){return{page:{title:"",content:"",featured_image:[]},slug:"people"}},methods:{getPage:function(){var t=this;i.page.retrieve("primary_page",this.slug).then(function(s){t.page=s.data.data.fields})}},beforeRouteEnter:function(t,s,e){e(function(t){t.getPage()})}},Z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("hero",{attrs:{hero:t.page.featured_image}}),t._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-10 is-offset-1"},[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.page.content)}}),t._v(" "),e("div",{staticClass:"has-text-centered"},[e("h1",{staticClass:"title"},[t._v("People")]),t._v(" "),e("hr"),t._v(" "),e("people",{attrs:{category:"team"}})],1)])])])],1)},staticRenderFns:[]};var J=e("VU/8")(Y,Z,!1,function(t){e("sM73")},"data-v-ad332d52",null).exports,G={name:"BlogAbout",data:function(){return{title:"",description:""}},methods:{getRegion:function(){var t=this;i.content.retrieve(["title","description"]).then(function(s){console.log(s),t.title=s.data.data.title,t.description=s.data.data.description})}},created:function(){console.log("hello???"),this.getRegion()}},I={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card"},[s("header",{staticClass:"card-header-fix-center has-text-centered"},[s("p",{staticClass:"card-header-title-fix"},[this._v("\n      "+this._s(this.title)+"\n    ")])]),this._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[this._v(this._s(this.description))])])])},staticRenderFns:[]};var Q=e("VU/8")(G,I,!1,function(t){e("/kZa")},"data-v-5bb2ea88",null).exports,tt={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:"tag-margin tag is-tag is-tag-"+this.size},[this._t("default")],2)},staticRenderFns:[]};var st=e("VU/8")({name:"Tag",props:["size"]},tt,!1,function(t){e("sZxD")},"data-v-eb1131f0",null).exports,et={name:"Categories",components:{tag:st},data:function(){return{categories:[]}},methods:{getCategories:function(){var t=this;i.category.list().then(function(s){t.categories=s.data.data})}},created:function(){this.getCategories()}},at={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"has-text-centered"},t._l(t.categories,function(s,a){return e("router-link",{key:a,attrs:{to:"/blog/category/"+s.slug}},[e("tag",{attrs:{size:"large"}},[t._v(t._s(s.name))])],1)}))])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"card-header-fix-center has-text-centered"},[s("p",{staticClass:"card-header-title-fix"},[this._v("\n      Categories\n    ")])])}]};var nt={name:"Sidebar",components:{"blog-about":Q,categories:e("VU/8")(et,at,!1,function(t){e("jRr1")},"data-v-680edc04",null).exports}},it={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"column is-4 is-narrow"},[s("div",{staticClass:"card-wrapper"},[s("blog-about")],1),this._v(" "),s("div",{staticClass:"card-wrapper"},[s("categories")],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-wrapper twitter"},[s("a",{staticClass:"twitter-timeline",attrs:{href:"https://twitter.com/ecomorph?ref_src=twsrc%5Etfw"}},[this._v("Tweets by ecomorph")])])}]};var rt={name:"Blog",components:{sidebar:e("VU/8")(nt,it,!1,function(t){e("YqTc")},"data-v-438ef5a8",null).exports}},ot={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section"},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"}),this._v(" "),s("div",{staticClass:"columns is-multiline is-centered"},[s("div",{staticClass:"column is-8"},[s("router-view")],1),this._v(" "),s("sidebar")],1)])])])},staticRenderFns:[]};var ct=e("VU/8")(rt,ot,!1,function(t){e("aVYV")},"data-v-750b4bc2",null).exports,lt={name:"Post",components:{tag:st},props:{post:{type:Object}}},ut={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-wrapper"},[e("div",{staticClass:"box"},[e("router-link",{attrs:{to:"/blog/post/"+t.post.slug}},[e("div",{staticClass:"post-header"},[e("img",{attrs:{src:t.post.featured_image}}),t._v(" "),e("h4",{staticClass:"title is-4"},[t._v(t._s(t.post.title))])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"post-content-short"},[e("p",[t._v(t._s(t.post.summary))]),t._v(" "),e("div",{staticClass:"continue-reading has-text-centered"},[e("router-link",{staticClass:"button is-primary is-outlined",attrs:{to:"/blog/post/"+t.post.slug}},[t._v("Read More")])],1),t._v(" "),e("div",{staticClass:"post-content-details"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6"},[e("i",[t._v(t._s(t._f("moment")(t.post.published,"LLLL")))])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("div",{staticClass:"has-text-centered is-pulled-right"},t._l(t.post.tags,function(s,a){return e("div",{key:a},[e("router-link",{staticClass:"blog-tag",attrs:{to:"/blog/tag/"+s.slug}},[e("tag",{attrs:{size:"small"}},[t._v(t._s(s.name))])],1)],1)}))])])])])],1)])},staticRenderFns:[]};var dt=e("VU/8")(lt,ut,!1,function(t){e("pAKi")},"data-v-5081f87a",null).exports,vt={name:"Posts",components:{post:dt},props:{posts:{type:Array}}},pt={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",this._l(this.posts,function(t,e){return s("div",{key:e},[s("post",{attrs:{post:t}})],1)}))},staticRenderFns:[]},mt={name:"BlogList",components:{posts:e("VU/8")(vt,pt,!1,null,null,null).exports},data:function(){return{loaded:!1,posts:[],page:1,meta:{}}},methods:{getFeed:function(){var t=this;i.post.list({page:1,page_size:5}).then(function(s){t.posts=s.data.data,t.page=s.config.params.page,t.meta=s.data.meta,t.loaded=!0})}},created:function(){this.getFeed()}},ht={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.loaded?e("posts",{attrs:{posts:t.posts}}):e("div",{staticClass:"loader"}),t._v(" "),e("div",{staticClass:"section"},[e("nav",{staticClass:"pagination is-medium is-centered"},[e("a",{staticClass:"pagination-previous",attrs:{disabled:!t.meta.previous_page,to:t.meta.previous_page}},[t._v("Previous")]),t._v(" "),e("a",{staticClass:"pagination-next",attrs:{disabled:!t.meta.next_page,to:t.meta.next_page}},[t._v("Next")]),t._v(" "),e("ul",{staticClass:"pagination-list"},[e("li",[t.meta.next_page?e("a",{staticClass:"pagination-link",attrs:{to:t.meta.previous_page}},[t._v(t._s(t.page-1))]):t._e()]),t._v(" "),e("li",[e("a",{staticClass:"pagination-link is-current"},[t._v(t._s(t.page))])]),t._v(" "),e("li",[t.meta.next_page?e("a",{staticClass:"pagination-link",attrs:{to:t.meta.next_page}},[t._v(t._s(t.page+1))]):t._e()])])])])],1)},staticRenderFns:[]};var ft=e("VU/8")(mt,ht,!1,function(t){e("kC91")},"data-v-e283610e",null).exports,gt={name:"BlogPost",components:{post:dt,tag:st},data:function(){return{post:{}}},created:function(){var t=this;i.post.retrieve(this.$route.params.slug).then(function(s){t.post=s.data.data,console.log(t.post)}).catch(function(t){console.log(t)})}},_t={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"box"},[e("div",{staticClass:"post-header"},[e("img",{attrs:{src:t.post.featured_image}}),t._v(" "),e("h4",{staticClass:"title is-4 is-spaced"},[t._v(t._s(t.post.title))]),t._v(" "),e("h5",{staticClass:"subtitle is-5"},[e("i",[t._v(t._s(t.post.summary))])]),t._v(" "),e("hr")]),t._v(" "),e("div",{staticClass:"content-wrapper",domProps:{innerHTML:t._s(t.post.body)}}),t._v(" "),e("div",{staticClass:"end-post-details"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6"},[e("i",[t._v(t._s(t._f("moment")(t.post.published,"LLLL")))])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("div",{staticClass:"has-text-centered is-pulled-right"},t._l(t.post.tags,function(s,a){return e("div",{key:a},[e("router-link",{staticClass:"blog-tag",attrs:{to:"/blog/tag/"+s.slug}},[e("tag",{attrs:{size:"small"}},[t._v(t._s(s.name))])],1)],1)}))])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"end-content-nav-wrapper"},[e("div",{staticClass:"is-pulled-left"},[e("a",{on:{click:function(s){t.$router.go(-1)}}},[t._v("\n          Back\n        ")])])])])])},staticRenderFns:[]};var bt=e("VU/8")(gt,_t,!1,function(t){e("PJzO")},null,null).exports;a.default.use(m.a);var Ct=new m.a({routes:[{path:"/",component:U},{path:"/people",component:J},{path:"/projects",component:H},{path:"/research",component:N},{path:"/publications",component:A},{path:"/teaching",component:K},{path:"/blog",component:ct,children:[{path:"/",component:ft},{path:"post/:slug",component:bt}]}],mode:"history"}),jt=e("xfLu"),kt=e.n(jt),yt=e("G7ha"),xt=(e("/YjR"),e("Nqzb"),e("DfDl"));a.default.use(e("mjDs")),a.default.filter("src",function(t){return t?(t=t.toString()).includes("http://")||t.includes("https://")?t:""+xt.baseUrl+t:""}),a.default.config.productionTip=!1,a.default.use(yt.a),a.default.use(kt.a),new a.default({el:"#app",router:Ct,components:{App:p},template:"<App/>"})},Nqzb:function(t,s){},PJzO:function(t,s){},TWfQ:function(t,s){},YRBZ:function(t,s){},YqTc:function(t,s){},aVYV:function(t,s){},iEdM:function(t,s){},jRr1:function(t,s){},jyng:function(t,s){},kC91:function(t,s){},pAKi:function(t,s){},pfCt:function(t,s){},sM73:function(t,s){},sZxD:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(i(t))}function i(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"},v2ns:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.217de11aa76a47a57173.js.map