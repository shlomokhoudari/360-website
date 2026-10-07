// Translations. English lives in index.html and is the default;
// every key added here must exist in ALL languages (es, zh, hi).
const I18N = {
  en: {
    'form.sending':  'Sending…',
    'form.required': 'Please fill in all required fields.',
    'form.success':  "Message sent. We'll be in touch shortly.",
    'form.error':    'Something went wrong. Please email us directly at 360@360visiondc.com',
  },

  es: {
    'nav.about': 'Nosotros', 'nav.services': 'Servicios', 'nav.clients': 'Clientes', 'nav.global': 'Global', 'nav.contact': 'Contáctenos',
    'hero.tagline': 'Diseño, Producción y Logística<br>Global de Servicio Completo',
    'hero.stat1': 'Años de Experiencia', 'hero.stat2': 'Países', 'hero.stat3': 'Soluciones Llave en Mano', 'hero.cta': 'Trabaje con Nosotros',
    'col.men': 'Hombre', 'col.women': 'Mujer', 'col.boy': 'Niño', 'col.girl': 'Niña',

    'about.label': 'Quiénes Somos', 'about.title': 'En Pocas Palabras',
    'about.p1': '360 Vision Design Corp. es una empresa global de diseño, producción y logística de servicio completo que ofrece soluciones integrales, llave en mano, a empresas de todos los tamaños alrededor del mundo.',
    'about.p2': 'Respaldado por más de 35 años de experiencia en la industria, nuestro equipo se especializa en guiar los productos a través de cada etapa de su ciclo de vida: desde la visión, el diseño y el desarrollo hasta el abastecimiento, la manufactura, la logística y el branding.',
    'about.p3': 'Estamos comprometidos con ofrecer los más altos estándares de calidad manteniendo precios de valor sostenible, asegurando resultados excepcionales para nuestros clientes en cada paso.',
    'pil1.t': 'Diseño', 'pil1.d': 'Del concepto a la ficha técnica: traducimos la visión de la marca en diseños precisos y listos para producción.',
    'pil2.t': 'Producción', 'pil2.d': 'Supervisión rigurosa de proveedores, muestras, inspecciones y control de calidad en cada etapa.',
    'pil3.t': 'Logística', 'pil3.d': 'Soluciones integrales de envío, etiquetado y entrega que reducen tiempos y costos.',
    'pil4.t': 'Estrategia', 'pil4.d': 'Asesoría en entrada a mercados, licencias y distribución, respaldada por 35 años de experiencia regional.',

    'svc.label': 'Qué Hacemos', 'svc.title': 'Cada Etapa. Cada Detalle.',
    'svc.sub': 'Nos encargamos de todo para que usted no tenga que hacerlo. Desde el primer boceto hasta la venta final.',
    'svc1.t': 'Estudio de Mercado', 'svc1.d': 'Análisis competitivo de marcas, inteligencia de precios al consumidor y segmentación de audiencias para posicionar su producto de forma efectiva.',
    'svc2.t': 'ADN de Marca', 'svc2.d': 'Preservamos y potenciamos la identidad de su marca: desde la herencia de color y la dirección estética hasta la consistencia de imagen en todos los puntos de contacto.',
    'svc3.t': 'Avíos y Branding', 'svc3.d': 'Diseño y planificación de hangtags, etiquetas principales, estampados de logo, accesorios y empaque, todo alineado con la identidad de su marca.',
    'svc4.t': 'Desarrollo de Telas', 'svc4.d': 'Amplia biblioteca de telas y red de proveedores. Materiales reciclados, gramajes especiales y combinaciones de materiales, seleccionados según sus especificaciones exactas.',
    'svc5.t': 'Avíos Especiales', 'svc5.d': 'Cierres impermeables, tiradores personalizados, parches y bordados: detalles distintivos que diferencian su producto en un mercado competitivo.',
    'svc6.t': 'Fichas Técnicas', 'svc6.d': 'Documentación meticulosa: detalles de tela, códigos de color, medidas, métodos de construcción, costuras y ubicación de avíos. El plano definitivo para producción.',
    'svc7.t': 'Muestras', 'svc7.d': 'Juegos completos de muestras desarrollados en los colores, telas y avíos reales, con logos y estampados, para una representación 100% fiel de la producción.',
    'svc8.t': 'Producción y Control de Calidad', 'svc8.d': 'Supervisión rigurosa de proveedores en cada etapa de producción. Inspecciones proactivas para optimizar la eficiencia y mantener los más altos estándares de calidad durante la manufactura.',
    'svc9.d': 'Etiquetado, empaque especial y envío, incluyendo entrega directa a países específicos. Reducimos tiempos y costos logísticos con nuestra red de fábricas.',
    'svc10.t': 'Sesión Fotográfica', 'svc10.d': 'Fotografía de producto coordinada que captura detalles, texturas y características de diseño, perfectamente alineada con la identidad de su marca.',
    'svc11.t': 'E-Commerce', 'svc11.d': 'Desarrollo de plataformas y diseño UX que mejoran la experiencia de compra en línea, creados para impulsar la interacción y las conversiones.',
    'svc12.t': 'Retail y Shop-in-Shop', 'svc12.d': 'Diseño de mobiliario, distribución de tiendas y abastecimiento global de mobiliario, aprovechando nuestra red mundial para un espacio comercial distintivo y personalizado.',
    'svc13.t': 'Visual Merchandising', 'svc13.d': 'Soluciones a la medida que aumentan la visibilidad de la marca y la interacción con el cliente, creando experiencias en tienda que elevan la presencia comercial.',
    'svc14.t': 'Estrategia de Mercado para América Latina', 'svc14.d': '35 años de relaciones con distribuidores y grandes minoristas en toda América Latina. Guiamos a nuestros clientes en la entrada a mercados, licencias y estrategias DTC en cada país.',

    'cli.label': 'Quiénes Confían en Nosotros', 'cli.title': 'Nuestros Clientes',
    'cli.sub': 'Con la confianza de marcas y minoristas líderes a nivel global en moda, deporte y estilo de vida.',

    'glob.label': 'Dónde Estamos', 'glob.title': 'Presencia Global',
    'glob.p1': 'Nuestras sedes y showrooms están en Panamá y China, lo que nos da una presencia estratégica en ambos extremos de la cadena de suministro global. Atendemos activamente a clientes en Panamá, Estados Unidos, Colombia, México, Argentina, Uruguay, Países Bajos, Vietnam y Japón.',
    'glob.p2': 'Dondequiera que opere su negocio, ofrecemos el mismo compromiso con la calidad, la consistencia y una ejecución impecable, del diseño a la entrega.',
    'glob.hq': 'Sedes: Panamá y China',
    'loc.hqshow': 'Sede y Showroom', 'loc.hqprod': 'Sede y Centro de Producción', 'loc.markets': 'Mercados Atendidos',
    'c.pa': 'Panamá', 'c.cn': 'China', 'c.us': 'Estados Unidos', 'c.co': 'Colombia', 'c.mx': 'México', 'c.ar': 'Argentina', 'c.uy': 'Uruguay', 'c.nl': 'Países Bajos', 'c.vn': 'Vietnam', 'c.jp': 'Japón',

    'contact.label': 'Contáctenos', 'contact.title': 'Construyamos Algo Juntos',
    'contact.p': 'Ya sea que esté lanzando una nueva línea de productos, entrando a un nuevo mercado o buscando un socio confiable de servicio completo, nos gustaría saber de usted.',
    'contact.wa': 'Escríbanos por WhatsApp',
    'form.name': 'Nombre', 'form.company': 'Empresa', 'form.email': 'Correo Electrónico', 'form.message': 'Mensaje', 'form.send': 'Enviar Mensaje',
    'ph.name': 'Su nombre', 'ph.company': 'Su empresa', 'ph.message': 'Cuéntenos sobre su proyecto o lo que está buscando...',
    'form.sending': 'Enviando…',
    'form.required': 'Por favor complete todos los campos obligatorios.',
    'form.success': 'Mensaje enviado. Nos pondremos en contacto pronto.',
    'form.error': 'Algo salió mal. Por favor escríbanos directamente a 360@360visiondc.com',

    'footer.contact': 'Contacto', 'footer.rights': '© 2026 360 Vision Design Corp. Todos los derechos reservados.',
  },

  zh: {
    'nav.about': '关于我们', 'nav.services': '服务', 'nav.clients': '客户', 'nav.global': '全球布局', 'nav.contact': '联系我们',
    'hero.tagline': '全方位全球设计、<br>生产与物流服务',
    'hero.stat1': '年行业经验', 'hero.stat2': '个国家', 'hero.stat3': '一站式解决方案', 'hero.cta': '与我们合作',
    'col.men': '男装', 'col.women': '女装', 'col.boy': '男童', 'col.girl': '女童',

    'about.label': '我们是谁', 'about.title': '简而言之',
    'about.p1': '360 Vision Design Corp. 是一家提供全方位服务的全球设计、生产与物流公司，为世界各地不同规模的企业提供完整的一站式解决方案。',
    'about.p2': '凭借超过 35 年的行业经验，我们的专业团队致力于引导产品走过生命周期的每一个阶段——从构想、设计与开发，到采购、制造、物流与品牌建设。',
    'about.p3': '我们致力于提供最高的质量标准，同时保持可持续的高性价比定价，确保在每一个环节都为客户带来卓越成果。',
    'pil1.t': '设计', 'pil1.d': '从概念到工艺单——我们将品牌愿景转化为精准、可直接投产的设计。',
    'pil2.t': '生产', 'pil2.d': '在每个阶段进行严格的供应商监督、打样、检验与质量控制。',
    'pil3.t': '物流', 'pil3.d': '端到端的运输、贴标与交付解决方案，节省时间与成本。',
    'pil4.t': '战略', 'pil4.d': '以 35 年区域经验为后盾，提供市场进入、授权与分销方面的指导。',

    'svc.label': '我们的服务', 'svc.title': '每个阶段，每个细节。',
    'svc.sub': '我们包办一切，让您无需操心。从第一张草图到最终销售。',
    'svc1.t': '市场研究', 'svc1.d': '竞争品牌分析、消费者价格情报与受众细分，帮助您的产品实现有效定位。',
    'svc2.t': '品牌基因', 'svc2.d': '我们维护并强化您的品牌识别——从色彩传承与美学方向，到所有接触点上一致的视觉与质感。',
    'svc3.t': '辅料与品牌标识', 'svc3.d': '吊牌、主标、标志印花、配件与包装的设计与规划——全部与您的品牌识别保持一致。',
    'svc4.t': '面料开发', 'svc4.d': '丰富的面料库与供应商网络。再生材料、特殊克重与混合材质——按您的确切规格采购。',
    'svc5.t': '特殊辅料', 'svc5.d': '防水拉链、定制拉头、徽章与刺绣——让您的产品在激烈的市场竞争中脱颖而出的独特细节。',
    'svc6.t': '工艺单', 'svc6.d': '细致严谨的技术文件——面料细节、色号、尺寸、工艺做法、缝线与辅料位置。生产的权威蓝图。',
    'svc7.t': '打样', 'svc7.d': '以实际颜色、面料与辅料制作完整样衣，并带有标志与印花设计，100% 准确呈现大货效果。',
    'svc8.t': '生产与质检', 'svc8.d': '在每个生产阶段进行严格的供应商监督。通过主动检验优化效率，并在整个制造过程中保持最高质量标准。',
    'svc9.d': '贴标、特殊包装与运输——包括直接配送至指定国家。我们借助工厂网络缩短物流时间并降低成本。',
    'svc10.t': '产品拍摄', 'svc10.d': '统筹协调的产品摄影，捕捉细节、质感与设计特点——与您的品牌识别完美契合。',
    'svc11.t': '电子商务', 'svc11.d': '平台开发与用户体验设计，提升线上购物体验——为提高互动与转化而打造。',
    'svc12.t': '零售与店中店', 'svc12.d': '道具设计、店铺布局与全球道具采购——依托我们的全球网络，打造独特的定制化零售环境。',
    'svc13.t': '视觉陈列', 'svc13.d': '量身定制的解决方案，提升品牌曝光与顾客互动——打造引人入胜的店内体验，提升零售形象。',
    'svc14.t': '拉丁美洲市场战略', 'svc14.d': '与拉丁美洲各地的分销商和大型零售商拥有 35 年的合作关系。我们指导客户在每个国家完成市场进入、授权与 DTC 战略。',

    'cli.label': '谁信任我们', 'cli.title': '我们的客户',
    'cli.sub': '深受时尚、运动与生活方式领域全球领先品牌和零售商的信赖。',

    'glob.label': '我们在哪里', 'glob.title': '全球布局',
    'glob.p1': '我们的总部与展厅设在巴拿马和中国，使我们在全球供应链的两端都拥有战略性布局。我们积极服务于巴拿马、美国、哥伦比亚、墨西哥、阿根廷、乌拉圭、荷兰、越南和日本的客户。',
    'glob.p2': '无论您的业务在何处运营，我们都以同样的承诺提供品质、一致性，以及从设计到交付的顺畅执行。',
    'glob.hq': '总部：巴拿马与中国',
    'loc.hqshow': '总部与展厅', 'loc.hqprod': '总部与生产中心', 'loc.markets': '服务市场',
    'c.pa': '巴拿马', 'c.cn': '中国', 'c.us': '美国', 'c.co': '哥伦比亚', 'c.mx': '墨西哥', 'c.ar': '阿根廷', 'c.uy': '乌拉圭', 'c.nl': '荷兰', 'c.vn': '越南', 'c.jp': '日本',

    'contact.label': '联系我们', 'contact.title': '携手共创未来',
    'contact.p': '无论您是在推出新的产品线、进入新市场，还是在寻找可靠的全方位服务合作伙伴——我们都期待您的来信。',
    'contact.wa': '通过 WhatsApp 联系',
    'form.name': '姓名', 'form.company': '公司', 'form.email': '电子邮箱', 'form.message': '留言', 'form.send': '发送留言',
    'ph.name': '您的姓名', 'ph.company': '您的公司', 'ph.message': '请告诉我们您的项目或需求……',
    'form.sending': '发送中…',
    'form.required': '请填写所有必填项。',
    'form.success': '留言已发送，我们会尽快与您联系。',
    'form.error': '出现问题，请直接发送邮件至 360@360visiondc.com',

    'footer.contact': '联系', 'footer.rights': '© 2026 360 Vision Design Corp. 版权所有。',
  },

  hi: {
    'nav.about': 'हमारे बारे में', 'nav.services': 'सेवाएँ', 'nav.clients': 'ग्राहक', 'nav.global': 'वैश्विक', 'nav.contact': 'संपर्क करें',
    'hero.tagline': 'संपूर्ण-सेवा वैश्विक डिज़ाइन,<br>उत्पादन और लॉजिस्टिक्स',
    'hero.stat1': 'वर्षों का अनुभव', 'hero.stat2': 'देश', 'hero.stat3': 'टर्न-की समाधान', 'hero.cta': 'हमारे साथ काम करें',
    'col.men': 'पुरुष', 'col.women': 'महिला', 'col.boy': 'लड़के', 'col.girl': 'लड़कियाँ',

    'about.label': 'हम कौन हैं', 'about.title': 'संक्षेप में',
    'about.p1': '360 Vision Design Corp. एक संपूर्ण-सेवा वैश्विक डिज़ाइन, उत्पादन और लॉजिस्टिक्स कंपनी है, जो दुनिया भर में हर आकार के व्यवसायों को व्यापक, टर्न-की समाधान प्रदान करती है।',
    'about.p2': '35 से अधिक वर्षों की उद्योग विशेषज्ञता के साथ, हमारी समर्पित टीम उत्पादों को उनके जीवनचक्र के हर चरण में मार्गदर्शन देने में माहिर है — विज़न, डिज़ाइन और विकास से लेकर सोर्सिंग, निर्माण, लॉजिस्टिक्स और ब्रांडिंग तक।',
    'about.p3': 'हम टिकाऊ और किफ़ायती मूल्य बनाए रखते हुए उच्चतम गुणवत्ता मानक देने के लिए प्रतिबद्ध हैं, ताकि हर कदम पर हमारे ग्राहकों को असाधारण परिणाम मिलें।',
    'pil1.t': 'डिज़ाइन', 'pil1.d': 'कॉन्सेप्ट से टेक पैक तक — हम ब्रांड के विज़न को सटीक, उत्पादन के लिए तैयार डिज़ाइनों में बदलते हैं।',
    'pil2.t': 'उत्पादन', 'pil2.d': 'हर चरण पर कड़ी वेंडर निगरानी, सैंपलिंग, निरीक्षण और गुणवत्ता नियंत्रण।',
    'pil3.t': 'लॉजिस्टिक्स', 'pil3.d': 'शिपिंग, लेबलिंग और डिलीवरी के संपूर्ण समाधान, जो समय और लागत घटाते हैं।',
    'pil4.t': 'रणनीति', 'pil4.d': '35 वर्षों की क्षेत्रीय विशेषज्ञता के आधार पर बाज़ार प्रवेश, लाइसेंसिंग और वितरण में मार्गदर्शन।',

    'svc.label': 'हम क्या करते हैं', 'svc.title': 'हर चरण। हर बारीकी।',
    'svc.sub': 'हम सब कुछ संभालते हैं ताकि आपको न करना पड़े। पहले स्केच से लेकर अंतिम बिक्री तक।',
    'svc1.t': 'बाज़ार अध्ययन', 'svc1.d': 'प्रतिस्पर्धी ब्रांड विश्लेषण, उपभोक्ता मूल्य जानकारी और ऑडियंस सेगमेंटेशन, ताकि आपका उत्पाद प्रभावी ढंग से स्थापित हो सके।',
    'svc2.t': 'ब्रांड डीएनए', 'svc2.d': 'हम आपके ब्रांड की पहचान को सुरक्षित रखते और निखारते हैं — रंग विरासत और सौंदर्य दिशा से लेकर सभी टचपॉइंट्स पर एक-सी छवि तक।',
    'svc3.t': 'ट्रिम्स और ब्रांडिंग', 'svc3.d': 'हैंगटैग, मुख्य लेबल, लोगो प्रिंट, एक्सेसरीज़ और पैकेजिंग का डिज़ाइन और योजना — सब कुछ आपकी ब्रांड पहचान के अनुरूप।',
    'svc4.t': 'फ़ैब्रिक विकास', 'svc4.d': 'विस्तृत फ़ैब्रिक लाइब्रेरी और वेंडर नेटवर्क। रीसाइकल्ड सामग्री, विशेष वज़न और मिक्स्ड-मीडिया — आपकी सटीक ज़रूरतों के अनुसार सोर्स किए गए।',
    'svc5.t': 'विशेष ट्रिम्स', 'svc5.d': 'वॉटरप्रूफ़ ज़िपर, कस्टम पुलर, पैच और कढ़ाई — ख़ास बारीकियाँ जो प्रतिस्पर्धी बाज़ार में आपके उत्पाद को अलग पहचान देती हैं।',
    'svc6.t': 'टेक पैक', 'svc6.d': 'बारीक दस्तावेज़ीकरण — फ़ैब्रिक विवरण, कलर कोड, माप, निर्माण विधियाँ, सिलाई और ट्रिम की जगहें। उत्पादन का निर्णायक ब्लूप्रिंट।',
    'svc7.t': 'सैंपलिंग', 'svc7.d': 'वास्तविक रंगों, फ़ैब्रिक और ट्रिम्स में — लोगो और प्रिंट डिज़ाइन सहित — तैयार किए गए पूरे सैंपल सेट, जो बल्क उत्पादन को 100% सटीक रूप से दर्शाते हैं।',
    'svc8.t': 'उत्पादन और गुणवत्ता नियंत्रण', 'svc8.d': 'उत्पादन के हर चरण पर कड़ी वेंडर निगरानी। दक्षता बढ़ाने और पूरे निर्माण के दौरान उच्चतम गुणवत्ता मानक बनाए रखने के लिए सक्रिय निरीक्षण।',
    'svc9.d': 'लेबलिंग, विशेष पैकिंग और शिपिंग — जिसमें चुनिंदा देशों में सीधी डिलीवरी शामिल है। हम अपने फ़ैक्टरी नेटवर्क से लॉजिस्टिक्स का समय और लागत घटाते हैं।',
    'svc10.t': 'फ़ोटोशूट', 'svc10.d': 'समन्वित प्रोडक्ट फ़ोटोग्राफ़ी जो बारीकियों, टेक्सचर और डिज़ाइन की ख़ूबियों को कैद करती है — आपकी ब्रांड पहचान के पूरी तरह अनुरूप।',
    'svc11.t': 'ई-कॉमर्स', 'svc11.d': 'प्लेटफ़ॉर्म विकास और UX डिज़ाइन जो ऑनलाइन ख़रीदारी के अनुभव को बेहतर बनाते हैं — जुड़ाव और कन्वर्ज़न बढ़ाने के लिए बनाए गए।',
    'svc12.t': 'रिटेल और शॉप-इन-शॉप', 'svc12.d': 'फ़िक्स्चर डिज़ाइन, स्टोर लेआउट और वैश्विक फ़िक्स्चर सोर्सिंग — हमारे विश्वव्यापी नेटवर्क के सहारे एक विशिष्ट, अनुकूलित रिटेल माहौल।',
    'svc13.t': 'विज़ुअल मर्चेंडाइज़िंग', 'svc13.d': 'आपकी ज़रूरत के अनुसार समाधान जो ब्रांड की दृश्यता और ग्राहक जुड़ाव बढ़ाते हैं — स्टोर में ऐसे आकर्षक अनुभव जो रिटेल उपस्थिति को ऊँचा उठाते हैं।',
    'svc14.t': 'लैटिन अमेरिका बाज़ार रणनीति', 'svc14.d': 'पूरे लैटिन अमेरिका में वितरकों और बड़े रिटेलरों के साथ 35 वर्षों के संबंध। हम ग्राहकों को हर देश में बाज़ार प्रवेश, लाइसेंसिंग और DTC रणनीतियों में मार्गदर्शन देते हैं।',

    'cli.label': 'हम पर किसका भरोसा है', 'cli.title': 'हमारे ग्राहक',
    'cli.sub': 'फ़ैशन, स्पोर्ट और लाइफ़स्टाइल के अग्रणी वैश्विक ब्रांडों और रिटेलरों का भरोसा।',

    'glob.label': 'हम कहाँ हैं', 'glob.title': 'वैश्विक उपस्थिति',
    'glob.p1': 'हमारे मुख्यालय और शोरूम पनामा और चीन में हैं, जिससे वैश्विक सप्लाई चेन के दोनों सिरों पर हमारी रणनीतिक उपस्थिति है। हम पनामा, संयुक्त राज्य अमेरिका, कोलंबिया, मेक्सिको, अर्जेंटीना, उरुग्वे, नीदरलैंड, वियतनाम और जापान के ग्राहकों को सक्रिय रूप से सेवा देते हैं।',
    'glob.p2': 'आपका व्यवसाय जहाँ भी हो, हम डिज़ाइन से डिलीवरी तक गुणवत्ता, निरंतरता और सहज निष्पादन की वही प्रतिबद्धता निभाते हैं।',
    'glob.hq': 'मुख्यालय: पनामा और चीन',
    'loc.hqshow': 'मुख्यालय और शोरूम', 'loc.hqprod': 'मुख्यालय और उत्पादन केंद्र', 'loc.markets': 'सेवा प्राप्त बाज़ार',
    'c.pa': 'पनामा', 'c.cn': 'चीन', 'c.us': 'संयुक्त राज्य अमेरिका', 'c.co': 'कोलंबिया', 'c.mx': 'मेक्सिको', 'c.ar': 'अर्जेंटीना', 'c.uy': 'उरुग्वे', 'c.nl': 'नीदरलैंड', 'c.vn': 'वियतनाम', 'c.jp': 'जापान',

    'contact.label': 'संपर्क करें', 'contact.title': 'आइए मिलकर कुछ बनाएँ',
    'contact.p': 'चाहे आप नई प्रोडक्ट लाइन शुरू कर रहे हों, किसी नए बाज़ार में प्रवेश कर रहे हों, या एक भरोसेमंद संपूर्ण-सेवा भागीदार की तलाश में हों — हमें आपसे बात करके ख़ुशी होगी।',
    'contact.wa': 'WhatsApp पर चैट करें',
    'form.name': 'नाम', 'form.company': 'कंपनी', 'form.email': 'ईमेल', 'form.message': 'संदेश', 'form.send': 'संदेश भेजें',
    'ph.name': 'आपका नाम', 'ph.company': 'आपकी कंपनी', 'ph.message': 'हमें अपने प्रोजेक्ट या अपनी ज़रूरत के बारे में बताएँ...',
    'form.sending': 'भेजा जा रहा है…',
    'form.required': 'कृपया सभी आवश्यक फ़ील्ड भरें।',
    'form.success': 'संदेश भेज दिया गया। हम जल्द ही आपसे संपर्क करेंगे।',
    'form.error': 'कुछ गड़बड़ हो गई। कृपया हमें सीधे 360@360visiondc.com पर ईमेल करें',

    'footer.contact': 'संपर्क', 'footer.rights': '© 2026 360 Vision Design Corp. सर्वाधिकार सुरक्षित।',
  },
};

