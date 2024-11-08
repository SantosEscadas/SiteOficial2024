// Rolagem

let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
	let scrollTop = window.scrollY
	
	if(scrollTop > 130){
		navBar.classList.add('rolar')
	} else {
		navBar.classList.remove('rolar')
	}
})

// Slide

const slideIndices = {};

function showSlide(slideIndex, sliderId) {
  const slidesContainer = document.querySelector(`#${sliderId} .slides`);
  const slides = slidesContainer.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (!slideIndices[sliderId]) {
    slideIndices[sliderId] = 0;
  }

  slideIndices[sliderId] = (slideIndex + totalSlides) % totalSlides;
  
  slidesContainer.style.transform = `translateX(-${slideIndices[sliderId] * 100}%)`;
}

function moveSlide(direction, sliderId) {
  console.log(`Moving ${sliderId} in direction: ${direction}`);
  showSlide(slideIndices[sliderId] + direction, sliderId);
}

document.querySelectorAll(".slider-container").forEach((slider) => {
  const sliderId = slider.getAttribute("id");
  showSlide(0, sliderId);
});


function showSlide(slideIndex, sliderId) {
  const slidesContainer = document.querySelector(`#${sliderId} .slides`);
  const slides = slidesContainer.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (!slideIndices[sliderId]) {
    slideIndices[sliderId] = 0;
  }

  slideIndices[sliderId] = (slideIndex + totalSlides) % totalSlides;
  slidesContainer.style.transform = `translateX(-${slideIndices[sliderId] * 100}%)`;
  
  const currentSlide = slides[slideIndices[sliderId]].querySelector('img');
  const newHeight = currentSlide.clientHeight;
  slidesContainer.parentElement.style.height = `${newHeight}px`;
}

// Amplia as img do slide

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// scrooll

function scrollToSection(id) {
  const targetElement = document.getElementById(id);
  const offset = 120;

  if (targetElement) {
      window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth"
      });
  }
}

function mostrarCookies() {
  var cookiesMsg = document.getElementById('cokies-msg');
  if (!localStorage.getItem('cookiesMostrados')) {
      cookiesMsg.style.display = 'block';
      localStorage.setItem('cookiesMostrados', true);
  }
}

window.onload = mostrarCookies;

function aceito() {
document.getElementById('cokies-msg').style.display = 'none';

localStorage.setItem('cookiesAceitos', true);
}

window.onload = function() {
if (localStorage.getItem('cookiesAceitos')) {
    document.getElementById('cokies-msg').style.display = 'none';
}
}


let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// leia mais

function toggleTexto() {
  const textoCompleto = document.getElementById("textoCompleto");
  const leiaMaisLink = document.querySelector(".leia-mais-link");

  if (textoCompleto.style.display === "block") {
      textoCompleto.style.display = "none";
      leiaMaisLink.textContent = "Leia mais";
  } else {
      textoCompleto.style.display = "block";
      leiaMaisLink.textContent = "Mostrar menos";
  }
}
