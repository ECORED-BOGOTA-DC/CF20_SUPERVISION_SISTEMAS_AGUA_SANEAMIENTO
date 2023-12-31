export default {
  global: {
    componenteFormativo: 'Operación de sistemas y unidades',
    descripcionCurso:
      'Con el fin de conocer los diferentes sistemas y unidades de tratamiento de agua residual, en este componente podrá identificar desde las bases teóricas hasta los cálculos aplicativos más específicos en el tratamiento de aguas residuales, basado en las normas aplicables para el contexto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Fundamentos básicos para el tratamiento de aguas residuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Factores de conversión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Densidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aguas residuales o vertimientos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tratamiento de las aguas residuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normatividad aplicada',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos y equipos de tratamiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tasa retributiva',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_2_4',
          },
        ],
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
        download: 'downloads/921200_CF20_DU.pdf',
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
      tema: 'Aguas residuales o vertimientos',
      referencia:
        'Corporación Autónoma Regional de Antioquia [CORANTIOQUIAOFICIAL]. (2016, 25 de noviembre). <i>Control y seguimiento a los  vertimientos.</i> [vídeo]. <b>YouTube.</b>',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=uHjJi2YU43M',
    },
    {
      tema: 'Fundamentos básicos para el tratamiento de aguas residuales',
      referencia:
        'Guerrero Legarreta, M. (2010). El agua. FCE - Fondo de Cultura Económica.',
      tipo: 'Libro',
      link:
        'https://agua.org.mx/wp-content/uploads/2007/06/el-agua-manuel-guerrero.pdf',
    },
    {
      tema: 'Tratamiento de las aguas residuales',
      referencia:
        'Ministerio de Desarrollo Económico. (2000). <i>Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000.</i> Título - El tratamiento de aguas residuales. Dirección de agua potable y saneamiento básico',
      tipo: 'Libro',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_e_.pdf',
    },
    {
      tema: 'Métodos y equipos de tratamiento',
      referencia:
        'Pedroza, E. (2001). <i>Serie autodidáctica de medición, canaleta Parshall.</i> México: Instituto mexicano de tecnología del agua. ISBN: 968-5563-04-X.',
      tipo: 'Libro',
      link: 'https://www.academia.edu/20330463/Canal_Parshall',
    },
    {
      tema: 'Normatividad aplicada en el tratamiento de aguas',
      referencia:
        'Presidencia de la República de Colombia. (2012). Decreto 2667.  21 de diciembre de 2012.',
      tipo: 'Artículo',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/decreto_2667_2012.htm',
    },
    {
      tema: 'Normatividad aplicada en el tratamiento de aguas',
      referencia:
        'Resolución 0631. Ministerio de Ambiente y Desarrollo Sostenible. Bogotá. Colombia. Diario Oficial No. 49.486 de 18 de abril de 2015',
      tipo: 'Artículo',
      link: 'https://www.leyex.info/leyes/Resolucionmads631de2015.htm',
    },
    {
      tema: 'Operación de sistemas y unidades',
      referencia:
        'Tippens Paul. (2011). <i>Física: conceptos y aplicaciones.</i> Mc Graw Hill. ISBN 9786071504715',
      tipo: 'Libro',
      link:
        'https://www.academia.edu/21268584/Fisica_Conceptos_y_Aplicaciones_Paul_Tippens_Septima_Edicion',
    },
  ],
  glosario: [
    {
      termino: 'Afluente',
      significado:
        'agua residual u otro líquido que ingrese a un reservorio, o algún proceso de tratamiento.',
    },
    {
      termino: 'Aguas crudas',
      significado:
        'aguas residuales que no han sido tratadas (Ministerio de Desarrollo).',
    },
    {
      termino: 'Aguas servidas',
      significado:
        'aguas de desecho provenientes de lavamanos, tinas de baño, duchas, lavaplatos, y otros artefactos que no descargan materias fecales.',
    },
    {
      termino: 'Bacteria',
      significado:
        'grupo de organismos microscópicos unicelulares, rígidos, carentes de clorofila, que desempeñan una serie de procesos de tratamiento que incluyen oxidación biológica, fermentaciones, digestión, nitrificación y desnitrificación.',
    },
    {
      termino: 'Carga contaminante',
      significado:
        'es el producto de la concentración másica de una sustancia por el caudal volumétrico del líquido que la contiene determinado en el mismo sitio. Se expresa en unidades de masa sobre tiempo.',
    },
    {
      termino: 'Cauce natural',
      significado:
        'faja de terreno que ocupan las aguas de una corriente al alcanzar sus niveles máximos, por efecto de las crecientes ordinarias.',
    },
    {
      termino: 'Cauces artificiales',
      significado:
        'conductos descubiertos, construidos por el ser humano para diversos fines, en los cuales discurre agua de forma permanente o intermitente.',
    },
    {
      termino: 'Demanda Bioquímica de Oxígeno (DBO) o Demanda de oxígeno',
      significado:
        'cantidad de oxígeno usado en la estabilización de la materia orgánica carbonácea y nitrogenada, por acción de los microorganismos en condiciones de tiempo y temperatura especificados (generalmente cinco días y 20 ºC). Mide indirectamente el contenido de materia orgánica biodegradable.',
    },
    {
      termino: 'Demanda Química de Oxígeno (DQO)',
      significado:
        'medida de la cantidad de oxígeno requerido para oxidación química de la materia orgánica del agua residual, usando como oxidantes sales inorgánicas de permanganato o dicromato en un ambiente ácido y a altas temperaturas.',
    },
    {
      termino: 'Efluente',
      significado: 'líquido que sale de un proceso de tratamiento.',
    },
    {
      termino: 'Operaciones unitarias',
      significado:
        'hacen referencia a unidades y procedimientos en donde prevalecen mecanismos de tipo físico en las que no se presentan cambios a nivel químico.',
    },
    {
      termino: 'Procesos unitarios',
      significado:
        'involucran reacciones químicas o bioquímicas y cambios a nivel molecular (e.g. una unidad de coagulación y floculación, un reactor biológico, una torre de adsorción, una cámara de desinfección).',
    },
    {
      termino: 'Vertimiento no puntual',
      significado:
        'aquel en el cual no se puede precisar el punto exacto de descarga al cuerpo de agua o al suelo, tal es el caso de vertimientos provenientes de escorrentía, aplicación de agroquímicos u otro similar.',
    },
    {
      termino: 'Vertimiento puntual',
      significado:
        'el que se realiza a partir de un medio de conducción, del cual se puede precisar el punto exacto de descarga al cuerpo de agua, al alcantarillado o al suelo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco Interamericano de Desarrollo y la Asociación Nacional de Industriales (ANDI). (1997). <i>Manual para la caracterización de aguas residuales industriales.</i>',
      link: '',
    },
    {
      referencia:
        'Corporación Autónoma Regional de Antioquia [CORANTIOQUIAOFICIAL]. (2016, 25 de noviembre). <i>Control y seguimiento a los vertimientos.</i> [vídeo]. <i>YouTube.</i>',
      link: 'https://www.youtube.com/watch?v=uHjJi2YU43M',
    },
    {
      referencia:
        'Decreto 50 de 2018. [Presidencia de la República de Colombia].  “Por el cual se modifica parcialmente el Decreto 1076 de 2015, Decreto único Reglamentario del Sector Ambiente y Desarrollo Sostenible en relación con los Consejos Ambientales Regionales de la Macrocuencas (CARMAC), el Ordenamiento del Recurso Hídrico y Vertimientos y se dictan otras disposiciones". 16 de enero de 2018. Bogotá. Colombia.',
      link: '',
    },
    {
      referencia:
        'Decreto 2667 de 2012. [Presidencia de la República de Colombia]. “Por el cual se reglamenta la tasa retributiva por la utilización directa e indirecta del agua como receptor de los vertimientos puntuales, y se toman otras determinaciones”.  Diario Oficial No. 48.651. 21 de diciembre de 2012.',
      link: '',
    },
    {
      referencia:
        'Decreto 3930. [Presidencia de la República de Colombia]. “Por el cual se reglamenta parcialmente el Título I de la Ley 9ª de 1979, así como el Capítulo II del Título VI -Parte III- Libro II del Decreto-ley 2811 de 1974 en cuanto a usos del agua y residuos líquidos y se dictan otras disposiciones]. Diario Oficial 47837. 25 octubre de 2010. Bogotá. Colombia.',
      link: '',
    },
    {
      referencia:
        'Lux, M. (2010). <i>Medidores de flujo en canales abiertos.</i> Guatemala: Universidad de San Carlos.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente. (2002). <i>Guía ambiental formulación de planes de pretratamiento de efluentes industriales.</i> ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2000). Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - <i>El tratamiento de aguas residuales.</i> Dirección de agua potable y saneamiento básico.',
      link: '',
    },
    {
      referencia:
        'Pedroza, E. (2001). <i>Serie autodidáctica de medición, canaleta Parshall.<i> México D.C.: Instituto mexicano de tecnología del agua. ISBN: 968-5563-04-X.',
      link: '',
    },
    {
      referencia:
        'Ramiro Pérez. (2005). <i>Manual de prácticas de laboratorio de hidráulica.</i> Universidad Nacional de Colombia. ',
      link: '',
    },
    {
      referencia:
        'Resolución 0631 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. “Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones”.  Bogotá. Colombia. Diario Oficial No. 49.486 de 18 de abril de 2015. ',
      link: '',
    },
    {
      referencia:
        'Resolución 2115 de 2007. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. “Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano “. 22 de junio de 2007.',
      link: '',
    },
    {
      referencia:
        'Tippens Paul. (2011). <i>Física: conceptos y aplicaciones.</i> Mc Graw Hill ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal Gutiérres',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor Ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Adriana Lozano Zapata',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuador Instruccional',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital.',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológico',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validadora de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validadora de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
