export default {
  global: {
    componenteFormativo:
      'Alistamiento en el LMS, según orientaciones institucionales para la formación virtual',
    descripcionCurso:
      'El alistamiento en un LMS hace referencia al proceso de preparar y organizar todos los materiales y actividades necesarias para implementar un curso o programa de formación virtual. Un alistamiento adecuado garantiza una experiencia de aprendizaje fluida y efectiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Gestión de la Formación en Ambientes Virtuales de Aprendizaje - FAVA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Funciones del instructor-tutor virtual',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Lista de chequeo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Momentos de la ejecución de la formación virtual',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Alistamiento',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Entorno LMS',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Herramientas del LMS',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas de comunicación sincrónicas y asincrónicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Herramientas sincrónicas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas asincrónicas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Implementación de herramientas en el LMS',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_41311588_DU.zip',
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
  complementario: [
    {
      tema: '1.2. Lista de chequeo',
      referencia: 'CompromISO SENA. (2024). SIGA 2024.',
      tipo: 'Página web',
      link: 'https://compromiso.sena.edu.co/index.php?text=inicio&id=1',
    },
  ],
  glosario: [
    {
      termino: 'Alistamiento',
      significado:
        'Proceso de planeación y preparación de los elementos del LMS, desarrollado por el instructor antes de iniciar el proceso formativo.',
    },
    {
      termino: 'Asincrónica',
      significado:
        'Término de comunicación que se da en tiempos diferidos o fuera de línea.',
    },
    {
      termino: 'AVA',
      significado:
        'Sigla utilizada para referirse a los Ambientes Virtuales de Aprendizaje.',
    },
    {
      termino: 'FAVA',
      significado:
        'Sigla utilizada para hacer referencia a la Formación en Ambientes Virtuales de Aprendizaje.',
    },
    {
      termino: 'Instructor-tutor',
      significado:
        'Sujeto que participa en el proceso de enseñanza-aprendizaje, quien asume el rol de facilitador, orientador y apoyo, quien retroalimenta y evalúa al aprendiz durante su proceso formativo, haciendo uso de distintas técnicas didácticas activas, bajo la estrategia de aprendizaje por proyectos, la cual le permite contribuir con su propio aprendizaje.',
    },
    {
      termino: 'Lista de chequeo',
      significado:
        'Instrumento diseñado y utilizado por el SENA para evaluar una competencia o función determinada.',
    },
    {
      termino: 'LMS',
      significado:
        'Sigla del término en inglés <em>Learning Management System</em>, que traducido al español hace referencia al sistema de gestión de aprendizaje.',
    },
    {
      termino: 'Sincrónica',
      significado:
        'Término utilizado para la comunicación entre dos o más personas, que se da de manera simultánea o en línea. Interactividad en tiempo real.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ángel, W. I. (2020). Guía de orientaciones para la formación en ambientes virtuales de aprendizaje -AVA-. Servicio Nacional de Aprendizaje SENA.',
      link: '',
    },
    {
      referencia:
        'SMeza, J. (2012). Modelo pedagógico para proyectos de formación virtual.',
      link:
        'http://www.facico-uaemex.mx/diplomado/2.3%20BB%20MEZA%20JOHANA.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmer Ismael Ángel Benavides',
          cargo: 'Líder equipo / Asesor formación virtual',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Aura Andrea Sánchez Suárez',
          cargo: 'E-Pedagoga',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Bibiana Lucía Camargo Romero',
          cargo: 'E-Pedagoga',
          centro: 'Centro de Comercio y Servicios - Regional Tolima ',
        },
        {
          nombre: 'Diana Patricia Carmona Milian',
          cargo: 'E-Pedagoga',
          centro:
            'Centro de Gestión y Desarrollo Sostenible Surcolombiano - Regional Huila',
        },
        {
          nombre: 'Humberto Amaya Alvear',
          cargo: 'E-Pedagogo',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar ',
        },
        {
          nombre: 'Laura Ivonne Rusinque Gamboa',
          cargo: 'E-Pedagoga',
          centro: 'Centro Agropecuario la Granja-Regional Tolima',
        },
        {
          nombre: 'Marisol Báez Solano',
          cargo: 'E-Pedagoga',
          centro: 'Centro de Industria y la Construcción - Regional Tolima',
        },
        {
          nombre: 'María Cecilia Aroca Díaz',
          cargo: 'Soporte de seguimiento académico',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Diego Alejandro Córdoba Mavesoy',
          cargo: 'Soporte de diseño y multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz ',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón ',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
