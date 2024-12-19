document.addEventListener('DOMContentLoaded', function() {
    // Существующий код для корзины остается без изменений
    const cartButton = document.getElementById('cartButton');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');

    // Toggle cart modal
    cartButton.addEventListener('click', function() {
        cartModal.classList.toggle('hidden');
    });

    // Close cart modal
    closeCart.addEventListener('click', function() {
        cartModal.classList.add('hidden');
    });

    // Close cart modal when clicking outside
    document.addEventListener('click', function(event) {
        if (!cartModal.contains(event.target) && !cartButton.contains(event.target)) {
            cartModal.classList.add('hidden');
        }
    });

    // Close cart modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            cartModal.classList.add('hidden');
        }
    });

    // Обновленный код для отзывов
    let currentTestimonialIndex = 0;
    const testimonials = [
        {
            text: "Купил семена в TimSeeds и остался очень доволен! Отличный выбор и качество, всё прорастает быстро и без проблем.",
            author: "Роман Морозилкин",
            position: "секретарь",
            image: "img/review1.jpg" // Исправленный путь
        },
        {
            text: "Отличный магазин с широким ассортиментом семян. Рекомендую!",
            author: "Арсен Маркарян",
            position: "садовод",
            image: "img/review2.jpg" // Исправленный путь
        },
        {
            text: "Прекрасное качество семян и отличный сервис. Буду заказывать ещё!",
            author: "Владислав ЛитэнжерВамИлиДваДругому",
            position: "флорист",
            image: "img/review3.jpg" // Исправленный путь
        }
    ];
    

    const testimonialImage = document.getElementById('testimonialImage');
    const testimonialText = document.getElementById('testimonialText');
    const testimonialAuthor = document.getElementById('testimonialAuthor');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonialIndex];
        testimonialImage.src = testimonial.image;
        testimonialText.textContent = testimonial.text;
        testimonialAuthor.textContent = `${testimonial.author}, ${testimonial.position}`;
    }

    arrowLeft.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    arrowRight.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial();
    });

    // Инициализация первого отзыва
    updateTestimonial();
});

// function updateTestimonial() {
//     const testimonial = testimonials[currentTestimonialIndex];
//     console.log("Обновление отзыва:", testimonial); // Отладка
//     testimonialImage.src = testimonial.image;
//     testimonialText.textContent = testimonial.text;
//     testimonialAuthor.textContent = `${testimonial.author}, ${testimonial.position}`;
// }

function initMap() {
    // Координаты центра карты
    const mapCenter = [55.754639, 37.633483];
    
    // Создание карты
    const map = new ymaps.Map('map', {
        center: mapCenter,
        zoom: 13
    });

    // Добавление метки
    const placemark = new ymaps.Placemark(mapCenter, {
        balloonContent: 'TimSeeds'
    });

    map.geoObjects.add(placemark);
}

// Загрузка API Яндекс.Карт
if (typeof ymaps !== 'undefined') {
    ymaps.ready(initMap);
}



// Добавляем новый код для кнопки возврата наверх
document.addEventListener('DOMContentLoaded', function() {
    // Существующий код остается без изменений...

    // Добавляем функционал кнопки возврата наверх
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Показываем/скрываем кнопку в зависимости от прокрутки
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    // Обработчик клика по кнопке
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки
            const headerOffset = 80; // Высота вашего фиксированного заголовка
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    });
});





// Обработчик для кнопки "Назад"
document.querySelector('.back-button').addEventListener('click', function(e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    window.location.href = 'index.html#products'; // Переход на главную страницу
});



