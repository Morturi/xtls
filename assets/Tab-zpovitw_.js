import{m as e,_ as a,o as s,c as l,s as r}from"./app-CHJBK7iu.js";const i=e({props:{title:{type:String}},data(){return{tabID:this.title}},mounted(){this.tabID="tab-"+Math.random().toString(36).substring(2),this.$parent.$data.children.push({id:this.tabID,title:this.title})},computed:{labelID(){return this.tabID+"-label"}}}),o=["id","aria-labelledby"];function n(t,d,b,p,c,u){return s(),l("div",{class:"tab-pane fade",id:t.tabID,role:"tabpanel","aria-labelledby":t.labelID},[r(t.$slots,"default",{},void 0,!0)],8,o)}const h=a(i,[["render",n],["__scopeId","data-v-88372a6c"],["__file","Tab.vue"]]);export{h as default};
