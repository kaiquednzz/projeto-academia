const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// efeito em sequência por seção
document.querySelectorAll('.textos, .box-beneficios, .beneficio, .titulo-container, .planos-container, .cta-container, .localizacao-container, a, li, p, .mapa .contato-container, .contato')
    .forEach(container => {
        container.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.12}s`;
        });
    });