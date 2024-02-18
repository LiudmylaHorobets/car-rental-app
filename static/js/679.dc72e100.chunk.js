"use strict";(self.webpackChunkcar_rental_app=self.webpackChunkcar_rental_app||[]).push([[679],{679:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,i,c=r(439),o=r(791),l=r(420),d=function(n){return n.adverts.adverts},s=r(89),p=r(168),u=r(924),x=u.ZP.div(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  width: 274px;\n  height: 426px;\n\n  .card-img {\n    margin-bottom: 14px;\n\n    width: 274px;\n    height: 268px;\n    border-radius: 14px;\n\n    object-fit: cover;\n  }\n\n  .card-title-wrap {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    margin-bottom: 8px;\n  }\n\n  .card-title,\n  .card-price {\n    display: flex;\n    gap: 2px;\n\n    font-size: 16px;\n    font-weight: 500;\n    color: var(--primary-black);\n  }\n\n  .card-blue-text {\n    color: var(--primary-blue);\n  }\n\n  .card-black-text {\n    color: var(--primary-black);\n  }\n\n  .card-details {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n\n    margin-bottom: 24px;\n\n    font-size: 12px;\n    font-weight: 400;\n    color: var(--primary-black);\n  }\n  .card-details-first,\n  .card-details-second {\n    opacity: var(--opacity-text);\n  }\n\n  .card-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 100%;\n    padding-top: 12px;\n    padding-bottom: 12px;\n\n    font-size: 14px;\n    line-height: 143%;\n    font-weight: 600;\n    color: var(--primary-white);\n    background-color: var(--primary-blue);\n    border-radius: 12px;\n  }\n\n  .card-button:hover,\n  .card-button:focus {\n    background-color: var(--secondary-blue);\n  }\n"]))),f=r(184),m=function(n){var e=n.advert;return(0,f.jsx)(x,{children:(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{className:"card-img",src:e.img,alt:e.model}),(0,f.jsxs)("div",{className:"card-title-wrap",children:[(0,f.jsxs)("p",{className:"card-title",children:[(0,f.jsx)("span",{children:e.make}),(0,f.jsxs)("span",{className:"card-info-model ".concat(e.model?"card-blue-text":"card-black-text"),children:[e.model,","]}),(0,f.jsx)("span",{children:e.year})]}),(0,f.jsx)("p",{className:"card-price",children:e.rentalPrice})]}),(0,f.jsxs)("div",{className:"card-details",children:[(0,f.jsx)("p",{className:"card-details-first",children:[e.address[2],e.address[3],e.rentalCompany].filter(Boolean).join(" | ")}),(0,f.jsx)("p",{className:"card-details-second",children:[e.type,e.model,e.id,e.functionalities[0]].filter(Boolean).join(" | ")})]}),(0,f.jsx)("button",{className:"card-button",type:"button",children:"Learn more"})]},e.id)})},h=u.ZP.ul(a||(a=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 274px);\n  grid-gap: 50px 29px;\n  grid-auto-rows: 426px;\n\n  margin-bottom: 100px;\n"]))),b=function(){var n=(0,l.I0)(),e=(0,l.v9)(d);return(0,o.useEffect)((function(){n((0,s.G)())}),[n]),(0,f.jsx)(h,{children:e.map((function(n){return(0,f.jsx)(m,{advert:n},n.id)}))})},g=u.ZP.button(i||(i=(0,p.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--primary-blue);\n  text-decoration: underline;\n  background-color: transparent;\n  cursor: pointer;\n  \n  &:hover,\n  &:focus {\n    color: var(--secondary-blue);\n  }\n"]))),v=function(n){var e=n.onClick;return(0,f.jsx)(g,{type:"button",onClick:function(){return e()},children:"Load more"})},y=function(){var n=(0,l.I0)(),e=(0,o.useState)(1),r=(0,c.Z)(e,2),t=r[0],a=r[1],i=(0,o.useState)(!1),d=(0,c.Z)(i,2),p=d[0],u=d[1];(0,o.useEffect)((function(){n((0,s.G)(t)).then((function(n){n.payload.length<12?u(!1):u(!0)}))}),[n,t]);return(0,f.jsxs)("main",{children:[(0,f.jsx)(b,{}),p&&(0,f.jsx)(v,{onClick:function(){a((function(n){return n+1}))}})]})}}}]);
//# sourceMappingURL=679.dc72e100.chunk.js.map