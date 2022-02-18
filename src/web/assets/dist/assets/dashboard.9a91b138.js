/* empty css            */import{A as D,B,d as f,s as k,f as P,H as q,c as g,o as l,p as H,l as y,a as n,t as _,m as O,I as M,k as S,J as N,r as v,w as C,z as m,b,n as j,F as R,E as U,G as L}from"./vendor.bd85c310.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import{u as Y}from"./trainings.96c469cc.js";var I,T;const G=(T=(I=window==null?void 0:window.Attendee)==null?void 0:I.cpUrl)!=null?T:"https://researchschool.org.uk/cp";var z,V;const J=(V=(z=window==null?void 0:window.Attendee)==null?void 0:z.csrf)!=null?V:"",x=D("trainings",{state:()=>({events:null,attendees:null,unverifiedAttendees:null,followOnSupport:null,followOnSupportOptions:null,totals:[],period:3,site:"main",loading:!1}),actions:{fetchEvents(e){const s=this;this.loading=!0;const i=this.site,u=this.period,p={CRAFT_CSRF_TOKEN:J,site:i,period:u};B({method:"post",url:`${G}/actions/craft-attendees/dashboard/events`,data:p}).then(function(t){var o,a,r,c,h,d;s.loading=!1,s.events=(o=t==null?void 0:t.data)==null?void 0:o.events,s.attendees=(a=t==null?void 0:t.data)==null?void 0:a.attendees,s.unverifiedAttendees=(r=t==null?void 0:t.data)==null?void 0:r.unverified_attendees,s.followOnSupport=(c=t==null?void 0:t.data)==null?void 0:c.follow_on_support,s.followOnSupportOptions=(h=t==null?void 0:t.data)==null?void 0:h.follow_on_support_options,s.totals=(d=t==null?void 0:t.data)==null?void 0:d.totals})}}}),K=f({setup(){const e=x(),{loading:s,period:i}=k(e);return{loading:s,period:i,handlePeriodChanged:p=>{e.period=parseInt(p.currentTarget.value),e.fetchEvents()}}}}),Q=["disabled"],W=H('<option value="2022">Academic Year (2021/22)</option><option value="2021">Academic Year (2020/21)</option><option value="2020">Academic Year (2019/20)</option><option value="3">Last 3 months</option><option value="6">Last 6 months</option>',5),X=[W];function Z(e,s,i,u,p,t){return P((l(),g("select",{name:"period",class:"block h-10 px-1 rounded-md bg-gray-300 border-gray-300","onUpdate:modelValue":s[0]||(s[0]=o=>e.period=o),disabled:e.loading,onChange:s[1]||(s[1]=(...o)=>e.handlePeriodChanged&&e.handlePeriodChanged(...o))},X,40,Q)),[[q,e.period]])}var ee=$(K,[["render",Z]]);const te=f({components:{dropdown:ee},props:{start:{type:String,required:!0},end:{type:String,required:!0}},setup(){const e=x(),{loading:s}=k(e);return{loading:s}}}),se={class:"flex w-full sticky z-20 bg-gray-100 bg-opacity-70 py-4 backdrop-blur",style:{top:"50px"}},oe={class:"text-xl font-bold inline-block flex-grow",style:{"margin-bottom":"0!important"}},ae=S("Showing data from "),ne=S(" to "),le={style:{"margin-top":"0!important"}};function re(e,s,i,u,p,t){const o=y("dropdown");return l(),g("div",se,[n("p",oe,[ae,n("strong",null,_(e.start),1),ne,n("strong",null,_(e.end),1)]),n("div",le,[O(o),M(e.$slots,"default")])])}var ie=$(te,[["render",re]]);const ce=f({components:{apexchart:N},setup(){const e=v({chart:{id:"engagement-levels",stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},theme:{palette:"palette3"},legend:{show:!1},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},colors:["#2b63eb","#113795"]}),s=v([{name:"Attendees (unverified)",data:[0]},{name:"Attendees (verified)",data:[0]}]),i=Y(),{loading:u,totals:p,attendees:t,unverifiedAttendees:o}=k(i),a=v(0);v(0);const r=v(0);v(0);const c=v(0);return C(()=>{var h,d;if(t.value){let A=[];for(const w in t.value)A[""+t.value[w].eventId]=((h=A[""+t.value[w].eventId])!=null?h:0)+1;let F=[];for(const w in o.value)F[""+o.value[w].eventId]=((d=F[""+o.value[w].eventId])!=null?d:0)+1;r.value=Object.keys(A).length;let E=0;for(const w in F)Object.keys(A).indexOf(w)<0&&E++;a.value=Object.keys(A).length+E,r.value=t.value.length,c.value=o.value.length,s.value[0].data[0]=c.value,s.value[1].data[0]=r.value}}),{loading:u,chartOptions:e,series:s,totals:p,allAttendees:a,totalAttendeesAreApproved:r,totalAttendeesAreDispproved:c,attendees:t}}}),de={class:"bg-white p-4 rounded-xl mb-4"},pe=n("p",{class:"font-bold text-lg"},"Engagement Data Completion",-1),ue={key:1,class:"text-xl w-full inline-block text-center text-gray-400"},he=S(" total training events, "),ge={key:2,class:"block relative flex items-center justify-center w-full",style:{height:"150px"}},ve=n("svg",{class:"animate-spin ml-2 mt-1 h-8 w-8 text-gray-400 inline-block -mt-px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:{"margin-bottom":"0!important"}},[n("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),n("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),me=[ve];function fe(e,s,i,u,p,t){var a,r,c;const o=y("apexchart");return l(),g("article",de,[pe,!e.loading&&((a=e.attendees)==null?void 0:a.length)>0?(l(),m(o,{key:0,height:"150",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"])):b("",!0),!e.loading&&((r=e.attendees)==null?void 0:r.length)===0?(l(),g("p",ue,"There is no data to preview")):b("",!0),n("span",{class:j(["block w-full text-center py-2",e.loading||((c=e.attendees)==null?void 0:c.length)===0?"opacity-0":""])},[n("strong",null,_(e.totals.events),1),he,n("strong",null,_(e.allAttendees),1),S(" have attendees and ("+_((e.totalAttendeesAreApproved/e.totalAttendeesAreDispproved*100).toFixed(2).replace(/[.,]00$/,""))+"%) are verified.",1)],2),e.loading?(l(),g("span",ge,me)):b("",!0)])}var ye=$(ce,[["render",fe]]);const _e=f({props:{value:{type:Number,required:!0},type:{type:String,required:!0},average:{type:Number,required:!0},description:{type:String,required:!0}}}),be={class:"bg-white rounded-xl p-4"},$e={class:"flex items-end pb-2",style:{"align-items":"end"}},we={class:"text-6xl block text-blue-600",style:{"margin-bottom":"0!important"}},ke={class:"block pb-1",style:{"margin-bottom":"0!important"}},xe={class:"block pb-1 text-xs"},Se=S("Avg. ");function Ae(e,s,i,u,p,t){return l(),g("article",be,[n("span",$e,[n("span",we,_(e.value),1),n("span",ke,_(e.type),1)]),n("span",xe,[Se,n("strong",null,_(e.average),1),S(" "+_(e.description),1)])])}var Oe=$(_e,[["render",Ae]]);const Ce=f({setup(){const e=x(),{loading:s}=k(e);return{loading:s}}}),Fe={class:"bg-white rounded-xl p-4"},Ne={key:0},je=n("span",{class:"animate-pulse flex items-end pb-2",style:{"align-items":"end"}},[n("span",{class:"text-6xl block text-blue-600 bg-blue-600 bg-opacity-10 rounded-md",style:{"margin-bottom":"0!important"}},"\xA0\xA0\xA0\xA0\xA0\xA0"),n("span",{class:"block pb-1 bg-gray-200 bg-opacity-50 flex-grow rounded-md",style:{"margin-bottom":"0!important"}},"\xA0")],-1),Ee=n("span",{class:"animate-pulse block pb-1 text-xs bg-gray-200 bg-opacity-50 rounded-md"},"\xA0",-1),Ie=[je,Ee],Te={key:1,class:"flex items-center justify-center w-full h-full font-bold"};function ze(e,s,i,u,p,t){return l(),g("article",Fe,[e.loading?(l(),g("div",Ne,Ie)):(l(),g("div",Te," There is no data to preview "))])}var Ve=$(Ce,[["render",ze]]);const De=f({components:{stat:Oe,"stat-empty":Ve},setup(){const e=x(),{loading:s,events:i,attendees:u,period:p,totals:t}=k(e),o=v(0),a=()=>{const d=parseFloat(o.value/t.value.events);return isNaN(d)?0:parseFloat(d).toFixed(2).replace(/[.,]00$/,"")},r=()=>(Math.ceil(i.value.length/p.value),isNaN(i)?0:i.toFixed(2).replace(/[.,]00$/,"")),c=()=>{const d=t.value.attendees/t.value.events;return isNaN(d)?0:parseFloat(d).toFixed(2).replace(/[.,]00$/,"")},h=()=>{const d=t.value.schools/t.value.events;return isNaN(d)?0:parseFloat(d).toFixed(2).replace(/[.,]00$/,"")};return C(()=>{u.value&&(o.value=u.value.filter(d=>d.priority==1).length)}),{loading:s,events:i,attendees:u,totals:t,priority:o,averageEvents:r,averageAttendees:c,averageSchools:h,averagePrioritySchools:a}}}),Be={class:"grid grid-cols-2 xl:grid-cols-4 gap-4"};function Pe(e,s,i,u,p,t){var r,c,h;const o=y("stat"),a=y("stat-empty");return l(),g("div",Be,[e.events&&!e.loading?(l(),m(o,{key:0,value:parseInt((r=e.totals.events)!=null?r:e.events.length),average:parseFloat(e.averageEvents()),type:"events",description:"trainings per month"},null,8,["value","average"])):(l(),m(a,{key:1})),e.attendees&&!e.loading?(l(),m(o,{key:2,value:parseInt((c=e.totals.attendees)!=null?c:e.attendees.length),average:parseFloat(e.averageAttendees()),type:"attendees",description:"attendees per training"},null,8,["value","average"])):(l(),m(a,{key:3})),e.attendees&&!e.loading?(l(),m(o,{key:4,value:parseInt((h=e.totals.schools)!=null?h:0),average:parseFloat(e.averageSchools()),type:"schools",description:"schools per training"},null,8,["value","average"])):(l(),m(a,{key:5})),e.attendees&&!e.loading?(l(),m(o,{key:6,value:e.priority,average:parseFloat(e.averagePrioritySchools()),type:"priority schools",description:"priority schools per training"},null,8,["value","average"])):(l(),m(a,{key:7}))])}var qe=$(De,[["render",Pe]]);const He=f({components:{apexchart:N},setup(){const e=v({chart:{id:"engagement-levels",stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},theme:{palette:"palette3"},legend:{position:"top"},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},colors:["#2b63eb","#113795","#07205b"]}),s=v([{name:"Engaged (1 module)",data:[0]},{name:"Sustained (2 modules)",data:[0]},{name:"Embedded (3+ modules)",data:[0]}]),i=x(),{loading:u,attendees:p}=k(i);return C(()=>{if(p.value){const t=p.value.reduce(function(o,a){return o[a.days]=o[a.days]||[],o[a.days].push(a),o},Object.create(null));for(const o in Object.keys(t)){const a=o<3?o:2;s.value[a].data[0]=parseInt(s.value[a].data[0])+Object.values(t)[o].length}}}),{loading:u,chartOptions:e,series:s,attendees:p}}}),Me={class:"bg-white p-4 rounded-xl mb-4"},Re=n("p",{class:"font-bold text-lg"},"Engagement level",-1),Ue={key:1,class:"text-xl w-full inline-block text-center text-gray-400"},Le={key:2,class:"block relative flex items-center justify-center w-full",style:{height:"150px"}},Ye=n("svg",{class:"animate-spin ml-2 mt-1 h-8 w-8 text-gray-400 inline-block -mt-px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:{"margin-bottom":"0!important"}},[n("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),n("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ge=[Ye];function Je(e,s,i,u,p,t){var a,r,c;const o=y("apexchart");return l(),g("article",Me,[Re,!e.loading&&((a=e.attendees)==null?void 0:a.length)>0?(l(),m(o,{key:0,height:"150",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"])):b("",!0),!e.loading&&((r=e.attendees)==null?void 0:r.length)===0?(l(),g("p",Ue,"There is no data to preview")):b("",!0),n("span",{class:j(["block w-full text-center py-2",e.loading||((c=e.attendees)==null?void 0:c.length)===0?"opacity-0":""])},"Showing the split of engagement levels across all events in this time period",2),e.loading?(l(),g("span",Le,Ge)):b("",!0)])}var Ke=$(He,[["render",Je]]);const Qe=f({components:{apexchart:N},setup(e){const s=v({chart:{id:"follow-on-support"},plotOptions:{bar:{horizontal:!0,height:"10%"}},theme:{palette:"palette3"},legend:{position:"top"},xaxis:{categories:[]},yaxis:{labels:{style:{fontSize:"14px",fontFamily:'system-ui,BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'}}},colors:["#2b63eb","#113795","#07205b"]}),i=v([{name:"Follow on support",data:[]}]),u=x(),{loading:p,followOnSupport:t,followOnSupportOptions:o}=k(u);return C(()=>{var a;if(t.value&&t.value){const r=t.value.reduce(function(h,d){return h[d.optionId]=h[d.optionId]||[],h[d.optionId].push(d),h},Object.create(null));let c=[];for(const h in r)c.push((a=o.value.find(d=>d.id==h))==null?void 0:a.name);s.value.xaxis.categories=c,i.value[0].data=[],Object.values(r).forEach((h,d)=>{i.value[0].data.push(h.length)})}}),{chartOptions:s,series:i,loading:p,followOnSupport:t}}}),We={class:"bg-white p-4 rounded-xl mb-4"},Xe=n("p",{class:"font-bold text-lg"},"Follow on support",-1),Ze={key:1,class:"text-xl w-full inline-block text-center text-gray-400 flex items-center justify-center w-full block",style:{height:"800px"}},et=n("span",null,"There is no data to preview",-1),tt=[et],st={key:2,class:"block relative flex items-center justify-center w-full",style:{height:"800px"}},ot=n("svg",{class:"animate-spin ml-2 mt-1 h-8 w-8 text-gray-400 inline-block -mt-px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:{"margin-bottom":"0!important"}},[n("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),n("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),at=[ot];function nt(e,s,i,u,p,t){var a,r,c;const o=y("apexchart");return l(),g("article",We,[Xe,!e.loading&&((a=e.followOnSupport)==null?void 0:a.length)>0?(l(),m(o,{key:0,height:"800px",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"])):b("",!0),!e.loading&&((r=e.followOnSupport)==null?void 0:r.length)===0?(l(),g("p",Ze,tt)):b("",!0),n("span",{class:j(["block w-full text-center py-2",e.loading||((c=e.followOnSupport)==null?void 0:c.length)===0?"opacity-0":""])},"Showing what types of follow on support have been offered.",2),e.loading?(l(),g("span",st,at)):b("",!0)])}var lt=$(Qe,[["render",nt]]);const rt=f({components:{"stats-completion":ye,"stats-figures":qe,"stats-levels":Ke,"stats-support":lt},props:{site:{type:String,required:!0}},setup(e){const s=x();s.site=e.site=="*"?2:e.site,s.fetchEvents(e.ids)}});function it(e,s,i,u,p,t){const o=y("stats-figures"),a=y("stats-levels"),r=y("stats-support"),c=y("stats-completion");return l(),g(R,null,[O(o),O(a),O(r),O(c)],64)}var ct=$(rt,[["render",it]]);const dt=f({components:{"header-dashboard":ie,"stats-dashboard":ct}}),pt=async()=>{const e=U(dt);return e.use(L()),e.mount("#dashboard")};pt().then(e=>{});
//# sourceMappingURL=dashboard.9a91b138.js.map
