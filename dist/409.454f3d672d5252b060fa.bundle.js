"use strict";(self.webpackChunkpure_js_app_starter=self.webpackChunkpure_js_app_starter||[]).push([[409],{9057:function(n,e,t){t.d(e,{o:function(){return s}});var r=t(7294),o=(t(9275),t(6974)),a=t(8704),i=t(7830);function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n){var e,t,l=this,c=n.notes,s=n.setEditModal,d=n.setFormObject,u=n.handleNewNote,m=n.handleDeleteNote,f=(0,o.TH)().pathname,b=function(n){d(n),s(!0)},p=function(n){c.some((function(n){return n.trash}))?m(n):u(A(A({},n),{},{trash:!0}))},E=function(n){c.some((function(n){return n.archive}))?u(A(A({},n),{},{archive:!1})):u(A(A({},n),{},{archive:!0}))},B=function(n){u(A(A({},n),{},{pinned:!n.pinned||!n.pinned}))},C=function(n){c.some((function(n){return n.trash}))&&u(A(A({},n),{},{trash:!1}))};return r.createElement(r.Fragment,null,null!=c&&c.length?r.createElement(r.Fragment,null,(null==c?void 0:c.some((function(n){return n.pinned})))&&r.createElement("h1",{className:"pinned"},"Pinned Notes"),r.createElement("div",{className:"notes"},null==c||null===(e=c.filter((function(n){return n.pinned})))||void 0===e?void 0:e.map((function(n,e){return r.createElement("div",{className:"singlenote",key:n.id,style:{backgroundColor:n.color}},r.createElement("h1",null,n.title),r.createElement("p",null,n.description),n.label&&r.createElement("h2",null,n.label),r.createElement("section",{className:"note__section"},f===a.ve&&r.createElement("button",{className:"btn--icon",onClick:B.bind(l,n)},r.createElement("i",{className:"fa-solid fa-thumbtack ".concat(n.pinned&&"icon__pinned")})),(f===a.ve||f===a.kY||f===a.GP)&&r.createElement("button",{className:"btn--icon",onClick:E.bind(l,n)},r.createElement("i",{className:"fa-solid fa-box-archive"})),(f===a.ve||f===a.R4||f===a.GP)&&r.createElement("button",{className:"btn--icon",onClick:p.bind(l,n)},r.createElement("i",{className:"fa-solid fa-trash"})),f===a.R4&&r.createElement("button",{className:"btn--icon",onClick:C.bind(l,n)},r.createElement("i",{className:"fa-solid fa-arrow-rotate-left"})),(f===a.ve||f===a.GP)&&r.createElement("button",{className:"btn--icon btn--rt",onClick:b.bind(l,n)},r.createElement("i",{className:"fa-solid fa-pencil"}))))}))),r.createElement("div",{className:"notes"},null==c||null===(t=c.filter((function(n){return!n.pinned})))||void 0===t?void 0:t.map((function(n,e){return r.createElement("div",{className:"singlenote",key:n.id,style:{backgroundColor:n.color}},r.createElement("h1",null,n.title),r.createElement("p",null,n.description),n.label&&r.createElement("h2",null,n.label),r.createElement("section",{className:"note__section"},f===a.ve&&r.createElement("button",{className:"btn--icon",onClick:B.bind(l,n)},r.createElement("i",{className:"fa-solid fa-thumbtack"})),(f===a.ve||f===a.kY||f===a.GP)&&r.createElement("button",{className:"btn--icon",onClick:E.bind(l,n)},r.createElement("i",{className:"fa-solid fa-box-archive"})),(f===a.ve||f===a.R4||f===a.GP)&&r.createElement("button",{className:"btn--icon",onClick:p.bind(l,n)},r.createElement("i",{className:"fa-solid fa-trash"})),f===a.R4&&r.createElement("button",{className:"btn--icon",onClick:C.bind(l,n)},r.createElement("i",{className:"fa-solid fa-arrow-rotate-left"})),(f===a.ve||f===a.GP)&&r.createElement("button",{className:"btn--icon btn--rt",onClick:b.bind(l,n)},r.createElement("i",{className:"fa-solid fa-pencil"}))))})))):r.createElement(i.HY,null))}},9409:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r=t(7294),o=t(3379),a=t.n(o),i=t(1392),l=(a()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,t(7830)),A=(t(9275),t(5093)),c=t(4586);function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(n,e)||function(n,e){if(n){if("string"==typeof n)return f(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var b={title:"",description:"",color:"#f3f3f3",label:""};function p(n){var e=n.handleNewNote,t=m((0,r.useState)(!1),2),o=t[0],a=t[1],i=m((0,r.useState)(b),2),l=i[0],s=i[1],f=function(n){var e=n.target,t=e.name,r=e.value;s(d(d({},l),{},u({},t,r)))};return r.createElement(r.Fragment,null,o?r.createElement("div",null,r.createElement("form",{onSubmit:function(n){n.preventDefault(),l.title&&l.description&&e(d(d({},l),{},{id:(0,c.Z)()})),a(!1),s(b)},className:"note",style:{backgroundColor:null==l?void 0:l.color}},r.createElement("input",{type:"text",className:"note__title",placeholder:"Enter Title",name:"title",value:null==l?void 0:l.title,onChange:f}),r.createElement("textarea",{className:"note__textarea",placeholder:"Enter Description",name:"description",value:null==l?void 0:l.description,onChange:f}),r.createElement("input",{type:"text",className:"note__label",placeholder:"Enter Label",name:"label",value:null==l?void 0:l.label,onChange:f}),r.createElement("div",{className:"note__buttons"},r.createElement("section",{className:"color__ctr"},r.createElement("div",{className:"color__tab"}),r.createElement("div",{className:"colors"},A.O9.map((function(n){return r.createElement("span",{key:n.id,className:"color ".concat(n.className),onClick:function(){return s(d(d({},l),{},{color:n.color}))}})})))),r.createElement("button",{className:"btn ".concat(null!=l&&l.title&&null!=l&&l.description?"btn--auth--solid":"btn--cancel--solid"," btn--note"),type:"submit"},null!=l&&l.title&&null!=l&&l.description?"Create":"Close")))):r.createElement("div",{className:"newnote box-shadow",onClick:function(){return a(!0)}},r.createElement("span",null,"Create a note"),r.createElement("span",null,r.createElement("i",{className:"fa-solid fa-plus"}))))}var E=t(9057),B=t(9704),C=t(2704);function g(n){return function(n){if(Array.isArray(n))return x(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||w(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){y(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function k(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(n,e)||w(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(n,e){if(n){if("string"==typeof n)return x(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?x(n,e):void 0}}function x(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function O(){var n=k((0,r.useState)([]),2),e=n[0],t=n[1],o=k((0,r.useState)(!1),2),a=o[0],i=o[1],A=k((0,r.useState)({}),2),c=A[0],s=A[1],d=(0,B.v9)((function(n){return n.auth})),u=d.user,m=d.authLoader,f=(0,B.I0)();(0,r.useEffect)((function(){var n,e=null==u||null===(n=u.notes)||void 0===n?void 0:n.filter((function(n){return!n.trash&&!n.archive}));t(e)}),[u]);var b=function(n){if(e.some((function(e){return e.id===n.id}))){var t=e.reduce((function(e,t){return t.id===n.id?[].concat(g(e),[v({},n)]):[].concat(g(e),[t])}),[]);f((0,C.T)({uid:null==u?void 0:u.uid,note:v(v({},u),{},{notes:t})}))}else f((0,C.T)({uid:null==u?void 0:u.uid,note:v(v({},u),{},{notes:[].concat(g(e),[n])})}))};return r.createElement(r.Fragment,null,a&&r.createElement(l.eB,{setEditModal:i,formObject:c,handleNewNote:b}),r.createElement(l.PI,null,r.createElement("div",{className:"".concat("pending"===m&&"pointerEvents")},r.createElement(p,{handleNewNote:b}),"pending"===m?r.createElement(l.aN,null):r.createElement(E.o,{notes:e,setEditModal:i,setFormObject:s,handleNewNote:b,handleDeleteNote:function(n){var t=e.filter((function(e){return e.id!==n.id}));f((0,C.T)({uid:null==u?void 0:u.uid,note:v(v({},u),{},{notes:t})}))}}))))}},1392:function(n,e,t){var r=t(4015),o=t.n(r),a=t(3645),i=t.n(a),l=t(9087),A=i()(o());A.i(l.Z),A.push([n.id,".pointerEvents {\n  pointer-events: none;\n}\n","",{version:3,sources:["webpack://./src/frontend/pages/homepage/homepage.css"],names:[],mappings:"AAEA;EACE,oBAAoB;AACtB",sourcesContent:["@import '../../../App.css';\n\n.pointerEvents {\n  pointer-events: none;\n}\n"],sourceRoot:""}]),e.Z=A},2502:function(n,e,t){var r=t(4015),o=t.n(r),a=t(3645),i=t.n(a),l=t(9087),A=i()(o());A.i(l.Z),A.push([n.id,"/* New Note */\n.newnote {\n  width: 90%;\n  max-width: 40rem;\n  margin: 1.5rem auto;\n  display: flex;\n  border: 1px solid var(--text);\n  justify-content: space-between;\n  font-size: 1.25rem;\n  border-radius: 5px;\n  padding: 0.75rem 0;\n  color: var(--text);\n  cursor: pointer;\n}\n.newnote span {\n  margin: 0 0.5rem;\n}\n.note {\n  width: 90%;\n  max-width: 40rem;\n  margin: 1.5rem auto;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--text);\n  border-radius: 5px;\n  padding: 0.5rem 0 0;\n}\n.note__title {\n  font-size: 1.25rem;\n  background-color: transparent;\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n}\n.note__label {\n  font-size: 1rem;\n  background-color: transparent;\n  padding: 0.5rem;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid var(--btn--text);\n  margin: 0 0.5rem;\n  width: fit-content;\n}\n.note__textarea {\n  font-size: 1rem;\n  background-color: transparent;\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n  height: 7rem;\n  max-width: 100%;\n  margin: 0.25rem 0;\n  resize: none;\n}\n.color__ctr {\n  position: relative;\n  width: 5rem;\n  height: 2rem;\n}\n.color__tab {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #ff512f, #f09819);\n  cursor: pointer;\n}\n.colors {\n  position: absolute;\n  top: 2rem;\n  border: 2px solid var(--btn--text);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f3f3f3;\n  border-radius: 5px;\n  padding: 0.25rem 0.35rem;\n  display: none;\n}\n.color__tab:hover ~ .colors,\n.colors:hover {\n  display: flex;\n}\n.color {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 1px solid var(--btn--text);\n  margin: 0 0.25rem;\n  cursor: pointer;\n}\n.color.red {\n  background-color: #f28b82;\n}\n.color.green {\n  background-color: #ccff90;\n}\n.color.orange {\n  background-color: #fbbc04;\n}\n.color.blue {\n  background-color: #cbf0f8;\n}\n.color.brown {\n  background-color: #e6c9a8;\n}\n.color.pink {\n  background-color: #fdcfe8;\n}\n.color.yellow {\n  background-color: #fff475;\n}\n.color.purple {\n  background-color: #d7aefb;\n}\n.note__buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.75rem;\n}\n.btn--note,\n.btn--note:hover {\n  padding: 0.5rem 1.5rem;\n  font-weight: 600;\n  font-size: 1.25rem;\n  color: var(--btn--text);\n  border: 2px solid var(--btn--text);\n}\n\n/* Notes */\n.notes {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 1rem 2rem;\n}\n.singlenote {\n  width: 90%;\n  max-width: 25rem;\n  border: 1px solid var(--text);\n  color: var(--btn--text);\n  border-radius: 5px;\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n.singlenote h1 {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.singlenote h2 {\n  margin: 2rem 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 500;\n  border: 1px solid var(--red);\n  width: fit-content;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  background-color: var(--red);\n  color: var(--white);\n}\n.singlenote p {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 1rem 0;\n}\n.note__section i {\n  font-size: 1.05rem;\n  margin: 1rem 1rem 1rem 0.5rem;\n}\n.btn--icon {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n}\n.btn--icon.btn--rt {\n  float: right;\n}\n\n/* Pinned */\n.pinned {\n  font-size: 2rem;\n  color: var(--text);\n  display: block;\n  margin: 1rem 2.5rem;\n  border-bottom: 2px solid var(--text);\n  width: fit-content;\n}\n.icon__pinned {\n  color: var(--tertiary);\n}\n","",{version:3,sources:["webpack://./src/frontend/pages/homepage/newnote.css"],names:[],mappings:"AAEA,aAAa;AACb;EACE,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,aAAa;AACf;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,6DAA6D;EAC7D,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,kCAAkC;EAClC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;EAClB,wBAAwB;EACxB,aAAa;AACf;AACA;;EAEE,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kCAAkC;EAClC,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;AACzB;AACA;;EAEE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA,UAAU;AACV;EACE,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,6BAA6B;EAC7B,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,4BAA4B;EAC5B,kBAAkB;EAClB,wBAAwB;EACxB,mBAAmB;EACnB,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,UAAU;AACZ;AACA;EACE,YAAY;AACd;;AAEA,WAAW;AACX;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,oCAAoC;EACpC,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB",sourcesContent:["@import '../../../App.css';\n\n/* New Note */\n.newnote {\n  width: 90%;\n  max-width: 40rem;\n  margin: 1.5rem auto;\n  display: flex;\n  border: 1px solid var(--text);\n  justify-content: space-between;\n  font-size: 1.25rem;\n  border-radius: 5px;\n  padding: 0.75rem 0;\n  color: var(--text);\n  cursor: pointer;\n}\n.newnote span {\n  margin: 0 0.5rem;\n}\n.note {\n  width: 90%;\n  max-width: 40rem;\n  margin: 1.5rem auto;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--text);\n  border-radius: 5px;\n  padding: 0.5rem 0 0;\n}\n.note__title {\n  font-size: 1.25rem;\n  background-color: transparent;\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n}\n.note__label {\n  font-size: 1rem;\n  background-color: transparent;\n  padding: 0.5rem;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid var(--btn--text);\n  margin: 0 0.5rem;\n  width: fit-content;\n}\n.note__textarea {\n  font-size: 1rem;\n  background-color: transparent;\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n  height: 7rem;\n  max-width: 100%;\n  margin: 0.25rem 0;\n  resize: none;\n}\n.color__ctr {\n  position: relative;\n  width: 5rem;\n  height: 2rem;\n}\n.color__tab {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #ff512f, #f09819);\n  cursor: pointer;\n}\n.colors {\n  position: absolute;\n  top: 2rem;\n  border: 2px solid var(--btn--text);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #f3f3f3;\n  border-radius: 5px;\n  padding: 0.25rem 0.35rem;\n  display: none;\n}\n.color__tab:hover ~ .colors,\n.colors:hover {\n  display: flex;\n}\n.color {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 1px solid var(--btn--text);\n  margin: 0 0.25rem;\n  cursor: pointer;\n}\n.color.red {\n  background-color: #f28b82;\n}\n.color.green {\n  background-color: #ccff90;\n}\n.color.orange {\n  background-color: #fbbc04;\n}\n.color.blue {\n  background-color: #cbf0f8;\n}\n.color.brown {\n  background-color: #e6c9a8;\n}\n.color.pink {\n  background-color: #fdcfe8;\n}\n.color.yellow {\n  background-color: #fff475;\n}\n.color.purple {\n  background-color: #d7aefb;\n}\n.note__buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.75rem;\n}\n.btn--note,\n.btn--note:hover {\n  padding: 0.5rem 1.5rem;\n  font-weight: 600;\n  font-size: 1.25rem;\n  color: var(--btn--text);\n  border: 2px solid var(--btn--text);\n}\n\n/* Notes */\n.notes {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 1rem 2rem;\n}\n.singlenote {\n  width: 90%;\n  max-width: 25rem;\n  border: 1px solid var(--text);\n  color: var(--btn--text);\n  border-radius: 5px;\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n.singlenote h1 {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.singlenote h2 {\n  margin: 2rem 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 500;\n  border: 1px solid var(--red);\n  width: fit-content;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  background-color: var(--red);\n  color: var(--white);\n}\n.singlenote p {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 1rem 0;\n}\n.note__section i {\n  font-size: 1.05rem;\n  margin: 1rem 1rem 1rem 0.5rem;\n}\n.btn--icon {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n}\n.btn--icon.btn--rt {\n  float: right;\n}\n\n/* Pinned */\n.pinned {\n  font-size: 2rem;\n  color: var(--text);\n  display: block;\n  margin: 1rem 2.5rem;\n  border-bottom: 2px solid var(--text);\n  width: fit-content;\n}\n.icon__pinned {\n  color: var(--tertiary);\n}\n"],sourceRoot:""}]),e.Z=A},9275:function(n,e,t){var r=t(3379),o=t.n(r),a=t(2502);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals}}]);
//# sourceMappingURL=409.454f3d672d5252b060fa.bundle.js.map