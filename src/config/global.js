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
        'Zlackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA: ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      referencia:
        'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. ',
    },
    {
      referencia:
        'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
    },
    {
      referencia:
        'Áciedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
    },
    {
      referencia:
        'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
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
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
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
