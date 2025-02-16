import{a as c,S as l,i}from"./assets/vendor-hwdYKDic.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="48879353-852d93d42efc708c69048a712",u="https://pixabay.com/api/";async function m(s){try{return(await c.get(u,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch{return[]}}function f(s){const t=document.getElementById("gallery");if(s.length===0){t.innerHTML="<p>No images found. Try another search.</p>",t.classList.add("visible");return}const o=s.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
        <div class="info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </a>`).join("");t.innerHTML=o,t.classList.add("visible"),new l(".gallery-item").refresh()}document.getElementById("search-form").addEventListener("submit",async s=>{s.preventDefault();const t=document.getElementById("search-input").value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search term!"});return}document.querySelector("header").classList.add("searched"),document.querySelector("main").classList.add("visible");try{const o=await m(t);f(o)}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}});
//# sourceMappingURL=index.js.map
