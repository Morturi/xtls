"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[5185],{5185:(t,e,a)=>{a.r(e),a.d(e,{diagram:()=>y});var i=a(1341),n=a(8686),d=a(29451),r=a(45625),s=a(53110),o=a(81188);a(27856),a(27484),a(17967);const g={},c=(t,e,a)=>{const i=(0,s.g)().state.padding,n=2*(0,s.g)().state.padding,d=t.node().getBBox(),r=d.width,o=d.x,g=t.append("text").attr("x",0).attr("y",(0,s.g)().state.titleShift).attr("font-size",(0,s.g)().state.fontSize).attr("class","state-title").text(e.id),c=g.node().getBBox().width+n;let p,h=Math.max(c,r);h===r&&(h+=n);const l=t.node().getBBox();e.doc,p=o-i,c>r&&(p=(r-h)/2+i),Math.abs(o-l.x)<i&&c>r&&(p=o-(c-r)/2);const x=1-(0,s.g)().state.textHeight;return t.insert("rect",":first-child").attr("x",p).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",h).attr("height",l.height+(0,s.g)().state.textHeight+(0,s.g)().state.titleShift+1).attr("rx","0"),g.attr("x",p+i),c<=r&&g.attr("x",o+(h-n)/2-c/2+i),t.insert("rect",":first-child").attr("x",p).attr("y",(0,s.g)().state.titleShift-(0,s.g)().state.textHeight-(0,s.g)().state.padding).attr("width",h).attr("height",3*(0,s.g)().state.textHeight).attr("rx",(0,s.g)().state.radius),t.insert("rect",":first-child").attr("x",p).attr("y",(0,s.g)().state.titleShift-(0,s.g)().state.textHeight-(0,s.g)().state.padding).attr("width",h).attr("height",l.height+3+2*(0,s.g)().state.textHeight).attr("rx",(0,s.g)().state.radius),t},p=function(t,e){const a=e.id,i={id:a,label:e.id,width:0,height:0},n=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&(t=>{t.append("circle").attr("class","start-state").attr("r",(0,s.g)().state.sizeUnit).attr("cx",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit).attr("cy",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit)})(n),"end"===e.type&&(t=>{t.append("circle").attr("class","end-state-outer").attr("r",(0,s.g)().state.sizeUnit+(0,s.g)().state.miniPadding).attr("cx",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit+(0,s.g)().state.miniPadding).attr("cy",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit+(0,s.g)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,s.g)().state.sizeUnit).attr("cx",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit+2).attr("cy",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit+2)})(n),"fork"!==e.type&&"join"!==e.type||((t,e)=>{let a=(0,s.g)().state.forkWidth,i=(0,s.g)().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",(0,s.g)().state.padding).attr("y",(0,s.g)().state.padding)})(n,e),"note"===e.type&&((t,e)=>{e.attr("class","state-note");const a=e.append("rect").attr("x",0).attr("y",(0,s.g)().state.padding),i=e.append("g"),{textWidth:n,textHeight:d}=((t,e,a,i)=>{let n=0;const d=i.append("text");d.style("text-anchor","start"),d.attr("class","noteText");let r=t.replace(/\r\n/g,"<br/>");r=r.replace(/\n/g,"<br/>");const o=r.split(s.e.lineBreakRegex);let g=1.25*(0,s.g)().state.noteMargin;for(const t of o){const e=t.trim();if(e.length>0){const t=d.append("tspan");t.text(e),0===g&&(g+=t.node().getBBox().height),n+=g,t.attr("x",0+(0,s.g)().state.noteMargin),t.attr("y",0+n+1.25*(0,s.g)().state.noteMargin)}}return{textWidth:d.node().getBBox().width,textHeight:n}})(t,0,0,i);a.attr("height",d+2*(0,s.g)().state.noteMargin),a.attr("width",n+2*(0,s.g)().state.noteMargin)})(e.note.text,n),"divider"===e.type&&(t=>{t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,s.g)().state.textHeight).attr("class","divider").attr("x2",2*(0,s.g)().state.textHeight).attr("y1",0).attr("y2",0)})(n),"default"===e.type&&0===e.descriptions.length&&((t,e)=>{const a=t.append("text").attr("x",2*(0,s.g)().state.padding).attr("y",(0,s.g)().state.textHeight+2*(0,s.g)().state.padding).attr("font-size",(0,s.g)().state.fontSize).attr("class","state-title").text(e.id).node().getBBox();t.insert("rect",":first-child").attr("x",(0,s.g)().state.padding).attr("y",(0,s.g)().state.padding).attr("width",a.width+2*(0,s.g)().state.padding).attr("height",a.height+2*(0,s.g)().state.padding).attr("rx",(0,s.g)().state.radius)})(n,e),"default"===e.type&&e.descriptions.length>0&&((t,e)=>{const a=t.append("text").attr("x",2*(0,s.g)().state.padding).attr("y",(0,s.g)().state.textHeight+1.3*(0,s.g)().state.padding).attr("font-size",(0,s.g)().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),i=a.height,n=t.append("text").attr("x",(0,s.g)().state.padding).attr("y",i+.4*(0,s.g)().state.padding+(0,s.g)().state.dividerMargin+(0,s.g)().state.textHeight).attr("class","state-description");let d=!0,r=!0;e.descriptions.forEach((function(t){d||(function(t,e,a){const i=t.append("tspan").attr("x",2*(0,s.g)().state.padding).text(e);a||i.attr("dy",(0,s.g)().state.textHeight)}(n,t,r),r=!1),d=!1}));const o=t.append("line").attr("x1",(0,s.g)().state.padding).attr("y1",(0,s.g)().state.padding+i+(0,s.g)().state.dividerMargin/2).attr("y2",(0,s.g)().state.padding+i+(0,s.g)().state.dividerMargin/2).attr("class","descr-divider"),g=n.node().getBBox(),c=Math.max(g.width,a.width);o.attr("x2",c+3*(0,s.g)().state.padding),t.insert("rect",":first-child").attr("x",(0,s.g)().state.padding).attr("y",(0,s.g)().state.padding).attr("width",c+2*(0,s.g)().state.padding).attr("height",g.height+i+2*(0,s.g)().state.padding).attr("rx",(0,s.g)().state.radius)})(n,e);const d=n.node().getBBox();return i.width=d.width+2*(0,s.g)().state.padding,i.height=d.height+2*(0,s.g)().state.padding,r=i,g[a]=r,i;var r};let h,l=0;const x={},u=(t,e,a,g,f,y,w)=>{const b=new r.k({compound:!0,multigraph:!0});let m,B=!0;for(m=0;m<t.length;m++)if("relation"===t[m].stmt){B=!1;break}a?b.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:B?1:h.edgeLengthFactor,nodeSep:B?1:50,isMultiGraph:!0}):b.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:B?1:h.edgeLengthFactor,nodeSep:B?1:50,ranker:"tight-tree",isMultiGraph:!0}),b.setDefaultEdgeLabel((function(){return{}})),w.db.extract(t);const k=w.db.getStates(),N=w.db.getRelations(),E=Object.keys(k);for(const t of E){const i=k[t];let n;if(a&&(i.parentId=a),i.doc){let t=e.append("g").attr("id",i.id).attr("class","stateGroup");n=u(i.doc,t,i.id,!g,f,y,w);{t=c(t,i,g);let e=t.node().getBBox();n.width=e.width,n.height=e.height+h.padding/2,x[i.id]={y:h.compositTitleSize}}}else n=p(e,i);if(i.note){const t={descriptions:[],id:i.id+"-note",note:i.note,type:"note"},a=p(e,t);"left of"===i.note.position?(b.setNode(n.id+"-note",a),b.setNode(n.id,n)):(b.setNode(n.id,n),b.setNode(n.id+"-note",a)),b.setParent(n.id,n.id+"-group"),b.setParent(n.id+"-note",n.id+"-group")}else b.setNode(n.id,n)}s.l.debug("Count=",b.nodeCount(),b);let v=0;N.forEach((function(t){var e;v++,s.l.debug("Setting edge",t),b.setEdge(t.id1,t.id2,{relation:t,width:(e=t.title,e?e.length*h.fontSizeFactor:1),height:h.labelHeight*s.e.getRows(t.title).length,labelpos:"c"},"id"+v)})),(0,d.bK)(b),s.l.debug("Graph after layout",b.nodes());const M=e.node();b.nodes().forEach((function(t){void 0!==t&&void 0!==b.node(t)?(s.l.warn("Node "+t+": "+JSON.stringify(b.node(t))),f.select("#"+M.id+" #"+t).attr("transform","translate("+(b.node(t).x-b.node(t).width/2)+","+(b.node(t).y+(x[t]?x[t].y:0)-b.node(t).height/2)+" )"),f.select("#"+M.id+" #"+t).attr("data-x-shift",b.node(t).x-b.node(t).width/2),y.querySelectorAll("#"+M.id+" #"+t+" .divider").forEach((t=>{const e=t.parentElement;let a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),i=parseInt(e.getAttribute("data-x-shift"),10),Number.isNaN(i)&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)}))):s.l.debug("No Node "+t+": "+JSON.stringify(b.node(t)))}));let S=M.getBBox();b.edges().forEach((function(t){void 0!==t&&void 0!==b.edge(t)&&(s.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(b.edge(t))),function(t,e,a){e.points=e.points.filter((t=>!Number.isNaN(t.y)));const d=e.points,r=(0,n.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(n.$0Z),g=t.append("path").attr("d",r(d)).attr("id","edge"+l).attr("class","transition");let c="";if((0,s.g)().state.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),g.attr("marker-end","url("+c+"#"+function(t){switch(t){case i.d.relationType.AGGREGATION:return"aggregation";case i.d.relationType.EXTENSION:return"extension";case i.d.relationType.COMPOSITION:return"composition";case i.d.relationType.DEPENDENCY:return"dependency"}}(i.d.relationType.DEPENDENCY)+"End)"),void 0!==a.title){const i=t.append("g").attr("class","stateLabel"),{x:n,y:d}=o.u.calcLabelPosition(e.points),r=s.e.getRows(a.title);let g=0;const c=[];let p=0,h=0;for(let t=0;t<=r.length;t++){const e=i.append("text").attr("text-anchor","middle").text(r[t]).attr("x",n).attr("y",d+g),a=e.node().getBBox();if(p=Math.max(p,a.width),h=Math.min(h,a.x),s.l.info(a.x,n,d+g),0===g){const t=e.node().getBBox();g=t.height,s.l.info("Title height",g,d)}c.push(e)}let l=g*r.length;if(r.length>1){const t=(r.length-1)*g*.5;c.forEach(((e,a)=>e.attr("y",d+a*g-t))),l=g*r.length}const x=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",n-p/2-(0,s.g)().state.padding/2).attr("y",d-l/2-(0,s.g)().state.padding/2-3.5).attr("width",p+(0,s.g)().state.padding).attr("height",l+(0,s.g)().state.padding),s.l.info(x)}l++}(e,b.edge(t),b.edge(t).relation))})),S=M.getBBox();const z={id:a||"root",label:a||"root",width:0,height:0};return z.width=S.width+2*h.padding,z.height=S.height+2*h.padding,s.l.debug("Doc rendered",z,b),z},f={setConf:function(){},draw:function(t,e,a,i){h=(0,s.g)().state;const d=(0,s.g)().securityLevel;let g;"sandbox"===d&&(g=(0,n.Ys)("#i"+e));const c="sandbox"===d?(0,n.Ys)(g.nodes()[0].contentDocument.body):(0,n.Ys)("body"),p="sandbox"===d?g.nodes()[0].contentDocument:document;s.l.debug("Rendering diagram "+t);const l=c.select(`[id='${e}']`);l.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z"),new r.k({multigraph:!0,compound:!0,rankdir:"RL"}).setDefaultEdgeLabel((function(){return{}}));const x=i.db.getRootDoc();u(x,l,void 0,!1,c,p,i);const f=h.padding,y=l.node().getBBox(),w=y.width+2*f,b=y.height+2*f,m=1.75*w;(0,o.k)(l,b,m,h.useMaxWidth),l.attr("viewBox",`${y.x-h.padding}  ${y.y-h.padding} `+w+" "+b)}},y={parser:i.p,db:i.d,renderer:f,styles:i.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,i.d.clear()}}}}]);