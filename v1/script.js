document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.project-card img').forEach(img => {
    img.src = 'https://placehold.co/800x600/f8f9fa/1a1a1a?text=Tecnicaie';
});

    const metricsSection = document.querySelector('.metrics-section');
    const metricNumbers = document.querySelectorAll('.metric-number');

    let animated = false;

    const startCounterAnimation = () => {
        const duration = 1500;

        metricNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            // Lee data-start; si no está definido, empieza en 0 por defecto
            const start = parseInt(counter.getAttribute('data-start'), 10) || 0;
            const prefix = counter.getAttribute('data-prefix') || '';
            const startTime = performance.now();

            const updateNumber = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);

                // Curva de frenado suave tipo "ease-out"
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                
                // Calcula la posición exacta entre el valor inicial y el final
                const currentVal = Math.floor(start + easeProgress * (target - start));
                counter.textContent = `${prefix}${currentVal}`;

                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    counter.textContent = `${prefix}${target}`;
                }
            };

            requestAnimationFrame(updateNumber);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                startCounterAnimation();
            }
        });
    }, { 
        threshold: 0.40
    });

    if (metricsSection) {
        observer.observe(metricsSection);
    }



    const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Deja de observarlo una vez animado para ahorrar recursos
            revealObserver.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15 // Se activa cuando el 15% del elemento asoma en pantalla
});

revealElements.forEach(el => revealObserver.observe(el));


// --- CONMUTADOR DE VISTAS DE GALERÍA ---
const viewButtons = document.querySelectorAll('.view-btn');
const projectsGrid = document.querySelector('.projects-grid');

if (viewButtons.length > 0 && projectsGrid) {
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Quitar clase 'active' de todos los botones
            viewButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            
            // 2. Activar el botón pulsado
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            
            // 3. Obtener el número de columnas (1, 2, 3 o 4)
            const cols = btn.getAttribute('data-cols');
            
            // 4. Cambiar la clase de la retícula
            projectsGrid.className = `projects-grid cols-${cols}`;
        });
    });
}

});

// ==========================================================================
// BASE DE DATOS LOCAL DE PROYECTOS (12 PLANTILLAS LISTAS PARA RELLENAR)
// ==========================================================================
const projectsData = {
    "1": {
        title: "Título Foto 1",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "2": {
        title: "Título Foto 2",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "3": {
        title: "Título Foto 3",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "4": {
        title: "Título Foto 4",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "5": {
        title: "Título Foto 5",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "6": {
        title: "Título Foto 6",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "7": {
        title: "Título Foto 7",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "8": {
        title: "Título Foto 8",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "9": {
        title: "Título Foto 9",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "10": {
        title: "Título Foto 10",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "11": {
        title: "Título Foto 11",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    },
    "12": {
        title: "Título Foto 12",
        date: "xx/xx/xx",
        description: "Aquí se cargarán los proyectos de TecnicaIE / Santiago Zarazo Torres.",
        images: ["https://placehold.co/800x600/f8f9fa/1a1a1a?text=TecnicaIE"] //AQUI SE PUEDEN PONER MAS IMAGENES RECORDAR
    }
};

// ==========================================================================
// CONTROL DEL MODAL INTERACTIVO CON EFECTO DE APILADO
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const bgCard = document.getElementById('modal-card-bg');
    const bgImg = document.getElementById('modal-img-bg');
    const modalTitle = document.getElementById('modal-title-text');
    const modalDate = document.getElementById('modal-date-text');
    const modalDesc = document.getElementById('modal-desc-text');
    const modalCounter = document.getElementById('modal-counter');
    
    const closeBtn = document.getElementById('modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');

    let currentProject = null;
    let currentImageIndex = 0;

     // --- FOCUS TRAP Y RETORNO DE FOCO ---
    let lastFocusedElement = null;

    function getFocusableElements() {
        return modal.querySelectorAll(
            'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
    }

    function trapFocus(e) {
        if (e.key !== 'Tab') return;

        const focusable = getFocusableElements();
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    // Asignar evento de clic o tecla a cada tarjeta de la galería
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        // Asigna data-id automáticamente si no está definido manualmente en el HTML
        const projectId = card.getAttribute('data-id') || (index + 1).toString();
        card.setAttribute('data-id', projectId);

        card.addEventListener('click', () => {
            openModal(projectId);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(projectId);
            }
        });
    });

   function openModal(id) {
    lastFocusedElement = document.activeElement;
    const htmlCardSrc = cardImageSrc(id);
    

    const rawData = projectsData[id] || {
        title: "Título Foto.",
        date: "xx/xx/xx",
        description: "Descripción no disponible.",
        images: []
    };

    // Copia los datos para no modificar el objeto original
    currentProject = { ...rawData, images: [...(rawData.images || [])] };

    // Asigna automáticamente la ruta del HTML como la primera imagen
    if (htmlCardSrc) {
        if (currentProject.images.length > 0) {
            currentProject.images[0] = htmlCardSrc;
        } else {
            currentProject.images = [htmlCardSrc];
        }
    }

    currentImageIndex = 0;
    updateModalContent();

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', trapFocus);
    closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        document.removeEventListener('keydown', trapFocus);
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    function updateModalContent() {
        if (!currentProject) return;

        const totalImages = currentProject.images.length;

        // Cargar datos de la imagen activa
        modalImg.src = currentProject.images[currentImageIndex];
        modalTitle.textContent = currentProject.title;
        modalDate.textContent = currentProject.date;
        modalDesc.textContent = currentProject.description;
        modalCounter.textContent = `${currentImageIndex + 1} / ${totalImages}`;

        // Lógica para la tarjeta trasera (siguiente foto)
        if (totalImages > 1) {
            const nextIndex = (currentImageIndex + 1) % totalImages;
            bgImg.src = currentProject.images[nextIndex];
            bgCard.style.display = 'block';
        } else {
            bgCard.style.display = 'none';
        }

        // Visibilidad de flechas
        prevBtn.style.display = totalImages > 1 ? 'block' : 'none';
        nextBtn.style.display = totalImages > 1 ? 'block' : 'none';
    }

    function cardImageSrc(id) {
        const card = document.querySelector(`.project-card[data-id="${id}"] img`);
        return card ? card.src : '';
    }

    // Navegación con flechas
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!currentProject) return;
        currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
        updateModalContent();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!currentProject) return;
        currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
        updateModalContent();
    });

    // Cierre
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Teclado (Esc, Flechas)
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;

        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft' && currentProject.images.length > 1) {
            currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
            updateModalContent();
        }
        if (e.key === 'ArrowRight' && currentProject.images.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
            updateModalContent();
        }
    });
});



// --- ANIMACIÓN AUTOMÁTICA DEL CONMUTADOR DE VISTAS ---
document.addEventListener('DOMContentLoaded', () => {
    const viewSelector = document.querySelector('.view-selector');
    if (!viewSelector) return;

    // Crea el indicador verde automáticamente si no existe en el HTML
    let indicator = viewSelector.querySelector('.view-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'view-indicator';
        viewSelector.appendChild(indicator);
    }

    const viewButtons = viewSelector.querySelectorAll('.view-btn');

    // Función para calcular y mover el rectángulo verde
    function updateIndicatorPosition(activeBtn) {
        if (!activeBtn || !indicator) return;

        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const indicatorWidth = indicator.offsetWidth || 31;

        const targetLeft = btnLeft + (btnWidth - indicatorWidth) / 2;
        indicator.style.left = `${targetLeft}px`;
    }

    // Posición inicial al cargar la página
    const initialActive = viewSelector.querySelector('.view-btn.active') || viewButtons[0];
    if (initialActive) {
        setTimeout(() => updateIndicatorPosition(initialActive), 50);
    }

    // Mover al hacer clic
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            updateIndicatorPosition(btn);
        });
    });

  }); // <- Cierra la función DOMContentLoaded de la línea 359

