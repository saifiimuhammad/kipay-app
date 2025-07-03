import{c as o,r as m,j as e,u as p,a as h,b as u,o as f,s as n}from"./index-BwXIF8Vq.js";/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],g=o("eye-off",y);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],j=o("eye",w);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],b=o("lock",v);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],k=o("mail",N),S=""+new URL("kipay-logo-DsTrtouE.png",import.meta.url).href;function x({type:l="text",placeholder:a="",registration:c,error:t,icon:r}){const[s,d]=m.useState(!1),i=l==="password";return e.jsxs("div",{className:"relative space-y-1 w-full",children:[e.jsxs("div",{className:"flex items-center bg-[#2b2b2b] rounded-full px-6 py-4 ",children:[r&&e.jsx("span",{className:"mr-3 text-[var(--accent)]",children:r}),e.jsx("input",{type:i&&!s?"password":"text",...c,placeholder:a,className:"outline-none text-(var(--text-2)) w-full placeholder:text-[var(--text-2)] "}),i&&e.jsx("span",{onClick:()=>d(!s),className:"absolute right-7 text-[var(--text-4)] hover:text-[var(--text)] cursor-pointer",children:s?e.jsx(g,{size:18}):e.jsx(j,{size:18})})]}),t&&e.jsx("p",{className:"text-(var(--error)) text-sm",children:t.message})]})}const _=f({email:n().email("Invalid email address"),password:n().min(6,"Password must be at least 6 characters")}),E=()=>{const l=p(),{register:a,handleSubmit:c,formState:{errors:t}}=h({resolver:u(_)}),r=s=>{console.log("Login data:",s),localStorage.setItem("user","true"),l("/")};return e.jsxs("div",{className:"w-full h-screen bg-[var(--bg)] flex items-center justify-between flex-col",children:[e.jsxs("div",{className:"top w-full flex items-center justify-center flex-col gap-y-4",children:[e.jsx("img",{src:S,alt:"kipay_logo",className:"logo h-auto w-[250px]"}),e.jsxs("div",{className:"login-content w-full flex items-center justify-center flex-col gap-y-2",children:[e.jsx("h1",{className:"login-title text-4xl text-[var(--text)] font-bold",children:"Welcome back"}),e.jsx("h3",{className:"login-subtitle text-xl",children:"Enter your details below"})]}),e.jsxs("form",{onSubmit:c(r),className:"space-y-6 max-w-sm w-full px-4",children:[e.jsx(x,{type:"email",placeholder:"Email Address",registration:a("email"),error:t.email,icon:e.jsx(k,{size:20})}),e.jsx(x,{type:"password",placeholder:"Password",registration:a("password"),error:t.password,icon:e.jsx(b,{size:20})}),e.jsx("button",{type:"submit",className:"bg-[var(--accent)] text-[var(--text)] text-lg font-semibold w-full py-4 rounded-full cursor-pointer",children:"Sign in"})]})]}),e.jsx("div",{className:"bottom w-full flex items-center justify-center flex-col gap-y-2 pb-8",children:e.jsxs("h3",{className:"login-subtitle text-lg text-[var(--text-3)]",children:["Don't have an account?"," ",e.jsx("a",{href:"/register",className:"text-[var(--text)] font-semibold cursor-pointer",children:"Sign in"})]})})]})};export{E as default};
