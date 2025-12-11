document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем все элементы галереи
    initGallery();
    
    // Инициализируем выпадающее меню (оставляем ваш существующий код)
    initDropdownMenu();
});

function initGallery() {
    // Находим ВСЕ элементы галереи
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    console.log(`Найдено элементов галереи: ${galleryItems.length}`);
    
    galleryItems.forEach(item => {
        // Находим изображение и подпись внутри элемента
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        
        if (!img || !caption) return;
        
        // Устанавливаем базовые стили для контейнера
        item.style.position = 'relative';
        item.style.overflow = 'hidden';
        item.style.flexShrink = '0'; // Важно для flex-контейнеров
        
        // Устанавливаем стили для изображения
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.display = 'block';
        img.style.transition = 'transform 0.4s ease, filter 0.4s ease';
        
        // Устанавливаем стили для подписи (левый нижний угол)
        caption.style.position = 'absolute';
        caption.style.bottom = '15px';
        caption.style.left = '15px';
        caption.style.color = 'white';
        caption.style.fontFamily = 'Arial, Helvetica, sans-serif';
        caption.style.fontSize = '1.1vw';
        caption.style.fontWeight = 'bold';
        caption.style.opacity = '0';
        caption.style.transition = 'opacity 0.4s ease';
        caption.style.zIndex = '2';
        caption.style.textShadow = '1px 1px 3px rgba(0,0,0,0.8)';
        caption.style.pointerEvents = 'none';
        caption.style.transform = 'translateY(20px)';
        
        // Добавляем обработчики событий
        item.addEventListener('mouseenter', function() {
            img.style.filter = 'brightness(0.7)';
            img.style.transform = 'scale(1.05)';
            caption.style.opacity = '1';
            caption.style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', function() {
            img.style.filter = 'brightness(1)';
            img.style.transform = 'scale(1)';
            caption.style.opacity = '0';
            caption.style.transform = 'translateY(20px)';
        });
        
        // Для отладки
        console.log('Инициализирован элемент галереи:', img.src);
    });
}

