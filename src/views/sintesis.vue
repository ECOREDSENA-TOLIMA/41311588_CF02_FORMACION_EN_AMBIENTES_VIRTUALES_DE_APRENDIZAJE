<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se relaciona por medio de un mapa conceptual, la temática abordada durante este componente formativo, destacando los procesos que tienen que ver con el alistamiento en el LMS.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que contiene el mapa conceptual del componente formativo, el cual relaciona que para que haya un adecuado alistamiento del LMS SENA, debe iniciarse una gestión FAVA, listas de chequeo, ejecución y alistamiento de la formación, mediante herramientas y procesos sincrónicos y asincrónicos.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis_1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg" )
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
