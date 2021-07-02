<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/sopa-letras.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 ¿Cuáles son las fases de ejecución?
        p.mb-4 Apreciado participante, con la intención de identificar el orden de implementación de un plan de mejora, de acuerdo a lo abordado en este componente formativo, elija la secuencia de las fases de ejecución de manera correcta desde la inicial hasta la final. ¿Cuál fase inicia? ¿Cuál fase continúa? ¿Cuál fase finaliza? Adelante.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Identificar el orden de implementación de un plan de mejora de acuerdo a lo aprendido en el componente de formación.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>
