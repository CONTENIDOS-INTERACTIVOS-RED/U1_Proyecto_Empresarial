<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-1.p-4.mb-4.h-100
          p.mb-0 En un entorno empresarial dinámico y competitivo, la capacidad de desarrollar proyectos innovadores y sostenibles es clave para el éxito organizacional. Esta unidad proporciona herramientas estratégicas para analizar el entorno, identificar oportunidades y estructurar iniciativas alineadas con las tendencias del mercado. La inteligencia artificial (IA) juega un papel fundamental en la optimización de estos procesos, permitiendo la toma de decisiones basada en datos y el diseño de estrategias más efectivas.

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png")
      
      .col-lg-4
        .bg-color-2.p-4.mb-4.h-100
          p.mb-0 El análisis del entorno empresarial es un paso esencial para comprender factores internos y externos que pueden impactar un proyecto. Se explorarán metodologías como el análisis PESTEL y FODA, fundamentales para evaluar riesgos y detectar oportunidades de crecimiento. Asimismo, se estudiará cómo la IA puede mejorar estos análisis mediante la recopilación y procesamiento de información en tiempo real.


    .bg-full-width.image-out-bg.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 295px").mx-auto
          .col-lg
            .pt-4
              p.mb-0.text-white Finalmente, se presentará el Business Model Canvas (BMC) como herramienta clave para diseñar modelos de negocio eficientes. A partir de su aplicación, se elaborará un Plan Estratégico Integral, que incluirá objetivos SMART, planificación financiera y estrategias de innovación. A través del estudio de casos como Tesla, Unilever y Netflix, se analizará la aplicación práctica de estas estrategias para garantizar la sostenibilidad y competitividad en el mercado.
    

</template>

<style lang="sass">
.image-out-bg
  position: relative
  &::after
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 85%
    transform: translateY(-0%)
    background-color: #103D47
    z-index: 0
  .col-lg-auto, .col-lg, .row
    z-index: 1


  @media screen and (max-width: bp-max-md)
    padding: 1rem

    &::after
      height: 100%
</style>
