<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BG01.row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/imgintro.png', alt='Imagen decorativa')
        
      .col-lg-5(data-aos="Fade-left")
        p El alistamiento es uno de los procedimientos más importantes en el quehacer de la formación virtual SENA. Por lo anterior, en este componente formativo se podrá conocer cada una de las acciones a realizar en este primer momento de la ejecución de la formación virtual y las diferentes herramientas a trabajar en el LMS.
 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
