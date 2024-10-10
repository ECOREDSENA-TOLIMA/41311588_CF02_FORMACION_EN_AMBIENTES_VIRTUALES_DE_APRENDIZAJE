<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Implementación de herramientas en el LMS
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p Es necesario que el instructor establezca la relación directa entre los lineamientos institucionales y las herramientas que puede utilizar, para llevar a cabo sus funciones en la plataforma de administración del aprendizaje (LMS), permitiendo evidenciar el avance desde lo tecnológico y lo pedagógico.
        p El punto de partida es conocer el LMS SENA y el siguiente video realiza una contextualización al respecto, ya que se presenta todos los aspectos que indican lo que el LMS manejado por la institución posee:
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Video 5. #[i ¿Conoces el LMS SENA?]

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p Ahora, se invita a conocer las particularidades del LMS SENA, desde los principales roles de un proceso formativo, por medio instructivos de navegación en los roles del instructor y el apendiz: 

    .row.justify-content-center.p-5
      .col-12
        .tarjeta.tarjeta--BG03.mb-5.p-5
          SlyderB.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Rol instructor',
        imagen: require('@/assets/curso/temas/tema3/img2.png'),
      },
      {
        titulo: 'Rol aprendiz',
        imagen: require('@/assets/curso/temas/tema3/img3.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
