<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tratamiento de las aguas residuales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Una vez identificado cada elemento esencial y concepto preliminar, el siguiente paso es el más importante, el definir bajo la estructura normativa y técnica, qué estrategias pueden ser utilizadas para realizar un tratamiento efectivo de las aguas residuales; además de ello, qué variables considerar para operar las unidades de tratamiento y garantizar el cumplimiento normativo.

        p Estos procesos se realizan dentro de lo que se conoce como Planta de Tratamiento de Agua Residual (PTAR) o Estación Depuradora de Aguas Residuales (EDAR), que es otra forma de nombrarlo. En resumen, esta planta o estación tiene por objeto la protección de la salud pública y la conservación de la calidad de los ecosistemas acuáticos, a través de la eliminación o disminución de la concentración de sustancias o elementos contaminantes; suelen organizarse en operaciones unitarias y procesos unitarios que, de acuerdo con sus características, se clasifican en pre-tratamientos, tratamiento primario, secundario y en algunos casos terciario.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='alt')


    separador

    #t_2_1.titulo-segundo.color-acento-contenido
       h2 2.1 Normatividad aplicada

    .row.justify-content-center.align-items-center.mb-5
      p La base normativa suele estar en constante actualización y modificación, por ello, aunque en este apartado se mencionan algunas leyes, siempre se aconseja revisar las últimas actualizaciones y consultar las páginas oficiales de entidades gubernamentales para conocer las derogaciones o modificaciones que sean pertinentes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Resolución 2115, 2007") Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua, para consumo humano.
          
          p(numero="2" titulo="Ley 1333 de 2009") Por la cual se establece el procedimiento sancionatorio ambiental y se dictan otras disposiciones.

          p(numero="3" titulo="Resolución 3957, 2009") Por la cual se establece la norma técnica, para el control y manejo de los vertimientos realizados al recurso hídrico en el Distrito Capital, específicamente para alcantarillados.

          p(numero="4" titulo="Decreto 3930, 2010") Por la cual se establece la norma técnica, para el control y manejo de los vertimientos realizados al recurso hídrico en el Distrito Capital, específicamente a cuerpos de agua.
          
          p(numero="5" titulo="Decreto 2667, 2012") Por el cual se reglamenta la tasa retributiva por la utilización directa e indirecta del agua como receptor de los vertimientos puntuales, y se toman otras determinaciones.
        
          p(numero="6" titulo="Resolución 1207, 2014") Por la cual se adoptan disposiciones relacionadas con el uso de aguas residuales tratadas.
          
          p(numero="7" titulo="Decreto 1076, 2015") Denominado Decreto único reglamentario del sector ambiente, es un elemento normativo de gran importancia, ya que hace la compilación de diferentes normas en materia ambiental que deben ser aplicadas en el país. Bajo esta perspectiva, se recomienda revisar la sección 20: conservación y preservación de las aguas y sus cauces y todo el capítulo 3, ordenamiento del recurso hídrico y vertimientos.
        
          p(numero="8" titulo="Resolución 0631, 2015") Esta brinda y establece los parámetros y valores límites máximos permisibles en los vertimientos puntuales a cuerpos de agua superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.
          
          p(numero="9" titulo="Resolución 0330, 2017") Por la cual se adopta el Reglamento Técnico para el Sector Agua Potable y Saneamiento Básico – RAS y se derogan las Resoluciones 1096 de 2000, 0424 de 2001, 0668 de 2003, 1459 de 2005 y 2320 de 2009, en este caso, con la aplicabilidad de los títulos E - tratamiento de aguas residuales, D - Sistemas de Recolección y Evacuación de Aguas Residuales Domésticas y Aguas Lluvias.
        
          p(numero="10" titulo="Resolución 800 de 2017") Por medio de la cual la Comisión de Regulación de Agua Potable y Saneamiento Básico (CRA) establece la opción de medición de vertimientos en el servicio público domiciliario de alcantarillado y a los suscriptores y/o usuarios que cumplan los requisitos y condiciones establecidas. Se regula que el dispositivo y/o estructura de medición deberá cumplir las características técnicas que establezca la persona prestadora en el Contrato de Servicios Públicos y deberá medir los vertimientos de forma continua e ininterrumpida, con el fin de establecer los volúmenes totales de vertimiento para cada periodo de facturación.
          
          p(numero="11" titulo="Decreto 50, 2018") Por el cual se modifica parcialmente el decreto 1076 de 2015, Decreto único reglamentario del sector ambiente y desarrollo sostenible en relación con los consejos ambientales regionales de las macrocuencas (carmac), el ordenamiento del recurso hídrico y vertimientos y se dictan otras disposiciones.

    .row.mb-5
      .col-lg-7
        .list.mb-4(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
          .list__txt
            h3.mb-0.tv.margin-icon Rigor subsidiario 

      p Este es un término de suma importancia a nivel normativo, de acuerdo con el decreto 1076, 2015, en el artículo 2.2.3.3.4.8. Define que el rigor subsidiario de la norma de vertimiento es aplicable cuando la autoridad ambiental competente, podrá fijar valores más restrictivos a la norma de vertimiento que deben cumplir los vertimientos al cuerpo de agua o al suelo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-azul.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.svg')})`}"
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 Esto quiere decir, que en el cuerpo de agua y/o tramo del mismo o en acuíferos en donde se asignen usos múltiples, los límites a que hace referencia la normatividad, se establecerán teniendo en cuenta los valores más restrictivos de cada uno de los parámetros fijados para cada uso, luego desentendiendo de la ubicación del punto de descarga del vertimiento y de las normas aplicables, se deberán contemplar y cumplir siempre la base normativa más restrictiva.


    separador

    #t_2_2.titulo-segundo.color-acento-contenido
       h2 2.2 Métodos y equipos de tratamiento


    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Los contaminantes de las aguas residuales pueden ser controlados, eliminados o reducidos mediante la aplicación de diferentes métodos y equipos de tratamiento, los cuales podrían, según su característica principal, clasificarse en:

      TabsB.color-primario
        .py-4.py-md-5(titulo="Tratamiento preliminar o pretratamiento" :icono="require('@/assets/curso/temas/tema2/img3.svg')")
          .row.p-5
            p Está destinado a preparar las aguas residuales para que puedan recibir un tratamiento posterior, evitando que se presenten obstrucción de tuberías por presencia de sólidos flotantes y buscando que no se dé una fluctuación de caudal incontrolable, las unidades de tratamiento preliminar más utilizadas son las rejas o rejillas (cribado o tamizado), los desengrasadores, los tanques de compensación (homogeneización) y los desarenadores.
          
        .py-4.py-md-5(titulo="Tratamiento primario" :icono="require('@/assets/curso/temas/tema2/img4.svg')")
          .row.p-5
            p Consistente en la eliminación de los sólidos suspendidos contenidos en ellas por cualquier método, también se usan tamices y equipos como sedimentadores para realizar métodos como sedimentación, filtración, flotación, precipitación entre otros.

        .py-4.py-md-5(titulo="Tratamiento secundario" :icono="require('@/assets/curso/temas/tema2/img5.svg')")
          .row.p-5
            p Consistente en la eliminación o en la remoción de materia orgánica soluble y suspendida en compuestos estables, por medio de tratamientos fisicoquímicos como la coagulación , floculación , decantación, flotación, filtración, separación por membranas, adsorción e intercambio de iones, tratamientos químicos (precipitación, neutralización y óxido-reducción) y tratamientos biológicos (lodos activados, filtros percoladores, tanques Imhoff, lagunas de oxidación, biodiscos, zanjas de oxidación, filtros de arena, zanjas filtrantes) para eliminar patógenos y otros elementos contaminantes.
          
        .py-4.py-md-5(titulo="Tratamiento terciario" :icono="require('@/assets/curso/temas/tema2/img6.svg')")
          .row.p-5
            p Es el último paso del tratamiento del agua residual, con el fin de pulir el efluente del tratamiento secundario, eliminando elementos como el Nitrógeno (N), fósforo (P), potasio (K), Calcio (Ca) y otros.

    
    .row.justify-content-center.align-items-center.mb-5
      p Sin embargo, otra forma de clasificar o seleccionar los métodos de tratamiento es dada dependiendo del nivel de depuración que se requiera y al nivel que se quiere llegar. De esta forma se pueden distinguir cuatro fases:














</template>

<script>
export default {
  name: 'Tema2',
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
