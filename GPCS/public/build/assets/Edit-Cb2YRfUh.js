import{j as s,a as m}from"./app-DJQMpina.js";import{A as l}from"./AuthenticatedLayout-DMEWsJZx.js";import a from"./DeleteUserForm-CwXpWOJO.js";import i from"./UpdatePasswordForm-B-qtQAR0.js";import t from"./UpdateProfileInformationForm-B5QXMDC-.js";import"./favicon-DmRy3B8H.js";import"./transition-o8Q4oWHj.js";import"./TextInput-BYfCQbJC.js";import"./InputLabel-CSjkWAYR.js";import"./PrimaryButton-BVvb1Qc2.js";function u({auth:e,mustVerifyEmail:r,status:o}){return console.log(e),s.jsxs(l,{user:e.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[s.jsx(m,{title:"Profile"}),s.jsx("div",{className:"py-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e.user.role!==4&&s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(t,{mustVerifyEmail:r,status:o,className:"max-w-xl"})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(i,{className:"max-w-xl"})}),(e.user.role==1||e.user.role==2||e.user.role==3)&&s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(a,{className:"max-w-xl"})})]})})]})}export{u as default};
