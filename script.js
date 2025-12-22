// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Mobile nav (generic)
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (toggle && navLinks) {
  toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

// FAQ accordion
document.querySelectorAll(".faq-q").forEach(q => {
  q.addEventListener("click", () => q.closest(".faq-item").classList.toggle("open"));
});

// Mobile dropdown support
document.querySelectorAll(".dd > a").forEach(a => {
  a.addEventListener("click", (e) => {
    const dd = a.closest(".dd");
    if (window.matchMedia("(max-width: 860px)").matches) {
      e.preventDefault();
      dd.classList.toggle("open");
    }
  });
});

// Back link support
document.querySelectorAll('[data-i18n="nav.back"]').forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.history.length > 1) {
      e.preventDefault();
      window.history.back();
    }
  });
});

// Demo form submit
document.querySelectorAll("[data-demo-submit]").forEach(button => {
  button.addEventListener("click", () => {
    const form = button.closest("form");
    if (!form) return;
    const status = form.querySelector("[data-demo-status]");
    const fields = Array.from(form.querySelectorAll("input, textarea"));
    const hasValue = fields.some(field => field.value.trim().length > 0);
    if (status) {
      status.textContent = hasValue
        ? "Thanks! This demo form doesn't send yet, but we'll follow up once it's connected."
        : "Add a few quick details so we can respond with the right package.";
    }
  });
});

// Booking calendar toggle
document.querySelectorAll("[data-booking-widget]").forEach(widget => {
  const dateButtons = Array.from(widget.querySelectorAll("[data-booking-date]"));
  const hoursPanel = widget.querySelector("[data-booking-hours]");
  const selectedLabel = widget.querySelector("[data-booking-selected-date]");
  if (!dateButtons.length || !hoursPanel) return;

  let activeDate = null;

  const setHoursVisibility = (isVisible, dateText = "") => {
    hoursPanel.hidden = !isVisible;
    widget.classList.toggle("booking-hours-open", isVisible);
    if (selectedLabel) {
      selectedLabel.textContent = isVisible ? dateText : "";
    }
  };

  setHoursVisibility(false);

  dateButtons.forEach(button => {
    button.addEventListener("click", () => {
      const dateValue = button.dataset.bookingDate || button.textContent.trim();
      if (activeDate === dateValue) {
        button.classList.remove("is-selected");
        activeDate = null;
        setHoursVisibility(false);
        return;
      }

      dateButtons.forEach(btn => btn.classList.remove("is-selected"));
      button.classList.add("is-selected");
      activeDate = dateValue;
      setHoursVisibility(true, dateValue);
    });
  });
});

