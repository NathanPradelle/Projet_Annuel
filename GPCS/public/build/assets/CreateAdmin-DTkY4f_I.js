import{r as m,j as e}from"./app-DJQMpina.js";import{A as c}from"./AuthenticatedLayout-DMEWsJZx.js";import{d as u}from"./index-DmeBXoVf.js";import"./favicon-DmRy3B8H.js";import"./transition-o8Q4oWHj.js";function g({auth:t,users:p}){const[a,n]=m.useState({name:"",email:"",password:"",password_confirmation:"",role:4}),s=o=>{const{name:r,value:i}=o.target;n(d=>({...d,[r]:i}))},l=o=>{o.preventDefault(),u.Inertia.post(route("admin.store"),a)};return e.jsx(c,{user:t.user,children:e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsx("div",{className:"max-w-md w-full",children:e.jsxs("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[e.jsx("h2",{className:"text-center text-2xl font-bold mb-4",children:"Create New Admin"}),e.jsxs("form",{onSubmit:l,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"name",className:"block text-gray-700 text-sm font-bold mb-2",children:"Name"}),e.jsx("input",{type:"text",name:"name",id:"name",onChange:s,value:a.name,autoComplete:"name",className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2",children:"Email address"}),e.jsx("input",{type:"email",name:"email",id:"email",onChange:s,value:a.email,autoComplete:"email",className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"password",className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),e.jsx("input",{type:"password",name:"password",id:"password",onChange:s,value:a.password,autoComplete:"new-password",className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"password_confirmation",className:"block text-gray-700 text-sm font-bold mb-2",children:"Confirm Password"}),e.jsx("input",{type:"password",name:"password_confirmation",id:"password_confirmation",onChange:s,value:a.password_confirmation,autoComplete:"new-password",className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"role",className:"block text-gray-700 text-sm font-bold mb-2",children:"Role"}),e.jsxs("select",{id:"role",name:"role",onChange:s,value:a.role,className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",children:[e.jsx("option",{value:"4",children:"Gestionnaire"}),e.jsx("option",{value:"5",children:"Administrateur"})]})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"submit",className:"bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Create"})})]})]})})})})}export{g as default};
