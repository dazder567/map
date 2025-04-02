const cities = [
    {name: 'москва', description: 'Москва - столица России', image: 'image/i.webp'},
    {name: 'Санкт петербург', description: 'Санкт петербург -  культурная столица России', image: 'image/16a6d021-fa55-86cc-4032a88e62f1.jpeg'},
    {name: 'казань', description: 'Казань -  третья столица России', image: 'image/3.jpg'},
    {name: 'Екатеринбург', description: 'Екатеринбург - столица Урала', image: 'image/i(1).webp'},
    {name: 'Краснодар', description: 'Краснодар - южная столица России', image: 'image/S600xU_2x.webp'}
]
const modalDescription = document.getElementById('modal-description')
const markers = document.querySelectorAll('.marker')
const infoBox = document.getElementById('info-box')
const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-description')
const modalImg = document.getElementById('modal-img')
markers.forEach(marker=>{
    marker.addEventListener('mouseover',()=>{
        const city = cities[marker.getAttribute('data-id')]
        infoBox.textContent=city.name
        infoBox.style.top = `${marker.offsetTop - 30}px`; // Смещаем вверх на 30px
        infoBox.style.left = `${marker.offsetLeft}px`; // Позиционируем по горизонтали
        infoBox.classList.add('visible')
    })
    marker.addEventListener('mouseout',()=>{
        infoBox.classList.remove('visible')
    })
    marker.addEventListener('click', () => {
        // Получаем данные о городе, используя атрибут data-id маркера
        const city = cities[marker.getAttribute('data-id')];
    
        // Устанавливаем заголовок, описание и изображение в модальном окне
        modalTitle.textContent = city.name;
        modalDescription.textContent = city.description;
        modalImg.src = city.image;
    
        // Показываем модальное окно, изменяя его display на 'flex'
        modal.style.display = 'flex';
      });

})
function closeModal(event) {
    // Скрываем модальное окно, изменяя его display на 'none'
    modal.style.display = 'none';
  }