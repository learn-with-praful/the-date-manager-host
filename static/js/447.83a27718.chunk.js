"use strict";(self.webpackChunkthe_date_manager=self.webpackChunkthe_date_manager||[]).push([[447],{1994:(e,a,n)=>{n.d(a,{r:()=>c});var t,r,i,l,o=n(2791);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}function d(e,a){let{title:n,titleId:d,...c}=e;return o.createElement("svg",s({width:2443,height:2500,viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",ref:a,"aria-labelledby":d},c),n?o.createElement("title",{id:d},n):null,t||(t=o.createElement("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"})),r||(r=o.createElement("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"})),i||(i=o.createElement("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"})),l||(l=o.createElement("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})))}const c=o.forwardRef(d);n.p},8447:(e,a,n)=>{n.r(a),n.d(a,{default:()=>k});var t=n(7715),r=n(1889),i=n(890),l=n(8550),o=n(5523),s=n(4454),d=n(6151),c=n(533),m=n(1724),h=n(1098),u=n(6454),p=n(2506),g=n(1994),f=n(7689),x=n(8182),b=n(6914),w=n(7454),j=n(4457),Z=n(1915),v=n(1652),y=n(4353),C=n(2791),P=n(184);const T=(0,h.Z)((e=>({dmSignupRoot:{padding:15,marginTop:60,display:"flex",justifyContent:"center",alignItems:"center"},dmSignupContentContainer:{width:"100%","&>h4":{fontWeight:600},"&>p":{color:e.palette.grey[500],marginTop:5}},dmLoginForm:{marginTop:10,"&>div":{marginTop:10},"&>button":{marginTop:10,justifyContent:"space-between"}},dmOrPartition:{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px 0px","&:before, &:after":{content:'""',display:"block",width:"100%",height:1,backgroundColor:e.palette.grey[300],margin:"0px 3px"}},dmSignUpWithGoogleButton:{justifyContent:"flex-start !important",background:`${e.palette.grey[100]} !important`,"&>svg":{marginRight:15}},dmLoginAgain:{marginTop:"3px !important",textAlign:"right"},dmDateInputContainer:{"&>div":{width:"100%"}}}))),S=m.Ry().shape({name:m.Z_().required("Required"),email:m.Z_().email("Invalid email").required("Required"),password:m.Z_("Required").label("Password").min(8).required("Password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,{message:"Please create a stronger password"}),birthdate:m.hT(),containYear:m.O7(),containTime:m.O7(),confirmPassword:m.Z_().label("Confirm Password").min(8).oneOf([m.iH("password"),null],"Passwords must match").required("Password is required")});const k=function(){const e=T(),a=(0,f.s0)(),n=(0,w.fz)(b.NB);(0,w.UX)(b.NB,{onSuccess:e=>{var n;(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.token)&&((0,j.Ex)(e.data.token),b.fk.call(),a("/home"))},onError:e=>{N({password:e.error.error})}});const m=(0,p.TA)({initialValues:{name:"",email:"",password:"",birthdate:new Date,containYear:!0,containTime:!0,confirmPassword:""},validationSchema:S,onSubmit:(e,a)=>{b.NB.call({params:e})}}),{values:h,handleChange:k,handleBlur:B,errors:E,touched:M,setErrors:N,handleSubmit:I,setFieldValue:O}=m,R=e=>({fullWidth:!0,name:e,value:h[e],onChange:k,onBlur:B,helperText:M[e]&&E[e],error:M[e]&&E[e]}),q=(0,C.useMemo)((()=>{let e="dd/MM";return h.containYear&&(e+="/yyyy"),h.containTime&&(e+=" hh:mm a"),e}),[h.containYear,h.containTime]);return(0,P.jsx)(t.Z,{children:(0,P.jsx)(r.ZP,{className:e.dmSignupRoot,children:(0,P.jsxs)(r.ZP,{className:e.dmSignupContentContainer,children:[(0,P.jsx)(i.Z,{variant:"h4",children:" Signup "}),(0,P.jsx)(i.Z,{variant:"body2",children:" Please Sign up to continue "}),(0,P.jsxs)("form",{className:e.dmLoginForm,onSubmit:I,children:[(0,P.jsx)(l.Z,{...R("name"),placeholder:"Name",label:"Name"}),(0,P.jsx)(l.Z,{...R("email"),placeholder:"Email",label:"Email"}),(0,P.jsxs)(r.ZP,{className:e.dmDateInputContainer,children:[(0,P.jsx)(v._,{dateAdapter:Z.H,children:(0,P.jsx)(y.x,{label:"Birth date",format:q,inputFormat:"dd/MM/yyyy",renderInput:e=>(0,P.jsx)(l.Z,{...e}),...(0,j.MT)(m,"birthdate"),onChange:e=>{O("birthdate",e)}})}),(0,P.jsx)(o.Z,{label:"Include year",control:(0,P.jsx)(s.Z,{checked:h.containYear,onChange:()=>O("containYear",!h.containYear)})}),(0,P.jsx)(o.Z,{label:"Include time",control:(0,P.jsx)(s.Z,{checked:h.containTime,onChange:()=>O("containTime",!h.containTime)})})]}),(0,P.jsx)(l.Z,{...R("password"),placeholder:"Password",label:"Password"}),(0,P.jsx)(l.Z,{...R("confirmPassword"),placeholder:"Confirm Password",label:"Confirm Password"}),(0,P.jsx)(d.Z,{fullWidth:!0,endIcon:(0,P.jsx)(u.Z,{}),type:"submit",size:"large",disabled:n.loading,children:"Sign Up"})]}),(0,P.jsxs)(i.Z,{variant:"subtitle2",className:e.dmLoginAgain,children:["Already have account?\xa0",(0,P.jsx)(c.Z,{underline:"hover",variant:"subtitle2",href:"/login",children:"Login"})]}),(0,P.jsx)(r.ZP,{className:e.dmOrPartition,children:(0,P.jsx)(i.Z,{children:" OR "})}),(0,P.jsxs)(d.Z,{fullWidth:!0,variant:"contained",className:(0,x.Z)(e.dmSignUpWithGoogleButton,"comming-soon"),size:"large",children:[(0,P.jsx)(g.r,{width:"35",height:"35"}),"Continue with Google"]})]})})})}}}]);
//# sourceMappingURL=447.83a27718.chunk.js.map