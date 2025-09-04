// Aguardar o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll para links de navegação
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header com efeito de transparência ao scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Animação de entrada para elementos ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.sobre-content, .projetos-grid, .contato-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Formulário de contato
    const contactForm = document.querySelector('.contato-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simular delay de envio
            setTimeout(() => {
                submitBtn.textContent = 'Mensagem Enviada!';
                submitBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
                
                // Reset do formulário
                this.reset();
                
                // Restaurar botão após 3 segundos
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(135deg, #4F46E5, #7C3AED)';
                }, 3000);
            }, 2000);
        });
    }

    // Botão de orçamento
    const orcamentoBtn = document.querySelector('.btn-orcamento');
    if (orcamentoBtn) {
        orcamentoBtn.addEventListener('click', function() {
            // Scroll para seção de contato
            const contatoSection = document.querySelector('#contato');
            if (contatoSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = contatoSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Botão "Conheça nossos projetos"
    const projetosBtn = document.querySelector('.hero .btn-primary');
    if (projetosBtn) {
        projetosBtn.addEventListener('click', function() {
            const projetosSection = document.querySelector('#projetos');
            if (projetosSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = projetosSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Efeito hover nos cards de projetos
    const projetoCards = document.querySelectorAll('.projeto-card');
    projetoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito hover nos itens de serviços
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Carrossel sempre em movimento (sem pausa no hover)
    const carrossel = document.querySelector('.carrossel');
    if (carrossel) {
        carrossel.style.animationPlayState = 'running';
    }

    // Adicionar classe ativa ao link de navegação atual
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Atualizar link ativo ao scroll
    window.addEventListener('scroll', updateActiveNavLink);

    // Adicionar estilos para link ativo
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a.active {
            color: #4F46E5 !important;
        }
        .nav-links a.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);

    // Efeito de digitação no título principal (opcional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Aplicar efeito de digitação ao título principal (descomente se quiser)
    // const heroTitle = document.querySelector('.hero h1');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typeWriter(heroTitle, originalText, 150);
    // }

    // Efeito de parallax sutil ao hero (desabilitado para evitar espaços)
    // window.addEventListener('scroll', function() {
    //     const scrolled = window.pageYOffset;
    //     const hero = document.querySelector('.hero');
    //     if (hero) {
    //         // Limitar o efeito parallax para evitar espaços excessivos
    //         const maxScroll = 300; // Limite máximo do scroll
    //         const rate = Math.min(scrolled, maxScroll) * -0.3; // Reduzir a intensidade
    //         hero.style.transform = `translateY(${rate}px)`;
    //     }
    // });

    // Preloader (opcional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // Adicionar efeito de clique nos botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Criar efeito de ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Adicionar estilos para efeito ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Menu hambúrguer para mobile
    const hamburger = document.getElementById('hamburger');
    const mobileNavLinks = document.getElementById('nav-links');
    
    if (hamburger && mobileNavLinks) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            this.classList.toggle('active');
            mobileNavLinks.classList.toggle('active');
            
            // Adicionar/remover classe no body para prevenir scroll e debug
            if (mobileNavLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                document.body.classList.add('menu-open');
            } else {
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinksItems = mobileNavLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileNavLinks.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !mobileNavLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                mobileNavLinks.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            }
        });
        
        // Fechar menu ao redimensionar a tela
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                mobileNavLinks.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Pausar animação do texto rotativo ao hover
    const rotatingText = document.querySelector('.rotating-text');
    if (rotatingText) {
        rotatingText.addEventListener('mouseenter', function() {
            const textLines = this.querySelectorAll('.text-line');
            textLines.forEach(line => {
                line.style.animationPlayState = 'paused';
            });
        });
        
        rotatingText.addEventListener('mouseleave', function() {
            const textLines = this.querySelectorAll('.text-line');
            textLines.forEach(line => {
                line.style.animationPlayState = 'running';
            });
        });
    }

    console.log('VOLCODE - Site carregado com sucesso! 🚀');
}); 