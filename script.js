// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

const translations = {
  es: {
    "nav.products": "Productos",
    "nav.solutions": "Soluciones",
    "nav.pricing": "Precios",
    "nav.templates": "Plantillas",
    "nav.contact": "Contacto",
    "nav.packages": "Paquetes",
    "nav.work": "Demos",
    "nav.get-started": "Empezar",
    "nav.view-work": "Ver demos",
    "nav.get-quote": "Solicitar presupuesto",
    "nav.menu": "Menú",
    "nav.back": "← Volver",
    "index.nav.templates.sub": "Elige un estilo y lanza rápido.",
    "index.nav.domains": "Dominios",
    "index.nav.domains.sub": "Compra o conecta tu dominio.",
    "index.nav.seo": "Herramientas SEO",
    "index.nav.seo.sub": "Aparece en Google.",
    "index.nav.marketing": "Marketing",
    "index.nav.marketing.sub": "Email + ofertas + embudos.",
    "index.nav.packages.sub": "Basic, Growth, Premium.",
    "index.nav.demos": "Demos en vivo",
    "index.nav.demos.sub": "Ver ejemplos reales.",
    "index.nav.ads": "Lanzar anuncios",
    "index.nav.ads.sub": "Tráfico que convierte.",
    "index.nav.quote": "Solicitar cotización",
    "index.nav.quote.sub": "Respuesta rápida.",
    "index.hero.kicker": "Para servicios locales, estudios y marcas en crecimiento",
    "index.hero.title": "Lanza un sitio web que convierta visitantes en leads en 7 días.",
    "index.hero.body": "Creamos sitios móviles y claros para negocios que necesitan credibilidad rápido. Si tu web actual se ve anticuada o confusa, entregamos un diseño moderno orientado a conversiones que genera más llamadas, reservas y solicitudes de cotización — sin un proyecto largo.",
    "index.hero.cta.packages": "Ver paquetes",
    "index.hero.cta.demos": "Ver demos en vivo",
    "index.hero.badge.turnaround": "Entrega en 7 días",
    "index.hero.badge.mobile": "Mobile-first",
    "index.hero.badge.fast": "Carga rápida",
    "index.hero.badge.conversion": "Flujo de conversión",
    "index.for.title": "Quién es ideal",
    "index.for.sub": "Un encaje claro ahorra tiempo a ambos lados. Si esto suena a ti, avanzarás rápido.",
    "index.for.card.tag": "Ideal para",
    "index.for.point1": "Negocios locales que necesitan más llamadas y reservas.",
    "index.for.point2": "Dueños lanzando una marca nueva o un rebranding y necesitan salir rápido.",
    "index.for.point3": "Estudios y agencias que quieren un look limpio y premium.",
    "index.for.point4": "Equipos con una oferta clara listos para promocionarla.",
    "index.for.point5": "Servicios que necesitan un sitio creíble para cerrar ventas.",
    "index.templates.title": "Comienza con un estilo de plantilla",
    "index.templates.sub": "Elige un estilo y lo personalizamos para tu negocio. Son ejemplos de cómo diferentes industrias pueden verse.",
    "index.templates.cta": "Ver demos en vivo",
    "index.templates.cta.secondary": "Ver paquetes",
    "index.domains.title": "Consigue un dominio que se vea profesional",
    "index.domains.sub": "Un dominio limpio genera confianza. Busca uno o conecta el que ya compraste.",
    "index.domains.search.title": "Buscar un dominio",
    "index.domains.search.body": "Escribe una idea de nombre y te ayudamos a elegir algo limpio y memorable.",
    "index.domains.search.placeholder": "tunegocio.com",
    "index.domains.search.cta": "Consultar",
    "index.domains.search.helper": "UI demo — la compra/conexión real se hace en el proyecto final.",
    "index.domains.connect.title": "Conecta un dominio existente",
    "index.domains.connect.body": "Si ya tienes un dominio, lo conectamos y lanzamos tu sitio sin fricción.",
    "index.domains.connect.item1": "Guía de DNS",
    "index.domains.connect.item2": "Checklist de lanzamiento",
    "index.domains.connect.item3": "QA móvil + velocidad",
    "index.domains.connect.cta": "Conectar mi dominio",
    "index.seo.title": "SEO que ayuda a que te encuentren",
    "index.seo.sub": "Un sitio bonito no sirve si nadie lo ve. Creamos páginas estructuradas para Google y personas reales.",
    "index.seo.card1.title": "Estructura limpia",
    "index.seo.card1.body": "Títulos, secciones y flujo que los buscadores entienden.",
    "index.seo.card2.title": "SEO local listo",
    "index.seo.card2.body": "Ideal para servicios: secciones de ubicación, confianza y llamadas claras.",
    "index.seo.card3.title": "Velocidad primero",
    "index.seo.card3.body": "Páginas rápidas reducen rebote y mejoran conversiones.",
    "index.ads.title": "Lanza anuncios sin desperdiciar dinero",
    "index.ads.sub": "Los anuncios funcionan cuando la landing convierte. Diseñamos el flujo para cumplir la promesa del anuncio.",
    "index.ads.card1.title": "Landing pages",
    "index.ads.card1.body": "Titular claro, prueba y un CTA fuerte. Hecho para convertir.",
    "index.ads.card2.title": "Claridad de oferta",
    "index.ads.card2.body": "Sin secciones confusas. El visitante entiende el valor al instante.",
    "index.ads.card3.title": "Captura de leads",
    "index.ads.card3.body": "Formularios fáciles de completar en móvil.",
    "index.ads.cta.primary": "Construir mi landing",
    "index.ads.cta.secondary": "Precios",
    "index.marketing.title": "Marketing que trae clientes de vuelta",
    "index.marketing.sub": "Los planes premium incluyen email, upsells y storytelling de marca — como los grandes.",
    "index.marketing.card1.title": "Email + ofertas",
    "index.marketing.card1.body": "Captura leads, envía ofertas y crea repetición.",
    "index.marketing.card2.title": "Storytelling de marca",
    "index.marketing.card2.body": "Secciones que hacen que tu negocio se sienta establecido.",
    "index.marketing.card2.item1": "Casos de estudio / páginas de prueba",
    "index.marketing.card2.item2": "Páginas de precios que justifican valor",
    "index.marketing.card2.item3": "Bloques de confianza, FAQs y CTAs claros",
    "index.marketing.card2.cta.primary": "Ver ejemplos",
    "index.marketing.card2.cta.secondary": "Solicitar presupuesto",
    "index.why.title": "Por qué elegir NewGen",
    "index.why.sub": "Todo lo necesario para verte profesional desde el día uno.",
    "index.why.card1.title": "Responsive móvil",
    "index.why.card1.body": "Layouts pensados para convertir en teléfonos.",
    "index.why.card2.title": "Carga rápida",
    "index.why.card2.body": "Sitios livianos que se sienten premium.",
    "index.why.card3.title": "SEO listo",
    "index.why.card3.body": "Títulos y secciones limpias para buscadores.",
    "index.why.card4.title": "Eres dueño del sitio",
    "index.why.card4.body": "Sin lock-in. Tu sitio, tu contenido, tus assets.",
    "index.why.card5.title": "Diseño moderno",
    "index.why.card5.body": "Diseños contemporáneos con CTAs claros.",
    "index.why.card6.title": "Soporte + revisiones",
    "index.why.card6.body": "Refinamos con feedback real.",
    "index.contact.title": "¿Listo para construir?",
    "index.contact.sub": "Cuéntame qué haces, tu ciudad y tu objetivo (llamadas, reservas, ventas). Te recomiendo el mejor paquete.",
    "index.contact.cta.primary": "Iniciar cotización",
    "index.contact.cta.secondary": "Ver paquetes",
    "index.contact.cta.tertiary": "Demos en vivo",
    "work.hero.kicker": "La prueba supera a las promesas",
    "work.hero.title": "Trabajo / Demos en vivo",
    "work.hero.body": "Estos demos muestran diferencias reales en estructura, claridad y flujo de conversión.",
    "work.proof.title": "Prueba: ejemplos reales",
    "work.proof.sub": "Cada demo es una experiencia de negocio real — no solo una plantilla.",
    "work.proof.card1.title": "Ofertas claras",
    "work.proof.card1.body": "Cada sitio explica quién es su cliente y qué entrega.",
    "work.proof.card2.title": "Detalles reales",
    "work.proof.card2.body": "Ubicaciones, horarios y servicios generan confianza.",
    "work.proof.card3.title": "Listo para convertir",
    "work.proof.card3.body": "CTAs y formularios guían a la acción.",
    "work.templates.title": "Elige un estilo por industria",
    "work.templates.sub": "Cada vista previa es una captura fija: haz clic para abrir el demo completo.",
    "work.templates.plumber.title": "Plomería de emergencia",
    "work.templates.plumber.body": "Respuesta rápida, confianza local, cotización inmediata.",
    "work.templates.mechanic.title": "Taller mecánico",
    "work.templates.mechanic.body": "Servicios claros, precios y reservas rápidas.",
    "work.templates.window.title": "Limpieza de ventanas",
    "work.templates.window.body": "Fotos limpias, paquetes y CTA directo.",
    "work.templates.music.title": "Estudio de música + tienda",
    "work.templates.music.body": "Vibe creativo con productos destacados.",
    "work.templates.barber.title": "Barbería premium",
    "work.templates.barber.body": "Reservas, membresías y experiencia boutique.",
    "packages.hero.kicker": "Elige el nivel que acompaña tus metas",
    "packages.hero.title": "Paquetes para resultados reales",
    "packages.hero.body": "Basic = presencia limpia. Growth = más captación. Premium = experiencia de marca.",
    "packages.hero.cta.primary": "Solicitar presupuesto",
    "packages.hero.cta.secondary": "Ver demos",
    "packages.compare.title": "Comparar paquetes",
    "packages.compare.sub": "Diferencias claras, resultados claros. El del medio suele ser el mejor balance.",
    "packages.basic.title": "Basic • 1 página",
    "packages.basic.sub": "Lanza un sitio limpio en una página que genere llamadas rápido.",
    "packages.basic.for": "Para quién es",
    "packages.basic.for1": "Servicios locales con una oferta principal.",
    "packages.basic.for2": "Dueños que necesitan un lanzamiento rápido y profesional.",
    "packages.basic.item1": "Hero + servicios + prueba + CTA contacto",
    "packages.basic.item2": "Botones para llamar o escribir",
    "packages.basic.item3": "Diseño mobile-first",
    "packages.basic.cta": "Ver demo Basic",
    "packages.growth.tag": "Mejor valor",
    "packages.growth.title": "Growth • 3 páginas",
    "packages.growth.sub": "Gana confianza y más leads con profundidad.",
    "packages.growth.for": "Para quién es",
    "packages.growth.for1": "Dueños listos para más credibilidad y SEO.",
    "packages.growth.for2": "Negocios con varios servicios u ofertas.",
    "packages.growth.item1": "Home + servicios + contacto",
    "packages.growth.item2": "FAQ + testimonios + flujo de conversión",
    "packages.growth.item3": "Branding consistente en todas las páginas",
    "packages.growth.cta": "Ver demo Growth",
    "packages.premium.title": "Premium • 6+ páginas",
    "packages.premium.sub": "Sitio nivel plataforma para vender servicios de alto valor.",
    "packages.premium.for": "Para quién es",
    "packages.premium.for1": "Marcas que necesitan prueba, pricing y autoridad.",
    "packages.premium.for2": "Equipos que planean escalar marketing y anuncios.",
    "packages.premium.item1": "Home, servicios, work, about, pricing, contacto",
    "packages.premium.item2": "Casos de estudio y pruebas",
    "packages.premium.item3": "Sistema de diseño coherente",
    "packages.premium.cta": "Ver demo Premium",
    "packages.every.title": "Qué incluye cada paquete",
    "packages.every.sub": "Señales de confianza para verse establecidos.",
    "packages.every.card1.title": "Responsive móvil",
    "packages.every.card1.body": "Construido para convertir en teléfonos.",
    "packages.every.card2.title": "Carga rápida",
    "packages.every.card2.body": "Páginas ligeras que se sienten premium.",
    "packages.every.card3.title": "SEO listo",
    "packages.every.card3.body": "Títulos limpios para visibilidad.",
    "packages.every.card4.title": "Tu sitio es tuyo",
    "packages.every.card4.body": "Sin lock-in ni fees ocultas.",
    "packages.every.card5.title": "Diseño moderno",
    "packages.every.card5.body": "Visuales actuales y CTAs claros.",
    "packages.every.card6.title": "Soporte + revisiones",
    "packages.every.card6.body": "Refinamos con feedback real.",
    "contact.hero.kicker": "Respuesta rápida • Proceso simple",
    "contact.hero.title": "Solicita un presupuesto",
    "contact.hero.body": "Cuéntanos sobre tu negocio y responderemos con los próximos pasos. (Formulario listo para demo; podemos conectarlo al email).",
    "contact.hero.cta.call": "Llamar",
    "contact.hero.cta.text": "Texto",
    "contact.hero.cta.email": "Email",
    "contact.form.title": "Detalles del proyecto",
    "contact.form.sub": "Formulario rápido, respuesta rápida. Cambia el contacto cuando quieras.",
    "contact.form.name": "Nombre completo",
    "contact.form.contact": "Teléfono o email",
    "contact.form.business": "Nombre del negocio",
    "contact.form.message": "¿Qué necesitas y cuál es el objetivo?",
    "contact.form.submit": "Enviar (Demo)",
    "contact.form.helper": "Próximo paso: conectar esto a tu bandeja para que envíe.",
    "contact.next.title": "Qué pasa después",
    "contact.next.item1": "Respuesta en 24 horas en días hábiles.",
    "contact.next.item2": "Sin obligación — primero recibes recomendación.",
    "contact.next.item3": "Incluye ciudad, servicio y fecha para respuesta rápida.",
    "demo.basic.back": "← Volver",
    "demo.basic.cta.quote": "Solicitar cotización",
    "demo.basic.kicker": "Detailing móvil • South Florida • servicio 100% móvil",
    "demo.basic.title": "Luce impecable, consigue más reservas y mantén todo simple.",
    "demo.basic.body": "Coastal Shine es un equipo de detailing móvil en South Florida para Miami-Dade y Broward. Vamos a tu casa u oficina con todo lo necesario para restaurar, proteger y refrescar tu vehículo.",
    "demo.basic.cta.request": "Solicitar cotización",
    "demo.basic.cta.call": "Llamar",
    "demo.basic.cta.text": "Texto",
    "demo.basic.what.title": "Qué hacemos",
    "demo.basic.what.sub": "Detailing móvil y protección de pintura para conductores ocupados.",
    "demo.basic.what.card1.title": "Detalle interior completo",
    "demo.basic.what.card1.body": "Limpieza profunda, shampoo y eliminación de olores.",
    "demo.basic.what.card2.title": "Lavado exterior + cera",
    "demo.basic.what.card2.body": "Lavado a mano, clay y protección brillante.",
    "demo.basic.what.card3.title": "Corrección de pintura",
    "demo.basic.what.card3.body": "Elimina marcas y rayones leves.",
    "demo.basic.services.title": "Servicios",
    "demo.basic.services.sub": "Paquetes transparentes con resultados claros.",
    "demo.basic.services.card1.title": "Detalle Express",
    "demo.basic.services.card1.body": "60–90 minutos de refresh para autos de diario.",
    "demo.basic.services.card2.title": "Interior profundo",
    "demo.basic.services.card2.body": "Asientos, alfombras y molduras protegidas.",
    "demo.basic.services.card3.title": "Brillo + protección",
    "demo.basic.services.card3.body": "Lavado a mano, decon y cera premium.",
    "demo.basic.services.card4.title": "Reset total",
    "demo.basic.services.card4.body": "Interior + exterior con corrección ligera.",
    "demo.basic.area.title": "Área de servicio",
    "demo.basic.area.body": "Miami, Fort Lauderdale y alrededores de South Florida.",
    "demo.basic.hours.title": "Horarios",
    "demo.basic.hours.body": "Lun–Sáb: 8am–6pm • Domingo: por cita.",
    "demo.basic.reviews.title": "Reseñas",
    "demo.basic.reviews.sub": "Bloques de prueba rápidos y limpios.",
    "demo.basic.review1.title": "“Rápidos y profesionales.”",
    "demo.basic.review1.body": "— Cliente",
    "demo.basic.review2.title": "“Exactamente lo que quería.”",
    "demo.basic.review2.body": "— Cliente",
    "demo.basic.review3.title": "“Proceso fácil.”",
    "demo.basic.review3.body": "— Cliente",
    "demo.basic.form.title": "Solicitar cotización",
    "demo.basic.form.sub": "Cuéntanos tu vehículo y ubicación y confirmaremos disponibilidad.",
    "demo.basic.form.name": "Nombre completo",
    "demo.basic.form.contact": "Teléfono o email",
    "demo.basic.form.service": "Servicio requerido",
    "demo.basic.form.city": "Ciudad",
    "demo.basic.form.notes": "Cuéntanos lo que buscas…",
    "demo.basic.form.submit": "Enviar (Demo)",
    "demo.basic.form.helper": "Próximo paso: conectar esto a email.",
    "demo.basic.next.title": "Qué pasa después",
    "demo.basic.next.item1": "Respuesta en 24 horas con disponibilidad y rango de precio.",
    "demo.basic.next.item2": "Sin obligación — confirmamos primero tus necesidades.",
    "demo.basic.next.item3": "Incluye tipo de vehículo, ubicación y horario preferido.",
    "demo.growth.banner": "VENTA DE ESTUDIO — 20% OFF SIN CÓDIGO •",
    "demo.growth.nav.home": "Inicio",
    "demo.growth.nav.shop": "Comprar",
    "demo.growth.nav.track": "Rastrear pedido",
    "demo.growth.nav.contact": "Contacto",
    "demo.growth.hero.kicker": "Estudio de música + tienda • Miami, FL",
    "demo.growth.hero.title": "Equipos y sonido boutique para artistas modernos.",
    "demo.growth.hero.body": "Pulse Sound Lab combina estudio y tienda con equipos seleccionados, vinilos y merch. Un hero completo, productos clicables y navegación real hacen que este demo se sienta como una marca viva.",
    "demo.growth.hero.cta.shop": "Comprar todo",
    "demo.growth.hero.cta.track": "Rastrear pedido",
    "demo.growth.hero.cta.contact": "Contacto",
    "demo.growth.latest.title": "Latest Drop",
    "demo.growth.latest.sub": "Nuevos productos curados para sesiones, giras y home studios.",
    "demo.growth.shopall": "Ver todo",
    "demo.growth.why.title": "Por qué se siente real",
    "demo.growth.why.sub": "Detalles de marca + UX de tienda = confianza inmediata.",
    "demo.growth.why.card1.title": "Historia local",
    "demo.growth.why.card1.body": "Colecciones diseñadas en Miami para músicos y creadores.",
    "demo.growth.why.card2.title": "Soporte en horario",
    "demo.growth.why.card2.body": "Lun–Vie: 9am–6pm EST • support@pulsesoundlab.com",
    "demo.growth.why.card3.title": "Pedido rastreable",
    "demo.growth.why.card3.body": "Página de tracking para menos tickets.",
    "demo.growth.modal.cta": "Agregar al carrito",
    "demo.growth.modal.category": "Categoría",
    "demo.growth.modal.note": "Equipo listo para estudio, curado en tiradas limitadas.",
    "demo.growth.modal.close": "Cerrar",
    "demo.growth.services.title": "Comprar todo",
    "demo.growth.services.sub": "Equipos de audio, vinilos y merch de edición limitada.",
    "demo.growth.contact.title": "Contacto",
    "demo.growth.contact.sub": "Equipo de soporte en Miami • Lun–Vie 9am–6pm EST.",
    "demo.growth.contact.name": "Nombre",
    "demo.growth.contact.email": "Email",
    "demo.growth.contact.order": "Número de pedido (opcional)",
    "demo.growth.contact.message": "¿Cómo podemos ayudar?",
    "demo.growth.contact.submit": "Enviar (Demo)",
    "demo.growth.contact.helper": "Próximo paso: conectar este formulario a email.",
    "demo.growth.contact.next.title": "Qué pasa después",
    "demo.growth.contact.next.item1": "Respondemos en 1 día hábil.",
    "demo.growth.contact.next.item2": "Sin obligación — confirmamos detalles primero.",
    "demo.growth.contact.next.item3": "Incluye número de pedido y ZIP de envío.",
    "demo.growth.contact.faq1.q": "¿Dónde está mi pedido?",
    "demo.growth.contact.faq1.a": "Usa “Rastrear pedido” para la actualización más rápida.",
    "demo.growth.contact.faq2.q": "Devoluciones y cambios",
    "demo.growth.contact.faq2.a": "Devolución en 14 días si no se usó y está en su empaque.",
    "demo.growth.contact.faq3.q": "Tiempo de envío",
    "demo.growth.contact.faq3.a": "La mayoría de pedidos se envían en 2–5 días hábiles.",
    "demo.growth.track.title": "Rastrear pedido",
    "demo.growth.track.sub": "Ingresa tus datos para una actualización en tiempo real.",
    "demo.growth.track.order": "Número de pedido",
    "demo.growth.track.email": "Email de compra",
    "demo.growth.track.submit": "Rastrear (Demo)",
    "demo.growth.track.helper": "Próximo paso: conectar a proveedor real.",
    "demo.growth.track.card1.title": "Soporte rápido",
    "demo.growth.track.card1.body": "Reduce mensajes de “¿dónde está mi pedido?”",
    "demo.growth.track.card2.title": "Más confianza",
    "demo.growth.track.card2.body": "Soporte visible incrementa compras.",
    "demo.growth.track.card3.title": "Flujo limpio",
    "demo.growth.track.card3.body": "Clientes se autoatienden antes de escribir.",
    "demo.premium.brand": "Atlas Grooming Club",
    "demo.premium.nav.services": "Servicios",
    "demo.premium.nav.work": "Estilos",
    "demo.premium.nav.pricing": "Precios",
    "demo.premium.nav.contact": "Contacto",
    "demo.premium.view-proof": "Ver membresías",
    "demo.premium.hero.kicker": "Club de grooming premium • Miami + Fort Lauderdale",
    "demo.premium.hero.title": "Una experiencia de barbería boutique para miembros exigentes.",
    "demo.premium.hero.body": "Atlas Grooming Club es una cadena de barberías premium con reservas online, membresías y equipos especializados. Creamos experiencias de alto nivel para clientes que valoran precisión, privacidad y consistencia.",
    "demo.premium.hero.cta.primary": "Ver membresías",
    "demo.premium.hero.cta.secondary": "Explorar servicios",
    "demo.premium.hero.cta.tertiary": "Ver precios",
    "demo.premium.hero.badge1": "Multi-ubicación",
    "demo.premium.hero.badge2": "Reservas online",
    "demo.premium.hero.badge3": "Equipo experto",
    "demo.premium.hero.badge4": "Experiencia premium",
    "demo.premium.templates.title": "Estilos y experiencias",
    "demo.premium.templates.sub": "Una marca premium demuestra consistencia en cada detalle del servicio.",
    "demo.premium.templates.card1.title": "Corte clásico",
    "demo.premium.templates.card1.body": "Acabado preciso, líneas limpias y look ejecutivo.",
    "demo.premium.templates.card2.title": "Afeitado ritual",
    "demo.premium.templates.card2.body": "Toalla caliente, aceites premium y cuidado completo.",
    "demo.premium.templates.card3.title": "Textura moderna",
    "demo.premium.templates.card3.body": "Peinados con textura y acabado editorial.",
    "demo.premium.templates.card4.title": "Grooming de barba",
    "demo.premium.templates.card4.body": "Modelado y cuidado avanzado.",
    "demo.premium.templates.cta.primary": "Ver experiencias",
    "demo.premium.templates.cta.secondary": "Servicios",
    "demo.premium.domains.title": "Reservas y membresías",
    "demo.premium.domains.sub": "La reserva online y planes de membresía hacen que la experiencia sea sin fricción.",
    "demo.premium.domains.search.title": "Reservar una cita",
    "demo.premium.domains.search.body": "Elige ubicación, barbero y horario ideal.",
    "demo.premium.domains.search.placeholder": "Seleccione ubicación",
    "demo.premium.domains.search.cta": "Reservar",
    "demo.premium.domains.search.helper": "Demo UI — el sistema real se configura en la versión final.",
    "demo.premium.domains.connect.title": "Membresías",
    "demo.premium.domains.connect.body": "Planes mensuales para clientes frecuentes con beneficios VIP.",
    "demo.premium.domains.connect.item1": "Cortes ilimitados",
    "demo.premium.domains.connect.item2": "Servicios prioritarios",
    "demo.premium.domains.connect.item3": "Acceso a eventos privados",
    "demo.premium.domains.connect.cta": "Ver membresías",
    "demo.premium.seo.title": "Experiencia consistente",
    "demo.premium.seo.sub": "Un club premium necesita páginas limpias con detalles claros y contenido de confianza.",
    "demo.premium.seo.card1.title": "Detalle y precisión",
    "demo.premium.seo.card1.body": "Servicios explicados y listos para reservar.",
    "demo.premium.seo.card2.title": "Ubicaciones destacadas",
    "demo.premium.seo.card2.body": "Múltiples sedes con horarios y mapas.",
    "demo.premium.seo.card3.title": "Carga rápida",
    "demo.premium.seo.card3.body": "Experiencias rápidas incluso con contenido rico.",
    "demo.premium.ads.title": "Marketing para membresías",
    "demo.premium.ads.sub": "Campañas enfocadas en reservas y fidelidad con landing pages premium.",
    "demo.premium.ads.card1.title": "Landing de membresía",
    "demo.premium.ads.card1.body": "Beneficios claros y CTA directo.",
    "demo.premium.ads.card2.title": "Claridad de oferta",
    "demo.premium.ads.card2.body": "Sin confusión, valor inmediato.",
    "demo.premium.ads.card3.title": "Captura de leads",
    "demo.premium.ads.card3.body": "Reserva en móvil en minutos.",
    "demo.premium.ads.cta.primary": "Ver precios",
    "demo.premium.ads.cta.secondary": "Contactar",
    "demo.premium.marketing.title": "Secciones de marca",
    "demo.premium.marketing.sub": "Historias, testimonios y lujo visual para aumentar confianza.",
    "demo.premium.marketing.card1.title": "Club + comunidad",
    "demo.premium.marketing.card1.body": "Eventos privados, lanzamientos y beneficios VIP.",
    "demo.premium.marketing.card2.title": "Prueba + precios",
    "demo.premium.marketing.card2.body": "Testimonios y tablas de membresía.",
    "demo.premium.marketing.card2.item1": "Historias de clientes",
    "demo.premium.marketing.card2.item2": "Comparación de planes",
    "demo.premium.marketing.card2.item3": "FAQs y confianza",
    "demo.premium.marketing.card2.cta.primary": "Ver estilos",
    "demo.premium.marketing.card2.cta.secondary": "Precios",
    "demo.premium.next.title": "Próximos pasos",
    "demo.premium.next.sub": "¿Listo para un club premium? Mantendremos todas las páginas alineadas con la experiencia de lujo.",
    "demo.premium.next.cta.primary": "Servicios",
    "demo.premium.next.cta.secondary": "Estilos",
    "demo.premium.next.cta.tertiary": "Contacto",
    "nav.language": "Idioma",
    "demo.growth.account": "Cuenta",
    "demo.growth.cart": "Carrito",
    "demo.growth.search": "Buscar productos…",
    "demo.growth.visit.title": "Visita el estudio",
    "demo.growth.visit.sub": "Reserva una sesión o recoge pedidos en nuestro showroom de Miami.",
    "demo.growth.visit.card1.title": "Horario del showroom",
    "demo.growth.visit.card1.body": "Lun–Sáb: 10am–7pm • Wynwood, Miami",
    "demo.growth.visit.card2.title": "Sesiones de estudio",
    "demo.growth.visit.card2.body": "Sesiones por hora, ingenieros en sitio y cabinas privadas.",
    "demo.premium.nav.services.sub": "Qué incluye.",
    "demo.premium.nav.work.sub": "Looks característicos.",
    "demo.premium.nav.pricing.sub": "Niveles de membresía.",
    "demo.premium.nav.contact.sub": "Iniciar reserva.",
    "demo.premium.services.hero.kicker": "Grooming premium • Miami, FL",
    "demo.premium.services.hero.title": "Todo lo incluido para una experiencia de membresía.",
    "demo.premium.services.hero.body": "Atlas ofrece barbería de precisión, suites privadas y booking concierge para que cada visita sea elevada y sencilla.",
    "demo.premium.services.hero.cta.primary": "Iniciar reserva",
    "demo.premium.services.hero.cta.secondary": "Ver precios",
    "demo.premium.services.hero.cta.tertiary": "Ver estilos",
    "demo.premium.services.core.title": "Grooming característico",
    "demo.premium.services.core.sub": "Cortes premium, afeitados y grooming con un equipo curado.",
    "demo.premium.services.core.card1.title": "Corte ejecutivo",
    "demo.premium.services.core.card1.body": "Corte preciso con acabado limpio.",
    "demo.premium.services.core.card2.title": "Afeitado ritual",
    "demo.premium.services.core.card2.body": "Toalla caliente, aceites y ritual completo.",
    "demo.premium.services.core.card3.title": "Diseño de barba",
    "demo.premium.services.core.card3.body": "Modelado, acondicionamiento y line-up.",
    "demo.premium.services.booking.title": "Reservas + concierge",
    "demo.premium.services.booking.sub": "Agenda prioritaria y suites privadas para una experiencia sin fricción.",
    "demo.premium.services.booking.card1.title": "Booking concierge",
    "demo.premium.services.booking.card1.body": "Reserva tu barbero, suite y horario en segundos.",
    "demo.premium.services.booking.card1.helper": "UI demo — el sistema real se conecta en la versión final.",
    "demo.premium.services.booking.card2.title": "Beneficios de membresía",
    "demo.premium.services.booking.card2.body": "Planes mensuales con servicios premium y eventos privados.",
    "demo.premium.services.booking.card2.item1": "Grooming ilimitado",
    "demo.premium.services.booking.card2.item2": "Acceso prioritario",
    "demo.premium.services.booking.card2.item3": "Amenidades VIP",
    "demo.premium.services.locations.title": "Consistencia multi-ubicación",
    "demo.premium.services.locations.sub": "Estándares de marca y servicio en cada estudio.",
    "demo.premium.services.locations.card1.title": "Experiencia uniforme",
    "demo.premium.services.locations.card1.body": "El servicio se siente igual en cada ciudad.",
    "demo.premium.services.locations.card2.title": "Equipo especialista",
    "demo.premium.services.locations.card2.body": "Barberos master para cada estilo.",
    "demo.premium.services.locations.card3.title": "Amenidades de lujo",
    "demo.premium.services.locations.card3.body": "Bar de bebidas y lounge.",
    "demo.premium.services.branding.title": "Detalles listos para marca",
    "demo.premium.services.branding.sub": "Experiencias premium necesitan marketing que combine el club.",
    "demo.premium.services.branding.card1.title": "Onboarding de miembros",
    "demo.premium.services.branding.card1.body": "Flujos de bienvenida exclusivos.",
    "demo.premium.services.branding.card2.title": "Claridad de oferta",
    "demo.premium.services.branding.card2.body": "Beneficios explicados sin ruido.",
    "demo.premium.services.branding.card3.title": "Soporte concierge",
    "demo.premium.services.branding.card3.body": "Canales rápidos para miembros.",
    "demo.premium.work.kicker": "Estilos característicos • Atlas Grooming Club",
    "demo.premium.work.title": "Looks característicos creados por barberos master.",
    "demo.premium.work.body": "Cada servicio está diseñado para un resultado premium.",
    "demo.premium.work.gallery.title": "Estilos destacados",
    "demo.premium.work.gallery.sub": "Explora looks recientes y reserva el estilo ideal.",
    "demo.premium.work.cta.title": "¿Listo para reservar?",
    "demo.premium.work.cta.sub": "Elige ubicación y agenda una cita premium.",
    "demo.premium.work.cta.primary": "Iniciar reserva",
    "demo.premium.work.cta.secondary": "Ver membresías",
    "demo.premium.pricing.kicker": "Precios de membresía",
    "demo.premium.pricing.title": "Planes para grooming regular.",
    "demo.premium.pricing.body": "Elige un nivel de membresía según tu ritmo.",
    "demo.premium.pricing.card1.title": "Core Member",
    "demo.premium.pricing.card1.sub": "Corte mensual + barba.",
    "demo.premium.pricing.card1.item1": "1 corte signature",
    "demo.premium.pricing.card1.item2": "Line-up de barba",
    "demo.premium.pricing.card1.item3": "Reserva prioritaria",
    "demo.premium.pricing.card2.title": "Signature Member",
    "demo.premium.pricing.card2.sub": "Dos visitas + afeitado ritual.",
    "demo.premium.pricing.card2.item1": "2 servicios premium",
    "demo.premium.pricing.card2.item2": "Afeitado ritual",
    "demo.premium.pricing.card2.item3": "Acceso lounge VIP",
    "demo.premium.pricing.card3.title": "Atlas Elite",
    "demo.premium.pricing.card3.sub": "Visitas ilimitadas + concierge.",
    "demo.premium.pricing.card3.item1": "Grooming ilimitado",
    "demo.premium.pricing.card3.item2": "Acceso a suite privada",
    "demo.premium.pricing.card3.item3": "Concierge personal",
    "demo.premium.pricing.cta": "Unirme",
    "demo.premium.pricing.cta.title": "¿Necesitas un plan privado?",
    "demo.premium.pricing.cta.sub": "Diseñamos planes corporativos y ejecutivos.",
    "demo.premium.pricing.cta.primary": "Contactar concierge",
    "demo.premium.pricing.cta.secondary": "Ver servicios",
    "demo.premium.about.kicker": "Sobre Atlas",
    "demo.premium.about.title": "Un club de grooming basado en precisión y hospitalidad.",
    "demo.premium.about.body": "Combinamos barbería clásica con servicio moderno, ofreciendo acceso multi-ubicación y ambiente privado.",
    "demo.premium.about.story.title": "Nuestra historia",
    "demo.premium.about.story.sub": "Atlas nació en Miami con la misión de elevar la barbería a un club completo.",
    "demo.premium.about.story.card1.title": "Espacios con diseño",
    "demo.premium.about.story.card1.body": "Interiores modernos con suites privadas y lounge.",
    "demo.premium.about.story.card2.title": "Equipo especialista",
    "demo.premium.about.story.card2.body": "Barberos master en estilos clásicos y editoriales.",
    "demo.premium.about.locations.title": "Ubicaciones",
    "demo.premium.about.locations.sub": "Estudios en Miami, Fort Lauderdale y West Palm Beach.",
    "demo.premium.about.locations.card1.body": "Wynwood • Lun–Sáb 9am–7pm",
    "demo.premium.about.locations.card2.body": "Las Olas • Lun–Sáb 9am–7pm",
    "demo.premium.about.locations.card3.body": "Clematis • Mar–Dom 10am–6pm",
    "demo.premium.contact.kicker": "Reserva concierge",
    "demo.premium.contact.title": "Solicita tu cita.",
    "demo.premium.contact.body": "Indícanos ubicación y servicio. Nuestro concierge confirmará disponibilidad.",
    "demo.premium.contact.form.title": "Detalles de reserva",
    "demo.premium.contact.form.sub": "Formulario rápido y respuesta prioritaria para miembros.",
    "demo.premium.contact.form.name": "Nombre completo",
    "demo.premium.contact.form.contact": "Teléfono o email",
    "demo.premium.contact.form.location": "Ubicación preferida",
    "demo.premium.contact.form.service": "Tipo de servicio",
    "demo.premium.contact.form.notes": "Cuéntanos fecha/hora preferida",
    "demo.premium.contact.form.submit": "Enviar (Demo)",
    "demo.premium.contact.form.helper": "Próximo paso: conectar con concierge.",
    "demo.premium.contact.next.title": "Qué pasa después",
    "demo.premium.contact.next.item1": "Confirmamos disponibilidad en 24 horas.",
    "demo.premium.contact.next.item2": "Miembros reciben prioridad.",
    "demo.premium.contact.next.item3": "Incluye fechas preferidas para agendar más rápido."
  }
};

