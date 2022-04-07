/* empty css            */import{A as B,B as R,d as $,r,s as L,c as m,f as k,v as F,a as o,g as A,h as w,n as T,b as x,i as z,F as K,j as O,o as y,t as S,l as G,m as H,p as W,k as D,E as J,G as Q}from"./vendor.bd85c310.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";var P,V;const X=(V=(P=window.Attendee)==null?void 0:P.cpUrl)!=null?V:"https://researchschool.org.uk/cp",Z=B("export",{state:()=>({tags:null,loading:!1}),actions:{fetchTags(e){var c;const t=this;this.loading=!0;const l=new FormData;l.append("tag",e),l.append("CRAFT_CSRF_TOKEN",(c=window.Attendee)==null?void 0:c.csrf),l.append("action","actions/craft-attendees/tag/fetch-tags"),R({method:"post",url:`${X}/actions/craft-attendees/tag/fetch-tags`,data:l}).then(function(f){var i,d;t.loading=!1,((i=f.data)==null?void 0:i.success)&&(t.tags=(d=f.data)==null?void 0:d.tags)})},clearTags(){this.tags=null}}}),ee=$({setup(e,{emit:t}){const l=r(null),c=Z(),f=r(Math.floor(Math.random()*100)+Date.now()),{tags:i,loading:d}=L(c),p=r(""),s=r(null),u=r(!1),n=r(0),a=r(!0),v=r({}),g=h=>{var b,M;p.value=(M=(b=h.currentTarget)==null?void 0:b.dataset)==null?void 0:M.tag,u.value=!1,c.clearTags()},C=()=>{a.value=!0,p.value.length>2&&(u.value=!0,c.fetchTags(p.value))},E=h=>{var b;((b=p.value)==null?void 0:b.length)===0&&c.clearTags(),u.value=h},N=()=>{s.value&&clearTimeout(s.value),s.value=setTimeout(C,200)},Y=()=>{var h,b;n.value=n.value<((h=i.value)==null?void 0:h.length)-1?n.value+1:((b=i.value)==null?void 0:b.length)-1,l.value.querySelectorAll("li")[n.value].scrollIntoView({block:"nearest"})},U=()=>{n.value=n.value>0?n.value-1:0,l.value.querySelectorAll("li")[n.value].scrollIntoView({block:"nearest"})},_=()=>{var h;p.value=(h=i.value[n.value])==null?void 0:h.title,u.value=!1,c.clearTags()},q=()=>{p.value=null,j()},j=()=>{u.value=!1,c.clearTags()};return{tag:p,showDropdown:u,schoolDropdown:l,currentSelectionIndex:n,clearResults:a,loading:d,errors:v,uniqueId:f,tags:i,delay:N,handleTagSelect:g,handleTagInput:C,handleFocus:E,handleClear:q,onArrowDown:Y,onArrowUp:U,selectCurrentSelection:_}}}),te={class:"w-full relative"},oe=["aria-owns"],se=["aria-expanded","id"],ae=["data-tag"],ne={class:"block w-full text-sm font-medium"},le={key:1,class:"p-2 pt-3 inline-block"},re=o("svg",{class:"animate-spin mr-1 h-4 w-4 text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),ie=[re];function de(e,t,l,c,f,i){var d,p;return y(),m("div",te,[k(o("input",{name:"tag","onUpdate:modelValue":t[0]||(t[0]=s=>e.tag=s),onInput:t[1]||(t[1]=(...s)=>e.delay&&e.delay(...s)),onFocus:t[2]||(t[2]=s=>e.handleFocus(!0)),onBlur:t[3]||(t[3]=s=>e.handleFocus(!1)),onKeydown:[t[4]||(t[4]=A(w((...s)=>e.onArrowDown&&e.onArrowDown(...s),["prevent"]),["down"])),t[5]||(t[5]=A(w((...s)=>e.onArrowUp&&e.onArrowUp(...s),["prevent"]),["up"])),t[6]||(t[6]=A(w((...s)=>e.selectCurrentSelection&&e.selectCurrentSelection(...s),["prevent"]),["enter"]))],class:T(["block peer w-full px-2 py-2 text-sm text-gray-600 box-border bg-gray-100 rounded-lg pr-7",((d=e.errors)==null?void 0:d.tags)?"border-solid border-red-300":"border-solid border-gray-100"]),placeholder:"Search for a tag (optional)","aria-owns":`metaseed-list-${e.uniqueId}`,"aria-autocomplete":"list",role:"combobox"},null,42,oe),[[F,e.tag]]),((p=e.tag)==null?void 0:p.length)>3?(y(),m("span",{key:0,onClick:t[7]||(t[7]=(...s)=>e.handleClear&&e.handleClear(...s)),class:"text-blue-800 bg-gray-100 block w-6 text-center flex items-center justify-center h-8 absolute right-0 top-1 cursor:pointer"},"\u2715")):x("",!0),k(o("ul",{class:"absolute right-0 top-full mt-1 w-128 max-h-52 overflow-scroll z-10 bg-gray-100 rounded-lg shadow-xl",ref:"schoolDropdown","aria-expanded":e.showDropdown,role:"listbox",id:`tag-list-${e.uniqueId}`},[e.loading?x("",!0):(y(!0),m(K,{key:0},O(e.tags,(s,u)=>(y(),m("li",{key:s==null?void 0:s.slug,role:"option"},[o("span",{onMousedown:t[8]||(t[8]=(...n)=>e.handleTagSelect&&e.handleTagSelect(...n)),onTouch:t[9]||(t[9]=(...n)=>e.handleTagSelect&&e.handleTagSelect(...n)),role:"button","data-tag":s==null?void 0:s.title,class:T(["p-2 pointer-all hover:bg-blue-600 hover:text-white focus:bg-blue-600 block group",e.currentSelectionIndex===u?"bg-blue-600 text-white":""])},[o("span",ne,S(s.title),1)],42,ae)]))),128)),e.loading?(y(),m("li",le,ie)):x("",!0)],8,se),[[z,e.showDropdown]])])}var ue=I(ee,[["render",de]]);const ce=$({components:{"input-tags":ue},props:{csrf:{type:String,required:!0},site:{type:String,required:!0}},setup(){r(null),r(null);const e=r("2017-07-04"),t=r(new Date().getFullYear()+"-"+("0"+(new Date().getMonth()+1)).slice(-2)+"-"+("0"+new Date().getDate()).slice(-2)),l=r(new Date().getFullYear()+"-"+("0"+(new Date().getMonth()+1)).slice(-2)+"-"+("0"+new Date().getDate()).slice(-2)),c=r(new Date().getFullYear()+"-"+("0"+(new Date().getMonth()+1)).slice(-2)+"-"+("0"+(new Date().getDate()-1)).slice(-2)),f=r(""),i=r({}),d=new Date;return d.setMonth(d.getMonth()-3),e.value=d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2),{startDate:e,endDate:t,today:l,yesterday:c,tag:f,errors:i,validateForm:u=>{i.value={},t.value>l.value&&(i.value.endDate="This date can't be in the future"),e.value>c.value&&(i.value.startDate="This date can't be after yesterday"),Object.keys(i.value).length>0&&u.preventDefault()},setPredefined:u=>{const n=new Date,a=new Date,v=n.getFullYear();switch(u){case"6m":t.value=l.value,a.setMonth(a.getMonth()-6),e.value=a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2);break;case"12m":t.value=l.value,a.setMonth(a.getMonth()-12),e.value=a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2);break;case"cay":e.value=v-1+"-09-01",t.value=v+"-07-31";break;case"lay":e.value=v-2+"-09-01",t.value=v-1+"-07-31";break;default:t.value=l.value,a.setMonth(a.getMonth()-3),e.value=a.getFullYear()+"-"+("0"+(a.getMonth()+1)).slice(-2)+"-"+("0"+a.getDate()).slice(-2)}}}}}),pe=o("div",{class:"flex items-center mb-8"},[o("h2",null,"Export data from the trainings"),o("div",{class:"flex-grow text-right"},[o("button",{class:"bg-emerald-300 text-emerald-800 font-bold py-2 px-3 text-sm rounded-lg cursor-pointer inline-block mt-5"},"Export data")])],-1),ge=o("input",{type:"hidden",name:"action",value:"craft-attendees/csv/export"},null,-1),ve=["value"],he=["value"],fe={class:"grid grid-cols-5"},be=W('<label class="pr-4"><span class="text-xs font-bold text-gray-400 block mb-1">Which schools?</span><select name="school" class="block h-10 px-1 rounded-md bg-gray-100 w-full border-none"><option default value="all">All schools</option><option default value="prior">Priority schools</option></select></label><label class="pr-4"><span class="text-xs font-bold text-gray-400 block mb-1">Select an export type</span><select name="type" class="block h-10 px-1 rounded-md bg-gray-100 w-full border-none"><option default value="attendee">Attendee Data</option><option default value="event">Event ID reference table</option><option default value="subscriptions">Mailing list subscribers</option><option default value="school-attendee">School data</option></select></label>',2),me={class:"col-span-2 pr-4"},we=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},"Time period",-1),ye={class:"flex w-full"},xe={class:"inline-block flex-grow"},De={class:"flex"},ke=o("span",{class:"text-xs text-gray-400 inline-block"},"From",-1),Te=["max"],$e={key:0,class:"text-xs p-2 inline-block font-bold text-red-300"},Fe={class:"inline-block flex-grow"},Ae={class:"flex"},Se=o("span",{class:"text-xs text-gray-400 inline-block"},"To",-1),Ce=["max"],Me={key:0,class:"text-xs p-2 inline-block font-bold text-red-300"},Ie={class:"mt-0 text-xs"},Pe=D("Predefined selections: "),Ve=D(", "),Ee=D(", "),Ne=D(", "),Ye=D(" or "),Ue=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},"Filter by tag",-1);function _e(e,t,l,c,f,i){var p,s,u,n,a,v;const d=G("input-tags");return y(),m("form",{ref:"form",method:"post",action:"","accept-charset":"UTF-8",onSubmit:t[7]||(t[7]=(...g)=>e.validateForm&&e.validateForm(...g)),novalidate:""},[pe,ge,o("input",{type:"hidden",name:"CRAFT_CSRF_TOKEN",value:e.csrf},null,8,ve),o("input",{type:"hidden",name:"site",value:e.site},null,8,he),o("div",fe,[be,o("label",me,[we,o("div",ye,[o("div",xe,[o("div",De,[ke,k(o("input",{type:"date","onUpdate:modelValue":t[0]||(t[0]=g=>e.startDate=g),name:"start",max:e.yesterday,class:T(["px-2 flex-grow py-2 text-sm text-gray-600 appearance-none box-border bg-gray-100 rounded-lg border-solid",((p=e.errors)==null?void 0:p.startDate)?"border-red-300":"border-gray-100"])},null,10,Te),[[F,e.startDate]])]),((s=e.errors)==null?void 0:s.startDate)?(y(),m("span",$e,S((u=e.errors)==null?void 0:u.startDate),1)):x("",!0)]),o("div",Fe,[o("div",Ae,[Se,k(o("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=g=>e.endDate=g),name:"end",max:e.today,class:T(["flex-grow px-2 py-2 text-sm text-gray-600 appearance-none box-border bg-gray-100 rounded-lg border-solid",((n=e.errors)==null?void 0:n.endDate)?"border-red-300":"border-gray-100"])},null,10,Ce),[[F,e.endDate]])]),((a=e.errors)==null?void 0:a.endDate)?(y(),m("span",Me,S((v=e.errors)==null?void 0:v.endDate),1)):x("",!0)])]),o("p",Ie,[Pe,o("span",{class:"text-xs text-blue-600 cursor-pointer",onClick:t[2]||(t[2]=w(g=>e.setPredefined("3m"),["prevent"]))},"Last\xA03\xA0months"),Ve,o("span",{class:"text-xs text-blue-600 cursor-pointer",onClick:t[3]||(t[3]=w(g=>e.setPredefined("6m"),["prevent"]))},"Last\xA06\xA0months"),Ee,o("span",{class:"text-xs text-blue-600 cursor-pointer",onClick:t[4]||(t[4]=w(g=>e.setPredefined("12m"),["prevent"]))},"Last\xA0year"),Ne,o("span",{class:"text-xs text-blue-600 cursor-pointer",onClick:t[5]||(t[5]=w(g=>e.setPredefined("cay"),["prevent"]))},"Current\xA0academic\xA0year"),Ye,o("span",{class:"text-xs text-blue-600 cursor-pointer",onClick:t[6]||(t[6]=w(g=>e.setPredefined("lay"),["prevent"]))},"Last\xA0academic\xA0year")])]),o("label",null,[Ue,H(d)])])],544)}var qe=I(ce,[["render",_e]]);const je=$({components:{"form-export":qe}}),Be=async()=>{const e=J(je);return e.use(Q()),console.log("export?"),e.mount("#export")};Be().then(e=>{});
//# sourceMappingURL=export.b2413a03.js.map