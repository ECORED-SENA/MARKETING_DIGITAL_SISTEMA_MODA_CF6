<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    p.mb-5 Con el surgimiento de las Tecnologías de la Información y la Comunicación poco a poco se fue creando información sobre el consumo de los clientes en el mercado, permitiendo entender a través de sus datos sus necesidades y deseos de compra, ante esta dinámica las empresas han optado por la valoración de la analítica como una herramienta para la toma de decisiones en relación con los bienes o servicios que deben producir según las tendencias de consumo de su segmento de cliente.

    .tarjeta--container.row.mb-4
      .col-12.col-md-4.mb-4.mb-md-0.tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/intro/img01.svg' alt='AvatarTop')
        p.text-center
          strong 1 
          | Protocolos de Atención y Respuesta para Redes Sociales
      .col-12.col-md-4.mb-4.mb-md-0.tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/intro/img02.svg' alt='AvatarTop')
        p.text-center
          strong 2 
          | Manejo de Crisis en Atención al Cliente en Redes Sociales
      .col-12.col-md-4.mb-4.mb-md-0.tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/intro/img03.svg' alt='AvatarTop')
        p.text-center
          strong 3 
          | Herramientas para Analítica e Informes de Resultados
      .col-12.col-md-4.mb-4.mb-md-0.tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/intro/img04.svg' alt='AvatarTop')
        p.text-center
          strong 4 
          | Elaboración e Informe Descriptivo del Producto
      .col-12.col-md-4.mb-4.mb-md-0.tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/intro/img05.svg' alt='AvatarTop')
        p.text-center
          strong 5 
          | Elaboración e Interpretación de Gráficos
      .col-12.col-md-4.mb-4.mb-md-0.tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/intro/img06.svg' alt='AvatarTop')
        p.text-center
          strong 6 
          | Elaboración de Informes con Proyección de Mejora.
    
    p.mb-4 Lo invitamos a revisar el siguiente recurso de aprendizaje para que usted comprenda algunas condiciones iniciales de aprendizaje. Bienvenido.

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/intro/img07.svg', alt='recurso de aprendizaje')

      .tarjeta.color-acento-botones.p-3(x="11%" y="41%")
        p.texto-blanco • La difusión de información a través de la internet ha generado oportunidades de modelos de negocios, esto debido a la analítica que procesa los datos y la  información de los clientes para entender necesidades de los clientes, ante esta realidad surge el presente momento de aprendizaje ¿qué esperas para ser un creador de valor para las empresas?

      .tarjeta.color-acento-botones.p-3(x="58%" y="21%")
        p.texto-blanco • Usted tiene a su disposición un conjunto de recursos de aprendizaje para desarrollar conocimientos, habilidades y actitudes. Entre ellos: infografía, videos, textos de los autores del componentes y otros.

      .tarjeta.color-acento-botones.p-3(x="93%" y="55%")
        p.texto-blanco • Mantener una disciplina de estudio de acuerdo a los tiempos que tienes para este componente de formación.
        p.texto-blanco • Participar de los espacios de interacción del programa. Uno de ellos son los foros.
        p.texto-blanco • Si tienes dudas con respecto a su proceso no dudes en escribirle un correo a su instructor.

      .tarjeta.color-acento-botones.p-3(x="33%" y="80%")
        p.texto-blanco • El propósito de este momento está relacionado con medir los resultados obtenidos para el ajuste de la estrategia digital, de acuerdo a la analítica de datos.

    p.mb-4 Apreciado aprendiz, agradecemos su atención en la comprensión de información que le será útil para su aprendizaje y el desarrollo de los resultados de aprendizaje esperados.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