function initDropdownMenu() {
    // Ваш существующий код для выпадающего меню
    const servicesLink = document.querySelector('a.i[href="index2.html"]');
    if (servicesLink) {
        // Создаем контейнер для выпадающего меню
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menu';
        dropdown.style.position = 'absolute';
        dropdown.style.top = '100%';
        dropdown.style.left = '0';
        dropdown.style.backgroundColor = 'white';
        dropdown.style.padding = '1vw';
        dropdown.style.display = 'none';
        dropdown.style.flexDirection = 'column';
        dropdown.style.gap = '0.5vw';
        dropdown.style.minWidth = '150px';
        dropdown.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        dropdown.style.zIndex = '1001';
        dropdown.style.borderRadius = '4px';
        
        // Создаем пункты меню
        const menuItems = [
            { text: 'Портретная', href: '#' },
            { text: 'Арт-съёмка', href: '#' },
            { text: 'Семейная', href: '#' }
        ];
        
        menuItems.forEach(item => {
            const menuItem = document.createElement('a');
            menuItem.href = item.href;
            menuItem.textContent = item.text;
            menuItem.style.color = 'black';
            menuItem.style.textDecoration = 'none';
            menuItem.style.fontFamily = 'Arial, Helvetica, sans-serif';
            menuItem.style.fontSize = '1vw';
            menuItem.style.padding = '0.5vw 1vw';
            menuItem.style.transition = 'all 0.3s ease';
            menuItem.style.borderRadius = '3px';
            
            menuItem.addEventListener('mouseenter', function() {
                menuItem.style.backgroundColor = '#ff0084';
                menuItem.style.color = 'white';
            });
            
            menuItem.addEventListener('mouseleave', function() {
                menuItem.style.backgroundColor = 'transparent';
                menuItem.style.color = 'black';
            });
            
            dropdown.appendChild(menuItem);
        });
        
        // Обертываем ссылку "УСЛУГИ" в контейнер
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        servicesLink.parentNode.insertBefore(wrapper, servicesLink);
        wrapper.appendChild(servicesLink);
        wrapper.appendChild(dropdown);
        
        // Добавляем обработчики для показа/скрытия меню
        wrapper.addEventListener('mouseenter', function() {
            dropdown.style.display = 'flex';
        });
        
        wrapper.addEventListener('mouseleave', function() {
            dropdown.style.display = 'none';
        });
    }
}
    
    // 2. Функционал для выпадающего меню (остается без изменений)
    const servicesLink = document.querySelector('a.i[href="index2.html"]');
    if (servicesLink) {
        // Создаем контейнер для выпадающего меню
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menu';
        dropdown.style.position = 'absolute';
        dropdown.style.top = '100%';
        dropdown.style.left = '0';
        dropdown.style.backgroundColor = 'white';
        dropdown.style.padding = '1vw';
        dropdown.style.display = 'none';
        dropdown.style.flexDirection = 'column';
        dropdown.style.gap = '0.5vw';
        dropdown.style.minWidth = '150px';
        dropdown.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        dropdown.style.zIndex = '1001';
        dropdown.style.borderRadius = '4px';
        
        // Создаем пункты меню
        const menuItems = [
            { text: 'Портретная', href: 'index2.html' },
            { text: 'Арт', href: '#' },
            { text: 'Семейная', href: '#' }
        ];
        
        menuItems.forEach(item => {
            const menuItem = document.createElement('a');
            menuItem.href = item.href;
            menuItem.textContent = item.text;
            menuItem.style.color = 'black';
            menuItem.style.textDecoration = 'none';
            menuItem.style.fontFamily = 'Arial, Helvetica, sans-serif';
            menuItem.style.fontSize = '1vw';
            menuItem.style.padding = '0.5vw 1vw';
            menuItem.style.transition = 'all 0.3s ease';
            menuItem.style.borderRadius = '3px';
            
            menuItem.addEventListener('mouseenter', function() {
                menuItem.style.backgroundColor = '#ff0084';
                menuItem.style.color = 'white';
            });
            
            menuItem.addEventListener('mouseleave', function() {
                menuItem.style.backgroundColor = 'transparent';
                menuItem.style.color = 'black';
            });
            
            dropdown.appendChild(menuItem);
        });
        
        // Обертываем ссылку "УСЛУГИ" в контейнер
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        servicesLink.parentNode.insertBefore(wrapper, servicesLink);
        wrapper.appendChild(servicesLink);
        wrapper.appendChild(dropdown);
        
        // Добавляем обработчики для показа/скрытия меню
        wrapper.addEventListener('mouseenter', function() {
            dropdown.style.display = 'flex';
        });
        
        wrapper.addEventListener('mouseleave', function() {
            dropdown.style.display = 'none';
        });
    }




    // Слайдер для отзывов
document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsSlider();
});

function initTestimonialsSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButtons = document.querySelectorAll('.slider-arrow.prev');
    const nextButtons = document.querySelectorAll('.slider-arrow.next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    // Функция для показа конкретного слайда
    function showSlide(index) {
        // Скрываем все слайды
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });
        
        // Убираем активный класс у всех индикаторов
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Показываем нужный слайд
        slides[index].classList.add('active');
        setTimeout(() => {
            slides[index].style.opacity = '1';
        }, 10);
        
        // Активируем соответствующий индикатор
        indicators[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Функция для следующего слайда
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // Функция для предыдущего слайда
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }
    
    // Добавляем обработчики для всех кнопок "предыдущий"
    prevButtons.forEach(button => {
        button.addEventListener('click', prevSlide);
    });
    
    // Добавляем обработчики для всех кнопок "следующий"
    nextButtons.forEach(button => {
        button.addEventListener('click', nextSlide);
    });
    
    // Добавляем обработчики для индикаторов
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Автоматическая прокрутка (опционально)
    let slideInterval = setInterval(nextSlide, 8000); // Меняем каждые 8 секунд
    
    // Останавливаем авто-прокрутку при наведении на слайдер
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 8000);
        });
    }
    
    // Обработка клавиатуры
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Инициализация первого слайда
    showSlide(0);
}

