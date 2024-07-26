// global dom elements
let body = document.getElementsByTagName('body')[0];
let navItems = document.getElementsByClassName('nav-item');
let overlays = document.getElementsByClassName('overlay');
let contact_item = document.getElementById('contact');
let about_item = document.getElementById('about');
let portofolio_item = document.getElementById('portofolio');
let logo = document.getElementById('logo');
let gallery_modal = document.getElementById('gallery_modal');
let modal_img = document.getElementById('modal_img');

function showGalleryModal(){
  body.classList.add('disable-scroll')
  gallery_modal.classList.remove('d-none');
}

function hideGalleryModal(){
  body.classList.remove('disable-scroll')
  gallery_modal.classList.add('d-none');
}


for(let i=0;i<overlays.length;i++){
  overlays[i].addEventListener('click', ()=>{
    modal_img.src = overlays[i].dataset.src
    showGalleryModal();
  })
}
gallery_modal.addEventListener('click', ()=>{
  hideGalleryModal();
})