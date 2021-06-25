export default {
  global: {
    componenteFormativo: 'Protocolos de atención',
    descripcionCurso:
      'La comunicación digital generó un nuevo escenario de atención al cliente, transformando la manera como las empresas se comunican y recogen la analítica de los clientes, lo que permite la generación de productos y solución de necesidades de estos. En este sentido, el presente componente de formación nos aproxima a la información y analítica como un creador de valor para la empresa y el cliente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Protocolos de atención y respuesta para redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ventajas de un protocolo de atención al cliente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Dimensiones del protocolo de atención al cliente',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manejo de crisis en atención al cliente en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas para analítica e informes de resultados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elaboración e informe descriptivo del producto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Elaboración e interpretación de gráficos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Características de los gráficos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos de analíticas',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Tipos de métrica',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Elaboración de informes con proyección de mejora',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Nacional de Evaluación de la Calidad y Acreditación –ANECA. (s.f.). Plan de mejoras: herramienta de trabajo.',
      link:
        'http://www.uantof.cl/public/docs/universidad/direccion_docente/15_elaboracion_plan_de_mejoras.pdf',
    },
    {
      referencia:
        'AITECO Consultores S.L. (2019). AITECO Consultores: Planes de Mejora.',
      link: 'https://www.aiteco.es/calidad/plan-de-mejora/',
    },
    {
      referencia:
        'AQU Catalunya (2005). La calidad, garantía de mejora. Marco general para el establecimiento, el seguimiento y la revisión de los planes de mejora.',
      link: 'https://www.aqu.cat/doc/doc_40159984_1.pdf',
    },
    {
      referencia:
        'Castillo, A. y Ponce, D. (2015). Comunicación de Crisis 2.0. Madrid, España: Editorial Fragua.',
    },
    {
      referencia:
        'Da Silva, D. (2020). Protocolo de atención y servicio al cliente: ¿qué es, por qué es importante para tu empresa, ¿cómo hacerlo y cuáles son sus ventajas? Web Content & SEO Associate, LATAM.',
      link:
        'https://www.zendesk.com.mx/blog/protocolo-de-atencion-al-cliente/#:~:text=%E2%80%9CUn%20protocolo%20de%20atenci%C3%B3n%20es,qu%C3%A9%20es%20una%20buena%20atenci%C3%B3n%E2%80%9D.',
    },
    {
      referencia:
        'Druker, P. (1990). El ejecutivo eficaz. Buenos Aires: Editorial Sudamericana.',
    },
    {
      referencia:
        'Emprendedores. (2020). Emprendedores: Pautas para elaborar un informe eficaz, comprensible y bien presentado.',
      link:
        'https://www.emprendedores.es/gestion/como-elaborar-un-documento-eficaz-comprensible-y-bien-presentado/',
    },
    {
      referencia:
        'Enrique, A. (2017). La comunicación empresarial en situación de crisis. [Tesis de doctorado no publicada]. Universidad Autónoma de Barcelona.',
      link: 'https://ddd.uab.cat/pub/tesis/2007/tdx-0523108-150642/aej1de1.pdf',
    },
    {
      referencia: 'Maldonado, S. (s.f.). Analítica Web. Medir para triunfar.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=8oqgwKf7z2kC&oi=fnd&pg=PA15&dq=Anal%C3%ADtica+Web+2.0&ots=NIerrM0UgY&sig=dUtx-OU3guF-0F7NERHq-Vhun7Q#v=onepage&q=Anal%C3%ADtica%20Web%202.0&f=false',
    },
    {
      referencia:
        'Morales, M. (2010). Analítica Web para empresas: Arte, ingenio y anticipación.',
      link:
        'https://books.google.com.mx/books?id=j7QtAwAAQBAJ&printsec=frontcover#v=onepage&q&f=false',
    },
    {
      referencia:
        'Observatorio Digital (2020). Observatorio Digital: Analítica Digital: mejores herramientas de analítica digital de 2020.',
      link: 'https://observatorio.digital/blog/analitica-digital-2/#anal',
    },
    {
      referencia:
        'Pérez, P. y García, F. (2010). La comunicación de crisis como elemento clave de la comunicación empresarial. Revista ICONO, 14, 2010, Año 8, Vol. 2, pp. 42-56. ISSN 1697-8293. Madrid (España).',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3301612',
    },
    {
      referencia:
        'Proaño, D.; Gisbert, V. y Pérez, E. (2017). 3C Empresa: investigación y pensamiento crítico. (E. Especial, Ed.). DOI:',
      link: 'http://dx.doi.org/10.17993/3cemp.2017.especial.50-56/',
    },
    {
      referencia:
        'Tomas. D (2018). Analítica web y 5 herramientas para medir tus resultados online. Ciberclik [Blog].',
      link:
        'https://www.cyberclick.es/numerical-blog/analitica-web-y-5-herramientas-para-medir-tus-resultados-online#:~:text=La%20anal%C3%ADtica%20web%20consiste%20en,con%20%C3%A9l%20de%20diversas%20maneras',
    },
  ],
  glosario: [
    {
      termino: 'Canales de Comunicación',
      significado:
        'Soporte por el cual se emite el mensaje entre el emisor y el receptor en el proceso de comunicación, puede ser la radio, tv, prensa, internet, email, etc.',
    },
    {
      termino: 'Clientes',
      significado:
        'Persona que hace uso de un producto o servicio, el cual paga por este.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Dentro del marketing, se define como el hecho de la lealtad que tiene un cliente con una marca.',
    },
    {
      termino: 'Google Analytics',
      significado:
        'Herramienta usada para analizar datos en un sitio web y conocer mejor a los clientes.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de reglas de formalidad y establecimiento de ruta de seguimiento para una situación o manejo de un elemento.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'Estructuras formadas en Internet por personas u organizaciones que se conectan a partir de intereses o valores comunes.',
    },
    {
      termino: 'Social media',
      significado:
        'Plataformas de comunicación en línea donde el contenido es creado por los propios usuarios mediante el uso de la Web 2.0, que facilitan la edición, publicación e intercambio de información.',
    },
    {
      termino: 'Tendencia',
      significado: 'Corriente que se orienta a determinada dirección.',
    },
    {
      termino: 'Web',
      significado:
        'Conjunto de información que se encuentra en una dirección determinada de internet.',
    },
  ],
  complementario: [
    {
      texto:
        'Observatorio Digital (2020). Observatorio Digital: Analítica Digital: mejores herramientas de analítica digital de 2020.',
      tipo: 'Página Web',
      link: 'https://observatorio.digital/blog/analitica-digital-2/#anal',
    },
    {
      texto: 'Maldonado, S. (s.f.). Analítica Web. Medir para triunfar.',
      tipo: 'Libro Digital',
      link:
        'https://books.google.es/books?hl=es&lr=&id=8oqgwKf7z2kC&oi=fnd&pg=PA15&dq=Anal%C3%ADtica+Web+2.0&ots=NIerrM0UgY&sig=dUtx-OU3guF-0F7NERHq-Vhun7Q#v=onepage&q=Anal%C3%ADtica%20Web%202.0&f=false',
    },
    {
      texto:
        'Emprendedores (2020). Emprendedores: Pautas para elaborar un informe eficaz, comprensible y bien presentado.',
      tipo: 'Página Web',
      link:
        'https://www.emprendedores.es/gestion/como-elaborar-un-documento-eficaz-comprensible-y-bien-presentado/',
    },
    {
      texto:
        'Agencia Nacional de Evaluación de la Calidad y Acreditación-ANECA. (s.f.). Plan de mejoras: herramienta de trabajo.',
      tipo: 'Artículo',
      link:
        'http://www.uantof.cl/public/docs/universidad/direccion_docente/15_elaboracion_plan_de_mejoras.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Camila Álvarez Trujillo',
        cargo: 'Contratista Diseño Curricular',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Liliana Ceballos',
        cargo: 'Contratista Diseño Curricular',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia  Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: [
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Víctor Cardenas',
          'Jose Tang',
          'Maria Camila Ovalle',
          'Camilo Villamizar',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny patricia Ulloa villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
