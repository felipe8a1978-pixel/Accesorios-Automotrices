/* ==========================================================================
   BASE DE DATOS DE PRODUCTOS (25 ARTÍCULOS)
   ========================================================================== */
const products = [
    // --- LUCES LED ---
    {
        id: 1,
        title: "Kit Luces LED H7 20,000 Lumens",
        category: "led",
        price: 890,
        badge: "Más Vendido",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
        description: "Iluminación blanca ultra brillante 6500K con sistema de enfriamiento integrado."
    },
    {
        id: 2,
        title: "Tira LED Neón Bajo Chasis RGB",
        category: "led",
        price: 1250,
        badge: "Tuning",
        image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80",
        description: "Control app móvil Bluetooth, resistente al agua IP68 con ritmo audiorítmico."
    },
    {
        id: 3,
        title: "Faros Auxiliares LED Exploradoras",
        category: "led",
        price: 650,
        badge: "Off-Road",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80",
        description: "Par de faros LED para 4x4 y motocicletas con penetración de niebla alta."
    },
    {
        id: 4,
        title: "Kit Focos LED 9006 Canbus Anti-Error",
        category: "led",
        price: 980,
        badge: "Nuevo",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80",
        description: "Compatibles con vehículos modernos sin encender alerta de foco fundido."
    },
    {
        id: 5,
        title: "Luz Ambiental LED Interior Neón",
        category: "led",
        price: 420,
        badge: "Oferta",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
        description: "Fibra óptica para tableros y puertas con selector de colores múltiples."
    },

    // --- AUDIO Y ESTÉREOS ---
    {
        id: 6,
        title: "Estéreo Pantalla Touch 7'' Android Auto/CarPlay",
        category: "audio",
        price: 3450,
        badge: "Top Ventas",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
        description: "Conectividad total con smartphone, Bluetooth 5.0 y entrada para cámara de reversa."
    },
    {
        id: 7,
        title: "Amplificador Subwoofer Clase D 1500W",
        category: "audio",
        price: 2890,
        badge: "Potencia",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
        description: "Potencia pura para graves profundos con procesamiento de audio digital."
    },
    {
        id: 8,
        title: "Bocinas Coaxiales 6.5'' 300W Max",
        category: "audio",
        price: 780,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80",
        description: "Sonido nítido en agudos y medios equilibrados para reemplazo de fábrica."
    },
    {
        id: 9,
        title: "Subwoofer Amplificado Plano 10'' Bajo Asiento",
        category: "audio",
        price: 2600,
        badge: "Compacto",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        description: "Diseño ultradelgado ideal para ahorrar espacio sin perder calidad de bajeo."
    },
    {
        id: 10,
        title: "Set de Medios Open Show 6.5'' + Tweeters",
        category: "audio",
        price: 1950,
        badge: "Pro",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
        description: "Diseñados para sonar extremadamente alto y claro a largas distancias."
    },

    // --- GPS Y SEGURIDAD ---
    {
        id: 11,
        title: "Localizador GPS Satelital con Corta Corriente",
        category: "gps",
        price: 1390,
        badge: "Seguridad",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        description: "Apagado de motor a distancia mediante app móvil y alertas de movimiento."
    },
    {
        id: 12,
        title: "Dashcam Espejo Retrovisor 4K + Cámara Reversa",
        category: "gps",
        price: 1850,
        badge: "HD Dual",
        image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80",
        description: "Grabación continua en bucle frente y trasera con sensor de colisión G."
    },
    {
        id: 13,
        title: "GPS Tracker Magnético Batería 30 Días",
        category: "gps",
        price: 1100,
        badge: "Portátil",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        description: "Sin necesidad de instalación eléctrica, imán de alta fijación."
    },
    {
        id: 14,
        title: "Sistema de Alarma Inteligente Bidireccional",
        category: "gps",
        price: 1750,
        badge: "Anti-Asalto",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80",
        description: "Control con pantalla LCD que vibra e informa el estado exacto del auto."
    },
    {
        id: 15,
        title: "Sensores de Reversa con Pantalla LED",
        category: "gps",
        price: 490,
        badge: "Práctico",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80",
        description: "Detección de obstáculos desde 2.5m con alertas sonoras por proximidad."
    },

    // --- TUNING Y INTERIOR ---
    {
        id: 16,
        title: "Arrancador de Batería Powerbank 20,000mAh",
        category: "tuning",
        price: 1650,
        badge: "Esencial",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=600&q=80",
        description: "Enciende motores V8 sin carga y recarga tus dispositivos USB rápidamente."
    },
    {
        id: 17,
        title: "Compresor de Aire Portátil Digital 150 PSI",
        category: "tuning",
        price: 890,
        badge: "Recomendado",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
        description: "Inflado automático de llantas con paro programable y luz de emergencia."
    },
    {
        id: 18,
        title: "Funda de Volante Deportiva Piel Sintética",
        category: "tuning",
        price: 320,
        badge: "Comfort",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
        description: "Antideslizante con agarre ergonómico y costura roja tipo carrera."
    },
    {
        id: 19,
        title: "Perilla de Palanca de Cambios Racing Carbono",
        category: "tuning",
        price: 450,
        badge: "Estilo",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
        description: "Acabado en fibra de carbono genuina universal para transmisiones manuales."
    },
    {
        id: 20,
        title: "Cargador Carga Rápida USB-C Coche 65W",
        category: "tuning",
        price: 380,
        badge: "Fast Charge",
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80",
        description: "Permite cargar laptops y smartphones a máxima velocidad en ruta."
    },
    {
        id: 21,
        title: "Aspiradora Inalámbrica para Auto 120W",
        category: "tuning",
        price: 690,
        badge: "Limpieza",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        description: "Gran poder de succión con filtro HEPA lavable y accesorios para esquinas."
    },
    {
        id: 22,
        title: "HUD Display Velocímetro en Parabrisas OBD2",
        category: "tuning",
        price: 850,
        badge: "Tech",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        description: "Proyecta velocidad, RPM y temperatura en el cristal sin distraer el frente."
    },
    {
        id: 23,
        title: "Kit Juntas Limpiaparabrisas Silicona SiliconTec",
        category: "tuning",
        price: 290,
        badge: "Durabilidad",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        description: "Limpieza silenciosa y sin marcas incluso durante lluvias torrenciales."
    },
    {
        id: 24,
        title: "Soporte de Celular MagSafe Automático para Rejilla",
        category: "tuning",
        price: 490,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
        description: "Agarre magnético ultra fuerte con carga inalámbrica Qi incluida."
    },
    {
        id: 25,
        title: "Organizador de Cajuela Colgante Impermeable",
        category: "tuning",
        price: 360,
        badge: "Orden",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
        description: "Optimiza espacio sujetándolo a los cabezales traseros."
    }
];