// Language toggle
const LANGUAGE_STORAGE_KEY = "ng-lang";
const translations = {
  es: {
    "nav.menu": "Menú",
    "nav.products": "Productos ▾",
    "nav.solutions": "Soluciones ▾",
    "nav.pricing": "Precios",
    "nav.templates": "Plantillas",
    "nav.contact": "Contacto",
    "nav.viewWork": "Ver trabajos",
    "nav.getStarted": "Comenzar",
    "nav.home": "Inicio",
    "nav.packages": "Paquetes",
    "nav.work": "Trabajos",
    "nav.quote": "Solicitar presupuesto",
    "nav.back": "← Volver",
    "nav.dropdown.templates.title": "Plantillas",
    "nav.dropdown.templates.desc": "Elige un estilo y lanza rápido.",
    "nav.dropdown.domains.title": "Dominios",
    "nav.dropdown.domains.desc": "Compra o conecta tu dominio.",
    "nav.dropdown.seo.title": "Herramientas SEO",
    "nav.dropdown.seo.desc": "Aparece en Google.",
    "nav.dropdown.marketing.title": "Marketing",
    "nav.dropdown.marketing.desc": "Email + ofertas + embudos.",
    "nav.dropdown.packages.title": "Paquetes",
    "nav.dropdown.packages.desc": "Básico, Growth, Premium.",
    "nav.dropdown.demos.title": "Demos en vivo",
    "nav.dropdown.demos.desc": "Ver ejemplos reales.",
    "nav.dropdown.ads.title": "Lanzar anuncios",
    "nav.dropdown.ads.desc": "Tráfico que convierte.",
    "nav.dropdown.quote.title": "Solicitar presupuesto",
    "nav.dropdown.quote.desc": "Respuesta rápida.",
    "index.hero.kicker": "Para servicios locales, estudios y marcas en crecimiento",
    "index.hero.title": "Lanza un sitio que convierte visitantes en leads en 7 días.",
    "index.hero.body": "Creamos sitios limpios y mobile-first para negocios que necesitan claridad y credibilidad rápido. Si tu sitio actual se siente anticuado o confuso, entregamos un diseño moderno y enfocado en conversión que genera más llamadas, reservas y solicitudes de presupuesto, sin una espera larga.",
    "index.hero.viewPackages": "Ver paquetes",
    "index.hero.seeDemos": "Ver demos en vivo",
    "index.hero.badge.turnaround": "Entrega en 7 días",
    "index.hero.badge.mobile": "Mobile-first",
    "index.hero.badge.fast": "Carga rápida",
    "index.hero.badge.conversion": "Flujo de conversión",
    "index.who.title": "Para quién es",
    "index.who.subtitle": "Un encaje claro ahorra tiempo para ambos lados. Si esto te describe, avanzarás rápido.",
    "index.who.for.tag": "Esto es para",
    "index.who.for.item1": "Negocios de servicios locales que necesitan más llamadas y reservas.",
    "index.who.for.item2": "Dueños lanzando una nueva marca o rebrand y necesitan estar en vivo rápido.",
    "index.who.for.item3": "Estudios y agencias que buscan un look limpio y premium.",
    "index.who.for.item4": "Equipos con una oferta clara y listos para promoverla.",
    "index.who.not.tag": "No es para",
    "index.who.not.item1": "Negocios sin un servicio u oferta clara todavía.",
    "index.who.not.item2": "Proyectos que requieren apps personalizadas pesadas o backends complejos.",
    "index.who.not.item3": "Quienes buscan un DIY de arrastrar y soltar.",
    "index.templates.title": "Empieza con vibra de plantilla",
    "index.templates.body": "Elige un estilo de layout y lo personalizamos para tu negocio. Estos son ejemplos de cómo pueden verse distintas industrias.",
    "index.templates.local.title": "Servicio local",
    "index.templates.local.desc": "Contacto primero, fotos, cotización rápida.",
    "index.templates.store.title": "Tienda online",
    "index.templates.store.desc": "Banner, búsqueda, carrito, grid de productos.",
    "index.templates.premium.title": "Marca premium",
    "index.templates.premium.desc": "Sensación de plataforma, secciones, páginas de prueba.",
    "index.templates.agency.title": "Agencia / estudio",
    "index.templates.agency.desc": "Servicios, casos de estudio, precios.",
    "index.templates.viewDemos": "Ver demos en vivo",
    "index.templates.seePackages": "Ver paquetes",
    "index.domains.title": "Consigue un dominio que se vea serio",
    "index.domains.body": "Un dominio limpio genera confianza. Busca uno o conecta un dominio que ya compraste.",
    "index.domains.search.title": "Buscar un dominio",
    "index.domains.search.desc": "Escribe una idea y te ayudamos a elegir algo limpio y con marca.",
    "index.domains.search.placeholder": "tumarca.com",
    "index.domains.search.action": "Buscar",
    "index.domains.search.helper": "UI demo — manejamos la compra/conexión real en un proyecto cliente.",
    "index.domains.connect.title": "Conectar un dominio existente",
    "index.domains.connect.desc": "Si ya tienes un dominio, podemos apuntarlo a tu nuevo sitio y lanzar limpio.",
    "index.domains.connect.item1": "Guía DNS",
    "index.domains.connect.item2": "Checklist de lanzamiento",
    "index.domains.connect.item3": "QA móvil + velocidad",
    "index.domains.connect.action": "Conectar mi dominio",
    "index.seo.title": "Herramientas SEO para que te encuentren",
    "index.seo.body": "Un sitio hermoso no sirve si nadie lo ve. Creamos páginas estructuradas para Google y personas reales.",
    "index.seo.item1.title": "Estructura limpia",
    "index.seo.item1.desc": "Encabezados, secciones y flujo de contenido que los buscadores entienden.",
    "index.seo.item2.title": "SEO local listo",
    "index.seo.item2.desc": "Ideal para servicios: secciones de ubicación, bloques de confianza y llamados claros.",
    "index.seo.item3.title": "Construcciones rápidas",
    "index.seo.item3.desc": "Páginas rápidas reducen rebote y mejoran conversiones.",
    "index.ads.title": "Lanza anuncios sin desperdiciar dinero",
    "index.ads.body": "Los anuncios funcionan si la landing convierte. Diseñamos el flujo para cumplir la promesa del anuncio.",
    "index.ads.item1.title": "Landing pages",
    "index.ads.item1.desc": "Titular claro, prueba y un formulario/CTA fuerte. Hecho para convertir.",
    "index.ads.item2.title": "Claridad de oferta",
    "index.ads.item2.desc": "Sin secciones confusas. El valor se entiende al instante.",
    "index.ads.item3.title": "Captura de leads",
    "index.ads.item3.desc": "Formularios fáciles de completar en móvil (la mayor victoria).",
    "index.ads.buildLanding": "Construir mi landing",
    "index.ads.pricing": "Precios",
    "index.marketing.title": "Marketing que mantiene clientes",
    "index.marketing.body": "Los builds premium pueden incluir secciones para emails, upsells y storytelling de marca, como las grandes plataformas.",
    "index.marketing.email.title": "Email + ofertas",
    "index.marketing.email.desc": "Captura leads, envía ofertas y genera repetición.",
    "index.marketing.story.title": "Storytelling de marca",
    "index.marketing.story.desc": "Secciones que hacen que tu negocio se vea establecido y valga la pena.",
    "index.marketing.story.item1": "Casos de estudio / páginas de prueba",
    "index.marketing.story.item2": "Páginas de precios que justifican valor",
    "index.marketing.story.item3": "Bloques de confianza, FAQs y CTAs limpios",
    "index.marketing.story.examples": "Ver ejemplos",
    "index.marketing.story.quote": "Solicitar presupuesto",
    "index.why.title": "Por qué elegir NewGen",
    "index.why.subtitle": "Todo lo que necesitas para verte serio desde el día uno, sin relleno.",
    "index.why.item1.title": "Responsive móvil",
    "index.why.item1.desc": "Layouts pensados para convertir primero en móvil.",
    "index.why.item2.title": "Carga rápida",
    "index.why.item2.desc": "Builds ligeros que se sienten premium y rápidos.",
    "index.why.item3.title": "Estructura SEO lista",
    "index.why.item3.desc": "Encabezados y secciones limpias para visibilidad.",
    "index.why.item4.title": "El sitio es tuyo",
    "index.why.item4.desc": "Sin lock-in. Tu sitio, tu contenido, tus assets.",
    "index.why.item5.title": "Diseño moderno",
    "index.why.item5.desc": "Layouts actuales con CTAs claros.",
    "index.why.item6.title": "Soporte + revisiones",
    "index.why.item6.desc": "Afinamos el build final con feedback real.",
    "index.contact.title": "¿Listo para construir?",
    "index.contact.body": "Cuéntame qué haces, tu ciudad y tu objetivo (llamadas, reservas, ventas, etc.). Te recomiendo el mejor paquete.",
    "index.contact.startQuote": "Iniciar presupuesto",
    "index.contact.seePackages": "Ver paquetes",
    "index.contact.liveDemos": "Demos en vivo",
    "packages.nav.logo": "NewGen Digital Studio",
    "packages.hero.kicker": "Elige el nivel que coincide con tus metas",
    "packages.hero.title": "Paquetes creados para resultados reales",
    "packages.hero.body": "Básico = presencia limpia. Growth = captura de leads más fuerte. Premium = experiencia de marca.",
    "packages.hero.quote": "Solicitar presupuesto",
    "packages.hero.viewDemos": "Ver demos",
    "packages.compare.title": "Comparar paquetes",
    "packages.compare.subtitle": "Diferencias claras, resultados claros. La opción intermedia es el mejor balance.",
    "packages.basic.title": "Básico • 1 página",
    "packages.basic.subtitle": "Lanza un sitio de una página limpio que consiga llamadas rápido.",
    "packages.whoFor": "Para quién es",
    "packages.basic.who.item1": "Servicios locales con una oferta principal.",
    "packages.basic.who.item2": "Dueños que necesitan un lanzamiento rápido y profesional.",
    "packages.basic.features.item1": "Hero + servicios + prueba + CTA de contacto",
    "packages.basic.features.item2": "Botones de llamar/texto",
    "packages.basic.features.item3": "Layout mobile-first",
    "packages.basic.demo": "Ver demo Básico",
    "packages.bestValue": "Mejor valor",
    "packages.growth.title": "Growth • 3 páginas",
    "packages.growth.subtitle": "Construye confianza y captura más leads con profundidad.",
    "packages.growth.who.item1": "Dueños listos para más credibilidad y SEO.",
    "packages.growth.who.item2": "Negocios con múltiples servicios u ofertas.",
    "packages.growth.features.item1": "Home + servicios + contacto",
    "packages.growth.features.item2": "FAQ + testimonios + flujo de conversión",
    "packages.growth.features.item3": "Branding consistente entre páginas",
    "packages.growth.demo": "Ver demo Growth",
    "packages.premium.title": "Premium • 6+ páginas",
    "packages.premium.subtitle": "Sitio nivel plataforma que vende trabajos de alto valor.",
    "packages.premium.who.item1": "Marcas que necesitan prueba, precios y autoridad.",
    "packages.premium.who.item2": "Equipos que planean escalar marketing y anuncios.",
    "packages.premium.features.item1": "Home, servicios, trabajo, about, precios, contacto",
    "packages.premium.features.item2": "Secciones de casos y prueba",
    "packages.premium.features.item3": "Sensación de sistema de diseño",
    "packages.premium.demo": "Ver demo Premium",
    "packages.includes.title": "Lo que recibes en cada paquete",
    "packages.includes.subtitle": "Señales de confianza que hacen ver estable a un negocio pequeño.",
    "packages.includes.item1.title": "Responsive móvil",
    "packages.includes.item1.desc": "Hecho para convertir primero en móvil.",
    "packages.includes.item2.title": "Carga rápida",
    "packages.includes.item2.desc": "Páginas ligeras y rápidas que se sienten premium.",
    "packages.includes.item3.title": "Estructura SEO lista",
    "packages.includes.item3.desc": "Encabezados y secciones limpias que ayudan a visibilidad.",
    "packages.includes.item4.title": "El sitio es tuyo",
    "packages.includes.item4.desc": "Sin lock-in ni tarifas ocultas.",
    "packages.includes.item5.title": "Diseño moderno",
    "packages.includes.item5.desc": "Visuales actualizados y CTAs claros.",
    "packages.includes.item6.title": "Soporte + revisiones",
    "packages.includes.item6.desc": "Afinamos el build final con feedback.",
    "work.nav.logo": "NewGen Digital Studio",
    "work.hero.kicker": "La prueba vale más que las promesas",
    "work.hero.title": "Trabajo / Demos en vivo",
    "work.hero.body": "Estas demos muestran diferencias reales en estructura, claridad y flujo de conversión.",
    "work.proof.title": "Prueba: demos en vivo",
    "work.proof.subtitle": "Cada demo es una experiencia completa y creíble, no solo una plantilla.",
    "work.proof.item1.title": "Ofertas claras",
    "work.proof.item1.desc": "Cada sitio explica para quién es y qué entrega.",
    "work.proof.item2.title": "Detalles reales",
    "work.proof.item2.desc": "Ubicaciones, horarios y servicios generan confianza al instante.",
    "work.proof.item3.title": "Listo para convertir",
    "work.proof.item3.desc": "CTAs y formularios guían al visitante a actuar.",
    "work.basic.title": "Demo básico • Coastal Shine Mobile Detailing",
    "work.basic.subtitle": "Una página. CTA fuerte. Visuales limpios. Hecho para generar llamadas y cotizaciones.",
    "work.basic.open": "Abrir Básico",
    "work.growth.title": "Demo Growth • Harbor & Coast Outfitters",
    "work.growth.subtitle": "Tres páginas + grid de productos. Como una marca real de e-commerce.",
    "work.growth.open": "Abrir Growth",
    "work.growth.services": "Página de servicios",
    "work.growth.contact": "Página de contacto",
    "work.premium.title": "Demo Premium • Lumen Creative Studio",
    "work.premium.subtitle": "Seis páginas. Casos de estudio. Estructura de precios. Sensación de plataforma.",
    "work.premium.open": "Abrir Premium",
    "work.premium.pricing": "Precios",
    "work.premium.caseStudies": "Casos de estudio",
    "contact.nav.logo": "NewGen Digital Studio",
    "contact.hero.kicker": "Respuesta rápida • Proceso simple",
    "contact.hero.title": "Solicitar presupuesto",
    "contact.hero.body": "Cuéntanos sobre tu negocio y responderemos con los siguientes pasos. (El formulario es demo; podemos conectarlo a email después.)",
    "contact.hero.call": "Llamar",
    "contact.hero.text": "Texto",
    "contact.hero.email": "Email",
    "contact.form.title": "Detalles del proyecto",
    "contact.form.subtitle": "Formulario rápido, respuesta rápida. Cambia el contacto arriba cuando quieras.",
    "contact.form.name": "Nombre completo",
    "contact.form.contact": "Teléfono o email",
    "contact.form.business": "Nombre del negocio",
    "contact.form.details": "¿Qué necesitas construir y cuál es el objetivo?",
    "contact.form.submit": "Enviar (Demo)",
    "contact.form.helper": "Siguiente mejora: conectar esto a tu bandeja para que envíe mensajes.",
    "contact.next.title": "Qué pasa después",
    "contact.next.item1": "Respuesta dentro de 24 horas en días hábiles.",
    "contact.next.item2": "Sin compromiso — primero te damos una recomendación clara.",
    "contact.next.item3": "Incluye tu ciudad, servicio y plazo para una respuesta más rápida.",
    "footer.copy.newgen": "© 2025 NewGen Digital Studio",
    "demo.basic.brand": "Coastal Shine Mobile Detailing",
    "demo.basic.nav.quote": "Solicitar cotización",
    "demo.basic.hero.kicker": "Detailing móvil • Sur de Florida • servicio 100% móvil",
    "demo.basic.hero.title": "Llega brillante, consigue más reservas y hazlo simple.",
    "demo.basic.hero.body": "Coastal Shine es un equipo de detailing móvil en el sur de Florida que atiende Miami-Dade y Broward. Vamos a tu casa u oficina con todo lo necesario para restaurar, proteger y refrescar tu vehículo.",
    "demo.basic.hero.request": "Solicitar cotización",
    "demo.basic.hero.call": "Llamar",
    "demo.basic.hero.text": "Texto",
    "demo.basic.services.title": "Lo que hacemos",
    "demo.basic.services.subtitle": "Detailing móvil y protección de pintura para conductores ocupados.",
    "demo.basic.services.item1.title": "Detalle interior completo",
    "demo.basic.services.item1.desc": "Limpieza profunda, shampoo y eliminación de olores.",
    "demo.basic.services.item2.title": "Lavado exterior + cera",
    "demo.basic.services.item2.desc": "Lavado a mano, clay y protección para brillo.",
    "demo.basic.services.item3.title": "Corrección de pintura",
    "demo.basic.services.item3.desc": "Elimina remolinos y rayas leves para más brillo.",
    "demo.basic.packages.title": "Servicios",
    "demo.basic.packages.subtitle": "Paquetes transparentes con resultados claros.",
    "demo.basic.packages.item1.title": "Detalle exprés",
    "demo.basic.packages.item1.desc": "Refresco de 60–90 minutos para autos diarios.",
    "demo.basic.packages.item2.title": "Interior profundo",
    "demo.basic.packages.item2.desc": "Asientos, alfombras y molduras limpias y protegidas.",
    "demo.basic.packages.item3.title": "Brillo y protección",
    "demo.basic.packages.item3.desc": "Lavado a mano, decontaminación y cera premium.",
    "demo.basic.packages.item4.title": "Reinicio total",
    "demo.basic.packages.item4.desc": "Interior + exterior, más corrección ligera.",
    "demo.basic.details.area.title": "Zona de servicio",
    "demo.basic.details.area.desc": "Miami, Fort Lauderdale y alrededores del sur de Florida.",
    "demo.basic.details.hours.title": "Horario",
    "demo.basic.details.hours.desc": "Lun–Sáb: 8am–6pm • Domingo: con cita.",
    "demo.basic.form.title": "Solicitar cotización",
    "demo.basic.form.subtitle": "Cuéntanos tu vehículo y ubicación y confirmaremos disponibilidad.",
    "demo.basic.form.name": "Nombre completo",
    "demo.basic.form.contact": "Teléfono o email",
    "demo.basic.form.service": "Servicio necesario",
    "demo.basic.form.city": "Ciudad",
    "demo.basic.form.details": "Cuéntanos qué buscas…",
    "demo.basic.form.submit": "Enviar (Demo)",
    "demo.basic.form.helper": "Siguiente paso: conectarlo a email para que envíe.",
    "demo.basic.next.title": "Qué pasa después",
    "demo.basic.next.item1": "Respondemos en 24 horas con disponibilidad y rango de precio.",
    "demo.basic.next.item2": "Sin compromiso — primero confirmamos tus necesidades.",
    "demo.basic.next.item3": "Incluye tipo de vehículo, ubicación y horario preferido.",
    "demo.basic.footer": "© 2025 Coastal Shine Mobile Detailing • Demo by NewGen",
    "demo.growth.banner": "VENTA NAVIDEÑA — 25% OFF SIN CÓDIGO • VENTA NAVIDEÑA — 25% OFF SIN CÓDIGO • VENTA NAVIDEÑA — 25% OFF SIN CÓDIGO • VENTA NAVIDEÑA — 25% OFF SIN CÓDIGO • VENTA NAVIDEÑA — 25% OFF SIN CÓDIGO • VENTA NAVIDEÑA — 25% OFF SIN CÓDIGO •",
    "demo.growth.brand": "Harbor & Coast Outfitters",
    "demo.growth.nav.shopAll": "Comprar todo",
    "demo.growth.nav.track": "Rastrear pedido",
    "demo.growth.search.placeholder": "Buscar productos…",
    "demo.growth.actions.account": "Cuenta",
    "demo.growth.actions.cart": "Carrito",
    "demo.growth.hero.kicker": "Lifestyle costero • Fort Lauderdale, FL",
    "demo.growth.hero.title": "Esenciales costeros para vivir en Florida.",
    "demo.growth.hero.body": "Desde Fort Lauderdale, diseñamos ropa y accesorios para fines de semana costeros. Inicio + Comprar todo + Rastrear pedido + Contacto le da a la marca sensación de tienda real.",
    "demo.growth.hero.shopAll": "Comprar todo",
    "demo.growth.hero.track": "Rastrear pedido",
    "demo.growth.why.title": "Por qué se siente real",
    "demo.growth.why.subtitle": "Detalles reales + UX de tienda = confianza inmediata.",
    "demo.growth.why.item1.title": "Historia local",
    "demo.growth.why.item1.desc": "Equipo inspirado en fines de semana oceánicos de Fort Lauderdale.",
    "demo.growth.why.item2.title": "Horario de soporte",
    "demo.growth.why.item2.desc": "Lun–Vie: 9am–5pm EST • support@harborcoast.co",
    "demo.growth.why.item3.title": "Página de tracking",
    "demo.growth.why.item3.desc": "Actualizaciones autoservicio que reducen emails de soporte.",
    "demo.growth.shop.title": "Comprar todo",
    "demo.growth.shop.subtitle": "Ropa costera y equipo de viaje diseñados en Fort Lauderdale.",
    "demo.growth.shop.item1.kicker": "Gorra",
    "demo.growth.shop.item1.title": "Marina Classic Cap",
    "demo.growth.shop.item2.kicker": "Gorra",
    "demo.growth.shop.item2.title": "Midnight Harbor Cap",
    "demo.growth.shop.item3.kicker": "Accesorios",
    "demo.growth.shop.item3.title": "Harbor Tote",
    "demo.growth.shop.item4.kicker": "Camiseta",
    "demo.growth.shop.item4.title": "Coastline Tee",
    "demo.growth.shop.item5.kicker": "Hoodie",
    "demo.growth.shop.item5.title": "Seabreeze Hoodie",
    "demo.growth.shop.item6.kicker": "Paquete",
    "demo.growth.shop.item6.title": "Weekend Starter Pack",
    "demo.growth.shop.track": "Rastrear pedido",
    "demo.growth.contact.title": "Contacto",
    "demo.growth.contact.subtitle": "Equipo de soporte en Fort Lauderdale • Lun–Vie 9am–5pm EST.",
    "demo.growth.contact.form.name": "Nombre",
    "demo.growth.contact.form.email": "Email",
    "demo.growth.contact.form.order": "Número de pedido (opcional)",
    "demo.growth.contact.form.help": "¿Cómo podemos ayudar?",
    "demo.growth.contact.form.submit": "Enviar (Demo)",
    "demo.growth.contact.form.helper": "Siguiente paso: conectar este formulario a email para que envíe.",
    "demo.growth.contact.next.title": "Qué pasa después",
    "demo.growth.contact.next.item1": "Respondemos en 1 día hábil con una actualización.",
    "demo.growth.contact.next.item2": "Sin compromiso — primero confirmamos los detalles del pedido.",
    "demo.growth.contact.next.item3": "Incluye tu número de pedido y ZIP de envío para ayuda rápida.",
    "demo.growth.contact.faq1.q": "¿Dónde está mi pedido? <span>+</span>",
    "demo.growth.contact.faq1.a": "Usa Rastrear pedido para la actualización más rápida.",
    "demo.growth.contact.faq2.q": "Devoluciones e intercambios <span>+</span>",
    "demo.growth.contact.faq2.a": "Devuelve dentro de 14 días si no se usó y está en empaque original.",
    "demo.growth.contact.faq3.q": "Tiempo de envío <span>+</span>",
    "demo.growth.contact.faq3.a": "La mayoría de pedidos se envían en 2–5 días hábiles.",
    "demo.growth.track.title": "Rastrear tu pedido",
    "demo.growth.track.subtitle": "Ingresa los detalles para una actualización en tiempo real.",
    "demo.growth.track.form.order": "Número de pedido",
    "demo.growth.track.form.email": "Email usado en el checkout",
    "demo.growth.track.form.submit": "Rastrear (Demo)",
    "demo.growth.track.form.helper": "Siguiente paso: conectar a un proveedor real de tracking.",
    "demo.growth.track.item1.title": "Soporte rápido",
    "demo.growth.track.item1.desc": "La página reduce mensajes de “¿dónde está mi pedido?”.",
    "demo.growth.track.item2.title": "Más confianza",
    "demo.growth.track.item2.desc": "Las páginas de soporte aumentan la confianza de compra.",
    "demo.growth.track.item3.title": "Flujo más limpio",
    "demo.growth.track.item3.desc": "Clientes se autoatienden antes de contactar.",
    "demo.growth.footer": "© 2025 Harbor & Coast Outfitters • Demo by NewGen",
    "demo.premium.brand": "Lumen Creative Studio",
    "demo.premium.nav.templates.title": "Plantillas",
    "demo.premium.nav.templates.desc": "Explora varios estilos.",
    "demo.premium.nav.domains.title": "Dominios",
    "demo.premium.nav.domains.desc": "Compra o conecta uno.",
    "demo.premium.nav.seo.title": "SEO",
    "demo.premium.nav.seo.desc": "Aparece en Google.",
    "demo.premium.nav.marketing.title": "Marketing",
    "demo.premium.nav.marketing.desc": "Genera repetición.",
    "demo.premium.nav.services.title": "Servicios",
    "demo.premium.nav.services.desc": "Qué incluye.",
    "demo.premium.nav.caseStudies.title": "Casos de estudio",
    "demo.premium.nav.caseStudies.desc": "Páginas de prueba.",
    "demo.premium.nav.pricing.title": "Precios",
    "demo.premium.nav.pricing.desc": "Claridad de valor.",
    "demo.premium.nav.start.title": "Inicio",
    "demo.premium.nav.start.desc": "Intake de proyecto.",
    "demo.premium.nav.viewProof": "Ver prueba",
    "demo.premium.nav.servicesLink": "Servicios",
    "demo.premium.nav.proof": "Prueba",
    "demo.premium.hero.kicker": "Estudio web + marca en Miami",
    "demo.premium.hero.title": "Diseño web premium para marcas en crecimiento en Florida.",
    "demo.premium.hero.body": "Lumen Creative Studio es un estudio web y de marca en Miami. Construimos sitios multipágina con navegación clara, visuales fuertes y estructura lista para lanzamiento para que tu negocio se vea establecido desde el día uno.",
    "demo.premium.hero.browse": "Explorar plantillas",
    "demo.premium.hero.domain": "Encontrar dominio",
    "demo.premium.hero.pricing": "Ver precios",
    "demo.premium.hero.badge1": "Miami, FL",
    "demo.premium.hero.badge2": "Listo para lanzamiento",
    "demo.premium.hero.badge3": "Enfocado en conversión",
    "demo.premium.hero.badge4": "Builds multipágina",
    "demo.premium.templates.title": "Industrias que atendemos",
    "demo.premium.templates.subtitle": "Un estudio premium muestra rango. Estos ejemplos muestran cómo adaptamos el diseño.",
    "demo.premium.templates.item1.title": "Servicios profesionales",
    "demo.premium.templates.item1.desc": "Autoridad + confianza + CTAs limpios.",
    "demo.premium.templates.item2.title": "Tienda online",
    "demo.premium.templates.item2.desc": "Productos + flujo de conversión.",
    "demo.premium.templates.item3.title": "Marca premium",
    "demo.premium.templates.item3.desc": "Storytelling + páginas de prueba.",
    "demo.premium.templates.item4.title": "Estudio creativo",
    "demo.premium.templates.item4.desc": "Servicios + trabajo + precios.",
    "demo.premium.templates.caseStudies": "Ver casos de estudio",
    "demo.premium.templates.services": "Servicios",
    "demo.premium.domains.title": "Dominios + soporte de lanzamiento",
    "demo.premium.domains.subtitle": "Un dominio limpio y soporte de lanzamiento hacen que la marca se vea establecida.",
    "demo.premium.domains.search.title": "Buscar un dominio",
    "demo.premium.domains.search.desc": "Ingresa una idea de nombre y te ayudamos a elegir algo con marca.",
    "demo.premium.domains.search.placeholder": "tumarca.com",
    "demo.premium.domains.search.action": "Buscar",
    "demo.premium.domains.search.helper": "UI demo — la configuración real ocurre en el build del cliente.",
    "demo.premium.domains.connect.title": "Conectar un dominio existente",
    "demo.premium.domains.connect.desc": "Si ya compraste uno, lo conectamos y lanzamos el sitio.",
    "demo.premium.domains.connect.item1": "Pasos DNS",
    "demo.premium.domains.connect.item2": "Checklist de lanzamiento",
    "demo.premium.domains.connect.item3": "QA final",
    "demo.premium.domains.connect.action": "Conectar mi dominio",
    "demo.premium.seo.title": "Base SEO",
    "demo.premium.seo.subtitle": "Paquetes premium incluyen estructura para rankear: secciones limpias y velocidad.",
    "demo.premium.seo.item1.title": "Estructura limpia",
    "demo.premium.seo.item1.desc": "Encabezados + secciones que tienen sentido para usuarios y buscadores.",
    "demo.premium.seo.item2.title": "SEO local listo",
    "demo.premium.seo.item2.desc": "Ideal para servicios con enfoque local.",
    "demo.premium.seo.item3.title": "Velocidad manda",
    "demo.premium.seo.item3.desc": "Páginas rápidas convierten mejor y reducen rebote.",
    "demo.premium.ads.title": "Landings para anuncios",
    "demo.premium.ads.subtitle": "Los anuncios necesitan una landing que cumpla la oferta. Premium incluye páginas que convierten tráfico.",
    "demo.premium.ads.item1.title": "Landing pages",
    "demo.premium.ads.item1.desc": "Layout enfocado con CTA claro y bloques de prueba.",
    "demo.premium.ads.item2.title": "Claridad de oferta",
    "demo.premium.ads.item2.desc": "Sin relleno. El valor se entiende al instante.",
    "demo.premium.ads.item3.title": "Captura de leads",
    "demo.premium.ads.item3.desc": "Flujo de formulario mobile-friendly (gran victoria).",
    "demo.premium.ads.start": "Iniciar",
    "demo.premium.marketing.title": "Secciones listas para marketing",
    "demo.premium.marketing.subtitle": "Sitios premium muestran profundidad: email offers, upsells y storytelling.",
    "demo.premium.marketing.email.title": "Email + ofertas",
    "demo.premium.marketing.email.desc": "Captura leads, envía ofertas y genera repetición.",
    "demo.premium.marketing.proof.title": "Páginas de prueba + precios",
    "demo.premium.marketing.proof.desc": "Casos y precios justifican valor e incrementan cierres.",
    "demo.premium.marketing.proof.item1": "Casos de estudio (Problema → Solución → Resultado)",
    "demo.premium.marketing.proof.item2": "Claridad de precios",
    "demo.premium.marketing.proof.item3": "Bloques de confianza + FAQs",
    "demo.premium.marketing.proof.cta": "Ver prueba",
    "demo.premium.next.title": "Siguientes pasos",
    "demo.premium.next.subtitle": "¿Listo para un build premium? Igualamos el resto de páginas al mismo sistema.",
    "demo.premium.next.services": "Servicios",
    "demo.premium.next.caseStudies": "Casos de estudio",
    "demo.premium.next.start": "Iniciar",
    "demo.premium.services.hero.kicker": "Servicios premium • Miami, FL",
    "demo.premium.services.hero.title": "Todo lo que necesitas para verte establecido online.",
    "demo.premium.services.hero.body": "Lumen entrega diseño web de alto nivel, soporte de lanzamiento y estructura lista para convertir.",
    "demo.premium.services.hero.start": "Iniciar proyecto",
    "demo.premium.services.hero.pricing": "Ver precios",
    "demo.premium.services.hero.caseStudies": "Casos de estudio",
    "demo.premium.services.build.title": "Construcción de sitio",
    "demo.premium.services.build.subtitle": "Layout de alto nivel, componentes consistentes y flujo limpio entre páginas.",
    "demo.premium.services.build.item1.title": "Sensación de sistema",
    "demo.premium.services.build.item1.desc": "Botones, espacios, tipografía y componentes consistentes.",
    "demo.premium.services.build.item2.title": "Estructura de 6+ páginas",
    "demo.premium.services.build.item2.desc": "Home, servicios, about, trabajo, precios, contacto.",
    "demo.premium.services.build.item3.title": "Flujo de conversión",
    "demo.premium.services.build.item3.desc": "Cada página empuja al siguiente paso sin ser invasiva.",
    "demo.premium.services.domains.title": "Dominios + lanzamiento",
    "demo.premium.services.domains.subtitle": "Premium incluye guía de lanzamiento para verse profesional.",
    "demo.premium.services.domains.buy.title": "Comprar o conectar dominio",
    "demo.premium.services.domains.buy.desc": "Te guiamos en la elección y configuración del dominio.",
    "demo.premium.services.domains.buy.placeholder": "tumarca.com",
    "demo.premium.services.domains.buy.action": "Comprobar",
    "demo.premium.services.domains.buy.helper": "UI demo — la configuración real ocurre en el build del cliente.",
    "demo.premium.services.domains.checklist.title": "Checklist de lanzamiento",
    "demo.premium.services.domains.checklist.desc": "Lanzamiento profesional = menos problemas y más confianza.",
    "demo.premium.services.domains.checklist.item1": "QA móvil",
    "demo.premium.services.domains.checklist.item2": "Revisiones de rendimiento",
    "demo.premium.services.domains.checklist.item3": "Pruebas de links + formularios",
    "demo.premium.services.domains.checklist.item4": "Revisión final lista para vender",
    "demo.premium.services.domains.checklist.action": "Lanzar mi sitio",
    "demo.premium.services.seo.title": "SEO + analíticas listo",
    "demo.premium.services.seo.subtitle": "Estructura pensada para Google y personas: claridad y velocidad.",
    "demo.premium.services.seo.item1.title": "Estructura amigable",
    "demo.premium.services.seo.item1.desc": "Páginas organizadas para rastrear y leer fácilmente.",
    "demo.premium.services.seo.item2.title": "SEO local",
    "demo.premium.services.seo.item2.desc": "Ideal para servicios con enfoque en ciudad/área.",
    "demo.premium.services.seo.item3.title": "Mentalidad de rendimiento",
    "demo.premium.services.seo.item3.desc": "Páginas rápidas reducen rebote y mejoran conversión.",
    "demo.premium.services.ads.title": "Secciones de anuncios + marketing",
    "demo.premium.services.ads.subtitle": "Sitios premium soportan tráfico: landing, prueba y captación.",
    "demo.premium.services.ads.item1.title": "Landing pages",
    "demo.premium.services.ads.item1.desc": "Secciones enfocadas para que los clics se vuelvan llamadas/formularios.",
    "demo.premium.services.ads.item2.title": "Claridad de oferta",
    "demo.premium.services.ads.item2.desc": "Visitantes entienden al instante qué haces y por qué vales.",
    "demo.premium.services.ads.item3.title": "Captura de leads",
    "demo.premium.services.ads.item3.desc": "Formularios mobile-friendly que no abruman.",
    "demo.premium.services.ads.pricing": "Ver precios",
    "demo.premium.services.ads.start": "Iniciar",
    "demo.premium.work.hero.kicker": "Prueba • Miami, FL",
    "demo.premium.work.hero.title": "Muestra variedad. Construye confianza más rápido.",
    "demo.premium.work.hero.body": "Premium vende mejor cuando la gente ve ejemplos en distintas industrias.",
    "demo.premium.work.hero.start": "Iniciar proyecto",
    "demo.premium.work.gallery.title": "Galería de plantillas",
    "demo.premium.work.gallery.subtitle": "Así se siente “tipo Wix”: muchas visuales y opciones.",
    "demo.premium.work.gallery.item1.title": "Profesional",
    "demo.premium.work.gallery.item1.desc": "Autoridad, confianza, CTAs limpios.",
    "demo.premium.work.gallery.item2.title": "Tienda",
    "demo.premium.work.gallery.item2.desc": "Productos, conversión, páginas de soporte.",
    "demo.premium.work.gallery.item3.title": "Marca premium",
    "demo.premium.work.gallery.item3.desc": "Sensación de plataforma + prueba.",
    "demo.premium.work.gallery.item4.title": "Estudio",
    "demo.premium.work.gallery.item4.desc": "Servicios, trabajo, precios.",
    "demo.premium.work.gallery.included": "Qué incluye",
    "demo.premium.work.gallery.backHome": "Volver al inicio",
    "demo.premium.work.caseStudies.title": "Casos de estudio",
    "demo.premium.work.caseStudies.subtitle": "Problema → Solución → Resultado (constructor de confianza).",
    "demo.premium.work.caseStudies.case1.title": "Helios Dental",
    "demo.premium.work.caseStudies.case1.problem": "<strong>Problema:</strong> Baja intención de reserva y poca confianza.",
    "demo.premium.work.caseStudies.case1.solution": "<strong>Solución:</strong> Flujo reconstruido, bloques de prueba y CTAs claros.",
    "demo.premium.work.caseStudies.case1.result": "<strong>Resultado:</strong> Más llamadas + mayor intención de reserva.",
    "demo.premium.work.caseStudies.case2.title": "Atlas Fitness",
    "demo.premium.work.caseStudies.case2.problem": "<strong>Problema:</strong> Confusión de precios.",
    "demo.premium.work.caseStudies.case2.solution": "<strong>Solución:</strong> Claridad de precios + testimonios + FAQ.",
    "demo.premium.work.caseStudies.case2.result": "<strong>Resultado:</strong> Más consultas de membresía.",
    "demo.premium.work.caseStudies.case3.title": "Bluewave Law",
    "demo.premium.work.caseStudies.case3.problem": "<strong>Problema:</strong> El sitio no se sentía premium.",
    "demo.premium.work.caseStudies.case3.solution": "<strong>Solución:</strong> Sistema de diseño + layout de autoridad.",
    "demo.premium.work.caseStudies.case3.result": "<strong>Resultado:</strong> Más solicitudes de consulta.",
    "demo.premium.work.caseStudies.case4.title": "Shoreline Realty",
    "demo.premium.work.caseStudies.case4.problem": "<strong>Problema:</strong> El tráfico no convertía.",
    "demo.premium.work.caseStudies.case4.solution": "<strong>Solución:</strong> Mejor flujo de landing + captación.",
    "demo.premium.work.caseStudies.case4.result": "<strong>Resultado:</strong> Más envíos de formulario.",
    "demo.premium.work.caseStudies.pricing": "Ver precios",
    "demo.premium.work.caseStudies.start": "Iniciar",
    "demo.premium.pricing.hero.kicker": "Precios • claridad de valor",
    "demo.premium.pricing.hero.title": "Precios que hacen evidente el upgrade.",
    "demo.premium.pricing.hero.body": "Nuestro equipo en Miami construye sistemas web premium que escalan con tus metas.",
    "demo.premium.pricing.hero.start": "Iniciar proyecto",
    "demo.premium.pricing.hero.included": "Qué incluye",
    "demo.premium.pricing.packages.title": "Paquetes",
    "demo.premium.pricing.packages.subtitle": "Números demo — reemplázalos por precios reales.",
    "demo.premium.pricing.starter.title": "Starter",
    "demo.premium.pricing.starter.subtitle": "2–3 páginas • estructura limpia",
    "demo.premium.pricing.starter.best": "<strong>Ideal para:</strong> marcas simples que necesitan presencia limpia.",
    "demo.premium.pricing.starter.item1": "Hero limpio + CTA",
    "demo.premium.pricing.starter.item2": "Página de servicios",
    "demo.premium.pricing.starter.item3": "Layout mobile-first",
    "demo.premium.pricing.starter.ask": "Consultar",
    "demo.premium.pricing.pro.title": "Pro",
    "demo.premium.pricing.pro.subtitle": "6 páginas • prueba + precios",
    "demo.premium.pricing.pro.best": "<strong>Ideal para:</strong> dueños serios que quieren sensación de plataforma.",
    "demo.premium.pricing.pro.item1": "Sensación de sistema",
    "demo.premium.pricing.pro.item2": "Página de prueba / casos",
    "demo.premium.pricing.pro.item3": "Claridad de precios",
    "demo.premium.pricing.pro.item4": "Mejor flujo de conversión",
    "demo.premium.pricing.pro.start": "Iniciar",
    "demo.premium.pricing.custom.title": "Custom",
    "demo.premium.pricing.custom.subtitle": "Nivel plataforma • integraciones",
    "demo.premium.pricing.custom.best": "<strong>Ideal para:</strong> marcas que necesitan funciones avanzadas.",
    "demo.premium.pricing.custom.item1": "Páginas y flujos personalizados",
    "demo.premium.pricing.custom.item2": "Reservas, pagos, formularios",
    "demo.premium.pricing.custom.item3": "Analíticas + tracking",
    "demo.premium.pricing.custom.item4": "Secciones de marketing",
    "demo.premium.pricing.custom.talk": "Hablemos",
    "demo.premium.pricing.premium.title": "Qué compra lo premium",
    "demo.premium.pricing.premium.subtitle": "Esta es la diferencia que se siente al primer clic.",
    "demo.premium.pricing.premium.item1.title": "Profundidad",
    "demo.premium.pricing.premium.item1.desc": "Varias páginas con intención y jerarquía claras.",
    "demo.premium.pricing.premium.item2.title": "Consistencia",
    "demo.premium.pricing.premium.item2.desc": "Un sistema, no secciones sueltas.",
    "demo.premium.pricing.premium.item3.title": "Prueba",
    "demo.premium.pricing.premium.item3.desc": "Casos + precios generan confianza.",
    "demo.premium.pricing.premium.proof": "Ver prueba",
    "demo.premium.pricing.premium.start": "Iniciar",
    "demo.premium.about.hero.kicker": "Sobre • Miami, FL",
    "demo.premium.about.hero.title": "La gente compra a marcas en las que confía.",
    "demo.premium.about.hero.body": "Lumen Creative Studio es un equipo en Miami enfocado en claridad, conversión y diseño moderno. Ayudamos a negocios de servicios y estudios a verse establecidos.",
    "demo.premium.about.hero.start": "Iniciar proyecto",
    "demo.premium.about.hero.services": "Servicios",
    "demo.premium.about.approach.title": "Nuestro enfoque",
    "demo.premium.about.approach.subtitle": "Primero claridad. Luego diseño. Luego conversión.",
    "demo.premium.about.approach.item1.title": "Estrategia",
    "demo.premium.about.approach.item1.desc": "Definimos la oferta, el público y lo que el sitio debe lograr.",
    "demo.premium.about.approach.item2.title": "Sistema",
    "demo.premium.about.approach.item2.desc": "Creamos un sistema de diseño consistente para que todo se vea premium.",
    "demo.premium.about.approach.item3.title": "Lanzamiento",
    "demo.premium.about.approach.item3.desc": "QA en móvil, pruebas de links/formularios y despliegue limpio.",
    "demo.premium.about.care.title": "Lo que les importa a clientes premium",
    "demo.premium.about.care.subtitle": "El sitio debe comunicar esto al instante.",
    "demo.premium.about.care.item1.title": "Confianza",
    "demo.premium.about.care.item1.desc": "Páginas de prueba + diseño consistente reducen escepticismo.",
    "demo.premium.about.care.item2.title": "Calidad",
    "demo.premium.about.care.item2.desc": "Espaciado, tipografía y visuales se sienten caros.",
    "demo.premium.about.care.item3.title": "Claridad",
    "demo.premium.about.care.item3.desc": "Los visitantes siempre saben qué hacer.",
    "demo.premium.about.care.proof": "Ver prueba",
    "demo.premium.contact.hero.kicker": "Intake premium • Miami, FL",
    "demo.premium.contact.hero.title": "Iniciar proyecto",
    "demo.premium.contact.hero.body": "Un intake claro con pasos siguientes. Respondemos rápido y simplificamos el proceso.",
    "demo.premium.contact.hero.email": "Email",
    "demo.premium.contact.hero.call": "Llamar",
    "demo.premium.contact.hero.text": "Texto",
    "demo.premium.contact.form.title": "Detalles del proyecto",
    "demo.premium.contact.form.subtitle": "Formulario demo (front-end). El siguiente paso es conectar a email + analíticas.",
    "demo.premium.contact.form.name": "Nombre completo",
    "demo.premium.contact.form.email": "Email",
    "demo.premium.contact.form.business": "Nombre del negocio",
    "demo.premium.contact.form.phone": "Teléfono",
    "demo.premium.contact.form.industry": "Industria (dentista, firma legal, marca, etc.)",
    "demo.premium.contact.form.pages": "Páginas necesarias (Home, Servicios, Precios…)",
    "demo.premium.contact.form.details": "Tu objetivo + timeline + sitios de referencia…",
    "demo.premium.contact.form.submit": "Enviar (Demo)",
    "demo.premium.contact.form.helper": "Reemplaza el email/teléfono arriba cuando estés listo.",
    "demo.premium.contact.next.title": "Qué pasa después",
    "demo.premium.contact.next.item1": "Respondemos en 24 horas con una recomendación de alcance.",
    "demo.premium.contact.next.item2": "Sin compromiso — primero confirmamos metas y timeline.",
    "demo.premium.contact.next.item3": "Incluye tu ciudad, industria y páginas prioritarias.",
    "demo.premium.contact.faq.title": "FAQ",
    "demo.premium.contact.faq.subtitle": "Clientes premium quieren claridad antes de comprar.",
    "demo.premium.contact.faq1.q": "¿Qué tan rápido pueden lanzar? <span>+</span>",
    "demo.premium.contact.faq1.a": "Depende de páginas, contenido y aprobaciones, pero mantenemos el proceso ágil.",
    "demo.premium.contact.faq2.q": "¿Pueden igualar el vibe de un sitio referencia? <span>+</span>",
    "demo.premium.contact.faq2.a": "Sí. Premium se construye con calidad nivel plataforma manteniendo identidad de marca.",
    "demo.premium.contact.faq3.q": "¿Ayudan con dominio + lanzamiento? <span>+</span>",
    "demo.premium.contact.faq3.a": "Sí. Guiamos la conexión del dominio y el QA final.",
    "demo.premium.contact.faq.pricing": "Ver precios",
    "demo.premium.contact.faq.proof": "Ver prueba",
    "demo.premium.footer": "© 2025 Lumen Creative Studio • Demo by NewGen",
    "demo.premium.work.gallery.backHome": "Volver al inicio",
    "demo.premium.work.gallery.included": "Qué incluye",
    "demo.premium.work.caseStudies.pricing": "Ver precios",
    "demo.premium.work.caseStudies.start": "Iniciar",
    "demo.premium.pricing.premium.proof": "Ver prueba",
    "demo.premium.pricing.premium.start": "Iniciar",
    "demo.premium.pricing.pro.start": "Iniciar",
    "demo.premium.pricing.custom.talk": "Hablemos"
  }
};

