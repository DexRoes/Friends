window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;

        if (scrollTop > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
    }
);

let menu = document.getElementById('open');
let close = document.getElementById("close");

document.getElementById('burger').onclick = function () {
    menu.classList.add('open');
    close.classList.add('open');
    document.body.classList.add('body');
}

document.getElementById('close').onclick = (function () {
    menu.classList.remove('open');
    close.classList.remove('open');
    document.body.classList.remove('body');
});

document.getElementById('bag').onclick = (function () {
    menu.classList.remove('open');
    close.classList.remove('open');
    document.body.classList.remove('body');
})

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Escape") {
        menu.classList.remove('open');
        close.classList.remove('open');
        document.body.classList.remove('body');
    }
});


// карусель для выбора сезона