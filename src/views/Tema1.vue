<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos básicos para el tratamiento de aguas residuales
      
    .row.justify-content-center.align-items-center.mb-5
      .bg-fondo1-tm1.p-4
        .row 
          .col-lg-7
            .hr-azul
            .row.justify-content-center
              .col-lg-11
                .bloque-texto-b.color-adicional-1.p-4
                  .bloque-texto-b__texto
                    p Conocer la cantidad de agua residual que se va a tratar en una Planta de Tratamiento de Aguas Residuales (PTAR) es de vital importancia, debido a que a partir de esta información se tomarán decisiones tales como la cantidad de productos químicos, el tamaño de la planta, la cantidad de personas a contratar y en general los costos de operación de la misma.         

          .col-lg-5


    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 1.1 Factores de conversión


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-azul2.p-5
        .row.justify-content-center
          .col-lg-11.mb-4
            p Debido a que existen diferentes fabricantes de PTAR en el mundo, se deben considerar las unidades con las que cada uno de ellos trabaja; en algunos casos utilizan en sus procesos productivos el Sistema Internacional de medidas (SI) y en otros casos el sistema anglosajón. Para poder hacer una correlación entre ellos y establecer los parámetros correctos de funcionamiento, existen los factores de conversión que son una equivalencia física con unidades de medición diferentes.

            p Existen dos formas de determinar la cantidad de agua, estas son: volumen y masa.

          .col-lg-5
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imágen decorativa')

              .tarjeta.color-adicional-2.p-4(x="93.3%" y="48.3%" numero="")
                p.texto-blanco Es el espacio que ocupa el agua residual.


    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Para el sistema internacional de medidas, el patrón estándar de medición de distancia es el metro, así pues, por ejemplo, la cantidad de agua presente en un recipiente cúbico que tiene un metro de largo en cada uno de sus lados será como se indica a continuación:

      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 1.
          | Representación de recipiente cúbico con medidas en metros

      .col-8.col-lg-3.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Muestra el recipiente cúbico con medidas en metros, esto es:<br>volumen = LxLxL<br>volumen = 1m x 1m x 1m<br>volumen = 1m cubico.')

      .col-lg-1
      
      .col-lg-4
        .tarjeta.tarjeta-amarilla.p-4
          p <i>Volumen = L x L x L</i>
          p <i>Volumen</i> = 1<i>m</i> x 1<i>m</i> x 1<i>m</i>
          p.mb-0 <i>Volumen</i> = 1<i>m<sup>3</sup></i>


    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Dentro del mismo sistema internacional de medidas se puede hacer la medición de la distancia también en centímetros, conociendo que un metro equivale a cien centímetros, se puede calcular el volumen del mismo cubo así:

      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 2.
          | Representación del recipiente cúbico en centímetros

      .col-8.col-lg-3.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', alt='Representa el recipiente cúbico con la información en centímetros, esto es:<br>Volumen = L x L x L<br>Volumen = 100cm x 100cm x 100cm<br>Volumen = 1.000.000 cm 3')

      .col-lg-1
      
      .col-lg-4
        .tarjeta.tarjeta-amarilla.p-4
          p <i>Volumen = L x L x L</i>
          p <i>Volumen</i> = 100 cm x 100 cm x 100 cm
          p.mb-0 <i>Volumen</i> = 1'000.000 cm<sup>3</sup>


    .row.justify-content-center.align-items-center.mb-5
      p De este modo se conoce que un metro (1 m) es equivalente a cien centímetros (100 cm), pero un metro cúbico (1 m<sup>3</sup>) equivale a un millón de centímetros cúbicos (1 '000.000 cm<sup>3</sup>)

      p.mb-5 Siguiendo el mismo método se puede hacer una relación entre las medidas de volumen del sistema internacional y las medidas de volumen del sistema anglosajón, teniendo en cuenta que un metro (1m) equivale a 3,28084 pies. De este modo, el mismo recipiente cúbico tiene como medidas las que se muestran en la figura 3:

      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 3.
          | Representación del recipiente cúbico en pies

      .col-8.col-lg-3.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img5.svg', alt='Representa el recipiente cúbico en pies, y se muestra su formula.<br>Volumen=LXLXL<br>Volumen=3.28.84 PIES x 3.28084  PIES x 3.28.84 PIES')

      .col-lg-1
      
      .col-lg-6
        .tarjeta.tarjeta-amarilla.p-4
          p <i>Volumen = L x L x L</i>
          p <i>Volumen</i> = 3.28084 <i>pies</i> x 3.28084 <i>pies</i> x 3.28084 <i>pies</i>
          p.mb-0 <i>Volumen</i> = 35.31 <i>pies<sup>3</sup></i>


    .row.justify-content-center.align-items-center.mb-5
      p.mb-4 Así se puede evidenciar que:
      .col-lg-6
        .tarjeta.tarjeta-azul2.p-2
          p.text-center.mb-0 #[i #[b Volumen del cubo =]] 1m<sup>3</sup> = 1'000.000 cm3 = 35.31 <i>pies<sup>3</sup></i>


    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Estas equivalencias permiten crear factores de conversión que facilitan los cambios de unidades en los volúmenes de agua residual que deben ser tratados. A continuación, algunos ejemplos para contextualizar.

      .col-lg-10
        .tarjeta.tarjeta-azul3.p-4.mb-4
          p.mb-0 Por ejemplo, una planta de tratamiento tiene una capacidad de 1.550 metros cúbicos de agua, se desea adquirir un producto químico para el tratamiento de dicha agua y el proveedor le pregunta por la cantidad de pies cúbicos de agua que va a tratar, para este caso se utiliza el factor de conversión así:

        .row.justify-content-center.align-items-center.mb-3
          .col-8.col-lg-3.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='Imagen que representa el volumen de agua en pies cúbicos por el factor de conversión.')

          .col-lg-9
            .tarjeta.tarjeta-amarilla2.p-5.mb-4
              .row.justify-content-center.align-items-center
                p <i>Volumen agua en pies cúbicos = Volumen de agua en</i> <i>m<sup>3</sup> x</i> <i>factor de conversión</i>    

        .row.justify-content-center.align-items-center.mb-3
          .col-8.col-lg-3.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imagen que representa la formula para medir el volumen de agua en pies cúbicos.')

          .col-lg-9
            .tarjeta.tarjeta-amarilla2.p-5.mb-4
              .row.justify-content-center.align-items-center
                .col-lg-8
                  p <i>Volumen agua en pies cúbicos</i> = 1550 <i>m3</i> x
                .col-6.col-lg-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img7-1.svg', alt='Imágen decorativa').img7-tm1          

        .row.justify-content-center.align-items-center
          .col-8.col-lg-3.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imagen que representa el total de la operación de volumen de agua en pies cúbicos.')

          .col-lg-9
            .tarjeta.tarjeta-amarilla2.p-5.mb-4
              .row.justify-content-center.align-items-center
                p <i>Volumen agua en pies cúbicos</i> = 54.737,73 pies3

    .row.mb-5
      p Presentamos el desarrollo de un ejercicio utilizando la fórmula de volumen tanque, para determinar su capacidad, analicemos con atención. 


    .row.justify-content-center.align-items-center.mb-5(title="Imagen que muestra el desarrollo de un ejercicio utilizando la fórmula del volumen del tanque con el fin de determinar su capacidad.")
      .col-lg-10
        .bg-tablero.p-5
          h5.texto-blanco.my-4 Ejercicio ejemplo:

          p.texto-blanco.mb-4 Se tiene un tanque con capacidad de almacenar 754 pies cúbicos de agua, ¿Cuántos centímetros cúbicos de agua puede almacenar ese mismo tanque?

          h5.texto-blanco Solución:

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.col-sm-8
              p.texto-blanco.text-center <i>Volumen tanque = 754 pies<sup>3</sup> x</i>
            
            .col-8.col-lg-3.col-sm-4
              figure
                img(src='@/assets/curso/temas/tema1/img9.svg', alt='Imágen decorativa').img9-tm1

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5
              .tarjeta.tarjeta-naranja.p-2
                h5.mb-0.text-center <b style= "color:#0D6A3E;"><i>Volumen tanque</i> = 21'353.724 <i>cm<sup>3</sup></i></b>


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        figure
          img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen que contiene definición de Masa: Es la cantidad de materia presente en el agua residual.')      


    .row.justify-content-center.align-items-center.mb-5
      p Al igual que con el volumen, la masa tiene unidades de medición diferentes, de acuerdo con el sistema que se esté utilizando como referencia. Para el sistema internacional de medidas, el patrón estándar para medir la masa es el kilogramo (kg), mientras que para el sistema inglés es la libra (lb).

      p Para el caso de la masa, un kilogramo (1 kg) equivale a 2,20462 libras, que es similar a decir que una libra (1lb) equivale a 0,45359 kilogramos.

      p Por ejemplo, se quiere transportar en un carro tanque 1400 kilogramos de agua residual, pero el proveedor del servicio le solicita la información en libras, para ello se debe utilizar el factor de conversión:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen que representa el ejemplo con el factor de conversión.')  

      p A continuación, se presentan las fórmulas y desarrollo de un ejercicio para determinar la cantidad de agua que se debe agregar para cumplir con las especificaciones señaladas:

    .row.justify-content-center.align-items-center.mb-5(title="Imagen que presenta las fórmulas y el desarrollo de un ejercicio.")
      .col-lg-10
        .bg-tablero.p-5
          h5.texto-blanco.my-4 Ejercicio ejemplo:

          p.texto-blanco.mb-4 Se tiene un equipo para hacer tratamiento de aguas residuales y dentro de las especificaciones técnicas se establece que no se deben exceder las 3000 libras de agua porque podría deformarse, la cantidad de agua en kilogramos que puede agregar son:

          h5.texto-blanco Solución:

          .row.justify-content-center.align-items-center.mb-5
            p.texto-blanco.text-center.mb-5 <i>Masa en kilogramos = masa en libras  x factor de conversión</i>

            .col-lg-6.col-sm-9
              p.texto-blanco.text-center <i>Masa en kilogramos</i> = 3000 lb x
            
            .col-6.col-lg-2.col-sm-3
              figure
                img(src='@/assets/curso/temas/tema1/img13.svg', alt='Imágen decorativa').img9-tm1

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5
              .tarjeta.tarjeta-naranja.p-2
                h5.mb-0.text-center <b style= "color:#0D6A3E;"><i>Masa en kilogramos</i>  = 1360,78 <i>kg</i></b>        


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-azul2.p-4
        .row.justify-content-center.align-items-center
          .col-8.col-lg-3
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img15.svg', alt='Imágen decorativa').img15-tm1

          .col-lg-9
            p Para estudiar cómo resolver ejercicios de factores de conversión, se invita a consultar el libro “Física: conceptos y aplicaciones” que se encuentra en el material complementario.

            p En las páginas 42 a 45 encontrará más detalles sobre el procedimiento a realizar en el uso de los factores de conversión y en la página 807 encontrará la tabla de factores de conversión de volumen y masa. 

            p Para consultarlo debe ingresar a la página de bibliotecas del SENA y posteriormente a bases de datos, una vez allí, consultar E-books y buscar: Física: conceptos y aplicaciones y seleccionar el autor, Paul Tippens.

    .row.bg1-tema1.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-3 Unidades de medida

    .row.bg-parrafo.align-items-center.mb-5(data-aos="fade-right")
      .col-1
      .col-11.mb-3
        p Cuando se desea hacer una medición de la cantidad total de agua residual dentro de la planta de tratamiento, es complicado saberlo debido a que algunos equipos no cuentan con un indicador de nivel. Para solucionar esto, el diseño, operación y cálculo de costos se hace a partir de una variable llamada caudal.

        p.mb-5 El caudal es la cantidad de agua que ingresa a la planta de tratamiento en un determinado tiempo; cuando la medición se hace a partir del volumen, se conoce como caudal volumétrico, así mismo, cuando la medición se hace a partir de la masa, se conoce como caudal másico. Normalmente se hace medición del caudal en la entrada y en la salida de la PTAR.


    .row.justify-content-center.align-items-center.mb-5
      h4.text-center.mb-4 Métodos de medición de caudal

      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img16.png', alt='Imágen decorativa')

      .col-lg-4
        p Existen tres métodos para medir el caudal, tanto a la entrada como a la salida de la PTAR. De acuerdo con las condiciones, la cantidad de agua y la geometría de las tuberías, equipos o accesorios por los que fluye el agua, se debe escoger el método. 

        p Describimos los métodos mencionados a estudiar: Método directo, Método de área velocidad y Método de la sección contraída: 


    .row.bg1-tema1.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-3 Método directo

    .row.justify-content-center.align-items-center.mb-5
      p Consiste en almacenar temporalmente una cantidad determinada de agua en un recipiente aforado con el fin de conocer el volumen o la masa que ha sido almacenada en un determinado lapso de tiempo. Este método se aplica cuando toda el agua afluente o efluente de la PTAR puede ser temporalmente almacenada; si parte del agua no puede ser almacenada en el recipiente aforado, como por ejemplo el agua que cae a través de una pared, o grandes caudales como un río que será tratado, no se recomienda el uso de este método.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.bg2-tema1.align-items-center.mb-5(data-aos="fade-right")
          h4.mt-3 Caudal volumétrico

        p En este método se determina el tiempo que se demora un afluente o un efluente de una PTAR en completar un volumen determinado por un recipiente aforado.

    .row.justify-content-center.align-items-center
      .col-lg-4
        .row.bg3-tema1.align-items-center.mb-5(data-aos="fade-right")
          h4.text-center.text-white.mt-3 <i>Caudal volumétrico (Q) =  V/t</i>

      .col-lg-10.mb-4
        p Por ejemplo, ¿cuál es el caudal volumétrico en litros por segundo de una PTAR que vierte 0,450 metros cúbicos de agua residual en 2 minutos?.

      .col-lg-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen que resuelve el interrogante planteado.')

      .col-lg-10
        p En este caso, además de la ecuación para calcular la cauda, se necesitan hacer dos factores de conversión, teniendo en cuenta que un metro cúbico equivale a mil litros y que un minuto equivale a sesenta segundos.

    .row.justify-content-center.align-items-center.mb-5(title="Imagen que muestra el desarrollo de un ejercicio.")
      .col-lg-10
        .bg-tablero.p-5
          h5.texto-blanco.my-4 Ejercicio ejemplo:

          p.texto-blanco.mb-4 Un operario de una planta de tratamiento de aguas residuales desea conocer su caudal de salida, para ello toma un recipiente aforado de 5 litros y lo ubica de tal forma que recolecta toda el agua efluente de la PTAR; para llegar a la línea que indica que se ha llegado a los 5 litros, se tardó 10 segundos. ¿Cuál será el caudal en este caso?


          h5.texto-blanco Solución:

          .row.justify-content-center.align-items-center.mb-4

            .col-7.col-lg-9
              p.text-center.texto-blanco <i>Caudal volumétrico (Q)=</i>
            
            .col-5.col-lg-3.col-sm-3
              figure
                img(src='@/assets/curso/temas/tema1/img18.svg', alt='Imágen decorativa').img18-tm1

          .row.justify-content-center.align-items-center.mb-4

            .col-6.col-lg-9
              p.text-center.texto-blanco <i>Caudal volumétrico (Q)=</i>
            
            .col-6.col-lg-3.col-sm-4
              figure
                img(src='@/assets/curso/temas/tema1/img19.svg', alt='Imágen decorativa').img19-tm1

          .row.justify-content-center.align-items-center.mb-5
            
            .col-7.col-lg-6
              p.text-center.texto-blanco <i>Caudal volumétrico (Q)= 0,5</i>
            
            .col-5.col-lg-3.col-sm-3
              figure
                img(src='@/assets/curso/temas/tema1/img20.svg', alt='Imágen decorativa').img20-tm1

    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.bg2-tema1.align-items-center.mb-5(data-aos="fade-right")
          h4.mt-3 Caudal másico

        p.mb-5 En este método se determina el tiempo que se demora un afluente o un efluente de una PTAR en completar una masa determinada, cuando el agua es contenida en un recipiente.

    .row.justify-content-center.align-items-center
      .col-lg-4
        .row.bg3-tema1.align-items-center.mb-5(data-aos="fade-right")
          h4.text-center.text-white.mt-3 <i>Caudal másico (▁(Q)) = m/t</i>

      .col-lg-10
        p Por ejemplo, se requiere determinar el caudal que tendrá un equipo que contiene 450 kg de agua si se le abre una llave inferior para desocuparse en 250 segundos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8 
        figure
          img(src='@/assets/curso/temas/tema1/img21.svg', alt='Imagen de demostración del ejercicio mencionado')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Debido a que para hacer medición de flujos másicos es necesario el uso de balanzas, esta práctica no es tan utilizada en la operación de PTAR.

    .row.bg4-tema1.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-3 Método de área velocidad

    .row.justify-content-center.align-items-center.mb-5
      p Este método se utiliza cuando el agua está siendo conducida a través de una canal, o tubería con forma geométrica definida; se basa en el principio de continuidad, que establece que el caudal es igual a la velocidad del agua por el área del corte transversal.


    .row.justify-content-center.align-items-center
      .col-lg-11
        .row.bg2-tema1.align-items-center.mb-5(data-aos="fade-right")
          h4.mt-3 Tuberías
                
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img24.svg', alt='Imágen decorativa')

      .col-lg-8
        p El caudal de la tubería depende del área y la velocidad del agua; por un lado, el área transversal que tendrá el agua será igual al área interna del tubo, por otro lado, para calcular la velocidad del agua se utilizan trazadores químicos o colorantes donde desde un punto determinado se pigmenta y metros más adelante se lleva control del tiempo en el cual el agua pigmentada empieza a aparecer, de este modo, conociendo la distancia que recorrió el agua y el tiempo que tardó en llegar el pigmento al segundo punto, se puede calcular la velocidad.

        p Por ejemplo, si se desea calcular el caudal que fluye en una tubería de diámetro 0,1 metros, donde el agua se transporta a una velocidad de 5 m/s. 

        p Lo primero que se debe hacer es calcular el área de la sección transversal de la tubería de diámetro 0,1 metros; esto se realiza a través de la ecuación del área del círculo:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img22.svg', alt='Imagen que muestra el desarrollo de un ejemplo para calcular el caudal.')



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        h5 Ejercicio ejemplo:

        p Calcular el caudal de agua que fluye a través de una tubería de diámetro 0,15 metros si esta se desplaza a 8 m/s.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img27.svg', alt='Imagen que muestra el ejemplo del desarrollo del calculo del caudal de agua.')


    .row.justify-content-center.align-items-center
      .col-lg-11
        .row.bg2-tema1.align-items-center.mb-5(data-aos="fade-right")
          h4.mt-3 Canaletas


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img29.png', alt='Imágen decorativa')      

      .col-lg-7
        p  El principio que se utiliza para determinar el caudal en una canaleta es el de área-velocidad, se debe conocer la geometría de la canaleta por donde está fluyendo el agua para poder determinar el caudal; en este caso, al agua tener contacto con la superficie, se pueden utilizar métodos visuales para determinar la velocidad con la que está fluyendo, una prueba muy común es por flotabilidad, donde se suelta un objeto que no se hunde, se mide una distancia determinada y se toma el tiempo que tarda el objeto en ir desde el punto inicial hasta el punto de referencia. El caudal en las canaletas se puede calcular así:

        p Se desea determinar el caudal que está fluyendo en una canaleta rectangular de base 0,50 metros y altura 0,2 metros cuando está totalmente llena, si la velocidad que se determinó por flotabilidad fue de 4 m/s.

    .row.justify-content-center.align-items-center.mb-5(title="Imagen que muestra el desarrollo del ejemplo de una operación de calculo del caudal a partir de una ecuación de continuidad.")
      .col-lg-9
        .tarjeta.tarjeta-azul2.p-5 
          .row.justify-content-center.align-items-center
            .col-10.col-lg-5.col-sm-8.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img30.svg', alt='Imágen decorativa').img30-tm1

            .col-lg-7
              .row.justify-content-center.align-items-center.mb-0.mb-lg-3
                i.mb-4 Área transversal de la canaleta = base x altura

                i.mb-4 Área transversal de la canaleta = (0,50 m) x (0,2 m)

                i.mb-4 Área transversal de la canaleta = 0,1 m<sup>2</sup>

                .tarjeta-cafe.p-3.mb-3
                  p.mb-0 Posteriormente, se calcula el caudal a partir de la ecuación de continuidad:

                p.text-center.mb-1 <i>Q = vA</i>
                p.text-center.mb-1 <i>Q</i> = (4 <i>m/s</i>) (0,1 <i>m2</i>)
                b.text-center.mb-1 <i>Q</i> = 0,4 <i>m<sup>3</sup>/s</i>

    .row.justify-content-center.align-items-center.mb-5
      h4 Ejercicio ejemplo:
      p ¿Cuál es el caudal máximo que se puede transportar en una canaleta cuadrada de lado 1,5 metros a una velocidad de 5 m/s?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p.mb-4 <i>Área transversal de la canaleta</i> = <i>Lado</i> x <i>Lado</i>
        p.mb-4 <i>Área transversal de la canaleta</i> = (1,5 <i>m</i>) x (1,5 <i>m</i>)
        p.mb-4 <i>Área transversal de la canaleta</i> = 2.25 <i>m<sup>2</sup></i>
      
        .cajon.color-secundario.p-3
          p.mb-0 Posteriormente, se calcula el caudal a partir de la ecuación de continuidad:

        p.text-center <i>Q = vA</i>
        p.text-center <i>Q</i> = (5 <i>m/s</i>) (2,25 <i>m<sup>2</sup></i>)
        p.text-center <b><i>Q</i> = 11,25 <i>m<sup>3</sup>/s</i></b>

      .col-6.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img31.png', alt='Imágen decorativa')        

    .row.bg4-tema1.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-3 Método de la sección contraída

    p Este método de medición de caudal funciona con la reducción del área por donde fluye el agua para que el nivel con respecto a la horizontal aumente, y dependiendo la altura ganada, se puede calcular la cantidad de agua que pasa por un determinado lapso de tiempo.

    .row.justify-content-center.align-items-center
      .col-lg-11
        .row.bg2-tema1.align-items-center.mb-5(data-aos="fade-right")
          h4.mt-3 Vertederos

        p De acuerdo con Pérez (2005), en su manual de prácticas de laboratorio de hidráulica define un vertedero como un dique o pared que presenta una escotadura de forma regular, a través de la cual fluye una corriente líquida como se indica a continuación en las figuras 4 y 5:

        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 4.
          | Flujos a través de vertederos

      .col-lg-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img32.svg', alt='Imagen que muestra el desarrollo del ejemplo de una operación de calculo del caudal a partir de una ecuación de continuidad.')      

      .col-lg-11
        P.mb-5 Nota.https://repositorio.unal.edu.co/handle/unal/21725 

        p.mb-5 De acuerdo con el tipo de geometría que tiene el vertedero, se han desarrollado experimentalmente ecuaciones que permiten determinar el caudal de acuerdo con la altura que obtiene el agua. De este modo se tiene:

        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 5.
          | Medidores de flujo

      .col-lg-6.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img33.svg', alt='Figura 5. contiene la descripción y dibujos de los medidores de flujo.')     
          figcaption Nota. Lux, M. (2010). Medidores de flujo en canales abiertos. Guatemala: Universidad de San Carlos. (pp.15-18)
      
      .col-lg-11
        p Cuando se quiere conocer el caudal de un vertedero, la variable principal es la cabeza (altura que adquiere el agua al salir del vertedero) y una variable secundaria que es la longitud de la cresta.

        p.mb-5 Por ejemplo, se desea conocer el caudal de un vertedero rectangular con contracción, el cual tiene una longitud de cresta de 2 metros y una cabeza de 0,1 metros.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        figure
          img(src='@/assets/curso/temas/tema1/img34.svg', alt='Imagen que muestra el desarrollo del ejemplo enunciado con anterioridad.')      


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        h5.mb-5 Ejercicio ejemplo:

        p.mb-5 ¿Cuál es el caudal de un vertedero trapezoidal que tiene una longitud de cresta de 3 metros y una cabeza de 0,15 metros?

      .col-lg-7
        figure
          img(src='@/assets/curso/temas/tema1/img35.svg', alt='Imagen que muestra el desarrollo del interrogante planteado.') 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-morada.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/img36.svg",alt="Imágen decorativa")
            .col-10.col-lg
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para ampliar la información sobre vertederos, lo invitamos a consultar el documento “Medidores de flujo en canales abiertos”, el cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-primario(href="https://www.academia.edu/20330463/Canal_Parshall" target="_blank")
                    span Ver más
                    i.fas.fa-link

    .row.mb-3
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Canaleta Parshall

    .row.justify-content-center.align-items-center.mb-5
      p Es uno de los elementos primarios en la medición del caudal, tanto en el afluente como en el efluente de las PTAR. Consta de una sección convergente que transporta el agua hacia la garganta donde se hace el incremento del nivel debido a la disminución de área y posteriormente una sección divergente que regula el flujo nuevamente a un comportamiento laminar.

      p El proceso identifica una aceleración del flujo que permite establecer una relación matemática entre la altura de carga o elevación que alcanza el agua y el caudal que circula a través del dispositivo, en la figura 6 se ilustran las partes del medidor Parshall.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 6.
          | Partes de un medidor Parshall

      .col-lg-8
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img37.svg', alt='Figura 6. Expone las partes de un medidor de Parshall')      

        p Fuente: https://instrumentacionuc.wixsite.com/facultad-ingenieria/copia-de-medicion-en-canales-abiert

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-morada.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/img38.svg",alt="Imágen decorativa")
            .col-10.col-auto
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para ampliar la información sobre canaletas Parshall, lo invitamos a consultar el documento “Serie autodidáctica de medición, canaleta Parshall”, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-primario(href="https://www.academia.edu/20330463/Canal_Parshall" target="_blank")
                    span Ver más
                    i.fas.fa-link

    .row.bg4-tema1.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-3 Métodos de estimación de caudal

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Cuando se desea conocer un aproximado del caudal de aguas residuales que se generarán como vertimiento a partir del uso de agua potable en actividades domésticas, se puede hacer una estimación a partir de la dotación de agua, que es la cantidad de agua que utiliza una persona en promedio para realizar todas sus actividades en el día a día.

      .col-lg-8
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img39.svg', alt='Imagen que muestra la fórmula de métodos de estimación de un caudal de agua.')        

      p En este caso, a mayor número de personas que utilicen los servicios de agua potable, mayor será la cantidad de vertimientos generados.

      p La tasa de retorno es la relación de la cantidad de agua que se vuelve vertimiento una vez es utilizada en las actividades domésticas, comparada con el total de agua; sus valores oscilan entre cero y uno, donde cero es por ejemplo, consumir un vaso de agua, ya que esta actividad genera cero vertimientos, y uno es por ejemplo, dejar una llave abierta, ya que la totalidad del agua se convierte en vertimientos. Cuando no se tiene un valor exacto de la tasa de retorno, se utiliza 0,80 como factor de diseño.

      p.mb-5 Por ejemplo, se desea construir una planta de tratamiento para una población de 5. 000 habitantes, la dotación de estas personas es de 170 litros por habitante al día ¿cuál será el caudal de vertimientos que generan?

      .col-lg-8
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img40.svg', alt='Imagen que muestra el desarrollo de la operación planteada.')   

      p Para poder tratar la cantidad de agua residual que esta población generará, se requiere diseñar una planta de tratamiento de aguas residuales con capacidad de 7,87 l/s.


    separador
    #t_1_2.titulo-segundo.color-acento-botones
       h2 1.2 Densidad

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 La densidad es la relación que existe entre la masa y el volumen, las sustancias puras tienen una densidad definida, por ejemplo, en el caso del agua la densidad es de 1000 kg/m3, sin embargo, la contaminación con sólidos puede variar este dato al igual que otros factores como la temperatura, ya que el agua se puede expandir o contraer con el calor.

      .col-lg-6
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img41.svg', alt='Imagen que expone la fórmula de la densidad.')  

      p Para efectos prácticos se tomará como valor de referencia la densidad de 1000 kg/m3, a través de este valor será posible determinar la masa presente en una PTAR, conociendo el volumen, o saber si un tanque logrará soportar un determinado volumen de agua sin deformarse por el peso.

      p Por ejemplo, un equipo está diseñado para contener máximo 460 kg, de lo contrario la unión que soporta la base puede verse afectada, ¿Cuántos metros cúbicos de agua puede contener?

      p Conociendo que la densidad del agua es 1000 kg/m3, se tiene que:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema1/img42.svg', alt='La imagen demuestra el desarrollo del  ejercicio que da respuesta al interrogante planteado.')      


    separador
    #t_1_3.titulo-segundo.color-acento-botones
       h2 1.3 Aguas residuales o vertimientos

    .row.justify-content-center.align-items-center.mb-5
      p.mb-4 Con el fin de definir qué son las aguas residuales, es necesario primero referenciar algunos conceptos base para comprender el origen y la importancia de las aguas residuales:

    .row.mb-5
      .col-lg-7
        .list(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon El sistema hídrico. 

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 A continuación, se muestra la configuración del sistema hídrico 

      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 7.
          | Configuración sistema hídrico

    .row.justify-content-center.mb-5(title="La imagen demuestra el desarrollo del  ejercicio que da respuesta al interrogante planteado.")
      .col-lg-10
        .row.mb-3
          .col-2.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/img43.svg', alt='Imágen decorativa')

          .col-10.col-lg-3
            h5 Quebradas
            p Son corrientes de agua de bajo caudal provenientes de los cerros orientales.

          .col-2.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/img44.svg', alt='Imágen decorativa')

          .col-10.col-lg-3
            h5 Ríos
            p Son corrientes de agua provenientes de las quebradas y del drenaje de la ciudad.

          .col-2.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/img45.svg', alt='Imágen decorativa')

          .col-10.col-lg-3
            h5 Humedales
            p Son ecosistemas de gran valor natural y cultural, donde se encuentran áreas acuáticas y terrestres. Cuentan con una gran diversidad de especies animales y vegetales. 

        figure
          img(src='@/assets/curso/temas/tema1/img46.svg', alt='Imágen decorativa')

        .tarjeta-amarilla.p-4.mb-3
          p.mb-0 El sistema de drenaje funciona a través del alcantarillado público, compuesto por conductos cerrados y canales abiertos, que recogen, transportan y disponen las aguas residuales y lluvias de la ciudad a las plantas de tratamiento o a los cuerpos de agua, según sea el caso. El alcantarillado público de la empresa presta el servicio de dos tipos de alcantarillado, el sanitario o de aguas residuales y el pluvial o de aguas lluvias.

    .row.justify-content-center.align-items-center.mb-5
      p El sistema hídrico, es el conjunto de los cuerpos de agua naturales y/o artificiales, que hacen parte del drenaje de una ciudad, municipio o región, estos incluyen tanto la ronda hidráulica como su zona de manejo y preservación ambiental; los elementos que lo conforman son los humedales, ríos, quebradas y canales pertenecientes a las cuencas y su eje articulador.

      p En el caso de Bogotá, por ejemplo, el sistema hídrico se encuentra articulado por 13 humedales, 4 ríos, y más de 150 quebradas y canales pertenecientes a las cuencas Torca, Salitre, Fucha, Tunjuelo y su eje articulador el Río Bogotá.

    .row.mb-5
      .col-lg-7
        .list(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Origen de las aguas residuales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img47.png', alt='Imágen decorativa')        

      .col-lg-8
        p  Aunque suele indicarse que el 80% del uso del agua es para fines agrícolas, en los cuales se toma el agua usualmente de forma directa del sistema hídrico y posteriormente se devuelve al mismo con otras condiciones, en los últimos años se ha indicado que ese 20% que es para ciudades e industrias ha ido aumentando; aun así, aunque sea en menor proporción que el uso agrícola, en ese aproximado de 20% se centran la mayor cantidad de problemáticas asociadas al recurso, comenzando por la proyección de uso del mismo por crecimiento poblacional.

        p En cualquier caso, siempre asociado al uso se evidenciará de forma directa una contaminación del agua resultante, lo que la convierte en un agua residual o vertimiento; contaminación que puede ser dada por diferentes factores, como: los sólidos suspendidos, los productos químicos, fertilizantes, detergentes, metales pesados, microorganismos entre otros.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-morada.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/img38.svg",alt="Imágen decorativa")
            .col-10.col-lg
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para comprender mejor la contaminación en el agua, lo invitamos a consultar el libro <i>“El agua”</i>, el cual se encuentra en el material complementario.
                  p De las páginas 127 a la 156 encontrará el capítulo IV, los problemas del agua, en el cual podrá hacer un reconocimiento de los diferentes orígenes de las aguas residuales y sus problemáticas más relevantes.
                  p Para consultarlo debe ingresar a la página de bibliotecas del SENA y posteriormente a bases de datos, una vez allí, consultar E-libro y buscar: generación de aguas residuales, dar clic en el segundo libro que indica AGUA, de Guerrero Legarreta, Manuel.

                .col-sm-auto
                  a.boton.color-primario(href="https://biblioteca.sena.edu.co/F/TVYNF98RI79U6DIFE236T5LD7CUR9VIKJHPQMSX19QABM6CC7J-19534?func=full-set-set&set_number=004676&set_entry=000001&format=999" target="_blank")
                    span Ver más
                    i.fas.fa-link



    .row.justify-content-center.align-items-center.mb-5
      p De acuerdo con el Banco Interamericano de Desarrollo y la Asociación Nacional de Industriales (ANDI) (1997), en su documento manual para la caracterización de aguas residuales industriales encontramos las siguientes definiciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-5
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.p-4.p-lg-5(titulo="Vertimiento")
            .col-md-7.mb-4.mb-md-0
              p Un vertimiento es cualquier descarga líquida de un residuo a un cuerpo de agua o al alcantarillado público. Se determina mediante la caracterización.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img48.svg', alt='Imágen decorativa')

          .row.p-4.p-lg-5(titulo="Caracterización")
            .col-md-7.mb-4.mb-md-0
              p Es la determinación de la cantidad y calidad de las aguas residuales, se realiza mediante la toma de una muestra representada en una caja de inspección externa o de aforo y posteriormente se hace el análisis de las aguas en un laboratorio acreditado por el IDEAM.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img49.png', alt='Imágen decorativa')

          .row.p-4.p-lg-5(titulo="Punto de descarga")
            .col-md-7.mb-4.mb-md-0
              p Uno de los elementos que se debe tener en cuenta al momento de hablar de vertimientos es el punto de descarga, que es aquel donde convergen una o varias redes de aguas residuales en un receptor, ya sea un cauce o alcantarillado. Dicha descarga puede provenir de uno o varios procesos para formar una sola descarga total.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img50.svg', alt='Imágen decorativa')


      p Para realizar este análisis se debe tener conocimiento de los sistemas de drenaje de los procesos de la planta, para facilitar así la identificación de los sitios que posteriormente serán utilizados como puntos de muestreo. Por otro lado, se debe tener en cuenta el origen de los vertimientos y el tipo de descarga que se genera.

    .row.mb-5
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Generalidades de las aguas residuales

      p Las aguas residuales pueden tener diferentes impactos ambientales, desde su generación hasta su disposición final, los iniciales tienen mayor impacto en la salud por temas relacionados con seguridad y salud en el trabajo puesto que, el manejo inadecuado del vertimiento puede generar diferentes enfermedades, bien sea por olores, vapores, o por contacto con elementos ácidos o básicos del agua residual. Generalmente, estos impactos son percibidos, tanto interna como externamente de los generados, y es por ello, que se decide realizar tratamientos para evitar que su impacto se magnifique. En la siguiente figura se muestra la relación del agua residual con los cuerpos de agua.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 8.
          | Relación del agua residual con los cuerpos de agua

      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema1/figura8.svg', alt='Figura 8. presenta a través de un esquema la relación del agua residual con los diferentes cuerpos de agua existentes.')    

    .row.justify-content-center.align-items-center.mb-5
      p Sin embargo, cuando no son tratados en el lugar de origen, se suele realizar un proceso de transporte fuera de la empresa u organización generadora, en este caso son vertidos directamente a una red de alcantarillado en donde por sus múltiples características puede producir una afectación al funcionamiento del mismo, como el daño de uniones y estructuras de cemento, si contiene sustancias corrosivas; reducción del diámetro efectivo de las tuberías cuando contienen grandes cantidades de aceites y grasas o en casos extremos taponamiento, lo cual se puede traducir en daños e impactos sociales por inundaciones; proliferación de vectores y olores ofensivos; además, cuando llega el agua residual al  sistema hídrico sin tratamientos, se puede presentar afectación del equilibrio biológico, por las altas temperaturas, los posibles detergentes o cargas orgánicas, entre otros, generando contaminación del suelo, flora, fauna  y del agua.

      p En el caso contrario, cuando las aguas residuales si son tratadas y se llevan a una planta para ello, se logra remover las diferentes sustancias contaminantes, mejorando sus características para que cuando se realice la disposición final no genere impactos tan significativos; es importante no desconocer que aun así, realizar un PTAR genera impactos negativos asociados principalmente a aspectos paisajísticos, proliferación de plagas y generación de olores, sin embargo estos pueden ser controlados y gestionados.

    .row.mb-5
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Tipos de aguas residuales

      p De acuerdo con la Resolución 0631 de 2015, artículo 2, se pueden diferenciar dos tipos de aguas residuales para ampliar el concepto los invitamos a consultar el siguiente video:

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/hi-seNa6Jzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Tipos de descargas

      p Conocer el tipo de descarga del agua residual es un elemento o factor de decisión porque de este dependerá el volumen que se registrará y por consiguiente, la cantidad de agua que debe ser tratada. En la siguiente figura,  se presentan los diferentes tipos de descargas:


    .row.justify-content-center.align-items-center.mb-5(title="Figura 9. Expone los tipos de descargas de agua residual que son:<br>Descarga periódica irregular<br>Descarga periódica regular<br>Descarga Irregular")
      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 9.
          | Tipos de descargas de agua residual  

      .col-8.col-lg-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img51.svg', alt='Imágen decorativa')        

      .col-8.col-lg-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img52.svg', alt='Imágen decorativa')  

      .col-8.col-lg-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img53.svg', alt='Imágen decorativa')  

      .col-8.col-lg-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img54.svg', alt='Imágen decorativa')  

    .row.mb-5
      .col-lg-7.mb-4
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon1
              img(src='@/assets/curso/temas/tema1/icono1.svg', alt='Imágen decorativa')
          .list__txt
            h3.mb-0.tv.margin-icon Tipos de fuente receptora

      p En el caso de los vertimientos o aguas residuales, las fuentes receptoras pueden ser:

      .col-lg-7
        .list.mb-3(data-aos="fade-left")
          .list__item
            .list__item__icon2
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='Imágen decorativa')
          .list__txt
            p.mb-0.tv.margin-icon El alcantarillado.

      .col-lg-7
        .list.mb-3(data-aos="fade-left")
          .list__item
            .list__item__icon2
              img(src='@/assets/curso/temas/tema1/icono2.svg', alt='Imágen decorativa')
          .list__txt
            p.mb-0.tv.margin-icon Cauce receptor (mares, lagos, ríos, quebradas, etc.).

    .row.bg4-tema1.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-3 Características de los vertimientos

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Las características del agua residual van enfocadas a la cantidad y condiciones físico-químicas y  microbiológicas que  presenta el agua en el momento del muestreo. En términos generales, los parámetros básicos que caracterizan el agua son:

      .col-lg-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img55.svg', alt='Imagen que describe los parámetros que caracterizan el agua que son:<br>DBQ. DQO<br>Sólidos totales. que son sólidos suspendidos')       

      p Sin embargo, es la normatividad legal vigente la que debe determinar qué parámetros aplican y deben ser valorados por sector económico, al igual que brinda la indicación de los límites permisibles para su disposición final.

      p Con el fin de ampliar la información, lo invitamos a estudiar la Resolución 0631 del Ministerio de Ambiente y Desarrollo Sostenible, que se encuentra en el material complementario. Indagar desde el Capítulo III, Valores límites máximos permisibles microbiológicos en vertimientos puntuales de aguas residuales (ARD y ARnD) a cuerpos de aguas superficiales.

    .row.bg4-tema1.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-3 Concentración de contaminantes

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Cuando se hacen los ensayos de laboratorio, de acuerdo con los métodos estandarizados, se obtiene la concentración de contaminantes en el agua, los cuales representan la masa de contaminante presente en un volumen de agua. Se establecen mediante la ecuación:

      .col-lg-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img56.svg', alt='Imagen que muestra la ecuación de la concentración de contaminante.')

      p Es importante hacer una salvedad: cuando dos tipos de aguas se mezclan, las concentraciones iniciales no se suman para obtener una final, por ejemplo:

      p Se tiene un tanque A con aguas residuales que tienen una concentración de sólidos suspendidos totales de 100 mg/L y otro tanque B con aguas residuales con una concentración de 500 mg/L.

      p  ¿Cuál será la concentración final si se mezclan en un tanque C 100 litros de cada uno de los tanques A y B?


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 10.
          | Cálculo de concentración en la mezcla de aguas residuales

      .col-lg-7.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img57.svg', alt='Imagen que esquematiza el cálculo de la concentración de una mezcla de aguas residuales.')


      p.mb-5 Para poder calcular la concentración resultante, se debe hacer el siguiente análisis: del tanque A se toman 100 litros para la mezcla y la concentración de sólidos es de 100 mg/L, eso quiere decir que la masa de sólidos aportado por el agua presente en el tanque A es:

      .col-lg-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img58.svg', alt='Imagen que muestra el cálculo de la concentración resultante.')

      p.mb-5 De forma análoga, se calcula la masa de sólidos aportados por el agua residual del tanque B:

      .col-lg-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img59.svg', alt='Imagen que muestra la manera de calcular la masa de sólidos del agua residual.')

      p.mb-5 Es decir, que la masa de sólidos presente en el tanque C, será la suma de las aportadas por los 100 litros de cada tanque A y B.

      .col-lg-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img60.svg', alt='Imagen que muestra el resultado de la masa de sólidos resultante de la suma de la masa aportados por los tanque residuales del tanque A y B.')

      p.mb-5 Sin embargo, para calcular la concentración hace falta conocer el volumen, debido a que tanto el tanque A como el tanque B aportaron cada uno 100 litros; el volumen en el tanque C será de 200 litros, de este modo se puede calcular la concentración como:

      .col-lg-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img61.svg', alt='Imagen que muestra como se calcula la concentración y como se debe conocer el volumen.')

      p De este modo, se determina que las concentraciones de contaminantes no se suman cuando se hacen mezclas de diferentes tipos de agua residual.

      p Al igual que el agua puede mezclarse a partir de dos tanques, también podría dividirse, así como se presenta en el siguiente ejemplo a través de la figura:

      p El agua residual almacenada en el tanque D tiene una concentración de grasas y aceites de 450 mg/l y se desea que sea dividida en dos tanques E y F, para hacer ensayos de tratabilidad ¿Cuál será la concentración en los tanques E y F?


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 11.
          | Tanques de concentración

      .col-lg-7.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img62.svg', alt='Figura 11. esquema de estructura de un tanque de concentración.')

      p Cuando el agua residual que se almacena en un tanque se divide en dos diferentes (o más) el agua presente en cada uno de los nuevos tanques va a tener la misma concentración de contaminante del tanque inicial.

    .row.bg4-tema1.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-3 Carga contaminante

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 En algunas ocasiones, es necesario conocer la cantidad de contaminante en masa que se está vertiendo por unidad de tiempo, esto permite conocer, por ejemplo, costos de tratamiento, espacios requeridos para disponer los contaminantes, vida útil de accesorios y otras características en las PTAR. Para ello se debe calcular la carga contaminante.

      .col-lg-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img63.svg', alt='Imagen que muestra la formula para conocer la carga contaminante.')

      p.mb-4 La carga contaminante, depende de la masa del mismo; sin embargo, para conocer la masa de contaminante es necesario hacer los análisis de laboratorio, estos análisis dan como resultado la concentración, así pues, se debe generar una relación entre la concentración obtenida como resultado de los ensayos de laboratorios y la carga contaminante con la cual se trabaja en la PTAR:

      .col-lg-8.mb-4
        .tarjeta-gris2.p-1
          p.mb-0.text-center <i>Carga contaminante = concentración contaminante x caudal</i>

      p.mb-4 Haciendo un análisis dimensional se tiene que la carga contaminante tiene unidades de masa sobre tiempo:

      .col-lg-8.mb-4
        .tarjeta-gris2.p-1
          p.mb-0.text-center <i>Carga contaminante (mg/s) = concentración contaminante (mg/l)  x caudal (l/s)</i>

      p Cuando se trabaja en PTAR municipales, las unidades de miligramos son muy pequeñas para expresar las cantidades de contaminantes removidas, al igual que los segundos son intervalos de tiempo muy pequeños, para estos casos se plantea trabajar con la carga contaminante diaria que se expresa en Kg así:


    .row.justify-content-center.align-items-center.mb-5
      figure.mb-5
        img(src='@/assets/curso/temas/tema1/img66.svg', alt='Imagen que muestra la formula de la carga contaminante diaria expresada en kilogramos.')    

      p En dado caso que la PTAR no trabaje continuamente durante todos los segundos del día, la equivalencia de 86.400 segundos al día se debe reemplazar por el tiempo real de operación en segundos.

      p Por ejemplo, una PTAR tiene un sedimentador que puede separar hasta 100 kg de sólidos de las aguas residuales. Una vez alcanza este valor, debe limpiarse para poder seguir trabajando. Si el caudal que maneja la PTAR es de 5 l/s y la concentración de sólidos es de 300 mg/l ¿Cuántas horas podrá operar el sedimentador antes de llenarse totalmente?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img69.svg', alt='Imagen que despeja la fórmula de la carga contaminante en miligramos por segundo, luego muestra la fórmula para calcularla en kilogramos porhora para luego relacionarla con el tiempo de operación del sedimentador.<br>Finalmente muestra la formular y el resultado del tiempo de operación máxima del sedimentador.')


    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Cuando se quieren hacer mezclas de aguas residuales, las cargas contaminantes se suman, como se presenta en el siguiente ejemplo:

      .col-lg-10
        .tarjeta-azul3.p-4
          p El tanque G tiene agua residual con una concentración de 600 mg/l de grasas y aceites; en la parte inferior tiene una llave de bola y permite el flujo del agua a razón de 4 l/s, el tanque H tiene una concentración de grasas y aceites de 900 mg/l y una llave de globo en la parte inferior que permite el paso de agua a una razón de 3 l/s. Si las dos llaves se abren a tiempo para almacenar el agua en un tanque I. ¿Cuál será la carga contaminante? ¿Cuál será la concentración de la mezcla de agua una vez hayan pasado 5 minutos?

    .row.justify-content-center.align-items-center.mb-5
      p La siguiente figura muestra la representación de caudales cuando se realizan mezclas de aguas residuales y sus cargas contaminantes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-figura.mb-5
          h5.mb-0 Figura 12.
          | Caudales

      .col-lg-7
        figure
          img(src='@/assets/curso/temas/tema1/img70.svg', alt='Figura 12. Expone la estructura de los caudales.')      

    .row.justify-content-center.align-items-center.mb-5
      p.mb-4 Para conocer la concentración del agua resultante en el tanque I, se debe hacer uso primero de las cargas contaminantes, porque las concentraciones no se suman.

      .col-lg-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img71.svg', alt='Imagen que muestra el desarrollo de la operación para conocer la concentración del agua resultante en el tanque I.')
      
      p.mb-4 Del mismo modo con el tanque H:

      .col-lg-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img72.svg', alt='Imagen que muestra la operación que debe hacerse para conocer la concentración del agua resultante del tanque H.')
      
      p.mb-4 La carga contaminante en el tanque I será la suma de G y H:

      .col-lg-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img73.svg', alt='Imagen que soporta la explicación del resultado de la carga contaminante en el tanque I.')

      p.mb-4 Se conoce así que la carga contaminante es de 5100 mg/s en el tanque I. Para conocer la concentración se debe tener en cuenta el tiempo en segundos que duran abiertas las llaves, así:

      .col-lg-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img74.svg', alt='Imagen que muestra como luego de conocer la carga contaminante del tanque I, se pasa a conocer la concentración atendiendo el tiempo en segundos que duran las llaves.')

      p Del mismo modo, se calcula el volumen de agua una vez transcurran los cinco minutos. Inicialmente, se debe calcular el caudal de agua que llega al tanque I, este es igual a la suma de los caudales que salen de los tanques G y H.


    .row.justify-content-center.align-items-center.mb-5(title="Imagen que muestra como se calcula el volumen del agua luego de haber transcurrido 5 minutos de tiempo.")
      .col-lg-10
        .bg-tablero4.p-3.p-lg-5
          .col-lg-8.mb-4
            p.text-center.texto-blanco <i>Caudal en tanque I = Caudal en tanque G + Caudal en tanque H</i>

            p.text-center.texto-blanco <i>Caudal en tanque I</i> = 4 <i>l/s</i>  + <i>3 l/s</i>
            
            p.text-center.texto-blanco <i>Caudal en tanque I</i> =7 <i>l/s</i>
            
            p.texto-blanco Ahora sí se puede calcular el volumen de agua que ha ingresado al tanque I, una vez transcurren los cinco minutos:
            
            p.text-center.texto-blanco <i>Volumen en tanque I = Caudal en tanque I x tiempo</i>
            
            p.text-center.texto-blanco <i>Volumen en tanque I</i> = 7 <i>l/s</i> x 300 <i>s</i>
            
            p.text-center.texto-blanco <i>Volumen en tanque I</i> = 2100 <i>l</i>
            
            p.texto-blanco Una vez se conoce la masa de contaminante presente en el tanque y el volumen, se procede a calcular la concentración de contaminante.
            
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-7.col-sm-6
                p.texto-blanco <i>Concentración contaminante tanque I =</i>
              
              .col-8.col-lg-5.col-sm-6.mb-2
                figure
                  img(src='@/assets/curso/temas/tema1/img75.svg', alt='Imágen decorativa')

            .row.justify-content-center.align-items-center
              .col-sm-6.col-lg-7
                p.texto-blanco <i>Concentración contaminante tanque I =</i> 
              
              .col-8.col-lg-5.col-sm-6.mb-2           
                figure
                  img(src='@/assets/curso/temas/tema1/img76.svg', alt='Imágen decorativa')





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
