var xe=Object.defineProperty;var ve=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ge=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,le=(e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&ge(e,n,t[n]);if(ve)for(var n of ve(t))Se.call(t,n)&&ge(e,n,t[n]);return e};import{d as Ae,a as ae,b as F,s as T,c,t as $,o as u,r as f,w as X,e as o,n as _,f as Ce,g as me,v as Fe,h as de,i as ie,j as S,k as Ee,F as re,l as fe,m as E,p as R,q as Z,u as ye,x as ke,y as Ie,z as De}from"./vendor.cc18e8c4.js";var we,$e;const ue=($e=(we=window.Attendee)==null?void 0:we.cpUrl)!=null?$e:"https://researchschool.org.uk/cp",q=Ae("attendees",{state:()=>({attendees:null,totalAttendees:null,attendeeInput:null,attendeeFormErrors:!1,attendeeSuccess:!1,showForm:!1,loading:!1,loadingApi:!1,schools:null}),actions:{async fetchSchools(e){var t;if(e){this.loadingApi=!0;const s=await ae.create({baseURL:`https://api.v2.metaseed.io/schools/?mode=legacy&query=${e}`,timeout:3e3}).get("");(s==null?void 0:s.data)?(this.schools=(t=s.data)==null?void 0:t.suggestions,this.loadingApi=!1):this.loadingApi=!1}},deleteAttendee(e){const t=this;this.loading=!0,ae({method:"post",url:`${ue}/actions/craft-attendees/training/delete`,data:e}).then(function(n){t.loading=!1,t.attendees=t.attendees.filter(s=>s.id!=e.attendeeId)})},submitAttendee(e){let t={};if(e instanceof FormData)for(var n of e.entries())t[n[0]]=n[1];else t=e;this.attendeeFormErrors=!1,this.loading=!0,this.attendeeSuccess=!1,this.attendeeInput=t;const s=this;ae({method:"post",url:`${ue}/actions/craft-attendees/training/save`,data:e}).then(function(a){var h;if(!a.data.success)s.attendeeFormErrors=a.data.errors,s.loading=!1,s.attendeeSuccess=!1;else{let l=s.attendees.filter(b=>{var p,g;return b.id==((g=(p=a==null?void 0:a.data)==null?void 0:p.attendee)==null?void 0:g.id)});const d=s.attendees.findIndex(b=>{var p,g;return b.id==((g=(p=a==null?void 0:a.data)==null?void 0:p.attendee)==null?void 0:g.id)});l.length>0?(l=l[0],l.name=t==null?void 0:t.name,l.orgName=t==null?void 0:t.orgName,l.postCode=t==null?void 0:t.postCode,l.days=t==null?void 0:t.days,l.email=t==null?void 0:t.email,l.newsletter=t==null?void 0:t.newsletter,l.approved=t==null?void 0:t.approved,l.jobRole=t==null?void 0:t.jobRole,s.attendees[d]=l):s.attendees.unshift((h=a==null?void 0:a.data)==null?void 0:h.attendee),s.loading=!1,s.attendeeFormErrors=!1,s.attendeeSuccess=!0,s.attendeeInput=null}})},fetchAttendees(e,t,n){const s=this;this.loading=!0,ae({method:"get",url:`${ue}/craft-attendees/trainings/attendees/${e}/${t}/${n}`}).then(function(a){var h,l,d,b;s.loading=!1,s.totalAttendees=parseInt((l=(h=a==null?void 0:a.data)==null?void 0:h.meta)==null?void 0:l.total),s.attendees=s.attendees?s.attendees.concat((d=a==null?void 0:a.data)==null?void 0:d.attendees):(b=a==null?void 0:a.data)==null?void 0:b.attendees})},setShowFrom(e){this.attendeeFormErrors=!1,this.showForm=e},resetForm(){this.loading=!1,this.attendeeFormErrors=!1,this.attendeeInput=null},clearSchools(){this.schools=null}}});var N=(e,t)=>{const n=e.__vccOpts||e;for(const[s,a]of t)n[s]=a;return n};const Ne=F({setup(){const e=q(),{showForm:t}=T(e);return{showForm:t,toggle:()=>{e.setShowFrom(!0)}}}});function Te(e,t,n,s,a,h){return u(),c("button",{class:"bg-emerald-300 text-emerald-800 font-bold py-2 px-3 text-sm rounded-lg cursor-pointer",onClick:t[0]||(t[0]=(...l)=>e.toggle&&e.toggle(...l))},$(e.showForm?"Close form":"Add attendee"),1)}var qe=N(Ne,[["render",Te]]);const Re=F({props:{label:{type:String,required:!1},name:{type:String,required:!0},checked:{default:0}},setup(e){const t=f(0);return X(()=>{t.value=e.checked==0?0:1}),{toggle:()=>{t.value=t.value==0?1:0},checkedValue:t}}}),Ve={class:"inline-block relative"},ze=["name","value","checked"],Me={class:"peer-focus:ring-2 peer-focus:ring-opacity-50 peer-focus:ring-blue-700 peer-focus:shadow-lg outline-none rounded-full inline-block cursor-pointer"};function Pe(e,t,n,s,a,h){return u(),c("div",Ve,[o("input",{name:e.name,type:"checkbox",class:"peer sr-only",value:e.checkedValue,checked:e.checkedValue==1,onClick:t[0]||(t[0]=(...l)=>e.toggle&&e.toggle(...l))},null,8,ze),o("div",Me,[o("div",{class:_(["block h-6 rounded-full w-10 cursor-pointer bg-opacity-100",e.checkedValue==1?"bg-emerald-100":"bg-indigo-100"])},null,2),o("div",{class:_(["absolute w-4 h-4 transition rounded-full left-1 top-1 flex items-center not-sr-only",e.checkedValue==1?"bg-emerald-700 transform translate-x-full":"bg-gray-400"])},null,2)])])}var Ue=N(Re,[["render",Pe]]);const He=F({props:{values:{type:Object,default:{}}},emits:["schoolSelect"],setup(e,{emit:t}){var z,M,P,U,H,B,L,j,K,Y,G,J;const n=f(null),s=q(),a=f(Math.floor(Math.random()*100)+Date.now()),{attendeeInput:h,attendeeFormErrors:l,schools:d,loadingApi:b}=T(s),p=f((U=(P=(z=h.value)==null?void 0:z.orgName)!=null?P:(M=e.values)==null?void 0:M.orgName)!=null?U:""),g=f((j=(L=(H=h.value)==null?void 0:H.orgUrn)!=null?L:(B=e.values)==null?void 0:B.orgUrn)!=null?j:""),i=f((J=(G=(K=h.value)==null?void 0:K.postCode)!=null?G:(Y=e.values)==null?void 0:Y.postCode)!=null?J:""),r=f(null),x=f(!1),v=f(0),y=f(!0),m=k=>{var w,C,I,D;p.value=k.currentTarget.textContent,g.value=(C=(w=k.currentTarget)==null?void 0:w.dataset)==null?void 0:C.urn,i.value=(D=(I=k.currentTarget)==null?void 0:I.dataset)==null?void 0:D.postcode,y.value=!1,t("schoolSelect",p.value,g.value,i.value),x.value=!1,s.clearSchools()},A=()=>{y.value=!0,p.value.length>2&&(x.value=!0,s.fetchSchools(p.value))},O=k=>{var w;((w=p.value)==null?void 0:w.length)===0&&s.clearSchools(),x.value=k},ee=()=>{r.value&&clearTimeout(r.value),r.value=setTimeout(A,200)},te=()=>{var k,w;v.value=v.value<((k=d.value)==null?void 0:k.length)-1?v.value+1:((w=d.value)==null?void 0:w.length)-1,n.value.querySelectorAll("li")[v.value].scrollIntoView({block:"nearest"})},oe=()=>{v.value=v.value>0?v.value-1:0,n.value.querySelectorAll("li")[v.value].scrollIntoView({block:"nearest"})},se=()=>{var w,C,I,D,Q;const k={currentTarget:{textContent:(w=d.value[v.value])==null?void 0:w.value,dataset:{urn:(I=(C=d.value[v.value])==null?void 0:C.data)==null?void 0:I.urn,postcode:(Q=(D=d.value[v.value])==null?void 0:D.data)==null?void 0:Q.postcode}}};m(k)},ne=()=>{var k;p.value=null,((k=g.value)==null?void 0:k.length)>0&&V()};Ce(p,(k,w)=>{var C;k!==w&&((C=g.value)==null?void 0:C.length)>0&&y.value&&V(),y.value=!0});const V=()=>{g.value=null,i.value=null,t("schoolSelect",p.value,g.value,i.value),x.value=!1,s.clearSchools()};return{attendeeInput:h,attendeeFormErrors:l,school:p,schools:d,urn:g,uniqueId:a,postcode:i,showDropdown:x,schoolDropdown:n,currentSelectionIndex:v,clearResults:y,loadingApi:b,delay:ee,handleSchoolSelect:m,handleSchoolInput:A,handleFocus:O,handleClear:ne,onArrowDown:te,onArrowUp:oe,selectCurrentSelection:se}}}),Be=["value"],Le={class:"block mb-6"},je=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},[E("School / Organisation "),o("span",{class:"text-blue-500"},"*")],-1),Ke={class:"w-full relative"},Ye=["aria-owns"],Ge=["aria-expanded","id"],Je=["data-postcode","data-urn"],Qe={key:1,class:"p-2 block"},We={key:1,class:"p-2 pt-3 inline-block"},Xe=o("svg",{class:"animate-spin mr-1 h-4 w-4 text-emerald-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ze=[Xe],Oe={class:"block mb-6"},et=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},[E("Post code "),o("span",{class:"text-blue-500"},"*")],-1),tt=["value","readonly"];function ot(e,t,n,s,a,h){var l,d,b,p,g,i;return u(),c(re,null,[o("input",{type:"hidden",name:"orgUrn",value:(l=e.urn)!=null?l:""},null,8,Be),o("label",Le,[je,o("div",Ke,[me(o("input",{name:"orgName","onUpdate:modelValue":t[0]||(t[0]=r=>e.school=r),onInput:t[1]||(t[1]=(...r)=>e.delay&&e.delay(...r)),onFocus:t[2]||(t[2]=r=>e.handleFocus(!0)),onBlur:t[3]||(t[3]=r=>e.handleFocus(!1)),onKeydown:[t[4]||(t[4]=de(ie((...r)=>e.onArrowDown&&e.onArrowDown(...r),["prevent"]),["down"])),t[5]||(t[5]=de(ie((...r)=>e.onArrowUp&&e.onArrowUp(...r),["prevent"]),["up"])),t[6]||(t[6]=de(ie((...r)=>e.selectCurrentSelection&&e.selectCurrentSelection(...r),["prevent"]),["enter"]))],class:_(["block peer w-full px-2 py-2 text-sm text-gray-600 box-border bg-gray-100 rounded-lg pr-7",((d=e.attendeeFormErrors)==null?void 0:d.orgName)?"border-solid border-red-300":"border-solid border-gray-100"]),placeholder:"Search for a school or organisation","aria-owns":`metaseed-list-${e.uniqueId}`,"aria-autocomplete":"list",role:"combobox"},null,42,Ye),[[Fe,e.school]]),((b=e.school)==null?void 0:b.length)>3?(u(),c("span",{key:0,onClick:t[7]||(t[7]=(...r)=>e.handleClear&&e.handleClear(...r)),class:"text-blue-800 bg-gray-100 block w-6 text-center flex items-center justify-center h-8 absolute right-0 top-1 cursor:pointer"},"\u2715")):S("",!0),me(o("ul",{class:"absolute left-0 top-full mt-1 w-full max-h-52 overflow-scroll z-10 bg-gray-100 rounded-lg shadow-xl",ref:"schoolDropdown","aria-expanded":e.showDropdown,role:"listbox",id:`metaseed-list-${e.uniqueId}`},[e.loadingApi?S("",!0):(u(!0),c(re,{key:0},fe(e.schools,(r,x)=>{var v,y,m;return u(),c("li",{key:(v=r==null?void 0:r.data)==null?void 0:v.urn,role:"option"},[(r==null?void 0:r.data)?(u(),c("span",{key:0,onMousedown:t[8]||(t[8]=(...A)=>e.handleSchoolSelect&&e.handleSchoolSelect(...A)),onTouch:t[9]||(t[9]=(...A)=>e.handleSchoolSelect&&e.handleSchoolSelect(...A)),role:"button","data-postcode":(y=r==null?void 0:r.data)==null?void 0:y.postcode,"data-urn":(m=r==null?void 0:r.data)==null?void 0:m.urn,class:_(["p-2 pointer-all hover:bg-blue-600 hover:text-white focus:bg-blue-600 text-sm block",e.currentSelectionIndex===x?"bg-blue-600 text-white":""])},$(r.value),43,Je)):(u(),c("span",Qe," There's no school that matches the input "))])}),128)),e.loadingApi?(u(),c("li",We,Ze)):S("",!0)],8,Ge),[[Ee,e.showDropdown]])])]),o("label",Oe,[et,o("input",{name:"postCode",value:e.postcode,readonly:((p=e.urn)==null?void 0:p.length)>0,class:_(["block w-full px-2 py-2 text-sm text-gray-600 appearance-none box-border bg-gray-100 rounded-lg",((g=e.urn)==null?void 0:g.length)>0?"text-gray-400 cursor-not-allowed":"",((i=e.attendeeFormErrors)==null?void 0:i.postCode)?"border-solid border-red-300":"border-solid border-gray-100"]),placeholder:"Enter a post code"},null,10,tt)])],64)}var st=N(He,[["render",ot]]);const nt=F({components:{"input-school":st,"input-switch":Ue},props:{csrf:{type:String,required:!0},event:{type:String,required:!0},title:{type:String},values:{type:Object,default:{}}},setup(e,{emit:t}){const n=f(null);f(null),f(null);const s=f(null),a=q(),{attendeeInput:h,attendeeFormErrors:l,loading:d,showForm:b,resetAttendeeInput:p}=T(a),g=v=>{if(v.preventDefault(),n.value){let m=new FormData(n.value),A={};for(var y of m.entries())A[y[0]]=y[1];a.submitAttendee(m),t("submitForm")}},i=()=>{a.resetForm(),t("hideForm")},r=v=>{v.keyCode===27&&i()},x=(v,y,m)=>{s.value=y};return X(()=>{var v,y;(v=n.value)==null||v.querySelectorAll('input[name="orgName"]')[0].focus(),b.value&&((y=n.value)==null||y.querySelectorAll('input[name="orgName"]')[0].focus())}),{form:n,attendeeInput:h,attendeeFormErrors:l,loading:d,showForm:b,urn:s,handleSubmit:g,hideForm:i,keyup:r,handleSchoolSelect:x}}}),lt=o("input",{type:"hidden",name:"action",value:"actions/craft-attendees/training/save"},null,-1),at=["value"],rt=["value"],dt=["value"],it={class:"block mb-6"},ut=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},[E("Name of attendee "),o("span",{class:"text-blue-500"},"*")],-1),ct=["value"],pt={class:"block mb-6"},ht=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},[E("Attendee's job role "),o("span",{class:"text-blue-500"},"*")],-1),bt=["value"],vt=ye('<option value="" default disabled class="text-gray-400">Select the job role of the attendee</option><option value="na">Not Applicable</option><option value="support">Support Staff</option><option value="leader-middle">Middle leader</option><option value="leader">Leadership</option><option value="teacher">Teacher</option>',6),gt=[vt],mt={class:"block mb-6"},ft=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},[E("Email address of attendee "),o("span",{class:"text-blue-500"},"*")],-1),yt=["value"],kt={class:"block mb-6"},wt=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},[E("Attending days "),o("span",{class:"text-blue-500"},"*")],-1),$t=["value"],xt=ye('<option default value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>',10),_t=[xt],St={class:"block mb-6"},At=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},"Subscribe for the newsletter",-1),Ct={class:"block mb-6"},Ft=o("span",{class:"text-xs font-bold text-gray-400 block mb-1"},"School is approved",-1),Et={key:0,class:"text-blue-600 text-xs"},It=E("This school is a verified school. Visit the "),Dt=["href"],Nt={class:"mb-6"},Tt=o("span",{class:"text-xs font-bold text-gray-400 block mb-2"},"Actions",-1),qt={class:"bg-emerald-300 text-emerald-800 font-bold py-2 px-3 text-sm rounded-lg cursor-pointer inline-block"},Rt={key:0,class:"animate-spin -ml-1 mr-1 h-3 w-3 text-emerald-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Vt=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),zt=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Mt=[Vt,zt],Pt=E(" Save "),Ut=o("div",null,null,-1);function Ht(e,t,n,s,a,h){var b,p,g,i,r,x,v,y,m,A,O,ee,te,oe,se,ne,V,z,M,P,U,H,B,L,j,K,Y,G,J,k,w,C,I,D,Q,pe,he,be;const l=R("input-school"),d=R("input-switch");return u(),c("form",{ref:"form",method:"post",action:"","accept-charset":"UTF-8",class:"grid grid-cols-3 gap-x-4",onKeyup:t[1]||(t[1]=(...W)=>e.keyup&&e.keyup(...W)),onSubmit:t[2]||(t[2]=(...W)=>e.handleSubmit&&e.handleSubmit(...W))},[lt,o("input",{type:"hidden",name:"event",value:e.event},null,8,at),o("input",{type:"hidden",name:"CRAFT_CSRF_TOKEN",value:e.csrf},null,8,rt),o("input",{type:"hidden",name:"attendeeId",value:(i=(g=(b=e.attendeeInput)==null?void 0:b.id)!=null?g:(p=e.values)==null?void 0:p.id)!=null?i:""},null,8,dt),o("div",null,[Z(l,{values:e.values,onSchoolSelect:e.handleSchoolSelect},null,8,["values","onSchoolSelect"]),o("label",it,[ut,o("input",{name:"name",value:(y=(v=(r=e.attendeeInput)==null?void 0:r.name)!=null?v:(x=e.values)==null?void 0:x.name)!=null?y:"",class:_(["block w-full px-2 py-2 text-sm text-gray-600 appearance-none box-border bg-gray-100 rounded-lg",((m=e.attendeeFormErrors)==null?void 0:m.name)?"border-solid border-red-300":"border-solid border-gray-100"]),placeholder:"Enter the name of the attendee"},null,10,ct)]),o("label",pt,[ht,o("select",{name:"jobRole",value:(te=(ee=(A=e.attendeeInput)==null?void 0:A.jobRole)!=null?ee:(O=e.values)==null?void 0:O.jobRole)!=null?te:"",class:_(["block h-10 px-1 rounded-md border-none bg-gray-100 w-full",((oe=e.attendeeFormErrors)==null?void 0:oe.jobRole)?"border-solid border-red-300":""])},gt,10,bt)]),o("label",mt,[ft,o("input",{name:"email",value:(z=(V=(se=e.attendeeInput)==null?void 0:se.email)!=null?V:(ne=e.values)==null?void 0:ne.email)!=null?z:"",class:_(["block w-full px-2 py-2 text-sm text-gray-600 appearance-none box-border bg-gray-100 rounded-lg",((M=e.attendeeFormErrors)==null?void 0:M.email)?"border-solid border-red-300":"border-solid border-gray-100"]),placeholder:"Enter the email of the attendee"},null,10,yt)])]),o("div",null,[o("label",kt,[wt,o("select",{name:"days",value:(B=(H=(P=e.attendeeInput)==null?void 0:P.days)!=null?H:(U=e.values)==null?void 0:U.days)!=null?B:1,class:_(["block h-10 px-1 rounded-md border-none w-40 bg-gray-100",((L=e.attendeeFormErrors)==null?void 0:L.days)?"border-solid border-red-300":""])},_t,10,$t)]),o("label",St,[At,Z(d,{name:"newsletter",checked:(G=(Y=(j=e.attendeeInput)==null?void 0:j.newsletter)!=null?Y:(K=e.values)==null?void 0:K.newsletter)!=null?G:0},null,8,["checked"])]),o("label",Ct,[Ft,Z(d,{name:"approved",checked:(I=(w=(J=e.attendeeInput)==null?void 0:J.approved)!=null?w:(k=e.values)==null?void 0:k.approved)!=null?I:((C=e.urn)==null?void 0:C.length)>0?1:0},null,8,["checked"]),((be=(pe=(D=e.attendeeInput)==null?void 0:D.orgUrn)!=null?pe:(Q=e.values)==null?void 0:Q.orgUrn)!=null?be:((he=e.urn)==null?void 0:he.length)>0)?(u(),c("p",Et,[It,o("a",{href:`https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/${e.urn}`,class:"text-blue-600 underline",target:"_blank"},"government establishment data",8,Dt)])):S("",!0)])]),o("div",null,[o("div",Nt,[Tt,o("button",qt,[e.loading?(u(),c("svg",Rt,Mt)):S("",!0),Pt]),Ut,o("span",{role:"button",class:"inline-block bg-red-300 text-red-800 font-bold mt-2 py-2 px-3 text-sm rounded-lg cursor-pointer",onClick:t[0]||(t[0]=(...W)=>e.hideForm&&e.hideForm(...W))},"Cancel")])])],544)}var ce=N(nt,[["render",Ht]]);const Bt=F({components:{"form-attendee":ce},props:{csrf:{type:String,required:!0},attendee:{type:Object,required:!0},show:{type:Boolean,required:!0}},setup(e,{emit:t}){const n=q(),{showForm:s,attendeeSuccess:a}=T(n);return{showForm:s,handleCancel:()=>{t("hidePopup")},handleDelete:()=>{let d={};d.CRAFT_CSRF_TOKEN=e.csrf,d.action="actions/craft-attendees/training/delete",d.attendeeId=e.attendee.id,n.deleteAttendee(d)}}}}),Lt={class:"max-h-screen text-center overflow-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72"},jt={class:"bg-white p-6 rounded-xl mb-10"},Kt=o("h3",{class:"text-lg"},"Delete attendee",-1),Yt={class:"flex justify-center"};function Gt(e,t,n,s,a,h){return u(),c("div",{class:_(["transition-all duration-500 delay-50 ease-in-out fixed left-0 top-0 w-screen h-screen",e.show?"z-[100] opacity-100 bg-gray-900 bg-opacity-50":"z-0 opacity-0 pointer-events-none"])},[o("div",Lt,[o("div",jt,[Kt,o("div",Yt,[o("button",{onClick:t[0]||(t[0]=(...l)=>e.handleDelete&&e.handleDelete(...l)),class:"block bg-emerald-300 text-emerald-800 font-bold mt-2 py-2 px-3 text-sm rounded-lg cursor-pointer"}," Confirm "),o("button",{onClick:t[1]||(t[1]=(...l)=>e.handleCancel&&e.handleCancel(...l)),class:"block bg-red-300 text-red-800 font-bold mt-2 py-2 px-3 text-sm rounded-lg cursor-pointer"}," Cancel ")])])])],2)}var Jt=N(Bt,[["render",Gt]]);const Qt=F({components:{"form-attendee":ce,"popup-delete-attendee":Jt},props:{attendee:{type:Object,required:!0},csrf:{type:String,required:!0},event:{type:String,required:!0}},setup(e){const t=f(!1),n=f(!1),s=q(),{attendeeSuccess:a,loading:h}=T(s),l=f(!1),d=f(!1),b=f({na:"Not Applicable",support:"Support","leader-middle":"Middle leader",leader:"Leadership",teacher:"Teacher"}),p=()=>{t.value=!t.value},g=()=>{n.value=!n.value},i=()=>{d.value=!1},r=()=>{d.value=!0},x=()=>{l.value=!0},v=()=>{let m=le({},e.attendee);m.approved=1,m.CRAFT_CSRF_TOKEN=e.csrf,m.event=e.event,m.attendeeId=e.attendee.id,m.action="actions/craft-attendees/training/save",s.submitAttendee(m)},y=()=>{let m=le({},e.attendee);m.approved=0,m.CRAFT_CSRF_TOKEN=e.csrf,m.event=e.event,m.attendeeId=e.attendee.id,m.action="actions/craft-attendees/training/save",s.submitAttendee(m)};return X(()=>{l.value&&a.value&&(n.value=!1,l.value=!1)}),{expanded:t,edit:n,loading:h,showDeletePopup:d,jobRoles:b,toggle:p,handleEdit:g,submitEdit:x,handleApprove:v,handleDisapprove:y,handleDelete:r,handleHidePopup:i}}}),Wt={class:"grid grid-cols-9 xl:grid-cols-10 w-full"},Xt={class:"col-span-3 p-3 flex flex-nowrap items-center font-bold cursor-pointer"},Zt=o("span",{class:"inline-flex mb-0"},[o("input",{type:"checkbox"})],-1),Ot={class:"w-full whitespace-nowrap text-ellipsis overflow-hidden"},eo={key:0,class:"inline-block rounded-full text-xs bg-orange-300 text-orange-800 text-bold px-4 py-1"},to={key:1,class:"inline-block rounded-full text-xs bg-emerald-400 text-white text-bold px-4 py-1"},oo={key:0,class:"px-10 py-6 relative"},so=o("h3",{class:"text-lg"},"Attendee details",-1),no={key:0,class:"absolute left-0 top-0 bg-white bg-opacity-50 z-10 w-full h-full"},lo=o("div",{class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"},[o("svg",{class:"animate-spin -ml-1 mr-1 mt-1 h-10 w-10 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])],-1),ao=[lo],ro={key:1,class:"grid grid-cols-3 gap-x-4"},io={class:"mb-6"},uo=o("span",{class:"text-xs font-bold text-gray-400 block"},"School or organisation",-1),co={class:"text-base mt-1 block"},po={class:"mb-6"},ho=o("span",{class:"text-xs font-bold text-gray-400 block"},"School or organisation post code",-1),bo={class:"text-base mt-1 block"},vo={class:"mb-6"},go=o("span",{class:"text-xs font-bold text-gray-400 block"},"Name of the attendee",-1),mo={class:"text-base mt-1 block"},fo={class:"mb-6"},yo=o("span",{class:"text-xs font-bold text-gray-400 block"},"Attendee's job role",-1),ko={class:"text-base mt-1 block"},wo={class:"mb-6"},$o=o("span",{class:"text-xs font-bold text-gray-400 block"},"Email address of attendee",-1),xo={class:"text-base mt-1 block"},_o={class:"mb-6"},So=o("span",{class:"text-xs font-bold text-gray-400 block"},"Attending days",-1),Ao={class:"text-base mt-1 block"},Co={class:"mb-6"},Fo=o("span",{class:"text-xs font-bold text-gray-400 block"},"Subscribed for the newsletter?",-1),Eo={class:"text-base mt-1 block"},Io={class:"mb-6"},Do=o("span",{class:"text-xs font-bold text-gray-400 block mb-2"},"Approved status",-1),No={key:0,class:"inline-block rounded-full text-xs bg-orange-300 text-orange-800 text-bold px-4 py-1"},To={key:1,class:"inline-block rounded-full text-xs bg-emerald-400 text-white text-bold px-4 py-1"},qo={key:2,class:"text-blue-600 text-xs"},Ro=E("This school is a verified school. Visit the "),Vo=["href"],zo={class:"mb-6"},Mo=o("span",{class:"text-xs font-bold text-gray-400 block"},"Actions",-1);function Po(e,t,n,s,a,h){var b,p,g;const l=R("form-attendee"),d=R("popup-delete-attendee");return u(),c("div",{tabindex:"0",class:_(["w-full border-l-2 border-solid",e.expanded?"border-blue-800 bg-blue-100 bg-opacity-10":"border-white"])},[o("div",Wt,[o("div",Xt,[Zt,o("span",{class:"inline-flex pl-2 flex-grow",onClick:t[0]||(t[0]=(...i)=>e.toggle&&e.toggle(...i))},$(e.attendee.orgName),1)]),o("div",{class:"col-span-2 box-border p-3 cursor-pointer flex items-center",onClick:t[1]||(t[1]=(...i)=>e.toggle&&e.toggle(...i))},$(e.attendee.name),1),o("div",{class:"col-span-1 xl:col-span-3 box-border p-3 cursor-pointer flex items-center",onClick:t[2]||(t[2]=(...i)=>e.toggle&&e.toggle(...i))},[o("span",Ot,$(e.attendee.email),1)]),o("div",{class:"box-border p-3 cursor-pointer flex items-center",onClick:t[3]||(t[3]=(...i)=>e.toggle&&e.toggle(...i))},$(e.attendee.days),1),o("div",{class:"box-border p-3 cursor-pointer",onClick:t[4]||(t[4]=(...i)=>e.toggle&&e.toggle(...i))},[e.attendee.approved==0||!e.attendee.approved?(u(),c("span",eo,"Pending")):(u(),c("span",to,"Approved"))])]),e.expanded?(u(),c("div",oo,[so,e.loading?(u(),c("div",no,ao)):S("",!0),e.edit?S("",!0):(u(),c("div",ro,[o("div",null,[o("div",io,[uo,o("span",co,$(e.attendee.orgName),1)]),o("div",po,[ho,o("span",bo,$(e.attendee.postCode),1)]),o("div",vo,[go,o("span",mo,$(e.attendee.name),1)]),o("div",fo,[yo,o("span",ko,$((b=e.jobRoles[e.attendee.jobRole])!=null?b:"-"),1)]),o("div",wo,[$o,o("span",xo,$(e.attendee.email),1)])]),o("div",null,[o("div",_o,[So,o("span",Ao,$(e.attendee.days),1)]),o("div",Co,[Fo,o("span",Eo,$(e.attendee.newsletter==1?"Yes":"No"),1)]),o("div",Io,[Do,e.attendee.approved==0||!e.attendee.approved?(u(),c("span",No,"Pending")):(u(),c("span",To,"Approved")),((p=e.attendee)==null?void 0:p.orgUrn)?(u(),c("p",qo,[Ro,o("a",{href:`https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/${(g=e.attendee)==null?void 0:g.orgUrn}`,class:"text-blue-600 underline",target:"_blank"},"government establishment data",8,Vo)])):S("",!0)])]),o("div",null,[o("div",zo,[Mo,o("button",{onClick:t[5]||(t[5]=(...i)=>e.handleEdit&&e.handleEdit(...i)),class:"block bg-gray-300 text-gray-800 mt-2 py-2 px-3 text-sm font-bold rounded-lg cursor-pointer"},"Edit"),o("button",{onClick:t[6]||(t[6]=(...i)=>e.handleDelete&&e.handleDelete(...i)),class:"block bg-red-300 text-red-800 font-bold mt-2 py-2 px-3 text-sm rounded-lg cursor-pointer"}," Delete "),e.attendee.approved==0||!e.attendee.approved?(u(),c("button",{key:0,onClick:t[7]||(t[7]=(...i)=>e.handleApprove&&e.handleApprove(...i)),class:"block bg-emerald-300 text-emerald-800 font-bold mt-2 py-2 px-3 text-sm rounded-lg cursor-pointer"}," Approve ")):(u(),c("button",{key:1,onClick:t[8]||(t[8]=(...i)=>e.handleDisapprove&&e.handleDisapprove(...i)),class:"block bg-orange-300 text-orange-800 font-bold mt-2 py-2 px-3 text-sm rounded-lg cursor-pointer"}," Reject "))])])])),e.edit?(u(),ke(l,{key:2,csrf:e.csrf,values:e.attendee,event:e.event,onHideForm:e.handleEdit,onSubmitForm:e.submitEdit},null,8,["csrf","values","event","onHideForm","onSubmitForm"])):S("",!0),Z(d,{show:e.showDeletePopup,csrf:e.csrf,attendee:e.attendee,onHidePopup:e.handleHidePopup},null,8,["show","csrf","attendee","onHidePopup"])])):S("",!0)],2)}var Uo=N(Qt,[["render",Po]]);const Ho=F({components:{"list-item-attendee":Uo},props:{event:{type:String,required:!0},csrf:{type:String,required:!0}},setup(e){const t=q(),{attendees:n,loading:s,totalAttendees:a}=T(t),h=f(30),l=f(0),d=f(0),b=()=>{l.value=l.value+h.value,t.fetchAttendees(e.event,h.value,l.value)};return X(()=>{d.value=a.value-l.value-h.value}),t.fetchAttendees(e.event,h.value,l.value),{attendees:n,loading:s,offset:l,totalAttendees:a,remainingEntries:d,handleLoadMore:b}}}),Bo=o("div",{class:"grid grid-cols-9 xl:grid-cols-10 bg-gray-100 py-2"},[o("div",{class:"col-span-3 p-3 text-left text-xs font-semibold text-gray-600 uppercase flex flex-nowrap items-center"},[o("span",{class:"inline-flex mb-0"},[o("input",{type:"checkbox",indeterminate:"true"})]),o("span",{class:"inline-flex pl-2"},"School / Organisation")]),o("div",{class:"col-span-2 p-3 text-left text-xs font-semibold text-gray-600 uppercase"}," Name of attendee "),o("div",{class:"col-span-1 xl:col-span-3 p-3 text-left text-xs font-semibold text-gray-600 uppercase"}," Email "),o("div",{class:"p-3 text-left text-xs font-semibold text-gray-600 uppercase"}," Days "),o("div",{class:"p-3 text-left text-xs font-semibold text-gray-600 uppercase"}," Status ")],-1),Lo={class:"rounded-xl bg-white overflow-hidden min-h-16"},jo={key:0,class:"w-full pt-2"},Ko={key:0,class:"animate-spin ml-4 mt-5 mb-3 h-6 w-6 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Yo=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),Go=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Jo=[Yo,Go],Qo={key:1,class:"p-6"},Wo={class:"ml-4 mt-4 relative text-center"},Xo={class:"inline-block text-gray-500 absolute left-0 top-1/2 -translate-y-1/2"};function Zo(e,t,n,s,a,h){var d;const l=R("list-item-attendee");return u(),c(re,null,[Bo,o("div",Lo,[e.attendees&&e.attendees.length>0?(u(),c("div",jo,[(u(!0),c(re,null,fe(e.attendees,(b,p)=>(u(),c("article",{class:_([e.attendees.length-1!==p?"border-b border-gray-100 border-solid":""])},[Z(l,{event:e.event,csrf:e.csrf,attendee:b},null,8,["event","csrf","attendee"])],2))),256)),e.loading?(u(),c("svg",Ko,Jo)):S("",!0)])):S("",!0),(!e.attendees||e.attendees.length===0)&&!e.loading?(u(),c("p",Qo,"There are currently no attendees for this event")):S("",!0)]),o("div",Wo,[o("span",Xo,"Total results: "+$(!e.attendees||e.attendees.length>0?(d=e.attendees)==null?void 0:d.length:"0"),1),o("button",{class:_(["bg-gray-300 text-gray-800 font-bold py-2 px-3 text-sm rounded-lg cursor-pointer",e.remainingEntries>0?"":"opacity-0 pointer-events-none"]),onClick:t[0]||(t[0]=(...b)=>e.handleLoadMore&&e.handleLoadMore(...b))},"Load more ("+$(e.remainingEntries)+")",3)])],64)}var Oo=N(Ho,[["render",Zo]]);const es=F({components:{"form-attendee":ce},props:{csrf:{type:String,required:!0},event:{type:String,required:!0}},setup(){const e=q(),{showForm:t,attendeeSuccess:n}=T(e),s=()=>{e.setShowFrom(!1)};return X(()=>{n.value&&s()}),{showForm:t,hideForm:s}}}),ts={class:"max-h-screen overflow-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl"},os={class:"bg-white p-6 rounded-xl mb-10"},ss=o("h3",{class:"text-lg"},"Add attendee",-1);function ns(e,t,n,s,a,h){const l=R("form-attendee");return u(),c("div",{class:_(["transition-all duration-500 delay-50 ease-in-out fixed left-0 top-0 w-screen h-screen",e.showForm?"z-[100] opacity-100 bg-gray-900 bg-opacity-50 poiner-events-all":"z-0 opacity-0 pointer-events-none"])},[o("div",ts,[o("div",os,[ss,e.showForm?(u(),ke(l,{key:0,csrf:e.csrf,event:e.event,onHideForm:e.hideForm},null,8,["csrf","event","onHideForm"])):S("",!0)])])],2)}var ls=N(es,[["render",ns]]);const as=F({components:{"button-add":qe,"popup-add-attendee":ls,"list-attendees":Oo}}),rs=async()=>{const e=Ie(le({},as));e.use(De()),e.mount("#training")};rs().then(e=>{});
//# sourceMappingURL=attendees.4dcd3c34.js.map
