(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,n,t){e.exports=t(258)},257:function(e,n,t){},258:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(104),o=t.n(c),u=t(107),i=t(13),l=t(6),s=t(57),f=t.n(s),m=t(105),d=t(7),b=t(1),p=t.n(b),h=t(106),v=t.n(h);function g(){var e=Object(l.a)(["\n                list-style: none;\n                padding: 0;\n                margin: 0;\n              "]);return g=function(){return e},e}function E(){var e=Object(l.a)(["\n            margin: 0;\n            padding: 0;\n          "]);return E=function(){return e},e}function j(){var e=Object(l.a)(["\n          flex-grow: 1;\n        "]);return j=function(){return e},e}function k(){var e=Object(l.a)(["\n            margin-left: 20px;\n          "]);return k=function(){return e},e}function O(){var e=Object(l.a)(["\n              margin: 0 20px;\n              padding: 1em 0;\n              display: inline-block;\n            "]);return O=function(){return e},e}function x(){var e=Object(l.a)(["\n          flex-grow: 10;\n        "]);return x=function(){return e},e}function w(){var e=Object(l.a)(["\n        background: ",";\n        color: ",";\n        text-shadow: 1px 1px 2px ",";\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n      "]);return w=function(){return e},e}function C(){var e=Object(l.a)(["\n      display: inline-block;\n      width: 30px;\n      height: 30px;\n      background: ",";\n      border: 1px solid #000;\n    "]);return C=function(){return e},e}var y=function(){var e=Object(m.a)(f.a.mark(function e(){var n,t,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.noopschallenge.com/hexbot");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,r=t.colors,e.abrupt("return",r[0].value);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),N=function(e){var n=e.colour,t=void 0===n?"":n,r=e.onClick,c=void 0===r?function(){}:r;return a.a.createElement("span",{onClick:function(){return c(t)},className:Object(d.a)(C(),t)})},S=function(){var e=Object(r.useState)(""),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),l=Object(i.a)(o,2),s=l[0],f=l[1],m=Object(r.useState)(""),b=Object(i.a)(m,2),h=b[0],C=b[1],S=Object(r.useState)(0),L=Object(i.a)(S,2),R=L[0],B=L[1],D=v()("colours",[]),J=Object(i.a)(D,2),W=J[0],A=J[1];Object(r.useEffect)(function(){y().then(function(e){var n=p()(e),t=n.isLight()?"#000":"#fff",r=n.darken(.4).string();C(t),f(r),c(e)})},[R]);var I=function(e){var n=p()(e),t=n.isLight()?"#000":"#fff",r=n.darken(.4).string();C(t),f(r),c(e)};return t?a.a.createElement("div",{className:Object(d.a)(w(),t,h,s)},a.a.createElement("div",{className:Object(d.a)(x())},a.a.createElement("header",null,a.a.createElement("h1",{className:Object(d.a)(O())},t),a.a.createElement("button",{onClick:function(){A(Array.from(new Set([].concat(Object(u.a)(W),[t]))))}},"Save")," ",a.a.createElement("button",{onClick:function(){B(R+1)}},"Random Colour")),a.a.createElement("article",{className:Object(d.a)(k())},a.a.createElement("p",null,"Darker:"," ",a.a.createElement(N,{colour:p()(t).darken(.1).string(),onClick:function(){return I(p()(t).darken(.1).hex())}})),a.a.createElement("p",null,"Lighter:"," ",a.a.createElement(N,{colour:p()(t).lighten(.1).string(),onClick:function(){return I(p()(t).lighten(.1).hex())}})),a.a.createElement("p",null,"Saturate (10%):"," ",a.a.createElement(N,{colour:p()(t).saturate(.1).string(),onClick:function(){return I(p()(t).saturate(.1).hex())}})),a.a.createElement("p",null,"Desaturate (10%):"," ",a.a.createElement(N,{colour:p()(t).desaturate(.1).string(),onClick:function(){return I(p()(t).desaturate(.1).hex())}})),a.a.createElement("h2",null,"Related Colours"),a.a.createElement("p",null,"Complementary:"," ",a.a.createElement(N,{colour:p()(t).rotate(180).string(),onClick:function(){return I(p()(t).rotate(180).hex())}})),a.a.createElement("p",null,"Triadic Complementary:"," ",a.a.createElement(N,{colour:p()(t).rotate(120).string(),onClick:function(){return I(p()(t).rotate(120).hex())}}),a.a.createElement(N,{colour:p()(t).rotate(-120).string(),onClick:function(){return I(p()(t).rotate(-120).hex())}})))),a.a.createElement("div",{className:Object(d.a)(j())},a.a.createElement("h2",null,"Saved Colours"),a.a.createElement("ul",{className:Object(d.a)(E())},W.map(function(e){return a.a.createElement("li",{key:e,className:Object(d.a)(g())},e," ",a.a.createElement(N,{onClick:function(){return I(e)},colour:e})," ",a.a.createElement("button",{onClick:function(){return function(e){A(W.filter(function(n){return n!==e}))}(e)}},"Remove"))})))):null};t(256),t(257),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,1,2]]]);
//# sourceMappingURL=main.9d0a0e3a.chunk.js.map