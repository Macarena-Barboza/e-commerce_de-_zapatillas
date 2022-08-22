
// ________________________ Carrusel __________________________________

let productPreviewContainer = document.querySelector('.products-preview-container');

document.querySelectorAll('.products .slide .btn').forEach(detailBtn =>{
  detailBtn.onclick = () =>{
    productPreviewContainer.style.display = 'block';
    let name = detailBtn.getAttribute('data-product');
    prodcutPreview.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
       preview.style.display = 'flex';
      };
    });
  };
});

let swipers = new Swiper(".products-slider", {
  loop:true,
  spaceBetween: 20,
  grabCursor:true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
