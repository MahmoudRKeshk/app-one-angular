let body=document.getElementsByTagName("body")[0],navItems=document.getElementsByClassName("nav-item"),overlays=document.getElementsByClassName("overlay"),contact_item=document.getElementById("contact"),about_item=document.getElementById("about"),portofolio_item=document.getElementById("portofolio"),logo=document.getElementById("logo"),gallery_modal=document.getElementById("gallery_modal"),modal_img=document.getElementById("modal_img");function showGalleryModal(){body.classList.add("disable-scroll"),gallery_modal.classList.remove("d-none")}function hideGalleryModal(){body.classList.remove("disable-scroll"),gallery_modal.classList.add("d-none")}for(let e=0;e<overlays.length;e++)overlays[e].addEventListener("click",()=>{modal_img.src=overlays[e].dataset.src,showGalleryModal()});gallery_modal.addEventListener("click",()=>{hideGalleryModal()});
