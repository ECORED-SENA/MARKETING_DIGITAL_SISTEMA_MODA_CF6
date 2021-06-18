<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Elaboración e interpretación de gráficos
    
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 El reporting (reporte) de redes sociales y analítica digital son estrategias eficaces para mejorar la comunicación adecuada entre las campañas de marketing y la dirección de la empresa. De los datos analíticos depende el social media para que sus iniciativas sean eficaces y exitosas, redundando así en beneficio para las empresas. Cuando hablamos de visualización de datos nos referimos al proceso de convertir cantidades grandísimas de información en conocimiento; y para esto se utilizan diversos gráficos estadísticos, que serían aquellas herramientas visuales que ayudan a plasmar datos estadísticos complejos de forma ordenada y sencilla para ser interpretados, analizados y entendidos.
        p Un dato estadístico se puede definir como el valor cuantitativo de un objeto de conocimiento en un tiempo y un espacio, y puedes ser de dos tipos: cuantitativos hace referencia a cantidades y valores y cualitativos son cualidades del producto que no pueden expresarse a partir de números. Entonces un gráfico resultado de una estrategia de analítica digital lo que haces es ordenar los datos estadísticos con diversas estructuras, líneas, barras, burbujas, etc. con el propósito de generar facilidad en el entendimiento sobre la data.
      .col-lg-5
        img(src='@/assets/curso/tema5/img01.png')
    
    #t_5_1.titulo-segundo
      .h4 5.1 Características de los gráficos
    
    .row.justify-content-center
      .col-lg-5.mb-4.mb-lg-0
        img(src='@/assets/curso/tema5/img02.svg')
      .col-lg-7.mb-4.mb-lg-0
        .cajon.align-items-center.color-primario.p-4.mb-4
          p.mb-4 Un buen gráfico debe generar las siguientes particularidades:
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Presentar la información de manera agradable, sencilla, clara y precisa.
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Generar interés y captar la atención del lector.
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Acompaña e ilustra el tema, mensaje o trama del texto en él se apoya.
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Facilita la comparación de datos, destacando tendencias y diferencias.
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | No puede inducir al error.
          p.mb-4 Existe un amplio abanico de gráficos diferentes que se pueden implementar en los informes de analíticas digital. Se presentarán los más usados desde su tipo, explicación y cuándo se usan. Le sugerimos percibir los beneficios de estos gráficos para que pueda tomar decisiones en el momento de utilizarlos.

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Tablas")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Tablas
            h4 Explicación
            p.mb-4 Gráfico que sirve para organizar los datos en columnas dando cuenta de las frecuencias que un dato se repite.
            h4 ¿Cuándo se usa? 
            p.mb-4 Este gráfico se implementa para representar variables cuantitativas o cualitativas ordinales
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img03.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Gráfico de Barras")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Gráfico de Barras
            h4 Explicación
            p.mb-4 Es el gráfico más utilizado se conforma de un eje x que posiciona conceptos y un eje y que define la escala de valor y se representa mediante barras o rectángulos.
            h4 ¿Cuándo se usa? 
            p.mb-4 Cuando se requiera magnitudes de varias categorías o ver la evolución de una magnitud completa.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img05.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Gráfica lineal o de líneas")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Gráfica lineal o de líneas
            h4 Explicación
            p.mb-4 Muestra tendencias en el tiempo y los valores se representan con puntos unidos por líneas.
            h4 ¿Cuándo se usa? 
            p.mb-4 Muy útil para  describir   las tendencias de una serie de datos de un periodo determinado años, meses, semanas, días,  horas, minutos.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img06.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Gráfica circular o pastel")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Gráfica circular o pastel
            h4 Explicación
            p.mb-4 Gráfico con gran utilización por su facilidad y sencillez, también conocido como Tora por su representación circular que simboliza la totalidad y se expresa en porcentajes.
            h4 ¿Cuándo se usa? 
            p.mb-4 Cuando se analizan pocas variables y se requiera recalcar proporciones de un total.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img07.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Gráfica poligonal o polígona de frecuencias")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Gráfica poligonal o polígona de frecuencias
            h4 Explicación
            p.mb-4 Gráfico conformado por las variables definidas en el eje X y las frecuencias en el eje Y se marcan los puntos, para luego unirlos y formar una línea poligonal constante o irregular llamada gráfica poligonal.
            h4 ¿Cuándo se usa? 
            p.mb-4 Se implementa para mostrar y comparar una variable en el tiempo o evidenciar los cambios de una variable en un periodo determinado.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img08.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Gráfico de acciones")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Gráfico de acciones
            h4 Explicación
            p.mb-4 Con este gráfico se puede representar datos financieros, a través de eje horizontal que expresa el tiempo y el eje vertical que expresa los valores o porcentajes.
            h4 ¿Cuándo se usa? 
            p.mb-4 Al medir variables cuantitativas que generen y visualizar qué variables tienen valores similares, o si existen valores atípicos entre las variables.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img09.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Gráfico radial o de telaraña")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Gráfico radial o de telaraña
            h4 Explicación
            p.mb-4 Es un gráfico estructurado con ejes radiales referenciados al mismo origen, que contienen una escala con valores fijos para todas las variables y genera un polígono regular.
            h4 ¿Cuándo se usa? 
            p.mb-4 Cuando tengamos que analizar o evaluar diferentes opciones en función de múltiples variables.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img10.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Histograma")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Histograma
            h4 Explicación
            p.mb-4 Gráfico que se estructura a través de ejes cartesianos que muestra la frecuencia de determinados valores, pero, en vez de establecer la frecuencia de un valor concreto, refleja todo un intervalo.
            h4 ¿Cuándo se usa? 
            p.mb-4 Cuando debamos representar datos cualitativos o datos cuantitativos de tipo discreto.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img11.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Cartograma")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Cartograma
            h4 Explicación
            p.mb-4 Este tipo de gráfico es implementado para indicar las zonas o áreas geográficas de mayor o menor frecuencia de una variable o valor un determinado. Estas frecuencias o rangos de se indican mediante el uso del color.
            h4 ¿Cuándo se usa? 
            p.mb-4 Cuando tengamos que mostrar una distribución temática sobre como un territorio adquiere un tamaño, proporcional al valor de la variable representada.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img12.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Gráfico de dispersión")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Gráfico de dispersión
            h4 Explicación
            p.mb-4 Este gráfico utiliza los puntos para representar los datos, esos puntos representan el valor de cada observación, y muestra como una nube de puntos que valida nivel de dispersión de los datos.
            h4 ¿Cuándo se usa? 
            p.mb-4 Cuando necesitamos representar de una gran cantidad de observaciones y se desea saber si existe una relación entre variables.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img13.svg')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Diagrama de Gantt")
        .row.justify-content-center
          .col-12.col-lg-8.mb-4.mb-lg-0
            h3 Diagrama de Gantt
            h4 Explicación
            p.mb-4 Este gráfico consta de un eje horizontal que representa el tiempo y una vertical, en el cual se describen los procesos. Se implementan para optimizar planeaciones y gestión de recursos.
            h4 ¿Cuándo se usa? 
            p.mb-4 Cuando se requiere planificar un proyecto y gestionar los recursos.
          .col-8.col-lg-3
            img(src='@/assets/curso/tema5/img14.svg')

    #t_5_2.titulo-segundo
      .h4 5.2 Tipos de analíticas
    
    p.mb-4 Entender y saber analizar las estadísticas de la analítica digital de manera correcta, posibilita un mayor crecimiento del negocio. Los informes de las analíticas digitales tienen múltiples finalidades, por eso es importante a la hora de redactar tener en cuenta qué tipo de informe se requiere, veamos los más implementados:
  
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.largeHG.p-3
          .h2 01
          .h4 Retrospectiva:
          hr.subtitle
          p análisis descriptivo Es la interpretación más común del análisis de estadística de redes y páginas web, basadas en acontecimientos del presente y del pasado. Hace referencia a la compilación de información estadística sobre elementos históricos definidos claramente, que se almacenan y se realiza agregaciones del histórico para la comprensión del estado actual o pasado del negocio; como ejemplo podríamos poner clientes, productos, proveedores.
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-primario.largeHG.p-3
          .h2 02
          .h4 Insights:
          hr.subtitle
          p análisis de diagnóstico Gira en torno al “por qué”, es decir da elementos de éxito o fallidos de una campaña, generalmente se combina con la información que entrega el análisis descriptivo.
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.largeHG.p-3
          .h2 03
          .h4 Previsión
          hr.subtitle
          p : análisis predictivo Basada en el uso de técnicas de machine learning, datos y algoritmos estadísticos que ayudan a contrarrestar información, para visionar la probabilidad de resultados futuros basado en ese material histórico, definiendo si la estrategia va por buen camino y proveer la mejor evaluación de lo que sucederá en el futuro.
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-primario.largeHG.p-3
          .h2 04
          .h4 Prospectiva
          hr.subtitle
          p análisis prescriptivo Va más allá del análisis predictivo pues entrega elementos sobre acciones futuras, pero te da claridad sobre cómo abordar ese escenario para optimizar los resultados.
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .row
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta.color-acento-contenido.largeHG.p-3
              .h2 05
              .h4 Analítica selectiva:
              hr.subtitle
              p Reporting que posibilita seleccionar material a través de un filtro con criterios específicos, generalmente se usa para revisión de casos, para grupos de investigación en un área específica o informes de cumplimiento obligatorio.
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta.color-primario.largeHG.p-3
              .h2 06
              .h4 Analística y exportación de registros:
              hr.subtitle
              p Traslada información de su fuente original para generar reportes específicos, generalmente se usa cuando se van a analizar clientes, datos demográficos de usuarios o interacciones con el servicio antes y postventa.
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta.color-acento-contenido.largeHG.p-3
              .h2 07
              .h4 Analíticas periódicas:
              hr.subtitle
              p Son los reportes estándar, se diferencian de las listas de seguimiento, porque no se enfoca a una búsqueda intensiva y reducida, sino que generan en periodos de tiempo establecidos y basados en estadística descriptiva, información más general de un área en concreto.  

    #t_5_3.titulo-segundo
      .h4 5.3 Tipos de métricas

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-6
        p.mb-4 Un informe estadístico producto de un ejercicio de analítica, entrega datos que ayudan al proceso de análisis del rendimiento de la página y de las redes sociales a través de métricas, que son datos que sirven para analizar el rendimiento de las campañas marketing digital. Veremos a continuación algunas métricas comunes en el marketing.
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Métricas de Área o Generales. Basadas en la correspondencia del esfuerzo organizativo y la inversión en la búsqueda y adquisición de clientes.
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Métricas de Producto. Mide la popularidad y características de un producto con respecto a la competencia.
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Métrica de Campaña. Mide la adquisición de leads y ventas efectivas basadas en el comportamiento de público.
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Métricas Digitales. Valida seguidores, número de visitas, nivel de interacciones y de conversión.
        p.mb-4 Analizar e interpretar los gráficos estadísticos de las redes sociales y las páginas web, permite no solo recopilar sino comprender los datos arrojados, para alcanzar una visión del actual mercado, conocer y comprender el consumidor objetivo, analizar audiencias, y recopilar todo tipo de comentarios para usarlos como insumo de mejoras.
      .col-lg-6
        img(src='@/assets/curso/tema5/img15.png')

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
