<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
          .col-6.col-md-4.col-lg-6.mb-4.mb-md-0(data-aos="fade-right")
            .tarjeta.h-100.d-flex.align-items-center.p-4
              figure
                img(src="@/assets/curso/portada/banner-princiapal.svg", alt="Imagen decorativa")
          .col-12.col-md-8.col-lg-6(data-aos="fade-left")
            .titulo-segundo
              h2 Lineamientos SENA
            p.mb-4 Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo.
            p.mb-4 Antes de su realización, se recomienda la lectura del componente formativo mencionado. Es opcional (no es calificable), y puede realizarse todas las veces que se desee.
            .titulo-segundo
              h3.mb-4 #[b Lea la afirmación de cada item y luego señale la respuesta correcta según sus conocimientos del componente.]
          
            .tarjeta.actividad.p-3
              .row.justify-content-around.align-items-center            
                .col-sm.mb-3.mb-sm-0
                  p.fw-bold.mb-0 Cuestionario
                .col-auto
                  a.boton.boton--b(:href="obtenerLink('/#/actividad1')" )
                    span Realizar
                    i.fas.fa-puzzle-piece
      separador
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Lineamientos institucionales y administración educativa en los procesos de formación virtual',
      titulo: 'Cuestionario - Lineamientos SENA',
      introduccion:
        '<b> Objetivo:</b> Determinar el actor o acción presente en los diferentes procedimientos SENA, basado en la acción formativa desarrollada en la institución.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '<strong>Es el gestor principal del procedimiento de la ejecución de la formación profesional:</strong>',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aprendiz.', esCorrecta: false },
            { id: 'b', texto: 'Instructor.', esCorrecta: true },
            { id: 'c', texto: 'Coordinador.', esCorrecta: false },
            { id: 'd', texto: 'Diseño Curricular.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! El instructor es el actor principal de este proceso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '<b>No es una formación ofrecida por EL SENA:</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Virtual.', esCorrecta: false },
            { id: 'b', texto: 'Presencial.', esCorrecta: false },
            { id: 'c', texto: 'Personal.', esCorrecta: true },
            { id: 'd', texto: 'A distancia.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este tipo de formación no es aplicada en el SENA.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '<b>No hace parte de una competencia asociada al instructor:</b>',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Comunicativa.', esCorrecta: false },
            { id: 'b', texto: 'Conductual.', esCorrecta: true },
            { id: 'c', texto: 'Técnica.', esCorrecta: false },
            { id: 'd', texto: 'Específica.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Tiene claro cuáles son las competencias asociadas al instructor.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '<b>Indique cuáles son los momentos presentes en un curso:</b>',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Inicio y fin.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Depende del tipo de formación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Antes, al inicio, durante y al finalizar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inscripción, ficha, formación, graduación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce cuáles son los momentos que se dan durante un curso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '<b>Son los dos sistemas de gestión académica utilizados por el SENA:</b>',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'CompromISO y el LMS.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Centro de calificaciones y repositorio.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'SofiaPlus y el LMS.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Inventario y Diseño Curricular.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Estos son los sistemas utilizados por el SENA en la gestión académica.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '<b>ES uno de los roles principales asociados a SofiaPlus:</b>',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Coordinador.', esCorrecta: false },
            { id: 'b', texto: 'Gestor.', esCorrecta: false },
            { id: 'c', texto: 'Fichas.', esCorrecta: false },
            { id: 'd', texto: 'Aspirante.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Muy bien! Este es uno de los roles principales de SofiaPlus, junto el del instructor, aprendiz y funcionario.',
      mensaje_final_reprobado:
        'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
