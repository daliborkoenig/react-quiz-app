(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{40:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(31),s=c.n(n),a=c(2),o=(c(40),c(22)),i=c.n(o),l=c(32),j=c(11),u=c.p+"static/media/icon.cd3a4963.svg",b=c.p+"static/media/logo-solo.872b95bc.svg",d=c(18),O=c.n(d),h=c(68),g=c(69),m=c(1);var p=function(e){var t=Object(r.useState)([]),c=Object(j.a)(t,2),n=(c[0],c[1]);return Object(r.useEffect)((function(){var t=e.trivia_categories;t.forEach((function(e){return e.name.includes("Entertainment: ")?e.name=e.name.replace("Entertainment: ",""):e.name.includes("Science: ")&&(e.name=e.name.replace("Science: ","")),e})),n(t)}),[e]),Object(m.jsx)("div",{className:"categories",children:Object(m.jsxs)(h.a,{className:"form",onSubmit:function(t){t.preventDefault();var c=new FormData(t.target),r=Object.fromEntries(c.entries());e.chooseCat(r.category,r.level),t.target.reset()},children:[Object(m.jsx)(h.a.Group,{children:Object(m.jsxs)(h.a.Select,{required:!0,"aria-label":"categories",name:"category",children:[Object(m.jsx)("option",{value:"",children:"Choose a category"}),e.trivia_categories.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},Math.random())}))]})}),Object(m.jsx)(h.a.Group,{children:Object(m.jsxs)(h.a.Select,{required:!0,"aria-label":"categories",name:"level",children:[Object(m.jsx)("option",{value:"",children:"Choose difficulty"}),Object(m.jsx)("option",{value:"easy",children:"Easy"}),Object(m.jsx)("option",{value:"medium",children:"Medium"}),Object(m.jsx)("option",{value:"hard",children:"Hard"})]})}),Object(m.jsx)(g.a,{type:"submit",children:"Let's go!"})]})})},v=c(26),x=c(33),f=c(23),q=c(6);var w=function(e){var t=Object(q.g)();return console.log(e),Object(m.jsx)("div",{className:"Result",children:function(){var c=(100*e.score/12).toFixed(2);return Object(m.jsxs)("div",{className:"result",children:[Object(m.jsxs)("h1",{children:["You answered ",e.score," ",1===e.score?"question":"questions"," correctly!"]}),Object(m.jsxs)("h1",{children:["That is ",c,"%"]}),Object(m.jsx)(g.a,{onClick:function(){return t.push("/")},children:"Go Again"})]})}()})},N=function(e){for(var t=e.length;t>0;){var c=Math.floor(Math.random()*t),r=e[--t];e[t]=e[c],e[c]=r}return e};var y=function(e){var t=Object(r.useState)(0),c=Object(j.a)(t,2),n=c[0],s=c[1],a=Object(r.useState)(!1),o=Object(j.a)(a,2),i=o[0],l=o[1],u=Object(r.useState)(["#D9F5D2","#D2EAF5","#EFD2F5","#E07A7A"]),b=Object(j.a)(u,1)[0],d=Object(r.useState)({question:e.questions[n].question,correctAnswer:e.questions[n].correct_answer,incorrectAnswers:e.questions[n].incorrect_answers}),O=Object(j.a)(d,2),h=O[0],g=O[1],p=Object(r.useState)(N([{answer:h.correctAnswer,correct:!0}].concat(Object(v.a)(h.incorrectAnswers.map((function(e){return{answer:e,correct:!1}})))))),q=Object(j.a)(p,2),y=q[0],S=q[1];return Object(r.useEffect)((function(){console.log("WTF")}),[e]),Object(r.useEffect)((function(){g({question:e.questions[n].question,correctAnswer:e.questions[n].correct_answer,incorrectAnswers:e.questions[n].incorrect_answers})}),[n]),Object(r.useEffect)((function(){S(N([{answer:h.correctAnswer,correct:!0}].concat(Object(v.a)(h.incorrectAnswers.map((function(e){return{answer:e,correct:!1}}))))))}),[h]),console.log("rendering questions"),console.log(e),Object(m.jsx)("div",{className:"quiz",children:i?Object(m.jsx)(w,{score:e.score}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{className:"qNum",children:[n+1,"/",e.questions.length]}),Object(m.jsxs)("div",{className:"quiz-qa",children:[Object(m.jsx)("p",{className:"question",children:Object(f.a)(e.questions[n].question)}),Object(m.jsx)("div",{className:"answers",children:y.map((function(t,c){return Object(m.jsx)("div",{className:"answer",style:{backgroundColor:b[c]},children:Object(m.jsx)("p",{className:"answer",id:"".concat(t.correct),onClick:function(c){var r,a;r=t.correct,a=c.target,11!==n?(s(n+1),Object(x.a)({targets:a.parentElement,translateX:[-5,5,0],duration:100}),r&&(console.log("correct"),e.changeScore())):(r&&(console.log("correct"),e.changeScore()),l(!0))},children:Object(f.a)(t.answer)},Math.random())})}))})]})]})})};var S=function(e){var t=Object(r.useState)(!1),c=Object(j.a)(t,2),n=(c[0],c[1],Object(r.useState)({category:null,level:null})),s=Object(j.a)(n,2),o=s[0],d=s[1],h=Object(r.useState)(0),g=Object(j.a)(h,2),v=g[0],x=g[1];console.log("rendering home");var f=O()("https://opentdb.com/api.php?amount=12&category=".concat(o.category,"&difficulty=").concat(o.level)),q=f.isLoading,w=f.error,N=f.data;if(q)return Object(m.jsx)("div",{className:"loading",children:Object(m.jsx)("p",{children:"...loading"})});if(w)return"Error: "+w;var S=function(){var e=Object(l.a)(i.a.mark((function e(t,c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d({category:t,level:c});case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return console.log(v),Object(m.jsxs)("div",{className:"quiz-container",children:[Object(m.jsxs)("div",{className:"logotrip",children:[Object(m.jsx)("img",{src:b,alt:"logo",className:"logo"}),0===N.results.length&&Object(m.jsx)("img",{src:u,alt:"logo-icon",className:"icon"}),Object(m.jsx)("p",{children:"Test your knowledge!"})]}),0===N.results.length&&Object(m.jsx)(p,Object(a.a)(Object(a.a)({},e),{},{chooseCat:S})),N.results.length>0&&Object(m.jsx)(y,{score:v,changeScore:function(){console.log("changing score"),x(v+1)},questions:N.results})]})},E=c(21);var A=function(){var e=O()("https://opentdb.com/api_category.php"),t=e.isLoading,c=e.error,r=e.data;return t?Object(m.jsx)("div",{className:"loading",children:Object(m.jsx)("p",{children:"...loading"})}):c?"Error: "+c:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(E.a,{children:Object(m.jsxs)(q.d,{children:[Object(m.jsx)(q.b,{exact:!0,path:"/quizalicious",children:Object(m.jsx)(S,Object(a.a)({},r))}),Object(m.jsx)(q.b,{render:function(){return Object(m.jsx)(q.a,{to:{pathname:"/quizalicious"}})}})]})})})};s.a.render(Object(m.jsx)(A,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.8c27f3c0.chunk.js.map