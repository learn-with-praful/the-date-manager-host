"use strict";(self.webpackChunkthe_date_manager=self.webpackChunkthe_date_manager||[]).push([[678],{2678:function(n,e,i){i.r(e),i.d(e,{default:function(){return C}});var l=i(2791),r=i(1889),a=i(890),d=i(4747),t=i(7715),o=i(7454),s=i(4457),u=i(2455),c=i(3400),v=i(5536),h=i(7247),f=i(7689),p=i(9686),m=i(8713),x=i(8403),j=i(3657),Z=i(184),g=(0,u.Z)((function(n){return{usersContainer:{display:"grid",gridTemplateColumns:"1",gridGap:8},dmUserCard:{background:n.palette.primary.main+"24",flex:1,padding:10,borderRadius:n.shape.borderRadius,position:"relative"},dmViewActionContainer:{position:"absolute",top:6,right:6},dmGroupContianer:{width:"fit-content",display:"inline-block","&>div":{marginRight:4}}}}));function C(){var n,e,i,u=g(),C=(0,f.s0)(),b=(0,o.fz)(d.NM),k=(0,m.w)({placeholder:"Search user",key:"event-user"}).searchValue;(0,l.useEffect)((function(){d.NM.call()}),[]);var w=function(n){C("/person/view/".concat(n))},V=(0,l.useMemo)((function(){var n,e,i;if(!k)return null===b||void 0===b||null===(n=b.data)||void 0===n?void 0:n.data;var l=null===k||void 0===k?void 0:k.toLowerCase();return(null===b||void 0===b||null===(e=b.data)||void 0===e||null===(i=e.data)||void 0===i?void 0:i.map((function(n){var e;return n.name.toLowerCase().includes(l)||null!==n&&void 0!==n&&null!==(e=n.group)&&void 0!==e&&e.find((function(n){var e,i;return null===n||void 0===n||null===(e=n.name)||void 0===e||null===(i=e.toLowerCase())||void 0===i?void 0:i.includes(l)}))?n:null})).filter((function(n){return n})))||[]}),[null===b||void 0===b||null===(n=b.data)||void 0===n?void 0:n.data,k]);return(0,Z.jsx)(t.Z,{backAction:!0,title:"Users",children:(0,Z.jsx)(r.ZP,{className:u.usersContainer,children:null!==b&&void 0!==b&&b.loading?(0,Z.jsx)(j.p,{}):null!==b&&void 0!==b&&null!==(e=b.data)&&void 0!==e&&null!==(i=e.data)&&void 0!==i&&i.length?null!==V&&void 0!==V&&V.length?null===V||void 0===V?void 0:V.map((function(n){var e,i;return(0,Z.jsxs)(r.ZP,{className:u.dmUserCard,children:[(0,Z.jsxs)(a.Z,{variant:"h6",children:[(0,Z.jsx)("b",{children:"Name: "}),n.name]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)("b",{children:"Created At: "}),(0,s.p6)(n.createdAt)]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)("b",{children:"Total events: "}),null===n||void 0===n||null===(e=n.events)||void 0===e?void 0:e.length]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)("b",{children:"Groups: "}),(0,Z.jsx)(r.ZP,{className:u.dmGroupContianer,children:null===n||void 0===n||null===(i=n.group)||void 0===i?void 0:i.map((function(n){return(0,Z.jsx)(p.v,{group:n},n._id)}))})]}),(0,Z.jsxs)("div",{className:u.dmViewActionContainer,children:[(0,Z.jsx)(c.Z,{size:"small",onClick:function(){return w(n._id)},disabled:!0,children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)(c.Z,{size:"small",onClick:function(){return w(n._id)},children:(0,Z.jsx)(v.Z,{})})]})]})})):(0,Z.jsx)(x.Z,{}):(0,Z.jsxs)(r.ZP,{display:"flex",justifyContent:"center",minHeight:"200px",flexDirection:"column",alignItems:"center",children:[(0,Z.jsx)(a.Z,{children:"No user found"}),(0,Z.jsx)(a.Z,{variant:"caption",children:"Create event user from home page."})]})})})}},7247:function(n,e,i){var l=i(4836);e.Z=void 0;var r=l(i(5649)),a=i(184),d=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=d},5536:function(n,e,i){var l=i(4836);e.Z=void 0;var r=l(i(5649)),a=i(184),d=(0,r.default)((0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");e.Z=d}}]);
//# sourceMappingURL=678.4c9a13c8.chunk.js.map