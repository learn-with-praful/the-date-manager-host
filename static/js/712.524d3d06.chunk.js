"use strict";(self.webpackChunkthe_date_manager=self.webpackChunkthe_date_manager||[]).push([[712],{9712:function(n,e,i){i.r(e),i.d(e,{default:function(){return M}});var l=i(9439),o=i(2791),t=i(1889),r=i(890),d=i(4747),a=i(7715),s=i(7454),u=i(4457),c=i(2455),v=i(3400),h=i(5536),f=i(7247),m=i(7689),x=i(9686),p=i(8713),j=i(8403),g=i(3657),Z=i(1413),C=i(5574),b=i(5661),k=i(9157),w=i(7123),V=i(6151),y=i(184),z=function(n){var e,i,l,o,t=n.open,d=n.maxWidth,a=void 0===d?"xs":d,s=n.title,u=void 0===s?"title":s,c=n.message,v=void 0===c?"message":c,h=n.handleClose,f=void 0===h?function(){}:h,m=n.handleConfirmation,x=void 0===m?function(){}:m,p=n.buttonProps,j=void 0===p?{}:p;return(0,y.jsxs)(C.Z,{open:t,onClose:f,maxWidth:a,children:[(0,y.jsx)(b.Z,{children:u}),(0,y.jsx)(k.Z,{children:(0,y.jsx)(r.Z,{children:v})}),(0,y.jsxs)(w.Z,{children:[(0,y.jsx)(V.Z,{variant:"text",color:"inherit",onClick:f,children:(null===j||void 0===j||null===(e=j.cancelButton)||void 0===e?void 0:e.text)||"Cancel"}),(0,y.jsx)(V.Z,(0,Z.Z)((0,Z.Z)({color:"error",onClick:x},null===j||void 0===j?void 0:j.confirmButton),{},{disabled:(null===j||void 0===j||null===(i=j.confirmButton)||void 0===i?void 0:i.disabled)||(null===j||void 0===j||null===(l=j.confirmButton)||void 0===l?void 0:l.loading),children:(null===j||void 0===j||null===(o=j.confirmButton)||void 0===o?void 0:o.text)||"Yes"}))]})]})},N=(0,c.Z)((function(n){return{usersContainer:{display:"grid",gridTemplateColumns:"1",gridGap:8},dmUserCard:{background:n.palette.primary.main+"24",flex:1,padding:10,borderRadius:n.shape.borderRadius,position:"relative"},dmViewActionContainer:{position:"absolute",top:6,right:6},dmUserGroupsContainer:{width:"fit-content",display:"inline-block","&>div":{marginRight:4}}}}));function M(){var n,e,i,c=N(),Z=(0,m.s0)(),C=(0,o.useState)(!1),b=(0,l.Z)(C,2),k=b[0],w=b[1],V=(0,s.fz)(d.NM),M=(0,s.fz)(d.gc),P=(0,p.w)({placeholder:"Search user",key:"event-user"}).searchValue;(0,o.useEffect)((function(){d.NM.call()}),[]);var U=(0,o.useMemo)((function(){var n,e,i;if(!P)return null===V||void 0===V||null===(n=V.data)||void 0===n?void 0:n.data;var l=null===P||void 0===P?void 0:P.toLowerCase();return(null===V||void 0===V||null===(e=V.data)||void 0===e||null===(i=e.data)||void 0===i?void 0:i.map((function(n){var e;return n.name.toLowerCase().includes(l)||null!==n&&void 0!==n&&null!==(e=n.group)&&void 0!==e&&e.find((function(n){var e,i;return null===n||void 0===n||null===(e=n.name)||void 0===e||null===(i=e.toLowerCase())||void 0===i?void 0:i.includes(l)}))?n:null})).filter((function(n){return n})))||[]}),[null===V||void 0===V||null===(n=V.data)||void 0===n?void 0:n.data,P]);(0,s.UX)(d.gc,{onSuccess:function(){return w(!1)}});return(0,y.jsxs)(a.Z,{backAction:!0,title:"Users",children:[(0,y.jsx)(t.ZP,{className:c.usersContainer,children:null!==V&&void 0!==V&&V.loading?(0,y.jsx)(g.p,{}):null!==V&&void 0!==V&&null!==(e=V.data)&&void 0!==e&&null!==(i=e.data)&&void 0!==i&&i.length?null!==U&&void 0!==U&&U.length?null===U||void 0===U?void 0:U.map((function(n){var e,i,l;return(0,y.jsxs)(t.ZP,{className:c.dmUserCard,children:[(0,y.jsxs)(r.Z,{variant:"h6",children:[(0,y.jsx)("b",{children:"Name: "}),n.name]}),(0,y.jsxs)(r.Z,{children:[(0,y.jsx)("b",{children:"Created At: "}),(0,u.p6)(n.createdAt)]}),(0,y.jsxs)(r.Z,{children:[(0,y.jsx)("b",{children:"Total events: "}),null===n||void 0===n||null===(e=n.events)||void 0===e?void 0:e.length]}),(0,y.jsxs)(r.Z,{children:[(0,y.jsx)("b",{children:"Groups: "}),(0,y.jsx)(t.ZP,{className:c.dmUserGroupsContainer,children:null!==n&&void 0!==n&&null!==(i=n.group)&&void 0!==i&&i.length?null===n||void 0===n||null===(l=n.group)||void 0===l?void 0:l.map((function(n){return(0,y.jsx)(x.v,{group:n},n._id)})):"-"})]}),(0,y.jsxs)("div",{className:c.dmViewActionContainer,children:[(0,y.jsx)(v.Z,{size:"small",onClick:function(){return w(n)},disabled:M.loading,children:(0,y.jsx)(f.Z,{})}),(0,y.jsx)(v.Z,{size:"small",onClick:function(){return e=n._id,void Z("/person/view/".concat(e));var e},children:(0,y.jsx)(h.Z,{})})]})]})})):(0,y.jsx)(j.Z,{}):(0,y.jsxs)(t.ZP,{display:"flex",justifyContent:"center",minHeight:"200px",flexDirection:"column",alignItems:"center",children:[(0,y.jsx)(r.Z,{children:"No user found"}),(0,y.jsx)(r.Z,{variant:"caption",children:"Create event user from home page."})]})}),(0,y.jsx)(z,{open:Boolean(k),handleClose:function(){return w(!1)},title:"Delete Event User",message:"Are you sure you want to delete this event user?",handleConfirmation:function(){var n=k;d.gc.call({urlParams:{id:n._id}})},buttonProps:{loading:M.loading}})]})}},7247:function(n,e,i){var l=i(4836);e.Z=void 0;var o=l(i(5649)),t=i(184),r=(0,o.default)((0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=r},5536:function(n,e,i){var l=i(4836);e.Z=void 0;var o=l(i(5649)),t=i(184),r=(0,o.default)((0,t.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");e.Z=r}}]);
//# sourceMappingURL=712.524d3d06.chunk.js.map