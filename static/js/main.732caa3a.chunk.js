(this.webpackJsonpwatchlist=this.webpackJsonpwatchlist||[]).push([[0],{13:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(18),l=c.n(n),r=c(6),i=c(7),o=c(3),d=c(9),m=c(8),j=(c(12),c(13),c(0)),h=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).handleReset=function(){document.querySelectorAll("input"),s.setState({itemvalues:[{}]})},s.newListSubmit=s.newListSubmit.bind(Object(o.a)(s)),s.handleReset=s.handleReset.bind(Object(o.a)(s)),s.noSpaces=s.noSpaces.bind(Object(o.a)(s)),s}return Object(i.a)(c,[{key:"newListSubmit",value:function(e){var t=this;e.preventDefault();var c=document.querySelector("[name=listname]").value,s=document.querySelector("[name=stk1]").value,a=document.querySelector("[name=stk2]").value,n=document.querySelector("[name=stk3]").value,l=document.querySelector("[name=stk4]").value,r=document.querySelector("[name=stk5]").value;fetch("https://yxn8t.sse.codesandbox.io/watchlists/new",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({listname:c,stk1:s,stk2:a,stk3:n,stk4:l,stk5:r})}).then((function(e){return e.json()})).then((function(e){document.querySelector("[name=listname]").value="",document.querySelector("[name=stk1]").value="",document.querySelector("[name=stk2]").value="",document.querySelector("[name=stk3]").value="",document.querySelector("[name=stk4]").value="",document.querySelector("[name=stk5]").value="",t.setState()}))}},{key:"noSpaces",value:function(e){var t=document.querySelector("[name=listname]").value.replace(/[\s]/gi,"1");document.querySelector("[name=listname]").value=t}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"row justify-content-center py-4",children:"New WatchList Creation Form"}),Object(j.jsx)("div",{className:"border border-light my-4 py-2 customBorder",children:Object(j.jsx)("div",{className:"my-4 px-4 pb-2",children:Object(j.jsxs)("form",{onSubmit:this.newListSubmit,children:[Object(j.jsx)("label",{className:"form-label py-2",children:"Stock Watch List Name (12 characters max length )"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"listname",placeholder:"listname",maxLength:"12",onChange:this.noSpaces}),Object(j.jsx)("label",{className:"form-label py-2",children:"Enter Your 1st Stock Ticker Symbol"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"stk1",placeholder:"stock ticker 1",maxLength:"5"}),Object(j.jsx)("label",{className:"form-label py-2",children:"Enter Your 2nd Stock Ticker Symbol"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"stk2",placeholder:"stock ticker 2",maxLength:"5"}),Object(j.jsx)("label",{className:"form-label py-2",children:"Enter Your 3rd Stock Ticker Symbol"}),Object(j.jsx)("input",{className:"form-control ",type:"text",name:"stk3",placeholder:"stock ticker 3",maxLength:"5"}),Object(j.jsx)("label",{className:"form-label py-2",children:"Enter Your 4th Stock Ticker Symbol"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"stk4",placeholder:"stock ticker 4",maxLength:"5"}),Object(j.jsx)("label",{className:"form-label py-2",children:"Enter Your 5th Stock Ticker Symbol"}),Object(j.jsx)("input",{className:"form-control",type:"text",name:"stk5",placeholder:"stock ticker 5",maxLength:"5"}),Object(j.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto pt-4",children:Object(j.jsx)("button",{className:"btn btn-secondary my-2 mycustombtn",type:"submit",minLength:"1",children:"Submit"})})]})})})]})}}]),c}(s.Component),b=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={stocks:{},wlists:{}},s.handleChange=s.handleChange.bind(Object(o.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(o.a)(s)),s.launchServer=s.launchServer.bind(Object(o.a)(s)),s}return Object(i.a)(c,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var c=this.state.value;"undefined"===typeof c&&(c="1");fetch("".concat("https://yxn8t.sse.codesandbox.io/stocks","/").concat(c)).then((function(e){return e.json()})).then((function(e){t.setState({stocks:e})}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://yxn8t.sse.codesandbox.io/watchlists").then((function(e){return e.json()})).then((function(t){e.setState({wlists:t})}))}},{key:"launchServer",value:function(){window.open("https://codesandbox.io/s/em3613-web-server-forked-yxn8t?file=/src/index.js")}},{key:"renderStockPrices",value:function(){return Object.entries(this.state.stocks).map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:e[0]}),Object(j.jsx)("td",{children:e[1].c}),Object(j.jsx)("td",{children:e[1].o}),Object(j.jsxs)("td",{children:[e[1].pc," "]}),Object(j.jsx)("td",{children:e[1].d}),Object(j.jsxs)("td",{children:[e[1].h," "]}),Object(j.jsx)("td",{children:e[1].l})]},JSON.stringify(e))}))}},{key:"renderOptions",value:function(){return Array.isArray(this.state.wlists)?this.state.wlists.map((function(e){var t=e.id,c=e.listname;return Object(j.jsx)("option",{value:t,children:c},t)})):[]}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row justify-content-center my-4 ",children:Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("h1",{children:"Stock WatchList"})})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsx)("form",{className:"col-auto",onSubmit:this.launchServer,children:Object(j.jsx)("button",{className:"btn btn-secondary",children:"Launch Server"})}),Object(j.jsx)("div",{className:"row justify-content-center my-2 mx-2",children:Object(j.jsx)("div",{className:"row justify-content-center mt-4",children:"The Launch Server Button is a temporary solution until the server side code is deployed somewhere other than CodeSandbox"})})]})}),Object(j.jsx)("div",{className:"row justify-content-center border border-light my-4 mx-2 customBorder",children:Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("div",{className:"form-text",children:"Select the Watch List You Would Like to View"}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsxs)("div",{className:"col-auto",children:[Object(j.jsx)("select",{className:"form-select-sm my-2 mx-2",name:"wlists",onChange:this.handleChange,children:this.renderOptions()}),Object(j.jsx)("input",{className:"mycustombtn",type:"submit",value:"Load"})]})})]})})}),Object(j.jsx)("div",{className:"row justify-content-center border border-light my-2 mx-2 customBorder",children:Object(j.jsxs)("div",{className:"stock-info",children:[Object(j.jsx)("div",{className:"col-md-auto",children:Object(j.jsx)("h2",{className:"row justify-content-center",children:"Stock Information"})}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"tableHead",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Stock Ticker "}),Object(j.jsx)("th",{scope:"col",children:"Current Price "}),Object(j.jsx)("th",{scope:"col",children:"Open "}),Object(j.jsx)("th",{scope:"col",children:"Prev. Close "}),Object(j.jsx)("th",{scope:"col",children:"Change "}),Object(j.jsx)("th",{scope:"col",children:"High "}),Object(j.jsx)("th",{scope:"col",children:"Low "})]})}),Object(j.jsx)("tbody",{children:this.renderStockPrices()})]})]})})]})}}]),c}(a.a.Component),u=function(e){Object(d.a)(c,e);var t=Object(m.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={wListData:{},wlists:{}},s.handleChange=s.handleChange.bind(Object(o.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(o.a)(s)),s.updateListSubmit=s.updateListSubmit.bind(Object(o.a)(s)),s.watchlistDeletebyId=s.watchlistDeletebyId.bind(Object(o.a)(s)),s.noSpaces=s.noSpaces.bind(Object(o.a)(s)),s}return Object(i.a)(c,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var c=this.state.value;"undefined"===typeof c&&(c="1");fetch("".concat("https://yxn8t.sse.codesandbox.io/watchlists-id","/").concat(c)).then((function(e){return e.json()})).then((function(e){t.setState({wListData:e})}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://yxn8t.sse.codesandbox.io/watchlists").then((function(e){return e.json()})).then((function(t){e.setState({wlists:t})}))}},{key:"updateListSubmit",value:function(e){var t=this;e.preventDefault();var c=document.querySelector("[name=id]").value,s=document.querySelector("[name=id]").value,a=document.querySelector("[name=nlistname]").value,n=document.querySelector("[name=nstk1]").value,l=document.querySelector("[name=nstk2]").value,r=document.querySelector("[name=nstk3]").value,i=document.querySelector("[name=nstk4]").value,o=document.querySelector("[name=nstk5]").value;fetch("".concat("https://yxn8t.sse.codesandbox.io/watchlists-update-list","/").concat(c),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:s,listname:a,stk1:n,stk2:l,stk3:r,stk4:i,stk5:o})}).then((function(e){return e.json()})).then((function(e){document.querySelector("[name=id]").value="",document.querySelector("[name=id]").value="",document.querySelector("[name=nlistname]").value="",document.querySelector("[name=nstk1]").value="",document.querySelector("[name=nstk2]").value="",document.querySelector("[name=nstk3]").value="",document.querySelector("[name=nstk4]").value="",document.querySelector("[name=nstk5]").value="",t.setState()}))}},{key:"watchlistDeletebyId",value:function(e){var t=this;if(e.preventDefault(),window.confirm("Press Ok to Confirm and Delete")){console.log("Ok to Delete");var c=document.querySelector("[name=id-del]").value,s=document.querySelector("[name=id-del]").value;fetch("".concat("https://yxn8t.sse.codesandbox.io/watchlists-delete-list","/").concat(c),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:s})}).then((function(e){return e.json()})).then((function(e){document.querySelector("[name=id-del]").value="",t.setState(),window.location.reload(!1)}))}else console.log("Delete Canceled"),document.querySelector("[name=id-del]").value=""}},{key:"renderwatchListData",value:function(){return Object.entries(this.state.wListData).map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e[1].id}),Object(j.jsx)("td",{children:e[1].listname}),Object(j.jsx)("td",{children:e[1].stk1}),Object(j.jsx)("td",{children:e[1].stk2}),Object(j.jsx)("td",{children:e[1].stk3}),Object(j.jsx)("td",{children:e[1].stk4}),Object(j.jsx)("td",{children:e[1].stk5})]},JSON.stringify(e))}))}},{key:"noSpaces",value:function(e){var t=document.querySelector("[name=nlistname]").value.replace(/[\s]/gi,"1");document.querySelector("[name=nlistname]").value=t}},{key:"renderOptions",value:function(){return Array.isArray(this.state.wlists)?this.state.wlists.map((function(e){var t=e.id,c=e.listname;return Object(j.jsx)("option",{value:t,children:c},t)})):[]}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"row justify-content-center py-4",children:"WatchList Manager"}),Object(j.jsxs)("div",{className:"border border-light my-2 py-4 px-2 customBorder",children:[Object(j.jsx)("h3",{className:"row justify-content-center",children:"Display WatchList Information"}),Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsxs)("div",{className:"row g-3 justify-content-center mt-2 py-2",children:[Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("label",{className:"form-label pt-2",children:"WatchList Name"})}),Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("select",{className:"form-select",name:"wlists",onChange:this.handleChange,children:this.renderOptions()})}),Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("button",{className:"btn btn-secondary",type:"submit",children:"Submit"})})]})}),Object(j.jsx)("table",{className:"table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"tableHead",scope:"col",children:"ID"}),Object(j.jsx)("th",{className:"tableHead",scope:"col",children:"WatchList Name"}),Object(j.jsx)("th",{className:"tableHead",scope:"col",children:"Stock Ticker1"}),Object(j.jsx)("th",{className:"tableHead",scope:"col",children:"Stock Ticker2"}),Object(j.jsx)("th",{className:"tableHead",scope:"col",children:"Stock Ticker3"}),Object(j.jsx)("th",{className:"tableHead",scope:"col",children:"Stock Ticker4"}),Object(j.jsx)("th",{className:"tableHead",scope:"col",children:"Stock Ticker5"})]}),this.renderwatchListData()]})})]}),Object(j.jsx)("div",{className:"border border-light my-2 py-4 px-4 customBorder",children:Object(j.jsxs)("form",{onSubmit:this.updateListSubmit,children:[Object(j.jsx)("h3",{className:"row justify-content-center",children:"Update Watchlist Information"}),Object(j.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(j.jsx)("div",{className:"col-3 customLabel",children:Object(j.jsx)("label",{className:"form-label .manageLabel",children:"ID"})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("input",{className:"form-control",type:"text",name:"id",placeholder:"id",required:!0})}),Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("div",{className:"form-text",children:"Enter the Id of the WatchList you would like to update"})})]}),Object(j.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(j.jsx)("div",{className:"col-3 customLabel",children:Object(j.jsx)("label",{className:"form-label",children:"WatchList Name"})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("input",{className:"form-control",type:"text",name:"nlistname",placeholder:"new watchlist name",required:!0,maxLength:"12",onChange:this.noSpaces})}),Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("div",{className:"form-text",children:"12 Character Max"})})]}),Object(j.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(j.jsx)("div",{className:"col-3 customLabel",children:Object(j.jsx)("label",{className:"form-label py-2",children:"Stock Ticker 1"})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("input",{className:"form-control",type:"text",name:"nstk1",placeholder:"new stock ticker 1",required:!0,maxLength:"5"})})]}),Object(j.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(j.jsx)("div",{className:"col-3 customLabel",children:Object(j.jsx)("label",{className:"form-label py-2",children:"Stock Ticker 2"})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("input",{className:"form-control",type:"text",name:"nstk2",placeholder:"new stock ticker 2",required:!0,maxLength:"5"})})]}),Object(j.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(j.jsx)("div",{className:"col-3 customLabel",children:Object(j.jsx)("label",{className:"form-label py-2",children:"Stock Ticker 3"})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("input",{className:"form-control",type:"text",name:"nstk3",placeholder:"new stock ticker 3",required:!0,maxLength:"5"})})]}),Object(j.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(j.jsx)("div",{className:"col-3 customLabel",children:Object(j.jsx)("label",{className:"form-label py-2",children:"Stock Ticker 4"})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("input",{className:"form-control",type:"text",name:"nstk4",placeholder:"new stock ticker 4",required:!0,maxLength:"5"})})]}),Object(j.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(j.jsx)("div",{className:"col-3 customLabel",children:Object(j.jsx)("label",{className:"form-label py-2",children:"Stock Ticker 5"})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("input",{className:"form-control",type:"text",name:"nstk5",placeholder:"new stock ticker 5",required:!0,maxLength:"5"})})]}),Object(j.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(j.jsx)("button",{className:"btn btn-secondar my-2 mycustombtn",type:"submit",children:"Submit"})})]})}),Object(j.jsxs)("div",{className:"border border-light my-2 py-4 px-4 customBorder",children:[Object(j.jsx)("h3",{className:"row justify-content-center ",children:"Delete Watchlist by ID"}),Object(j.jsx)("form",{onSubmit:this.watchlistDeletebyId,children:Object(j.jsxs)("div",{className:"row justify-content-center ",children:[Object(j.jsx)("div",{className:"col-auto py-1",children:Object(j.jsx)("label",{className:"form-label",children:"Enter Id"})}),Object(j.jsx)("div",{className:"col-auto py-1",children:Object(j.jsx)("input",{type:"text",name:"id-del",placeholder:"id",required:!0})}),Object(j.jsx)("div",{className:"col-auto",children:Object(j.jsx)("button",{className:"btn btn-danger",type:"submit",children:"Delete"})})]})})]})]})}}]),c}(a.a.Component),x=c(11),O=c(2),v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(x.a,{children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark customNavBar",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",exact:!0,to:"/",activeClassName:"active-link",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",exact:!0,to:"/CreateWlist",activeClassName:"active",children:"Create New Watch List"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",exact:!0,to:"/ManageWatchLists",activeClassName:"active",children:"Manage Watch Lists"})})]})})]})}),Object(j.jsx)(O.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(O.a,{path:"/CreateWList",component:h}),Object(j.jsx)(O.a,{path:"/ManageWatchLists",component:u})]}),Object(j.jsx)("footer",{className:"row justify-content-center py-4",children:"Copyright Eric Miner 2021"})]})};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.732caa3a.chunk.js.map