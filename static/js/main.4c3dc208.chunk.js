(this["webpackJsonpnumber-guessing-game"]=this["webpackJsonpnumber-guessing-game"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(8),r=n.n(a),o=(n(7),n(5)),u=n(2),b=n(0),i=Math.floor(100*Math.random())+1;console.log(i);var l=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(10),r=Object(u.a)(a,2),l=r[0],j=r[1],d=Object(c.useState)(""),m=Object(u.a)(d,2),O=m[0],h=m[1],p=Object(c.useState)([]),x=Object(u.a)(p,2),f=x[0],g=x[1],v=Object(c.useState)(!1),N=Object(u.a)(v,2),w=N[0],C=N[1],S=Object(b.jsx)("p",{className:"succes",children:"Congratulations! You won"}),Y=Object(b.jsx)("p",{className:"low",children:" Your number is too low!"}),k=Object(b.jsx)("p",{className:"high",children:"Your number is too high!"}),G=Object(b.jsx)("p",{className:"low",children:"Your number is less than 1, please enter a number between 1 and 100"}),E=Object(b.jsx)("p",{className:"low",children:"Your number is above 100, please enter a number between 1 and 100"});function M(){s("")}return Object(c.useEffect)((function(){0===l&&n===i?(h(Object(b.jsx)("p",{className:"succes",children:"Congratulations! You won"})),C(!0)):0===l&&(h(Object(b.jsx)("p",{className:"gameOver",children:"Game Over ! You lost"})),C(!0))}),[l,n]),Object(b.jsxs)("form",{className:"form",children:[Object(b.jsx)("h1",{children:"Enter a number between 1 and 100:"}),Object(b.jsx)("input",{disabled:f[f.length-1]===i,type:"number",value:n,onChange:function(e){return s(parseInt(e.target.value)||Number)}}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{disabled:0===l,className:"submit",onClick:function(e){return e.preventDefault(),n<1?(h(G),void s("")):n>100?(h(E),void s("")):void(n===i?(g([].concat(Object(o.a)(f),[n])),j((function(e){return e-1})),C(!0),h(S)):n<i?(g([].concat(Object(o.a)(f),[n])),j((function(e){return e-1})),s(""),h(Y)):(g([].concat(Object(o.a)(f),[n])),j((function(e){return e-1})),s(""),h(k)))},children:"Submit"}),Object(b.jsx)("button",{disabled:f[f.length-1]===i,className:"clear",onClick:function(e){e.preventDefault(),s("")},children:"Clear"}),Object(b.jsx)("button",{disabled:f[f.length-1]===i,className:"reset",onClick:M,children:"Reset"}),Object(b.jsxs)("p",{children:["Remaining attempts: ",l]}),Object(b.jsxs)("p",{children:["Previous Guesses: ",f.join(", ")]}),O,w&&Object(b.jsx)("button",{className:"startNewGame",onClick:M,children:"Start New Game"})]})},j=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(l,{})})};var d=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j,{})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.4c3dc208.chunk.js.map