(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();new Swiper(".blog__list",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:3,centeredSlides:!0,loop:!0,speed:700,breakpoints:{320:{spaceBetween:8},768:{spaceBetween:32}},effect:"coverflow",coverflowEffect:{rotate:0,slideShadows:!1,depth:50,scale:.8}});(()=>{const e={openModalBtn:document.querySelector("[data-subscribe-open]"),closeModalBtn:document.querySelector("[data-subscribe-close]"),modal:document.querySelector("[data-subscribe]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();(()=>{const o="is_open",l="mobile_menu",d="open_mobile_menu",t="close_mobile_menu",n="navigations__link_mb",a=document.getElementById(l),i=document.getElementById(d),r=document.getElementById(t),u=Array.from(document.getElementsByClassName(n)),s=()=>{a.classList.remove(o)},m=()=>{a.classList.add(o)},p=()=>{window.innerWidth>768&&s()};i.addEventListener("click",m),r.addEventListener("click",s),u.forEach(c=>{c.addEventListener("click",s)}),window.addEventListener("resize",p)})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),contactModal:document.querySelector("[data-modal-contact]"),sendModalBtn:document.querySelector("[data-modal-send]"),thanksModal:document.querySelector("[data-modal-thanks]"),continueModalBtn:document.querySelector("[data-modal-continue]"),modalinputname:document.querySelector(".js-inputname"),modalinputemail:document.querySelector(".js-inputemail"),modalmodelBtndisabled:document.querySelector(".js-toggledisabled")};e.openModalBtn.addEventListener("click",l),e.closeModalBtn.addEventListener("click",l),e.continueModalBtn.addEventListener("click",l),e.sendModalBtn.addEventListener("click",d),e.modalinputname.addEventListener("keyup",o),e.modalinputemail.addEventListener("keyup",o);function o(){let t=e.modalinputname.value,n=e.modalinputemail.value;t==""||n==""?e.modalmodelBtndisabled.disabled=!0:e.modalmodelBtndisabled.disabled=!1}function l(){e.contactModal.classList.remove("hide-contact-modal"),e.thanksModal.classList.remove("show-thanks-modal")}function d(t){t.preventDefault(),e.contactModal.classList.add("hide-contact-modal"),e.thanksModal.classList.toggle("show-thanks-modal")}})();
