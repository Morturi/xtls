"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[4038],{54038:(e,t,s)=>{s.r(t),s.d(t,{diagram:()=>k});var a=s(88549),o=s(45625),r=s(60130),i=s(12888),n=s(90894);s(27484),s(17967),s(27856),s(29451),s(69368);const d="rect",c="rectWithTitle",l="statediagram",p="----parent",g="fill:none",b="fill: #333",h="text",u="normal";let y={},f=0;function x(e="",t=0,s="",a="----"){return`state-${e}${null!==s&&s.length>0?`${a}${s}`:""}-${t}`}const m=(e,t,s,o,r,n)=>{const l=s.id,m=null==(S=o[l])?"":S.classes?S.classes.join(" "):"";var S;if("root"!==l){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==a.D&&(t=s.type),y[l]||(y[l]={id:l,shape:t,description:i.e.sanitizeText(l,(0,i.c)()),classes:`${m} statediagram-state`});const o=y[l];s.description&&(Array.isArray(o.description)?(o.shape=c,o.description.push(s.description)):o.description.length>0?(o.shape=c,o.description===l?o.description=[s.description]:o.description=[o.description,s.description]):(o.shape=d,o.description=s.description),o.description=i.e.sanitizeTextOrArray(o.description,(0,i.c)())),1===o.description.length&&o.shape===c&&(o.shape=d),!o.type&&s.doc&&(i.l.info("Setting cluster for ",l,T(s)),o.type="group",o.dir=T(s),o.shape=s.type===a.a?"divider":"roundedWithTitle",o.classes=o.classes+" statediagram-cluster "+(n?"statediagram-cluster-alt":""));const r={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:l,dir:o.dir,domId:x(l,f),type:o.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:"statediagram-note",style:"",id:l+"----note-"+f,domId:x(l,f,"note"),type:o.type,padding:15},a={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:o.classes,style:"",id:l+p,domId:x(l,f,"parent"),type:"group",padding:0};f++;const i=l+p;e.setNode(i,a),e.setNode(t.id,t),e.setNode(l,r),e.setParent(l,i),e.setParent(t.id,i);let n=l,d=t.id;"left of"===s.note.position&&(n=t.id,d=l),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:g,labelStyle:"",classes:"transition note-edge",arrowheadStyle:b,labelpos:"c",labelType:h,thickness:u})}else e.setNode(l,r)}t&&"root"!==t.id&&(i.l.trace("Setting node ",l," to be child of its parent ",t.id),e.setParent(l,t.id)),s.doc&&(i.l.trace("Adding nodes children "),w(e,s,s.doc,o,r,!n))},w=(e,t,s,o,r,n)=>{i.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case a.b:case a.D:m(e,t,s,o,r,n);break;case a.S:{m(e,t,s.state1,o,r,n),m(e,t,s.state2,o,r,n);const a={id:"edge"+f,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:g,labelStyle:"",label:i.e.sanitizeText(s.description,(0,i.c)()),arrowheadStyle:b,labelpos:"c",labelType:h,thickness:u,classes:"transition"};e.setEdge(s.state1.id,s.state2.id,a,f),f++}}}))},T=(e,t=a.c)=>{let s=t;if(e.doc)for(let t=0;t<e.doc.length;t++){const a=e.doc[t];"dir"===a.stmt&&(s=a.value)}return s},S={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){i.l.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(e){return e}},draw:async function(e,t,s,a){i.l.info("Drawing state diagram (v2)",t),y={},a.db.getDirection();const{securityLevel:c,state:p}=(0,i.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;i.l.info(a.db.getRootDocV2()),a.db.extract(a.db.getRootDocV2()),i.l.info(a.db.getRootDocV2());const h=a.db.getStates(),u=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:T(a.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let f;m(u,void 0,a.db.getRootDocV2(),h,a.db,!0),"sandbox"===c&&(f=(0,r.Ys)("#i"+t));const x="sandbox"===c?(0,r.Ys)(f.nodes()[0].contentDocument.body):(0,r.Ys)("body"),w=x.select(`[id="${t}"]`),S=x.select("#"+t+" g");await(0,n.r)(S,u,["barb"],l,t),i.u.insertTitle(w,"statediagramTitleText",p.titleTopMargin,a.db.getDiagramTitle());const k=w.node().getBBox(),D=k.width+16,$=k.height+16;w.attr("class",l);const A=w.node().getBBox();(0,i.i)(w,$,D,p.useMaxWidth);const v=`${A.x-8} ${A.y-8} ${D} ${$}`;i.l.debug(`viewBox ${v}`),w.attr("viewBox",v);const B=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const e of B){const t=e.getBBox(),s=document.createElementNS("http://www.w3.org/2000/svg",d);s.setAttribute("rx",0),s.setAttribute("ry",0),s.setAttribute("width",t.width),s.setAttribute("height",t.height),e.insertBefore(s,e.firstChild)}}},k={parser:a.p,db:a.d,renderer:S,styles:a.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,a.d.clear()}}}}]);