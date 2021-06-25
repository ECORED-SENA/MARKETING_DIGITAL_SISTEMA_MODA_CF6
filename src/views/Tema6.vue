<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Elaboración de informes con proyección de mejora
    
    p.mb-4 La mejora continua está ligada a la búsqueda de la excelencia organizacional y viene marcada por la cultura de calidad, donde debe existir una vinculación colectiva de los miembros de la organización asociados a los diferentes procesos y resultados esperados.

    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-md-0
        .bloque-texto-c.mediumHG.color-primario.p-4
          i.fas.fa-quote-right
          span  Según AQU Catalunya (2005):
          h2.mb-2 Un plan de mejora se define como la propuesta de actuaciones, resultante de un proceso previo de diagnóstico de una unidad, que recoge y formaliza los objetivos de mejora y las correspondientes actuaciones dirigidas a fortalecer los puntos fuertes y resolver los débiles, de manera priorizada y temporalizada. (pág.11).
      .col-lg-6.mb-4.mb-md-0
        .cajon.d-flex.align-items-center.color-acento-contenido.p-4.mb-4
          p.mb-4 Según AITECO Consultores S.L (2019) Un plan de mejora tiene una proyección a futuro, pues proyecta desde el análisis de una situación, unos objetivos a corto, mediano y largo plazo, priorizando acciones para producir cambios positivos en la cultura organizativa. El plan de mejora no se centra en los problemas esporádicos de una organización. En su lugar, se dirige hacia los problemas crónicos. Son estos los responsables de un insuficiente rendimiento que se manifiesta en un nivel estable de resultados, aunque insatisfactorio. A su vez, los planes de mejora pueden ser proactivos, es decir, dirigirse a mejorar un área de gestión, un servicio o un proceso. En todo caso, su planificación y desarrollo requiere de acciones determinadas, de forma que aseguren el éxito. En el siguiente recurso educativo se exponen los beneficios de un plan de mejora ¿cuáles cree que son los beneficios?, piense por un momento y explore el gráfico.

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema6/img01.svg')
      .tarjeta.color-acento-botones.p-3(x="51%" y="25%")
        p.texto-blanco Priorizar decisiones, recurso y asignación de actores.
      .tarjeta.color-acento-botones.p-3(x="64%" y="40%")
        p.texto-blanco Globalizar la mirada y la acción de los problemas con perspectiva temporal
      .tarjeta.color-acento-botones.p-3(x="64%" y="61%")
        p.texto-blanco Repensar la cultura organizativa con proyección a futuro enmarcada en los cambios requeridos según contexto
      .tarjeta.color-acento-botones.p-3(x="51%" y="75%")
        p.texto-blanco Visionar loa objetivos esperados  versus acciones desarrolladas para lograrlos
      .tarjeta.color-acento-botones.p-3(x="37%" y="61%")
        p.texto-blanco Involucrar a los actores de las diferentes áreas y procesos en la mejora organizacional
      .tarjeta.color-acento-botones.p-3(x="37%" y="40%")
        p.texto-blanco Introducir cambios en la cultura organizativa basados en la dirección por objetivos.
    
    p.mb-5 Luego de percibir los beneficios del plan de mejora, es importante que usted, como aprendiz reconozca los pasos de la metodología del plan de mejora, la cual está basada en el espiral de mejora continua a partir del ciclo PHVA (Planear-Hacer-Verificar-Actuar) la cual está constituida por cuatro fases. Ellas son:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.mediumHG.color-acento-contenido.p-3
          .h4 Planear
          p.mb-4 Se identifica el problema y se definen objetivos y acciones para lograrlos.
          .h4.texTransp .
          .h4.texTransp .
          img.bottonImg(src='@/assets/curso/tema6/img02.svg') 
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.mediumHG.color-primario.p-3
          .h4 Hacer
          p.mb-4 Se trabaja en los cambios para lograr los objetivos.
          .h4.texTransp .
          .h4.texTransp .
          .h4.texTransp .
          img.bottonImg(src='@/assets/curso/tema6/img03.svg') 
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.mediumHG.color-acento-contenido.p-3
          .h4 Verificar
          p.mb-4 Transcurrido un tiempo definido previamente, se evalúan los resultados con base en los KPI (indicadores), para verificar la eficacia y eficiencia de las acciones implementadas.
          img.bottonImg(src='@/assets/curso/tema6/img04.svg') 
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.mediumHG.color-primario.p-3
          .h4 Actuar
          p.mb-4 Se toman decisiones de acuerdo a lo encontrado generando acciones correctivas y repensando la unidad en el marco de los cambios de contexto.
          .h4.texTransp .
          img.bottonImg(src='@/assets/curso/tema6/img05.svg')

    .h4 Fases de ejecución

    p.mb-5 Para definir las fases de ejecución de un plan de mejora nos basaremos en Proaño, D. et al. (2017), que definen cuatro fases a seguir para ejecutar un plan de mejora. Las fases expuestas por estos autores son: 1. Análisis, 2. Planeación, 3. Implementación y Seguimiento, 4. Evaluación. Le sugerimos leerlas e identificar las acciones que debe realizar, esto le permitirá saber cómo hacerlo cuando le toque hacerlo en su contexto laboral.

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.d-flex.align-items-center.mb-4.mb-lg-0
              img(src='@/assets/curso/tema6/img06.png')
            .col-lg-9
              .h4 1. Fase análisis
              p.mb-4 Esta fase inicia con la identificación de las posibles causas de la problemática, del área y proceso a ser mejorado, teniendo en cuenta los siguientes elementos como: análisis del impacto que tiene el proceso en el área para lograr objetivos estratégicos de la empresa, importancia de la visión, misión y objetivos estratégicos y prever los efectos negativos de la situación problémica, para esto existen herramientas y técnicas de análisis como la matriz DOFA (Debilidades, Oportunidades, Fortalezas, Amenazas) diagramas de causa- efecto, el árbol de problemas.
        .tarjeta.color-primario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.d-flex.align-items-center.mb-4.mb-lg-0
              img(src='@/assets/curso/tema6/img07.png')
            .col-lg-9
              .h4 2. Fase de planeación
              p.mb-4 Esta planificación debe ser definida en varios momentos o plazos, ser medible, viable, flexible, y se debe tener en cuenta lo siguiente: validar los resultados del análisis y definir los objetivos, definir las posibles soluciones y establecer las acciones, asignar las responsabilidades a los miembros del equipo y definir las herramientas para la solución de problemáticas.
        .tarjeta.color-acento-contenido.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.d-flex.align-items-center.mb-4.mb-lg-0
              img(src='@/assets/curso/tema6/img08.png')
            .col-lg-9
              .h4 3. Fase de implementación y seguimiento
              p.mb-4 En esta fase es vital la incorporación del personal pues son los encargados de ejecutar las acciones y se debe tener en cuenta lo siguiente: la socialización del plan de mejora, la ejecución de las acciones programadas, los seguimientos basados en indicadores de impacto y de desempeño, y valoración del cumplimiento del plan.
        .tarjeta.color-primario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-6.col-lg-2.d-flex.align-items-center.mb-4.mb-lg-0
              img(src='@/assets/curso/tema6/img09.png')
            .col-lg-9
              .h4 4. Fase de evaluación
              p.mb-4 Consiste en la verificación del plan de mejora definido, se define a partir de objetivos e indicadores y finalmente se realiza el informe.
              p Apreciado aprendiz, gracias por llegar al final de esta experiencia de aprendizaje. Es importante que usted más allá de identificar o comprender conceptos vistos debe buscar las formas de cómo llevarlos a cabo en su contexto. Allí es donde tiene utilidad su formación.
        
    
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