/* ==========================================================================
   ESTADO GLOBAL Y VARIABLES DE LA APLICACIÓN
   ========================================================================== */
let cart = []; // Almacena items seleccionados: {id, title, price, image, quantity}
let currentDiscount = 0; // Porcentaje de descuento activo

// Referencias a elementos del DOM
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');

const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');

const cartItemsContainer = document.getElementById('cart-items');
const cartBadge = document.getElementById('cart-badge');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDiscountEl = document.getElementById('cart-discount');
const discountRow = document.getElementById('discount-row');
const cartTotalEl = document.getElementById('cart-total');

const applyCouponBtn = document.getElementById('apply-coupon-btn');
const couponInput = document.getElementById('coupon-input');
const checkoutBtn = document.getElementById('checkout-btn');

const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutBtn = document.getElementById('close-checkout-btn');
const checkoutForm = document.getElementById('checkout-form');
const checkoutFinalTotal = document.getElementById('checkout-final-total');

const successModal = document.getElementById('success-modal');
const closeSuccessBtn = document.getElementById('close-success-btn');
const orderIdEl = document.getElementById('order-id');

const toastContainer = document.getElementById('toast-container');

/* ==========================================================================
   INICIALIZACIÓN DE LA PÁGINA
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // Renderiza catálogo inicial
    setupEventListeners(); // Asigna eventos a controles
});

/* ==========================================================================
   MÉTODOS DE RENDERIZADO
   ========================================================================== */

