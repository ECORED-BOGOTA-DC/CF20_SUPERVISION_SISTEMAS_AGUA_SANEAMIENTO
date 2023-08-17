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
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Imágen decorativa')


    separador

    #t_2_1.titulo-segundo.color-acento-botones
       h2 2.1 Normatividad aplicada

    .row.justify-content-center.align-items-center.mb-5
      p La base normativa suele estar en constante actualización y modificación, por ello, aunque en este apartado se mencionan algunas leyes, siempre se aconseja revisar las últimas actualizaciones y consultar las páginas oficiales de entidades gubernamentales para conocer las derogaciones o modificaciones que sean pertinentes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Resolución 2115, 2007") Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua, para consumo humano.
          
          p(numero="2" titulo="Ley 1333 de 2009") Por la cual se establece el procedimiento sancionatorio ambiental y se dictan otras disposiciones.

          p(numero="3" titulo="Resolución 3957, 2009") Por la cual se establece la norma técnica, para el control y manejo de los vertimientos realizados al recurso hídrico en el Distrito Capital, específicamente para alcantarillados.<br><br>Por la cual se establece la norma técnica, para el control y manejo de los vertimientos realizados al recurso hídrico en el Distrito Capital, específicamente a cuerpos de agua.

          p(numero="4" titulo="Decreto 3930, 2010") Por el cual se reglamenta parcialmente el Título I de la Ley 9ª de 1979, así como el Capítulo II del Título VI -Parte III- Libro II del Decreto-ley 2811 de 1974 en cuanto a usos del agua y residuos líquidos y se dictan otras disposiciones.
          
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
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Rigor subsidiario 

      p Este es un término de suma importancia a nivel normativo, de acuerdo con el decreto 1076, 2015, en el artículo 2.2.3.3.4.8. Define que el rigor subsidiario de la norma de vertimiento es aplicable cuando la autoridad ambiental competente, podrá fijar valores más restrictivos a la norma de vertimiento que deben cumplir los vertimientos al cuerpo de agua o al suelo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-azul.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.svg')})`}"
          )(alt="Imágen decorativa")
          .bloque-texto-g__texto.p-3
            p.mb-0 Esto quiere decir, que en el cuerpo de agua y/o tramo del mismo o en acuíferos en donde se asignen usos múltiples, los límites a que hace referencia la normatividad, se establecerán teniendo en cuenta los valores más restrictivos de cada uno de los parámetros fijados para cada uso, luego desentendiendo de la ubicación del punto de descarga del vertimiento y de las normas aplicables, se deberán contemplar y cumplir siempre la base normativa más restrictiva.


    separador

    #t_2_2.titulo-segundo.color-acento-botones
       h2 2.2 Métodos y equipos de tratamiento


    .row.justify-content-center.align-items-center.mb-5
      p Los contaminantes de las aguas residuales pueden ser controlados, eliminados o reducidos mediante la aplicación de diferentes métodos y equipos de tratamiento, los cuales podrían, según su característica principal, clasificarse en:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img7.svg", alt="Imágen decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-center Tratamientos físicos
            p.mb-5 Son operaciones unitarias donde predomina la aplicación de fuerzas físicas en la eliminación de contaminantes.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img8.svg", alt="Imágen decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-center Tratamientos químicos
            p.mb-5 Son procesos unitarios de transformación química, en los cuales usualmente la eliminación del contaminante se da por la aplicación de un producto químico o por reacciones químicas.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img9.svg", alt="Imágen decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-center Tratamientos biológicos
            p.mb-5 Son procesos unitarios de transformación biológica, es decir, que la eliminación del contaminante se da por una actividad biológica. 

    
    .row.justify-content-center.align-items-center.mb-5
      p Sin embargo, otra forma de clasificar o seleccionar los métodos de tratamiento es dada dependiendo del nivel de depuración que se requiera y al nivel que se quiere llegar. De esta forma se pueden distinguir cuatro fases:

    .row.justify-content-center.align-items-center.mb-5
      TabsB.color-primario
        .py-4.py-md-5(titulo="Tratamiento preliminar o pretratamiento" :icono="require('@/assets/curso/temas/tema2/img3.svg')")
          .row.p-5
            p Está destinado a preparar las aguas residuales para que puedan recibir un tratamiento posterior, evitando que se presenten obstrucción de tuberías por presencia de sólidos flotantes y buscando que no se dé una fluctuación de caudal incontrolable, las unidades de tratamiento preliminar más utilizadas son las rejas o rejillas (cribado o tamizado), los desengrasadores, los tanques de compensación (homogeneización) y los desarenadores.
          
        .py-4.py-md-5(titulo="Tratamiento primario" :icono="require('@/assets/curso/temas/tema2/img4.svg')")
          .row.p-5
            p Consistente en la eliminación de los sólidos suspendidos contenidos en ellas por cualquier método, también se usan tamices y equipos como sedimentadores para realizar métodos como sedimentación, filtración, flotación, precipitación, entre otros.

        .py-4.py-md-5(titulo="Tratamiento secundario" :icono="require('@/assets/curso/temas/tema2/img5.svg')")
          .row.p-5
            p Consistente en la eliminación o en la remoción de materia orgánica soluble y suspendida en compuestos estables, por medio de tratamientos fisicoquímicos como la coagulación, floculación, decantación, flotación, filtración, separación por membranas, adsorción e intercambio de iones, tratamientos químicos (precipitación, neutralización y óxido-reducción) y tratamientos biológicos (lodos activados, filtros percoladores, tanques Imhoff, lagunas de oxidación, biodiscos, zanjas de oxidación, filtros de arena, zanjas filtrantes) para eliminar patógenos y otros elementos contaminantes.
          
        .py-4.py-md-5(titulo="Tratamiento terciario" :icono="require('@/assets/curso/temas/tema2/img6.svg')")
          .row.p-5
            p Es el último paso del tratamiento del agua residual, con el fin de pulir el efluente del tratamiento secundario, eliminando elementos como el Nitrógeno (N), fósforo (P), potasio (K), Calcio (Ca) y otros.


  


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mt-3
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 13.
          | Secuencia lógica de procesos de tratamiento de aguas residuales

        figure
          img(src="@/assets/curso/temas/tema2/img10.svg", alt="Figura 13. Muestra la secuencia lógica de los procesos de tratamiento de aguas residuales.")    


    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3 Selección de los procesos y equipos de tratamiento

    .row.justify-content-center.align-items-center.mb-5
      p En la determinación de los procesos a aplicar para realizar una depuración o tratamiento de aguas residuales, deben ser tenidos en cuenta los siguientes puntos de manera general:

    .row.justify-content-center.align-items-center.mb-5(title="Imagen que muestra los puntos a tener en cuenta al momento de determinar los procesos a aplicar en la depuración o tratamiento de aguas residuales.")
      .col-lg-10
        .bg-fondo1.p-3.p-lg-5.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-3.col-sm-11
              h4 Caracterización

            .col-lg-8.col-sm-11
              p Determinación del origen de las aguas residuales, estado de las redes de alcantarillado, localización y características de los puntos de vertido y el análisis de los parámetros que contiene el agua. 

        .bg-fondo2.p-3.p-lg-5.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-3.col-sm-11
              h4 Diagnóstico ambiental

            .col-lg-8.col-sm-11
              p.mb-0 Realizar una evaluación ambiental del proyecto a realizar.

        .bg-fondo3.p-3.p-lg-5.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-3.col-sm-11
              h4 Establecimiento de los objetivos y metas a alcanzar

            .col-lg-8.col-sm-11
              p.mb-0 Enfocado siempre en el cumplimiento de la normatividad aplicable.

        .bg-fondo4.p-3.p-lg-5.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-3.col-sm-11
              h4.mt-3 Propuestas y soluciones técnicas

            .col-lg-8.col-sm-11
              p.mb-0 Comparación técnica y económica de los diferentes equipos y métodos de depuración para la determinación del tren de tratamiento más acorde al proyecto.

        .bg-fondo5.p-3.p-lg-5.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-3.col-sm-11
              h4.mt-3 Selección del tren de tratamiento

            .col-lg-8.col-sm-11
              p.mb-0 Teniendo en cuenta las eficiencias de remoción.

        .bg-fondo6.p-3.p-lg-5.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-3.col-sm-11
              h4.mt-3 Determinación de aspectos funcionales

            .col-lg-8.col-sm-11
              p.mb-0 Administrativos y operacionales

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3 Eficiencia de remoción de contaminantes

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Cada equipo está diseñado para hacer remoción especializada de los contaminantes; sin embargo, cada uno de estos tiene una eficiencia en su operación, normalmente, la eficiencia viene dada por el fabricante, de acuerdo con la carga contaminante, por ello es importante conocer el procedimiento para calcular la concentración final una vez las aguas residuales pasan por un tratamiento.

      .col-lg-10
        .tarjeta-azul3.p-3.mb-4
          p.mb-0 Por ejemplo, se tiene un agua residual proveniente del lavado de hortalizas, con una concentración de sólidos de 700 mg/l y se desea tratar en un sedimentador; una vez las aguas pasan por el equipo, quedan con una concentración de 100 mg/l
          p ¿Cuál es la eficiencia del sedimentador?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mt-3
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 14.
          | Concentraciones de afluente y efluente de un proceso de sedimentación

        figure
          img(src="@/assets/curso/temas/tema2/img11.svg", alt="Figura 14. Muestra la conformación de la concentración de afluente y efluente en un proceso de sedimentación.")

    .row.justify-content-center.align-items-center.mb-5
      p Por ejemplo, si se tiene un afluente con una concentración de sólidos de 1200 mg/l y este ingresa a un sedimentador que tiene una eficiencia de remoción del 93% ¿cuál será la concentración del efluente?


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/tema2/img12.svg", alt="Imagen de un tablero que muestra la operación para conocer la concentración del afluente con sus respectivas fórmulas.")


    .row.justify-content-center.align-items-center.mb-5(title="Imagen con resultado de eficiencia y concentración.")
      .col-lg-10
        .bg-fondo7.p-4.mb-5
          .row.mt-3
            .col-3.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema2/img15.svg", alt="Imágen decorativa")

            .col-lg-11
              .row.mb-4
                .col-lg-4
                  p.text-center <i>Eficiencia equipo A (%) =</i>
                .col-lg-7
                  figure
                    img(src="@/assets/curso/temas/tema2/img16.svg", alt="Imágen decorativa")

              .row
                p <i>Concentración intermedia = Concentración inicial -( Concentración inicial</i> x <i>eficiencia equipo A</i>/100)

                p <i>Concentración intermedia</i> = 1000 <i>mg/l</i> -( 1000 <i>mg/l</i>  x  0,5)

                p <i>Concentración intermedia</i> = 1000 <i>mg/l</i> - 500 <i>mg/l</i>

                p <i>Concentración intermedia</i> = 500 <i>mg/l</i>


      p Luego así, conociendo la concentración intermedia, se puede calcular la concentración final a partir del equipo B, así:

    .row.justify-content-center.align-items-center.mb-5(title="Imagen con resultado de eficiencia y concentración.")
      .col-lg-10
        .bg-fondo7.p-4.mb-5
          .row.mt-3
            .col-3.col-lg-1
              figure
                img(src="@/assets/curso/temas/tema2/img15.svg", alt="Imágen decorativa")

            .col-lg-11
              .row.mb-4
                .col-lg-4
                  p.text-center <i>Eficiencia equipo B (%) =</i>
                .col-lg-7
                  figure
                    img(src="@/assets/curso/temas/tema2/img16.svg", alt="Imágen decorativa")

              .row
                p <i>Concentración intermedia = Concentración inicial -( Concentración inicial</i> x <i>eficiencia equipo B</i>/100)

                p <i>Concentración intermedia</i> = 500 <i>mg/l</i> -( 500 <i>mg/l</i>  x  0,5)

                p <i>Concentración intermedia</i> = 500 <i>mg/l</i> - 250 <i>mg/l</i>

                p <i>Concentración intermedia</i> = 250 <i>mg/l</i>

      p El efluente, después de los dos equipos para el tratamiento, tendrá una concentración de 250 <i>mg/l</i> de contaminante.


    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3 Equipos o procesos de pretratamiento

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-5 Se utilizan procesos físicos y mecánicos, de modo que puedan retener material extraño o grande en el agua residual, para así removerlo y que no pueda interferir en los procesos posteriores, como lo son:

        TabsC.color-secundario
          .py-3.py-md-4(titulo="Rejillas")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src="@/assets/curso/temas/tema2/img17.svg", alt="Imagen de una rejilla desde la parte superior y la vista lateral.")
              .col-md-6
                p Dependiendo de su forma se podría indicar que existen aquellas que se limpian manualmente, mecánicamente, que son de forma de canasta o retenedoras de fibra; se colocan por lo general aguas arribas de estaciones de bombeo o de los otros dispositivos. Como su nombre lo indica, son barras o rejillas que se ubican entre 15 a 50 mm (manuales) o entre 3 a 77 mm (mecánicas).  

          .py-3.py-md-4(titulo="Remoción de grasas")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src="@/assets/curso/temas/tema2/img18.svg", alt="Imagen de la estructura donde se realiza la remoción de grasas.")
              .col-md-6
                p Para este proceso se pueden usar elementos que cumplan varias funciones, como los que direccionen el agua a un proceso de sedimentación simple o por gravedad, en el cual se brinda un tiempo de retención del agua para permitir que los sólidos suspendidos y la materia orgánica sean sedimentadas, lo cual permite su fácil evacuación; sin embargo, junto a este proceso también se puede adicionar un proceso de flotación, donde la grasa sale a la superficie, y es retenida mientras el agua aclarada sale por una descarga inferior. Se pueden usar los dos procesos o por el contrario solo el segundo, a través del equipo denominado trampa de grasas, el cual puede ser de diferentes índoles, domiciliar (cocinas o restaurantes) o  colectiva (conjuntos residenciales e industrias).        

          .py-3.py-md-4(titulo="Desarenadores")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src="@/assets/curso/temas/tema2/img19.svg", alt="Imagen de un desarenador")
              .col-md-6
                p Elementos que, como lo indica su nombre, remueven partículas de arena y similares (peso cercano a 2,65 g/cm3 y 0,15 mm de diámetro), por ejemplo, cáscaras y semillas, es decir, partículas sólidas inertes que sedimentan a mayor velocidad que los sólidos orgánicos de tamaño similar. Estos desarenadores suelen hacer procesos de retención de 5 a 10 minutos, este tiempo corto es para que se sedimenten las partículas específicas, pero no lo suficientemente para que exista asentamiento de materia orgánica; su localización debe ser después de las rejillas y antes de los tanques de sedimentación primaria y estaciones de bombeo; debe contar con limpieza, si presentan un caudal de 50 L/s puede ser manual, pero si es mayor de 150 L/s, limpieza mecánica.        

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3 Equipos o procesos de tratamiento primario

    .row.justify-content-center.align-items-center.mb-5
      p Los procesos de tratamiento primario eliminan las impurezas más grandes y los sólidos suspendidos en el agua a través de sedimentación. Los procesos esenciales para garantizar la seguridad y limpieza del agua son:

    .row.justify-content-center.align-items-center.mb-5
      TabsA.color-primario
        .tarjeta.color-tarjeta-tapsA.p-4(titulo="Sedimentadores primarios")
          p En esta fase este proceso busca la remoción de sólidos suspendidos y de DBO, todo bajo un proceso físico de asentamiento en tanques de sedimentación, donde se realiza un proceso de sedimentación. Es importante definir el tiempo de retención (mínimo 1 hora), la profundidad del tanque (2 a 5 metros dependiendo de la forma) y el porcentaje de remoción; suelen ser unidades de gran tamaño, debido a los altos tiempos de retención hidráulica y suelen generar fangos o lodos que deben ser extraídos y tratados. 

          p La dimensión del tanque está determinada por la cantidad de agua (caudal máximo esperado), pueden ser tanques rectangulares y circulares, los rectangulares no son recomendados.

        .tarjeta.color-tarjeta-tapsA.p-4(titulo="Sedimentación con ayudas")
          p Si el proceso no puede darse en el tiempo determinado y se requiera mejorar su eficiencia de remoción, se pueden usar productos químicos para la aglomeración de partículas por medio de sales coagulantes, las cuales promueven o facilitan la aglomeración de flóculos o coágulos de mayor tamaño y peso, se pueden alcanzar niveles de remoción de entre 60 y 80 % para DBO y entre 65 y 85 % para Sólidos Suspendidos Totales (SST). Los productos más utilizados son sulfato de aluminio o alumbre, cloruro férrico, el sulfato ferroso, la cal y el aluminato de sodio y polielectrolitos sintéticos. Muchos de ellos cambian el pH del agua, esta debe ser neutralizada a un rango entre 6,5 y 8,5 unidades, es el rango en el cual la aglomeración es más eficiente; este proceso es también conocido como coagulación y floculación.

        .tarjeta.color-tarjeta-tapsA.p-4(titulo="Tamices")
          p Son elementos que por sus características no son recomendables para sistemas de baja y media complejidad o para aguas residuales que traigan consigo gran cantidad de elementos gruesos y/o arenas. Suelen ser procesos de filtración estáticos por medio de microtamices en forma de discos (malla de acero inoxidable), rotativos de bandejas (bandejas inclinadas, con tamices rectangulares, superpuestos y conectados) y rotativos cilíndricos (van rotando lentamente, a velocidad constante retirando las partículas del líquido que los atraviesa).

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3 Equipos o procesos de tratamiento secundario

    .row.justify-content-center.align-items-center.mb-5
      p Cuando aún los tratamientos anteriores no dan un resultado favorable en cuanto a la remoción requerida de los parámetros contaminantes para el cumplimiento normativo, se debe pasar a otros procesos más especializados por medio de procesos biológicos que permiten retirar la materia orgánica fina coloidal y disuelta en el agua que se escapó de tratamientos anteriores. Aunque son procesos biológicos, pueden tener ayudas físicas y químicas, estos pueden ser clasificados en dos sistemas: aerobios y sistemas anaerobios.

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Sistemas aerobios

    .row.justify-content-center.align-items-center.mb-5
      p Su fundamento es la capacidad de ciertos organismos para desdoblar la materia orgánica en la presencia de oxígeno, por lo cual estos sistemas deben proporcionar el oxígeno necesario como las demás condiciones para el crecimiento y reproducción de estos organismos. Algunos procesos son:


    .row.justify-content-center.align-items-center
      .col-8.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img20.png", alt="Imágen decorativa").img20-22_tema2
      
      .col-lg-10
        .bg-fondo8.p-5.mb-5
          .row
            .col-lg-1.col-sm-1
            .col-lg-11.col-sm-11
              h4.text-center Lodos activados

              p.mb-0.text-center De acuerdo con el Ministerio de Medio Ambiente (2002), busca lograr en un tanque principal o aireador, la aglomeración de los microorganismos, y el suministro de aire por medios artificiales, bien sea por inyección de aire o de oxígeno puro. Los aglomerados están formados por organismos, principalmente bacterias heterofílicas, y por material coloidal orgánico e inorgánico. Aunque las bacterias son los principales agentes para la remoción de la materia orgánica, los aglomerados en sí son parte fundamental del proceso de descontaminación. Casi 40 % de la carga orgánica presente en las aguas es absorbida por interacciones iónicas y queda entrampada en el floc. Luego es hidrolizada por enzimas extracelulares antes de ser absorbida y metabolizada por las bacterias. (p.76). En este tipo de sistema se deben controlar los olores, caudales, sistema de aireación, lodos y espumas, entre otros.

    .row.justify-content-center.align-items-center
      .col-8.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img21.png", alt="Imágen decorativa").img20-22_tema2
      
      .col-lg-10
        .bg-fondo8.p-5.mb-5
          .row
            .col-lg-1.col-sm-1
            .col-lg-11.col-sm-11
              h4.text-center Filtros percoladores

              p.mb-0.text-center Son tanques con lechos de material grueso, usualmente de materiales sintéticos, en los cuales son aplicadas las aguas residuales; las bacterias están adheridas al lecho y el aire pasa a través de los espacios disponibles del mismo, suministrando oxígeno (este proceso puede ser natural o artificial), las bacterias presentes descomponen las aguas residuales a medida que están pasan (percolan) por el lecho, hacia el fondo del tanque, eventualmente llegará un punto que la capa bacteriana del lecho adquiere un espesor que impide el paso, se desprende hidráulicamente y deberá pasar a un clarificador para separar los fangos o lodos formados.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img22.png", alt="Imágen decorativa").img20-22_tema2
      
      .col-lg-10
        .bg-fondo8.p-5.mb-5
          .row
            .col-lg-1.col-sm-1
            .col-lg-11.col-sm-11
              h4.text-center Biodiscos

              p.mb-0.text-center Tiene el mismo fundamento de los filtros percoladores, solo que en este las bacterias están adheridas a medio soporte que rota lentamente, haciendo contacto cíclico, tomando los nutrientes y haciendo el proceso de descomposición.


    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Sistemas anaerobios

    .row.justify-content-center.align-items-center.mb-5
      p Son procesos de degradación de materia orgánica en ausencia de oxígeno; en este caso, los organismos utilizados no requieren oxígeno para su desarrollo y reproducción. Dentro de los procesos de este tipo se pueden encontrar:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-5
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.p-4(titulo="Filtros anaerobios")
            p Suelen ser tanques herméticos donde existe un medio de soporte fijo e inerte en el cual crecen los microorganismos, el agua pasa de forma ascendente o descendente a través del medio, usualmente no genera procesos de sedimentación asociados.
          
          .row.p-4(titulo="Proceso ascensional de manto de lodos anaerobio (UASB)")
            p En este caso el agua es introducida desde el fondo del tanque (reactor), a través de unas boquillas distribuidas y las bacterias se encuentran suspendidas en el medio acuoso, formando un lecho bacteriano por el cual pasa el agua. Este tipo de reactor suele tener una estructura de sedimentación integrada.

          .row.p-4(titulo="Reactor Anaerobio de flujo Pistón (RAP)")
            p Es una modificación de un filtro reactor por pantalla, se adiciona un lecho de empaquetamiento para mejorar la distribución hidráulica del flujo de agua, esto se da para evitar la compactación de la biomasa, aunque también al final posee un comportamiento de sedimentación

    .row.mb-5
     p En estos procesos se deben establecer acciones para el manejo de gases, control de olores, entre otros.

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3 Equipos o procesos de tratamiento terciario

    .row.mb-5
      p Este último componente por lo general se realiza cuando aún no se cumple con la caracterización del vertimiento bajo la normatividad aplicable, sin embargo, también es usado para procesos de reuso del agua en procesos productivos, por lo cual en esta etapa se puede dar eliminación de nutrientes, materia orgánica no biodegradable, sólidos en suspensión y materiales tóxicos. Dentro de los procesos de tratamiento terciario encontramos:

    .bg_img_01
      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="Imágen decorativa")
            h4 Filtración
            p Usando medios filtrantes como el carbón activado, dado que es altamente absorbente, logra remover olores y sustancias tóxicas, además que en este caso es usado para remover materia orgánica disuelta.
        
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img24.svg", alt="Imágen decorativa")
            h4 Osmosis inversa
            p En este caso el agua pasa por medio de una membrana, en contra del gradiente de concentración.
        
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img25.svg", alt="Imágen decorativa")
            h4 Desinfección
            p Es usado para la destrucción de microorganismos patógenos (bacterias, virus y protozoos), antes de verterlos a los cuerpos de agua receptores, se usan diferentes agentes desinfectantes como el cloro gaseoso, hipoclorito de sodio, dióxido de cloro, cloruro de bromo, o la radiación Ultravioleta (UV).


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-fondo9.p-5
          .row 
            .col-lg-2.col-sm-2
            .col-lg-10.col-sm-10
              p.text-center Para conocer al detalle cada proceso y unidad de tratamiento, te recomendamos la lectura del “Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000. Título - El tratamiento de aguas residuales. Dirección de agua potable y saneamiento básico”, el cual se encuentra en el material complementario.

              p.text-center  Encontrará una descripción detallada de los procesos de tratamiento, de la página 41 a la 119, y una descripción de la operación y mantenimiento, de la página 121 a la 127.


    separador

    #t_2_3.titulo-segundo.color-acento-botones
       h2 2.3 Tasa retributiva


    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 El Presidente de la República de Colombia (2012), en el artículo 7 del Decreto 2667, establece que la tasa retributiva es aquella que cobrará la autoridad ambiental competente a los usuarios por la utilización directa e indirecta del recurso hídrico como receptor de vertimientos puntuales directos o indirectos y sus consecuencias nocivas, originados en actividades antrópicas o propiciadas por el hombre y actividades económicas o de servicios, sean o no lucrativas.

      .col-lg-10
        .tarjeta-azul3.p-3.mb-4
          p.mb-0 La tasa retributiva por vertimientos puntuales, directos o indirectos se cobrará por la totalidad de la carga contaminante descargada al recurso hídrico. La tasa retributiva se aplicará incluso a la contaminación causada por encima de los límites permisibles, sin perjuicio de la imposición de las medidas preventivas y sancionatorias a que haya lugar. El cobro de la tasa no implica, bajo ninguna circunstancia, la legalización del respectivo.

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 El cobro de la tarifa de la tasa retributiva se estipula en el artículo 14, donde se establece que:

      .col-10.col-lg-5
        figure
          img(src="@/assets/curso/temas/tema2/img26.svg", alt="Imagen con la formula que se utiliza para establecer la tasa retributiva.")

    .row.justify-content-center.align-items-center.mb-5
      p Para cada uno de los parámetros objeto de cobro, la autoridad ambiental competente establecerá la tarifa de la tasa retributiva (Ttr), que se obtiene multiplicando la tarifa mínima (Tm) por el factor regional (Fr), es por ello que siempre se debe dirigir a revisar la última directriz regional referente a la tasa retributiva para hacer los cálculos correspondientes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-tablero3.p-5
          p Suponga que su planta de tratamiento queda ubicada en la zona de Cundinamarca, luego, al revisar los datos registrados por la autoridad competente, en este caso la Corporación Autónoma Regional de Cundinamarca indicó que la tasa retributiva para los parámetros de Sólidos Suspendidos Totales (SST) y Demanda Biológica de Oxígeno (DBO), es la siguiente: 

          .list.mb-3(data-aos="fade-left")
            .list__item
              .list__item__icon2
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='Imágen decorativa')
            .list__txt
              p.mb-0.tv.margin-icon <i>DBO</i> = $131,71 por Kg

          .list.mb-3(data-aos="fade-left")
            .list__item
              .list__item__icon2
                img(src='@/assets/curso/temas/tema1/icono2.svg', alt='Imágen decorativa')
            .list__txt
              p.mb-0.tv.margin-icon <i>SST</i> = $ 56, 09 por Kg

          .row
            .col-lg-10.col-sm-10        
              p Se debe contemplar la concentración de estos parámetros después del tratamiento dispuesto (la caracterización final del vertimiento). En este caso, los datos supuestos son:

              .list.mb-3(data-aos="fade-left")
                .list__item
                  .list__item__icon2
                    img(src='@/assets/curso/temas/tema1/icono2.svg', alt='Imágen decorativa')
                .list__txt
                  p.mb-0.tv.margin-icon <i>DBO</i> = 107, 7 mg/L con una carga mensual de 12.525 Kg/mes

              .list.mb-3(data-aos="fade-left")
                .list__item
                  .list__item__icon2
                    img(src='@/assets/curso/temas/tema1/icono2.svg', alt='Imágen decorativa')
                .list__txt
                  p.mb-0.tv.margin-icon <i>SST</i> = 3887 mg/L con una carga mensual de 45.257 Kg/mes


    separador

    #t_2_4.titulo-segundo.color-acento-botones
       h2 2.4 Seguridad y salud en el trabajo

    .row.justify-content-center.align-items-center.mb-5
      p Los invitamos a consultar el siguiente video donde se contextualiza seguridad y salud para el trabajo.

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/DnNqvxePf8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)







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
