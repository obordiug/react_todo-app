(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var o=c(8),n=c.n(o),s=(c(14),c(15),c(16),c(1)),l=c.n(s),i=c(2),a=c(0),r=l.a.createContext({todos:[],setTodos:function(){},activeTodos:[],setActiveTodos:function(){},completedTodos:[],setCompletedTodos:function(){},visibleTodos:[],setVisibleTodos:function(){return[]}}),d=function(e){var t=e.children,c=Object(s.useState)(JSON.parse(localStorage.getItem("todos")||"[]")),o=Object(i.a)(c,2),n=o[0],l=o[1],d=Object(s.useState)([]),u=Object(i.a)(d,2),j=u[0],b=u[1],O=Object(s.useState)([]),f=Object(i.a)(O,2),m=f[0],p=f[1],h=Object(s.useState)([]),x=Object(i.a)(h,2),v=x[0],g=x[1];Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n)),b(n.filter((function(e){return!e.completed}))),p(n.filter((function(e){return e.completed})))}),[n]);var T={todos:n,setTodos:l,activeTodos:j,setActiveTodos:b,completedTodos:m,setCompletedTodos:p,visibleTodos:v,setVisibleTodos:g};return Object(a.jsx)(r.Provider,{value:T,children:t})},u=c(9),j=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],o=t[1],n=Object(s.useContext)(r),l=n.todos,d=n.setTodos;return Object(a.jsx)("form",{onSubmit:function(e){var t;e.preventDefault(),c&&(d([].concat(Object(u.a)(l),[(t=c,{id:+new Date,title:t,completed:!1})])),o(""))},children:Object(a.jsx)("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:c,onChange:function(e){o(e.target.value)}})})},b=function(){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"todos"}),Object(a.jsx)(j,{})]})},O=c(3),f=function(){var e=Object(s.useContext)(r),t=e.todos,c=e.setTodos,o=e.activeTodos;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:0===o.length,onChange:function(e){c(t.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{completed:e.target.checked})})))}}),Object(a.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"})]})},m=c(4),p=c.n(m),h=function(e){var t=e.todo,c=Object(s.useContext)(r),o=c.todos,n=c.setTodos,l=Object(s.useState)(!1),d=Object(i.a)(l,2),u=d[0],j=d[1],b=Object(s.useState)(t.title),f=Object(i.a)(b,2),m=f[0],h=f[1],x=Object(s.useRef)(null),v=function(e,c){e.length?n(o.map((function(t){return t.id===c?Object(O.a)(Object(O.a)({},t),{},{title:e}):t}))):(n(o),h(t.title))};return Object(a.jsxs)("li",{className:p()({completed:t.completed,editing:u}),children:[Object(a.jsxs)("div",{className:"view",children:[Object(a.jsx)("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){return e=t.id,void n(o.map((function(t){return t.id===e?Object(O.a)(Object(O.a)({},t),{},{completed:!t.completed}):t})));var e}}),Object(a.jsx)("label",{onDoubleClick:function(){j(!0),x.current&&x.current.focus()},children:t.title}),Object(a.jsx)("button",{type:"button",className:"destroy",onClick:function(){return e=t.id,void n(o.filter((function(t){return t.id!==e})));var e}})]}),Object(a.jsx)("input",{type:"text",className:"edit",ref:x,value:m,onChange:function(e){h(e.target.value)},onKeyDown:function(e){"Enter"===e.code&&(v(m,t.id),j(!1)),"Escape"===e.code&&(h(t.title),j(!1))},onBlur:function(){v(m,t.id),j(!1)}})]},t.id)},x=function(){var e=Object(s.useContext)(r).visibleTodos;return Object(a.jsx)("ul",{className:"todo-list",children:e.map((function(e){return Object(a.jsx)(h,{todo:e})}))})},v=function(){return Object(s.useContext)(r).todos.length?Object(a.jsxs)("section",{className:"main",children:[Object(a.jsx)(f,{}),Object(a.jsx)(x,{})]}):null},g=function(){var e=Object(s.useState)("all"),t=Object(i.a)(e,2),c=t[0],o=t[1],n=Object(s.useContext)(r),l=n.todos,d=n.setVisibleTodos,u=function(e){o(e)};return Object(s.useEffect)((function(){switch(c){case"active":d(l.filter((function(e){return!e.completed})));break;case"completed":d(l.filter((function(e){return e.completed})));break;default:d(l)}}),[c,l]),Object(a.jsxs)("ul",{className:"filters",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#/",className:p()({selected:"all"===c}),onClick:function(){return u("all")},children:"All"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#/active",className:p()({selected:"active"===c}),onClick:function(){return u("active")},children:"Active"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#/completed",className:p()({selected:"completed"===c}),onClick:function(){return u("completed")},children:"Completed"})})]})},T=function(){var e=Object(s.useContext)(r),t=e.todos,c=e.setTodos,o=e.activeTodos,n=e.completedTodos;return t.length?Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsxs)("span",{className:"todo-count",children:[o.length," ","items left"]}),Object(a.jsx)(g,{}),n.length>0&&Object(a.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){c(t.filter((function(e){return!e.completed})))},children:"Clear completed"})]}):null},C=function(){return Object(a.jsx)(d,{children:Object(a.jsxs)("section",{className:"todoapp",children:[Object(a.jsx)(b,{}),Object(a.jsx)(v,{}),Object(a.jsx)(T,{})]})})};n.a.render(Object(a.jsx)(C,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4bf1b634.chunk.js.map