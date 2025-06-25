// Función para detectar si un elemento está visible en el viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.about');

  function checkVisibility() {
    if (isInViewport(aboutSection)) {
      aboutSection.classList.add('visible');
      // Una vez visible, podemos eliminar el listener para optimizar
      window.removeEventListener('scroll', checkVisibility);
    }
  }

  window.addEventListener('scroll', checkVisibility);
  // Comprobar al cargar por si ya está visible
  checkVisibility();
});

const galleryItems = document.querySelectorAll('.project-thumb');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const detailTech = document.getElementById('detail-tech');
const detailLink = document.getElementById('detail-link');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const id = parseInt(item.getAttribute('data-id'));
    const project = projects.find(p => p.id === id);
    if (!project) return;

    // Actualizar contenido detalles
    detailTitle.textContent = project.title;
    detailDescription.textContent = project.description;
    detailLink.href = project.link;

    // Limpiar lista de tecnologías
    detailTech.innerHTML = '';
    project.tech.forEach(tech => {
      const li = document.createElement('li');
      li.textContent = tech;
      detailTech.appendChild(li);
    });

    // Actualizar clase active
    galleryItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 200,
      modifier: 1.5,
      slideShadows: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper2 = new Swiper('.mySwiper2', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 200,
      modifier: 1.5,
      slideShadows: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
const swiper3 = new Swiper(".mySwiper3", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1.5,
    slideShadows: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".projects-section3 .swiper-pagination",
    clickable: true,
  },
});