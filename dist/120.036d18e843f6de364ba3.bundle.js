"use strict";(self.webpackChunkpure_js_app_starter=self.webpackChunkpure_js_app_starter||[]).push([[120],{5120:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r=t(7294),a=(t(5539),t(6974)),i=t(9711),o=t(8704),s=t(5093),l=t(7830),A=t(9704),u=t(428);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){d(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(n){s=!0,a=n}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function C(){var n=p((0,r.useState)(!1),2),e=n[0],t=n[1],c=p((0,r.useState)({username:"Shrey Pandey",email:"shreyp@gmail.com",password:"Shreypandey27",confirmPassword:"Shreypandey27"}),2),d=c[0],g=c[1],C=p((0,r.useState)(""),2),E=C[0],f=C[1],_=(0,A.I0)(),B=(0,a.s0)(),h=(0,A.v9)((function(n){return n.auth})).authLoader;return r.createElement("div",{className:"signupPage"},"pending"===h?r.createElement(l.aN,null):r.createElement("div",{className:"card authentication shdw"},E.length?r.createElement("h1",{className:"alert text cen sm"},E):"",r.createElement("h1",{className:"lg sb cen xs-s mg-full"},"SIGN UP"),r.createElement("hr",null),r.createElement("form",{action:"#",className:"sm-s"},r.createElement("div",{className:"authentication__input"},r.createElement("label",{htmlFor:"name__signup",className:"label"},"Enter Your Name"),r.createElement("input",{className:"input sm-s",type:"text",name:"name__signup",id:"name__signup",placeholder:"Enter your Name",autoComplete:"off","aria-autocomplete":"none",value:d.username,onChange:function(n){return g(m(m({},d),{},{username:n.target.value}))},onFocus:function(){return f("")}})),r.createElement("div",{className:"authentication__input"},r.createElement("label",{htmlFor:"email__signup",className:"label"},"Enter Your Email ID"),r.createElement("input",{className:"input sm-s",type:"email",name:"email__signup",id:"email__signup",placeholder:"Enter Email",autoComplete:"off","aria-autocomplete":"none",value:d.email,onChange:function(n){return g(m(m({},d),{},{email:n.target.value}))},onFocus:function(){return f("")}})),r.createElement("div",{className:"authentication__input"},r.createElement("label",{htmlFor:"password__signup",className:"label"},"Enter Password"),r.createElement("div",{className:"input__container"},r.createElement("input",{className:"input input__password sm-s",type:e?"text":"password",name:"password__signup",id:"password__signup",autoComplete:"off",placeholder:"Enter Password",value:d.password,onChange:function(n){return g(m(m({},d),{},{password:n.target.value}))},onFocus:function(){return f("")}}),r.createElement("i",{className:"fa-solid fa-eye input__eye",onClick:function(){return t((function(n){return!n}))}}))),r.createElement("div",{className:"authentication__input"},r.createElement("label",{htmlFor:"cnf__password__signup",className:"label"},"Confirm Password"),r.createElement("div",{className:"input__container"},r.createElement("input",{className:"input input__password sm-s",type:"password",name:"cnf__password__signup",id:"cnf__password__signup",autoComplete:"off",placeholder:"Re-enter Password",value:d.confirmPassword,onChange:function(n){return g(m(m({},d),{},{confirmPassword:n.target.value}))},onFocus:function(){return f("")}}))),r.createElement("button",{type:"submit",className:"btn btn--wide btn--auth--solid sb",onClick:function(n){n.preventDefault();var e=d.username,t=d.email,r=d.password;(function(){var n=d.username,e=d.email,t=d.confirmPassword,r=d.password;return e&&r&&t&&n?s.QM.email.test(e)?r.length<8?(f("PASSWROD MUST BE 8 CHARS LONG"),!1):t===r||(f("PASSWROD AND CONFRIM PASSWORD DO NOT MATCH"),!1):(f("ENTER EMAIL IN CORRECT FORMAT"),!1):(f("FILL ALL THE DETAILS IN PROPER FORMAT"),!1)})()&&_((0,u.lx)({username:e,email:t,password:r,navigate:B})).unwrap()}},"SIGN UP")),r.createElement("div",{className:"signin__links"},r.createElement(i.rU,{to:o.OT,className:"already sm"},"Already have an account?"))))}},7473:function(n,e,t){var r=t(4015),a=t.n(r),i=t(3645),o=t.n(i),s=t(9087),l=o()(a());l.i(s.Z),l.push([n.id,"/* Authentication Pages */\n.signupPage {\n  height: 90vh;\n  background-color: var(--background);\n}\n.card.authentication {\n  width: 90%;\n  max-width: 30rem;\n  margin: 2rem auto;\n  background-color: var(--white);\n  color: var(--tertiary);\n  border: 2px solid var(--dismiss);\n}\n.authentication__input {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: 0.5rem 0;\n}\n.input {\n  border-radius: 5px;\n  padding: 0.35rem 0.5rem;\n}\n.label {\n  color: var(--btn--text);\n}\n.forgot {\n  color: var(--btn--text);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.already {\n  color: var(--btn--text);\n  text-decoration: underline;\n}\n.input__error {\n  display: inline-block;\n  color: var(--tag);\n  margin: 0.5rem 0.25rem;\n  font-weight: normal;\n  font-size: 1rem;\n}\n.signin__remember {\n  padding: 0 0.5rem;\n}\n.signin__links {\n  padding: 0 1rem 1rem 1rem;\n}\n.input__container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border: 2px solid var(--primary--light);\n  background-color: var(--white);\n  border-radius: 5px;\n}\n.input.input__password {\n  width: 95%;\n  border: none;\n  padding: 0.35rem 0.5rem;\n}\n.input__eye {\n  color: var(--black);\n}\n.signout__card {\n  margin: 15% auto;\n  padding: 1rem;\n}\n.signout__card__title {\n  font-size: 1.25rem;\n}\n.alert {\n  padding: 0.5rem;\n  margin: 0;\n  border-radius: 5px;\n}\n","",{version:3,sources:["webpack://./src/frontend/pages/authentication/authentication.css"],names:[],mappings:"AAEA,yBAAyB;AACzB;EACE,YAAY;EACZ,mCAAmC;AACrC;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,8BAA8B;EAC9B,sBAAsB;EACtB,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,2BAA2B;EAC3B,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,gBAAgB;AAClB;AACA;EACE,uBAAuB;EACvB,0BAA0B;AAC5B;AACA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uCAAuC;EACvC,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,SAAS;EACT,kBAAkB;AACpB",sourcesContent:["@import '../../../App.css';\n\n/* Authentication Pages */\n.signupPage {\n  height: 90vh;\n  background-color: var(--background);\n}\n.card.authentication {\n  width: 90%;\n  max-width: 30rem;\n  margin: 2rem auto;\n  background-color: var(--white);\n  color: var(--tertiary);\n  border: 2px solid var(--dismiss);\n}\n.authentication__input {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: 0.5rem 0;\n}\n.input {\n  border-radius: 5px;\n  padding: 0.35rem 0.5rem;\n}\n.label {\n  color: var(--btn--text);\n}\n.forgot {\n  color: var(--btn--text);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.already {\n  color: var(--btn--text);\n  text-decoration: underline;\n}\n.input__error {\n  display: inline-block;\n  color: var(--tag);\n  margin: 0.5rem 0.25rem;\n  font-weight: normal;\n  font-size: 1rem;\n}\n.signin__remember {\n  padding: 0 0.5rem;\n}\n.signin__links {\n  padding: 0 1rem 1rem 1rem;\n}\n.input__container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border: 2px solid var(--primary--light);\n  background-color: var(--white);\n  border-radius: 5px;\n}\n.input.input__password {\n  width: 95%;\n  border: none;\n  padding: 0.35rem 0.5rem;\n}\n.input__eye {\n  color: var(--black);\n}\n.signout__card {\n  margin: 15% auto;\n  padding: 1rem;\n}\n.signout__card__title {\n  font-size: 1.25rem;\n}\n.alert {\n  padding: 0.5rem;\n  margin: 0;\n  border-radius: 5px;\n}\n"],sourceRoot:""}]),e.Z=l},5539:function(n,e,t){var r=t(3379),a=t.n(r),i=t(7473);a()(i.Z,{insert:"head",singleton:!1}),i.Z.locals}}]);
//# sourceMappingURL=120.036d18e843f6de364ba3.bundle.js.map