const applyTranslations = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (!el.dataset.i18nDefault) {
      el.dataset.i18nDefault = el.textContent.trim();
    }
    const key = el.dataset.i18n;
    const value = lang === "en" ? el.dataset.i18nDefault : translations[lang]?.[key];
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    if (!el.dataset.i18nPlaceholderDefault) {
      el.dataset.i18nPlaceholderDefault = el.getAttribute("placeholder") || "";
    }
    const key = el.dataset.i18nPlaceholder;
    const value = lang === "en"
      ? el.dataset.i18nPlaceholderDefault
      : translations[lang]?.[key];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    if (!el.dataset.i18nAriaDefault) {
      el.dataset.i18nAriaDefault = el.getAttribute("aria-label") || "";
    }
    const key = el.dataset.i18nAria;
    const value = lang === "en"
      ? el.dataset.i18nAriaDefault
      : translations[lang]?.[key];
    if (value) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.textContent = lang === "en" ? "🌐 EN" : "🌐 ES";
  });
};

const preferredLang = localStorage.getItem("ngLang") || "en";
applyTranslations(preferredLang);

document.querySelectorAll(".lang-toggle").forEach(toggleBtn => {
  toggleBtn.addEventListener("click", () => {
    const nextLang = document.documentElement.lang === "en" ? "es" : "en";
    localStorage.setItem("ngLang", nextLang);
    applyTranslations(nextLang);
  });
});

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

const loadMoreBtn = document.querySelector("[data-load-more]");
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    document.querySelectorAll(".product.extra").forEach(card => card.classList.remove("hidden"));
    loadMoreBtn.style.display = "none";
  });
}

const productModal = document.querySelector("#product-modal");
if (productModal) {
  const modalImage = productModal.querySelector(".modal-image");
  const modalTitle = productModal.querySelector(".modal-title");
  const modalPrice = productModal.querySelector(".modal-price");
  const modalCategory = productModal.querySelector(".modal-category");

  const closeModal = () => {
    productModal.classList.remove("open");
  };

  productModal.querySelectorAll("[data-modal-close]").forEach(btn => {
    btn.addEventListener("click", closeModal);
  });

  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) closeModal();
  });

  document.querySelectorAll("[data-product]").forEach(card => {
    card.addEventListener("click", () => {
      modalImage.style.backgroundImage = `url('${card.dataset.image}')`;
      modalTitle.textContent = card.dataset.title;
      modalPrice.textContent = card.dataset.price;
      modalCategory.textContent = card.dataset.category;
      productModal.classList.add("open");
    });
  });
}
