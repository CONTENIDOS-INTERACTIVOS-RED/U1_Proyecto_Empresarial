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
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Estructuración lógica del aprendizaje1" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
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
                  | Ejemplo práctico: Una plataforma de aprendizaje en línea que ofrece cursos accesibles en habilidades digitales demandadas por empresas.

              
            div(numero="2" titulo="Segmentos de clientes")
              p Identifica los grupos de clientes a los que se dirige la oferta. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Ejemplo práctico: Estudiantes universitarios que buscan mejorar sus habilidades digitales para el empleo.

            div(numero="3" titulo="Canales")
              p Medios a través de los cuales los clientes reciben el producto o servicio. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Ejemplo práctico: Venta a través de una plataforma de e-learning y promoción en redes sociales.
            
            div(numero="4" titulo="Relaciones con los clientes")
              p Estrategias para atraer, retener y fidelizar clientes. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Ejemplo práctico: Chatbots para resolver dudas en tiempo real y boletines personalizados.

            div(numero="5" titulo="Flujos de ingresos")
              p Fuentes de ingresos, como ventas, suscripciones o publicidad. 
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Ejemplo práctico: Modelo de suscripción mensual con acceso a contenido exclusivo.
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
                  | Ejemplo práctico: Plataforma de e-learning, instructores calificados, servidores en la nube.

              
            div(numero="7" titulo="Título paso 7") Contenido paso 2
            div(numero="8" titulo="Título paso 8") Contenido paso 3
            div(numero="9" titulo="Título paso 9") Contenido paso 3


      .bg-color-6.p-4
        p.mb-0 #[strong Implementación del BMC: caso de uso.]

      .bg-color-7.p-4.mb-5
        .row.align-items-center.mb-5
          .col-lg-8
              p #[strong Caso práctico: "EduTech Solutions" - Plataforma de educación en línea]
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Propuesta de valor: cursos de alta calidad accesibles desde cualquier lugar.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Segmentos de clientes: estudiantes universitarios, profesionales en formación continua.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Canales: plataforma web, aplicación móvil, redes sociales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Relaciones con los clientes: tutorías personalizadas, soporte 24/7.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Flujos de ingresos: suscripción mensual y cursos individuales.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Recursos clave: ´Plataforma LMS, equipo de instructores.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Actividades clave: desarrollo de contenido, estrategias de marketing.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Socios clave: empresas de certificación, universidades.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Estructura de costos: desarrollo tecnológico, publicidad, soporte.
              

              
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
                h5 Título del slide 1
                p Contenido del slide 1
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-2.png")
              .col-lg-7.order-lg-1
                h5 Título del slide 2
                p Contenido del slide 2
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7.order-lg-1
                h5 Título del slide 3
                p Contenido del slide 3
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7.order-lg-1
                h5 Título del slide 4
                p Contenido del slide 4
      

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
            div(numero="1" titulo="Título paso 1") 
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
              
            div(numero="2" titulo="Título paso 2") Contenido paso 2
            div(numero="3" titulo="Título paso 3") Contenido paso 3
      
      
      .row.align-items-center.mb-5

        .col-lg-8
      
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Título paso 1") 
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
              
            div(numero="2" titulo="Título paso 2") Contenido paso 2
            div(numero="3" titulo="Título paso 3") Contenido paso 3

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0



      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
      
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Título paso 1") 
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
              
            div(numero="2" titulo="Título paso 2") Contenido paso 2
            div(numero="3" titulo="Título paso 3") Contenido paso 3
      

      h2 Implementación del Plan Estratégico Integral

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
              p.mb-4(data-aos="fade-right") Los invitamos a leer De la empresa tradicional a la moderna, un recorrido por la transformación empresarial impulsada por la digitalización, la globalización y la innovación.
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
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
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
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
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
