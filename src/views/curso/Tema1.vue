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
              h5 Título del slide 1
              p Contenido del slide 1
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7.order-lg-1
              h5 Título del slide 2
              p Contenido del slide 2
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7.order-lg-1
              h5 Título del slide 3
              p Contenido del slide 3
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-4.png")
            .col-lg-7.order-lg-1
              h5 Título del slide 4
              p Contenido del slide 4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-5.png")
            .col-lg-7.order-lg-1
              h5 Título del slide 5
              p Contenido del slide 5


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
    
              .bg-color-white.box-shadow.p-3(x="20%" y="57.5%" numero="+")
                h5 Título punto 1
                p Contenido punto 1
    
              .bg-color-white.box-shadow.p-3(x="29%" y="34%" numero="+")
                h5 Título punto 2
                p Contenido punto 2
    
              .bg-color-white.box-shadow.p-3(x="59%" y="6%" numero="+")
                h5 Título punto 3
                p Contenido punto 3
    
              .bg-color-white.box-shadow.p-3(x="69%" y="35%" numero="+")
                h5 Título punto 4
                p Contenido punto 4
    
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
              h5 Título del slide 2
              p Contenido del slide 2
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              h5 Título del slide 3
              p Contenido del slide 3
    


    .row.align-items-center
      .col-lg-auto
        img(src="@/assets/curso/tema1/3.svg").mx-auto
      .col-lg
        h3 Caso de éxito: Netflix y la IA en la identificación de oportunidades
        p.mb-0 Estas pruebas pueden ser adquiridas a proveedores o desarrolladas internamente. Es fundamental que aporten valor al proceso y sean acordes con los requerimientos del perfil.


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
