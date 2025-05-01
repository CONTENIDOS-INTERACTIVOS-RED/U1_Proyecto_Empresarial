<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Análisis del entorno empresarial y las oportunidades de negocio'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El análisis del entorno empresarial es un paso crucial para comprender los factores internos y externos que afectan el desarrollo de un proyecto. Este análisis permite identificar tendencias del mercado, evaluar la competencia, conocer las necesidades del consumidor y detectar oportunidades viables de negocio. Se estudiarán herramientas estratégicas como el análisis PESTEL, que permite evaluar aspectos políticos, económicos, sociales, tecnológicos, ecológicos y legales, y el análisis FODA, que ayuda a identificar fortalezas, oportunidades, debilidades y amenazas del entorno empresarial.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
    

    p Comprender el entorno empresarial es esencial para tomar decisiones informadas y diseñar estrategias que maximicen el impacto del proyecto. Un proyecto exitoso es aquel que responde a necesidades reales, aprovecha oportunidades emergentes y mitiga riesgos potenciales.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Paso a paso estratégico para analizar el entorno empresarial utilizando IA


    
    p Para analizar el entorno empresarial de manera completa y avanzada en un mundo altamente competitivo, se recomienda seguir los siguientes pasos utilizando herramientas de inteligencia artificial:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7.order-lg-1
              h5 Recopilación de datos con IA
              p Herramientas: Google Trends, SEMrush y plataformas de análisis de redes sociales. Acciones: Identificación de tendencias emergentes, scraping automatizado para recopilar datos de la industria y competencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7.order-lg-1
              h5 Análisis de competencia
              p Herramientas: SimilarWeb, Sprout Social y BuzzSumo. Acciones: Evaluación de la presencia digital de competidores y uso de machine learning para analizar patrones y predecir estrategias futuras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7.order-lg-1
              h5 Identificación de tendencias del mercado
              p Herramientas: Tableau, Power BI, modelos predictivos de IA. Acciones: Visualización de grandes volúmenes de datos de mercado y anticipación de cambios en la demanda.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-4.png")
            .col-lg-7.order-lg-1
              h5 Conocimiento de las necesidades del consumidor
              p Herramientas: Brandwatch, Talkwalker, chatbots de IA. Acciones: Análisis del sentimiento del consumidor y recopilación de información en tiempo real sobre preferencias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-5.png")
            .col-lg-7.order-lg-1
              h5 Segmentación avanzada del mercado
              p Herramientas: Algoritmos de clustering, modelos de personalización de IA. Acciones: Segmentación basada en datos demográficos, geográficos y psicográficos.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Herramientas estratégicas de análisis del entorno empresarial


    p Para garantizar el éxito y sostenibilidad de un proyecto empresarial, es fundamental comprender los factores que influyen en su desarrollo.


    .bg-color-info.p-4.p-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            img(src="@/assets/curso/tema1/figura1.png")


    h2 Análisis del entorno externo (PESTEL)

    p El entorno externo está compuesto por factores macro y microeconómicos que pueden impactar el proyecto empresarial. Para su evaluación, el análisis PESTEL considera los siguientes aspectos:


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/2.png', alt='')
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bordes.bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-1.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Políticos
                p.text-center Legislación, políticas gubernamentales, estabilidad política.
              .bordes.bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-2.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Económicos
                p.text-center Inflación, tasas de interés, crecimiento del PIB.
              .bordes.bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-3.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sociales
                p.text-center Tendencias demográficas, comportamiento del consumidor.
              .bordes.bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-4.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tecnológicos
                p.text-center Innovaciones, automatización, acceso a tecnologías emergentes.
              .bordes.bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ecológicos
                p.text-center Regulaciones ambientales, sostenibilidad.
              .bordes.bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/icono-6.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Legales
                p.text-center Normativas laborales, derechos de autor, regulaciones fiscales.
    
    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 840px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="30%" y="94%" numero="+")
                h5 Fortalezas
                p Aspectos internos positivos que proporcionan una ventaja competitiva.
    
              .bg-color-white.box-shadow.p-3(x="30%" y="6%" numero="+")
                h5 Debilidades
                p Áreas internas que necesitan mejoras.
    
              .bg-color-white.box-shadow.p-3(x="71%" y="6%" numero="+")
                h5 Amenazas
                p Factores externos que pueden afectar negativamente el proyecto.
    
              .bg-color-white.box-shadow.p-3(x="71%" y="94%" numero="+")
                h5 Oportunidades
                p Factores externos que la empresa puede aprovechar.
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Identificación de oportunidades de negocio
    
    p Una vez que se ha analizado el entorno empresarial, es fundamental identificar oportunidades de negocio viables, basadas en las necesidades del mercado. Para ello, se deben centrar en tres aspectos clave:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7.order-lg-1
              h5 Realizar estudios de mercado
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Objetivo]. Conocer preferencias del consumidor mediante encuestas, entrevistas, grupos focales y análisis de redes sociales.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Herramientas].  Google Trends, IBM Watson Analytics, machine learning para análisis de datos masivos.

              
              
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7.order-lg-1
              h5 Evaluar la competencia y detectar nichos desatendidos
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Objetivo]. Conocer estrategias de competidores para desarrollar una ventaja competitiva.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Herramientas]. SEMrush, SimilarWeb, Sprout Social. 
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Acciones]. Análisis de presencia digital, estrategias de marketing y opiniones de clientes sobre la competencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              h5 Analizar tendencias emergentes en el sector
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Objetivo]. Anticiparse a los cambios del mercado y adaptar la propuesta de valor. 
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Herramientas].  Tableau, Power BI, algoritmos predictivos. 
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Acciones].  Procesamiento de datos de múltiples fuentes y previsión de comportamientos del consumidor.


    


    .row.align-items-center
      .col-lg-auto
        img(src="@/assets/curso/tema1/3.svg").mx-auto
      .col-lg
        h3 Caso de éxito: Netflix y la IA en la identificación de oportunidades
        p.mb-0 Netflix ha utilizado inteligencia artificial para analizar el comportamiento de sus usuarios, detectar nichos poco explorados y anticiparse a tendencias de contenido.


    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Estudio de mercado	
                p.mb-0 Analizó datos de millones de usuarios con algoritmos de aprendizaje automático.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Evaluación de la competencia	
                p.mb-0 Detectó nichos poco explorados, como documentales de nicho.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Análisis de tendencias	
                p.mb-0 Adaptó su oferta según géneros, actores y contenido más popular en cada región.
        


    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Gracias a estas estrategias basadas en datos, Netflix ha logrado expandirse globalmente y mantener una ventaja competitiva en un mercado altamente dinámico.
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/130238" target="_blank" rel="noopener noreferrer") Quaranta, N. (2020). Planes de negocio: ( ed.). Editorial Universidad Adventista del Plata. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=0d6XHz7U2T4" target="_blank" rel="noopener noreferrer") JAIBER PEREZ. (2025). LA TEORÍA DEL CAOS- CÓMO VER LAS OPORTUNIDADES EN LA TORMENTA?.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
