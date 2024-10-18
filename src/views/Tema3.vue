<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Herramientas de comunicación sincrónicas y asincrónicas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p La característica más importante para fortalecer en la formación virtual es la interacción entre los participantes durante el proceso formativo. Esta comunicación se puede realizar a través de herramientas de comunicación integradas en el sistema de gestión de aprendizaje o a través de herramientas externas al mismo. Herramientas que se pueden clasificar en asincrónicas y sincrónicas.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Herramientas sincrónicas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p En los procesos formativos son necesarias herramientas que permitan a los instructores y aprendices interactuar en tiempo real y de forma simultánea, ya sea de manera escrita u oral, simulando un ambiente real presencial entre instructores y aprendices.
        p Dentro de este grupo de herramientas se tienen:
    
    .row.justify-content-center.p-5
      .col-12
        .tarjeta.tarjeta--BG03.mb-5.p-5
          SlyderB.mb-5(:datos="datosSlyder")


    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Herramientas asincrónicas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p No es necesario tener una conexión en tiempo real para lograr el desarrollo del proceso formativo, incluso para los procesos comunicativos de los diferentes actores en el proceso pedagógico.
        p Estas herramientas presentan una gran ventaja a los usuarios, ya que les permite documentar y organizar de forma anticipada sus respuestas o los contenidos de sus participaciones. Dentro de estas herramientas se tienen: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Anuncios")
            .col-md-12.mb-4.mb-md-0
              p Herramienta integrada al LMS con la finalidad de mantener informados a los aprendices, a través de recordatorios y anuncios informativos, relacionados con el desarrollo de las diferentes actividades del proceso formativo.
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt='Imagen decorativa')
              
          .row(numero="2" titulo="Foros")
            .col-md-12.mb-4.mb-md-0
              p Es una herramienta que permite el intercambio de ideas, tanto para el aprendiz como el instructor; proceso que es realizado a través del envío de mensajes a una lista de participantes quedando los mensajes ordenados por hilos o temáticas de discusión.
              figure
                img(src='@/assets/curso/temas/tema3/img5.png', alt='Imagen decorativa')
          .row(numero="3" titulo="Blog")
            .col-md-12.mb-4.mb-md-0
              p Es una herramienta al estilo de una bitácora virtual, la cual permite a una persona o grupo de personas, crear y difundir contenidos o reflexionar sobre sus ideas en forma cronológica e inmediata.
              figure
                img(src='@/assets/curso/temas/tema3/img6.png', alt='Imagen decorativa')
          .row(numero="4" titulo="Wiki")
            .col-md-12.mb-4.mb-md-0
              p Herramienta que brinda un espacio de página web donde se permite la construcción y difusión de conocimiento colaborativo; conocimiento construido a través de la edición (agregar, editar, eliminar) de los contenidos por cada uno de los usuarios que conforman la comunidad. En el ámbito educativo, incentiva al aprendiz a integrar la tecnología con el proceso de aprendizaje.
              figure
                img(src='@/assets/curso/temas/tema3/img7.png', alt='Imagen decorativa')
          .row(numero="5" titulo="Correo electrónico – webmail")
            .col-md-12.mb-4.mb-md-0
              p Los LMS deben incorporar un sistema de correo electrónico o webmail, el cual está limitado a los aprendices e instructores del curso, con el fin de comunicarse durante el desarrollo del proceso formativo de forma grupal o individual.
              figure
                img(src='@/assets/curso/temas/tema3/img8.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p A continuación, se muestra la creación y configuración de algunas herramientas asincrónicas en el LMS SENA. La invitación es a que se revise su funcionamiento y así tener las bases para aplicarlas en los espacios formativos: 
    
    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Crear Blog
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Video 3. #[i Crear blog]

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Video 4. #[i Crear Wiki]

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gSninSSBtZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Chat',
        texto:
          'Es un sistema de comunicación escrito que permite interactuar en tiempo real a los usuarios y es la herramienta más utilizada dentro del LMS.',
        imagen: require('@/assets/curso/temas/tema3/img2.png'),
      },
      {
        titulo: 'Videoconferencia',
        texto:
          'Es un sistema interactivo que permite mantener una conversación a distancia en tiempo real, mediante audio, video y datos; su rango de aplicación está a nivel empresarial y educativo. Los sistemas de videoconferencia más utilizados son Team, Meet, Doodle, Bigbluebutton, Zoom, entre otros. ',
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
