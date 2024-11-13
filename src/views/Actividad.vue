<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario" />
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario',
      titulo: 'Alistando el LMS SENA.',
      objetivo:
        '<b> Objetivo:</b> determinar las opciones a seguir en el alistamiento de un LMS, basado en los lineamientos institucionales que posee el SENA.',
      info:
        '<b>Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.</b>',
      barajarPreguntas: false,
      presentacion: [
        {
          texto:
            'Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo Alistamiento en el LMS, según orientaciones institucionales para la formación virtual.<br>Antes de su realización, se recomienda la lectura del componente formativo mencionado. Es opcional (no es calificable), y puede realizarse todas las veces que se desee.',
          imagen: '@/assets/curso/portada/banner-princiapal.png',
        },
      ],
      preguntas: [
        {
          id: 1,
          texto:
            'La formación a distancia no hace parte de las modalidades que se tienen en cuenta al momento de realizar las listas de chequeo a los instructores en su evaluación.',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. Esta modalidad está presente al momento de evaluar desempeño del instructor virtual durante el desarrollo del proceso formativo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La realización de la lista de chequeo implementada al instructor por su coordinador académico o supervisor de contrato, tiene un único momento de aplicación que es después del alistamiento.',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. Esta lista de chequeo tiene un segundo momento de aplicación y es después del cierre de la formación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Dentro de la ejecución de la formación virtual, el momento que mayor parte de tiempo se lleva en un proceso formativo es el alistamiento.',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente interpretación. Puesto que, aunque el alistamiento hace parte de un momento de la ejecución, este no es el que mayor tiempo consume, ya que dicho momento es la ejecución.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Un anuncio es considerado como una herramienta asincrónica, ya que, aunque informa a los aprendices, no lo hace en tiempo real.',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente. El anuncio hace parte de las muchas herramientas asincrónicas que se pueden llevar a cabo en el LMS.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La temporalidad no está catalogada como una característica del LMS, sino más bien como un proceso de mejora de este.',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. La temporalidad si hace parte de las características del LMS y esta hace referencia a los procesos de aprendizajes que se dan y que no tienen una restricción horaria.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El seguimiento y la evaluación es una de las herramientas que hace parte del LMS.',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Esta es una herramienta que se aplica para hacer seguimiento evaluativo, tanto a los instructores, como a los aprendices y los coordinadores.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Las herramientas asincrónicas permiten a los instructores y aprendices interactuar en tiempo real.',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Estas herramientas no se llevan a cabo en tiempo real.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Dentro de las herramientas sincrónicas se encuentran los blogs.',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. Aunque los blogs son una herramienta SENA, no hacen parte de las sincrónicas, sino de las asincrónicas, las cuales no se dan en tiempo real.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La asignación de cursos a los instructores la realizan los coordinadores académicos de los respectivos centros de formación.',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. La asignación de cursos la realizan los coordinadores.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'El tipo de vinculación que se tiene en el SENA es de carrera administrativa, provisionalidad o contrato de prestación de servicios.',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            'Muy bien. Estos son los tipos de vinculación que se tienen en la institución.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha superado la actividad, demostrando los conocimientos apropiados sobre la temática vista en este componente formativo.',
      mensaje_final_reprobado:
        '¡Lo siento! No ha superado la actividad. Pero, recuerde que puede volver a revisar el componente formativo e intentarlo nuevamente.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