const LANGS = {
  en: { code: 'en',      label: 'EN'   },
  es: { code: 'es',      label: 'ES'   },
  zh: { code: 'zh-Hans', label: '中文' },
  hi: { code: 'hi',      label: 'हिन्दी' },
};

// WhatsApp opens with a pre-filled message; Spanish for Spanish visitors, English otherwise
const WA_NUMBER = '50769895949';
const WA_TEXT = {
  en: "Hello, I'm contacting 360 Vision Design Corp. through your website.",
  es: 'Hola, me comunico con 360 Vision Design Corp. a través de su sitio web.',
};

let currentLang = 'en';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

// Capture the English text from the page so it never has to be duplicated here
document.querySelectorAll('[data-i18n]').forEach(el => {
  const k = el.dataset.i18n;
  if (!(k in I18N.en)) I18N.en[k] = el.textContent;
});
document.querySelectorAll('[data-i18n-html]').forEach(el => {
  const k = el.dataset.i18nHtml;
  if (!(k in I18N.en)) I18N.en[k] = el.innerHTML;
});
document.querySelectorAll('[data-i18n-ph]').forEach(el => {
  const k = el.dataset.i18nPh;
  if (!(k in I18N.en)) I18N.en[k] = el.placeholder;
});

function setLang(lang) {
  if (!LANGS[lang]) lang = 'en';
  currentLang = lang;
  document.documentElement.lang = LANGS[lang].code;

  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT[lang] || WA_TEXT.en)}`;
  document.querySelectorAll('.wa-link').forEach(a => { a.href = waUrl; });

  document.getElementById('langCurrent').textContent = LANGS[lang].label;
  document.querySelectorAll('[data-lang]').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

// Language switcher
const langBtn  = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');

function closeLangMenu() {
  langMenu.classList.remove('open');
  langBtn.setAttribute('aria-expanded', 'false');
}

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const open = langMenu.classList.toggle('open');
  langBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('[data-lang]').forEach(b => {
  b.addEventListener('click', () => {
    setLang(b.dataset.lang);
    closeLangMenu();
    document.getElementById('navLinks').classList.remove('open');
  });
});

document.addEventListener('click', closeLangMenu);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLangMenu(); });

// English is the default; a returning visitor keeps the language they picked
let savedLang = 'en';
try { savedLang = localStorage.getItem('lang') || 'en'; } catch (e) {}
setLang(savedLang);
