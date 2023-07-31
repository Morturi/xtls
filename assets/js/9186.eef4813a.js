"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[9186],{43349:(e,t,r)=>{r.d(t,{a:()=>l});var n=r(96225);function l(e,t){var r=e.append("foreignObject").attr("width","100000"),l=r.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}n.bg(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return r.attr("width",a.width).attr("height",a.height),r}},96225:(e,t,r)=>{r.d(t,{bF:()=>o,O1:()=>a,bg:()=>c,$p:()=>d,WR:()=>p});var n=r(37514),l=r(73234);function o(e,t){return!!e.children(t).length}function a(e){return i(e.v)+":"+i(e.w)+":"+i(e.name)}var s=/:/g;function i(e){return e?String(e).replace(s,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function p(e,t){var r=t.graph();if(n.Z(r)){var o=r.transition;if(l.Z(o))return o(e)}return e}},39186:(e,t,r)=>{r.r(t),r.d(t,{diagram:()=>a});var n=r(66102),l=r(10004),o=r(12888);r(60130),r(45625),r(29451),r(69368),r(27484),r(17967),r(27856);const a={parser:n.p,db:n.f,renderer:l.f,styles:l.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.q)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),l.f.setConf(e.flowchart),n.f.clear(),n.f.setGen("gen-2")}}},10004:(e,t,r)=>{r.d(t,{a:()=>g,f:()=>h});var n=r(45625),l=r(60130),o=r(66102),a=r(12888),s=r(90894),i=r(43349),c=r(75971),d=r(12195);const p=(e,t)=>c.Z.lang.round(d.Z.parse(e)[t]);var b=r(51117);const f={},w=function(e,t,r,n,l,o){const s=n.select(`[id="${r}"]`);Object.keys(e).forEach((function(r){const n=e[r];let c="default";n.classes.length>0&&(c=n.classes.join(" ")),c+=" flowchart-label";const d=(0,a.k)(n.styles);let p,b=void 0!==n.text?n.text:n.id;if(a.l.info("vertex",n,n.labelType),"markdown"===n.labelType)a.l.info("vertex",n,n.labelType);else if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};p=(0,i.a)(s,e).node(),p.parentNode.removeChild(p)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=b.split(a.e.lineBreakRegex);for(const r of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}p=e}let f=0,w="";switch(n.type){case"round":f=5,w="rect";break;case"square":w="rect";break;case"diamond":w="question";break;case"hexagon":w="hexagon";break;case"odd":w="rect_left_inv_arrow";break;case"lean_right":w="lean_right";break;case"lean_left":w="lean_left";break;case"trapezoid":w="trapezoid";break;case"inv_trapezoid":w="inv_trapezoid";break;case"odd_right":w="rect_left_inv_arrow";break;case"circle":w="circle";break;case"ellipse":w="ellipse";break;case"stadium":w="stadium";break;case"subroutine":w="subroutine";break;case"cylinder":w="cylinder";break;case"group":w="rect";break;case"doublecircle":w="doublecircle";break;default:w="rect"}t.setNode(n.id,{labelStyle:d.labelStyle,shape:w,labelText:b,labelType:n.labelType,rx:f,ry:f,class:c,style:d.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:o.db.getTooltip(n.id)||"",domId:o.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:(0,a.c)().flowchart.padding}),a.l.info("setNode",{labelStyle:d.labelStyle,labelType:n.labelType,shape:w,labelText:b,rx:f,ry:f,class:c,style:d.style,id:n.id,domId:o.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:(0,a.c)().flowchart.padding})}))},u=function(e,t,r){a.l.info("abc78 edges = ",e);let n,o,s=0,i={};if(void 0!==e.defaultStyle){const t=(0,a.k)(e.defaultStyle);n=t.style,o=t.labelStyle}e.forEach((function(r){s++;const c="L-"+r.start+"-"+r.end;void 0===i[c]?(i[c]=0,a.l.info("abc78 new entry",c,i[c])):(i[c]++,a.l.info("abc78 new entry",c,i[c]));let d=c+"-"+i[c];a.l.info("abc78 new link id to be used is",c,d,i[c]);const p="LS-"+r.start,b="LE-"+r.end,w={style:"",labelStyle:""};switch(w.minlen=r.length||1,"arrow_open"===r.type?w.arrowhead="none":w.arrowhead="normal",w.arrowTypeStart="arrow_open",w.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":w.arrowTypeStart="arrow_cross";case"arrow_cross":w.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":w.arrowTypeStart="arrow_point";case"arrow_point":w.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":w.arrowTypeStart="arrow_circle";case"arrow_circle":w.arrowTypeEnd="arrow_circle"}let u="",h="";switch(r.stroke){case"normal":u="fill:none;",void 0!==n&&(u=n),void 0!==o&&(h=o),w.thickness="normal",w.pattern="solid";break;case"dotted":w.thickness="normal",w.pattern="dotted",w.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":w.thickness="thick",w.pattern="solid",w.style="stroke-width: 3.5px;fill:none;";break;case"invisible":w.thickness="invisible",w.pattern="solid",w.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){const e=(0,a.k)(r.style);u=e.style,h=e.labelStyle}w.style=w.style+=u,w.labelStyle=w.labelStyle+=h,void 0!==r.interpolate?w.curve=(0,a.o)(r.interpolate,l.c_6):void 0!==e.defaultInterpolate?w.curve=(0,a.o)(e.defaultInterpolate,l.c_6):w.curve=(0,a.o)(f.curve,l.c_6),void 0===r.text?void 0!==r.style&&(w.arrowheadStyle="fill: #333"):(w.arrowheadStyle="fill: #333",w.labelpos="c"),w.labelType=r.labelType,w.label=r.text.replace(a.e.lineBreakRegex,"\n"),void 0===r.style&&(w.style=w.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),w.labelStyle=w.labelStyle.replace("color:","fill:"),w.id=d,w.classes="flowchart-link "+p+" "+b,t.setEdge(r.start,r.end,w,s)}))},h={setConf:function(e){const t=Object.keys(e);for(const r of t)f[r]=e[r]},addVertices:w,addEdges:u,getClasses:function(e,t){a.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(e){return}},draw:async function(e,t,r,i){a.l.info("Drawing flowchart"),i.db.clear(),o.f.setGen("gen-2"),i.parser.parse(e);let c=i.db.getDirection();void 0===c&&(c="TD");const{securityLevel:d,flowchart:p}=(0,a.c)(),b=p.nodeSpacing||50,f=p.rankSpacing||50;let h;"sandbox"===d&&(h=(0,l.Ys)("#i"+t));const g="sandbox"===d?(0,l.Ys)(h.nodes()[0].contentDocument.body):(0,l.Ys)("body"),y="sandbox"===d?h.nodes()[0].contentDocument:document,k=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:b,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let x;const v=i.db.getSubGraphs();a.l.info("Subgraphs - ",v);for(let e=v.length-1;e>=0;e--)x=v[e],a.l.info("Subgraph - ",x),i.db.addVertex(x.id,{text:x.title,type:x.labelType},"group",void 0,x.classes,x.dir);const m=i.db.getVertices(),S=i.db.getEdges();a.l.info("Edges",S);let _=0;for(_=v.length-1;_>=0;_--){x=v[_],(0,l.td_)("cluster").append("text");for(let e=0;e<x.nodes.length;e++)a.l.info("Setting up subgraphs",x.nodes[e],x.id),k.setParent(x.nodes[e],x.id)}w(m,k,t,g,y,i),u(S,k);const T=g.select(`[id="${t}"]`),C=g.select("#"+t+" g");if(await(0,s.r)(C,k,["point","circle","cross"],"flowchart",t),a.u.insertTitle(T,"flowchartTitleText",p.titleTopMargin,i.db.getDiagramTitle()),(0,a.p)(k,T,p.diagramPadding,p.useMaxWidth),i.db.indexNodes("subGraph"+_),!p.htmlLabels){const e=y.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),r=y.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}Object.keys(m).forEach((function(e){const r=m[e];if(r.link){const n=(0,l.Ys)("#"+t+' [id="'+e+'"]');if(n){const e=y.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===d?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);const t=n.insert((function(){return e}),":first-child"),l=n.select(".label-container");l&&t.append((function(){return l.node()}));const o=n.select(".label");o&&t.append((function(){return o.node()}))}}}))}},g=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const r=p,n=r(e,"r"),l=r(e,"g"),o=r(e,"b");return b.Z(n,l,o,.5)})(e.edgeLabelBackground)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);