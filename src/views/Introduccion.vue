<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      p En este componente se analizarán los conceptos básicos sobre la operación de sistemas y unidades de tratamiento de vertimientos, partiendo desde la identificación del origen de los mismos, hasta los diferentes tratamientos base existente, ampliando conocimientos de matemáticas e hidráulica básica y las operaciones inherentes en la práctica de estos conocimientos, los invitamos a ver la siguiente información. 


    .row.justify-content-center.align-items-center.mb-5
      SlyderB.mb-5(:datos="datosSlyder")



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'De acuerdo con el desarrollo social y económico del planeta, se ha evidenciado una curva exponencial en el crecimiento poblacional, lo cual ha generado no solo que se demanden más recursos como el hídrico, sino, a su vez, que se generen más aspectos ambientales como los vertimientos productos (resultantes del uso de ese recurso hídrico en diferentes actividades); sin embargo, menos del 5 % de las aguas de alcantarillado de las ciudades reciben tratamiento.',
        imagen: require('@/assets/curso/temas/introduccion/img1.svg'),
      },
      {
        texto:
          'Con la ausencia de tratamiento, las aguas son por lo general vertidas en aguas superficiales, creando un riesgo para la salud humana, la ecología y los animales.<br><br>En Latinoamérica, muchas corrientes son receptoras de descargas directas de residuos domésticos e industriales. ',
        imagen: require('@/assets/curso/temas/introduccion/img3.svg'),
      },
      {
        texto:
          'La poca disponibilidad de agua dulce y la falta de tratamiento de las aguas vertidas a las cuencas, ha generado un punto crítico ambiental, donde la disponibilidad del recurso hídrico se ha visto limitado, no solo por acceso sino por calidad. ',
        imagen: require('@/assets/curso/temas/introduccion/img4.svg'),
      },
      {
        texto:
          'En este componente se analizarán los conceptos básicos, la operación de sistemas de tratamiento de vertimientos, desde la identificación del origen de estos, hasta los diferentes tratamientos existentes, ampliando conocimientos de matemáticas e hidráulica básica y las operaciones inherentes.',
        imagen: require('@/assets/curso/temas/introduccion/img5.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
