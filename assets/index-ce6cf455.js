(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=c(n);fetch(n.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}})();new Swiper(".blog__list",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:3,centeredSlides:!0,loop:!0,speed:700,breakpoints:{320:{spaceBetween:8},768:{spaceBetween:32}},effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,depth:50,scale:.8}});(()=>{const e={openModalBtn:document.querySelector("[data-subscribe-open]"),closeModalBtn:document.querySelector("[data-subscribe-close]"),modal:document.querySelector("[data-subscribe]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}})();(()=>{const t="is_open",c="mobile_menu",a="open_mobile_menu",n="close_mobile_menu",o="navigations__link_mb",l=document.getElementById(c),u=document.getElementById(a),p=document.getElementById(n),L=Array.from(document.getElementsByClassName(o)),m=()=>{l.classList.remove(t)},f=()=>{l.classList.add(t)},g=()=>{window.innerWidth>768&&m()};u.addEventListener("click",f),p.addEventListener("click",m),L.forEach(s=>{s.addEventListener("click",m)}),window.addEventListener("resize",g)})();(function(){let e=document;function t(){let l=e.getElementById("anchor1Link"),u=e.getElementById("anchor2Link"),p=e.getElementById("anchor3Link"),L=e.getElementById("anchor4Link"),m=e.getElementById("anchor1Link2"),f=e.getElementById("anchor2Link2"),g=e.getElementById("anchor3Link2"),s=e.getElementById("anchor4Link2"),h=e.getElementById("anchor1"),d=e.getElementById("anchor2"),r=e.getElementById("anchor3"),E=e.getElementById("anchor4");l.addEventListener("click",i=>{o(h,i)},!1),m.addEventListener("click",i=>{o(h,i)},!1),u.addEventListener("click",i=>{o(d,i)},!1),f.addEventListener("click",i=>{o(d,i)},!1),p.addEventListener("click",i=>{o(r,i)},!1),g.addEventListener("click",i=>{o(r,i)},!1),L.addEventListener("click",i=>{o(E.offsetTop,i)},!1),s.addEventListener("click",i=>{o(E.offsetTop,i)},!1),console.log(d),console.log("anchor1: "+c(h)+" / "+a(h)),console.log("anchor2: "+c(d)+" / "+a(d)),console.log("anchor3: "+c(r)+" / "+a(r)),console.log("anchor4: "+c(E)+" / "+a(E)),console.log("App loaded. Have fun!")}function c(l){return l.scrollTop}function a(l){return l.offsetTop}var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(l){window.setTimeout(l,1e3/60)}}();function o(l,u,p=1500){y(l)&&(l=l.offsetTop);function L(r){document.documentElement.scrollTop=r,document.body.parentNode.scrollTop=r,document.body.scrollTop=r}function m(){return document.documentElement.offsetTop||document.body.parentNode.offsetTop||document.body.offsetTop}var f=m(),g=l-f,s=0,h=20;console.log("start:",f),console.log("to:",l),console.log("change:",g);var d=function(){s+=h;var r=Math.easeInOutQuad(s,f,g,p);L(r),s<p?n(d):u&&typeof u=="function"&&u()};d()}t()})();Math.easeInOutQuad=function(e,t,c,a){return e/=a/2,e<1?c/2*e*e+t:(e--,-c/2*(e*(e-2)-1)+t)};Math.easeInCubic=function(e,t,c,a){var n=(e/=a)*e*e;return t+c*n};Math.inOutQuintic=function(e,t,c,a){var n=(e/=a)*e,o=n*e;return t+c*(6*o*n+-15*n*n+10*o)};function y(e){return e instanceof Element}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){console.log(e),e.modal.classList.toggle("is-hidden")}const c={openModa2lBtn:document.querySelector("[data-modal2-open]"),closeModa2lBtn:document.querySelector("[data-modal2-close]"),modal2:document.querySelector("[data-modal2]")};c.openModa2lBtn.addEventListener("click",a),c.closeModa2lBtn.addEventListener("click",a);function a(n){modal2.classList.toggle("show-modal-2"),n.preventDefault()}})();