const i18nElements = document.querySelectorAll("[data-i18n]");
i18nElements.forEach(el => {
  const attr = el.dataset.i18nAttr;
  if (!el.dataset.i18nDefault) {
    const current = attr === "html"
      ? el.innerHTML
      : attr
        ? el.getAttribute(attr)
        : el.textContent;
    el.dataset.i18nDefault = current;
  }
});

let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
const languageToggles = document.querySelectorAll("[data-lang-toggle]");

const applyLanguage = (lang) => {
  document.documentElement.lang = lang;
  i18nElements.forEach(el => {
    const key = el.dataset.i18n;
    const attr = el.dataset.i18nAttr;
    const defaultValue = el.dataset.i18nDefault;
    const value = lang === "en" ? defaultValue : translations[lang]?.[key] || defaultValue;
    if (!value) return;
    if (attr === "html") {
      el.innerHTML = value;
    } else if (attr) {
      el.setAttribute(attr, value);
    } else {
      el.textContent = value;
    }
  });
  languageToggles.forEach(btn => {
    btn.textContent = `🌐 ${lang.toUpperCase()}`;
  });
};

const setLanguage = (lang) => {
  currentLanguage = lang;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  applyLanguage(lang);
};

languageToggles.forEach(btn => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const next = currentLanguage === "en" ? "es" : "en";
    setLanguage(next);
  });
});

applyLanguage(currentLanguage);
