"use strict";(self.webpackChunkthe_date_manager=self.webpackChunkthe_date_manager||[]).push([[465],{1465:function(e,r,n){n.r(r),n.d(r,{default:function(){return X}});var i=n(1413),a=n(9439),t=n(2791),o=n(1889),s=n(3044),l=n(8550),c=n(6151),d=n(2455),u=n(6914),v=n(7454),m=n(2506),f=n(4457),h=n(2797),p=n(7715),g=n(168),Z=n(3366),k=n(7462),x=n(8182),b=n(4419),S=n(2554),w=n(4036),P=n(1402),y=n(6934),j=n(5878),C=n(1217);function N(e){return(0,C.ZP)("MuiCircularProgress",e)}(0,j.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var M,R,D,E,z,I,T,A,U=n(184),_=["className","color","disableShrink","size","style","thickness","value","variant"],F=44,L=(0,S.F4)(z||(z=M||(M=(0,g.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),W=(0,S.F4)(I||(I=R||(R=(0,g.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),q=(0,y.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r[n.variant],r["color".concat((0,w.Z)(n.color))]]}})((function(e){var r=e.ownerState,n=e.theme;return(0,k.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:n.transitions.create("transform")},"inherit"!==r.color&&{color:(n.vars||n).palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,S.iv)(T||(T=D||(D=(0,g.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),L)})),B=(0,y.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),V=(0,y.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var n=e.ownerState;return[r.circle,r["circle".concat((0,w.Z)(n.variant))],n.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,n=e.theme;return(0,k.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,S.iv)(A||(A=E||(E=(0,g.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),W)})),G=t.forwardRef((function(e,r){var n=(0,P.Z)({props:e,name:"MuiCircularProgress"}),i=n.className,a=n.color,t=void 0===a?"primary":a,o=n.disableShrink,s=void 0!==o&&o,l=n.size,c=void 0===l?40:l,d=n.style,u=n.thickness,v=void 0===u?3.6:u,m=n.value,f=void 0===m?0:m,h=n.variant,p=void 0===h?"indeterminate":h,g=(0,Z.Z)(n,_),S=(0,k.Z)({},n,{color:t,disableShrink:s,size:c,thickness:v,value:f,variant:p}),y=function(e){var r=e.classes,n=e.variant,i=e.color,a=e.disableShrink,t={root:["root",n,"color".concat((0,w.Z)(i))],svg:["svg"],circle:["circle","circle".concat((0,w.Z)(n)),a&&"circleDisableShrink"]};return(0,b.Z)(t,N,r)}(S),j={},C={},M={};if("determinate"===p){var R=2*Math.PI*((F-v)/2);j.strokeDasharray=R.toFixed(3),M["aria-valuenow"]=Math.round(f),j.strokeDashoffset="".concat(((100-f)/100*R).toFixed(3),"px"),C.transform="rotate(-90deg)"}return(0,U.jsx)(q,(0,k.Z)({className:(0,x.Z)(y.root,i),style:(0,k.Z)({width:c,height:c},C,d),ownerState:S,ref:r,role:"progressbar"},M,g,{children:(0,U.jsx)(B,{className:y.svg,ownerState:S,viewBox:"".concat(22," ").concat(22," ").concat(F," ").concat(F),children:(0,U.jsx)(V,{className:y.circle,style:j,ownerState:S,cx:F,cy:F,r:(F-v)/2,fill:"none",strokeWidth:v})})}))})),H=(0,d.Z)((function(e){return{dmLoaderContainer:{position:"absolute",height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",background:"#00000020",left:0,top:0,pointerEvents:"none"}}}));function J(){var e=H();return(0,U.jsx)("div",{className:e.dmLoaderContainer,children:(0,U.jsx)(G,{})})}var K=(0,d.Z)((function(e){return{dmUserProfileInfo:{padding:e.spacing(1.5),borderRadius:e.shape.borderRadius,display:"flex",position:"relative",marginTop:e.spacing(1),width:"fit-content",margin:"auto","&>div":{width:"100px",height:"100px"}},dmEditingProfile:{"&>div":{marginTop:e.spacing(1),width:"100%"}},dmEditProfileIcon:{position:"absolute !important",right:10,top:10},dmUserAction:{marginTop:e.spacing(1),width:"fit-content",marginLeft:"auto"}}})),O=h.Ry().shape({name:h.Z_().required("Required")}),Q={name:"",email:""};function X(){var e,r,n,d,h=K(),g=(0,t.useState)(Q),Z=(0,a.Z)(g,2),k=Z[0],x=Z[1],b=(0,v.fz)(u.fk),S=(0,v.fz)(u.S3);(0,t.useEffect)((function(){var e;if(null!==b&&void 0!==b&&null!==(e=b.data)&&void 0!==e&&e.user){var r,n=null===b||void 0===b||null===(r=b.data)||void 0===r?void 0:r.user;x({name:n.name,email:n.email})}}),[b]);var w=(0,m.TA)({enableReinitialize:!0,initialValues:k,onSubmit:function(e){console.log("value",e),u.S3.call({params:e})},validationSchema:O});return(0,U.jsxs)(p.Z,{backAction:!0,title:"Account",children:[b.loading&&(0,U.jsx)(J,{}),(0,U.jsx)(o.ZP,{className:h.dmUserProfileInfo,children:(0,U.jsx)(s.Z,{alt:"profile-img",children:(null===b||void 0===b||null===(e=b.data)||void 0===e||null===(r=e.user)||void 0===r||null===(n=r.name)||void 0===n||null===(d=n[0])||void 0===d?void 0:d.toUpperCase())||"-"})}),(0,U.jsxs)(o.ZP,{children:[(0,U.jsxs)(o.ZP,{className:h.dmEditingProfile,children:[(0,U.jsx)(l.Z,(0,i.Z)((0,i.Z)({},(0,f.MT)(w,"name")),{},{fullWidth:!0,label:"Name",placeholder:"Name"})),(0,U.jsx)(l.Z,(0,i.Z)((0,i.Z)({},(0,f.MT)(w,"email")),{},{disabled:!0,fullWidth:!0,label:"Email",placeholder:"Email"}))]}),(0,U.jsx)(o.ZP,{className:h.dmUserAction,children:(0,U.jsx)(c.Z,{onClick:w.handleSubmit,type:"submit",disabled:S.loading,children:"Save"})})]})]})}}}]);
//# sourceMappingURL=465.9d16eae7.chunk.js.map