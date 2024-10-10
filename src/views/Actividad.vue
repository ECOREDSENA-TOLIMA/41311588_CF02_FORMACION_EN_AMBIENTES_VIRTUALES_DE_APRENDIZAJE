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
      tema: 'Alistando el LMS SENA.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> determinar las opciones a seguir en el alistamiento de un LMS, basado en los lineamientos institucionales que posee el SENA.<br><br><b>Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.</b>',
      barajarPreguntas: true,
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
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
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
