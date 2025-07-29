document.addEventListener('DOMContentLoaded', function() {

    // 1. INICIALIZAÇÃO DO PARTICLES.JS
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#0056b3"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#007bff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // 2. EFEITO DE DIGITAÇÃO
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const words = ["Soluções em TI.", "Desenvolvimento Web.", "Cloud Computing.", "Suporte Técnico."];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;

        function type() {
            currentWord = words[i];
            if (isDeleting) {
                typingTextElement.innerHTML = currentWord.substring(0, j - 1) + '<span class="cursor"></span>';
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i = (i + 1) % words.length;
                }
            } else {
                typingTextElement.innerHTML = currentWord.substring(0, j + 1) + '<span class="cursor"></span>';
                j++;
                if (j === currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, 2000); // Pausa antes de começar a apagar
                    return;
                }
            }
            const typeSpeed = isDeleting ? 50 : 150;
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // 3. ANIMAÇÕES DE SCROLL COM INTERSECTION OBSERVER
    const animatedElements = document.querySelectorAll('[data-animation]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Ativa quando 15% do elemento está visível
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 4. CARROSSEL DE CLIENTES
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const items = carousel.querySelectorAll('.item');
        const indicatorsContainer = carousel.querySelector('.carousel-indicators');
        const nextBtn = carousel.querySelector('.right.carousel-control');
        const prevBtn = carousel.querySelector('.left.carousel-control');
        let currentIndex = 0;
        let intervalId = null;

        function updateCarousel(newIndex, isClick = false) {
            if (isClick) {
                clearInterval(intervalId);
                intervalId = setInterval(next, 7000);
            }

            items[currentIndex].classList.remove('active');
            if (indicatorsContainer.children[currentIndex]) {
                indicatorsContainer.children[currentIndex].classList.remove('active');
            }
            
            currentIndex = newIndex;
            
            items[currentIndex].classList.add('active');
            if (indicatorsContainer.children[currentIndex]) {
                indicatorsContainer.children[currentIndex].classList.add('active');
            }
        }

        function next() {
            const newIndex = (currentIndex + 1) % items.length;
            updateCarousel(newIndex);
        }

        function prev() {
            const newIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel(newIndex, true);
        }

        if (indicatorsContainer) {
            items.forEach((_, index) => {
                const indicator = document.createElement('li');
                indicator.addEventListener('click', () => updateCarousel(index, true));
                indicatorsContainer.appendChild(indicator);
            });
        }

        if(nextBtn) nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % items.length;
            updateCarousel(newIndex, true);
        });
        if(prevBtn) prevBtn.addEventListener('click', prev);

        if (items.length > 0) {
            items[0].classList.add('active');
            if (indicatorsContainer && indicatorsContainer.children[0]) {
                indicatorsContainer.children[0].classList.add('active');
            }
            intervalId = setInterval(next, 7000);
        }
    }


    // 5. MENU MOBILE
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

});