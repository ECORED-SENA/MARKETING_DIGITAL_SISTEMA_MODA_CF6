<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Manejo de crisis en atención al cliente en redes sociales
    
    p.mb-5 Hoy la reputación de las empresas está expuesta a riesgos, las múltiples posibilidades de la web y el modelo de comunicación participativa e interactiva no detiene fácilmente la conversación digital, y este contexto tiene efectos para las empresas directamente relacionados con la reputación corporativa, por eso aparece en el mundo empresarial una nueva disciplina, la gestión de comunicación en crisis, que puede tener doble efecto: buscar frenar la situación que la originó y por otra parte minimizar la pérdida de crédito y capital en la imagen de la empresa, el producto o servicio.
    
    .row.justify-content-center.mb-5
      .col-12.col-md-10
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          span  La gestión de comunicación de crisis se define según González Herrero, 1998, citado por Pérez y García, (2010):
          h2.mb-2 La capacidad de una organización de reducir o prever los factores de riesgo e incertidumbre respecto al futuro, de forma que se capacite a la misma para asumir de manera rápida y eficaz las operaciones de comunicación necesarias que contribuyan a reducir o eliminar los efectos negativos que una crisis puede provocar sobre su imagen y reputación. (p.46)

    .row.justify-content-center.mb-5
      .col-12.col-md-6.mb-4.mb-md-0
        p.mb-4 Teniendo en cuenta que el mínimo suceso derivado de una crisis pone en riesgo, dos elementos claves para cualquier empresa como lo son la imagen y la reputación, las empresas han implementado un plan de gestión de comunicación en crisis.
        p.mb-4 Las crisis son distintas, pues sus fuentes de gestación dependen de las diversidades y los riesgos a las que están sometidas las empresas. La gestión de estas situaciones y su preparación definen a una compañía y puede permitir entender las condiciones y la preparación necesaria para estar en posición de reaccionar, tomar el control y disminuir los riesgos.
        p Teniendo en cuenta que las crisis surgen de diversos tipos de problemáticas derivadas de la actividad de la empresa, existen múltiples miradas sobre las etapas de las crisis, pues cada organización define las etapas, pero a nivel general se plantean tres. A continuación, revisaremos dos posturas en relación con esto:
      .col-12.col-md-6.mb-4.mb-md-0
        img(src='@/assets/curso/tema2/img01.svg')

    .row.justify-content-center.mb-5
      .col-12.col-md-6.mb-4.mb-md-0
        img(src='@/assets/curso/tema2/img02.svg')
      .col-12.col-md-6.mb-4.mb-md-0
        img(src='@/assets/curso/tema2/img03.svg') 

    p.mb-4 Teniendo en cuenta las anteriores definiciones, se puede enfatizar que la comunicación de crisis debe atenderse antes, durante y después de las situaciones. Se sugiere alistarse con anterioridad a través del protocolo de gestión de comunicación en crisis para preparar a los colaboradores y proveedores ante una emergencia; en consecuencia, es necesario implementar unos en el plan de gestión de comunicación de crisis. ¿Cuáles creería usted que son?, para más información observa el siguiente recurso de aprendizaje:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Precaución")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Precaución
            p Generar acciones que tengan claridad y coherencia para evitar riesgos o al menos minimizar.
          .col-md-6
            img(src='@/assets/curso/tema2/img04.png')
      .py-3.py-md-4(titulo="Prevención")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Prevención
            p Evidenciar con anterioridad posibles riesgos y acciones de reacción ante ellos.
          .col-md-6
            img(src='@/assets/curso/tema2/img05.png')
      .py-3.py-md-4(titulo="Previsión")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Previsión
            p Si bien es difícil que una organización pueda preparase para afrontar los riesgos, lo que se debe hacer es un mapa que visualiza riesgos y crisis y sus posibles evoluciones.
          .col-md-6
            img(src='@/assets/curso/tema2/img06.png')
      .py-3.py-md-4(titulo="Anticipación en la planificación")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Anticipación en la planificación
            p Es pertinente diseñar el plan de prevención y las acciones de seguimiento y control de posibles riesgos.
          .col-md-6
            img(src='@/assets/curso/tema2/img07.png')
      .py-3.py-md-4(titulo="Reacción planificada")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Reacción planificada
            p Esta reacción es ante la crisis y se debe diseñar un plan de crisis que defina normas de activación, equipos de ejecución y procedimientos, y recomendaciones para la gestión.
          .col-md-6
            img(src='@/assets/curso/tema2/img08.png')
      .py-3.py-md-4(titulo="Apoyo a la gestión y decisión")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Apoyo a la gestión y decisión
            p Está directamente relacionada con las comunicaciones internas y externas  que permita dar claridad sobre el acontecimiento, difusión a los medios de comunicación y  mensaje a los clientes internos y externos.
          .col-md-6
            img(src='@/assets/curso/tema2/img09.png')
      .py-3.py-md-4(titulo="Respeto a la legislación y contratos")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.mb-4 Respeto a la legislación y contratos
            p Enmarcarse en los protocolos legislativos y contractuales vigentes relacionados con la crisis.
          .col-md-6
            img(src='@/assets/curso/tema2/img10.png')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
