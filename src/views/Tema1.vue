<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Gestión de la Formación en Ambientes Virtuales de Aprendizaje - FAVA
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p El punto de partida para una excelente gestión en el proceso de enseñanza-aprendizaje-evaluación de la formación virtual, es que el gestor principal; es decir, el “instructor-tutor”, conozca todas sus funciones, las cuales están enmarcadas y relacionadas con las competencias que debe tener.
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Funciones del instructor-tutor virtual
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 El siguiente video, detallas las funciones que debe tener el instructor-tutor dentro de la formación virtual, la cual es orientada bajo los parámetros institucionales que tiene el SENA:
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Video 1. #[i Funciones del instructor]

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Síntesis del video: Funciones del instructor
    
    .row.BG01.mb-4
      .col-lg-12.col-12
        .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
          .col-lg-8.col-8
            li 
              | #[b Servicio Nacional de Aprendizaje SENA]
            br
            p #[b Organizativa:] esta función requiere tiempo y dedicación, es en la que el instructor define la planeación, el cronograma, las normas del proceso formativo, entre otras.
            p #[b Orientadora:] asesorar, orientar y guiar al aprendiz durante todo el proceso sobre las temáticas del programa, las estrategias de formación SENA y las técnicas para el correcto manejo del LMS. Es lo que enmarca la función orientadora, es la función en donde el instructor brinda el asesoramiento personalizado a los aprendices.
            p #[b Social:] en el ser humano las relaciones interpersonales son muy importantes, pensando en esto, el instructor mantiene una comunicación permanente y continua con el aprendiz, siendo su objetivo el motivar y concientizar, logrando que el aprendiz alcance de forma amena y agradable su aprendizaje. 
            p #[b Técnica:] el correcto y acertado manejo de la utilización de las herramientas del LMS es importante en el proceso formativo virtual, por ello el instructor tutor realiza la guía y orientación al aprendiz sobre estas herramientas, cumpliendo así con la función técnica.
            p #[b Académica:] el dominio de las diferentes competencias del programa, así como el enfoque pedagógico y metodológico del SENA, dan la profundización del proceso formativo.

          .col-lg-4.col-4
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        p La calidad en todos los procedimientos es un factor indispensable e importante. Por ello, la Institución SENA cuenta con lineamientos establecidos para el desarrollo asertivo de la gestión en Ambientes Virtuales de Aprendizaje, en adelante AVA, los cuales son de obligatorio cumplimiento. Descrito en el documento denominado “Guía de Orientaciones para la Formación en Ambientes Virtuales de Aprendizaje -AVA”, entrega las directrices que el instructor puede seguir, paso a paso en la aplicación de sus funciones, durante el proceso formativo virtual.
        p A continuación, se relacionan las acciones que hacen parte de la #[b Guía de orientación para la formación de Ambientes de Virtuales de Aprendizaje – AVA:]

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row(titulo="")
        .col-lg-12.col-md-6.mb-4.mb-md-0
          h4 Generalidades de la función tutorial
          p Estas generalidades están enmarcadas en las funciones del instructor virtual.
        
      .row(titulo="")
        .col-lg-12.col-md-6.mb-4.mb-md-0
          h4 Formación complementaria virtual
          p Expone las acciones mínimas que debe desempeñar el instructor en el desarrollo de los programas de formación y que son de obligatorio cumplimiento.
        
      .row(titulo="")
        .col-lg-12.col-md-6.mb-4.mb-md-0
          h4 Formación titulada virtual
          p Expone las acciones mínimas que debe desempeñar el equipo de instructores en el desarrollo del programa de formación y que son de obligatorio cumplimiento.
        
      .row(titulo="")
        .col-lg-12.col-md-6.mb-4.mb-md-0
          h4 Formación titulada a distancia
          p Esta modalidad se caracteriza por tener encuentros virtuales y presenciales obligatorios, requeridos para alcanzar las competencias formativas. Expone las acciones mínimas que debe desempeñar el equipo de instructores en el desarrollo del programa de formación y que son de obligatorio cumplimiento.

      .row(titulo="")
        .col-lg-12.col-md-6.mb-4.mb-md-0
          h4 Etapa productiva
          p Expone las acciones mínimas que debe el instructor técnico asignado para el acompañamiento y valoración de esta etapa. Corresponde al último resultado del proceso de formación de los programas técnico y tecnólogo.

      .row(titulo="")
        .col-lg-12.col-md-6.mb-4.mb-md-0
          h4 Seguimiento al instructor
          p En la ejecución de la formación virtual, este seguimiento se realiza a través de un instrumento de evaluación denominado lista de chequeo.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(style="background-color:#D7F5F7")
          .row.justify-content-center.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 La guía de orientaciones es un documento que debe mantenerse actualizado y coherente con los demás procedimientos; por esta razón, la dirección de formación, a través de sus grupos de trabajo interno, son los responsables de mantenerlo actualizado.
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Lista de chequeo
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        p La lista de chequeo es el instrumento diseñado para la evaluación del desempeño del instructor virtual durante el desarrollo del proceso formativo. Los criterios a evaluar, a través de esta lista de chequeo son los enmarcados en las cinco (5) funciones del tutor virtual. Existe una o varias listas de chequeo, de acuerdo con cada modalidad de formación así: 
    
        .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg1-1.w-100
            .text-black.p-4
              h4.text-center(style="color:#000000") 1.	Formación complementaria virtual
              p.text-center(style="color:#000000") Se aplican dos listas de chequeo, donde una de ellas es interna.
              
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg1-1.w-100
            .text-black.p-4
              h4.text-center(style="color:#000000") 2.	Formación titulada virtual
              p.text-center(style="color:#000000") Se aplican seis listas de chequeo.
              
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg1-1.w-100
            .text-black.p-4
              h4.text-center(style="color:#000000") 3.	Formación titulada virtual y a distancia
              p.text-center(style="color:#000000") Se aplican seis listas de chequeo.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        p A continuación, se ejemplifican esas tres modalidades, de acuerdo a las listas de chequeo: 

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i  Tablas de verdad]

    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen que relaciona un ejemplo sobre las listas de chequeo en las tres modalidades, en ella se lleva a todo a partir de unos criterios establecidos.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen que relaciona un ejemplo sobre las listas de chequeo en las tres modalidades, en ella se lleva a todo a partir de unos criterios establecidos.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img9.png', alt='Imagen que relaciona un ejemplo sobre las listas de chequeo en las tres modalidades, en ella se lleva a todo a partir de unos criterios establecidos.')

      .col-lg-8
        p Cada criterio de la lista de chequeo corresponde a una función que debe desempeñar el instructor virtual y se le asigna una puntuación:
        .row.justify-content-center.align-items-center
          .col-lg-10(data-aos="flip-up")
            .cajon.color-secundario.p-3
              .row
                .col-6
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      | Función organizativa.
                    li
                      i.fas.fa-check
                      | Función técnica.
                    li
                      i.fas.fa-check
                      | Función orientadora.
                .col-6
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      | Función académica.
                    li
                      i.fas.fa-check
                      | Función social.

        p La aplicación de la lista de chequeo es de obligatorio cumplimiento en cada centro de formación. Debe ser aplicada por parte del supervisor del contrato o por el coordinador académico o coordinador de formación, o por parte del grupo de acompañamiento. Esta lista se aplica en dos (2) momentos; después del alistamiento y después del cierre de la formación. Cada una de las funciones contienen ítems que son valorados; la puntuación máxima esperada es de 100. Cuando alguno de los criterios no se cumple en su totalidad, se realiza un seguimiento y acompañamiento para la implementación de acciones de mejora.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        p Es necesario tener en cuenta que el instrumento tiene en consideración el seguimiento, de acuerdo con el tipo de vinculación con el SENA: carrera administrativa, provisionalidad o contrato de prestación de servicios.
        p Las diferentes listas de chequeo se encuentran en el documento Guía de Orientaciones para la Formación en Ambientes Virtuales de Aprendizaje - AVA-. Este documento puede visualizarse desde el aplicativo de CompromISO del SENA.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img10.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 Los ítems que conforman cada criterio y función, de la lista de chequeo, se profundizarán a través del desarrollo de las temáticas de este curso, donde aprenderá paso a paso, el quehacer del tutor virtual. 

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Momentos de la ejecución de la formación virtual
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        p Los diferentes momentos de la ejecución de la formación hacen referencia al desarrollo de las funciones del instructor. Estos momentos en la formación virtual, según lineamientos SENA, son: 
    
    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12.movil
        figure
          img(src='@/assets/curso/temas/tema1/img11_1.svg', alt='Imagen decorativa')
      .col-lg-10.col-12.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')

          div(x="14%" y="85%" tooltip="Asignación del curso" numero="+")(style="background-color:#EEFFE9;padding:10px")
            h5 Asignación del curso
            p Cuando el instructor recibe el o los cursos que debe orientar, estos son asignados por el coordinador académico del centro de formación, de acuerdo con el diseño curricular y el perfil profesional del instructor, la asignación es mensual o de acuerdo con la intensidad horaria.
          div(x="37%" y="85%" tooltip="Asignación del curso" numero="+")(style="background-color:#EEFFE9;padding:10px")
            h5 Alistamiento
            p El instructor configura y edita el LMS, prepara y verifica todo el material, documentos y enlaces. También, realiza la planeación del proceso, a través del cronograma de actividades.
          div(x="58%" y="85%" tooltip="Asignación del curso" numero="+")(style="background-color:#EEFFE9;padding:10px")
            h5 Ejecución
            p El instructor guía, retroalimenta y se comunica con el aprendiz para orientar las temáticas del curso y el manejo de las herramientas de LMS. Este momento comprende la mayor parte del tiempo del proceso formativo.
          div(x="81%" y="85%" tooltip="Asignación del curso" numero="+")(style="background-color:#EEFFE9;padding:10px")
            h5 Cierre
            p El instructor evalúa a través del centro de calificaciones, hace seguimiento y realiza los diferentes reportes del LMS y SOFIA Plus.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Alistamiento
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        p El alistamiento del ambiente LMS debe garantizar que todos los elementos que lo componen se encuentren en orden al momento del ingreso de los aprendices. Esta actividad no debe tomar más de un día hábil, posterior a la fecha registrada como inicio de la formación en el sistema de gestión académica (SOFIA Plus).


    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-lg-12.col-12
        p Las acciones a realizar en el momento del alistamiento son: 
    .row.justify-content-center.p-5
      .col-12
        .tarjeta.tarjeta--BG03.mb-5.p-5
          SlyderB.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '1.	Configuración del menú y entorno del LMS.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: '2.	Crear el perfil.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: '3.	Configurar el cronograma de actividades.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: '4.	Verificar y activar los materiales.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: '5.	Configurar y crear los foros.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: '6.	Configurar y crear los anuncios.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: '7.	Verificar los recursos.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: '8.	Verificar información del centro de calificaciones.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo: '9.	TIPS.',
        imagen: require('@/assets/template/img-placeholder.svg'),
      },
      {
        titulo:
          '10.	 El alistamiento termina cuando el instructor asocia a los aprendices a la Ruta de Aprendizaje, cambiando así el estado de Inscrito a En formación, procedimiento que se realiza ingresando al sistema de SOFIA Plus.',
        imagen: require('@/assets/template/img-placeholder.svg'),
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