// ==========================================================================
// CONTROL DEL MENÚ MÓVIL
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.menu-close');
    const overlay = document.querySelector('.nav-overlay');
    const navMobile = document.querySelector('.nav-mobile');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Abrir menú
    menuBtn?.addEventListener('click', () => {
        navMobile?.classList.add('active');
        overlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Cerrar menú
    const closeMenu = () => {
        navMobile?.classList.remove('active');
        overlay?.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    // Cerrar menú al hacer clic en un enlace
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});


// ==========================================================================
// CONTROL RESPONSIVE DE VISTAS POR DEFECTO
// ==========================================================================
function setResponsiveDefaultView() {
    const viewButtons = document.querySelectorAll('.view-btn');
    if (viewButtons.length === 0) return;

    // Localizamos los botones exactos leyendo su atributo 'data-cols'
    const btn1 = Array.from(viewButtons).find(btn => btn.getAttribute('data-cols') === '1');
    const btn2 = Array.from(viewButtons).find(btn => btn.getAttribute('data-cols') === '2');

    if (window.innerWidth <= 768) {
        // En móviles y tablets pequeñas (768px o menos): Fuerza la Vista 1
        if (btn1 && !btn1.classList.contains('active')) {
            btn1.click();
        }
    } else if (window.innerWidth <= 1024) {
        // En tablets grandes y portátiles pequeños (1024px o menos): Fuerza la Vista 2
        if (btn2 && !btn2.classList.contains('active')) {
            btn2.click();
        }
    }
}

// Inicialización con ligero retraso para asegurar que el DOM cargó los indicadores
window.addEventListener('load', function() {
    setTimeout(setResponsiveDefaultView, 50);
});

// Reajuste en tiempo real si el usuario redimensiona la ventana
window.addEventListener('resize', setResponsiveDefaultView);

// --- BARRA DE PROGRESO DE SCROLL ---
document.addEventListener('DOMContentLoaded', () => {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${progress}%`;
    }, { passive: true });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            await navigator.clipboard.writeText(btn.dataset.copy);
            const icon = btn.querySelector('.iconify');
            icon.setAttribute('data-icon', 'lucide:check');
            setTimeout(() => icon.setAttribute('data-icon', 'lucide:copy'), 1500);
        });
    });
});