document.addEventListener('DOMContentLoaded', function() {

    // 1. INICIALIZAÇÃO DO PARTICLES.JS - BACKGROUND TECNOLÓGICO AVANÇADO
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
                    "value": ["#004bad", "#384653", "#e7e8e2"]
                },
                "shape": {
                    "type": ["circle", "triangle", "edge"],
                    "stroke": {
                        "width": 1,
                        "color": "#004bad"
                    },
                    "polygon": {
                        "nb_sides": 6
                    }
                },
                "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.5,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 200,
                    "color": "#004bad",
                    "opacity": 0.3,
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
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
                        "distance": 150,
                        "line_linked": {
                            "opacity": 0.6
                        }
                    },
                    "bubble": {
                        "distance": 300,
                        "size": 8,
                        "duration": 2,
                        "opacity": 0.8,
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

    // 2. EFEITOS TECNOLÓGICOS AVANÇADOS PARA HERO SECTION
    function createAdvancedTechEffects() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        // Criar container para elementos tecnológicos
        const techContainer = document.createElement('div');
        techContainer.className = 'tech-elements-hero';
        heroSection.appendChild(techContainer);

        // Criar elementos de circuito
        for (let i = 0; i < 8; i++) {
            const circuit = document.createElement('div');
            circuit.className = 'tech-element-hero circuit';
            circuit.style.left = Math.random() * 100 + '%';
            circuit.style.animationDelay = Math.random() * 15 + 's';
            circuit.style.animationDuration = (15 + Math.random() * 10) + 's';
            techContainer.appendChild(circuit);
        }

        // Criar elementos de código binário
        for (let i = 0; i < 12; i++) {
            const binary = document.createElement('div');
            binary.className = 'tech-element-hero binary';
            binary.textContent = generateBinaryString(20);
            binary.style.left = Math.random() * 100 + '%';
            binary.style.animationDelay = Math.random() * 15 + 's';
            binary.style.animationDuration = (12 + Math.random() * 8) + 's';
            techContainer.appendChild(binary);
        }

        // Criar linhas de conexão
        for (let i = 0; i < 6; i++) {
            const line = document.createElement('div');
            line.className = 'tech-element-hero connection-line';
            line.style.left = Math.random() * 100 + '%';
            line.style.transform = `rotate(${Math.random() * 360}deg)`;
            line.style.animationDelay = Math.random() * 15 + 's';
            line.style.animationDuration = (10 + Math.random() * 10) + 's';
            techContainer.appendChild(line);
        }

        // Criar nós de dados
        for (let i = 0; i < 15; i++) {
            const node = document.createElement('div');
            node.className = 'tech-element-hero data-node';
            node.style.left = Math.random() * 100 + '%';
            node.style.animationDelay = Math.random() * 15 + 's';
            node.style.animationDuration = (8 + Math.random() * 12) + 's';
            techContainer.appendChild(node);
        }

        // Criar efeito de chuva de código
        const codeRain = document.createElement('div');
        codeRain.className = 'code-rain';
        heroSection.appendChild(codeRain);

        for (let i = 0; i < 10; i++) {
            const codeLine = document.createElement('div');
            codeLine.className = 'code-line';
            codeLine.textContent = generateCodeLine();
            codeLine.style.left = Math.random() * 100 + '%';
            codeLine.style.animationDelay = Math.random() * 12 + 's';
            codeLine.style.animationDuration = (8 + Math.random() * 8) + 's';
            codeRain.appendChild(codeLine);
        }

        // Criar rede de conexões
        const network = document.createElement('div');
        network.className = 'connection-network';
        heroSection.appendChild(network);

        // Criar nós da rede
        const networkNodes = [];
        for (let i = 0; i < 8; i++) {
            const node = document.createElement('div');
            node.className = 'network-node';
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            node.style.left = x + '%';
            node.style.top = y + '%';
            node.style.animationDelay = Math.random() * 3 + 's';
            network.appendChild(node);
            networkNodes.push({element: node, x: x, y: y});
        }

        // Criar linhas conectando os nós
        for (let i = 0; i < networkNodes.length - 1; i++) {
            for (let j = i + 1; j < networkNodes.length; j++) {
                if (Math.random() > 0.7) { // 30% de chance de conexão
                    const line = document.createElement('div');
                    line.className = 'network-line';
                    
                    const node1 = networkNodes[i];
                    const node2 = networkNodes[j];
                    
                    const dx = node2.x - node1.x;
                    const dy = node2.y - node1.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                    
                    line.style.width = distance + '%';
                    line.style.left = node1.x + '%';
                    line.style.top = node1.y + '%';
                    line.style.transform = `rotate(${angle}deg)`;
                    line.style.transformOrigin = '0 50%';
                    line.style.animationDelay = Math.random() * 4 + 's';
                    
                    network.appendChild(line);
                }
            }
        }

        // Criar efeito de holograma
        const hologram = document.createElement('div');
        hologram.className = 'hologram-effect';
        heroSection.appendChild(hologram);

        // Criar linha de scanner
        const scanner = document.createElement('div');
        scanner.className = 'scanner-line';
        heroSection.appendChild(scanner);
    }

    // Função para gerar string binária
    function generateBinaryString(length = 15) {
        let binary = '';
        for (let i = 0; i < length; i++) {
            binary += Math.random() > 0.5 ? '1' : '0';
            if (i % 4 === 3) binary += ' ';
        }
        return binary;
    }

    // Função para gerar linha de código
    function generateCodeLine() {
        const codeSnippets = [
            'function init() { return true; }',
            'const data = await fetch("/api");',
            'if (condition) { execute(); }',
            'let result = process(input);',
            'class TechSystem extends Base {}',
            'import { Component } from "react";',
            'export default function App() {}',
            'const [state, setState] = useState();',
            'useEffect(() => { cleanup(); }, []);',
            'return <div className="tech">{data}</div>'
        ];
        return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    }

    // Inicializar efeitos tecnológicos avançados
    createAdvancedTechEffects();

    // 3. EFEITO DE DIGITAÇÃO APRIMORADO
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const words = [
            "Soluções em TI.",
            "Desenvolvimento Web moderno.",
            "Suporte Técnico.",
        ];
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
                    setTimeout(type, 2500); // Pausa antes de começar a apagar
                    return;
                }
            }
            const typeSpeed = isDeleting ? 40 : 120;
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // 4. ANIMAÇÕES DE SCROLL COM INTERSECTION OBSERVER APRIMORADO
    const animatedElements = document.querySelectorAll('[data-animation]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Adicionar efeito especial para elementos tecnológicos
                if (entry.target.classList.contains('tech-card')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(-5px)';
                    }, 200);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 5. CARROSSEL DE CLIENTES APRIMORADO
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
                intervalId = setInterval(next, 8000);
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
            intervalId = setInterval(next, 8000);
        }
    }

    // 6. MENU MOBILE APRIMORADO
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        // Fechar menu ao clicar em um link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }

    // 7. EFEITOS DE HOVER APRIMORADOS PARA BOTÕES
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 8. EFEITO DE PARALLAX SUTIL PARA HERO
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const techElements = document.querySelector('.tech-elements-hero');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        if (techElements && scrolled < window.innerHeight) {
            techElements.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // 9. EFEITO DE GLITCH OCASIONAL NO TÍTULO
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        setInterval(() => {
            if (Math.random() > 0.95) { // 5% de chance a cada intervalo
                heroTitle.style.textShadow = '2px 0 #004bad, -2px 0 #384653';
                setTimeout(() => {
                    heroTitle.style.textShadow = '0 0 20px rgba(0, 75, 173, 0.1)';
                }, 100);
            }
        }, 2000);
    }

    // 10. ANIMAÇÃO DE ENTRADA PARA ELEMENTOS TECNOLÓGICOS
    setTimeout(() => {
        const techCards = document.querySelectorAll('.tech-card');
        techCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 1000);

    // 11. EFEITO DE RESPIRAÇÃO PARA ELEMENTOS IMPORTANTES
    const importantElements = document.querySelectorAll('.stat-number, .logo-text');
    importantElements.forEach(element => {
        element.style.animation = 'pulse-glow 4s ease-in-out infinite';
    });

    // Adicionar CSS para animação de pulse-glow
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse-glow {
            0%, 100% { 
                text-shadow: 0 0 5px rgba(0, 75, 173, 0.3);
                transform: scale(1);
            }
            50% { 
                text-shadow: 0 0 15px rgba(0, 75, 173, 0.6);
                transform: scale(1.02);
            }
        }
    `;
    document.head.appendChild(style);

    // 12. OTIMIZAÇÃO DE PERFORMANCE
    // Pausar animações quando a aba não está ativa
    document.addEventListener('visibilitychange', () => {
        const techElements = document.querySelectorAll('.tech-element-hero, .code-line, .network-node, .network-line');
        if (document.hidden) {
            techElements.forEach(el => {
                el.style.animationPlayState = 'paused';
            });
        } else {
            techElements.forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    });

    console.log('🚀 Efeitos tecnológicos avançados carregados com sucesso!');
});

