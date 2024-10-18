<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Entorno LMS
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p A continuación, se encontrará lo que representa un LMS, así como las características que hacen parte de su adecuado funcionamiento. Se invita a profundizar sus conocimientos con el siguiente video:
    

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Video 2. #[i Entorno LMS]

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/cn_ngU8YpOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Herramientas del LMS
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p Los sistemas de administración de aprendizaje LMS, incluyen diferentes herramientas y funcionalidades que permiten lograr los diversos objetivos de las empresas o entidades educativas, siempre alineadas a las necesidades puntuales en el diseño, organización, administración y el desarrollo de los procesos formativos.
        p Dentro de las herramientas del LMS se encuentran las de tipo: 

    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imagen decorativa')
      .col-lg-9(data-aos="zoom-in")
        TabsA.color-acento-botones
          .tarjeta.color-secundario.colorfondo.p-4(titulo="Administrativas")            
            .row.justify-content-center.align-items-center
              .col-lg-12
                p Herramientas que son utilizadas por los administradores del sistema. Dependiendo de su jerarquía, permiten controlar o parametrizar las inscripciones, cursos, usuarios (aprendices – instructores) y herramientas dentro del sistema y su entorno.
                
          .tarjeta.color-secundario.colorfondo.p-4(titulo="Distribución de contenidos")            
            .row.justify-content-center.align-items-center
              .col-lg-12
                p El LMS tiene la capacidad de soportar diferentes fuentes de información, en forma de archivos, con diferentes extensiones de formatos “PDF, TXT, ZIP, RAR, HTML, ODT, JPG, PNG, etc.” y pueden ser organizados a través de carpetas o directorios. De igual manera, la información podrá ser visualizada en diferentes formas de presentación como: contenido interactivo, scorm, enlaces a páginas web, videos y etiquetas que permitan ser trabajadas con diversos elementos.
          .tarjeta.color-secundario.colorfondo.p-4(titulo="Colaboración y comunicación")            
            .row.justify-content-center.align-items-center
              .col-lg-12
                p Grupo de diferentes herramientas que permiten interactuar en opinión, preguntar y hablar a la comunidad educativa a través de texto, imagen o audio. Se pueden clasificar las herramientas de comunicación y colaboración como asincrónicas y sincrónicas. Este grupo de herramientas son las más utilizadas en procesos educativos online. 
          .tarjeta.color-secundario.colorfondo.p-4(titulo="Seguimiento y evaluaciónn")            
            .row.justify-content-center.align-items-center
              .col-lg-12
                p Son herramientas que permiten el seguimiento de los diferentes actores (instructores, aprendices, administradores) dentro del ambiente virtual, a nivel administrativo, así como los diferentes productos (tareas, evidencias, encuestas, calificaciones) que permitirán evidenciar la evaluación, seguimiento, trazabilidad y mejora continua de los procesos formativos del aprendiz.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
