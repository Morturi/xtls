"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[71],{60071:(t,e,n)=>{n.r(e),n.d(e,{diagram:()=>q});var i=n(11941),s=n(17967),r=n(74560),a=n(53622),c=n(24908),o=n(58553),l=n(8686),u=n(33364),d=(n(27856),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,3],n=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],s=[1,15],r=[1,16],a=[1,17],c=[1,18],o=[1,19],l=[1,20],u=[1,21],d=[1,22],h=[1,23],f=[1,24],m=[1,25],p=[1,26],k=[1,27],y=[1,29],g=[1,31],b=[1,34],v=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],x={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(t,e,n,i,s,r,a){var c=r.length-1;switch(s){case 2:return r[c-1];case 3:this.$=[];break;case 4:r[c-1].push(r[c]),this.$=r[c-1];break;case 5:case 6:this.$=r[c];break;case 7:case 8:this.$=[];break;case 9:i.setDateFormat(r[c].substr(11)),this.$=r[c].substr(11);break;case 10:i.enableInclusiveEndDates(),this.$=r[c].substr(18);break;case 11:i.TopAxis(),this.$=r[c].substr(8);break;case 12:i.setAxisFormat(r[c].substr(11)),this.$=r[c].substr(11);break;case 13:i.setTickInterval(r[c].substr(13)),this.$=r[c].substr(13);break;case 14:i.setExcludes(r[c].substr(9)),this.$=r[c].substr(9);break;case 15:i.setIncludes(r[c].substr(9)),this.$=r[c].substr(9);break;case 16:i.setTodayMarker(r[c].substr(12)),this.$=r[c].substr(12);break;case 17:i.setDiagramTitle(r[c].substr(6)),this.$=r[c].substr(6);break;case 18:this.$=r[c].trim(),i.setAccTitle(this.$);break;case 19:case 20:this.$=r[c].trim(),i.setAccDescription(this.$);break;case 21:i.addSection(r[c].substr(8)),this.$=r[c].substr(8);break;case 23:i.addTask(r[c-1],r[c]),this.$="task";break;case 27:this.$=r[c-1],i.setClickEvent(r[c-1],r[c],null);break;case 28:this.$=r[c-2],i.setClickEvent(r[c-2],r[c-1],r[c]);break;case 29:this.$=r[c-2],i.setClickEvent(r[c-2],r[c-1],null),i.setLink(r[c-2],r[c]);break;case 30:this.$=r[c-3],i.setClickEvent(r[c-3],r[c-2],r[c-1]),i.setLink(r[c-3],r[c]);break;case 31:this.$=r[c-2],i.setClickEvent(r[c-2],r[c],null),i.setLink(r[c-2],r[c-1]);break;case 32:this.$=r[c-3],i.setClickEvent(r[c-3],r[c-1],r[c]),i.setLink(r[c-3],r[c-2]);break;case 33:this.$=r[c-1],i.setLink(r[c-1],r[c]);break;case 34:case 40:this.$=r[c-1]+" "+r[c];break;case 35:case 36:case 38:this.$=r[c-2]+" "+r[c-1]+" "+r[c];break;case 37:case 39:this.$=r[c-3]+" "+r[c-2]+" "+r[c-1]+" "+r[c];break;case 41:i.parseDirective("%%{","open_directive");break;case 42:i.parseDirective(r[c],"type_directive");break;case 43:r[c]=r[c].trim().replace(/'/g,'"'),i.parseDirective(r[c],"arg_directive");break;case 44:i.parseDirective("}%%","close_directive","gantt")}},table:[{3:1,4:2,5:e,30:4,40:n},{1:[3]},{3:6,4:2,5:e,30:4,40:n},t(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:s,13:r,14:a,15:c,16:o,17:l,18:u,19:d,20:h,21:f,23:m,25:p,26:k,27:28,28:y,30:4,35:g,40:n},{32:32,33:[1,33],43:b},t([33,43],[2,42]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:30,10:35,12:s,13:r,14:a,15:c,16:o,17:l,18:u,19:d,20:h,21:f,23:m,25:p,26:k,27:28,28:y,30:4,35:g,40:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),{22:[1,36]},{24:[1,37]},t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),{29:[1,38]},t(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(i,[2,5]),t(i,[2,18]),t(i,[2,19]),t(i,[2,23]),t(i,[2,27],{37:[1,44],38:[1,45]}),t(i,[2,33],{36:[1,46]}),t(v,[2,25]),{32:47,43:b},{43:[2,43]},t(i,[2,28],{38:[1,48]}),t(i,[2,29]),t(i,[2,31],{37:[1,49]}),{11:[1,50]},t(i,[2,30]),t(i,[2,32]),t(v,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],s=[null],r=[],a=this.table,c="",o=0,l=0,u=2,d=1,h=r.slice.call(arguments,1),f=Object.create(this.lexer),m={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(m.yy[p]=this.yy[p]);f.setInput(t,m.yy),m.yy.lexer=f,m.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var k=f.yylloc;r.push(k);var y=f.options&&f.options.ranges;function g(){var t;return"number"!=typeof(t=i.pop()||f.lex()||d)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof m.yy.parseError?this.parseError=m.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,v,x,T,_,$,C,S,w={};;){if(v=n[n.length-1],this.defaultActions[v]?x=this.defaultActions[v]:(null==b&&(b=g()),x=a[v]&&a[v][b]),void 0===x||!x.length||!x[0]){var D="";for(_ in S=[],a[v])this.terminals_[_]&&_>u&&S.push("'"+this.terminals_[_]+"'");D=f.showPosition?"Parse error on line "+(o+1)+":\n"+f.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(o+1)+": Unexpected "+(b==d?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(D,{text:f.match,token:this.terminals_[b]||b,line:f.yylineno,loc:k,expected:S})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+b);switch(x[0]){case 1:n.push(b),s.push(f.yytext),r.push(f.yylloc),n.push(x[1]),b=null,l=f.yyleng,c=f.yytext,o=f.yylineno,k=f.yylloc;break;case 2:if($=this.productions_[x[1]][1],w.$=s[s.length-$],w._$={first_line:r[r.length-($||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-($||1)].first_column,last_column:r[r.length-1].last_column},y&&(w._$.range=[r[r.length-($||1)].range[0],r[r.length-1].range[1]]),void 0!==(T=this.performAction.apply(w,[c,l,o,m.yy,x[1],s,r].concat(h))))return T;$&&(n=n.slice(0,-1*$*2),s=s.slice(0,-1*$),r=r.slice(0,-1*$)),n.push(this.productions_[x[1]][0]),s.push(w.$),r.push(w._$),C=a[n[n.length-2]][n[n.length-1]],n.push(C);break;case 3:return!0}}return!0}},T={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:case 13:case 14:break;case 15:return 11;case 16:case 17:case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 38;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 26:this.popState();break;case 27:return 37;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};function _(){this.yy={}}return x.lexer=T,_.prototype=x,x.Parser=_,new _}());d.parser=d;let h,f="",m="",p="",k=[],y=[],g={},b=[],v=[],x="";const T=["active","done","crit","milestone"];let _=[],$=!1,C=!1,S=0;const w=function(t,e,n,i){return!i.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&n.includes("weekends"))||!!n.includes(t.format("dddd").toLowerCase())||n.includes(t.format(e.trim())))},D=function(t,e,n,s){if(!n.length||t.manualEndTime)return;let r=i(t.startTime,e,!0);r.add(1,"d");let a=i(t.endTime,e,!0),c=E(r,a,e,n,s);t.endTime=a.toDate(),t.renderEndTime=c},E=function(t,e,n,i,s){let r=!1,a=null;for(;t<=e;)r||(a=e.toDate()),r=w(t,n,i,s),r&&e.add(1,"d"),t.add(1,"d");return a},A=function(t,e,n){n=n.trim();const s=/^after\s+([\d\w- ]+)/.exec(n.trim());if(null!==s){let t=null;if(s[1].split(" ").forEach((function(e){let n=Y(e);void 0!==n&&(t?n.endTime>t.endTime&&(t=n):t=n)})),t)return t.endTime;{const t=new Date;return t.setHours(0,0,0,0),t}}let a=i(n,e.trim(),!0);if(a.isValid())return a.toDate();{r.l.debug("Invalid date:"+n),r.l.debug("With date format:"+e.trim());const t=new Date(n);if(void 0===t||isNaN(t.getTime()))throw new Error("Invalid date:"+n);return t}},I=function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?i.duration(Number.parseFloat(e[1]),e[2]):i.duration.invalid()},F=function(t,e,n,s=!1){n=n.trim();let r=i(n,e.trim(),!0);if(r.isValid())return s&&r.add(1,"d"),r.toDate();const a=i(t),c=I(n);return c.isValid()&&a.add(c),a.toDate()};let L=0;const B=function(t){return void 0===t?(L+=1,"task"+L):t};let O,P,z=[];const M={},Y=function(t){const e=M[t];return z[e]},N=function(){const t=function(t){const e=z[t];let n="";switch(z[t].raw.startTime.type){case"prevTaskEnd":{const t=Y(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":n=A(0,f,z[t].raw.startTime.startData),n&&(z[t].startTime=n)}return z[t].startTime&&(z[t].endTime=F(z[t].startTime,f,z[t].raw.endTime.data,$),z[t].endTime&&(z[t].processed=!0,z[t].manualEndTime=i(z[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),D(z[t],f,y,k))),z[t].processed};let e=!0;for(const[n,i]of z.entries())t(n),e=e&&i.processed;return e},j=function(t,e){t.split(",").forEach((function(t){let n=Y(t);void 0!==n&&n.classes.push(e)}))},R=function(t,e){_.push((function(){const n=document.querySelector(`[id="${t}"]`);null!==n&&n.addEventListener("click",(function(){e()}))}),(function(){const n=document.querySelector(`[id="${t}-text"]`);null!==n&&n.addEventListener("click",(function(){e()}))}))};function V(t,e,n){let i=!0;for(;i;)i=!1,n.forEach((function(n){const s=new RegExp("^\\s*"+n+"\\s*$");t[0].match(s)&&(e[n]=!0,t.shift(1),i=!0)}))}let W;const q={parser:d,db:{parseDirective:function(t,e,n){c.m.parseDirective(this,t,e,n)},getConfig:()=>(0,r.g)().gantt,clear:function(){b=[],v=[],x="",_=[],L=0,O=void 0,P=void 0,z=[],f="",m="",h=void 0,p="",k=[],y=[],$=!1,C=!1,S=0,g={},(0,o.f)()},setDateFormat:function(t){f=t},getDateFormat:function(){return f},enableInclusiveEndDates:function(){$=!0},endDatesAreInclusive:function(){return $},enableTopAxis:function(){C=!0},topAxisEnabled:function(){return C},setAxisFormat:function(t){m=t},getAxisFormat:function(){return m},setTickInterval:function(t){h=t},getTickInterval:function(){return h},setTodayMarker:function(t){p=t},getTodayMarker:function(){return p},setAccTitle:o.s,getAccTitle:o.g,setDiagramTitle:o.d,getDiagramTitle:o.e,setAccDescription:o.b,getAccDescription:o.a,addSection:function(t){x=t,b.push(t)},getSections:function(){return b},getTasks:function(){let t=N(),e=0;for(;!t&&e<10;)t=N(),e++;return v=z,v},addTask:function(t,e){const n={section:x,type:x,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),s={};V(i,s,T);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:s.id=B(),s.startTime={type:"prevTaskEnd",id:t},s.endTime={data:i[0]};break;case 2:s.id=B(),s.startTime={type:"getStartDate",startData:i[0]},s.endTime={data:i[1]};break;case 3:s.id=B(i[0]),s.startTime={type:"getStartDate",startData:i[1]},s.endTime={data:i[2]}}return s}(P,e);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=P,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=S,S++;const s=z.push(n);P=n.id,M[n.id]=s-1},findTaskById:Y,addTaskOrg:function(t,e){const n={section:x,type:x,description:t,task:t,classes:[]},s=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const s=n.split(","),r={};V(s,r,T);for(let t=0;t<s.length;t++)s[t]=s[t].trim();let a="";switch(s.length){case 1:r.id=B(),r.startTime=t.endTime,a=s[0];break;case 2:r.id=B(),r.startTime=A(0,f,s[0]),a=s[1];break;case 3:r.id=B(s[0]),r.startTime=A(0,f,s[1]),a=s[2]}return a&&(r.endTime=F(r.startTime,f,a,$),r.manualEndTime=i(a,"YYYY-MM-DD",!0).isValid(),D(r,f,y,k)),r}(O,e);n.startTime=s.startTime,n.endTime=s.endTime,n.id=s.id,n.active=s.active,n.done=s.done,n.crit=s.crit,n.milestone=s.milestone,O=n,v.push(n)},setIncludes:function(t){k=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return k},setExcludes:function(t){y=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return y},setClickEvent:function(t,e,n){t.split(",").forEach((function(t){!function(t,e,n){if("loose"!==(0,r.g)().securityLevel)return;if(void 0===e)return;let i=[];if("string"==typeof n){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<i.length;t++){let e=i[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),i[t]=e}}0===i.length&&i.push(t),void 0!==Y(t)&&R(t,(()=>{a.u.runFunc(e,...i)}))}(t,e,n)})),j(t,"clickable")},setLink:function(t,e){let n=e;"loose"!==(0,r.g)().securityLevel&&(n=(0,s.N)(e)),t.split(",").forEach((function(t){void 0!==Y(t)&&(R(t,(()=>{window.open(n,"_self")})),g[t]=n)})),j(t,"clickable")},getLinks:function(){return g},bindFunctions:function(t){_.forEach((function(e){e(t)}))},parseDuration:I,isInvalidDate:w},renderer:{setConf:function(){r.l.debug("Something is calling, setConf, remove the call")},draw:function(t,e,n,s){const a=(0,r.g)().gantt,c=(0,r.g)().securityLevel;let o;"sandbox"===c&&(o=(0,l.Ys)("#i"+e));const d="sandbox"===c?(0,l.Ys)(o.nodes()[0].contentDocument.body):(0,l.Ys)("body"),h="sandbox"===c?o.nodes()[0].contentDocument:document,f=h.getElementById(e);W=f.parentElement.offsetWidth,void 0===W&&(W=1200),void 0!==a.useWidth&&(W=a.useWidth);const m=s.db.getTasks(),p=m.length*(a.barHeight+a.barGap)+2*a.topPadding;f.setAttribute("viewBox","0 0 "+W+" "+p);const k=d.select(`[id="${e}"]`),y=(0,l.Xf)().domain([(0,l.VV$)(m,(function(t){return t.startTime})),(0,l.Fp7)(m,(function(t){return t.endTime}))]).rangeRound([0,W-a.leftPadding-a.rightPadding]);let g=[];for(const t of m)g.push(t.type);const b=g;g=function(t){const e={},n=[];for(let i=0,s=t.length;i<s;++i)Object.prototype.hasOwnProperty.call(e,t[i])||(e[t[i]]=!0,n.push(t[i]));return n}(g),m.sort((function(t,e){const n=t.startTime,i=e.startTime;let s=0;return n>i?s=1:n<i&&(s=-1),s})),function(t,n,c){const o=a.barHeight,u=o+a.barGap,d=a.topPadding,f=a.leftPadding;(0,l.BYU)().domain([0,g.length]).range(["#00B9FA","#F95002"]).interpolate(l.JHv),function(t,e,n,r,c,o,l,u){const d=o.reduce(((t,{startTime:e})=>t?Math.min(t,e):e),0),h=o.reduce(((t,{endTime:e})=>t?Math.max(t,e):e),0),f=s.db.getDateFormat();if(!d||!h)return;const m=[];let p=null,g=i(d);for(;g.valueOf()<=h;)s.db.isInvalidDate(g,f,l,u)?p?p.end=g.clone():p={start:g.clone(),end:g.clone()}:p&&(m.push(p),p=null),g.add(1,"d");k.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",(function(t){return"exclude-"+t.start.format("YYYY-MM-DD")})).attr("x",(function(t){return y(t.start)+n})).attr("y",a.gridLineStartPadding).attr("width",(function(t){const e=t.end.clone().add(1,"day");return y(e)-y(t.start)})).attr("height",c-e-a.gridLineStartPadding).attr("transform-origin",(function(e,i){return(y(e.start)+n+.5*(y(e.end)-y(e.start))).toString()+"px "+(i*t+.5*c).toString()+"px"})).attr("class","exclude-range")}(u,d,f,0,c,t,s.db.getExcludes(),s.db.getIncludes()),function(t,e,n,i){let r=(0,l.LLu)(y).tickSize(-i+e+a.gridLineStartPadding).tickFormat((0,l.i$Z)(s.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));const c=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||a.tickInterval);if(null!==c){const t=c[1];switch(c[2]){case"minute":r.ticks(l.Z_i.every(t));break;case"hour":r.ticks(l.WQD.every(t));break;case"day":r.ticks(l.rr1.every(t));break;case"week":r.ticks(l.NGh.every(t));break;case"month":r.ticks(l.F0B.every(t))}}if(k.append("g").attr("class","grid").attr("transform","translate("+t+", "+(i-50)+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||a.topAxis){let n=(0,l.F5q)(y).tickSize(-i+e+a.gridLineStartPadding).tickFormat((0,l.i$Z)(s.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(null!==c){const t=c[1];switch(c[2]){case"minute":n.ticks(l.Z_i.every(t));break;case"hour":n.ticks(l.WQD.every(t));break;case"day":n.ticks(l.rr1.every(t));break;case"week":n.ticks(l.NGh.every(t));break;case"month":n.ticks(l.F0B.every(t))}}k.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(f,d,0,c),function(t,n,i,c,o,u,d){k.append("g").selectAll("rect").data(t).enter().append("rect").attr("x",0).attr("y",(function(t,e){return t.order*n+i-2})).attr("width",(function(){return d-a.rightPadding/2})).attr("height",n).attr("class",(function(t){for(const[e,n]of g.entries())if(t.type===n)return"section section"+e%a.numberSectionStyles;return"section section0"}));const h=k.append("g").selectAll("rect").data(t).enter(),f=s.db.getLinks();if(h.append("rect").attr("id",(function(t){return t.id})).attr("rx",3).attr("ry",3).attr("x",(function(t){return t.milestone?y(t.startTime)+c+.5*(y(t.endTime)-y(t.startTime))-.5*o:y(t.startTime)+c})).attr("y",(function(t,e){return t.order*n+i})).attr("width",(function(t){return t.milestone?o:y(t.renderEndTime||t.endTime)-y(t.startTime)})).attr("height",o).attr("transform-origin",(function(t,e){return e=t.order,(y(t.startTime)+c+.5*(y(t.endTime)-y(t.startTime))).toString()+"px "+(e*n+i+.5*o).toString()+"px"})).attr("class",(function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let n=0;for(const[e,i]of g.entries())t.type===i&&(n=e%a.numberSectionStyles);let i="";return t.active?t.crit?i+=" activeCrit":i=" active":t.done?i=t.crit?" doneCrit":" done":t.crit&&(i+=" crit"),0===i.length&&(i=" task"),t.milestone&&(i=" milestone "+i),i+=n,i+=" "+e,"task"+i})),h.append("text").attr("id",(function(t){return t.id+"-text"})).text((function(t){return t.task})).attr("font-size",a.fontSize).attr("x",(function(t){let e=y(t.startTime),n=y(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(y(t.endTime)-y(t.startTime))-.5*o),t.milestone&&(n=e+o);const i=this.getBBox().width;return i>n-e?n+i+1.5*a.leftPadding>d?e+c-5:n+c+5:(n-e)/2+e+c})).attr("y",(function(t,e){return t.order*n+a.barHeight/2+(a.fontSize/2-2)+i})).attr("text-height",o).attr("class",(function(t){const e=y(t.startTime);let n=y(t.endTime);t.milestone&&(n=e+o);const i=this.getBBox().width;let s="";t.classes.length>0&&(s=t.classes.join(" "));let r=0;for(const[e,n]of g.entries())t.type===n&&(r=e%a.numberSectionStyles);let c="";return t.active&&(c=t.crit?"activeCritText"+r:"activeText"+r),t.done?c=t.crit?c+" doneCritText"+r:c+" doneText"+r:t.crit&&(c=c+" critText"+r),t.milestone&&(c+=" milestoneText"),i>n-e?n+i+1.5*a.leftPadding>d?s+" taskTextOutsideLeft taskTextOutside"+r+" "+c:s+" taskTextOutsideRight taskTextOutside"+r+" "+c+" width-"+i:s+" taskText taskText"+r+" "+c+" width-"+i})),"sandbox"===(0,r.g)().securityLevel){let t;t=(0,l.Ys)("#i"+e);const n=t.nodes()[0].contentDocument;h.filter((function(t){return void 0!==f[t.id]})).each((function(t){var e=n.querySelector("#"+t.id),i=n.querySelector("#"+t.id+"-text");const s=e.parentNode;var r=n.createElement("a");r.setAttribute("xlink:href",f[t.id]),r.setAttribute("target","_top"),s.appendChild(r),r.appendChild(e),r.appendChild(i)}))}}(t,u,d,f,o,0,n),function(t,e){const n=[];let i=0;for(const[t,e]of g.entries())n[t]=[e,(s=e,c=b,function(t){let e=t.length;const n={};for(;e;)n[t[--e]]=(n[t[e]]||0)+1;return n}(c)[s]||0)];var s,c;k.append("g").selectAll("text").data(n).enter().append((function(t){const e=t[0].split(r.d.lineBreakRegex),n=-(e.length-1)/2,i=h.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("dy",n+"em");for(const[t,n]of e.entries()){const e=h.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=n,i.appendChild(e)}return i})).attr("x",10).attr("y",(function(s,r){if(!(r>0))return s[1]*t/2+e;for(let a=0;a<r;a++)return i+=n[r-1][1],s[1]*t/2+i*t+e})).attr("font-size",a.sectionFontSize).attr("font-size",a.sectionFontSize).attr("class",(function(t){for(const[e,n]of g.entries())if(t[0]===n)return"sectionTitle sectionTitle"+e%a.numberSectionStyles;return"sectionTitle"}))}(u,d),function(t,e,n,i){const r=s.db.getTodayMarker();if("off"===r)return;const c=k.append("g").attr("class","today"),o=new Date,l=c.append("line");l.attr("x1",y(o)+t).attr("x2",y(o)+t).attr("y1",a.titleTopMargin).attr("y2",i-a.titleTopMargin).attr("class","today"),""!==r&&l.attr("style",r.replace(/,/g,";"))}(f,0,0,c)}(m,W,p),(0,u.c)(k,p,W,a.useMaxWidth),k.append("text").text(s.db.getDiagramTitle()).attr("x",W/2).attr("y",a.titleTopMargin).attr("class","titleText")}},styles:t=>`\n  .mermaid-main-font {\n    font-family: "trebuchet ms", verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  .exclude-range {\n    fill: ${t.excludeBkgColor};\n  }\n\n  .section {\n    stroke: none;\n    opacity: 0.2;\n  }\n\n  .section0 {\n    fill: ${t.sectionBkgColor};\n  }\n\n  .section2 {\n    fill: ${t.sectionBkgColor2};\n  }\n\n  .section1,\n  .section3 {\n    fill: ${t.altSectionBkgColor};\n    opacity: 0.2;\n  }\n\n  .sectionTitle0 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle1 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle2 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle3 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle {\n    text-anchor: start;\n    // font-size: ${t.ganttFontSize};\n    // text-height: 14px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n\n  }\n\n\n  /* Grid and axis */\n\n  .grid .tick {\n    stroke: ${t.gridColor};\n    opacity: 0.8;\n    shape-rendering: crispEdges;\n    text {\n      font-family: ${t.fontFamily};\n      fill: ${t.textColor};\n    }\n  }\n\n  .grid path {\n    stroke-width: 0;\n  }\n\n\n  /* Today line */\n\n  .today {\n    fill: none;\n    stroke: ${t.todayLineColor};\n    stroke-width: 2px;\n  }\n\n\n  /* Task styling */\n\n  /* Default task */\n\n  .task {\n    stroke-width: 2;\n  }\n\n  .taskText {\n    text-anchor: middle;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n\n  // .taskText:not([font-size]) {\n  //   font-size: ${t.ganttFontSize};\n  // }\n\n  .taskTextOutsideRight {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: start;\n    // font-size: ${t.ganttFontSize};\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n\n  }\n\n  .taskTextOutsideLeft {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: end;\n    // font-size: ${t.ganttFontSize};\n  }\n\n  /* Special case clickable */\n  .task.clickable {\n    cursor: pointer;\n  }\n  .taskText.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideLeft.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideRight.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  /* Specific task settings for the sections*/\n\n  .taskText0,\n  .taskText1,\n  .taskText2,\n  .taskText3 {\n    fill: ${t.taskTextColor};\n  }\n\n  .task0,\n  .task1,\n  .task2,\n  .task3 {\n    fill: ${t.taskBkgColor};\n    stroke: ${t.taskBorderColor};\n  }\n\n  .taskTextOutside0,\n  .taskTextOutside2\n  {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n  .taskTextOutside1,\n  .taskTextOutside3 {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n\n  /* Active task */\n\n  .active0,\n  .active1,\n  .active2,\n  .active3 {\n    fill: ${t.activeTaskBkgColor};\n    stroke: ${t.activeTaskBorderColor};\n  }\n\n  .activeText0,\n  .activeText1,\n  .activeText2,\n  .activeText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Completed task */\n\n  .done0,\n  .done1,\n  .done2,\n  .done3 {\n    stroke: ${t.doneTaskBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneText0,\n  .doneText1,\n  .doneText2,\n  .doneText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Tasks on the critical line */\n\n  .crit0,\n  .crit1,\n  .crit2,\n  .crit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.critBkgColor};\n    stroke-width: 2;\n  }\n\n  .activeCrit0,\n  .activeCrit1,\n  .activeCrit2,\n  .activeCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.activeTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneCrit0,\n  .doneCrit1,\n  .doneCrit2,\n  .doneCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n    cursor: pointer;\n    shape-rendering: crispEdges;\n  }\n\n  .milestone {\n    transform: rotate(45deg) scale(0.8,0.8);\n  }\n\n  .milestoneText {\n    font-style: italic;\n  }\n  .doneCritText0,\n  .doneCritText1,\n  .doneCritText2,\n  .doneCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .activeCritText0,\n  .activeCritText1,\n  .activeCritText2,\n  .activeCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .titleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor}    ;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n`}}}]);