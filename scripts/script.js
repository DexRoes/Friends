// sticky для шапки

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;

        if (scrollTop > 60) {
            // Прокрутка вниз
            header.classList.add('hidden');
            // } else if (scrollTop > lastScrollTop) {
            //     header.classList.add('hidden');
        } else {
            // Прокрутка вверх
            header.classList.remove('hidden');
        }

        // if (scrollTop > lastScrollTop) {
        //     header.classList.add('hidden');
        // } else {
        //     header.classList.remove('hidden');
        // }

        lastScrollTop = scrollTop;
    }
);

// window.addEventListener("scroll", function () {
//     var header = document.querySelector('.header');
//     if (window.pageYOffset > 200) { // Измените значение (200) на позицию, при которой вы хотите скрыть заголовок
//         header.style.top = "-100px"; // Задайте отрицательное значение, чтобы скрыть заголовок
//     } else if (200 > window.pageYOffset) {
//         header.style.top = "-100px"; // Задайте отрицательное значение, чтобы скрыть заголовок
//     } else {
//         header.style.top = "0"; // Верните заголовок на место при скролле наверх
//     }
//     header.style.transition = "top 0.3s ease"; // Добавьте эту строку для установки плавного перехода
// });

// $(document).ready(function () {
//     var scrollTop = $(window).scrollTop();
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > scrollTop && scrollTop > 100) {
//             $("#header").addClass("sticky");
//         } else {
//             $("#header").removeClass("sticky");
//         }
//         scrollTop = $(window).scrollTop();
//     });

// карусель для выбора сезона