/* empty css            */import{A as P,B as M,d as y,s as S,f as H,H as R,c as m,o as r,p as U,a,t as _,I as L,k as C,J as T,r as $,w as z,l as w,z as f,b as k,n as B,m as I,F as Y,E as G,G as J}from"./vendor.bd85c310.js";import{_ as x,u as K}from"./plugin-vue_export-helper.6466da38.js";var F,q;const Q=(q=(F=window==null?void 0:window.Attendee)==null?void 0:F.cpUrl)!=null?q:"https://researchschool.org.uk/cp";var D,V;const W=(V=(D=window==null?void 0:window.Attendee)==null?void 0:D.csrf)!=null?V:"",O=P("trainings",{state:()=>({events:null,attendees:null,followOnSupport:null,followOnSupportOptions:null,period:3,site:"main",loading:!1}),actions:{fetchEvents(e){const t=this;this.loading=!0,this.site,this.period;const i={CRAFT_CSRF_TOKEN:W,events:e};M({method:"post",url:`${Q}/actions/craft-attendees/dashboard/fetch`,data:i}).then(function(s){var c,d,o,n;t.loading=!1,t.events=(c=s==null?void 0:s.data)==null?void 0:c.events,t.attendees=(d=s==null?void 0:s.data)==null?void 0:d.attendees,t.followOnSupport=(o=s==null?void 0:s.data)==null?void 0:o.follow_on_support,t.followOnSupportOptions=(n=s==null?void 0:s.data)==null?void 0:n.follow_on_support_options})}}}),X=y({setup(){const e=O(),{loading:t,period:i}=S(e);return{loading:t,period:i,handlePeriodChanged:c=>{e.period=parseInt(c.currentTarget.value),e.fetchEvents()}}}}),Z=["disabled"],ee=U('<option value="2022">Academic Year (2021/22)</option><option value="2021">Academic Year (2020/21)</option><option value="2020">Academic Year (2019/20)</option><option value="3">Last 3 months</option><option value="6">Last 6 months</option>',5),te=[ee];function se(e,t,i,s,c,d){return H((r(),m("select",{name:"period",class:"block h-10 px-1 rounded-md bg-gray-300 border-gray-300","onUpdate:modelValue":t[0]||(t[0]=o=>e.period=o),disabled:e.loading,onChange:t[1]||(t[1]=(...o)=>e.handlePeriodChanged&&e.handlePeriodChanged(...o))},te,40,Z)),[[R,e.period]])}var oe=x(X,[["render",se]]);const ne=y({components:{dropdown:oe},props:{start:{type:String,required:!0},end:{type:String,required:!0}},setup(){const e=O(),{loading:t}=S(e);return{loading:t}}}),ae={class:"flex w-full sticky z-20 bg-gray-100 bg-opacity-70 py-4 backdrop-blur",style:{top:"50px"}},le={class:"text-xl font-bold inline-block flex-grow",style:{"margin-bottom":"0!important"}},re=C("Showing data from "),ie=C(" to "),ce={style:{"margin-top":"0!important"}};function de(e,t,i,s,c,d){return r(),m("div",ae,[a("p",le,[re,a("strong",null,_(e.start),1),ie,a("strong",null,_(e.end),1)]),a("div",ce,[L(e.$slots,"default")])])}var pe=x(ne,[["render",de]]);const ue=y({components:{apexchart:T},setup(){const e=$({chart:{id:"engagement-levels",stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},theme:{palette:"palette3"},legend:{show:!1},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},colors:["#2b63eb","#113795"]}),t=$([{name:"Attendees",data:[0]},{name:"Attendees (100% verified)",data:[0]}]),i=K(),{loading:s,events:c,attendees:d}=S(i),o=$(0),n=$(0),h=$(0);return z(()=>{if(d.value){const v=d.value.reduce(function(p,l){return p[l.eventId]=p[l.eventId]||[],p[l.eventId].push(l),p},Object.create(null));o.value=Object.keys(v).length,Object.values(v).forEach((p,l)=>{n.value=n.value+p.length;let u=!0;for(const g in p)p[g].approved!=1&&(u=!1);u&&(h.value=h.value+1)}),t.value[0].data[0]=o.value,t.value[1].data[0]=h.value}}),{loading:s,chartOptions:e,series:t,events:c,allAttendees:o,totalAttendeesAreApproved:h,attendees:d}}}),he={class:"bg-white p-4 rounded-xl mb-4"},ge=a("p",{class:"font-bold text-lg"},"Engagement Data Completion",-1),ve={key:1,class:"text-xl w-full inline-block text-center text-gray-400"},me=C(" total training events, "),fe={key:2,class:"block relative flex items-center justify-center w-full",style:{height:"150px"}},ye=a("svg",{class:"animate-spin ml-2 mt-1 h-8 w-8 text-gray-400 inline-block -mt-px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:{"margin-bottom":"0!important"}},[a("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),a("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),be=[ye];function _e(e,t,i,s,c,d){var n,h,v,p,l;const o=w("apexchart");return r(),m("article",he,[ge,!e.loading&&((n=e.attendees)==null?void 0:n.length)>0?(r(),f(o,{key:0,height:"150",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"])):k("",!0),!e.loading&&((h=e.attendees)==null?void 0:h.length)===0?(r(),m("p",ve,"There is no data to preview")):k("",!0),a("span",{class:B(["block w-full text-center py-2",e.loading||((v=e.attendees)==null?void 0:v.length)===0?"opacity-0":""])},[a("strong",null,_((p=e.events)==null?void 0:p.length),1),me,a("strong",null,_(e.allAttendees),1),C(" have attendees and ("+_(((l=e.events)==null?void 0:l.length)/100*e.totalAttendeesAreApproved)+"%) are verified.",1)],2),e.loading?(r(),m("span",fe,be)):k("",!0)])}var $e=x(ue,[["render",_e]]);const we=y({props:{value:{type:Number,required:!0},type:{type:String,required:!0},average:{type:Number,required:!0},description:{type:String,required:!0}}}),ke={class:"bg-white rounded-xl p-4"},xe={class:"flex items-end pb-2",style:{"align-items":"end"}},Se={class:"text-6xl block text-blue-600",style:{"margin-bottom":"0!important"}},Oe={class:"block pb-1",style:{"margin-bottom":"0!important"}},Ae={class:"block pb-1 text-xs"},je=C("Avg. ");function Ce(e,t,i,s,c,d){return r(),m("article",ke,[a("span",xe,[a("span",Se,_(e.value),1),a("span",Oe,_(e.type),1)]),a("span",Ae,[je,a("strong",null,_(e.average),1),C(" "+_(e.description),1)])])}var Ne=x(we,[["render",Ce]]);const Ee=y({setup(){const e=O(),{loading:t}=S(e);return{loading:t}}}),Ie={class:"bg-white rounded-xl p-4"},Te={key:0},ze=a("span",{class:"animate-pulse flex items-end pb-2",style:{"align-items":"end"}},[a("span",{class:"text-6xl block text-blue-600 bg-blue-600 bg-opacity-10 rounded-md",style:{"margin-bottom":"0!important"}},"\xA0\xA0\xA0\xA0\xA0\xA0"),a("span",{class:"block pb-1 bg-gray-200 bg-opacity-50 flex-grow rounded-md",style:{"margin-bottom":"0!important"}},"\xA0")],-1),Be=a("span",{class:"animate-pulse block pb-1 text-xs bg-gray-200 bg-opacity-50 rounded-md"},"\xA0",-1),Fe=[ze,Be],qe={key:1,class:"flex items-center justify-center w-full h-full font-bold"};function De(e,t,i,s,c,d){return r(),m("article",Ie,[e.loading?(r(),m("div",Te,Fe)):(r(),m("div",qe," There is no data to preview "))])}var Ve=x(Ee,[["render",De]]);const Pe=y({components:{stat:Ne,"stat-empty":Ve},setup(){const e=O(),{loading:t,events:i,attendees:s,period:c}=S(e);return{loading:t,events:i,attendees:s,schools:()=>{const l=s.value.reduce(function(u,g){return u[g.orgName]=u[g.orgName]||[],u[g.orgName].push(g),u},Object.create(null));return Object.keys(l).length},priority:()=>{const l=s.value.filter(u=>u.priority===1);return Object.keys(l).length},averageEvents:()=>Math.ceil(i.value.length/c.value),averageAttendees:()=>{const l=s.value.reduce(function(g,b){return g[b.eventId]=g[b.eventId]||[],g[b.eventId].push(b),g},Object.create(null));let u=Object.values(l).map(g=>g.length);return u=Math.ceil(u.reduce((g,b)=>g+b,0)/u.length),isNaN(u)?0:u},averageSchools:()=>{var b;const l=s.value.reduce(function(A,j){return A[j.eventId]=A[j.eventId]||[],A[j.eventId].push(j),A},Object.create(null));let u=0;for(const A in l){const j=l[A].reduce(function(N,E){return N[E.orgName]=N[E.orgName]||[],N[E.orgName].push(E),N},Object.create(null));u+=Object.keys(j).length}const g=Math.ceil(u/((b=Object.keys(l))==null?void 0:b.length));return isNaN(g)?0:g},averagePrioritySchools:()=>{const l=s.value.filter(u=>u.priority===1);return Object.keys(l).length/i.value.length}}}}),Me={class:"grid grid-cols-2 xl:grid-cols-4 gap-4"};function He(e,t,i,s,c,d){const o=w("stat"),n=w("stat-empty");return r(),m("div",Me,[e.events&&!e.loading?(r(),f(o,{key:0,value:e.events.length,average:e.averageEvents(),type:"events",description:"trainings per month"},null,8,["value","average"])):(r(),f(n,{key:1})),e.attendees&&!e.loading?(r(),f(o,{key:2,value:e.attendees.length,average:e.averageAttendees(),type:"attendees",description:"attendees per training"},null,8,["value","average"])):(r(),f(n,{key:3})),e.attendees&&!e.loading?(r(),f(o,{key:4,value:e.schools(),average:e.averageSchools(),type:"schools",description:"schools per training"},null,8,["value","average"])):(r(),f(n,{key:5})),e.attendees&&!e.loading?(r(),f(o,{key:6,value:e.priority(),average:e.averagePrioritySchools(),type:"priority schools",description:"priority schools per training"},null,8,["value","average"])):(r(),f(n,{key:7}))])}var Re=x(Pe,[["render",He]]);const Ue=y({components:{apexchart:T},setup(){const e=$({chart:{id:"engagement-levels",stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},theme:{palette:"palette3"},legend:{position:"top"},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},colors:["#2b63eb","#113795","#07205b"]}),t=$([{name:"Engaged (1 module)",data:[0]},{name:"Sustained (2 modules)",data:[0]},{name:"Embedded (3+ modules)",data:[0]}]),i=O(),{loading:s,attendees:c}=S(i);return z(()=>{if(c.value){const d=c.value.reduce(function(o,n){return o[n.days]=o[n.days]||[],o[n.days].push(n),o},Object.create(null));for(const o in Object.keys(d)){const n=o<3?o:2;t.value[n].data[0]=parseInt(t.value[n].data[0])+Object.values(d)[o].length}}}),{loading:s,chartOptions:e,series:t,attendees:c}}}),Le={class:"bg-white p-4 rounded-xl mb-4"},Ye=a("p",{class:"font-bold text-lg"},"Engagement level",-1),Ge={key:1,class:"text-xl w-full inline-block text-center text-gray-400"},Je={key:2,class:"block relative flex items-center justify-center w-full",style:{height:"150px"}},Ke=a("svg",{class:"animate-spin ml-2 mt-1 h-8 w-8 text-gray-400 inline-block -mt-px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:{"margin-bottom":"0!important"}},[a("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),a("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Qe=[Ke];function We(e,t,i,s,c,d){var n,h,v;const o=w("apexchart");return r(),m("article",Le,[Ye,!e.loading&&((n=e.attendees)==null?void 0:n.length)>0?(r(),f(o,{key:0,height:"150",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"])):k("",!0),!e.loading&&((h=e.attendees)==null?void 0:h.length)===0?(r(),m("p",Ge,"There is no data to preview")):k("",!0),a("span",{class:B(["block w-full text-center py-2",e.loading||((v=e.attendees)==null?void 0:v.length)===0?"opacity-0":""])},"Showing the split of engagement levels across all events in this time period",2),e.loading?(r(),m("span",Je,Qe)):k("",!0)])}var Xe=x(Ue,[["render",We]]);const Ze=y({components:{apexchart:T},setup(e){const t=$({chart:{id:"follow-on-support"},plotOptions:{bar:{horizontal:!0,height:"10%"}},theme:{palette:"palette3"},legend:{position:"top"},xaxis:{categories:[]},yaxis:{labels:{style:{fontSize:"14px",fontFamily:'system-ui,BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'}}},colors:["#2b63eb","#113795","#07205b"]}),i=$([{name:"Follow on support",data:[]}]),s=O(),{loading:c,followOnSupport:d,followOnSupportOptions:o}=S(s);return z(()=>{var n;if(d.value){const h=d.value.reduce(function(p,l){return p[l.optionId]=p[l.optionId]||[],p[l.optionId].push(l),p},Object.create(null));let v=[];for(const p in h)v.push((n=o.value.find(l=>l.id==p))==null?void 0:n.name);t.value.xaxis.categories=v,i.value[0].data=[],Object.values(h).forEach((p,l)=>{i.value[0].data.push(p.length)})}}),{chartOptions:t,series:i,loading:c,followOnSupport:d}}}),et={class:"bg-white p-4 rounded-xl mb-4"},tt=a("p",{class:"font-bold text-lg"},"Follow on support",-1),st={key:1,class:"text-xl w-full inline-block text-center text-gray-400 flex items-center justify-center w-full block",style:{height:"800px"}},ot=a("span",null,"There is no data to preview",-1),nt=[ot],at={key:2,class:"block relative flex items-center justify-center w-full",style:{height:"800px"}},lt=a("svg",{class:"animate-spin ml-2 mt-1 h-8 w-8 text-gray-400 inline-block -mt-px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:{"margin-bottom":"0!important"}},[a("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),a("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),rt=[lt];function it(e,t,i,s,c,d){var n,h,v;const o=w("apexchart");return r(),m("article",et,[tt,!e.loading&&((n=e.followOnSupport)==null?void 0:n.length)>0?(r(),f(o,{key:0,height:"800px",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"])):k("",!0),!e.loading&&((h=e.followOnSupport)==null?void 0:h.length)===0?(r(),m("p",st,nt)):k("",!0),a("span",{class:B(["block w-full text-center py-2",e.loading||((v=e.followOnSupport)==null?void 0:v.length)===0?"opacity-0":""])},"Showing what types of follow on support have been offered.",2),e.loading?(r(),m("span",at,rt)):k("",!0)])}var ct=x(Ze,[["render",it]]);const dt=y({components:{"stats-completion":$e,"stats-figures":Re,"stats-levels":Xe,"stats-support":ct},props:{site:{type:String,required:!0},ids:{type:String,required:!0}},setup(e){const t=O();t.site=e.site=="*"?2:e.site,t.fetchEvents(e.ids)}});function pt(e,t,i,s,c,d){const o=w("stats-figures"),n=w("stats-levels"),h=w("stats-support"),v=w("stats-completion");return r(),m(Y,null,[I(o),I(n),I(h),I(v)],64)}var ut=x(dt,[["render",pt]]);const ht=y({components:{"header-dashboard":pe,"stats-dashboard":ut}}),gt=async()=>{const e=G(ht);return e.use(J()),e.mount("#dashboard")};gt().then(e=>{});
//# sourceMappingURL=dashboard.802c3ebc.js.map