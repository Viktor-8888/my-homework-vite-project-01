import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as w,S as C,i as s}from"./assets/vendor-maqwXNER.js";import{i}from"./assets/bi_x-octagon-T3Oj8RPW.js";async function m(e,t){return(await w.get("https://pixabay.com/api/",{params:{key:"49187044-c2c4cc5e7c1f3c23966a70411",page:t,per_page:15,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const n=document.querySelector(".gallery"),l=document.querySelector(".hidden");let $=new C(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250,captionsData:"alt"});function o(e){e.forEach(({webformatURL:t,largeImageURL:c,tags:d,likes:b,views:x,comments:S,downloads:L})=>n.insertAdjacentHTML("beforeend",`<li class="gallery-item">
  <a href="${c}" class="gallery-link">
    <img src="${t}" alt="${d}" class="gallery-image" />
    <ul class="gallery-text">
      <li class="gallery-text-item">
        Likes<span class="gallery-span-item">${b}</span>
      </li>
      <li class="gallery-text-item">
        Views<span class="gallery-span-item">${x}</span>
      </li>
      <li class="gallery-text-item">
        Comments<span class="gallery-span-item">${S}</span>
      </li>
      <li class="gallery-text-item">Downloads<span class="gallery-span-item">${L}</span></li>
    </ul>
  </a>
</li>`)),$.refresh()}function v(){n.innerHTML=""}function u(){l.insertAdjacentHTML("afterend",'<span class="loader"></span>')}function y(){const e=document.querySelector(".loader");e&&e.remove()}function p(){l.classList.add("gallery-button")}function h(){l.classList.remove("gallery-button")}function g(){const e=n.querySelector(".gallery-item"),{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,left:0,behavior:"smooth"})}const k=document.querySelector(".form");let a=1,f=15,r="";k.addEventListener("submit",q);l.addEventListener("click",z);async function q(e){try{e.preventDefault(),v(),h(),r=e.currentTarget.elements["search-text"].value.toLowerCase().trim(),e.currentTarget.elements["search-text"].value="",a=1,u();const t=await m(r,a);if(t.hits.length===0){s.error({iconUrl:i,title:"Error",class:"gallery-box",message:`Sorry, there are no images matching your search ${r}. Please try again!
`,position:"topRight",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",titleColor:"#fff"});return}if(a*f<t.totalHits)a+=1,o(t.hits),p();else return o(t.hits),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageSize:"16px"})}catch{s.error({iconUrl:i,title:"Error",class:"gallery-box",message:`Sorry, there are no images matching your search ${r}. Please try again!
`,position:"topRight",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",titleColor:"#fff",timeout:!1})}finally{y()}}async function z(){try{u();const e=await m(r,a);if(a*f<e.totalHits)a+=1,o(e.hits),g(),p();else return o(e.hits),g(),h(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageSize:"16px"})}catch{s.error({iconUrl:i,title:"Error",class:"gallery-box",message:`Sorry, there are no images matching your search ${r}. Please try again!
`,position:"topRight",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",titleColor:"#fff",timeout:!1})}finally{y()}}
//# sourceMappingURL=3-gallery.js.map
