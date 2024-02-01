import{q as I,c as b,d as q,an as V,h as T,l as d,y as A,ao as lt}from"./mermaid.core-z1pvj200.js";import{c as et}from"./createText-a48a4c90-vtt9hdBX.js";import{l as ct}from"./line-nkzH3SYD.js";const ht=(a,t,r,i)=>{t.forEach(e=>{ut[e](a,r,i)})},ot=(a,t,r)=>{d.trace("Making markers for ",r),a.append("defs").append("marker").attr("id",r+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},ft=(a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},pt=(a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},yt=(a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},dt=(a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),a.append("defs").append("marker").attr("id",r+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},gt=(a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},xt=(a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},wt=(a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},bt=(a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},ut={extension:ot,composition:ft,aggregation:pt,dependency:yt,lollipop:dt,point:gt,circle:xt,cross:wt,barb:bt},sr=ht;function mt(a,t){t&&a.attr("style",t)}function kt(a){const t=T(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),r=t.append("xhtml:div"),i=a.label,e=a.isNode?"nodeLabel":"edgeLabel";return r.html('<span class="'+e+'" '+(a.labelStyle?'style="'+a.labelStyle+'"':"")+">"+i+"</span>"),mt(r,a.labelStyle),r.style("display","inline-block"),r.style("white-space","nowrap"),r.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}const vt=(a,t,r,i)=>{let e=a||"";if(typeof e=="object"&&(e=e[0]),I(b().flowchart.htmlLabels)){e=e.replace(/\\n|\n/g,"<br />"),d.info("vertexText"+e);const s={isNode:i,label:V(e).replace(/fa[blrs]?:fa-[\w-]+/g,l=>`<i class='${l.replace(":"," ")}'></i>`),labelStyle:t.replace("fill:","color:")};return kt(s)}else{const s=document.createElementNS("http://www.w3.org/2000/svg","text");s.setAttribute("style",t.replace("color:","fill:"));let n=[];typeof e=="string"?n=e.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(e)?n=e:n=[];for(const l of n){const c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),c.setAttribute("dy","1em"),c.setAttribute("x","0"),r?c.setAttribute("class","title-row"):c.setAttribute("class","row"),c.textContent=l.trim(),s.appendChild(c)}return s}},R=vt,E=async(a,t,r,i)=>{let e;const s=t.useHtmlLabels||I(b().flowchart.htmlLabels);r?e=r:e="node default";const n=a.insert("g").attr("class",e).attr("id",t.domId||t.id),l=n.insert("g").attr("class","label").attr("style",t.labelStyle);let c;t.labelText===void 0?c="":c=typeof t.labelText=="string"?t.labelText:t.labelText[0];const o=l.node();let h;t.labelType==="markdown"?h=et(l,q(V(c),b()),{useHtmlLabels:s,width:t.width||b().flowchart.wrappingWidth,classes:"markdown-node-label"}):h=o.appendChild(R(q(V(c),b()),t.labelStyle,!1,i));let f=h.getBBox();const y=t.padding/2;if(I(b().flowchart.htmlLabels)){const p=h.children[0],x=T(h),m=p.getElementsByTagName("img");if(m){const g=c.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...m].map(w=>new Promise(S=>{function B(){if(w.style.display="flex",w.style.flexDirection="column",g){const C=b().fontSize?b().fontSize:window.getComputedStyle(document.body).fontSize,D=parseInt(C,10)*5+"px";w.style.minWidth=D,w.style.maxWidth=D}else w.style.width="100%";S(w)}setTimeout(()=>{w.complete&&B()}),w.addEventListener("error",B),w.addEventListener("load",B)})))}f=p.getBoundingClientRect(),x.attr("width",f.width),x.attr("height",f.height)}return s?l.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):l.attr("transform","translate(0, "+-f.height/2+")"),t.centerLabel&&l.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),l.insert("rect",":first-child"),{shapeSvg:n,bbox:f,halfPadding:y,label:l}},k=(a,t)=>{const r=t.node().getBBox();a.width=r.width,a.height=r.height};function N(a,t,r,i){return a.insert("polygon",":first-child").attr("points",i.map(function(e){return e.x+","+e.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+r/2+")")}function Lt(a,t){return a.intersect(t)}function st(a,t,r,i){var e=a.x,s=a.y,n=e-i.x,l=s-i.y,c=Math.sqrt(t*t*l*l+r*r*n*n),o=Math.abs(t*r*n/c);i.x<e&&(o=-o);var h=Math.abs(t*r*l/c);return i.y<s&&(h=-h),{x:e+o,y:s+h}}function St(a,t,r){return st(a,t,t,r)}function Mt(a,t,r,i){var e,s,n,l,c,o,h,f,y,p,x,m,g,w,S;if(e=t.y-a.y,n=a.x-t.x,c=t.x*a.y-a.x*t.y,y=e*r.x+n*r.y+c,p=e*i.x+n*i.y+c,!(y!==0&&p!==0&&J(y,p))&&(s=i.y-r.y,l=r.x-i.x,o=i.x*r.y-r.x*i.y,h=s*a.x+l*a.y+o,f=s*t.x+l*t.y+o,!(h!==0&&f!==0&&J(h,f))&&(x=e*l-s*n,x!==0)))return m=Math.abs(x/2),g=n*o-l*c,w=g<0?(g-m)/x:(g+m)/x,g=s*c-e*o,S=g<0?(g-m)/x:(g+m)/x,{x:w,y:S}}function J(a,t){return a*t>0}function Bt(a,t,r){var i=a.x,e=a.y,s=[],n=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(x){n=Math.min(n,x.x),l=Math.min(l,x.y)}):(n=Math.min(n,t.x),l=Math.min(l,t.y));for(var c=i-a.width/2-n,o=e-a.height/2-l,h=0;h<t.length;h++){var f=t[h],y=t[h<t.length-1?h+1:0],p=Mt(a,r,{x:c+f.x,y:o+f.y},{x:c+y.x,y:o+y.y});p&&s.push(p)}return s.length?(s.length>1&&s.sort(function(x,m){var g=x.x-r.x,w=x.y-r.y,S=Math.sqrt(g*g+w*w),B=m.x-r.x,C=m.y-r.y,W=Math.sqrt(B*B+C*C);return S<W?-1:S===W?0:1}),s[0]):a}const Tt=(a,t)=>{var r=a.x,i=a.y,e=t.x-r,s=t.y-i,n=a.width/2,l=a.height/2,c,o;return Math.abs(s)*n>Math.abs(e)*l?(s<0&&(l=-l),c=s===0?0:l*e/s,o=l):(e<0&&(n=-n),c=n,o=e===0?0:n*s/e),{x:r+c,y:i+o}},Et=Tt,u={node:Lt,circle:St,ellipse:st,polygon:Bt,rect:Et},Ct=async(a,t)=>{t.useHtmlLabels||b().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:i,bbox:e,halfPadding:s}=await E(a,t,"node "+t.classes,!0);d.info("Classes = ",t.classes);const n=i.insert("rect",":first-child");return n.attr("rx",t.rx).attr("ry",t.ry).attr("x",-e.width/2-s).attr("y",-e.height/2-s).attr("width",e.width+t.padding).attr("height",e.height+t.padding),k(t,n),t.intersect=function(l){return u.rect(t,l)},i},_t=Ct,K=a=>a?" "+a:"",$=(a,t)=>`${t||"node default"}${K(a.classes)} ${K(a.class)}`,G=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.width+t.padding,s=i.height+t.padding,n=e+s,l=[{x:n/2,y:0},{x:n,y:-n/2},{x:n/2,y:-n},{x:0,y:-n/2}];d.info("Question main (Circle)");const c=N(r,n,n,l);return c.attr("style",t.style),k(t,c),t.intersect=function(o){return d.warn("Intersect called"),u.polygon(t,l,o)},r},$t=(a,t)=>{const r=a.insert("g").attr("class","node default").attr("id",t.domId||t.id),i=28,e=[{x:0,y:i/2},{x:i/2,y:0},{x:0,y:-i/2},{x:-i/2,y:0}];return r.insert("polygon",":first-child").attr("points",e.map(function(n){return n.x+","+n.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(n){return u.circle(t,14,n)},r},Rt=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=4,s=i.height+t.padding,n=s/e,l=i.width+2*n+t.padding,c=[{x:n,y:0},{x:l-n,y:0},{x:l,y:-s/2},{x:l-n,y:-s},{x:n,y:-s},{x:0,y:-s/2}],o=N(r,l,s,c);return o.attr("style",t.style),k(t,o),t.intersect=function(h){return u.polygon(t,c,h)},r},It=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.width+t.padding,s=i.height+t.padding,n=[{x:-s/2,y:0},{x:e,y:0},{x:e,y:-s},{x:-s/2,y:-s},{x:0,y:-s/2}];return N(r,e,s,n).attr("style",t.style),t.width=e+s,t.height=s,t.intersect=function(c){return u.polygon(t,n,c)},r},Ht=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t),!0),e=i.width+t.padding,s=i.height+t.padding,n=[{x:-2*s/6,y:0},{x:e-s/6,y:0},{x:e+2*s/6,y:-s},{x:s/6,y:-s}],l=N(r,e,s,n);return l.attr("style",t.style),k(t,l),t.intersect=function(c){return u.polygon(t,n,c)},r},Nt=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.width+t.padding,s=i.height+t.padding,n=[{x:2*s/6,y:0},{x:e+s/6,y:0},{x:e-2*s/6,y:-s},{x:-s/6,y:-s}],l=N(r,e,s,n);return l.attr("style",t.style),k(t,l),t.intersect=function(c){return u.polygon(t,n,c)},r},Xt=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.width+t.padding,s=i.height+t.padding,n=[{x:-2*s/6,y:0},{x:e+2*s/6,y:0},{x:e-s/6,y:-s},{x:s/6,y:-s}],l=N(r,e,s,n);return l.attr("style",t.style),k(t,l),t.intersect=function(c){return u.polygon(t,n,c)},r},Ot=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.width+t.padding,s=i.height+t.padding,n=[{x:s/6,y:0},{x:e-s/6,y:0},{x:e+2*s/6,y:-s},{x:-2*s/6,y:-s}],l=N(r,e,s,n);return l.attr("style",t.style),k(t,l),t.intersect=function(c){return u.polygon(t,n,c)},r},Wt=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.width+t.padding,s=i.height+t.padding,n=[{x:0,y:0},{x:e+s/2,y:0},{x:e,y:-s/2},{x:e+s/2,y:-s},{x:0,y:-s}],l=N(r,e,s,n);return l.attr("style",t.style),k(t,l),t.intersect=function(c){return u.polygon(t,n,c)},r},Yt=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.width+t.padding,s=e/2,n=s/(2.5+e/50),l=i.height+n+t.padding,c="M 0,"+n+" a "+s+","+n+" 0,0,0 "+e+" 0 a "+s+","+n+" 0,0,0 "+-e+" 0 l 0,"+l+" a "+s+","+n+" 0,0,0 "+e+" 0 l 0,"+-l,o=r.attr("label-offset-y",n).insert("path",":first-child").attr("style",t.style).attr("d",c).attr("transform","translate("+-e/2+","+-(l/2+n)+")");return k(t,o),t.intersect=function(h){const f=u.rect(t,h),y=f.x-t.x;if(s!=0&&(Math.abs(y)<t.width/2||Math.abs(y)==t.width/2&&Math.abs(f.y-t.y)>t.height/2-n)){let p=n*n*(1-y*y/(s*s));p!=0&&(p=Math.sqrt(p)),p=n-p,h.y-t.y>0&&(p=-p),f.y+=p}return f},r},Dt=async(a,t)=>{const{shapeSvg:r,bbox:i,halfPadding:e}=await E(a,t,"node "+t.classes+" "+t.class,!0),s=r.insert("rect",":first-child"),n=i.width+t.padding,l=i.height+t.padding;if(s.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",-i.width/2-e).attr("y",-i.height/2-e).attr("width",n).attr("height",l),t.props){const c=new Set(Object.keys(t.props));t.props.borders&&(it(s,t.props.borders,n,l),c.delete("borders")),c.forEach(o=>{d.warn(`Unknown node property ${o}`)})}return k(t,s),t.intersect=function(c){return u.rect(t,c)},r},jt=async(a,t)=>{const{shapeSvg:r}=await E(a,t,"label",!0);d.trace("Classes = ",t.class);const i=r.insert("rect",":first-child"),e=0,s=0;if(i.attr("width",e).attr("height",s),r.attr("class","label edgeLabel"),t.props){const n=new Set(Object.keys(t.props));t.props.borders&&(it(i,t.props.borders,e,s),n.delete("borders")),n.forEach(l=>{d.warn(`Unknown node property ${l}`)})}return k(t,i),t.intersect=function(n){return u.rect(t,n)},r};function it(a,t,r,i){const e=[],s=l=>{e.push(l,0)},n=l=>{e.push(0,l)};t.includes("t")?(d.debug("add top border"),s(r)):n(r),t.includes("r")?(d.debug("add right border"),s(i)):n(i),t.includes("b")?(d.debug("add bottom border"),s(r)):n(r),t.includes("l")?(d.debug("add left border"),s(i)):n(i),a.attr("stroke-dasharray",e.join(" "))}const At=(a,t)=>{let r;t.classes?r="node "+t.classes:r="node default";const i=a.insert("g").attr("class",r).attr("id",t.domId||t.id),e=i.insert("rect",":first-child"),s=i.insert("line"),n=i.insert("g").attr("class","label"),l=t.labelText.flat?t.labelText.flat():t.labelText;let c="";typeof l=="object"?c=l[0]:c=l,d.info("Label text abc79",c,l,typeof l=="object");const o=n.node().appendChild(R(c,t.labelStyle,!0,!0));let h={width:0,height:0};if(I(b().flowchart.htmlLabels)){const m=o.children[0],g=T(o);h=m.getBoundingClientRect(),g.attr("width",h.width),g.attr("height",h.height)}d.info("Text 2",l);const f=l.slice(1,l.length);let y=o.getBBox();const p=n.node().appendChild(R(f.join?f.join("<br/>"):f,t.labelStyle,!0,!0));if(I(b().flowchart.htmlLabels)){const m=p.children[0],g=T(p);h=m.getBoundingClientRect(),g.attr("width",h.width),g.attr("height",h.height)}const x=t.padding/2;return T(p).attr("transform","translate( "+(h.width>y.width?0:(y.width-h.width)/2)+", "+(y.height+x+5)+")"),T(o).attr("transform","translate( "+(h.width<y.width?0:-(y.width-h.width)/2)+", 0)"),h=n.node().getBBox(),n.attr("transform","translate("+-h.width/2+", "+(-h.height/2-x+3)+")"),e.attr("class","outer title-state").attr("x",-h.width/2-x).attr("y",-h.height/2-x).attr("width",h.width+t.padding).attr("height",h.height+t.padding),s.attr("class","divider").attr("x1",-h.width/2-x).attr("x2",h.width/2+x).attr("y1",-h.height/2-x+y.height+x).attr("y2",-h.height/2-x+y.height+x),k(t,e),t.intersect=function(m){return u.rect(t,m)},i},Ut=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.height+t.padding,s=i.width+e/4+t.padding,n=r.insert("rect",":first-child").attr("style",t.style).attr("rx",e/2).attr("ry",e/2).attr("x",-s/2).attr("y",-e/2).attr("width",s).attr("height",e);return k(t,n),t.intersect=function(l){return u.rect(t,l)},r},zt=async(a,t)=>{const{shapeSvg:r,bbox:i,halfPadding:e}=await E(a,t,$(t,void 0),!0),s=r.insert("circle",":first-child");return s.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",i.width/2+e).attr("width",i.width+t.padding).attr("height",i.height+t.padding),d.info("Circle main"),k(t,s),t.intersect=function(n){return d.info("Circle intersect",t,i.width/2+e,n),u.circle(t,i.width/2+e,n)},r},Zt=async(a,t)=>{const{shapeSvg:r,bbox:i,halfPadding:e}=await E(a,t,$(t,void 0),!0),s=5,n=r.insert("g",":first-child"),l=n.insert("circle"),c=n.insert("circle");return n.attr("class",t.class),l.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",i.width/2+e+s).attr("width",i.width+t.padding+s*2).attr("height",i.height+t.padding+s*2),c.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",i.width/2+e).attr("width",i.width+t.padding).attr("height",i.height+t.padding),d.info("DoubleCircle main"),k(t,l),t.intersect=function(o){return d.info("DoubleCircle intersect",t,i.width/2+e+s,o),u.circle(t,i.width/2+e+s,o)},r},Ft=async(a,t)=>{const{shapeSvg:r,bbox:i}=await E(a,t,$(t,void 0),!0),e=i.width+t.padding,s=i.height+t.padding,n=[{x:0,y:0},{x:e,y:0},{x:e,y:-s},{x:0,y:-s},{x:0,y:0},{x:-8,y:0},{x:e+8,y:0},{x:e+8,y:-s},{x:-8,y:-s},{x:-8,y:0}],l=N(r,e,s,n);return l.attr("style",t.style),k(t,l),t.intersect=function(c){return u.polygon(t,n,c)},r},Qt=(a,t)=>{const r=a.insert("g").attr("class","node default").attr("id",t.domId||t.id),i=r.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),k(t,i),t.intersect=function(e){return u.circle(t,7,e)},r},P=(a,t,r)=>{const i=a.insert("g").attr("class","node default").attr("id",t.domId||t.id);let e=70,s=10;r==="LR"&&(e=10,s=70);const n=i.append("rect").attr("x",-1*e/2).attr("y",-1*s/2).attr("width",e).attr("height",s).attr("class","fork-join");return k(t,n),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(l){return u.rect(t,l)},i},Vt=(a,t)=>{const r=a.insert("g").attr("class","node default").attr("id",t.domId||t.id),i=r.insert("circle",":first-child"),e=r.insert("circle",":first-child");return e.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),i.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),k(t,e),t.intersect=function(s){return u.circle(t,7,s)},r},qt=(a,t)=>{const r=t.padding/2,i=4,e=8;let s;t.classes?s="node "+t.classes:s="node default";const n=a.insert("g").attr("class",s).attr("id",t.domId||t.id),l=n.insert("rect",":first-child"),c=n.insert("line"),o=n.insert("line");let h=0,f=i;const y=n.insert("g").attr("class","label");let p=0;const x=t.classData.annotations&&t.classData.annotations[0],m=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",g=y.node().appendChild(R(m,t.labelStyle,!0,!0));let w=g.getBBox();if(I(b().flowchart.htmlLabels)){const v=g.children[0],L=T(g);w=v.getBoundingClientRect(),L.attr("width",w.width),L.attr("height",w.height)}t.classData.annotations[0]&&(f+=w.height+i,h+=w.width);let S=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(b().flowchart.htmlLabels?S+="&lt;"+t.classData.type+"&gt;":S+="<"+t.classData.type+">");const B=y.node().appendChild(R(S,t.labelStyle,!0,!0));T(B).attr("class","classTitle");let C=B.getBBox();if(I(b().flowchart.htmlLabels)){const v=B.children[0],L=T(B);C=v.getBoundingClientRect(),L.attr("width",C.width),L.attr("height",C.height)}f+=C.height+i,C.width>h&&(h=C.width);const W=[];t.classData.members.forEach(v=>{const L=v.getDisplayDetails();let O=L.displayText;b().flowchart.htmlLabels&&(O=O.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const H=y.node().appendChild(R(O,L.cssStyle?L.cssStyle:t.labelStyle,!0,!0));let _=H.getBBox();if(I(b().flowchart.htmlLabels)){const Q=H.children[0],j=T(H);_=Q.getBoundingClientRect(),j.attr("width",_.width),j.attr("height",_.height)}_.width>h&&(h=_.width),f+=_.height+i,W.push(H)}),f+=e;const D=[];if(t.classData.methods.forEach(v=>{const L=v.getDisplayDetails();let O=L.displayText;b().flowchart.htmlLabels&&(O=O.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const H=y.node().appendChild(R(O,L.cssStyle?L.cssStyle:t.labelStyle,!0,!0));let _=H.getBBox();if(I(b().flowchart.htmlLabels)){const Q=H.children[0],j=T(H);_=Q.getBoundingClientRect(),j.attr("width",_.width),j.attr("height",_.height)}_.width>h&&(h=_.width),f+=_.height+i,D.push(H)}),f+=e,x){let v=(h-w.width)/2;T(g).attr("transform","translate( "+(-1*h/2+v)+", "+-1*f/2+")"),p=w.height+i}let nt=(h-C.width)/2;return T(B).attr("transform","translate( "+(-1*h/2+nt)+", "+(-1*f/2+p)+")"),p+=C.height+i,c.attr("class","divider").attr("x1",-h/2-r).attr("x2",h/2+r).attr("y1",-f/2-r+e+p).attr("y2",-f/2-r+e+p),p+=e,W.forEach(v=>{T(v).attr("transform","translate( "+-h/2+", "+(-1*f/2+p+e/2)+")");const L=v==null?void 0:v.getBBox();p+=((L==null?void 0:L.height)??0)+i}),p+=e,o.attr("class","divider").attr("x1",-h/2-r).attr("x2",h/2+r).attr("y1",-f/2-r+e+p).attr("y2",-f/2-r+e+p),p+=e,D.forEach(v=>{T(v).attr("transform","translate( "+-h/2+", "+(-1*f/2+p)+")");const L=v==null?void 0:v.getBBox();p+=((L==null?void 0:L.height)??0)+i}),l.attr("style",t.style).attr("class","outer title-state").attr("x",-h/2-r).attr("y",-(f/2)-r).attr("width",h+t.padding).attr("height",f+t.padding),k(t,l),t.intersect=function(v){return u.rect(t,v)},n},tt={rhombus:G,question:G,rect:Dt,labelRect:jt,rectWithTitle:At,choice:$t,circle:zt,doublecircle:Zt,stadium:Ut,hexagon:Rt,rect_left_inv_arrow:It,lean_right:Ht,lean_left:Nt,trapezoid:Xt,inv_trapezoid:Ot,rect_right_inv_arrow:Wt,cylinder:Yt,start:Qt,end:Vt,note:_t,subroutine:Ft,fork:P,join:P,class_box:qt};let Y={};const ir=async(a,t,r)=>{let i,e;if(t.link){let s;b().securityLevel==="sandbox"?s="_top":t.linkTarget&&(s=t.linkTarget||"_blank"),i=a.insert("svg:a").attr("xlink:href",t.link).attr("target",s),e=await tt[t.shape](i,t,r)}else e=await tt[t.shape](a,t,r),i=e;return t.tooltip&&e.attr("title",t.tooltip),t.class&&e.attr("class","node default "+t.class),Y[t.id]=i,t.haveCallback&&Y[t.id].attr("class",Y[t.id].attr("class")+" clickable"),i},nr=(a,t)=>{Y[t.id]=a},lr=()=>{Y={}},cr=a=>{const t=Y[a.id];d.trace("Transforming node",a.diff,a,"translate("+(a.x-a.width/2-5)+", "+a.width/2+")");const r=8,i=a.diff||0;return a.clusterNode?t.attr("transform","translate("+(a.x+i-a.width/2)+", "+(a.y-a.height/2-r)+")"):t.attr("transform","translate("+a.x+", "+a.y+")"),i},X={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function U(a,t){if(a===void 0||t===void 0)return{angle:0,deltaX:0,deltaY:0};a=Z(a),t=Z(t);const[r,i]=[a.x,a.y],[e,s]=[t.x,t.y],n=e-r,l=s-i;return{angle:Math.atan(l/n),deltaX:n,deltaY:l}}const Z=a=>Array.isArray(a)?{x:a[0],y:a[1]}:a,Jt=a=>({x:function(t,r,i){let e=0;if(r===0&&Object.hasOwn(X,a.arrowTypeStart)){const{angle:s,deltaX:n}=U(i[0],i[1]);e=X[a.arrowTypeStart]*Math.cos(s)*(n>=0?1:-1)}else if(r===i.length-1&&Object.hasOwn(X,a.arrowTypeEnd)){const{angle:s,deltaX:n}=U(i[i.length-1],i[i.length-2]);e=X[a.arrowTypeEnd]*Math.cos(s)*(n>=0?1:-1)}return Z(t).x+e},y:function(t,r,i){let e=0;if(r===0&&Object.hasOwn(X,a.arrowTypeStart)){const{angle:s,deltaY:n}=U(i[0],i[1]);e=X[a.arrowTypeStart]*Math.abs(Math.sin(s))*(n>=0?1:-1)}else if(r===i.length-1&&Object.hasOwn(X,a.arrowTypeEnd)){const{angle:s,deltaY:n}=U(i[i.length-1],i[i.length-2]);e=X[a.arrowTypeEnd]*Math.abs(Math.sin(s))*(n>=0?1:-1)}return Z(t).y+e}}),Kt=(a,t,r,i,e)=>{t.arrowTypeStart&&rt(a,"start",t.arrowTypeStart,r,i,e),t.arrowTypeEnd&&rt(a,"end",t.arrowTypeEnd,r,i,e)},Gt={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},rt=(a,t,r,i,e,s)=>{const n=Gt[r];if(!n){d.warn(`Unknown arrow type: ${r}`);return}const l=t==="start"?"Start":"End";a.attr(`marker-${t}`,`url(${i}#${e}_${s}-${n}${l})`)};let F={},M={};const hr=()=>{F={},M={}},or=(a,t)=>{const r=I(b().flowchart.htmlLabels),i=t.labelType==="markdown"?et(a,t.label,{style:t.labelStyle,useHtmlLabels:r,addSvgBackground:!0}):R(t.label,t.labelStyle);d.info("abc82",t,t.labelType);const e=a.insert("g").attr("class","edgeLabel"),s=e.insert("g").attr("class","label");s.node().appendChild(i);let n=i.getBBox();if(r){const c=i.children[0],o=T(i);n=c.getBoundingClientRect(),o.attr("width",n.width),o.attr("height",n.height)}s.attr("transform","translate("+-n.width/2+", "+-n.height/2+")"),F[t.id]=e,t.width=n.width,t.height=n.height;let l;if(t.startLabelLeft){const c=R(t.startLabelLeft,t.labelStyle),o=a.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");l=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),M[t.id]||(M[t.id]={}),M[t.id].startLeft=o,z(l,t.startLabelLeft)}if(t.startLabelRight){const c=R(t.startLabelRight,t.labelStyle),o=a.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");l=o.node().appendChild(c),h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),M[t.id]||(M[t.id]={}),M[t.id].startRight=o,z(l,t.startLabelRight)}if(t.endLabelLeft){const c=R(t.endLabelLeft,t.labelStyle),o=a.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");l=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),o.node().appendChild(c),M[t.id]||(M[t.id]={}),M[t.id].endLeft=o,z(l,t.endLabelLeft)}if(t.endLabelRight){const c=R(t.endLabelRight,t.labelStyle),o=a.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");l=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),o.node().appendChild(c),M[t.id]||(M[t.id]={}),M[t.id].endRight=o,z(l,t.endLabelRight)}return i};function z(a,t){b().flowchart.htmlLabels&&a&&(a.style.width=t.length*9+"px",a.style.height="12px")}const fr=(a,t)=>{d.info("Moving label abc78 ",a.id,a.label,F[a.id]);let r=t.updatedPath?t.updatedPath:t.originalPath;if(a.label){const i=F[a.id];let e=a.x,s=a.y;if(r){const n=A.calcLabelPosition(r);d.info("Moving label "+a.label+" from (",e,",",s,") to (",n.x,",",n.y,") abc78"),t.updatedPath&&(e=n.x,s=n.y)}i.attr("transform","translate("+e+", "+s+")")}if(a.startLabelLeft){const i=M[a.id].startLeft;let e=a.x,s=a.y;if(r){const n=A.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_left",r);e=n.x,s=n.y}i.attr("transform","translate("+e+", "+s+")")}if(a.startLabelRight){const i=M[a.id].startRight;let e=a.x,s=a.y;if(r){const n=A.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_right",r);e=n.x,s=n.y}i.attr("transform","translate("+e+", "+s+")")}if(a.endLabelLeft){const i=M[a.id].endLeft;let e=a.x,s=a.y;if(r){const n=A.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_left",r);e=n.x,s=n.y}i.attr("transform","translate("+e+", "+s+")")}if(a.endLabelRight){const i=M[a.id].endRight;let e=a.x,s=a.y;if(r){const n=A.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_right",r);e=n.x,s=n.y}i.attr("transform","translate("+e+", "+s+")")}},Pt=(a,t)=>{const r=a.x,i=a.y,e=Math.abs(t.x-r),s=Math.abs(t.y-i),n=a.width/2,l=a.height/2;return e>=n||s>=l},tr=(a,t,r)=>{d.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${a.x} y:${a.y} w:${a.width} h:${a.height}`);const i=a.x,e=a.y,s=Math.abs(i-r.x),n=a.width/2;let l=r.x<t.x?n-s:n+s;const c=a.height/2,o=Math.abs(t.y-r.y),h=Math.abs(t.x-r.x);if(Math.abs(e-t.y)*n>Math.abs(i-t.x)*c){let f=r.y<t.y?t.y-c-e:e-c-t.y;l=h*f/o;const y={x:r.x<t.x?r.x+l:r.x-h+l,y:r.y<t.y?r.y+o-f:r.y-o+f};return l===0&&(y.x=t.x,y.y=t.y),h===0&&(y.x=t.x),o===0&&(y.y=t.y),d.warn(`abc89 topp/bott calc, Q ${o}, q ${f}, R ${h}, r ${l}`,y),y}else{r.x<t.x?l=t.x-n-i:l=i-n-t.x;let f=o*l/h,y=r.x<t.x?r.x+h-l:r.x-h+l,p=r.y<t.y?r.y+f:r.y-f;return d.warn(`sides calc abc89, Q ${o}, q ${f}, R ${h}, r ${l}`,{_x:y,_y:p}),l===0&&(y=t.x,p=t.y),h===0&&(y=t.x),o===0&&(p=t.y),{x:y,y:p}}},at=(a,t)=>{d.warn("abc88 cutPathAtIntersect",a,t);let r=[],i=a[0],e=!1;return a.forEach(s=>{if(d.info("abc88 checking point",s,t),!Pt(t,s)&&!e){const n=tr(t,i,s);d.warn("abc88 inside",s,i,n),d.warn("abc88 intersection",n);let l=!1;r.forEach(c=>{l=l||c.x===n.x&&c.y===n.y}),r.some(c=>c.x===n.x&&c.y===n.y)?d.warn("abc88 no intersect",n,r):r.push(n),e=!0}else d.warn("abc88 outside",s,i),i=s,e||r.push(s)}),d.warn("abc88 returning points",r),r},pr=function(a,t,r,i,e,s,n){let l=r.points,c=!1;const o=s.node(t.v);var h=s.node(t.w);d.info("abc88 InsertEdge: ",r),h.intersect&&o.intersect&&(l=l.slice(1,r.points.length-1),l.unshift(o.intersect(l[0])),d.info("Last point",l[l.length-1],h,h.intersect(l[l.length-1])),l.push(h.intersect(l[l.length-1]))),r.toCluster&&(d.info("to cluster abc88",i[r.toCluster]),l=at(r.points,i[r.toCluster].node),c=!0),r.fromCluster&&(d.info("from cluster abc88",i[r.fromCluster]),l=at(l.reverse(),i[r.fromCluster].node).reverse(),c=!0);const f=l.filter(C=>!Number.isNaN(C.y));let y=lt;r.curve&&(e==="graph"||e==="flowchart")&&(y=r.curve);const{x:p,y:x}=Jt(r),m=ct().x(p).y(x).curve(y);let g;switch(r.thickness){case"normal":g="edge-thickness-normal";break;case"thick":g="edge-thickness-thick";break;case"invisible":g="edge-thickness-thick";break;default:g=""}switch(r.pattern){case"solid":g+=" edge-pattern-solid";break;case"dotted":g+=" edge-pattern-dotted";break;case"dashed":g+=" edge-pattern-dashed";break}const w=a.append("path").attr("d",m(f)).attr("id",r.id).attr("class"," "+g+(r.classes?" "+r.classes:"")).attr("style",r.style);let S="";(b().flowchart.arrowMarkerAbsolute||b().state.arrowMarkerAbsolute)&&(S=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,S=S.replace(/\(/g,"\\("),S=S.replace(/\)/g,"\\)")),d.info("arrowTypeStart",r.arrowTypeStart),d.info("arrowTypeEnd",r.arrowTypeEnd),Kt(w,r,S,n,e);let B={};return c&&(B.updatedPath=l),B.originalPath=r.points,B};export{ir as a,or as b,pr as c,fr as d,lr as e,hr as f,R as g,Et as h,sr as i,Jt as j,Kt as k,E as l,cr as p,nr as s,k as u};
