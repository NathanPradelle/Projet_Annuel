import{r as o,j as e,a as j}from"./app-DJQMpina.js";import{A as f}from"./AuthenticatedLayout-DMEWsJZx.js";import{d as m}from"./index-DmeBXoVf.js";import{I as N}from"./index-EYjPOB1N.js";import"./favicon-DmRy3B8H.js";import"./transition-o8Q4oWHj.js";function E({auth:p,users:a}){const[s,l]=o.useState(null),[d,x]=o.useState({}),h=t=>{l(t);const r=a.data.find(i=>i.id===t);x({...r})},n=t=>{const{name:r,value:i}=t.target;x(y=>({...y,[r]:i}))},g=()=>{const t=route("users.update",{user:s});m.Inertia.patch(t,d),l(null)},u=t=>{const r=route("users.destroy",{user:t});m.Inertia.delete(r,{onSuccess:()=>{console.log("User deleted successfully")},onError:i=>{console.error("Failed to delete user:",i)}})},c=t=>e.jsx("option",{value:t,children:t===4?"Gestionnaire":"Administrateur"},t);return e.jsxs(f,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Liste Admin"}),children:[e.jsx(j,{title:"AdminIndex"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900",children:[e.jsxs("div",{className:"flex justify-center mb-4",children:[" ",e.jsx(N,{href:route("admin.create"),className:"bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded",children:"Create Admin"})]}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"ID"}),e.jsx("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),e.jsx("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Role"}),e.jsx("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:a.data.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.id}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:s===t.id?e.jsx("input",{type:"text",name:"name",value:d.name,onChange:n,className:"border border-gray-300 rounded-md px-2 py-1"}):t.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:s===t.id?e.jsx("input",{type:"email",name:"email",value:d.email,onChange:n,className:"border border-gray-300 rounded-md px-2 py-1"}):t.email}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:s===t.id?e.jsxs("select",{name:"role",value:d.role,onChange:n,children:[c(4),c(5)]}):t.role===4?"Gestionnaire":"Administrateur"}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:s===t.id?e.jsx("button",{onClick:g,className:"text-indigo-600 hover:text-indigo-900",children:"Save"}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>h(t.id),className:"text-indigo-600 hover:text-indigo-900",children:"Edit"}),e.jsx("span",{className:"px-2",children:"|"}),e.jsx("button",{onClick:()=>u(t.id),className:"text-red-600 hover:text-red-900",children:"Delete"})]})})]},t.id))})]}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsx("div",{className:"w-0 flex-1 flex",children:a.prev_page_url&&e.jsx("a",{href:a.prev_page_url,className:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Previous"})}),e.jsx("div",{className:"w-0 flex-1 flex justify-end",children:a.next_page_url&&e.jsx("a",{href:a.next_page_url,className:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Next"})})]}),e.jsxs("div",{className:"mt-4 text-sm text-gray-500",children:["Page ",a.current_page," of ",a.last_page,", Total: ",a.total," users"]})]})})})})]})}export{E as default};
