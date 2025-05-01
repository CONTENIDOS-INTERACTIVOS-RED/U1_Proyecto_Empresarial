<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Elaboración de un plan estratégico integral'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-full-width.bg-color-3.mb-4
        .px-4.px-md-5
          .row.align-items-center
            .col-lg
              .py-4
                p.text-white La elaboración de un plan estratégico integral es esencial para el desarrollo exitoso de cualquier proyecto empresarial. Este plan proporciona una hoja de ruta clara para alcanzar los objetivos empresariales, alineando recursos y esfuerzos hacia una dirección común.
                p.mb-0.text-white Para guiar mejor el proceso de aprendizaje, se empleará el Business Model Canvas (BMC) antes de desarrollar el Plan Estratégico Integral. Esta estrategia pedagógica permitirá que los estudiantes comprendan la estructura clave del modelo empresarial antes de detallar estrategias operativas, financieras y de crecimiento.
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg").mx-auto


      p.mb-4 Las ventajas de esta metodología para el aprendizaje son: 

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Estructuración lógica del aprendizaje" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Estructuración lógica del aprendizaje
              p El BMC ayuda a visualizar los elementos esenciales de un negocio en una sola página antes de profundizar en estrategias detalladas.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Claridad y enfoque" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Claridad y enfoque
              p Al definir primero la propuesta de valor, los segmentos de clientes y las fuentes de ingresos, los estudiantes podrán crear un plan estratégico más alineado con la realidad del negocio.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-2.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Identificación temprana de desafíos" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Identificación temprana de desafíos
              p El BMC permite detectar debilidades u oportunidades desde el inicio, facilitando la formulación de estrategias más eficaces en el plan estratégico.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-3.png', alt='')

      
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Introducción al BMC y su importancia en el diseño de negocios

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 El Business Model Canvas (BMC) es una herramienta visual estratégica que permite diseñar, analizar y mejorar modelos de negocio de manera estructurada. Su importancia radica en que proporciona una visión clara y concisa de todos los elementos clave del negocio, permitiendo a los emprendedores entender cómo se crea, entrega y captura valor.
      
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Al utilizar el BMC, es posible identificar rápidamente los aspectos más críticos del negocio, explorar diferentes escenarios y optimizar la propuesta de valor. Esta metodología es especialmente útil en la fase inicial del proyecto, ya que permite realizar ajustes ágiles sin necesidad de documentación extensa.
            
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      
      

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Explicación de los 9 bloques del BMC

      p Cada componente del BMC se enfoca en un aspecto clave del negocio:

      .row.align-items-center.mb-5
        .col-lg-8.order-2.order-lg-1
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Propuesta de valor")
              p Define el valor único del producto o servicio y los problemas que resuelve. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Una plataforma de aprendizaje en línea que ofrece cursos accesibles en habilidades digitales demandadas por empresas.

              
            div(numero="2" titulo="Segmentos de clientes")
              p Identifica los grupos de clientes a los que se dirige la oferta. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Estudiantes universitarios que buscan mejorar sus habilidades digitales para el empleo.

            div(numero="3" titulo="Canales")
              p Medios a través de los cuales los clientes reciben el producto o servicio. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Venta a través de una plataforma de e-learning y promoción en redes sociales.
            
            div(numero="4" titulo="Relaciones con los clientes")
              p Estrategias para atraer, retener y fidelizar clientes. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Chatbots para resolver dudas en tiempo real y boletines personalizados.

            div(numero="5" titulo="Flujos de ingresos")
              p Fuentes de ingresos, como ventas, suscripciones o publicidad. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Modelo de suscripción mensual con acceso a contenido exclusivo.
        .col-lg-4.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0



      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

        .col-lg-8
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="6" titulo="Recursos clave")
              p Elementos esenciales para la operación, como infraestructura y talento humano.  
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Plataforma de e-learning, instructores calificados, servidores en la nube.

              
            div(numero="7" titulo="Actividades clave")
              p Acciones específicas para implementar la propuesta de valor. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Plataforma de e-learning, instructores calificados, servidores en la nube.

            div(numero="8" titulo="Socios clave")
              p Aliados estratégicos que apoyan el modelo de negocio.
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Universidades y empresas de tecnología que aportan contenido y certificaciones.

            div(numero="9" titulo="Estructura de costos")
              p Costos fijos y variables asociados a la operación y crecimiento.
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Ejemplo práctico: ] Costos de desarrollo de contenido, mantenimiento de la plataforma y publicidad.


      .bg-color-6.p-4
        p.mb-0 #[strong Implementación del BMC: caso de uso.]

      .bg-color-7.p-4.mb-5
        .row.align-items-center.mb-5
          .col-lg-8
              p #[strong Caso práctico: "EduTech Solutions" - Plataforma de educación en línea]
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Propuesta de valor:] cursos de alta calidad accesibles desde cualquier lugar.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Segmentos de clientes:] estudiantes universitarios, profesionales en formación continua.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Canales:] plataforma web, aplicación móvil, redes sociales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Relaciones con los clientes:] tutorías personalizadas, soporte 24/7.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Flujos de ingresos:] suscripción mensual y cursos individuales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Recursos clave:] Plataforma LMS, equipo de instructores.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Actividades clave:] desarrollo de contenido, estrategias de marketing.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Socios clave:] empresas de certificación, universidades.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Estructura de costos:] desarrollo tecnológico, publicidad, soporte.
              

              
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/7.svg", alt="", data-aos="zoom-in").mb-4.mb-lg-0


      h2 Herramientas y plataformas para crear el BMC

      p Existen diversas herramientas en línea que permiten elaborar el Business Model Canvas de forma visual e interactiva, algunas de las más utilizadas son:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-1.png")
              .col-lg-7.order-lg-1
                h5 Canva
                p Plataforma gratuita con plantillas de BMC editables. Permite personalizar cada bloque con información detallada. www.canva.com
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-2.png")
              .col-lg-7.order-lg-1
                h5 Strategyzer
                p Herramienta profesional para la gestión de modelos de negocio. Requiere suscripción, pero ofrece funcionalidades avanzadas. www.strategyzer.com
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7.order-lg-1
                h5 Miro
                p Plataforma de colaboración en línea que permite crear canvases de manera interactiva. www.miro.com
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7.order-lg-1
                h5 Lucidchart
                p Herramienta visual que permite diseñar modelos de negocio con plantillas prediseñadas. www.lucidchart.com
      

      h2 Ejemplo visual del BMC en Canva

      p A continuación, se presenta un ejemplo visual del Business Model Canvas realizado en Canva, una de las plataformas gratuitas más populares para la creación de modelos de negocio.

      .titulo-figura.mb-2
        h5 Figura 1. 
        span Canvas del modelo de negocio.
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema2/figura1.svg", data-aos="zoom-in", style="max-width: 900px").mx-auto
      figcaption.mt-2.text-center.mb-4 Nota. Tomado de Calvo (2020)
      
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Elaboración del Plan Estratégico Integral


      .row.mb-4
        .col-lg-10
          p(data-aos="fade-left").mb-4 Una vez completado el Business Model Canvas (BMC), se cuenta con una visión clara de los elementos clave del negocio. Ahora, el siguiente paso es transformar esta visión en un Plan Estratégico Integral, que sirva como una hoja de ruta detallada para la implementación y el crecimiento del negocio. A continuación, se presenta una guía paso a paso basada en los resultados obtenidos en el BMC.
      
          h3 Guía para la elaboración del Plan Estratégico Integral

          p A continuación, se presenta una guía detallada de los pasos clave en la construcción del plan estratégico:
      
        .col-lg-2
          figure
            img(src="@/assets/curso/tema2/8.svg", data-aos="zoom-in")
      
      
      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
      
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Definición de la misión, visión y valores empresariales") 
              p #[strong Objetivo]
              p Definir la identidad de la empresa y su propósito a largo plazo. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Revisión de la propuesta de valor del BMC. - Análisis de segmentos de clientes. 

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Definición de valores alineados con la cultura organizacional.

              
              p #[strong Ejemplo práctico:] Misión: "Ofrecer soluciones de educación en línea accesibles para estudiantes universitarios en América Latina." Visión: "Ser la plataforma líder de aprendizaje en línea para 2030." Valores: Innovación, compromiso, accesibilidad.
              
            div(numero="2" titulo="Establecimiento de objetivos estratégicos smart") #[strong Objetivo:] Convertir los elementos clave del negocio en metas claras y alcanzables.
              p #[strong Método:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Identificación de objetivos basados en los canales de distribución y relaciones con clientes del BMC. 

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Aplicación de la metodología SMART.
                p #[strong Ejemplo práctico:] Ejemplo SMART: "Aumentar en un 30 % la cantidad de usuarios registrados en la plataforma en los próximos 12 meses a través de campañas digitales."
            div(numero="3" titulo="Desarrollo de estrategias y tácticas empresariales") 
              p #[strong Objetivo]
              p Definir cómo se alcanzarán los objetivos estratégicos. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Creación de estrategias basadas en los canales de comercialización.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Definición de tácticas específicas alineadas con actividades clave.

              
              p #[strong Ejemplo práctico:] Estrategia: Expandir la presencia en redes sociales. Táctica: Implementar campañas en Instagram y TikTok dirigidas a estudiantes universitarios.
            div(numero="4" titulo="Evaluación de riesgos y planificación de contingencias") 
              p #[strong Objetivo]
              p Identificar y mitigar riesgos que puedan afectar la ejecución del plan. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Análisis de los socios clave y recursos del BMC.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Evaluación de riesgos financieros, operativos y de mercado.

              
              p #[strong Ejemplo práctico:] Riesgo: Dependencia de una sola fuente de proveedores. Plan de contingencia: Diversificar proveedores en diferentes regiones.
            div(numero="5" titulo="Planificación financiera") 
              p #[strong Objetivo]
              p Definir la estructura financiera de la empresa para garantizar su sostenibilidad. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Proyección de ingresos y egresos basados en los flujos de ingresos y costos del BMC.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Análisis del punto de equilibrio.

              
              p #[strong Ejemplo práctico:] resupuesto anual estimado: $200,000 USD. Punto de equilibrio: Alcanzar 1,500 suscriptores pagos en el primer año.
      
      
      .row.align-items-center.mb-5

        .col-lg-8
      
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="6" titulo="Estrategias de marketing y ventas") 
              p #[strong Objetivo]
              p Posicionar el negocio y captar clientes de manera efectiva. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Definición de estrategias de marketing basadas en los segmentos de clientes y canales.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Selección de medios digitales y tradicionales.

              
              p #[strong Ejemplo práctico:] Canal digital: SEO, Google Ads y redes sociales. Canal tradicional: Ferias universitarias.
            div(numero="7" titulo="Gestión de recursos humanos")
              p #[strong Objetivo]
              p Construir un equipo de trabajo eficaz y alineado con la estrategia. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Definición de roles clave en función de las actividades clave del BMC.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Creación de programas de capacitación y cultura organizacional.
              
              p #[strong Ejemplo práctico:] Perfiles clave: Desarrolladores, especialistas en marketing digital.
            div(numero="8" titulo="Modelos de negocio y plan de operaciones")
              p #[strong Objetivo]
              p Definir cómo se operará el negocio en términos prácticos. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Diseño de procesos operativos basados en el modelo de negocio del BMC.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Establecimiento de indicadores de eficiencia.

              
              p #[strong Ejemplo práctico:] Modelo: Suscripción mensual con acceso a contenido exclusivo.
            div(numero="9" titulo="Gestión de proyectos empresariales") 
              p #[strong Objetivo]
              p Implementar metodologías para ejecutar el plan estratégico.
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  |Aplicación de metodologías como SCRUM o PMI. 

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Definición de cronograma de actividades.

              
              p #[strong Ejemplo práctico:] Hito: Lanzamiento de la plataforma en 6 meses.
              
            div(numero="10" titulo="Sostenibilidad y responsabilidad social empresarial") 
              p #[strong Objetivo]
              p Implementar prácticas de impacto positivo en la sociedad y el medio ambiente. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Incorporación de prácticas sostenibles alineadas con la propuesta de valor. 

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Medición del impacto social y ambiental.

              
              p #[strong Ejemplo práctico:] Acción: Uso de servidores ecológicos para reducir huella de carbono.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0



      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
      
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="11" titulo="Gestión de la innovación y transformación digital") 
              p #[strong Objetivo] 
              p Aprovechar la tecnología para potenciar el crecimiento del negocio. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Identificación de oportunidades de innovación basadas en tecnologías emergentes. 

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Fomento de la cultura de innovación dentro de la empresa.

              
              p #[strong Ejemplo práctico:] Innovación: Uso de IA para personalizar experiencias de aprendizaje.
            div(numero="12" titulo="Elaboración del plan de negocios") 
              p #[strong Objetivo] 
              p  Documentar toda la información en un formato presentable. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Redacción de la propuesta de valor y modelo de negocio. 

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Presentación de una estructura organizativa clara.

              
              p #[strong Ejemplo práctico:] Presentación a inversionistas: Elevator pitch de 3 minutos.
            div(numero="13" titulo="Evaluación de impacto y escalabilidad") 
              p #[strong Objetivo] 
              p Medir el éxito y planificar la expansión del negocio. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Evaluación del desempeño financiero. 

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Establecimiento de estrategias de expansión.

              
              p #[strong Ejemplo práctico:] Estrategia: Expansión a otros países de América Latina.
            div(numero="14" titulo="Pitch y presentación de proyectos empresariales") 
              p #[strong Objetivo] 
              p Comunicar de manera efectiva la propuesta de negocio. 
              p #[strong Método]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Elaboración de una presentación visual atractiva. 

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Práctica de la presentación ante stakeholders.

              
              p #[strong Ejemplo práctico:] Formato: Pitch de 5 minutos para aceleradoras de negocios.  

      p La implementación del Plan Estratégico Integral requiere seguimiento continuo y adaptación a las condiciones del mercado. Para ello, es recomendable:

      .row.align-items-stretch.mb-5
        .col-lg-4
          .bg-color-2.p-4
            h4 01
            p.mb-0 Asignar responsables para cada etapa del plan.

        .col-lg-4
          .bg-color-2.p-4
            h4 02
            p.mb-0 Establecer reuniones periódicas de evaluación de avances.

        .col-lg-4
          .bg-color-2.p-4
            h4 03
            p.mb-0 Adaptar las estrategias según los resultados obtenidos.

      
      .bg-full-width.bg-color-8.p-4
        p.mb-0 El éxito de un plan estratégico depende de su correcta ejecución y seguimiento. Con esta metodología estructurada, se facilita la toma de decisiones y la consolidación del negocio en el mercado.

      .bg-full-width.bg-color-6
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") De la empresa tradicional a la moderna
              p.mb-4(data-aos="fade-right") Los invitamos a leer #[strong De la empresa tradicional a la moderna] un recorrido por la transformación empresarial impulsada por la digitalización, la globalización y la innovación.
              p.mb-4(data-aos="fade-right") Descubran cómo las organizaciones han evolucionado desde estructuras rígidas y modelos centrados en la producción hacia enfoques más flexibles, sostenibles y orientados al cliente.

      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> De la empresa tradicional a la moderna
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/11.png', alt='')
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
            
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="http://scielo.sld.cu/pdf/rus/v12n4/2218-3620-rus-12-04-120.pdf" target="_blank" rel="noopener noreferrer") Baque Villanueva, L. K., Viteri Intriago, D. A., Álvarez Gómez, L. K., & Izquierdo Morán, A. M. (2020). Plan de negocio para emprendimientos de los actores y organizaciones de economía popular y solidaria. Revista Universidad y Sociedad, 12(4), 120-125.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.harvard-deusto.com/marcas-de-fabricante-hoja-de-ruta-para-competir-con-las-marcas-blancas" target="_blank" rel="noopener noreferrer") Josep-Francesc Valls y Ramon Montanera.(2025). Business Review (Núm. 352) · Estrategia.  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=MoTdMBTK3pM&ab_channel=ElBlogDeRaffo" target="_blank" rel="noopener noreferrer") Rafael Trucíos MazaG. (2021). ¿Qué es el Balanced Score Card? - PLANIFICACIÓN ESTRATÉGICA. 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  


  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Elaboración de un plan estratégico integral',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es uno de los primeros pasos estratégicos al usar herramientas de inteligencia artificial para analizar el entorno empresarial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Realizar campañas de marketing automatizado',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Implementar un CRM para atención al cliente',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Recolectar y clasificar datos relevantes del entorno con IA',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Automatizar procesos internos con algoritmos predictivos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué aspecto analiza el componente "S" del modelo PESTEL?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Situación tecnológica',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Sostenibilidad ambiental',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Seguridad jurídica',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Factores socioculturales',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'En el análisis FODA, las oportunidades y amenazas pertenecen al entorno:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Interno de la empresa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Externo de la empresa',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Financiero',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Legal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es el objetivo principal del Business Model Canvas (BMC) en la etapa de diseño de un negocio?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Elaborar estados financieros detallados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Crear una presentación visual para inversionistas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Visualizar los elementos clave del modelo de negocio en una sola hoja',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Analizar exclusivamente los costos del proyecto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes opciones representa un componente esencial dentro de un Plan Estratégico Integral?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Cronograma de redes sociales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Análisis de competencia con IA',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Definición de misión, visión y objetivos estratégicos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Diseño de logos y manual de marca',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
