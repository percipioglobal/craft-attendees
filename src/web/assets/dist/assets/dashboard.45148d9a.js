/* empty css            */import{d as w,a as S,c as p,o as l,u as k,b as d,p as c,e as t,q as a,m as _,I as f,r as m,t as g,F as O,s as N,G as D,H as E}from"./vendor.97c4a88b.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var b,$;const C=($=(b=window==null?void 0:window.Attendee)==null?void 0:b.cpUrl)!=null?$:"https://researchschool.org.uk/cp",F=w("trainings",{state:()=>({events:null,loading:!1}),actions:{fetchEvents(e,s){const n=this;this.loading=!0,S({method:"get",url:`${C}/craft-attendees/dashboard/events/${e}/${s}`}).then(function(r){var i;n.loading=!1,console.log("response",r.data),n.events=(i=r==null?void 0:r.data)==null?void 0:i.events})}}}),A={},T={name:"period",class:"block h-10 px-1 rounded-md bg-gray-300 border-gray-300"},B=k('<option value="2022">Academic Year (2021/22)</option><option value="2021">Academic Year (2020/21)</option><option value="2020">Academic Year (2019/20)</option><option value="3" selected>Last 3 months</option><option value="6">Last 6 months</option>',5),q=[B];function z(e,s){return l(),p("select",T,q)}var U=h(A,[["render",z]]);const V=d({components:{dropdown:U}}),I={class:"flex w-full sticky z-20 bg-gray-100 bg-opacity-70 py-4 backdrop-blur",style:{top:"50px"}},j=t("p",{class:"text-xl font-bold inline-block flex-grow",style:{"margin-bottom":"0!important"}},[_("Showing data from "),t("strong",null,"09 September 2021"),_(" to "),t("strong",null,"09 December 2021")],-1),H={style:{"margin-top":"0!important"}};function L(e,s,n,r,i,u){const o=c("dropdown");return l(),p("div",I,[j,t("div",H,[a(o)])])}var Y=h(V,[["render",L]]);const G=d({components:{apexchart:f},setup(){const e=m({chart:{id:"engagement-levels",stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},theme:{palette:"palette3"},legend:{show:!1},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},colors:["#2b63eb","#113795"]}),s=m([{name:"Engaged (1 module)",data:[44]},{name:"Sustained (2 modules)",data:[53]}]);return{chartOptions:e,series:s}}}),K={class:"bg-white p-4 rounded-xl mb-4"},P=t("p",{class:"font-bold text-lg"},"Engagement Data Completion",-1),R=t("span",{class:"block w-full text-center py-2"},[t("strong",null,"26"),_(" total training events, "),t("strong",null,"12"),_(" (46,15%) have engagement data.")],-1);function J(e,s,n,r,i,u){const o=c("apexchart");return l(),p("article",K,[P,a(o,{height:"150",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"]),R])}var M=h(G,[["render",J]]);const Q=d({props:{value:{type:Number,required:!0},type:{type:String,required:!0},average:{type:Number,required:!0},description:{type:String,required:!0}}}),W={class:"bg-white rounded-xl p-4"},X={class:"flex items-end pb-2",style:{"align-items":"end"}},Z={class:"text-6xl block text-blue-600",style:{"margin-bottom":"0!important"}},ee={class:"block pb-1",style:{"margin-bottom":"0!important"}},te={class:"block pb-1 text-xs"},se=_("Avg. ");function oe(e,s,n,r,i,u){return l(),p("article",W,[t("span",X,[t("span",Z,g(e.value),1),t("span",ee,g(e.type),1)]),t("span",te,[se,t("strong",null,g(e.average),1),_(" "+g(e.description),1)])])}var ae=h(Q,[["render",oe]]);const ne=d({components:{stat:ae}}),re={class:"grid grid-cols-2 xl:grid-cols-4 gap-4"};function ie(e,s,n,r,i,u){const o=c("stat");return l(),p("div",re,[a(o,{value:12,average:4,type:"event",description:"trainings per month"}),a(o,{value:278,average:23,type:"attendees",description:"attendees per training"}),a(o,{value:109,average:9,type:"schools",description:"schools per training"}),a(o,{value:19,average:9,type:"priority schools",description:"priority schools per training"})])}var ce=h(ne,[["render",ie]]);const pe=d({components:{apexchart:f},setup(){const e=m({chart:{id:"engagement-levels",stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},theme:{palette:"palette3"},legend:{position:"top"},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},colors:["#2b63eb","#113795","#07205b"]}),s=m([{name:"Engaged (1 module)",data:[44]},{name:"Sustained (2 modules)",data:[53]},{name:"Embedded (3+ modules)",data:[3]}]);return{chartOptions:e,series:s}}}),le={class:"bg-white p-4 rounded-xl mb-4"},de=t("p",{class:"font-bold text-lg"},"Engagement level",-1),he=t("span",{class:"block w-full text-center py-2"},"Showing the split of engagement levels across all events in this time period",-1);function ue(e,s,n,r,i,u){const o=c("apexchart");return l(),p("article",le,[de,a(o,{height:"150",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"]),he])}var _e=h(pe,[["render",ue]]);const me=d({components:{apexchart:f},setup(e){const s=m({chart:{id:"follow-on-support"},plotOptions:{bar:{horizontal:!0,height:"10%"}},theme:{palette:"palette3"},legend:{position:"top"},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]},yaxis:{labels:{style:{fontSize:"14px",fontFamily:'system-ui,BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'}}},colors:["#2b63eb","#113795","#07205b"]}),n=m([{data:[400,430,448,470,540,580,690,1100,1200,1380]}]);return{chartOptions:s,series:n}}}),ge={class:"bg-white p-4 rounded-xl mb-4"},fe=t("p",{class:"font-bold text-lg"},"Follow on support",-1),be=t("span",{class:"block w-full text-center py-2"},"Showing what types of follow on support have been offered.",-1);function $e(e,s,n,r,i,u){const o=c("apexchart");return l(),p("article",ge,[fe,a(o,{height:"400",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"]),be])}var ve=h(me,[["render",$e]]);const xe=d({components:{"stats-completion":M,"stats-figures":ce,"stats-levels":_e,"stats-support":ve}});function ye(e,s,n,r,i,u){const o=c("stats-figures"),v=c("stats-levels"),x=c("stats-support"),y=c("stats-completion");return l(),p(O,null,[a(o),a(v),a(x),a(y)],64)}var we=h(xe,[["render",ye]]);const Se=d({components:{"header-dashboard":Y,"stats-dashboard":we},setup(){const e=F();N(e),e.fetchEvents("main",9)}}),ke=async()=>{const e=D(Se);return e.use(E()),e.mount("#dashboard")};ke().then(e=>{});
//# sourceMappingURL=dashboard.45148d9a.js.map
