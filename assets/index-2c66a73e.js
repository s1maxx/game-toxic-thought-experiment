import{r as n,m as t,B as l,j as e}from"./Box-530d5a90.js";import{p as _,q as g,t as u}from"./index-048aef57.js";import{S as p,B as a}from"./selector-c73c46b6.js";const k="/assets/toxic-logo-709b7485.png",b="_container_uk9dr_1",y="_buttons_uk9dr_21",f="_single_uk9dr_45",N="_multi_uk9dr_63",w="_undrestood_uk9dr_81",x="_help_uk9dr_99",v="_modal_uk9dr_133",S="_rules_uk9dr_169",s={container:b,buttons:y,single:f,multi:N,undrestood:w,help:x,modal:v,rules:S},q=()=>{const[r,h]=n.useState(!1),c=_(),o=g(p);n.useEffect(()=>{console.log("user",o)},[]),n.useEffect(()=>{console.log("s",o)},[o]);const i=()=>{h(!r)},d=m=>{switch(m){case 0:c(u.lobby,{state:{single:!0}});break;default:c(u.lobby,{state:{single:!1}});break}};return t(l,{className:s.container,children:[e("img",{src:k,alt:"logo"}),t(l,{className:`${s.buttons}`,children:[e(a,{variant:"contained",className:s.single,onClick:()=>d(0),children:"single device"}),e(a,{variant:"contained",className:s.multi,onClick:()=>d(1),children:"multi device"}),e(l,{className:s.help,onClick:i,children:"how to play"})]}),r&&t(l,{className:s.modal,children:[e("h1",{children:"how to play:"}),t("ul",{className:s.rules,children:[e("li",{children:"start from any player"}),e("li",{children:"a question will be read out"}),e("li",{children:"the player answers the question secretly"}),e("li",{children:"everyone else take turn to guess the answer"}),e("li",{children:"answer is displayed at the end"}),e("li",{children:"drink up losers, and pass to the next guy!"})]}),e(a,{onClick:i,className:s.undrestood,children:"understood"})]})]})};export{q as default};
