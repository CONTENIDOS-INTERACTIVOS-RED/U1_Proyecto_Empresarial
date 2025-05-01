export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Gestión de proyectos empresariales innovadores y sostenibles',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Análisis del entorno empresarial y las oportunidades de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Paso a paso estratégico para analizar el entorno empresarial utilizando IA',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Herramientas estratégicas de análisis del entorno empresarial',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Identificación de oportunidades de negocio',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elaboración de un plan estratégico integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Introducción al BMC y su importancia en el diseño de negocios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Explicación de los 9 bloques del BMC',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Elaboración del Plan Estratégico Integral',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Arrieta, V., Cervantes, Y., De la Cruz, L. & López, D. (2021). La importancia del diagnóstico estratégico en las organizaciones. Económicas CUC, 42(2), 243-254. DOI:',
      link: 'https://doi.org/10.17981/econcuc.42.2.2021.Ensy.1',
    },
    {
      referencia:
        'Jiménez Calderón, C. E. (Comp.). (2022). Perspectivas del comercio internacional, estrategias y competitividad empresarial: (1 ed.). Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/234905',
    },
    {
      referencia:
        'Bonilla Galle, D. (Comp.). (2021). Entorno global de las organizaciones: estrategias para la internacionalización empresarial: (1 ed.). Fondo Editorial CEIPA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217713',
    },
    {
      referencia:
        'Sánchez Huerta, D. (2020). Análisis FODA o DAFO: el mejor y más completo estudio con 9 ejemplos prácticos: ( ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/189293',
    },
    {
      referencia:
        'Soto Figueroa, M. (2020). Sociedad por acciones simplificada: estrategias empresariales: (2 ed.). Instituto Mexicano de Contadores Públicos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130929',
    },
    {
      referencia:
        'Ortiz Velásquez, M. Pisciotti Quintero, K. & Lombana-Coy, J. (2023). Ruta empresarial: estrategias para la nueva era de los negocios: (1 ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/265177',
    },
  ],
  glosario: [
    {
      termino: 'Análisis FODA',
      significado:
        'herramienta estratégica que permite evaluar las fortalezas, oportunidades, debilidades y amenazas de una empresa o proyecto.',
    },
    {
      termino: 'Análisis PESTEL',
      significado:
        'metodología utilizada para analizar factores políticos, económicos, sociales, tecnológicos, ecológicos y legales que afectan un negocio.',
    },
    {
      termino: 'Big Data',
      significado:
        'conjunto de datos masivos que pueden ser analizados mediante IA para identificar patrones, tendencias y oportunidades de negocio.',
    },
    {
      termino: 'Business Model Canvas (BMC)',
      significado:
        'herramienta visual que permite diseñar y estructurar modelos de negocio mediante 9 bloques clave.',
    },
    {
      termino: 'Competencia',
      significado:
        'empresas o actores que ofrecen productos o servicios similares en el mercado y representan un desafío estratégico.',
    },
    {
      termino: 'Dashboards',
      significado:
        'paneles interactivos que muestran datos clave en tiempo real para la toma de decisiones en una empresa o proyecto.',
    },
    {
      termino: 'Estrategia de negocio',
      significado:
        'plan de acción que define como una empresa alcanzará sus objetivos y logrará una ventaja competitiva.',
    },
    {
      termino: 'Factores internos',
      significado:
        'recursos y capacidades dentro de una organización que determinan su desempeño y competitividad',
    },
    {
      termino: 'IA (Inteligencia Artificial)',
      significado:
        'tecnología que permite automatizar análisis de datos, optimizar procesos y mejorar la toma de decisiones empresariales.',
    },
    {
      termino: 'Indicadores de Gestión (KPIs)',
      significado:
        'métricas que permiten medir el desempeño de un negocio en función de sus objetivos estratégicos.',
    },
    {
      termino: 'Innovación empresarial',
      significado:
        'desarrollo de nuevas ideas, procesos o productos que generan valor en el mercado y mejoran la competitividad de una empresa.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'grupo de clientes o empresas al que se dirige un producto o servicio.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'estructura que define como una empresa genera, entrega y captura valor para sus mercados.',
    },
    {
      termino: 'Plan estratégico',
      significado:
        'documento que establece los objetivos, estrategias y acciones necesarias para el crecimiento sostenible de una empresa.',
    },
    {
      termino: 'Posicionamiento de marca',
      significado:
        'percepción que tienen los consumidores sobre una empresa en comparación con su competencia.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'proceso de dividir el mercado en grupos homogéneos de clientes con características similares.',
    },
    {
      termino: 'Sostenibilidad empresarial',
      significado:
        'estrategia que garantiza que un negocio sea viable a largo plazo, considerando impacto social, ambiental y económico.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'integración de tecnología en todas las áreas de una empresa para mejorar su eficiencia y productividad.',
    },
    {
      termino: 'Toma de decisiones basada en datos',
      significado:
        'uso de información analítica y herramientas tecnológicas para orientar las estrategias empresariales con mayor precisión.',
    },
  ],
}
