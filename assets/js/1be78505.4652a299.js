"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9514,4972],{19963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(67294),i=n(86010),s=n(10833),o=n(35281),r=n(43320),l=n(52802),c=n(74477),d=n(1116),u=n(71732),m=n(95999),h=n(12466),b=n(85936);const p="backToTopButton_sjWU",x="backToTopButtonShow_xfvO";var j=n(85893);function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:o,cancelScroll:r}=(0,h.Ct)();return(0,h.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(s.current?s.current=!1:a>=o?(r(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,b.S)((e=>{e.location.hash&&(s.current=!0,i(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,j.jsx)("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.k.common.backToTopButton,p,e&&x),type:"button",onClick:t})}var v=n(16550),g=n(87524),_=n(86668),C=n(21327);function k(e){return(0,j.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,j.jsxs)("g",{fill:"#7a7a7a",children:[(0,j.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,j.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const S="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function N(e){let{onClick:t}=e;return(0,j.jsx)("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",S),onClick:t,children:(0,j.jsx)(k,{className:I})})}var T=n(59689),Z=n(902);const w=Symbol("EmptyContext"),y=a.createContext(w);function L(e){let{children:t}=e;const[n,i]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:i})),[n]);return(0,j.jsx)(y.Provider,{value:s,children:t})}var A=n(86043),E=n(48596),M=n(39960),B=n(72389);function F(e){let{categoryLabel:t,onClick:n}=e;return(0,j.jsx)("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){let{item:t,onItemClick:n,activePath:s,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:b,href:p}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,_.L)(),f=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,l.Wl)(e):void 0),[e,t])}(t),v=(0,l._F)(t,s),g=(0,E.Mg)(p,s),{collapsed:C,setCollapsed:k}=(0,A.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:S,setExpandedItem:I}=function(){const e=(0,a.useContext)(y);if(e===w)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=function(e){void 0===e&&(e=!C),I(e?null:c),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:i}=e;const s=(0,Z.D9)(t);(0,a.useEffect)((()=>{t&&!s&&n&&i(!1)}),[t,s,n,i])}({isActive:v,collapsed:C,updateCollapsed:N}),(0,a.useEffect)((()=>{h&&null!=S&&S!==c&&x&&k(!0)}),[h,S,c,k,x]),(0,j.jsxs)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":C},b),children:[(0,j.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,j.jsx)(M.Z,{className:(0,i.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!p&&h,"menu__link--active":v}),onClick:h?e=>{n?.(t),p?N(!1):(e.preventDefault(),N())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":h?!C:void 0,href:h?f??"#":f,...d,children:m}),p&&h&&(0,j.jsx)(F,{categoryLabel:m,onClick:e=>{e.preventDefault(),N()}})]}),(0,j.jsx)(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C,children:(0,j.jsx)(q,{items:u,tabIndex:C?-1:0,onItemClick:n,activePath:s,level:r+1})})]})}var P=n(13919),D=n(39471);const W="menuExternalLink_NmtK";function R(e){let{item:t,onItemClick:n,activePath:a,level:s,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,b=(0,l._F)(t,a),p=(0,P.Z)(d);return(0,j.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",m),children:(0,j.jsxs)(M.Z,{className:(0,i.Z)("menu__link",!p&&W,{"menu__link--active":b}),autoAddBaseUrl:h,"aria-current":b?"page":void 0,to:d,...p&&{onClick:n?()=>n(t):void 0},...c,children:[u,!p&&(0,j.jsx)(D.Z,{})]})},u)}const V="menuHtmlItem_M9Kj";function z(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:r,className:l}=t;return(0,j.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),r&&[V,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:s}},a)}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,j.jsx)(H,{item:t,...n});case"html":return(0,j.jsx)(z,{item:t,...n});default:return(0,j.jsx)(R,{item:t,...n})}}function K(e){let{items:t,...n}=e;return(0,j.jsx)(L,{children:t.map(((e,t)=>(0,j.jsx)(U,{item:e,index:t,...n},t)))})}const q=(0,a.memo)(K),G="menu_SIkG",Y="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:n,className:s}=e;const r=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,h.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,j.jsx)("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",G,r&&Y,s),children:(0,j.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,j.jsx)(q,{items:n,activePath:t,level:1})})})}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:a,isHidden:s}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:r}}}=(0,_.L)();return(0,j.jsxs)("div",{className:(0,i.Z)(X,o&&J,s&&Q),children:[o&&(0,j.jsx)(C.Z,{tabIndex:-1,className:$}),(0,j.jsx)(O,{path:t,sidebar:n}),r&&(0,j.jsx)(N,{onClick:a})]})}const te=a.memo(ee);var ne=n(13102),ae=n(72961);const ie=e=>{let{sidebar:t,path:n}=e;const a=(0,ae.e)();return(0,j.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,j.jsx)(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function se(e){return(0,j.jsx)(ne.Zo,{component:ie,props:e})}const oe=a.memo(se);function re(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,j.jsxs)(j.Fragment,{children:[n&&(0,j.jsx)(te,{...e}),a&&(0,j.jsx)(oe,{...e})]})}const le="expandButton_m80_",ce="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return(0,j.jsx)("div",{className:le,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,j.jsx)(k,{className:ce})})}const ue={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function me(e){let{children:t}=e;const n=(0,d.V)();return(0,j.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function he(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:s}=e;const{pathname:r}=(0,v.TH)(),[l,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l&&c(!1),s((e=>!e))}),[s,l]);return(0,j.jsx)("aside",{className:(0,i.Z)(o.k.docs.docSidebarContainer,ue.docSidebarContainer,n&&ue.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue.docSidebarContainer)&&n&&c(!0)},children:(0,j.jsx)(me,{children:(0,j.jsxs)("div",{className:(0,i.Z)(ue.sidebarViewport,l&&ue.sidebarViewportHidden),children:[(0,j.jsx)(re,{sidebar:t,path:r,onCollapse:d,isHidden:l}),l&&(0,j.jsx)(de,{toggleSidebar:d})]})})})}const be={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function pe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,d.V)();return(0,j.jsx)("main",{className:(0,i.Z)(be.docMainContainer,(t||!a)&&be.docMainContainerEnhanced),children:(0,j.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced),children:n})})}const xe="docPage__5DB",je="docsWrapper_BCFX";function fe(e){let{children:t}=e;const n=(0,d.V)(),[i,s]=(0,a.useState)(!1);return(0,j.jsxs)(u.Z,{wrapperClassName:je,children:[(0,j.jsx)(f,{}),(0,j.jsxs)("div",{className:xe,children:[n&&(0,j.jsx)(he,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:s}),(0,j.jsx)(pe,{hiddenSidebarContainer:i,children:t})]})]})}var ve=n(4972),ge=n(90197);function _e(e){const{versionMetadata:t}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(ge.Z,{version:t.version,tag:(0,r.os)(t.pluginId,t.version)}),(0,j.jsx)(s.d,{children:t.noIndex&&(0,j.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}function Ce(e){const{versionMetadata:t}=e,n=(0,l.hI)(e);if(!n)return(0,j.jsx)(ve.default,{});const{docElement:a,sidebarName:r,sidebarItems:u}=n;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(_e,{...e}),(0,j.jsx)(s.FG,{className:(0,i.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className),children:(0,j.jsx)(c.q,{version:t,children:(0,j.jsx)(d.b,{name:r,items:u,children:(0,j.jsx)(fe,{children:a})})})})]})}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});n(67294);var a=n(95999),i=n(10833),s=n(71732),o=n(85893);function r(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,o.jsx)(s.Z,{children:(0,o.jsx)("main",{className:"container margin-vert--xl",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)("h1",{className:"hero__title",children:(0,o.jsx)(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}},74477:(e,t,n)=>{n.d(t,{E:()=>l,q:()=>r});var a=n(67294),i=n(902),s=n(85893);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return(0,s.jsx)(o.Provider,{value:n,children:t})}function l(){const e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocsVersionProvider");return e}}}]);