// Genera las tarjetas HTML de los productos
function renderProducts(items) {
    productsGrid.innerHTML = '';

    if (items.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-gray); padding: 3rem;">No se encontraron accesorios que coincidan con tu búsqueda.</p>`;
        return;
    }

    items.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="product-badge">${prod.badge}</span>
            <div class="product-img-box">
                <img src="${prod.image}" alt="${prod.title}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(prod.category)}</span>
                <h4 class="product-title">${prod.title}</h4>
                <p class="product-desc">${prod.description}</p>
                <div class="product-bottom">
                    <span class="product-price">$${prod.price.toLocaleString()} MXN</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${prod.id})" aria-label="Agregar al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Devuelve el texto legible de la categoría
function getCategoryName(cat) {
    const categories = {
        led: 'Luces LED',
        audio: 'Audio & Estéreos',
        gps: 'GPS & Seguridad',
        tuning: 'Tuning & Interior'
    };
    return categories[cat] || 'Accesorios';
}

/* ==========================================================================
   LÓGICA DEL CARRITO DE COMPRAS
   ========================================================================== */

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartUI();
    showToast(`"${product.title}" agregado al carrito`);
}

// Cambia la cantidad (+1 / -1)
function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
}

// Elimina producto
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Actualiza el DOM del Carrito (Subtotal, Total, Badge y Lista)
function updateCartUI() {
    // 1. Contador del header
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;

    // 2. Lista de items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-gray); margin-top: 3rem;">
                <i class="fa-solid fa-cart-arrow-down" style="font-size: 3rem; margin-bottom: 1rem; color: var(--border-color);"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <h5>${item.title}</h5>
                    <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()} MXN</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})" aria-label="Eliminar">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    // 3. Totales y Descuentos
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = subtotal * currentDiscount;
    const total = subtotal - discountAmount;

    cartSubtotalEl.textContent = `$${subtotal.toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN`;
    
    if (currentDiscount > 0) {
        discountRow.style.display = 'flex';
        cartDiscountEl.textContent = `-$${discountAmount.toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN`;
    } else {
        discountRow.style.display = 'none';
    }

    cartTotalEl.textContent = `$${total.toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN`;
    checkoutFinalTotal.textContent = cartTotalEl.textContent;
}

/* ==========================================================================
   FILTROS Y BÚSQUEDA
   ========================================================================== */
function filterProducts() {
    const query = searchInput.value.toLowerCase().trim();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

    const filtered = products.filter(product => {
        const matchesCategory = (activeCategory === 'todos') || (product.category === activeCategory);
        const matchesSearch = product.title.toLowerCase().includes(query) || 
                              product.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

/* ==========================================================================
   MENSAJES TOAST DE NOTIFICACIÓN
   ========================================================================== */
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-green"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ==========================================================================
   MANEJO DE EVENTOS
   ========================================================================== */
function setupEventListeners() {
    // Abrir/Cerrar Carrito
    openCartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });

    const closeCart = () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    };

    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Búsqueda dinámica
    searchInput.addEventListener('input', filterProducts);

    // Botones de filtro por categoría
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterProducts();
        });
    });

    // Cupón de descuento
    applyCouponBtn.addEventListener('click', () => {
        const code = couponInput.value.trim().toUpperCase();
        if (code === 'NITRO10') {
            currentDiscount = 0.10; // 10% descuento
            showToast("¡Cupón del 10% de descuento aplicado!");
            updateCartUI();
        } else {
            showToast("Cupón no válido. Intenta con NITRO10");
        }
    });

    // Modal de Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("Tu carrito está vacío. Agrega artículos antes de comprar.");
            return;
        }
        closeCart();
        checkoutModal.classList.add('active');
    });

    closeCheckoutBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });

    // Envío del Formulario de Pago
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulación de procesamiento de pago
        const randomOrder = 'ND-' + Math.floor(100000 + Math.random() * 900000);
        orderIdEl.textContent = `#${randomOrder}`;
        
        checkoutModal.classList.remove('active');
        successModal.classList.add('active');

        // Limpiar carrito tras compra exitosa
        cart = [];
        currentDiscount = 0;
        couponInput.value = '';
        updateCartUI();
    });

    closeSuccessBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
}