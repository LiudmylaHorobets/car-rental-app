"use strict";(self.webpackChunkcar_rental_app=self.webpackChunkcar_rental_app||[]).push([[260],{9382:function(n,e,t){t.d(e,{Z:function(){return E}});var i,r,a,o,s,l,c=t(168),d=t(7924),p=d.ZP.div(i||(i=(0,c.Z)(["\n  .catalog-list {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 50px 29px;\n    margin-bottom: 100px;\n  }\n"]))),x=t(9439),u=t(2791),m=d.ZP.div(r||(r=(0,c.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  width: 274px;\n  height: 426px;\n\n  .card-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    width: 274px;\n    height: 426px;\n  }\n\n  .card-img {\n    /* position: relative; */\n    margin-bottom: 14px;\n\n    width: 274px;\n    height: 268px;\n    border-radius: 14px;\n\n    object-fit: cover;\n  }\n\n  .card-title-wrap {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    margin-bottom: 8px;\n  }\n\n  .card-title,\n  .card-price {\n    display: flex;\n    gap: 2px;\n\n    font-size: 16px;\n    font-weight: 500;\n    color: var(--primary-black);\n  }\n\n  .card-blue-text {\n    color: var(--primary-blue);\n  }\n\n  .card-black-text {\n    color: var(--primary-black);\n  }\n\n  .card-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 100%;\n    padding-top: 12px;\n    padding-bottom: 12px;\n\n    font-size: 14px;\n    line-height: 143%;\n    font-weight: 600;\n    color: var(--primary-white);\n    background-color: var(--primary-blue);\n    border-radius: 12px;\n  }\n\n  .card-button:hover,\n  .card-button:focus {\n    background-color: var(--secondary-blue);\n  }\n"]))),h=d.ZP.button(a||(a=(0,c.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 999;\n  width: 18px;\n  height: 18px;\n  background-color: transparent;\n\n  .icon-favorite {\n    width: 18px;\n    height: 18px;\n    fill: var(--primary-blue);\n    stroke: none;\n    cursor: pointer;\n  }\n\n  .icon-non-favorite {\n    width: 18px;\n    height: 18px;\n    stroke: var(--primary-white);\n    fill: none;\n    cursor: pointer;\n    &:hover,\n    &:focus {\n      stroke: var(--primary-blue);\n      fill: none;\n    }\n  }\n"]))),f=d.ZP.div(o||(o=(0,c.Z)(["\n  .modal-img {\n    display: block;\n    margin-bottom: 14px;\n    object-fit: cover;\n    width: 100%;\n    height: 314px;\n    border-radius: 14px;\n  }\n  .modal-title-wrap {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    margin-bottom: 8px;\n  }\n\n  .modal-title,\n  .modal-price {\n    display: flex;\n    gap: 4px;\n\n    font-size: 18px;\n    font-weight: 500;\n    color: var(--primary-black);\n  }\n\n  .modal-blue-text {\n    color: var(--primary-blue);\n  }\n\n  .modal-black-text {\n    color: var(--primary-black);\n  }\n"]))),g=d.ZP.div(s||(s=(0,c.Z)(["\n  .modal-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 4px;\n  }\n  .modal-list-first {\n    margin-bottom: 12px;\n  }\n  .modal-list-item {\n    font-size: 12px;\n    color: rgba(18, 20, 23, 0.5);\n    display: flex;\n    align-items: center;\n  }\n\n  .text-desc {\n    line-height: 1.43;\n    margin-top: 14px;\n    font-weight: 400;\n    width: 100%;\n\n    margin-bottom: 24px;\n  }\n\n  .desc-sub-title {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.43;\n    color: var(--primary-black);\n    margin-bottom: 8px;\n  }\n\n  .modal-list-second,\n  .condition-block {\n    margin-bottom: 24px;\n  }\n\n  .condition-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n\n    font-size: 12px;\n    letter-spacing: -0.24px;\n\n    @media screen and (min-width: 768px) {\n      width: 461px;\n    }\n  }\n\n  .condition-item {\n    padding: 7px 14px;\n\n    border-radius: 35px;\n    color: #363535;\n    background-color: #f9f9f9;\n  }\n"]))),b=d.ZP.button(l||(l=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding-top: 12px;\n  padding-bottom: 12px;\n  width: 168px;\n  height: 44px;\n\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--primary-white);\n  background-color: var(--primary-blue);\n  border-radius: 12px;\n\n  &:hover,\n  &:focus {\n    background-color: var(--secondary-blue);\n  }\n"]))),v=t(3329),j=function(n){var e=n.advert;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{className:"modal-img",src:e.img,alt:e.model}),(0,v.jsx)("div",{className:"modal-title-wrap",children:(0,v.jsxs)("p",{className:"modal-title",children:[(0,v.jsx)("span",{children:e.make}),(0,v.jsxs)("span",{className:"modal-info-model ".concat(e.model?"modal-blue-text":"modal-black-text"),children:[e.model,","]}),(0,v.jsx)("span",{children:e.year})]})}),(0,v.jsxs)(g,{children:[(0,v.jsxs)("ul",{className:"modal-list modal-list-first",children:[(0,v.jsx)("li",{className:"modal-list-item",children:[e.address[2],e.address[3],"Id: ".concat(e.id),"Year: ".concat(e.year),"Type: ".concat(e.type)].filter(Boolean).join(" | ")}),(0,v.jsx)("li",{className:"modal-list-item",children:["Fuel Consumption: ".concat(e.fuelConsumption),"Engine Size: ".concat(e.engineSize)].filter(Boolean).join(" | ")})]}),(0,v.jsx)("p",{className:"text-desc",children:e.description}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{className:"desc-sub-title",children:"Accessories and functionalities:"}),(0,v.jsxs)("ul",{className:"modal-list modal-list-second",children:[e.accessories.map((function(n,t){return(0,v.jsxs)("li",{className:"modal-list-item",children:[n,t<e.accessories.length-1&&" | "]},n)})),e.functionalities.map((function(n,t){return(0,v.jsxs)("li",{className:"modal-list-item",children:[n,t<e.functionalities.length-1&&" | "]},n)}))]})]}),(0,v.jsxs)("div",{className:"condition-block",children:[(0,v.jsx)("h3",{className:"desc-sub-title",children:"Rental Conditions:"}),(0,v.jsxs)("ul",{className:"condition-list",children:[e.rentalConditions.split("\n").map((function(n,e){return(0,v.jsx)("li",{className:"condition-item",children:n},e)})),(0,v.jsxs)("li",{className:"condition-item",children:["Mileage: ",e.mileage]}),(0,v.jsxs)("li",{className:"condition-item",children:["Price: ",e.rentalPrice]})]})]})]}),(0,v.jsx)(b,{onClick:function(){window.location.href="tel:+380730000000"},children:"Rental car"})]})})};var y,w,k=t.p+"static/media/sprite.6b2f1cec7fea8a94c9a2d53d9278376c.svg",N=function(n){var e=n.className,t=n.id;return(0,v.jsx)("svg",{className:e,children:(0,v.jsx)("use",{href:"".concat(k,"#icon-").concat(t)})})},Z=d.ZP.div(y||(y=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n\n  .modal-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    overflow: auto;\n    padding: 40px;\n    width: 461px;\n    max-height: 80%;\n    border-radius: 24px;\n    background-color: var(--primary-white);\n      }\n  .modal-icon {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    z-index: 1;\n    width: 24px;\n    height: 24px;\n\n    stroke: #121417;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n      transform: rotate(180deg);\n    }\n  }\n"]))),C=function(n){var e=n.setVisible,t=n.children;(0,u.useEffect)((function(){var n=function(n){"Escape"===n.code&&e(!1)};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,v.jsx)(Z,{onClick:function(n){n.currentTarget===n.target&&e(!1)},children:(0,v.jsxs)("div",{className:"modal-wrapper",children:[(0,v.jsx)("button",{onClick:function(){return e(!1)},className:"modal-btn",children:(0,v.jsx)(N,{className:"modal-icon",id:"close"})}),t]})})},z=d.ZP.div(w||(w=(0,c.Z)(["\n  .card-details {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n\n    font-size: 12px;\n    font-weight: 400;\n    color: var(--primary-black);\n  }\n  .card-details-first,\n  .card-details-second {\n    opacity: var(--opacity-text);\n  }\n"]))),P=function(n){var e=n.advert;return(0,v.jsxs)(z,{children:[(0,v.jsx)("p",{className:"card-details-first",children:[e.address[2],e.address[3],e.rentalCompany].filter(Boolean).join(" | ")}),(0,v.jsx)("p",{className:"card-details-second",children:[e.type,e.model,e.id,e.functionalities[0]].filter(Boolean).join(" | ")})]})},S=function(n){var e=n.advert,t=(0,u.useState)(!1),i=(0,x.Z)(t,2),r=i[0],a=i[1],o=(0,u.useState)(!1),s=(0,x.Z)(o,2),l=s[0],c=s[1];return(0,v.jsxs)(m,{children:[(0,v.jsxs)("li",{className:"card-item",children:[(0,v.jsxs)("div",{className:"card-container",children:[(0,v.jsx)("img",{className:"card-img",src:e.img,alt:e.model}),(0,v.jsx)(h,{onClick:function(){c(!l)},children:(0,v.jsx)(N,{className:l?"icon-favorite":"icon-non-favorite",id:"heart"})}),(0,v.jsxs)("div",{className:"card-title-wrap",children:[(0,v.jsxs)("p",{className:"card-title",children:[(0,v.jsx)("span",{children:e.make}),(0,v.jsxs)("span",{className:"card-info-model ".concat(e.model?"card-blue-text":"card-black-text"),children:[e.model,","]}),(0,v.jsx)("span",{children:e.year})]}),(0,v.jsx)("p",{className:"card-price",children:e.rentalPrice})]}),(0,v.jsx)(P,{advert:e})]}),(0,v.jsx)("button",{className:"card-button",type:"button",onClick:function(){return a(!0)},children:"Learn more"})]},e.id),r&&(0,v.jsx)(C,{setVisible:a,children:(0,v.jsx)(j,{advert:e})})]})},M=t(4420),B=function(n){return n.adverts.adverts},E=function(){var n=(0,M.v9)(B),e=function n(e){return n.some((function(n){return n.id===e}))};return(0,v.jsx)(p,{children:(0,v.jsx)("ul",{className:"catalog-list",children:n.map((function(n){return(0,v.jsx)(S,{advert:n,favorites:e},n.id)}))})})}},7260:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var i,r,a,o,s,l,c,d=t(9439),p=t(2791),x=t(168),u=t(7924),m=u.ZP.button(i||(i=(0,x.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--primary-blue);\n  text-decoration: underline;\n  background-color: transparent;\n  cursor: pointer;\n  \n  &:hover,\n  &:focus {\n    color: var(--secondary-blue);\n  }\n"]))),h=t(3329),f=function(n){var e=n.onClick;return(0,h.jsx)(m,{type:"button",onClick:function(){return e()},children:"Load more"})},g=t(4420),b=u.ZP.section(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  max-width: 1441px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 40px 20px;\n"]))),v=t(7089),j=t(3433),y=u.ZP.div(a||(a=(0,x.Z)(["\n  margin-bottom: 50px;\n\n  .search-form {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: flex-end;\n    justify-content: center;\n\n    gap: 18px;\n  }\n"]))),w=u.ZP.label(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n\n  .search-input {\n    display: flex;\n    padding: 14px 14px 14px 18px;\n    border: none;\n    font-size: 18px;\n    background-color: #f7f7fb;\n    border-radius: 14px;\n    color: var(--primary-black);\n    cursor: pointer;\n  }\n  .wrap {\n    display: flex;\n    flex-wrap: nowrap;\n  }\n"]))),k=u.ZP.span(s||(s=(0,x.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: #8a8a89;\n  margin-bottom: 8px;\n"]))),N=u.ZP.div(l||(l=(0,x.Z)(["\n  position: relative;\n\n  .search-input-km {\n    display: block;\n    width: 85px;\n    height: 48px;\n    border: none;\n    background-color: rgba(247, 247, 251, 1);\n    color: rgba(18, 20, 23, 1);\n    font-size: 18px;\n    cursor: pointer;\n  }\n  .left {\n    padding-left: 75px;\n    border-radius: 14px 0 0 14px;\n    border-right: 1px solid rgba(138, 138, 137, 0.2);\n  }\n  .right {\n    padding-left: 75px;\n    border-radius: 0 14px 14px 0;\n    border-left: 1px solid rgba(138, 138, 137, 0.2);\n  }\n  .search-input-km {\n    display: block;\n    color: rgba(18, 20, 23, 1);\n    font-size: 18px;\n  }\n  .span-left,\n  .span-right {\n    position: absolute;\n    left: 24px;\n    top: 12px;\n\n    font-size: 18px;\n  }\n"]))),Z=u.ZP.button(c||(c=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 136px;\n  height: 48px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42;\n  color: var(--primary-white);\n  background-color: var(--primary-blue);\n  border-radius: 12px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: var(--secondary-blue);\n  }\n"]))),C=JSON.parse('["All","Aston Martin","Audi","BMW","Bentley","Buick","Chevrolet","Chrysler","GMC","HUMMER","Hyundai","Kia","Lamborghini","Land","Lincoln","MINI","Mercedes-Benz","Mitsubishi","Nissan","Pontiac","Subaru","Volvo"]'),z=function(n){var e=n.setQuery,t=(n.advert,(0,p.useState)("")),i=(0,d.Z)(t,2),r=i[0],a=i[1],o=(0,p.useState)(""),s=(0,d.Z)(o,2),l=s[0],c=s[1],x=(0,p.useState)(""),u=(0,d.Z)(x,2),m=u[0],f=u[1],g=(0,p.useState)(""),b=(0,d.Z)(g,2),v=b[0],z=b[1],P=C,S=function(n){n.preventDefault(),e({brand:r,priceForHour:l,mileageFrom:m,mileageTo:v})};return(0,h.jsx)(y,{children:(0,h.jsxs)("form",{className:"search-form",onSubmit:S,children:[(0,h.jsxs)(w,{children:[(0,h.jsx)(k,{children:"Car brand"}),(0,h.jsxs)("select",{className:"search-input",type:"text",id:"brand",value:r,onChange:function(n){a(n.target.value)},children:[(0,h.jsx)("option",{value:"",children:"Enter the text"}),P.map((function(n){return(0,h.jsx)("option",{value:n,children:n},n)}))]})]}),(0,h.jsxs)(w,{children:[(0,h.jsx)(k,{children:"Price/ 1 hour"}),(0,h.jsxs)("select",{className:"search-input",type:"text",id:"priceForHour",value:l,onChange:function(n){return c(n.target.value)},children:[(0,h.jsx)("option",{value:"",children:"To $"}),(0,j.Z)(Array(100)).map((function(n,e){return(0,h.jsx)("option",{value:10*(e+1),children:10*(e+1)},e)}))]})]}),(0,h.jsxs)(w,{children:[(0,h.jsx)(k,{children:"Car mileage / km"}),(0,h.jsxs)("div",{className:"wrap",children:[(0,h.jsxs)(N,{children:[(0,h.jsx)("span",{className:"span-left",children:"From"}),(0,h.jsx)("input",{className:"search-input-km left",type:"text",id:"mileageFrom",value:m,onChange:function(n){return f(n.target.value)},pattern:"[0-9]*"})]}),(0,h.jsxs)(N,{children:[(0,h.jsx)("span",{className:"span-right",children:"To"}),(0,h.jsx)("input",{className:"search-input-km right",type:"text",id:"mileageTo",value:v,onChange:function(n){return z(n.target.value)},pattern:"[0-9]*"})]})]})]}),(0,h.jsx)(Z,{onClick:S,children:"Search"})]})})},P=t(9382),S=function(){var n=(0,g.I0)(),e=(0,p.useState)(1),t=(0,d.Z)(e,2),i=t[0],r=t[1],a=(0,p.useState)(!1),o=(0,d.Z)(a,2),s=o[0],l=o[1],c=(0,p.useState)(!1),x=(0,d.Z)(c,2),u=x[0],m=x[1];(0,p.useEffect)((function(){n((0,v.G)(i)).then((function(n){n.payload.length<12?l(!1):l(!0)}))}),[n,i]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(z,{setQuery:m}),(0,h.jsx)(P.Z,{query:u}),s&&(0,h.jsx)(f,{onClick:function(){r((function(n){return n+1}))}})]})})}}}]);
//# sourceMappingURL=260.6e0aa023.chunk.js.map