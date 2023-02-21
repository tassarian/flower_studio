(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(n){if(n.ep)return;n.ep=!0;const t=l(n);fetch(n.href,t)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();new Swiper(".blog__list",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:3,centeredSlides:!0,loop:!0,speed:700,breakpoints:{320:{spaceBetween:8},768:{spaceBetween:32}},effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,depth:50,scale:.8}});(()=>{const e={openModalBtn:document.querySelector("[data-subscribe-open]"),closeModalBtn:document.querySelector("[data-subscribe-close]"),modal:document.querySelector("[data-subscribe]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();(()=>{const o="is_open",l="mobile_menu",a="open_mobile_menu",n="close_mobile_menu",t="navigations__link_mb",c=document.getElementById(l),u=document.getElementById(a),h=document.getElementById(n),L=Array.from(document.getElementsByClassName(t)),m=()=>{c.classList.remove(o)},f=()=>{c.classList.add(o)},p=()=>{window.innerWidth>768&&m()};u.addEventListener("click",f),h.addEventListener("click",m),L.forEach(d=>{d.addEventListener("click",m)}),window.addEventListener("resize",p)})();(function(){let e=document;function o(){let c=e.getElementById("anchor1Link"),u=e.getElementById("anchor2Link"),h=e.getElementById("anchor3Link"),L=e.getElementById("anchor4Link"),m=e.getElementById("anchor1Link2"),f=e.getElementById("anchor2Link2"),p=e.getElementById("anchor3Link2"),d=e.getElementById("anchor4Link2"),g=e.getElementById("anchor1"),r=e.getElementById("anchor2"),s=e.getElementById("anchor3"),y=e.getElementById("anchor4");c.addEventListener("click",i=>{t(g,i)},!1),m.addEventListener("click",i=>{t(g,i)},!1),u.addEventListener("click",i=>{t(r,i)},!1),f.addEventListener("click",i=>{t(r,i)},!1),h.addEventListener("click",i=>{t(s,i)},!1),p.addEventListener("click",i=>{t(s,i)},!1),L.addEventListener("click",i=>{t(y.offsetTop,i)},!1),d.addEventListener("click",i=>{t(y.offsetTop,i)},!1),console.log(r),console.log("anchor1: "+l(g)+" / "+a(g)),console.log("anchor2: "+l(r)+" / "+a(r)),console.log("anchor3: "+l(s)+" / "+a(s)),console.log("anchor4: "+l(y)+" / "+a(y)),console.log("App loaded. Have fun!")}function l(c){return c.scrollTop}function a(c){return c.offsetTop}var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(c){window.setTimeout(c,1e3/60)}}();function t(c,u,h=1500){E(c)&&(c=c.offsetTop);function L(s){document.documentElement.scrollTop=s,document.body.parentNode.scrollTop=s,document.body.scrollTop=s}function m(){return document.documentElement.offsetTop||document.body.parentNode.offsetTop||document.body.offsetTop}var f=m(),p=c-f,d=0,g=20;console.log("start:",f),console.log("to:",c),console.log("change:",p);var r=function(){d+=g;var s=Math.easeInOutQuad(d,f,p,h);L(s),d<h?n(r):u&&typeof u=="function"&&u()};r()}o()})();Math.easeInOutQuad=function(e,o,l,a){return e/=a/2,e<1?l/2*e*e+o:(e--,-l/2*(e*(e-2)-1)+o)};Math.easeInCubic=function(e,o,l,a){var n=(e/=a)*e*e;return o+l*n};Math.inOutQuintic=function(e,o,l,a){var n=(e/=a)*e,t=n*e;return o+l*(6*t*n+-15*n*n+10*t)};function E(e){return e instanceof Element}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),contactModal:document.querySelector("[data-modal-contact]"),sendModalBtn:document.querySelector("[data-modal-send]"),thanksModal:document.querySelector("[data-modal-thanks]"),continueModalBtn:document.querySelector("[data-modal-continue]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.continueModalBtn.addEventListener("click",o),e.sendModalBtn.addEventListener("click",l);function o(){e.modal.classList.toggle("is-hidden"),e.contactModal.classList.remove("hide-contact-modal"),e.thanksModal.classList.remove("show-thanks-modal")}function l(a){a.preventDefault(),e.contactModal.classList.add("hide-contact-modal"),e.thanksModal.classList.toggle("show-thanks-modal")}})();
