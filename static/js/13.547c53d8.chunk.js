"use strict";(self.webpackChunkthe_date_manager=self.webpackChunkthe_date_manager||[]).push([[13],{2013:function(i,e,l){l.r(e),l.d(e,{default:function(){return A}});var a=l(1413),n=l(9439),d=l(2791),t=l(1889),o=l(3044),r=l(8550),s=l(8096),u=l(4925),c=l(4415),m=l(4387),v=l(6151),h=l(2455),f=l(6914),p=l(7454),Z=l(2506),g=l(4457),x=l(2797),b=l(7715),j=l(3657),P=l(184),k=(0,h.Z)((function(i){return{dmUserProfileInfo:{padding:i.spacing(1.5),borderRadius:i.shape.borderRadius,display:"flex",position:"relative",marginTop:i.spacing(1),width:"fit-content",margin:"auto","&>div":{width:"100px",height:"100px"}},dmEditingProfile:{"&>div":{marginTop:i.spacing(2),width:"100%"}},dmEditProfileIcon:{position:"absolute !important",right:10,top:10},dmUserAction:{marginTop:i.spacing(1),width:"fit-content",marginLeft:"auto"}}})),z=x.Ry().shape({name:x.Z_().required("Required")}),T={name:"",email:""};function A(){var i,e,l,h,x,A,S,w,E,U,N=k(),R=(0,d.useState)(T),_=(0,n.Z)(R,2),C=_[0],I=_[1],y=(0,p.fz)(f.fk),W=(0,p.fz)(f.S3);(0,d.useEffect)((function(){var i;if(null!==y&&void 0!==y&&null!==(i=y.data)&&void 0!==i&&i.user){var e,l=null===y||void 0===y||null===(e=y.data)||void 0===e?void 0:e.user;I({name:l.name,email:l.email})}}),[y]);var q=(0,Z.TA)({enableReinitialize:!0,initialValues:C,onSubmit:function(i){f.S3.call({params:i})},validationSchema:z});return(0,P.jsx)(b.Z,{backAction:!0,title:"Account",children:null!==y&&void 0!==y&&y.loading?(0,P.jsx)(j.p,{}):(0,P.jsxs)(t.ZP,{children:[(0,P.jsx)(t.ZP,{className:N.dmUserProfileInfo,children:(0,P.jsx)(o.Z,{src:null===y||void 0===y||null===(i=y.data)||void 0===i||null===(e=i.user)||void 0===e?void 0:e.profileUrl,alt:"profile-img",children:(null===y||void 0===y||null===(l=y.data)||void 0===l||null===(h=l.user)||void 0===h||null===(x=h.name)||void 0===x||null===(A=x[0])||void 0===A?void 0:A.toUpperCase())||"-"})}),(0,P.jsxs)(t.ZP,{children:[(0,P.jsxs)(t.ZP,{className:N.dmEditingProfile,children:[(0,P.jsx)(r.Z,(0,a.Z)((0,a.Z)({},(0,g.MT)(q,"name")),{},{fullWidth:!0,label:"Name",placeholder:"Name"})),(0,P.jsx)(r.Z,(0,a.Z)((0,a.Z)({},(0,g.MT)(q,"email")),{},{disabled:!0,fullWidth:!0,label:"Email",placeholder:"Email"})),(0,P.jsxs)(s.Z,{fullWidth:!0,children:[(0,P.jsx)(u.Z,{id:"timezone-input",children:"Timezone"}),(0,P.jsx)(c.Z,{disabled:!0,defaultValue:null===y||void 0===y||null===(S=y.data)||void 0===S||null===(w=S.user)||void 0===w?void 0:w.timezone,labelId:"timezone-input",label:"Timezone",value:null===y||void 0===y||null===(E=y.data)||void 0===E||null===(U=E.user)||void 0===U?void 0:U.timezone,children:(0,P.jsx)(m.Z,{value:"Asia/Kolkata",children:"Asia/Kolkata"})})]})]}),(0,P.jsx)(t.ZP,{className:N.dmUserAction,children:(0,P.jsx)(v.Z,{onClick:q.handleSubmit,type:"submit",disabled:W.loading,children:"Save"})})]})]})})}}}]);
//# sourceMappingURL=13.547c53d8.chunk.js.map