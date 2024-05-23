import{j as e,d as c,t as u,W as h,r as v,a as b}from"./app-DJQMpina.js";import{G as y}from"./GuestLayout-DTplgDs8.js";import{l as N}from"./favicon-DmRy3B8H.js";import{T as w,I as k}from"./TextInput-BYfCQbJC.js";import{I as L}from"./InputLabel-CSjkWAYR.js";function I({className:s="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+s})}function j(s){var a,t,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var n=s.length;for(a=0;a<n;a++)s[a]&&(t=j(s[a]))&&(r&&(r+=" "),r+=t)}else for(t in s)s[t]&&(r&&(r+=" "),r+=t);return r}function C(){for(var s,a,t=0,r="",n=arguments.length;t<n;t++)(s=arguments[t])&&(a=j(s))&&(r&&(r+=" "),r+=a);return r}const E=({color:s="beige",className:a,children:t,disabled:r,loading:n,to:i,target:m,tag:l,...o})=>{const f=Array.isArray(t)?t.map(d=>typeof d=="string"?e.jsx("span",{children:d},d):d):typeof t=="string"?e.jsx("span",{children:t}):t,g=l||"button",x=e.jsxs(g,{className:C("gpcs-button",a,{disabled:r||n,[s]:s,loading:n}),...o,type:o.type||"button",disabled:r||n,children:[n&&e.jsx(CircularProgress,{size:20,className:"absolute"}),f]});return i?e.jsx(c,{to:i,target:m,className:"redirection-button-link",...o,children:x}):x},q=()=>e.jsxs("div",{className:"navBars",children:[e.jsx("div",{className:"flex",children:e.jsxs(c,{href:route("password.request"),className:"navLink",children:[e.jsx("img",{src:N,alt:"Logo"}),u("menu.home")]})}),e.jsxs("div",{className:"flex",children:[e.jsx(c,{href:route("password.request"),className:"navLink",children:u("menu.unauthenticated.login")}),e.jsx("div",{})," ",e.jsx(c,{href:route("password.request"),className:"navLink",children:u("menu.unauthenticated.signIn")})]})]}),p=({id:s,className:a,type:t,value:r,name:n,onChange:i,errorMessage:m,placeholder:l})=>e.jsxs("div",{className:a,children:[e.jsx(L,{htmlFor:s,value:n}),e.jsx(w,{id:s,type:t,name:s,value:r,onChange:i,placeholder:l}),e.jsx(k,{message:m})]}),T=({status:s,canResetPassword:a})=>{const{data:t,setData:r,post:n,errors:i,reset:m}=h({email:"",password:""});v.useEffect(()=>()=>{m("password")},[]);const l=o=>{o.preventDefault(),n(route("login"))};return e.jsxs("div",{children:[e.jsx(b,{title:"Log in"}),e.jsx(q,{}),s&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),e.jsxs(y,{children:[e.jsx(p,{id:"email",type:"email",value:t.email,name:"Email",onChange:o=>r("email",o.target.value),errorMessage:i.email}),e.jsx(p,{id:"password",type:"password",value:t.password,name:"Mot de passe",onChange:o=>r("password",o.target.value),errorMessage:i.password}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(I,{name:"remember",checked:t.remember,onChange:o=>r("remember",o.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[a&&e.jsx(c,{href:route("password.request"),children:u("login.forgottenPassword")}),e.jsx(E,{className:"ms-4",onClick:l,children:u("common.connection")})]})]})]})};export{T as default};
