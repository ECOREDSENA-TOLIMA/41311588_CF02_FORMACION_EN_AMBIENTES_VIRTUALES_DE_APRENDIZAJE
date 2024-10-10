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
        p A continuación, encontrará lo que representa un LMS, así como las características que hacen parte de su adecuado funcionamiento. Se invita a profundizar sus conocimientos con el siguiente video:
    

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Video 2. #[i Entorno LMS]

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Síntesis del video: Entorno LMS 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        li 
          | #[b Entorno LMS - Sistema de administración de aprendizaje]
        p.mt-3 Una plataforma LMS - Learning Management System o plataforma de administración de aprendizaje, es un ambiente virtual de aprendizaje desarrollado en la web, que permite gestionar los diferentes recursos, actividades y herramientas para la interacción y comunicación entre los aprendices e instructores, dentro de un aula virtual, donde se desarrollará todo el proceso formativo en pro del cumplimiento de los objetivos académicos.
        li 
          | #[b Características del LMS]
        p.mt-3 Los sistemas de administración de aprendizaje son de gran utilidad para las organizaciones y entidades educativas en sus procesos de formación; sin embargo, para decidir qué LMS es mejor que otro, deben siempre tenerse en cuenta las siguientes características:

    .row.bg1.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-secundario
            .row(titulo="Paso 1")
              .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
                h4 Accesibilidad
                p El LMS debe ser accesible para cada uno de los miembros de la comunidad educativa, independientemente de la posición geográfica y del acceso a los contenidos o recursos.
              .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/tema2/img2.png', alt='Imagen decorativa')
            .row(titulo="Paso 2")
              .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
                h4 Temporalidad
                P Los LMS permiten procesos de aprendizaje sin restricciones de horario, sesiones de conferencia o limitantes de tiempo en el acceso al desarrollo formativo, teniendo como base la oportunidad de los planes de estudio, los recursos y contenidos establecidos por los instructores.
                
              .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/tema2/img3.png', alt='Imagen decorativa')
            .row(titulo="Paso 3")
              .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
                h4 Flexibilidad
                p El LMS debe ser capaz de adaptarse a los objetivos y necesidades específicas de las instituciones educativas, de sus usuarios, independiente del nivel de formación que se imparte, ya que puede existir variedad en los planes estudio y recursos pedagógicos, manteniendo siempre el control y la estandarización de los procesos.
                
              .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/tema2/img4.png', alt='Imagen decorativa')
            .row(titulo="Paso 3")
              .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
                h4 Interactividad
                p Los aprendices tienen le protagonismo de su propio estilo y ruta de aprendizaje siempre guiados por los instructores de los cursos, a través de las diferentes herramientas de comunicación sin olvidar las políticas institucionales.
                
              .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png', alt='Imagen decorativa')
            .row(titulo="Paso 3")
              .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
                h4 Escalabilidad
                p el LMS debe tener la capacidad de crecimiento en el número de usuarios y espacios formativos, en función de las necesidades de las instituciones sin sacrificar el rendimiento, conectividad y operabilidad de todo el sistema de administración de aprendizaje.
                
              .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/tema2/img6.png', alt='Imagen decorativa')
            .row(titulo="Paso 3")
              .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
                h4 Usabilidad
                p El LMS debe favorecer que la comunidad educativa o empresarial, puede utilizar la plataforma educativa sin conocimientos previos, donde la adaptación sea fácil, esto conlleva a que los usuarios puedan alcanzar los resultados de aprendizaje de forma rápida.
                
              .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/tema2/img7.png', alt='Imagen decorativa')
            .row(titulo="Paso 3")
              .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
                h4 Funcionalidad
                p Llos LMS se deben adecuar a los requisitos, objetivos y necesidades de los usuarios, con el fin de ofrecer simplicidad en su utilización.
                
              .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/tema2/img8.png', alt='Imagen decorativa')
            .row(titulo="Paso 3")
              .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
                h4 Efectividad
                p El LMS debe contar con toda la información centralizada de los cursos, contenidos, recursos, actividades, al alcance de los instructores y aprendices, conllevando a que el proceso de aprendizaje sea más efectivo y significativo.
                
              .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/temas/tema2/img9.png', alt='Imagen decorativa')

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
